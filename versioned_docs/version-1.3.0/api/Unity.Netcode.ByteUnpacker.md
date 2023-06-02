---
id: Unity.Netcode.ByteUnpacker
title: Unity.Netcode.ByteUnpacker
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:10 pm
---

<div class="markdown level0 summary">

Byte Unpacking Helper Class Use this class to unpack values during deserialization for values that were packed. BytePacker to pack unpacked values

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public static class ByteUnpacker
```

## Methods

### ReadValueBitPacked(FastBufferReader, Out Int16)

<div class="markdown level1 summary">

Read a bit-packed 14-bit signed short from the stream. See BytePacker.cs

for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out short value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int16     | value  | The value to read       |

### ReadValueBitPacked(FastBufferReader, Out Int32)

<div class="markdown level1 summary">

Read a bit-packed 29-bit signed int from the stream. See BytePacker.cs

for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out int value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int32     | value  | The value to read       |

### ReadValueBitPacked(FastBufferReader, Out Int64)

<div class="markdown level1 summary">

Read a bit-packed 60-bit signed long from the stream. See BytePacker.cs

for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out long value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int64     | value  | The value to read       |

### ReadValueBitPacked(FastBufferReader, Out UInt16)

<div class="markdown level1 summary">

Read a bit-packed 15-bit unsigned short from the stream. See

BytePacker.cs for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out ushort value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt16    | value  | The value to read       |

### ReadValueBitPacked(FastBufferReader, Out UInt32)

<div class="markdown level1 summary">

Read a bit-packed 30-bit unsigned int from the stream. See BytePacker.cs

for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out uint value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt32    | value  | The value to read       |

### ReadValueBitPacked(FastBufferReader, Out UInt64)

<div class="markdown level1 summary">

Read a bit-packed 61-bit signed long from the stream. See BytePacker.cs

for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out ulong value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt64    | value  | The value to read       |

### ReadValuePacked(FastBufferReader, Out Color)

<div class="markdown level1 summary">

Convenience method that reads four varint floats from the color from the

stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Color color)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Color            | color  | Color to read           |

### ReadValuePacked(FastBufferReader, Out Color32)

<div class="markdown level1 summary">

Convenience method that reads four varint floats from the color from the

stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Color32 color)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Color32          | color  | Color to read           |

### ReadValuePacked(FastBufferReader, Out Quaternion)

<div class="markdown level1 summary">

Reads the rotation from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Quaternion rotation)
```

#### Parameters

| Type             | Name     | Description             |
|------------------|----------|-------------------------|
| FastBufferReader | reader   | The reader to read from |
| Quaternion       | rotation | Rotation to read        |

### ReadValuePacked(FastBufferReader, Out Ray)

<div class="markdown level1 summary">

Convenience method that reads two packed Vector3 from the ray from the

stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Ray ray)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Ray              | ray    | Ray to read             |

### ReadValuePacked(FastBufferReader, Out Ray2D)

<div class="markdown level1 summary">

Convenience method that reads two packed Vector2 from the ray from the

stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Ray2D ray2d)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Ray2D            | ray2d  | Ray2D to read           |

### ReadValuePacked(FastBufferReader, Out Boolean)

<div class="markdown level1 summary">

Read a boolean from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out bool value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Boolean   | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Byte)

<div class="markdown level1 summary">

Read a byte from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out byte value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Byte      | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Char)

<div class="markdown level1 summary">

Read a two-byte character as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out char c)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Char      | c      | Value to read           |

### ReadValuePacked(FastBufferReader, Out Double)

<div class="markdown level1 summary">

Read double-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out double value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Double    | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Int16)

<div class="markdown level1 summary">

Read an usigned short (Int16) as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out short value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int16     | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Int32)

<div class="markdown level1 summary">

Read a signed int (Int32) as a ZigZag encoded varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out int value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int32     | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Int64)

<div class="markdown level1 summary">

Read a signed long (Int64) as a ZigZag encoded varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out long value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int64     | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out SByte)

<div class="markdown level1 summary">

Read a signed byte from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out sbyte value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.SByte     | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Single)

<div class="markdown level1 summary">

Read single-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out float value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Single    | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out String)

<div class="markdown level1 summary">

Reads a string in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out string s)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.String    | s      |                         |

### ReadValuePacked(FastBufferReader, Out UInt16)

<div class="markdown level1 summary">

Read an unsigned short (UInt16) as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out ushort value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt16    | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out UInt32)

<div class="markdown level1 summary">

Read an unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out uint value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt32    | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out UInt64)

<div class="markdown level1 summary">

Read an unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out ulong value)
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt64    | value  | Value to read           |

### ReadValuePacked(FastBufferReader, Out Vector2)

<div class="markdown level1 summary">

Convenience method that reads two varint floats from the vector from the

stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Vector2 vector2)
```

#### Parameters

| Type             | Name    | Description             |
|------------------|---------|-------------------------|
| FastBufferReader | reader  | The reader to read from |
| Vector2          | vector2 | Vector to read          |

### ReadValuePacked(FastBufferReader, Out Vector3)

<div class="markdown level1 summary">

Convenience method that reads three varint floats from the vector from

the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Vector3 vector3)
```

#### Parameters

| Type             | Name    | Description             |
|------------------|---------|-------------------------|
| FastBufferReader | reader  | The reader to read from |
| Vector3          | vector3 | Vector to read          |

### ReadValuePacked(FastBufferReader, Out Vector4)

<div class="markdown level1 summary">

Convenience method that reads four varint floats from the vector from

the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Vector4 vector4)
```

#### Parameters

| Type             | Name    | Description             |
|------------------|---------|-------------------------|
| FastBufferReader | reader  | The reader to read from |
| Vector4          | vector4 | Vector to read          |

### ReadValuePacked\<TEnum\>(FastBufferReader, Out TEnum)

<div class="markdown level1 summary">

Read a packed enum value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ReadValuePacked<TEnum>(FastBufferReader reader, out TEnum value)

    where TEnum : struct, Enum
```

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| TEnum            | value  | The value that's read   |

#### Type Parameters

| Name  | Description          |
|-------|----------------------|
| TEnum | Type of enum to read |

#### Exceptions

| Type                             | Condition                                                                                                                                  |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| System.InvalidOperationException | Throws InvalidOperationException if an enum somehow ends up not being the size of a byte, short, int, or long (which should be impossible) |
