---  
id: Unity.Netcode.NetworkObjectReference  
title: Unity.Netcode.NetworkObjectReference  
---

<div class="markdown level0 summary">

A helper struct for serializing NetworkObjects over the network. Can be
used in RPCs and NetworkVariable\<T\>.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<NetworkObjectReference\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkObjectReference : INetworkSerializable, IEquatable<NetworkObjectReference>
```

</div>

### Constructors

#### NetworkObjectReference(GameObject)

<div class="markdown level1 summary">

Creates a new instance of the NetworkObjectReference struct.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObjectReference(GameObject gameObject)
```

</div>

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

<div class="markdown level1 summary">

Creates a new instance of the NetworkObjectReference struct.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObjectReference(NetworkObject networkObject)
```

</div>

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

<div class="markdown level1 summary">

The NetworkObjectId of the referenced NetworkObject.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong NetworkObjectId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Methods

#### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool Equals(object obj)
```

</div>

##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | obj  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

#### Equals(NetworkObjectReference)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Equals(NetworkObjectReference other)
```

</div>

##### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| NetworkObjectReference | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override int GetHashCode()
```

</div>

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Overrides

<div>

System.ValueType.GetHashCode()

</div>

#### NetworkSerialize\<T\>(BufferSerializer\<T\>)

<div class="markdown level1 summary">

Provides bi-directional serialization to read and write the desired data
to serialize this type.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void NetworkSerialize<T>(BufferSerializer<T> serializer)
    where T : IReaderWriter
```

</div>

##### Parameters

| Type                  | Name       | Description                                       |
|-----------------------|------------|---------------------------------------------------|
| BufferSerializer\<T\> | serializer | The serializer to use to read and write the data. |

##### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |

#### TryGet(out NetworkObject, NetworkManager)

<div class="markdown level1 summary">

Tries to get the NetworkObject referenced by this reference.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryGet(out NetworkObject networkObject, NetworkManager networkManager = null)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator NetworkObjectReference(GameObject gameObject)
```

</div>

##### Parameters

| Type       | Name       | Description |
|------------|------------|-------------|
| GameObject | gameObject |             |

##### Returns

| Type                   | Description |
|------------------------|-------------|
| NetworkObjectReference |             |

#### Implicit(NetworkObject to NetworkObjectReference)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator NetworkObjectReference(NetworkObject networkObject)
```

</div>

##### Parameters

| Type          | Name          | Description |
|---------------|---------------|-------------|
| NetworkObject | networkObject |             |

##### Returns

| Type                   | Description |
|------------------------|-------------|
| NetworkObjectReference |             |

#### Implicit(NetworkObjectReference to GameObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator GameObject(NetworkObjectReference networkObjectRef)
```

</div>

##### Parameters

| Type                   | Name             | Description |
|------------------------|------------------|-------------|
| NetworkObjectReference | networkObjectRef |             |

##### Returns

| Type       | Description |
|------------|-------------|
| GameObject |             |

#### Implicit(NetworkObjectReference to NetworkObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator NetworkObject(NetworkObjectReference networkObjectRef)
```

</div>

##### Parameters

| Type                   | Name             | Description |
|------------------------|------------------|-------------|
| NetworkObjectReference | networkObjectRef |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

### Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<T\>

</div>

 
