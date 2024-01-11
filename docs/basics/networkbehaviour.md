---
id: networkbehavior
title: NetworkBehaviour
---

:::note
Both the `NetworkObject` and `NetworkBehaviour` components require the use of specialized structures to be serialized and used with `RPC`s and `NetworkVariables`:

For `NetworkObject`s use the [NetworkObjectReference](../api/Unity.Netcode.NetworkObjectReference).

For `NetworkBehaviour`s use the NetworkBehaviourReference<!-- (NO API LINK AVAILABLE YET)-->.
:::

## NetworkBehaviour

`NetworkBehaviour`s can use `NetworkVariable`s and `RPC`s to synchronize state and send messages over the network.  to replicate any netcode aware properties or send/receive RPCs a `GameObject` must have a [NetworkObject component](/basics/networkobject.md) and at least one `NetworkBehaviour` component. A `NetworkBehaviour` requires a `NetworkObject` component on the same relative `GameObject` or on a parent of the `GameObject` with the `NetworkBehaviour` component assigned to it.  If you add a `NetworkBehaviour` to a GameObject that does not have a `NetworkObject` (or any parent), then Netcode for GameObjects will automatically add a `NetworkObject` component to the `GameObject` in which the `NetworkBehaviour` was added.

[`NetworkBehaviour`](../api/Unity.Netcode.NetworkBehaviour.md) is an abstract class that derives from [`MonoBehaviour`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) and is primarily used to create unique netcode/game logic.

`NetworkBehaviours` can contain RPC methods and `NetworkVariables`. When you call an RPC function, the function isn't called locally. Instead a message is sent containing your parameters, the `networkId` of the `NetworkObject` associated with the same GameObject (or child) that the `NetworkBehaviour` is assigned to, and the "index" of the `NetworkObject` relative `NetworkBehaviour` (that is, a `NetworkObject` can have several NetworkBehaviours, the index communicates "which one"). 

:::note
It is important that the `NetworkBehaviour`s on each `NetworkObject` remains the same for the server and any client connected. When using multiple projects, this becomes especially important so the server doesn't try to call a client RPC on a `NetworkBehaviour` that might not exist on a specific client type (or set a NetworkVariable, etc).
:::

### Spawning

`OnNetworkSpawn` is invoked on each `NetworkBehaviour` associated with a `NetworkObject` spawned.  This is where all netcode related initialization should occur.
You can still use `Awake` and `Start` to do things like finding components and assigning them to local properties, but if `NetworkBehaviour.IsSpawned` is false don't expect netcode distinguishing properties (like IsClient, IsServer, IsHost, etc) to be accurate while within the those two methods (Awake and Start).
For reference purposes, below is a table of when `NetworkBehaviour.OnNetworkSpawn` is invoked relative to the `NetworkObject` type:

Dynamically Spawned | In-Scene Placed
------------------- | ---------------
Awake               | Awake
OnNetworkSpawn      | Start
Start               | OnNetworkSpawn

