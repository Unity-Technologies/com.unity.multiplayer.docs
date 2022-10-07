---
id: networkvariable
title: NetworkVariable
sidebar_label: NetworkVariable
---
At a high level, a `NetworkVariable` is a variable with its value tracked by the SDK. Its values are replicated to other nodes in your network regularly. When a client connects initially to a host, all relevant `NetworkVariable` latest values "state" will be replicated to that new client. Your state gets updated at regular intervals.

`NetworkVariable` can be referenced in this doc as "state" or as "Netvars" or as replicated vars.

If you change your variable's value on your side, others will see the latest value on their side.

The data can be custom containers and complex structures such as inventory structs.

By default, Netcode comes with three different containers. `NetworkList`, `NetworkDictionary` and `NetworkVariable`. The `NetworkVariable` container is built to store simple data types such as `float`s and `int`s. The List and Dictionary implementations are wrappers around the .NET equivalents. They are event-driven and have a list of events to be synced. The default implementations come with flexibility in terms of settings. Containers can be setup to sync Client To Server, Server To Client, or Bidirectional. It can also be set to target specific clients using custom delegates.

Since the `NetworkVariable` container is a wrapper container around the value, the value has be accessed using the `.Value` property.

:::warning Disclaimer
The `NetworkVariable`, `NetworkList` and `NetworkDictionary` implementations are **primarily** designed as samples showing how to create `INetworkVariable` structures. The `NetworkVariable` container is however considered production ready for simple types.
:::

:::note
You must remember to add the `NetworkObject` component to the game object to which your script belongs.
:::

To create your own `NetworkVariable` container, simply create a class with the `INetworkVariable` interface and declare it as a field of a `NetworkBehaviour`. To learn how to write your own containers for more complex structures, see the `NetworkVariable` implementation. To learn how to do custom delta encoding on complex structures. See the `NetworkDictionary` and `NetworkList` implementations.

### Permissions
By default `NetworkVariable` and its subclasses can only be written to by the server (`NetworkVariablePermission.ServerOnly`). To change that set the permission to the desired value during initialization:

```csharp
private NetworkVariable<float> myFloat = new NetworkVariable<float>(new NetworkVariableSettings {WritePermission = NetworkVariablePermission.OwnerOnly}, 5);
```

For example:

```csharp
private NetworkVariable<float> myFloat = new NetworkVariable<float>(5.0f);

void MyUpdate()
{
    myFloat.Value += 30;
}

void ListenChanges()
{
    myFloat.OnValueChanged += valueChanged;
}

void valueChanged(float prevF, float newF){
    Debug.Log("myFloat went from " + prevF + " to " + newF);
}
```

### Single Sync Values
If you want values to be synced only once (at spawn), the built-in container's send rate can be set to a negative value.

### Supported Types

:::note
While `NetworkVariable` supports both managed and unmanaged types, managed types do come with an amount of additional overhead. Efforts are made to minimize GC allocations for managed `INetworkSerializable` types (a new value is only allocated if the value changes from `null` to non-`null`), but the ability of a type to be `null` adds additional overhead both in logic (checking for nulls before serializing) and bandwidth (every serialization carries an additional byte indicating whether or not the value is `null`).
:::

`NetworkVariable` provides support for the following types:

* C# unmanaged [primitive types](../advanced-topics/serialization/cprimitives.md): `bool`, `byte`, `sbyte`, `char`, `decimal`, `double`, `float`, `int`, `uint`, `long`, `ulong`, `short`, and `ushort`, which will be serialized by direct memcpy into/out of the buffer.

* Unity unmanaged [built-in types](../advanced-topics/serialization/unity-primitives.md): `Vector2`, `Vector3`, `Vector2Int`, `Vector3Int`, `Vector4`, `Quaternion`, `Color`, `Color32`, `Ray`, `Ray2D`, which will be serialized by direct memcpy into/out of the buffer.

* Any [`enum`](../advanced-topics/serialization/enum-types.md) types, which will be serialized by direct memcpy into/out of the buffer.

* Any type (managed or unmanaged) that implements [`INetworkSerializable`](../advanced-topics/serialization/inetworkserializable.md), which will be serialized by calling their `NetworkSerialize` method. **On the reading side, these values are deserialized in-place, meaning the existing instance will be reused and any non-serialized values will be left in their current state.**

* Any unmanaged struct type that implements [`INetworkSerializeByMemcpy`](../advanced-topics/serialization/inetworkserializebymemcpy.md), which will be serialized by direct memcpy of the entire struct into/out of the buffer.

* Unity [fixed string](../advanced-topics/serialization/fixedstrings.md) types: `FixedString32Bytes`, `FixedString64Bytes`, `FixedString128Bytes`, `FixedString512Bytes`, and `FixedString4096Bytes`. These are serialized intelligently, only sending the used portion across the network and adjusting the "length" of the string on the other side to fit the received data. 

For any types that don't fit within this list, including managed types and unmanaged types with pointers, it's possible to provide delegates informing the serialization system how to serialize and deserialize your values. For more information on that, see [Custom Serialization](../advanced-topics/custom-serialization.md). A limitation of custom serialization is that, unlike `INetworkSerializable` types, types using custom serialization are not able to be read in-place, so managed types will, by necessity, incur a GC allocationpr on every update.

## Example NetworkVariable and NetworkStart

The following example uses network replication variables and detects the change in a unit's health and notifies the client. You can perform a [`NetworkStart`](networkbehaviour.md) `Start` or `Awake` to subscribe the `OnValueChanged` of the health variable, then unsubscribe `OnDestroy`. The example exposes a `NetworkVariable` to other classes so that they can hook into Health's `OnValueChange` delegate or event, since `m_Health` is a private field.

```csharp
using Unity.Netcode;
using Unity.Netcode.NetworkVariable;
using UnityEngine;

namespace DefaultNamespace
{
    public class HealthComponent : NetworkBehaviour
    {
        [SerializeField]
        private NetworkVariable<int> m_Health = new NetworkVariable<int>(100);

        public NetworkVariable<int> Health => m_Health;

        void OnEnable()
        {
            // Subscribe for when Health value changes
            // This usually gets triggered when the server modifies that variable
            // and is later replicated down to clients
            Health.OnValueChanged += OnHealthChanged;
        }

        void OnDisable()
        {
            Health.OnValueChanged -= OnHealthChanged;
        }

        void OnHealthChanged(int oldValue, int newValue)
        {
            // Update UI, if this a client instance and it's the owner of the object
            if (IsOwner && IsClient)
            {
                // TODO: Update UI code?
            }

            Debug.LogFormat("{0} has {1} health!", gameObject.name, m_Health.Value);
        }

        public void TakeDamage(int amount)
        {
            // Health should be modified server-side only
            if(!IsServer) return;
            Health.Value -= amount;

            // TODO: You can play a VFX/SFX here if needed

            if (Health.Value <= 0)
            {
                Health.Value = 0;
            }
        }
    }
}
```

See [examples](../../learn/bossroom-examples/bossroom-actions) of how these were used in Boss Room.
