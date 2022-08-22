---
id: Unity.Networking.Transport.NetworkInterfaceEndPoint
title: Unity.Networking.Transport.NetworkInterfaceEndPoint
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

# Struct NetworkInterfaceEndPoint

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<NetworkInterfaceEndPoint\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

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

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkInterfaceEndPoint : IEquatable<NetworkInterfaceEndPoint>
```

</div>

### Fields

#### data

<div class="markdown level1 summary">

Raw representation of the interface endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *data
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### dataLength

<div class="markdown level1 summary">

Actual length of the interface endpoint's raw representation.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int dataLength
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### k_MaxLength

<div class="markdown level1 summary">

Maximum length of the interface endpoint's raw representation.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int k_MaxLength = 56
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Properties

#### IsValid

<div class="markdown level1 summary">

Whether the interface endpoint is valid or not.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsValid { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool Equals(object other)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

#### Equals(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Equals(NetworkInterfaceEndPoint other)
```

</div>

##### Parameters

| Type                     | Name  | Description |
|--------------------------|-------|-------------|
| NetworkInterfaceEndPoint | other |             |

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

#### ToFixedString()

<div class="markdown level1 summary">

Returns the NetworkInterfaceEndPoint as a .

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FixedString64Bytes ToFixedString()
```

</div>

##### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString64Bytes |             |

#### ToString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override string ToString()
```

</div>

##### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

##### Overrides

<div>

System.ValueType.ToString()

</div>

### Operators

#### Equality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator ==(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)
```

</div>

##### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator !=(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)
```

</div>

##### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

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
