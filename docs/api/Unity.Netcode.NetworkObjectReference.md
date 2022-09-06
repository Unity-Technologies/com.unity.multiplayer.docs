---
id: Unity.Netcode.NetworkObjectReference
title: Unity.Netcode.NetworkObjectReference
---

# Struct NetworkObjectReference


A helper struct for serializing NetworkObjects over the network. Can be
used in RPCs and NetworkVariable\<T\>.







##### Implements



INetworkSerializable





System.IEquatable\<NetworkObjectReference\>






##### Inherited Members



System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct NetworkObjectReference : INetworkSerializable, IEquatable<NetworkObjectReference>
```



### Constructors

#### NetworkObjectReference(GameObject)


Creates a new instance of the NetworkObjectReference struct.






##### Declaration


``` lang-csharp
public NetworkObjectReference(GameObject gameObject)
```



##### Parameters

| Type       | Name       | Description                                                               |
|------------|------------|---------------------------------------------------------------------------|
| GameObject | gameObject | The GameObject from which the NetworkObject component will be referenced. |

##### Exceptions

| Type                         | Condition |
|------------------------------|-----------|
| System.ArgumentNullException |           |
| System.ArgumentException     |           |

#### NetworkObjectReference(NetworkObject)


Creates a new instance of the NetworkObjectReference struct.






##### Declaration


``` lang-csharp
public NetworkObjectReference(NetworkObject networkObject)
```



##### Parameters

| Type          | Name          | Description                     |
|---------------|---------------|---------------------------------|
| NetworkObject | networkObject | The NetworkObject to reference. |

##### Exceptions

| Type                         | Condition |
|------------------------------|-----------|
| System.ArgumentNullException |           |
| System.ArgumentException     |           |

### Properties

#### NetworkObjectId


The NetworkObjectId of the referenced NetworkObject.






##### Declaration


``` lang-csharp
public ulong NetworkObjectId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

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



#### Equals(NetworkObjectReference)







##### Declaration


``` lang-csharp
public bool Equals(NetworkObjectReference other)
```



##### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| NetworkObjectReference | other |             |

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

#### TryGet(out NetworkObject, NetworkManager)


Tries to get the NetworkObject referenced by this reference.






##### Declaration


``` lang-csharp
public bool TryGet(out NetworkObject networkObject, NetworkManager networkManager = null)
```



##### Parameters

| Type           | Name           | Description                                                     |
|----------------|----------------|-----------------------------------------------------------------|
| NetworkObject  | networkObject  | The NetworkObject which was found. Null if no object was found. |
| NetworkManager | networkManager | The networkmanager. Uses Singleton to resolve if null.          |

##### Returns

| Type           | Description                                                                                                                                                                                               |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkObject was found; False if the NetworkObject was not found. This can happen if the NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

### Operators

#### Implicit(GameObject to NetworkObjectReference)


Implicitly convert to NetworkObject.






##### Declaration


``` lang-csharp
public static implicit operator NetworkObjectReference(GameObject gameObject)
```



##### Parameters

| Type       | Name       | Description          |
|------------|------------|----------------------|
| GameObject | gameObject | The to convert from. |

##### Returns

| Type                   | Description                                                                                             |
|------------------------|---------------------------------------------------------------------------------------------------------|
| NetworkObjectReference | The NetworkObjectReference created from the parameter that has a NetworkObject component attached to it |

#### Implicit(NetworkObject to NetworkObjectReference)


Implicitly convert NetworkObject to NetworkObjectReference.






##### Declaration


``` lang-csharp
public static implicit operator NetworkObjectReference(NetworkObject networkObject)
```



##### Parameters

| Type          | Name          | Description                        |
|---------------|---------------|------------------------------------|
| NetworkObject | networkObject | The NetworkObject to convert from. |

##### Returns

| Type                   | Description                                                         |
|------------------------|---------------------------------------------------------------------|
| NetworkObjectReference | The NetworkObjectReference created from the NetworkObject parameter |

#### Implicit(NetworkObjectReference to GameObject)


Implicitly convert NetworkObjectReference to .






##### Declaration


``` lang-csharp
public static implicit operator GameObject(NetworkObjectReference networkObjectRef)
```



##### Parameters

| Type                   | Name             | Description                                 |
|------------------------|------------------|---------------------------------------------|
| NetworkObjectReference | networkObjectRef | The NetworkObjectReference to convert from. |

##### Returns

| Type       | Description                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
| GameObject | This returns the that the NetworkObject is attached to and is referenced by the NetworkObjectReference passed in as a parameter |

#### Implicit(NetworkObjectReference to NetworkObject)


Implicitly convert NetworkObjectReference to NetworkObject.






##### Declaration


``` lang-csharp
public static implicit operator NetworkObject(NetworkObjectReference networkObjectRef)
```



##### Parameters

| Type                   | Name             | Description                                 |
|------------------------|------------------|---------------------------------------------|
| NetworkObjectReference | networkObjectRef | The NetworkObjectReference to convert from. |

##### Returns

| Type          | Description                                                 |
|---------------|-------------------------------------------------------------|
| NetworkObject | The NetworkObject the NetworkObjectReference is referencing |

### Implements



INetworkSerializable





System.IEquatable\<T\>