For more information about `NetworkBehaviour` methods and when they are invoked, see the [Pre-Spawn and MonoBehaviour Methods](networkbehaviour.md#pre-spawn-and-monobehaviour-methods) section.

#### Dynamically Spawned NetworkObjects

For dynamically spawned `NetworkObjects` (instantiating a network Prefab during runtime) the `OnNetworkSpawn` method is invoked **before** the `Start` method is invoked.  So, it's important to be aware of this because finding and assigning components to a local property within the `Start` method exclusively will result in that property not being set in a `NetworkBehaviour` component's `OnNetworkSpawn` method when the `NetworkObject` is dynamically spawned.  To circumvent this issue, you can have a common method that initializes the components and is invoked both during the `Start` method and the `OnNetworkSpawned` method like the code example below:

```csharp
public class MyNetworkBehaviour : NetworkBehaviour
{
    private MeshRenderer m_MeshRenderer;
    private void Start()
    {
        Initialize();
    }

    private void Initialize()
    {
        if (m_MeshRenderer == null)
        {
            m_MeshRenderer = FindObjectOfType<MeshRenderer>();
        }
    }

    public override void OnNetworkSpawn()
    {
        Initialize();
        // Do things with m_MeshRenderer
        
        base.OnNetworkSpawn();
    }
}
```

#### In-Scene Placed NetworkObjects

For in-scene placed `NetworkObjects`, the `OnNetworkSpawn` method is invoked **after** the `Start` method since the SceneManager scene loading process controls when the `NetworkObject`s are instantiated.  The previous code example shows how one can design a `NetworkBehaviour` that assures both in-scene placed and dynamically spawned `NetworkObject`s will have assigned the required properties before attempting to access them. Of course, you can always make the decision to have in-scene placed `NetworkObjects` contain unique components to that of dynamically spawned `NetworkObjects`.  It all depends upon what usage pattern works best for your project.

### De-Spawning

`NetworkBehaviour.OnNetworkDespawn` is invoked on each `NetworkBehaviour` associated with a `NetworkObject` when it's de-spawned.  This is where all netcode "cleanup code" should occur, but isn't to be confused with destroying. When a NetworkBehaviour component is destroyed, it means the associated GameObject, and all attached components, are in the middle of being destroyed. Regarding the order of operations, `NetworkBehaviour.OnNetworkDespawn` is always invoked before `NetworkBehaviour.OnDestroy`. 

### Destroying

Each 'NetworkBehaviour' has a virtual 'OnDestroy' method that can be overridden to handle clean up that needs to occur when you know the `NetworkBehaviour` is being destroyed.

:::important
If you override the virtual 'OnDestroy' method it's important to alway invoke the base like such:

```csharp
        public override void OnDestroy()
        {
            // Clean up your NetworkBehaviour
            
            // Always invoked the base 
            base.OnDestroy();
        }
```

`NetworkBehaviour` handles other destroy clean up tasks and requires that you invoke the base `OnDestroy` method to operate properly.
:::

### Pre-Spawn and MonoBehaviour Methods

Since `NetworkBehaviour` is a derived `MonoBehaviour`, the `NetworkBehaviour.OnNetworkSpawn` method is treated similar to the Awake, Start, FixedUpdate, Update, and LateUpdate `MonoBehaviour` methods when the associated GameObject is active or not active in the hierarchy:

- When active: Awake, Start, FixedUpdate, Update, and LateUpdate are invoked 
- When not active: Awake, Start, FixedUpdate, Update, and LateUpdate are **not invoked**.

[More Information About Execution Order](https://docs.unity3d.com/2020.1/Documentation/Manual/ExecutionOrder.html)

_The unique behavior of OnNetworkSpawn, relative to the previously listed methods, is that it is not invoked until the associated GameObject is active in the hierarchy and its associated NetworkObject is spawned._

If you want to disable a specific `NetworkBehaviour` but still want it to be included in the `NetworkObject` spawn process ( _i.e. so you can still enable it at a later time_), as opposed to disabling the entire `GameObject` you should disable the individual NetworkBehaviour component.

:::caution
NetworkBehaviour components, that are disabled by default and are attached to in-scene placed NetworkObjects, will behave like NetworkBehaviour components that are attached to dynamically spawned NetworkObjects when it comes to the order of operations for the `NetworkBehaviour.Start` and `NetworkBehaviour.OnNetworkSpawn` methods. Since in-sene placed NetworkObjects are spawned when the scene is loaded, a NetworkBehaviour component (_that is disabled by default_) will have its `NetworkBehaviour.OnNetworkSpawn` method invoked before the `NetworkBehaviour.Start` method since `NetworkBehaviour.Start` is invoked when a disabled NetworkBehaviour component is enabled.

Dynamically Spawned | In-Scene Placed (disabled NetworkBehaviour components)
------------------- | ---------------
Awake               | Awake
OnNetworkSpawn      | OnNetworkSpawn
Start               | Start (invoked when disabled NetworkBehaviour components are enabled)
:::

:::warning Parenting, Inactive GameObjects, and NetworkBehaviour Components
If you have child GameObjects that are not active in the hierarchy but are nested under an active GameObject with an attached NetworkObject component, then the inactive child GameObjects will not be included when the NetworkObject is spawned. This applies for the duration of the NetworkObject's spawned lifetime. If you want all child NetworkBehaviour components to be included in the spawn process, then make sure their respective GameObjects are active in the hierarchy before spawning the `NetworkObject`. Alternatively, you can just disable the NetworkBehaviour component(s) individually while leaving their associated GameObject active.

_It is recommended to disable a NetworkBehaviour component than the GameObject itself._
:::

Additionally, the `FixedUpdate`, `Update`, and `LateUpdate` methods, if defined and the `GameObject` is active in the hierarchy, will still be invoked on `NetworkBehaviour`s even when they're not yet spawned.  
If you want portions or all of your update methods to only execute when the associated `NetworkObject` component is spawned, you can use the `NetworkBehaviour.IsSpawned` flag to determine the spawned status like the below example:

```csharp
private void Update()
{
    // If the NetworkObject is not yet spawned, exit early.
    if (!IsSpawned)
    {
        return;
    }
    // Netcode specific logic executed when spawned.
}
```

### Pre-Spawn Synchronization

There can be scenarios where you need to include additional configuration data or use a `NetworkBehaviour` to configure some non-netcode related component (or the like) before a `NetworkObject` being spawned. This can be particularly critical if you want specific settings applied before `NetworkBehaviour.OnNetworkSpawn` being invoked. When a client is synchronizing with an existing network session, this can become problematic as messaging requires a client to be fully synchronized before you know "it is safe" to send the message and even if you send a message there is the latency involved in the whole process that might not be convenient and can require additional specialized code to account for this.

`NetworkBehaviour.OnSynchronize` allows you to write and read custom serialized data during the `NetworkObject` serialization process.  

There are two cases where `NetworkObject` synchronization occurs:
- When dynamically spawning a `NetworkObject`.
- When a client is being synchronized after connection approval 
  - that is, Full synchronization of the `NetworkObject`s and scenes.

:::info
If you haven't already become familiar with the [`INetworkSerializable` interface](../advanced-topics/serialization/inetworkserializable.md), then you might read up on that before proceeding as `NetworkBehaviour.OnSynchronize` as it follows a similar usage pattern.
:::

#### Order of Operations When Dynamically Spawning:<br />
The following provides you with an outline of the order of operations that occur during `NetworkObject` serialization when dynamically spawned.

Server-Side:
- `GameObject` with `NetworkObject` component is instantiated.
- The `NetworkObject` is spawned. 
  - For each associated `NetworkBehaviour` component, `NetworkBehaviour.OnNetworkSpawn` is invoked.
- The `CreateObjectMessage` is generated 
  - `NetworkObject` state is serialized.
  - `NetworkVariable` state is serialized.
  - `NetworkBehaviour.OnSynchronize` is invoked for each `NetworkBehaviour` component.
    - If this method isn't overridden then nothing is written to the serialization buffer.
- The `CreateObjectMessage` is sent to all clients that are observers of the `NetworkObject`.
<br />

Client-Side:
- The `CreateObjectMessage` is received
  - `GameObject` with `NetworkObject` component is instantiated.
  - `NetworkVariable` state is deserialized and applied.
  - `NetworkBehaviour.OnSynchronize` is invoked for each `NetworkBehaviour` component.
    - If this method isn't overridden then nothing is read from the serialization buffer.
- The `NetworkObject` is spawned
  - For each associated `NetworkBehaviour` component, `NetworkBehaviour.OnNetworkSpawn` is invoked.

#### Order of Operations During Full (late-join) Client Synchronization:<br />
Server-Side:
- The `SceneEventMessage` of type `SceneEventType.Synchronize` is created
  - All spawned `NetworkObjects` that are visible to the client, already instantiated, and spawned are serialized.
    - `NetworkObject` state is serialized.
    - `NetworkVariable` state is serialized.
    - `NetworkBehaviour.OnSynchronize` is invoked for each `NetworkBehaviour` component.
      - If this method isn't overridden then nothing is written to the serialization buffer.
- The `SceneEventMessage` is sent to the client.

Client-Side:
- The `SceneEventMessage` of type `SceneEventType.Synchronize` is received
- Scene information is deserialized and scenes are loaded (if not already)
  - In-scene placed `NetworkObject`s are instantiated when a scene is loaded.
- All `NetworkObject` oriented synchronization information is deserialized
  - Dynamically spawned `NetworkObject`s are instantiated and state is synchronized
  - For each `NetworkObject` instance:
    - `NetworkVariable` state is deserialized and applied.
    - `NetworkBehaviour.OnSynchronize` is invoked.
      - If this method isn't overridden then nothing is read from the serialization buffer.
    - The `NetworkObject` is spawned
      - For each associated `NetworkBehaviour` component, `NetworkBehaviour.OnNetworkSpawn` is invoked.

### OnSynchronize Example 
Now that you understand the general concept behind `NetworkBehaviour.OnSynchronize`, the question you might have is "when would you use such a thing"? `NetworkVariable`s can be useful to synchronize state, but they also are only updated every network tick and you might have some form of state that needs to be updated when it happens and not several frames later so you decide to use RPCs.  However, this becomes an issue when you want to synchronize late joining clients as there is no way to synchronize late joining clients based on RPC activity over the duration of a network session.  This is one of many possible reasons one might want to use `NetworkBehaviour.OnSynchronize`.
The following example uses `NetworkBehaviour.OnSynchronize` to synchronize connecting (to-be-synchronized) clients and also uses an RPC to synchronize changes in state for already synchronized and connected clients:

```csharp
using UnityEngine;
using Unity.Netcode;

/// <summary>
/// Simple RPC driven state that shows one
/// form of NetworkBehaviour.OnSynchronize usage
/// </summary>
public class SimpleRpcState : NetworkBehaviour
{
    private bool m_ToggleState;

    /// <summary>
    /// Late joining clients will be synchronized 
    /// to the most current m_ToggleState
    /// </summary>
    protected override void OnSynchronize<T>(ref BufferSerializer<T> serializer)
    {
        serializer.SerializeValue(ref m_ToggleState);
        base.OnSynchronize(ref serializer);
    }

    public void ToggleState(bool stateIsSet)
    {
        m_ToggleState = stateIsSet;
    }

    /// <summary>
    /// Synchronizes connected clients with the
    /// server-side m_ToggleState
    /// </summary>
    /// <param name="stateIsSet"></param>
    [Rpc(SendTo.ClientsAndHost)]
    private void ToggleStateClientRpc(bool stateIsSet)
    {
        m_ToggleState = stateIsSet;
    }
}
```
:::caution
Since `NetworkBehaviour.OnSynchronize` is primarily used for server to client synchronization, RPC state synchronization only works when using ClientRpcs since `NetworkBehaviour.OnSynchronize` is only invoked on the server side during the write part of serialization and only invoked on the client side during the read part of serialization. When running a host `NetworkBehaviour.OnSynchronize` is still only invoked once (server-side) during the write part of serialization.
:::

### Debugging OnSynchronize Serialization
If your serialization code has a bug and throws an exception, then `NetworkBehaviour.OnSynchronize` has additional safety checking to handle a graceful recovery without completely breaking the rest of the synchronization serialization pipeline.  

#### When Writing:
If user-code throws an exception during `NetworkBehaviour.OnSynchronize`, it catches the exception and if:
- **LogLevel = Normal**: A warning message that includes the name of the `NetworkBehaviour` that threw an exception while writing will be logged and that part of the serialization for the given `NetworkBehaviour` is skipped.
- **LogLevel = Developer**: It provides the same warning message as well as it logs an error with the exception message and stack trace.

After generating the log message(s), it rewinds the serialization stream to the point just before it invoked `NetworkBehaviour.OnSynchronize` and will continue serializing. Any data written before the exception occurred will be overwritten or dropped depending upon whether there are more `NetworkBehaviour` components to be serialized.

#### When Reading:
For exceptions this follows the exact same message logging pattern described above when writing. The distinct difference is that after it logs one or more messages to the console, it skips over only the serialization data written by the server-side when `NetworkBehaviour.OnSynchronize` was invoked and continues the deserialization process for any remaining `NetworkBehaviour` components.

However, there is an additional check to assure that the total expected bytes to read were actually read from the buffer. If the total number of bytes read does not equal the expected number of bytes to be read it will log a warning that includes the name of the NetworkBehaviour in question, the total bytes read, the expected bytes to be read, and lets you know this `NetworkBehaviour` is being skipped.

:::caution
When using `NetworkBehaviour.OnSynchronize` you should be aware that you are increasing the synchronization payload size per instance.  If you have 30 instances that each write 100 bytes of information you will have increased the total full client synchronization size by 3000 bytes
:::