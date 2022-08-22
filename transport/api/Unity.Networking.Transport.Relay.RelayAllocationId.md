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

# Struct RelayAllocationId

<div class="markdown level0 summary">

Allocation Id is a unique identifier for a connected client/host to a
Relay server. This identifier is used by the Relay protocol as the
address of the client.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<RelayAllocationId\>

</div>

<div>

System.IComparable\<RelayAllocationId\>

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

###### **Namespace**: Unity.Networking.Transport.Relay

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct RelayAllocationId : IEquatable<RelayAllocationId>, IComparable<RelayAllocationId>
```

</div>

### Fields

#### k_Length

<div class="markdown level1 summary">

The length in bytes of the Allocation Id.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int k_Length = 16
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Value

<div class="markdown level1 summary">

The raw data of the Allocation Id.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *Value
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### Methods

#### CompareTo(RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int CompareTo(RelayAllocationId other)
```

</div>

##### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| RelayAllocationId | other |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

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

#### Equals(RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Equals(RelayAllocationId other)
```

</div>

##### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| RelayAllocationId | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### FromBytePointer(Byte\*, Int32)

<div class="markdown level1 summary">

Converts a byte pointer to a RelayAllocationId.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static RelayAllocationId FromBytePointer(byte *dataPtr, int length)
```

</div>

##### Parameters

| Type          | Name    | Description                                   |
|---------------|---------|-----------------------------------------------|
| System.Byte\* | dataPtr | The pointer to the data of the Allocation Id. |
| System.Int32  | length  | The length of the data.                       |

##### Returns

| Type              | Description                                                     |
|-------------------|-----------------------------------------------------------------|
| RelayAllocationId | Returns a RelayAllocationId constructed from the provided data. |

##### Exceptions

| Type                     | Condition                                                                   |
|--------------------------|-----------------------------------------------------------------------------|
| System.ArgumentException | Provided byte array length is invalid, must be {k_Length} but got {length}. |

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

#### Equality(RelayAllocationId, RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator ==(RelayAllocationId lhs, RelayAllocationId rhs)
```

</div>

##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| RelayAllocationId | lhs  |             |
| RelayAllocationId | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(RelayAllocationId, RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator !=(RelayAllocationId lhs, RelayAllocationId rhs)
```

</div>

##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| RelayAllocationId | lhs  |             |
| RelayAllocationId | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable\<T\>

</div>

<div>

System.IComparable\<T\>

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
