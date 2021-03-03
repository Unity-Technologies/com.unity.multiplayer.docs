---  
id: MLAPI.Serialization.EndianHelper  
title: MLAPI.Serialization.EndianHelper  
---

<div class="markdown level0 summary">

Binary helper class

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

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class EndianHelper

## Methods 

### SwapEndian(UInt32)

<div class="markdown level1 summary">

Swaps the endianness of a given integer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static uint SwapEndian(uint value)

#### Parameters

| Type          | Name  | Description                   |
|---------------|-------|-------------------------------|
| System.UInt32 | value | The integer to swap endianess |

#### Returns

| Type          | Description                         |
|---------------|-------------------------------------|
| System.UInt32 | The integer with swapped endianness |

### SwapEndian(UInt64)

<div class="markdown level1 summary">

Swaps the endianness of a given integer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static ulong SwapEndian(ulong value)

#### Parameters

| Type          | Name  | Description                   |
|---------------|-------|-------------------------------|
| System.UInt64 | value | The integer to swap endianess |

#### Returns

| Type          | Description                         |
|---------------|-------------------------------------|
| System.UInt64 | The integer with swapped endianness |
