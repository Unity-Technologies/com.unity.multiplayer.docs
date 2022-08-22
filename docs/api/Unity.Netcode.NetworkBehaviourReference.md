---
id: Unity.Netcode.NetworkBehaviourReference
title: Unity.Netcode.NetworkBehaviourReference
---

# Struct NetworkBehaviourReference


A helper struct for serializing NetworkBehaviours over the network. Can
be used in RPCs and NetworkVariable\<T\>. Note: network ids get recycled
by the NetworkManager after a while. So a reference pointing to







##### Implements



INetworkSerializable





System.IEquatable\<NetworkBehaviourReference\>






##### Inherited Members



System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct NetworkBehaviourReference : INetworkSerializable, IEquatable<NetworkBehaviourReference>
```



### Constructors

#### NetworkBehaviourReference(NetworkBehaviour)


Creates a new instance of the struct.






##### Declaration


``` lang-csharp
public NetworkBehaviourReference(NetworkBehaviour networkBehaviour)
```



##### Parameters

| Type             | Name             | Description                        |
|------------------|------------------|------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour to reference. |

##### Exceptions

| Type                     | Condition |
|--------------------------|-----------|
| System.ArgumentException |           |

### Methods

#### Equals(Object)







##### Declaration


``` lang-csharp
public override bool Equals(object obj)
```



##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | obj  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides



System.ValueType.Equals(System.Object)



#### Equals(NetworkBehaviourReference)







##### Declaration


``` lang-csharp
public bool Equals(NetworkBehaviourReference other)
```



##### Parameters

| Type                      | Name  | Description |
|---------------------------|-------|-------------|
| NetworkBehaviourReference | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### GetHashCode()







##### Declaration


``` lang-csharp
public override int GetHashCode()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Overrides



System.ValueType.GetHashCode()



#### NetworkSerialize\<T\>(BufferSerializer\<T\>)


Provides bi-directional serialization to read and write the desired data
to serialize this type.






##### Declaration


``` lang-csharp
public void NetworkSerialize<T>(BufferSerializer<T> serializer)
    where T : IReaderWriter
```



##### Parameters

| Type                  | Name       | Description                                       |
|-----------------------|------------|---------------------------------------------------|
| BufferSerializer\<T\> | serializer | The serializer to use to read and write the data. |

##### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |

#### TryGet(out NetworkBehaviour, NetworkManager)


Tries to get the NetworkBehaviour referenced by this reference.






##### Declaration


``` lang-csharp
public bool TryGet(out NetworkBehaviour networkBehaviour, NetworkManager networkManager = null)
```



##### Parameters

| Type             | Name             | Description                                                                                  |
|------------------|------------------|----------------------------------------------------------------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour which was found. Null if the corresponding NetworkObject was not found. |
| NetworkManager   | networkManager   | The networkmanager. Uses Singleton to resolve if null.                                       |

##### Returns

| Type           | Description                                                                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkBehaviour was found; False if the NetworkBehaviour was not found. This can happen if the corresponding NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

#### TryGet\<T\>(out T, NetworkManager)


Tries to get the NetworkBehaviour referenced by this reference.






##### Declaration


``` lang-csharp
public bool TryGet<T>(out T networkBehaviour, NetworkManager networkManager = null)
    where T : NetworkBehaviour
```



##### Parameters

| Type           | Name             | Description                                                                                  |
|----------------|------------------|----------------------------------------------------------------------------------------------|
| T              | networkBehaviour | The NetworkBehaviour which was found. Null if the corresponding NetworkObject was not found. |
| NetworkManager | networkManager   | The networkmanager. Uses Singleton to resolve if null.                                       |

##### Returns

| Type           | Description                                                                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkBehaviour was found; False if the NetworkBehaviour was not found. This can happen if the corresponding NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

##### Type Parameters

| Name | Description                                       |
|------|---------------------------------------------------|
| T    | The type of the networkBehaviour for convenience. |

### Operators

#### Implicit(NetworkBehaviour to NetworkBehaviourReference)


Implicitly convert NetworkBehaviour to NetworkBehaviourReference.






##### Declaration


``` lang-csharp
public static implicit operator NetworkBehaviourReference(NetworkBehaviour networkBehaviour)
```



##### Parameters

| Type             | Name             | Description                           |
|------------------|------------------|---------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour to convert from. |

##### Returns

| Type                      | Description                                                                              |
|---------------------------|------------------------------------------------------------------------------------------|
| NetworkBehaviourReference | The NetworkBehaviourReference created from the NetworkBehaviour passed in as a parameter |

#### Implicit(NetworkBehaviourReference to NetworkBehaviour)


Implicitly convert NetworkBehaviourReference to NetworkBehaviour.






##### Declaration


``` lang-csharp
public static implicit operator NetworkBehaviour(NetworkBehaviourReference networkBehaviourRef)
```



##### Parameters

| Type                      | Name                | Description                                    |
|---------------------------|---------------------|------------------------------------------------|
| NetworkBehaviourReference | networkBehaviourRef | The NetworkBehaviourReference to convert from. |

##### Returns

| Type             | Description                                               |
|------------------|-----------------------------------------------------------|
| NetworkBehaviour | The NetworkBehaviour this class is holding a reference to |

### Implements



INetworkSerializable





System.IEquatable\<T\>





