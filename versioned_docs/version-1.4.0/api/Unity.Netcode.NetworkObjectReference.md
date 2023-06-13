---
id: Unity.Netcode.NetworkObjectReference
title: Unity.Netcode.NetworkObjectReference
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:48 pm
---

<div class="markdown level0 summary">

A helper struct for serializing NetworkObjects over the network. Can be used in RPCs and NetworkVariable\<T\>.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

## Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<NetworkObjectReference\>

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetType()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public struct NetworkObjectReference : INetworkSerializable, IEquatable<NetworkObjectReference>
```

## Constructors

### NetworkObjectReference(GameObject)

<div class="markdown level1 summary">

Creates a new instance of the NetworkObjectReference struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObjectReference(GameObject gameObject)
```

#### Parameters

| Type       | Name       | Description                                                               |
|------------|------------|---------------------------------------------------------------------------|
| GameObject | gameObject | The GameObject from which the NetworkObject component will be referenced. |

#### Exceptions

| Type                         | Condition |
|------------------------------|-----------|
| System.ArgumentNullException |           |
| System.ArgumentException     |           |

### NetworkObjectReference(NetworkObject)

<div class="markdown level1 summary">

Creates a new instance of the NetworkObjectReference struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObjectReference(NetworkObject networkObject)
```

#### Parameters

| Type          | Name          | Description                     |
|---------------|---------------|---------------------------------|
| NetworkObject | networkObject | The NetworkObject to reference. |

#### Exceptions

| Type                         | Condition |
|------------------------------|-----------|
| System.ArgumentNullException |           |
| System.ArgumentException     |           |

## Properties

### NetworkObjectId

<div class="markdown level1 summary">

The NetworkObjectId of the referenced NetworkObject.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong NetworkObjectId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

## Methods

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object obj)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | obj  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(NetworkObjectReference)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkObjectReference other)
```

#### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| NetworkObjectReference | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override int GetHashCode()
```

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Overrides

<div>

System.ValueType.GetHashCode()

</div>

### NetworkSerialize\<T\>(BufferSerializer\<T\>)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void NetworkSerialize<T>(BufferSerializer<T> serializer)

    where T : IReaderWriter
```

#### Parameters

| Type                  | Name       | Description |
|-----------------------|------------|-------------|
| BufferSerializer\<T\> | serializer |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### TryGet(out NetworkObject, NetworkManager)

<div class="markdown level1 summary">

Tries to get the NetworkObject referenced by this reference.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TryGet(out NetworkObject networkObject, NetworkManager networkManager = null)
```

#### Parameters

| Type           | Name           | Description                                                     |
|----------------|----------------|-----------------------------------------------------------------|
| NetworkObject  | networkObject  | The NetworkObject which was found. Null if no object was found. |
| NetworkManager | networkManager | The networkmanager. Uses Singleton to resolve if null.          |

#### Returns

| Type           | Description                                                                                                                                                                                               |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkObject was found; False if the NetworkObject was not found. This can happen if the NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

## Operators

### Implicit(GameObject To NetworkObjectReference)

<div class="markdown level1 summary">

Implicitly convert to NetworkObject.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator NetworkObjectReference(GameObject gameObject)
```

#### Parameters

| Type       | Name       | Description          |
|------------|------------|----------------------|
| GameObject | gameObject | The to convert from. |

#### Returns

| Type                   | Description                                                                                             |
|------------------------|---------------------------------------------------------------------------------------------------------|
| NetworkObjectReference | The NetworkObjectReference created from the parameter that has a NetworkObject component attached to it |

### Implicit(NetworkObject To NetworkObjectReference)

<div class="markdown level1 summary">

Implicitly convert NetworkObject to NetworkObjectReference.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator NetworkObjectReference(NetworkObject networkObject)
```

#### Parameters

| Type          | Name          | Description                        |
|---------------|---------------|------------------------------------|
| NetworkObject | networkObject | The NetworkObject to convert from. |

#### Returns

| Type                   | Description                                                         |
|------------------------|---------------------------------------------------------------------|
| NetworkObjectReference | The NetworkObjectReference created from the NetworkObject parameter |

### Implicit(NetworkObjectReference To GameObject)

<div class="markdown level1 summary">

Implicitly convert NetworkObjectReference to .

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator GameObject(NetworkObjectReference networkObjectRef)
```

#### Parameters

| Type                   | Name             | Description                                 |
|------------------------|------------------|---------------------------------------------|
| NetworkObjectReference | networkObjectRef | The NetworkObjectReference to convert from. |

#### Returns

| Type       | Description                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
| GameObject | This returns the that the NetworkObject is attached to and is referenced by the NetworkObjectReference passed in as a parameter |

### Implicit(NetworkObjectReference To NetworkObject)

<div class="markdown level1 summary">

Implicitly convert NetworkObjectReference to NetworkObject.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator NetworkObject(NetworkObjectReference networkObjectRef)
```

#### Parameters

| Type                   | Name             | Description                                 |
|------------------------|------------------|---------------------------------------------|
| NetworkObjectReference | networkObjectRef | The NetworkObjectReference to convert from. |

#### Returns

| Type          | Description                                                 |
|---------------|-------------------------------------------------------------|
| NetworkObject | The NetworkObject the NetworkObjectReference is referencing |

### Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<T\>

</div>
