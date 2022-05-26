---
id: Unity.Netcode.ForceNetworkSerializeByMemcpy
title: Unity.Netcode.ForceNetworkSerializeByMemcpy
---

<div class="markdown level0 summary">

This is a wrapper that adds `INetworkSerializeByMemcpy` support to
existing structs that the developer doesn't have the ability to modify
(for example, external structs like `Guid`).

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkSerializeByMemcpy

</div>

<div>

System.IEquatable\<ForceNetworkSerializeByMemcpy\<T\>\>

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
public struct ForceNetworkSerializeByMemcpy<T> : INetworkSerializeByMemcpy, IEquatable<ForceNetworkSerializeByMemcpy<T>> where T : struct, IEquatable<T>
```

</div>

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Constructors

#### ForceNetworkSerializeByMemcpy(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ForceNetworkSerializeByMemcpy(T value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

### Fields

#### Value

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public T Value
```

</div>

##### Field Value

| Type | Description |
|------|-------------|
| T    |             |

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

#### Equals(ForceNetworkSerializeByMemcpy\<T\>)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Equals(ForceNetworkSerializeByMemcpy<T> other)
```

</div>

##### Parameters

| Type                               | Name  | Description |
|------------------------------------|-------|-------------|
| ForceNetworkSerializeByMemcpy\<T\> | other |             |

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

### Operators

#### Implicit(T to ForceNetworkSerializeByMemcpy\<T\>)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator ForceNetworkSerializeByMemcpy<T>(T underlyingValue)
```

</div>

##### Parameters

| Type | Name            | Description |
|------|-----------------|-------------|
| T    | underlyingValue |             |

##### Returns

| Type                               | Description |
|------------------------------------|-------------|
| ForceNetworkSerializeByMemcpy\<T\> |             |

#### Implicit(ForceNetworkSerializeByMemcpy\<T\> to T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator T(ForceNetworkSerializeByMemcpy<T> container)
```

</div>

##### Parameters

| Type                               | Name      | Description |
|------------------------------------|-----------|-------------|
| ForceNetworkSerializeByMemcpy\<T\> | container |             |

##### Returns

| Type | Description |
|------|-------------|
| T    |             |

### Implements

<div>

INetworkSerializeByMemcpy

</div>

<div>

System.IEquatable\<T\>

</div>

 
