---  
id: Unity.Netcode.BitReader  
title: Unity.Netcode.BitReader  
---

<div class="markdown level0 summary">

Helper class for doing bitwise reads for a FastBufferReader. Ensures all
bitwise reads end on proper byte alignment so FastBufferReader doesn't
have to be concerned with misaligned reads.

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

``` lang-csharp
public ref struct BitReader
```

## 

### BitAligned

<div class="markdown level1 summary">

Whether or not the current BitPosition is evenly divisible by 8. I.e.
whether or not the BitPosition is at a byte boundary.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool BitAligned { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### Dispose()

<div class="markdown level1 summary">

Pads the read bit count to byte alignment and commits the read back to
the reader

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### ReadBit(out Boolean)

<div class="markdown level1 summary">

Read a single bit from the buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBit(out bool bit)
```

#### Parameters

| Type           | Name | Description                                                 |
|----------------|------|-------------------------------------------------------------|
| System.Boolean | bit  | Out value of the bit. True represents 1, False represents 0 |

### ReadBits(out Byte, UInt32)

<div class="markdown level1 summary">

Read bits from stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBits(out byte value, uint bitCount)
```

#### Parameters

| Type          | Name     | Description               |
|---------------|----------|---------------------------|
| System.Byte   | value    | Value to store bits into. |
| System.UInt32 | bitCount | Amount of bits to read.   |

### ReadBits(out UInt64, UInt32)

<div class="markdown level1 summary">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBits(out ulong value, uint bitCount)
```

#### Parameters

| Type          | Name     | Description               |
|---------------|----------|---------------------------|
| System.UInt64 | value    | Value to store bits into. |
| System.UInt32 | bitCount | Amount of bits to read    |

### TryBeginReadBits(UInt32)

<div class="markdown level1 summary">

Verifies the requested bit count can be read from the buffer. This
exists as a separate method to allow multiple bit reads to be bounds
checked with a single call. If it returns false, you may not read, and
in editor and development builds, attempting to do so will throw an
exception. In release builds, attempting to do so will read junk memory.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TryBeginReadBits(uint bitCount)
```

#### Parameters

| Type          | Name     | Description                               |
|---------------|----------|-------------------------------------------|
| System.UInt32 | bitCount | Number of bits you want to read, in total |

#### Returns

| Type           | Description                                                    |
|----------------|----------------------------------------------------------------|
| System.Boolean | True if you can read, false if that would exceed buffer bounds |
