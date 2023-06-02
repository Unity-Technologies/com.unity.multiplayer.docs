---
id: Unity.Netcode.NetworkBehaviourReference
title: Unity.Netcode.NetworkBehaviourReference
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:13 pm
---

<div class="markdown level0 summary">

A helper struct for serializing NetworkBehaviours over the network. Can be used in RPCs and NetworkVariable\<T\>. Note: network ids get recycled by the NetworkManager after a while. So a reference pointing to
</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

## Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<NetworkBehaviourReference\>

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
public struct NetworkBehaviourReference : INetworkSerializable, IEquatable<NetworkBehaviourReference>
```

## Constructors

### NetworkBehaviourReference(NetworkBehaviour)

<div class="markdown level1 summary">

Creates a new instance of the struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkBehaviourReference(NetworkBehaviour networkBehaviour)
```

#### Parameters

| Type             | Name             | Description                        |
|------------------|------------------|------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour to reference. |

#### Exceptions

| Type                     | Condition |
|--------------------------|-----------|
| System.ArgumentException |           |

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

### Equals(NetworkBehaviourReference)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkBehaviourReference other)
```

#### Parameters

| Type                      | Name  | Description |
|---------------------------|-------|-------------|
| NetworkBehaviourReference | other |             |

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

### TryGet(out NetworkBehaviour, NetworkManager)

<div class="markdown level1 summary">

Tries to get the NetworkBehaviour referenced by this reference.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TryGet(out NetworkBehaviour networkBehaviour, NetworkManager networkManager = null)
```

#### Parameters

| Type             | Name             | Description                                                                                  |
|------------------|------------------|----------------------------------------------------------------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour which was found. Null if the corresponding NetworkObject was not found. |
| NetworkManager   | networkManager   | The networkmanager. Uses Singleton to resolve if null.                                       |

#### Returns

| Type           | Description                                                                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkBehaviour was found; False if the NetworkBehaviour was not found. This can happen if the corresponding NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

### TryGet\<T\>(out T, NetworkManager)

<div class="markdown level1 summary">

Tries to get the NetworkBehaviour referenced by this reference.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TryGet<T>(out T networkBehaviour, NetworkManager networkManager = null)

    where T : NetworkBehaviour
```

#### Parameters

| Type           | Name             | Description                                                                                  |
|----------------|------------------|----------------------------------------------------------------------------------------------|
| T              | networkBehaviour | The NetworkBehaviour which was found. Null if the corresponding NetworkObject was not found. |
| NetworkManager | networkManager   | The networkmanager. Uses Singleton to resolve if null.                                       |

#### Returns

| Type           | Description                                                                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkBehaviour was found; False if the NetworkBehaviour was not found. This can happen if the corresponding NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

#### Type Parameters

| Name | Description                                       |
|------|---------------------------------------------------|
| T    | The type of the networkBehaviour for convenience. |

## Operators

### Implicit(NetworkBehaviour To NetworkBehaviourReference)

<div class="markdown level1 summary">

Implicitly convert NetworkBehaviour to NetworkBehaviourReference.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator NetworkBehaviourReference(NetworkBehaviour networkBehaviour)
```

#### Parameters

| Type             | Name             | Description                           |
|------------------|------------------|---------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour to convert from. |

#### Returns

| Type                      | Description                                                                              |
|---------------------------|------------------------------------------------------------------------------------------|
| NetworkBehaviourReference | The NetworkBehaviourReference created from the NetworkBehaviour passed in as a parameter |

### Implicit(NetworkBehaviourReference To NetworkBehaviour)

<div class="markdown level1 summary">

Implicitly convert NetworkBehaviourReference to NetworkBehaviour.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator NetworkBehaviour(NetworkBehaviourReference networkBehaviourRef)
```

#### Parameters

| Type                      | Name                | Description                                    |
|---------------------------|---------------------|------------------------------------------------|
| NetworkBehaviourReference | networkBehaviourRef | The NetworkBehaviourReference to convert from. |

#### Returns

| Type             | Description                                               |
|------------------|-----------------------------------------------------------|
| NetworkBehaviour | The NetworkBehaviour this class is holding a reference to |

### Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<T\>

</div>
