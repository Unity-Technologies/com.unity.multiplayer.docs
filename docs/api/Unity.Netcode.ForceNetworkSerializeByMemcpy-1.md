---
id: Unity.Netcode.ForceNetworkSerializeByMemcpy-1
title: Unity.Netcode.ForceNetworkSerializeByMemcpy-1
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Struct ForceNetworkSerializeByMemcpy\<T\>

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

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

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

The default constructor for ForceNetworkSerializeByMemcpy\<T\>

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

| Type | Name  | Description                        |
|------|-------|------------------------------------|
| T    | value | sets the initial value of type `T` |

### Fields

#### Value

<div class="markdown level1 summary">

The wrapped value

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

Check if this value is equal to a boxed object value

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

| Type          | Name | Description                      |
|---------------|------|----------------------------------|
| System.Object | obj  | The boxed value to check against |

##### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true if equal |

##### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

#### Equals(ForceNetworkSerializeByMemcpy\<T\>)

<div class="markdown level1 summary">

Check if wrapped values are equal

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

| Type                               | Name  | Description   |
|------------------------------------|-------|---------------|
| ForceNetworkSerializeByMemcpy\<T\> | other | Other wrapper |

##### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true if equal |

#### GetHashCode()

<div class="markdown level1 summary">

Obtains the wrapped value's hash code

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

| Type         | Description               |
|--------------|---------------------------|
| System.Int32 | Wrapped value's hash code |

##### Overrides

<div>

System.ValueType.GetHashCode()

</div>

### Operators

#### Implicit(T to ForceNetworkSerializeByMemcpy\<T\>)

<div class="markdown level1 summary">

Convert implicitly from a T value to a ForceNetworkSerializeByMemcpy
wrapper

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
| T    | underlyingValue | the value   |

##### Returns

| Type                               | Description   |
|------------------------------------|---------------|
| ForceNetworkSerializeByMemcpy\<T\> | a new wrapper |

#### Implicit(ForceNetworkSerializeByMemcpy\<T\> to T)

<div class="markdown level1 summary">

Convert implicitly from the ForceNetworkSerializeByMemcpy wrapper to the
underlying value

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
| ForceNetworkSerializeByMemcpy\<T\> | container | The wrapper |

##### Returns

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

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
