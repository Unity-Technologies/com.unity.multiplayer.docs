---
id: Unity.Netcode.ForceNetworkSerializeByMemcpy-1
title: Unity.Netcode.ForceNetworkSerializeByMemcpy-1
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:34:50 pm
---

<div class="markdown level0 summary">

This is a wrapper that adds `INetworkSerializeByMemcpy` support to existing structs that the developer doesn't have the ability to modify (for example, external structs like `Guid`).

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

## Implements

<div>

INetworkSerializeByMemcpy

</div>

<div>

System.IEquatable\<ForceNetworkSerializeByMemcpy\<T\>\>

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
public struct ForceNetworkSerializeByMemcpy<T> : INetworkSerializeByMemcpy, IEquatable<ForceNetworkSerializeByMemcpy<T>> where T : struct, IEquatable<T>
```

## Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## Constructors

### ForceNetworkSerializeByMemcpy(T)

<div class="markdown level1 summary">

The default constructor for ForceNetworkSerializeByMemcpy\<T\>

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ForceNetworkSerializeByMemcpy(T value)
```

#### Parameters

| Type | Name  | Description                        |
|------|-------|------------------------------------|
| T    | value | sets the initial value of type `T` |

## Fields

### Value

<div class="markdown level1 summary">

The wrapped value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public T Value
```

#### Field Value

| Type | Description |
|------|-------------|
| T    |             |

## Methods

### Equals(Object)

<div class="markdown level1 summary">

Check if this value is equal to a boxed object value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object obj)
```

#### Parameters

| Type          | Name | Description                      |
|---------------|------|----------------------------------|
| System.Object | obj  | The boxed value to check against |

#### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true if equal |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(ForceNetworkSerializeByMemcpy\<T\>)

<div class="markdown level1 summary">

Check if wrapped values are equal

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(ForceNetworkSerializeByMemcpy<T> other)
```

#### Parameters

| Type                               | Name  | Description   |
|------------------------------------|-------|---------------|
| ForceNetworkSerializeByMemcpy\<T\> | other | Other wrapper |

#### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true if equal |

### GetHashCode()

<div class="markdown level1 summary">

Obtains the wrapped value's hash code

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override int GetHashCode()
```

#### Returns

| Type         | Description               |
|--------------|---------------------------|
| System.Int32 | Wrapped value's hash code |

#### Overrides

<div>

System.ValueType.GetHashCode()

</div>

## Operators

### Implicit(T To ForceNetworkSerializeByMemcpy\<T\>)

<div class="markdown level1 summary">

Convert implicitly from a T value to a ForceNetworkSerializeByMemcpy

wrapper

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator ForceNetworkSerializeByMemcpy<T>(T underlyingValue)
```

#### Parameters

| Type | Name            | Description |
|------|-----------------|-------------|
| T    | underlyingValue | the value   |

#### Returns

| Type                               | Description   |
|------------------------------------|---------------|
| ForceNetworkSerializeByMemcpy\<T\> | a new wrapper |

### Implicit(ForceNetworkSerializeByMemcpy\<T\> To T)

<div class="markdown level1 summary">

Convert implicitly from the ForceNetworkSerializeByMemcpy wrapper to the

underlying value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator T(ForceNetworkSerializeByMemcpy<T> container)
```

#### Parameters

| Type                               | Name      | Description |
|------------------------------------|-----------|-------------|
| ForceNetworkSerializeByMemcpy\<T\> | container | The wrapper |

#### Returns

| Type | Description          |
|------|----------------------|
| T    | The underlying value |

### Implements

<div>

INetworkSerializeByMemcpy

</div>

<div>

System.IEquatable\<T\>

</div>
