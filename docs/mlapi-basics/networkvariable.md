---
id: networkvariable
title: NetworkVariable
sidebar_label: NetworkVariable
---

`NetworkVariable` is the way data can be synchronized between peers in abstracted ways. The data can be custom containers and complex structures such as inventory structs.

By default, the MLAPI comes with three different containers. `NetworkList`, `NetworkDictionary` and `NetworkVariable`. The `NetworkVariable` container is built to store simple data types such as floats and ints. The List & Dictionary implementations are wrappers around the .NET equivalents. They are event-driven and have a list of events to be synced. The default implementations come with lot's of flexibility in terms of settings. Containers can be setup to sync Client To Server, Server To Client or Bidirectional. It can also be set to target specific clients using custom delegates.

Since the `NetworkVariable` container is a wrapper container around the value, the value has be accessed via the .Value property.

:::warning
Disclaimer: The `NetworkVariable`, `NetworkList` and `NetworkDictionary` implementations are **primarily** designed as samples showing how to create `INetworkedVar` structures. The `NetworkVariable` container is however considered production ready for simple types.
:::

:::note
You must remember to add the `NetworkObject` component to the game object to which your script belongs.
:::

To create your own `NetworkVariable` container, simply create a class with the `INetworkedVar` interface and declare it as a field of a `NetworkBehaviour`. To learn how to write your own containers for more complex structures, see the `NetworkVariable` implementation. To learn how to do custom delta encoding on complex structures. See the `SyncedDictionary` and `SyncedLIst` implementations.

### Permissions
By default `NetworkVariable` and it's subclasses can only be wrote to by the server (`NetworkVariable`ermission.ServerOnly). To change that set the permission to the desired value during initialization:

```csharp
private NetworkVariable<float> myFloat = new NetworkVariable<float>(new NetworkVariableSettings {WritePermission = NetworkedVarPermission.OwnerOnly}, 5);
```

For example:

```csharp
private NetworkVariable<float> myFloat = new NetworkVariablekedVar<float>(5.0f);

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
If you want values to be synced only once (at spawn), the built-in containers send rate can be set to a negative value.

### Serialization
Since the `NetworkVariable` class is a generic, editor serialization is NOT supported, it's only avalible through editor scripts for viewing the values. To get proper serialization. A clone of the `NetworkVariable` implementation has to be done for each type you wish to use. Ex: `NetworkVariableInt` where you replace all the usages of T with int.

The MLAPI provides a few default serializable implementations of the `NetworkVariable`, they are called `NetworkVariableTYPE>` where `<TYPE>` is the type.
