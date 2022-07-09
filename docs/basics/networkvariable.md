---
id: networkvariable
title: NetworkVariable
sidebar_label: NetworkVariable
---

## Introduction
At a high level, a `NetworkVariable` is a way to synchronize a property (variable) between a server and clients without having to use custom messages or RPCs. Since `NetworkVariable` is basically a wrapper container of the stored value of type `T`, you must use the `NetworkVariable.Value` property to access the actual value being synchronized. A `NetworkVariable.Value` is synchronized with:
- Newly joining clients (i.e. "Late Joining Clients")
    - When the associated `NetworkObject` of a `NetworkBehaviour` is spawned, the `NetworkVariable`'s current state (value) is already synchronized, on the client side, upon `NetworkBehaviour.OnNetworkSpawn` being invoked. 
- Connected clients
    - When a `NetworkVariable` value changes, any connected clients that subscribed to `NetworkVariable.OnValueChanged` event (prior to the value being changed) will be notified of the change.
        - Two parameters are passed to any `NetworkVariable.OnValueChanged` subscription (or directly assigned callback):
            - First parameter: The previous value before the value was updated
            - Second parameter: The current value that is synchronized with the server and is the "current" `NetworkVariable.Value`.

### NetworkVariable General Requirements
A `NetworkVariable`:
- Property *must* be defined within a `NetworkBehaviour` derived class attached to a `GameObject`
    - The `GameObject` or a parent `GameObject` must also have a `NetworkObject` component attached to it.
- A `NetworkVariable`'s type (`T`) must be of an unmanaged `Type`.

:::important
When a client first connects, it will be synchronized with the current value of the `NetworkVariable`.  Typically, clients should register for `NetworkVariable.OnValueChanged` within the OnNetworkSpawn method.  
*But why?*
When a `NetworkBehaviour`'s `Awake` and `Start` methods are invoked all depends upon whether the `NetworkObject` is an in-scene placed or dynamically spawned `NetworkObject`.  
:::

:::tip
If you need to initialize other components or objects based on a `NetworkVariable`'s initial synchronized state (value), then you might think about having a common method that is invoked on the client side within the `NetworkVariable.OnValueChanged` callback (if assigned) and `NetworkBehaviour.OnNetworkSpawn` method.
:::

### Synchronization and Notification Example:
In order to fully understand how a `NetworkVariable` is initially synchronized and when a client will receive notifications from `NetworkVariable.OnValueChanged`, we have provide you with a simple example:
 ```csharp
public class TestNetworkVariableSynchronization : NetworkBehaviour
{
    private NetworkVariable<int> m_SomeValue = new NetworkVariable<int>();
    private const int k_InitialValue = 1111;

    public override void OnNetworkSpawn()
    {
        if (IsServer)
        {
            m_SomeValue.Value = k_InitialValue;
            NetworkManager.OnClientConnectedCallback += NetworkManager_OnClientConnectedCallback;
        }
        else
        {
            if (m_SomeValue.Value != k_InitialValue)
            {
                Debug.LogWarning($"NetworkVariable was {m_SomeValue.Value} when spawned when it really should have been {k_InitialValue}");
            }
            else
            {
                Debug.Log($"NetworkVariable is {m_SomeValue.Value} when spawned.");
            }
            m_SomeValue.OnValueChanged += OnSomeValueChanged;
        }
    }

    private void NetworkManager_OnClientConnectedCallback(ulong obj)
    {
        StartCoroutine(StartChangingNetworkVariable());
    }

    private void OnSomeValueChanged(int previous, int current)
    {
        Debug.Log($"Detected NetworkVariable Change: Previous: {previous} | Current: {current}");
    }

    private IEnumerator StartChangingNetworkVariable()
    {
        var count = 0;
        var updateFrequency = new WaitForSeconds(0.5f);
        while (count < 4)
        {
            m_SomeValue.Value += m_SomeValue.Value;
            yield return updateFrequency;
        }
        NetworkManager.OnClientConnectedCallback -= NetworkManager_OnClientConnectedCallback;
    }
}
```
In the above example:
 - The server initializes the `NetworkVariable` upon the associated `NetworkObject` being spawned.
 - The client confirms that the `NetworkVariable` is synchronized to the initial value set by the server and assigns a callback method to `NetworkVariable.OnValueChanged`.
   - Once spawned, the client will be notified of any changes made to the `NetworkVariable`.

:::tip
If you were to attach the above script to an in-scene placed `NetworkObject`, make a stand alone build, run the stand alone build as a host, and then connect to that host by entering play mode in the editor, you would see (in the console output):
- The client side `NetworkVariable` value is the same as the server when `NetworkBehaviour.OnNetworkSpawn` is invoked.  
- The client detects any changes made to the `NetworkVariable` after the in-scene placed `NetworkObject` is spawned.  
_This works the same way with dynamically spawned `NetworkObject`s._
:::

