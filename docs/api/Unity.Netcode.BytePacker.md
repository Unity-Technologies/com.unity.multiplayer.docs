---
id: Unity.Netcode.BytePacker
title: Unity.Netcode.BytePacker
---

# Class BytePacker


Utility class for packing values in serialization. ByteUnpacker to
unpack packed values.







##### Inheritance


System.Object




BytePacker






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public static class BytePacker
```



### Fields

#### BitPackedIntMax


Maximum serializable value for a BitPacked int






##### Declaration


``` lang-csharp
public const int BitPackedIntMax = 536870911
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### BitPackedIntMin


Minimum serializable value size for a BitPacked int






##### Declaration


``` lang-csharp
public const int BitPackedIntMin = -536870912
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### BitPackedLongMax


Maximum serializable value for a BitPacked long






##### Declaration


``` lang-csharp
public const long BitPackedLongMax = 1152921504606846975L
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### BitPackedLongMin


Minimum serializable value size for a BitPacked long






##### Declaration


``` lang-csharp
public const long BitPackedLongMin = -1152921504606846976L
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### BitPackedShortMax


Maximum serializable value for a BitPacked short






##### Declaration


``` lang-csharp
public const short BitPackedShortMax = 16383
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

#### BitPackedShortMin


Minimum serializable value size for a BitPacked ushort






##### Declaration


``` lang-csharp
public const short BitPackedShortMin = -16384
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

#### BitPackedUintMax


Maximum serializable value for a BitPacked uint (minimum for unsigned is
0)






##### Declaration


``` lang-csharp
public const uint BitPackedUintMax = 1073741823U
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### BitPackedULongMax


Maximum serializable value for a BitPacked ulong (minimum for unsigned
is 0)






##### Declaration


``` lang-csharp
public const ulong BitPackedULongMax = 2305843009213693951UL
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### BitPackedUshortMax


Maximum serializable value for a BitPacked ushort (minimum for unsigned
is 0)






##### Declaration


``` lang-csharp
public const ushort BitPackedUshortMax = 32767
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Methods

#### WriteValueBitPacked(FastBufferWriter, Int16)


Writes a 14-bit signed short to the buffer in a bit-encoded packed
format. The first bit indicates whether the value is 1 byte or 2. The
sign bit takes up another bit. That leaves 14 bits for the value. A
value greater than 2^14-1 or less than -2^14 will throw an exception in
editor and development builds. In release builds builds the exception is
not thrown and the value is truncated by losing its two most significant
bits after zig-zag encoding.






##### Declaration


