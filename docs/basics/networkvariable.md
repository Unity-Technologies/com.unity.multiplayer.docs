---
id: networkvariable
title: NetworkVariable
sidebar_label: NetworkVariable
---
At a high level, a `NetworkVariable` is a variable with its value tracked by the SDK. Its values are replicated to other nodes in your network regularly. When a client connects initially to a host, all relevant `NetworkVariable` latest values "state" will be replicated to that new client. Your state gets updated at regular intervals.

`NetworkVariable` can be referenced in this doc as "state" or as "Netvars" or as replicated vars.

If you change your variable's value on your side, others will see the latest value on their side.

The data can be custom containers and complex structures such as inventory structs.

By default, Netcode comes with two different containers. `NetworkList` and `NetworkVariable`. The `NetworkVariable` container is built to store simple data types such as `float`s and `int`s. The List implementation is a wrapper around the .NET equivalent. It is event-driven and has a list of events to be synced. The default implementations come with flexibility in terms of settings. Containers can be setup to sync Client To Server, Server To Client, or Bidirectional. It can also be set to target specific clients using custom delegates.

Since the `NetworkVariable` container is a wrapper container around the value, the value has be accessed using the `.Value` property.

:::warning Disclaimer
The `NetworkVariable` and `NetworkList` and implementations are **primarily** designed as samples showing how to create `NetworkVariableBase` structures. The `NetworkVariable` container is however considered production ready for simple types.
:::

:::note
You must remember to add the `NetworkObject` component to the game object to which your script belongs.
:::

To create your own `NetworkVariable` container, simply create a class deriving from `NetworkVariableBase` and declare it as a field of a `NetworkBehaviour`. To learn how to write your own containers for more complex structures, see the `NetworkVariable` implementation. To learn how to do custom delta encoding on complex structures. See the `NetworkList` implementations.

## Example NetworkVariable and OnNetworkSpawn

The following example uses network replication variables and detects the change in a unit's health and notifies the client. You can subscribe to the `OnValueChanged` event of the health variable in [`OnNetworkSpawn`](networkbehaviour.md), `Start`, `OnEnable` or `Awake`. The example exposes a `NetworkVariable` to other classes so that they can hook into Health's `OnValueChange` event, since `m_Health` is a private field.

```csharp
using Unity.Netcode;
using Unity.Netcode.NetworkVariable;
using UnityEngine;

namespace DefaultNamespace
{
    public class HealthComponent : NetworkBehaviour
    {
        [SerializeField]
        private NetworkVariable<int> m_Health = new NetworkVariable<int>();

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
            if(!IsServer) throw new NotServerException("Health should be modified server-side only");
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