:::important
The above example is only to test both the initial client synchronization of the value and when the value changes.  It was intentionally written to only be an example, and if you "late join" a 2nd client it will throw the warning about the `NetworkVariable.Value` not being the initial value.  This example was really meant to work with a single server or host and a single client.
:::

### OnValueChanged Example:
While the first example highlighted the differences between synchronizing a `NetworkVariable` with newly joining clients and notifying connected clients when a `NetworkVariable` changes, it didn't really provide any concrete example usage.  The next example demonstrates a simple server authoritative `NetworkVariable` being used to track the state of a door (i.e. open or closed):

```csharp
public class Door : NetworkBehaviour
{
    public NetworkVariable<bool> State = new NetworkVariable<bool>();

    public override void OnNetworkSpawn()
    {
        State.OnValueChanged += OnStateChanged;
    }

    public override void OnNetworkDespawn()
    {
        State.OnValueChanged -= OnStateChanged;
    }

    public void OnStateChanged(bool previous, bool current)
    {
        // note: `State.Value` will be equal to `current` here
        if (State.Value)
        {
            // door is open:
            //  - rotate door transform
            //  - play animations, sound etc.
        }
        else
        {
            // door is closed:
            //  - rotate door transform
            //  - play animations, sound etc.
        }
    }

    [ServerRpc(RequireOwnership = false)]
    public void ToggleServerRpc()
    {
        // this will cause a replication over the network
        // and ultimately invoke `OnValueChanged` on receivers
        State.Value = !State.Value;
    }
}
```
In the above example, we demonstrate how you can maintain a server authoritative `NetworkVariable` by using a non-ownership based server RPC (i.e. `RequireOwnership = false` means non-owners can invoke it) so any client can notify the server that it is performing an "action" on the door. Each time the door is used by a client, the `Door.ToggleServerRpc` would be invoked and the server would toggle the state of the door. Upon this happening, all clients are updated with the newly changed state and notified, via `NetworkVariable.OnValueChanged`, that the door's state has changed.

However, what if you wanted to adjust who could write to or read from the `NetworkVariable`?  The answer: `NetworkVariable` permissions.

## Permissions
The `NetworkVariable` constructor can take up to 3 parameters:
```csharp
public NetworkVariable(T value = default, NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server);
```
As you can see by the above constructor declaration, the default permissions are:
- *Server:* Has read and write permissions
- *Clients:* Have read only permissions.

Let's look at the two types of permissions defined within [NetworkVariablePermissions.cs](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/release/1.0.0/com.unity.netcode.gameobjects/Runtime/NetworkVariable/NetworkVariablePermission.cs):

```csharp
    /// <summary>
    /// The permission types for reading a var
    /// </summary>
    public enum NetworkVariableReadPermission
    {
        /// <summary>
        /// Everyone can read
        /// </summary>
        Everyone,
        /// <summary>
        /// Only the owner and the server can read
        /// </summary>
        Owner,
    }

    /// <summary>
    ///  The permission types for writing a var
    /// </summary>
    public enum NetworkVariableWritePermission
    {
        /// <summary>
        /// Only the server can write
        /// </summary>
        Server,
        /// <summary>
        /// Only the owner can write
        /// </summary>
        Owner
    }
```
:::important
Since Netcode for GameObjects uses a server authoritative model, the server will always have read or write permissions to any `NetworkVariable`.
:::

### Read Permissions
There are two options for reading a `NetworkVariable.Value`:
- *Everyone(_default_):* this means the owner and non-owners of the `NetworkObject` can read the value.
    - This is useful for "global states" that everyone should be aware of.  
    - We provided an example of maintaining a door's open or closed state using the everyone permission.
        - You might also use this for player scores, health, or any other state that "everyone" should know about.
- *Owner:* This means only the owner of the `NetworkObject` and the server can read the value.
    - This is useful if your `NetworkVariable` represents something specific to the client's player that only the server and client should know about
        - This might be a player's inventory or gun's ammo count (etc.)

### Write Permissions
There are two options for writing a `NetworkVariable.Value`:
- *Server(_default_):* the server is the only one that can write the value.
    - This is useful for server side specific states that all clients should should be aware of but cannot change.
        - Some examples would be an NPC's status (health, alive, dead, etc) or some global world environment state (i.e. is it night or day time?).
- *Owner:* This means only the owner of the `NetworkObject` and the server can write the value.
    - This is useful if your `NetworkVariable` represents something specific to the client's player that only the server and client should know about
        - This might be a player's inventory or gun's ammo count (etc.)

