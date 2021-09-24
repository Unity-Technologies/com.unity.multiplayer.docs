---  
id: Unity.Networking.Transport.Utilities.SequenceHelpers  
title: Unity.Networking.Transport.Utilities.SequenceHelpers  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

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

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct SequenceHelpers

## Methods 

### AbsDistance(UInt16, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AbsDistance(ushort lhs, ushort rhs)

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

    public static string BitMaskToString(uint mask)

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

    public static bool GreaterThan16(ushort lhs, ushort rhs)

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

    public static bool IsNewer(uint current, uint old)

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

    public static bool LessThan16(ushort lhs, ushort rhs)

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

    public static bool StalePacket(ushort sequence, ushort oldSequence, ushort windowSize)

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