``` lang-csharp
public static void WriteValueBitPacked(FastBufferWriter writer, short value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Int16     | value  | The value to pack      |

#### WriteValueBitPacked(FastBufferWriter, Int32)


Writes a 29-bit signed int to the buffer in a bit-encoded packed format.
The first two bits indicate whether the value is 1, 2, 3, or 4 bytes.
The sign bit takes up another bit. That leaves 29 bits for the value. A
value greater than 2^29-1 or less than -2^29 will throw an exception in
editor and development builds. In release builds builds the exception is
not thrown and the value is truncated by losing its three most
significant bits after zig-zag encoding.






##### Declaration


``` lang-csharp
public static void WriteValueBitPacked(FastBufferWriter writer, int value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Int32     | value  | The value to pack      |

#### WriteValueBitPacked(FastBufferWriter, Int64)


Writes a 60-bit signed long to the buffer in a bit-encoded packed
format. The first three bits indicate whether the value is 1, 2, 3, 4,
5, 6, 7, or 8 bytes. The sign bit takes up another bit. That leaves 60
bits for the value. A value greater than 2^60-1 or less than -2^60 will
throw an exception in editor and development builds. In release builds
builds the exception is not thrown and the value is truncated by losing
its four most significant bits after zig-zag encoding.






##### Declaration


``` lang-csharp
public static void WriteValueBitPacked(FastBufferWriter writer, long value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Int64     | value  | The value to pack      |

#### WriteValueBitPacked(FastBufferWriter, UInt16)


Writes a 15-bit unsigned short to the buffer in a bit-encoded packed
format. The first bit indicates whether the value is 1 byte or 2. That
leaves 15 bits for the value. A value greater than 2^15-1 will throw an
exception in editor and development builds. In release builds builds the
exception is not thrown and the value is truncated by losing its most
significant bit.






##### Declaration


``` lang-csharp
public static void WriteValueBitPacked(FastBufferWriter writer, ushort value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.UInt16    | value  | The value to pack      |

#### WriteValueBitPacked(FastBufferWriter, UInt32)


Writes a 30-bit unsigned int to the buffer in a bit-encoded packed
format. The first two bits indicate whether the value is 1, 2, 3, or 4
bytes. That leaves 30 bits for the value. A value greater than 2^30-1
will throw an exception in editor and development builds. In release
builds builds the exception is not thrown and the value is truncated by
losing its two most significant bits.






##### Declaration


``` lang-csharp
public static void WriteValueBitPacked(FastBufferWriter writer, uint value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.UInt32    | value  | The value to pack      |

#### WriteValueBitPacked(FastBufferWriter, UInt64)


Writes a 61-bit unsigned long to the buffer in a bit-encoded packed
format. The first three bits indicate whether the value is 1, 2, 3, 4,
5, 6, 7, or 8 bytes. That leaves 31 bits for the value. A value greater
than 2^61-1 will throw an exception in editor and development builds. In
release builds builds the exception is not thrown and the value is
truncated by losing its three most significant bits.






##### Declaration


``` lang-csharp
public static void WriteValueBitPacked(FastBufferWriter writer, ulong value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.UInt64    | value  | The value to pack      |

#### WriteValuePacked(FastBufferWriter, Color)


Convenience method that writes four varint floats from the color to the
buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Color color)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| Color            | color  | Color to write         |

#### WriteValuePacked(FastBufferWriter, Color32)


Convenience method that writes four varint floats from the color to the
buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Color32 color)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| Color32          | color  | Color to write         |

#### WriteValuePacked(FastBufferWriter, Quaternion)


Writes the rotation to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Quaternion rotation)
```



##### Parameters

| Type             | Name     | Description            |
|------------------|----------|------------------------|
| FastBufferWriter | writer   | The writer to write to |
| Quaternion       | rotation | Rotation to write      |

#### WriteValuePacked(FastBufferWriter, Ray)


Convenience method that writes two packed Vector3 from the ray to the
buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Ray ray)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| Ray              | ray    | Ray to write           |

#### WriteValuePacked(FastBufferWriter, Ray2D)


Convenience method that writes two packed Vector2 from the ray to the
buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Ray2D ray2d)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| Ray2D            | ray2d  | Ray2D to write         |

#### WriteValuePacked(FastBufferWriter, Boolean)


Write a bool to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, bool value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Boolean   | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Byte)


Write a byte to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, byte value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Byte      | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Char)


Write a two-byte character as a varint to the buffer. WARNING: If the
value you're writing is \> 2287, this will use MORE space (3 bytes
instead of 2), and if your value is \> 240 you'll get no savings at all.
Only use this if you're certain your value will be small.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, char c)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Char      | c      | Value to write         |

#### WriteValuePacked(FastBufferWriter, Double)


Write double-precision floating point value to the buffer as a varint






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, double value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Double    | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Int16)


Write a signed short (Int16) as a ZigZag encoded varint to the buffer.
WARNING: If the value you're writing is \> 2287, this will use MORE
space (3 bytes instead of 2), and if your value is \> 240 you'll get no
savings at all. Only use this if you're certain your value will be
small.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, short value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Int16     | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Int32)


Write a signed int (Int32) as a ZigZag encoded varint to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, int value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Int32     | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Int64)


Write a signed long (Int64) as a ZigZag encoded varint to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, long value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Int64     | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, SByte)


Write a signed byte to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, sbyte value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.SByte     | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Single)


Write single-precision floating point value to the buffer as a varint






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, float value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.Single    | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, String)


Writes a string in a packed format






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, string s)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.String    | s      | The value to pack      |

#### WriteValuePacked(FastBufferWriter, UInt16)


Write an unsigned short (UInt16) as a varint to the buffer. WARNING: If
the value you're writing is \> 2287, this will use MORE space (3 bytes
instead of 2), and if your value is \> 240 you'll get no savings at all.
Only use this if you're certain your value will be small.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, ushort value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.UInt16    | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, UInt32)


Write an unsigned int (UInt32) to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, uint value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.UInt32    | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, UInt64)


Write an unsigned long (UInt64) to the buffer.






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, ulong value)
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| System.UInt64    | value  | Value to write         |

#### WriteValuePacked(FastBufferWriter, Vector2)


Convenience method that writes two varint floats from the vector to the
buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Vector2 vector2)
```



##### Parameters

| Type             | Name    | Description            |
|------------------|---------|------------------------|
| FastBufferWriter | writer  | The writer to write to |
| Vector2          | vector2 | Vector to write        |

#### WriteValuePacked(FastBufferWriter, Vector3)


Convenience method that writes three varint floats from the vector to
the buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Vector3 vector3)
```



##### Parameters

| Type             | Name    | Description            |
|------------------|---------|------------------------|
| FastBufferWriter | writer  | The writer to write to |
| Vector3          | vector3 | Vector to write        |

#### WriteValuePacked(FastBufferWriter, Vector4)


Convenience method that writes four varint floats from the vector to the
buffer






##### Declaration


``` lang-csharp
public static void WriteValuePacked(FastBufferWriter writer, Vector4 vector4)
```



##### Parameters

| Type             | Name    | Description            |
|------------------|---------|------------------------|
| FastBufferWriter | writer  | The writer to write to |
| Vector4          | vector4 | Vector to write        |

#### WriteValuePacked\<TEnum\>(FastBufferWriter, TEnum)


Write a packed enum value.






##### Declaration


``` lang-csharp
public static void WriteValuePacked<TEnum>(FastBufferWriter writer, TEnum value)
    where TEnum : struct, Enum
```



##### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| FastBufferWriter | writer | The writer to write to |
| TEnum            | value  | The value to write     |

##### Type Parameters

| Name  | Description  |
|-------|--------------|
| TEnum | An enum type |