### Permissions Example
The below example provides you with a few different permissions configurations that you might use in a game while keeping track of a player's state.  
```csharp
public class PlayerState : NetworkBehaviour
{
    private const float k_DefaultHealth = 100.0f;
    /// <summary>
    /// Default Permissions: Everyone can read, server can only write
    /// Player health is something determined (updated/written to) on the server side,
    /// but a value everyone should be synchronized with (i.e. have the ability to read)
    /// </summary>
    public NetworkVariable<float> Health = new NetworkVariable<float>(k_DefaultHealth);

    /// <summary>
    /// Owner Read & Write Permissions: Owner or server can read and write
    /// A player's ammo count is something that you might want, for convenience sake, the
    /// client to update locally.  You also don't want other non-owner clients to have
    /// access to this value to avoid any kind of "info-hacking".  This might be because
    /// you are trying to reduce bandwidth consumption for the server and all non-owners/
    /// players or you might be trying to incorporate a more "hack resistant" design where 
    /// non-owners are never synchronized to this value.
    /// </summary>
    public NetworkVariable<int> AmmoCount = new NetworkVariable<int>(default, 
        NetworkVariableReadPermission.Owner, NetworkVariableWritePermission.Owner);

    /// <summary>
    /// Owner Write & Everyone Read Permissions:
    /// A player's model's skin selection index. You might have the option to allow players
    /// to select different skin materials as a way to further encourage a player's personal
    /// association with their player character.  It would make sense to make the permissions 
    /// setting of the NetworkVariable such that the client can change the value, but everyone 
    /// will be notified when it changes.
    /// </summary>
    public NetworkVariable<int> SkinSelectionIndex = new NetworkVariable<int>(default,
        NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission.Owner);

    /// <summary>
    /// Owner Read & Server Write Permissions:
    /// You might incorporate some form of reconnection logic that stores a player's state on 
    /// the server side that can be used by the client to reconnect a player if they are 
    /// disconnected unexpectedly.  In order for the client to let the server know it is the
    /// "same client" you create a KeyPairValue for each connected client where the key's value 
    /// is written to the client's ReconnectionKey NetworkVariable.  Under this scenario, you
    /// only want the server capable of writing the value and only want the owner (client) to
    /// be synchronized with this value.
    /// </summary>
    public NetworkVariable<ulong> ReconnectionKey = new NetworkVariable<ulong>(default,
    NetworkVariableReadPermission.Owner, NetworkVariableWritePermission.Server);
}
```
The above example provides you with details on:
- The `NetworkVariable`'s purpose.
- The "logical" reasoning behind each `NetworkVariable`'s read and write permission settings.

:::important
You might be wondering about our earlier door example and why we chose to use a server RPC for clients to notify the server that the door's open/closed state has changed.  Under that scenario, the owner of the door will most likely be owned by the server just like non-player characters will almost always be owned by the server.  Under a server owned scenario, using an RPC to handle updating a `NetworkVariable` is the proper choice above permissions for most cases.
:::

## Complex Value Types 
Almost all of our examples has been focused around numeric [Value Types](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types). Value types are any `Type` that cannot be assigned a null value. Structures are considered non-nullable complex value types, from a serialization perspective, as long as the structure does not contain any properties that are considered nullable value types.

:::warning
`NetworkVariable` does not support any [nullable value types](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types).  This includes any `INetworkSerializable` implementation that contains any properties (private, protected, internal, and public) that are of a nullable value type. You can use INetworkSerializable implementations that contain
:::


### Synchronizing Complex Types Example:
For this example, we are extending the previous `PlayerState` class to include some complex value types to handle a weapon boosting game play mechanic.  We will explore two complex values types:
- *WeaponBooster:* A local power-up weapon booster the player can apply to its local weapon.
    - This is a simple complex value type example.
- *AreaWeaponBooster:* A second kind of power-up that players can deploy at a specific location.  Any team members within the radius of the `AreaWeaponBooster` will have the bonus applied.
    - This is a nested complex value type example.

For the `WeaponBooster`, we only need one NetworkVariable to handle synchronizing everyone with any WeaponBooster currently being applied to a fellow team member player. However, with the `AreaWeaponBooster` we must consider what happens if you have 8 team members that could, at any given moment, deploy one `AreaWeaponBooster`?  It would require, at a minimum, a list of all deployed and currently active `AreaWeaponBooster`s.  For this task, we will use a `NetworkList` as opposed to a `NetworkVariable`.

Review over the below `PlayerState` additions along with the `WeaponBooster` structure (complex value type):

