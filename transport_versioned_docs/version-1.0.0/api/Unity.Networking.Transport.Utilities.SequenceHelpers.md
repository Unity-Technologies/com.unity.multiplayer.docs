---  
id: Unity.Networking.Transport.Utilities.SequenceHelpers  
title: Unity.Networking.Transport.Utilities.SequenceHelpers  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class SequenceHelpers
```

## 

### AbsDistance(UInt16, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int AbsDistance(ushort lhs, ushort rhs)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt16 | lhs  |             |
| System.UInt16 | rhs  |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### BitMaskToString(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static string BitMaskToString(uint mask)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt32 | mask |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

### GreaterThan16(UInt16, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool GreaterThan16(ushort lhs, ushort rhs)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt16 | lhs  |             |
| System.UInt16 | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsNewer(UInt32, UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool IsNewer(uint current, uint old)
```

#### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.UInt32 | current |             |
| System.UInt32 | old     |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LessThan16(UInt16, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool LessThan16(ushort lhs, ushort rhs)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt16 | lhs  |             |
| System.UInt16 | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### StalePacket(UInt16, UInt16, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool StalePacket(ushort sequence, ushort oldSequence, ushort windowSize)
```

#### Parameters

| Type          | Name        | Description |
|---------------|-------------|-------------|
| System.UInt16 | sequence    |             |
| System.UInt16 | oldSequence |             |
| System.UInt16 | windowSize  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
