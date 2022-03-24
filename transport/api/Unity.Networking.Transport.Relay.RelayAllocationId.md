---  
id: Unity.Networking.Transport.Relay.RelayAllocationId  
title: Unity.Networking.Transport.Relay.RelayAllocationId  
---

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

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct RelayAllocationId : IEquatable<RelayAllocationId>, IComparable<RelayAllocationId>
```

## 

### k_Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int k_Length = 16
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Value

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *Value
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

## 

### CompareTo(RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CompareTo(RelayAllocationId other)
```

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| RelayAllocationId | other |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object other)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(RelayAllocationId other)
```

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| RelayAllocationId | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### FromBytePointer(Byte\*, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayAllocationId FromBytePointer(byte *dataPtr, int length)
```

#### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.Byte\* | dataPtr |             |
| System.Int32  | length  |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| RelayAllocationId |             |

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

## 

### Equality(RelayAllocationId, RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(RelayAllocationId lhs, RelayAllocationId rhs)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| RelayAllocationId | lhs  |             |
| RelayAllocationId | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(RelayAllocationId, RelayAllocationId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(RelayAllocationId lhs, RelayAllocationId rhs)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| RelayAllocationId | lhs  |             |
| RelayAllocationId | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable&lt;T&gt;

</div>

<div>

System.IComparable&lt;T&gt;

</div>
