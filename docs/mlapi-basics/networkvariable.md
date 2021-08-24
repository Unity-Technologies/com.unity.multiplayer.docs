---
id: networkvariable
title: NetworkVariable
sidebar_label: NetworkVariable
---

:::contribution Community Contribution

There is a  Video Tutorial covering some of the concepts covered in this page [here](../learn/dapper/networkvariables.md)
:::

`NetworkVariable` is the way data can be synchronized between peers in abstracted ways. The data can be custom containers and complex structures such as inventory structs.

By default, the MLAPI comes with three different containers. `NetworkList`, `NetworkDictionary` and `NetworkVariable`. The `NetworkVariable` container is built to store simple data types such as `float`s and `int`s. The List and Dictionary implementations are wrappers around the .NET equivalents. They are event-driven and have a list of events to be synced. The default implementations come with flexibility in terms of settings. Containers can be setup to sync Client To Server, Server To Client, or Bidirectional. It can also be set to target specific clients using custom delegates.

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

### Serialization
Since the `NetworkVariable` class is a generic, editor serialization is NOT supported, it is only available through editor scripts for viewing the values. To get proper serialization, a clone of the `NetworkVariable` implementation has to be done for each type you wish to use. For example, `NetworkVariableInt` where you replace all the usages of `T` with `int`.

The MLAPI provides a few default serializable implementations of the `NetworkVariable`, they are called `NetworkVariable<T>` where `T` is the type.

## Example NetworkVariable and NetworkStart

The following example uses network replication variables and detects the change in a unit's health and notifies the client. You can perform a [`NetworkStart`](networkbehaviour.md) `Start` or `Awake` to subscribe the `OnValueChanged` of the health variable, then unsubscribe `OnDestroy`. The example exposes a `NetworkVariable` to other classes so that they can hook into Health's `OnValueChange` delegate or event, since `m_Health` is a private field.

```csharp
using MLAPI;
using MLAPI.NetworkVariable;
using UnityEngine;

namespace DefaultNamespace
{
    public class HealthComponent : NetworkBehaviour
    {
        [SerializeField]
        private NetworkVariableInt m_Health = new NetworkVariableInt(100);

        public NetworkVariableInt Health => m_Health;

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