```csharp
public class PlayerState : NetworkBehaviour
{
    // ^^^^^^^ including all code from previous example ^^^^^^^

    // The weapon booster currently applied to a player
    private NetworkVariable<WeaponBooster> PlayerWeaponBooster = new NetworkVariable<WeaponBooster>();

    // A list of team members active "area weapon boosters" that could be applied if the local player
    // is within their range.
    private NetworkList<AreaWeaponBooster> TeamAreaWeaponBoosters = new NetworkList<AreaWeaponBooster>();
}

/// <summary>
/// Example: Complex Value Type
/// This is an example of how one might handle tracking any weapon booster currently applied
/// to a player. 
/// </summary>
public struct WeaponBooster : INetworkSerializable, System.IEquatable<WeaponBooster>
{
    public float PowerAmplifier;
    public float Duration;

    public void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        if (serializer.IsReader)
        {
            var reader = serializer.GetFastBufferReader();
            reader.ReadValueSafe(out PowerAmplifier);
            reader.ReadValueSafe(out Duration);
        }
        else
        {
            var writer = serializer.GetFastBufferWriter();
            writer.WriteValueSafe(PowerAmplifier);
            writer.WriteValueSafe(Duration);
        }
    }

    public bool Equals(WeaponBooster other)
    {
        return PowerAmplifier == other.PowerAmplifier && Duration == other.Duration;
    }
}
```
Focusing primarily on the non-nested complex value type `WeaponBooster`, we can see it implements `INetworkSerializable`. At this point, you might be wondering why we didn't just try something like this:
```csharp
public class PlayerState : NetworkBehaviour
{
    // ^^^^^^^ including all code from previous example ^^^^^^^

    // The weapon booster currently applied to the local player
    private NetworkVariable<WeaponBoosterSimple> PlayerWeaponBooster = new NetworkVariable<WeaponBoosterSimple>();
}

public struct WeaponBoosterSimple
{
    public float PowerAmplifier;
    public float Duration;
}
```

## NOEL-TODO: Re-Read and Fix FROM HERE DOWN

While the above code will compile, `NetworkVariable` will start throwing errors about it not implementing INetworkSerializable with additional information about `INetworkSerializeByMemcpy`. For this example's purposes, you  just use a "raw structure" as a value type within `NetworkVariable`, there is another "good design practice" behind implementing `INetworkSerializable`:  It can be nested within another complex value type!

Looking at the below second portion of our example, we can see that the `AreaWeaponBooster` includes a `WeaponBooster` property to be applied to team members that are within the `AreaWeaponBoosters` radius: 

```csharp
/// <summary>
/// Example: Nesting Complex Value Types
/// This example uses the previous WeaponBooster complex value type to be a "container" for
/// the "weapon booster" information of an AreaWeaponBooster.  It then provides additional
/// information that would allow clients to easily determine, based on location and radius,
/// if it should add (for example) a special power up HUD symbol or special-FX to the local 
/// player.
/// </summary>
public struct AreaWeaponBooster : INetworkSerializable, System.IEquatable<AreaWeaponBooster>
{
    public WeaponBooster ApplyWeaponBooster;
    public float Radius;
    public Vector3 Location;
    public void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        if (serializer.IsReader)
        {
            serializer.SerializeValue(ref ApplyWeaponBooster);
            var reader = serializer.GetFastBufferReader();
            reader.ReadValueSafe(out Radius);
            reader.ReadValueSafe(out Location);
        }
        else
        {
            serializer.SerializeValue(ref ApplyWeaponBooster);
            var writer = serializer.GetFastBufferWriter();
            writer.WriteValueSafe(Radius);
            writer.WriteValueSafe(Location);
        }
    }

    public bool Equals(AreaWeaponBooster other)
    {
        return other.Equals(this) && Radius == other.Radius && Location == other.Location;
    }
}
```
 Looking closely at the read and write segments of code within `AreaWeaponBooster.NetworkSerialize`, we can also see that all you have to do to serialize the `AreaWeaponBooster.ApplyWeaponBooster` property is call `BufferSerializer<T>.SerializeValue` and pass a reference to the `ApplyWeaponBooster` property for both reading and writing the value. This type of approach can help reduce code replication while providing a more modular foundation to build more complex, nested, value types.

### We might want to remove and/or change this
:::warning Disclaimer
The `NetworkVariable` and `NetworkList` and implementations are **primarily** designed as samples showing how to create `NetworkVariableBase` structures. The `NetworkVariable<T>` container is however considered production ready for basic `unmanaged` value types.
:::

## IMPROVE THIS WHOLE SECTION
To create your own `NetworkVariable` container, simply create a class deriving from `NetworkVariableBase` and declare it as a field of a `NetworkBehaviour`. To learn how to write your own containers for more complex structures, see the `NetworkVariable<T>` implementation. To learn how to do custom delta encoding on complex structures. See the `NetworkList` implementations.
