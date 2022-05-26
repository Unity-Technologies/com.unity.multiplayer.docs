---  
id: Unity.Netcode.ByteUnpacker  
title: Unity.Netcode.ByteUnpacker  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

ByteUnpacker

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public static class ByteUnpacker
```

</div>

### Methods

#### ReadValueBitPacked(FastBufferReader, out Int16)

<div class="markdown level1 summary">

Read a bit-packed 14-bit signed short from the stream. See BytePacker.cs
for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out short value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int16     | value  | The value to read       |

#### ReadValueBitPacked(FastBufferReader, out Int32)

<div class="markdown level1 summary">

Read a bit-packed 29-bit signed int from the stream. See BytePacker.cs
for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out int value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int32     | value  | The value to read       |

#### ReadValueBitPacked(FastBufferReader, out Int64)

<div class="markdown level1 summary">

Read a bit-packed 60-bit signed long from the stream. See BytePacker.cs
for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out long value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int64     | value  | The value to read       |

#### ReadValueBitPacked(FastBufferReader, out UInt16)

<div class="markdown level1 summary">

Read a bit-packed 15-bit unsigned short from the stream. See
BytePacker.cs for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out ushort value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt16    | value  | The value to read       |

#### ReadValueBitPacked(FastBufferReader, out UInt32)

<div class="markdown level1 summary">

Read a bit-packed 30-bit unsigned int from the stream. See BytePacker.cs
for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out uint value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt32    | value  | The value to read       |

#### ReadValueBitPacked(FastBufferReader, out UInt64)

<div class="markdown level1 summary">

Read a bit-packed 61-bit signed long from the stream. See BytePacker.cs
for a description of the format.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValueBitPacked(FastBufferReader reader, out ulong value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt64    | value  | The value to read       |

#### ReadValuePacked(FastBufferReader, out Color)

<div class="markdown level1 summary">

Convenience method that reads four varint floats from the color from the
stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Color color)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Color            | color  | Color to read           |

#### ReadValuePacked(FastBufferReader, out Color32)

<div class="markdown level1 summary">

Convenience method that reads four varint floats from the color from the
stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Color32 color)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Color32          | color  | Color to read           |

#### ReadValuePacked(FastBufferReader, out Quaternion)

<div class="markdown level1 summary">

Reads the rotation from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Quaternion rotation)
```

</div>

##### Parameters

| Type             | Name     | Description             |
|------------------|----------|-------------------------|
| FastBufferReader | reader   | The reader to read from |
| Quaternion       | rotation | Rotation to read        |

#### ReadValuePacked(FastBufferReader, out Ray)

<div class="markdown level1 summary">

Convenience method that reads two packed Vector3 from the ray from the
stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Ray ray)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Ray              | ray    | Ray to read             |

#### ReadValuePacked(FastBufferReader, out Ray2D)

<div class="markdown level1 summary">

Convenience method that reads two packed Vector2 from the ray from the
stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Ray2D ray2d)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| Ray2D            | ray2d  | Ray2D to read           |

#### ReadValuePacked(FastBufferReader, out Boolean)

<div class="markdown level1 summary">

Read a boolean from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out bool value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Boolean   | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Byte)

<div class="markdown level1 summary">

Read a byte from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out byte value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Byte      | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Char)

<div class="markdown level1 summary">

Read a two-byte character as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out char c)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Char      | c      | Value to read           |

#### ReadValuePacked(FastBufferReader, out Double)

<div class="markdown level1 summary">

Read double-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out double value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Double    | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Int16)

<div class="markdown level1 summary">

Read an usigned short (Int16) as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out short value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int16     | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Int32)

<div class="markdown level1 summary">

Read a signed int (Int32) as a ZigZag encoded varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out int value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int32     | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Int64)

<div class="markdown level1 summary">

Read a signed long (Int64) as a ZigZag encoded varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out long value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Int64     | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out SByte)

<div class="markdown level1 summary">

Read a signed byte from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out sbyte value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.SByte     | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Single)

<div class="markdown level1 summary">

Read single-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out float value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.Single    | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out String)

<div class="markdown level1 summary">

Reads a string in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out string s)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.String    | s      |                         |

#### ReadValuePacked(FastBufferReader, out UInt16)

<div class="markdown level1 summary">

Read an unsigned short (UInt16) as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out ushort value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt16    | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out UInt32)

<div class="markdown level1 summary">

Read an unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out uint value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt32    | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out UInt64)

<div class="markdown level1 summary">

Read an unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out ulong value)
```

</div>

##### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| FastBufferReader | reader | The reader to read from |
| System.UInt64    | value  | Value to read           |

#### ReadValuePacked(FastBufferReader, out Vector2)

<div class="markdown level1 summary">

Convenience method that reads two varint floats from the vector from the
stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Vector2 vector2)
```

</div>

##### Parameters

| Type             | Name    | Description             |
|------------------|---------|-------------------------|
| FastBufferReader | reader  | The reader to read from |
| Vector2          | vector2 | Vector to read          |

#### ReadValuePacked(FastBufferReader, out Vector3)

<div class="markdown level1 summary">

Convenience method that reads three varint floats from the vector from
the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Vector3 vector3)
```

</div>

##### Parameters

| Type             | Name    | Description             |
|------------------|---------|-------------------------|
| FastBufferReader | reader  | The reader to read from |
| Vector3          | vector3 | Vector to read          |

#### ReadValuePacked(FastBufferReader, out Vector4)

<div class="markdown level1 summary">

Convenience method that reads four varint floats from the vector from
the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked(FastBufferReader reader, out Vector4 vector4)
```

</div>

##### Parameters

| Type             | Name    | Description             |
|------------------|---------|-------------------------|
| FastBufferReader | reader  | The reader to read from |
| Vector4          | vector4 | Vector to read          |

#### ReadValuePacked\<TEnum\>(FastBufferReader, out TEnum)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void ReadValuePacked<TEnum>(FastBufferReader reader, out TEnum value)
    where TEnum : struct, Enum
```

</div>

##### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferReader | reader |             |
| TEnum            | value  |             |

##### Type Parameters

| Name  | Description |
|-------|-------------|
| TEnum |             |

 
