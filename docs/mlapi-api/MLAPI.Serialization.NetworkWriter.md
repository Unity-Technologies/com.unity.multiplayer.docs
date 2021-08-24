---  
id: MLAPI.Serialization.NetworkWriter  
title: MLAPI.Serialization.NetworkWriter  
---

<div class="markdown level0 summary">

A BinaryWriter that can do bit wise manipulation when backed by a
NetworkBuffer

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

<div class="level2">

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

    public class NetworkWriter

## Constructors 

### NetworkWriter(Stream)

<div class="markdown level1 summary">

Creates a new NetworkWriter backed by a given stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkWriter(Stream stream)

#### Parameters

| Type             | Name   | Description                   |
|------------------|--------|-------------------------------|
| System.IO.Stream | stream | The stream to use for writing |

## Methods 

### ReadAndWrite(NetworkReader, Int64)

<div class="markdown level1 summary">

ReadAndWrite Uses a NetworkReader to read (targetSize) bytes and will
write (targetSize) bytes to current stream. This reduces the iterations
required to write (n) bytes by a factor of up to 8x less iterations. for
blocks of memory that exceed 8 bytes in size. It also doesn't require
passing arrays over the stack. Ex: 256 bytes iterates 32 times vs 256
times ------------------------- 8x less iterations 64 bytes iterates 8
times vs 64 times----------------------------- 8x less iterations 22
bytes iterates 5 times ( 2-Int64 1-Int32 2-Byte) vs 22 times -- 4x less
iterations

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadAndWrite(NetworkReader sourceReader, long targetSize)

#### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| NetworkReader | sourceReader |             |
| System.Int64  | targetSize   |             |

### SetStream(Stream)

<div class="markdown level1 summary">

Changes the underlying stream the writer is writing to

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetStream(Stream stream)

#### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| System.IO.Stream | stream | The stream to write to |

### WriteArrayPacked(Array, Int64)

<div class="markdown level1 summary">

Writes an array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteArrayPacked(Array a, long count = -1L)

#### Parameters

| Type         | Name  | Description                     |
|--------------|-------|---------------------------------|
| System.Array | a     | The array to write              |
| System.Int64 | count | The amount of elements to write |

### WriteArrayPackedDiff(Array, Array, Int64)

<div class="markdown level1 summary">

Writes the diff between two arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteArrayPackedDiff(Array write, Array compare, long count = -1L)

#### Parameters

| Type         | Name    | Description                        |
|--------------|---------|------------------------------------|
| System.Array | write   | The new array                      |
| System.Array | compare | The previous array to use for diff |
| System.Int64 | count   | The amount of elements to write    |

### WriteBit(Boolean)

<div class="markdown level1 summary">

Writes a single bit

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteBit(bool bit)

#### Parameters

| Type           | Name | Description |
|----------------|------|-------------|
| System.Boolean | bit  |             |

### WriteBits(Byte, Int32)

<div class="markdown level1 summary">

Write bits to stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteBits(byte value, int bitCount)

#### Parameters

| Type         | Name     | Description              |
|--------------|----------|--------------------------|
| System.Byte  | value    | Value to get bits from.  |
| System.Int32 | bitCount | Amount of bits to write. |

### WriteBits(UInt64, Int32)

<div class="markdown level1 summary">

Write s certain amount of bits to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteBits(ulong value, int bitCount)

#### Parameters

| Type          | Name     | Description             |
|---------------|----------|-------------------------|
| System.UInt64 | value    | Value to get bits from. |
| System.Int32  | bitCount | Amount of bits to write |

### WriteBool(Boolean)

<div class="markdown level1 summary">

Writes a bool as a single bit

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteBool(bool value)

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | value |             |

### WriteByte(Byte)

<div class="markdown level1 summary">

Write a byte to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteByte(byte value)

#### Parameters

| Type        | Name  | Description    |
|-------------|-------|----------------|
| System.Byte | value | Value to write |

### WriteByteArray(Byte\[\], Int64)

<div class="markdown level1 summary">

Writes a byte array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteByteArray(byte[] b, long count = -1L)

#### Parameters

| Type            | Name  | Description                     |
|-----------------|-------|---------------------------------|
| System.Byte\[\] | b     | The array to write              |
| System.Int64    | count | The amount of elements to write |

### WriteByteArrayDiff(Byte\[\], Byte\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two byte arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteByteArrayDiff(byte[] write, byte[] compare, long count = -1L)

#### Parameters

| Type            | Name    | Description                        |
|-----------------|---------|------------------------------------|
| System.Byte\[\] | write   | The new array                      |
| System.Byte\[\] | compare | The previous array to use for diff |
| System.Int64    | count   | The amount of elements to write    |

### WriteBytes(Byte\[\], Int64, Int32)

<div class="markdown level1 summary">

WriteBytes Takes a byte array buffer and writes the bytes into the
currently assigned stream at its current position This reduces the
iterations required to write (n) bytes by a factor of up to 8x less
iterations. for blocks of memory that exceed 8 bytes in size. It also
doesn't require passing arrays over the stack. Ex: 256 bytes iterates 32
times vs 256 times ------------------------- 8x less iterations 64 bytes
iterates 8 times vs 64 times----------------------------- 8x less
iterations 22 bytes iterates 5 times ( 2-Int64 1-Int32 2-Byte) vs 22
times -- 4x less iterations

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteBytes(byte[] buffer, long targetSize, int offset = 0)

#### Parameters

| Type            | Name       | Description |
|-----------------|------------|-------------|
| System.Byte\[\] | buffer     |             |
| System.Int64    | targetSize |             |
| System.Int32    | offset     |             |

### WriteChar(Char)

<div class="markdown level1 summary">

Write a single character to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteChar(char c)

#### Parameters

| Type        | Name | Description        |
|-------------|------|--------------------|
| System.Char | c    | Character to write |

### WriteCharArray(Char\[\], Int64)

<div class="markdown level1 summary">

Writes a char array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteCharArray(char[] b, long count = -1L)

#### Parameters

| Type            | Name  | Description                     |
|-----------------|-------|---------------------------------|
| System.Char\[\] | b     | The array to write              |
| System.Int64    | count | The amount of elements to write |

### WriteCharArrayDiff(Char\[\], Char\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two char arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteCharArrayDiff(char[] write, char[] compare, long count = -1L)

#### Parameters

| Type            | Name    | Description                        |
|-----------------|---------|------------------------------------|
| System.Char\[\] | write   | The new array                      |
| System.Char\[\] | compare | The previous array to use for diff |
| System.Int64    | count   | The amount of elements to write    |

### WriteCharArrayPacked(Char\[\], Int64)

<div class="markdown level1 summary">

Writes a char array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteCharArrayPacked(char[] b, long count = -1L)

#### Parameters

| Type            | Name  | Description                     |
|-----------------|-------|---------------------------------|
| System.Char\[\] | b     | The array to write              |
| System.Int64    | count | The amount of elements to write |

### WriteCharArrayPackedDiff(Char\[\], Char\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two char arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteCharArrayPackedDiff(char[] write, char[] compare, long count = -1L)

#### Parameters

| Type            | Name    | Description                        |
|-----------------|---------|------------------------------------|
| System.Char\[\] | write   | The new array                      |
| System.Char\[\] | compare | The previous array to use for diff |
| System.Int64    | count   | The amount of elements to write    |

### WriteCharPacked(Char)

<div class="markdown level1 summary">

Write a two-byte character as a varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteCharPacked(char c)

#### Parameters

| Type        | Name | Description    |
|-------------|------|----------------|
| System.Char | c    | Value to write |

### WriteColor(Color)

<div class="markdown level1 summary">

Convenience method that writes four non-varint floats from the color to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteColor(Color color)

#### Parameters

| Type              | Name  | Description    |
|-------------------|-------|----------------|
| UnityEngine.Color | color | Color to write |

### WriteColor32(Color32)

<div class="markdown level1 summary">

Convenience method that writes four non-varint floats from the color to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteColor32(Color32 color32)

#### Parameters

| Type                | Name    | Description      |
|---------------------|---------|------------------|
| UnityEngine.Color32 | color32 | Color32 to write |

### WriteColorPacked(Color)

<div class="markdown level1 summary">

Convenience method that writes four varint floats from the color to the
stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteColorPacked(Color color)

#### Parameters

| Type              | Name  | Description    |
|-------------------|-------|----------------|
| UnityEngine.Color | color | Color to write |

### WriteDouble(Double)

<div class="markdown level1 summary">

Write double-precision floating point value to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDouble(double value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Double | value | Value to write |

### WriteDoubleArray(Double\[\], Int64)

<div class="markdown level1 summary">

Writes a double array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDoubleArray(double[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Double\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteDoubleArrayDiff(Double\[\], Double\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two double arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDoubleArrayDiff(double[] write, double[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Double\[\] | write   | The new array                      |
| System.Double\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteDoubleArrayPacked(Double\[\], Int64)

<div class="markdown level1 summary">

Writes a double array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDoubleArrayPacked(double[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Double\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteDoubleArrayPackedDiff(Double\[\], Double\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two double arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDoubleArrayPackedDiff(double[] write, double[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Double\[\] | write   | The new array                      |
| System.Double\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteDoublePacked(Double)

<div class="markdown level1 summary">

Write double-precision floating point value to the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDoublePacked(double value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Double | value | Value to write |

### WriteFloatArray(Single\[\], Int64)

<div class="markdown level1 summary">

Writes a float array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteFloatArray(float[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Single\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteFloatArrayDiff(Single\[\], Single\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two float arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteFloatArrayDiff(float[] write, float[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Single\[\] | write   | The new array                      |
| System.Single\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteFloatArrayPacked(Single\[\], Int64)

<div class="markdown level1 summary">

Writes a float array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteFloatArrayPacked(float[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Single\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteFloatArrayPackedDiff(Single\[\], Single\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two float arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteFloatArrayPackedDiff(float[] write, float[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Single\[\] | write   | The new array                      |
| System.Single\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteInt16(Int16)

<div class="markdown level1 summary">

Write a signed short (Int16) to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteInt16(short value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int16 | value | Value to write |

### WriteInt16Packed(Int16)

<div class="markdown level1 summary">

Write a signed short (Int16) as a ZigZag encoded varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteInt16Packed(short value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int16 | value | Value to write |

### WriteInt32(Int32)

<div class="markdown level1 summary">

Write a signed int (Int32) to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteInt32(int value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int32 | value | Value to write |

### WriteInt32Packed(Int32)

<div class="markdown level1 summary">

Write a signed int (Int32) as a ZigZag encoded varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteInt32Packed(int value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int32 | value | Value to write |

### WriteInt64(Int64)

<div class="markdown level1 summary">

Write a signed long (Int64) to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteInt64(long value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int64 | value | Value to write |

### WriteInt64Packed(Int64)

<div class="markdown level1 summary">

Write a signed long (Int64) as a ZigZag encoded varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteInt64Packed(long value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int64 | value | Value to write |

### WriteIntArray(Int32\[\], Int64)

<div class="markdown level1 summary">

Writes a int array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteIntArray(int[] b, long count = -1L)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int32\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteIntArrayDiff(Int32\[\], Int32\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two int arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteIntArrayDiff(int[] write, int[] compare, long count = -1L)

#### Parameters

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int32\[\] | write   | The new array                      |
| System.Int32\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteIntArrayPacked(Int32\[\], Int64)

<div class="markdown level1 summary">

Writes a int array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteIntArrayPacked(int[] b, long count = -1L)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int32\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteIntArrayPackedDiff(Int32\[\], Int32\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two int arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteIntArrayPackedDiff(int[] write, int[] compare, long count = -1L)

#### Parameters

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int32\[\] | write   | The new array                      |
| System.Int32\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteLongArray(Int64\[\], Int64)

<div class="markdown level1 summary">

Writes a long array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteLongArray(long[] b, long count = -1L)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int64\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteLongArrayDiff(Int64\[\], Int64\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two long arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteLongArrayDiff(long[] write, long[] compare, long count = -1L)

#### Parameters

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int64\[\] | write   | The new array                      |
| System.Int64\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteLongArrayPacked(Int64\[\], Int64)

<div class="markdown level1 summary">

Writes a long array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteLongArrayPacked(long[] b, long count = -1L)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int64\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteLongArrayPackedDiff(Int64\[\], Int64\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two long arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteLongArrayPackedDiff(long[] write, long[] compare, long count = -1L)

#### Parameters

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int64\[\] | write   | The new array                      |
| System.Int64\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteNibble(Byte)

<div class="markdown level1 summary">

Write the lower half (lower nibble) of a byte.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteNibble(byte value)

#### Parameters

| Type        | Name  | Description                       |
|-------------|-------|-----------------------------------|
| System.Byte | value | Value containing nibble to write. |

### WriteNibble(Byte, Boolean)

<div class="markdown level1 summary">

Write either the upper or lower nibble of a byte to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteNibble(byte value, bool upper)

#### Parameters

| Type           | Name  | Description                                                                                                         |
|----------------|-------|---------------------------------------------------------------------------------------------------------------------|
| System.Byte    | value | Value holding the nibble                                                                                            |
| System.Boolean | upper | Whether or not the upper nibble should be written. True to write the four high bits, else writes the four low bits. |

### WriteObjectPacked(Object)

<div class="markdown level1 summary">

Writes a boxed object in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteObjectPacked(object value)

#### Parameters

| Type          | Name  | Description         |
|---------------|-------|---------------------|
| System.Object | value | The object to write |

### WritePadBits()

<div class="markdown level1 summary">

Writes pad bits to make the underlying stream aligned

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WritePadBits()

### WriteRangedDouble(Double, Double, Double, Int32)

<div class="markdown level1 summary">

Write a double-precision floating point value to the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRangedDouble(double value, double minValue, double maxValue, int bytes)

#### Parameters

| Type          | Name     | Description                                                                             |
|---------------|----------|-----------------------------------------------------------------------------------------|
| System.Double | value    | Value to write                                                                          |
| System.Double | minValue | Minimum value that this value could be                                                  |
| System.Double | maxValue | Maximum possible value that this could be                                               |
| System.Int32  | bytes    | How many bytes the compressed result should occupy. Must be between 1 and 8 (inclusive) |

### WriteRangedSingle(Single, Single, Single, Int32)

<div class="markdown level1 summary">

Write a single-precision floating point value to the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRangedSingle(float value, float minValue, float maxValue, int bytes)

#### Parameters

| Type          | Name     | Description                                                                             |
|---------------|----------|-----------------------------------------------------------------------------------------|
| System.Single | value    | Value to write                                                                          |
| System.Single | minValue | Minimum value that this value could be                                                  |
| System.Single | maxValue | Maximum possible value that this could be                                               |
| System.Int32  | bytes    | How many bytes the compressed result should occupy. Must be between 1 and 4 (inclusive) |

### WriteRay(Ray)

<div class="markdown level1 summary">

Convenience method that writes two non-packed Vector3 from the ray to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRay(Ray ray)

#### Parameters

| Type            | Name | Description  |
|-----------------|------|--------------|
| UnityEngine.Ray | ray  | Ray to write |

### WriteRay2D(Ray2D)

<div class="markdown level1 summary">

Convenience method that writes two non-packed Vector2 from the ray to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRay2D(Ray2D ray2d)

#### Parameters

| Type              | Name  | Description    |
|-------------------|-------|----------------|
| UnityEngine.Ray2D | ray2d | Ray2D to write |

### WriteRay2DPacked(Ray2D)

<div class="markdown level1 summary">

Convenience method that writes two packed Vector2 from the ray to the
stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRay2DPacked(Ray2D ray2d)

#### Parameters

| Type              | Name  | Description    |
|-------------------|-------|----------------|
| UnityEngine.Ray2D | ray2d | Ray2D to write |

### WriteRayPacked(Ray)

<div class="markdown level1 summary">

Convenience method that writes two packed Vector3 from the ray to the
stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRayPacked(Ray ray)

#### Parameters

| Type            | Name | Description  |
|-----------------|------|--------------|
| UnityEngine.Ray | ray  | Ray to write |

### WriteRotation(Quaternion)

<div class="markdown level1 summary">

Writes the rotation to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRotation(Quaternion rotation)

#### Parameters

| Type                   | Name     | Description       |
|------------------------|----------|-------------------|
| UnityEngine.Quaternion | rotation | Rotation to write |

### WriteRotationPacked(Quaternion)

<div class="markdown level1 summary">

Writes the rotation to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteRotationPacked(Quaternion rotation)

#### Parameters

| Type                   | Name     | Description       |
|------------------------|----------|-------------------|
| UnityEngine.Quaternion | rotation | Rotation to write |

### WriteSByte(SByte)

<div class="markdown level1 summary">

Write a signed byte to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteSByte(sbyte value)

#### Parameters

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.SByte | value | Value to write |

### WriteShortArray(Int16\[\], Int64)

<div class="markdown level1 summary">

Writes a short array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteShortArray(short[] b, long count = -1L)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int16\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteShortArrayDiff(Int16\[\], Int16\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two short arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteShortArrayDiff(short[] write, short[] compare, long count = -1L)

#### Parameters

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int16\[\] | write   | The new array                      |
| System.Int16\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteShortArrayPacked(Int16\[\], Int64)

<div class="markdown level1 summary">

Writes a short array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteShortArrayPacked(short[] b, long count = -1L)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int16\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteShortArrayPackedDiff(Int16\[\], Int16\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two short arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteShortArrayPackedDiff(short[] write, short[] compare, long count = -1L)

#### Parameters

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int16\[\] | write   | The new array                      |
| System.Int16\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteSingle(Single)

<div class="markdown level1 summary">

Write single-precision floating point value to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteSingle(float value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Single | value | Value to write |

### WriteSinglePacked(Single)

<div class="markdown level1 summary">

Write single-precision floating point value to the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteSinglePacked(float value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Single | value | Value to write |

### WriteString(String, Boolean)

<div class="markdown level1 summary">

Writes a string

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteString(string s, bool oneByteChars = false)

#### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

### WriteStringDiff(String, String, Boolean)

<div class="markdown level1 summary">

Writes the diff between two strings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteStringDiff(string write, string compare, bool oneByteChars = false)

#### Parameters

| Type           | Name         | Description                                                                    |
|----------------|--------------|--------------------------------------------------------------------------------|
| System.String  | write        | The new array                                                                  |
| System.String  | compare      | The previous array to use for diff                                             |
| System.Boolean | oneByteChars | Whether or not to use single byte chars. This will only allow ASCII characters |

### WriteStringPacked(String)

<div class="markdown level1 summary">

Writes a string in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteStringPacked(string s)

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.String | s    |             |

### WriteStringPackedDiff(String, String)

<div class="markdown level1 summary">

Writes the diff between two strings in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteStringPackedDiff(string write, string compare)

#### Parameters

| Type          | Name    | Description                         |
|---------------|---------|-------------------------------------|
| System.String | write   | The new string                      |
| System.String | compare | The previous string to use for diff |

### WriteUInt16(UInt16)

<div class="markdown level1 summary">

Write an unsigned short (UInt16) to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUInt16(ushort value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt16 | value | Value to write |

### WriteUInt16Packed(UInt16)

<div class="markdown level1 summary">

Write an unsigned short (UInt16) as a varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUInt16Packed(ushort value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt16 | value | Value to write |

### WriteUInt32(UInt32)

<div class="markdown level1 summary">

Write an unsigned int (UInt32) to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUInt32(uint value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt32 | value | Value to write |

### WriteUInt32Packed(UInt32)

<div class="markdown level1 summary">

Write an unsigned int (UInt32) as a varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUInt32Packed(uint value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt32 | value | Value to write |

### WriteUInt64(UInt64)

<div class="markdown level1 summary">

Write an unsigned long (UInt64) to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUInt64(ulong value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt64 | value | Value to write |

### WriteUInt64Packed(UInt64)

<div class="markdown level1 summary">

Write an unsigned long (UInt64) as a varint to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUInt64Packed(ulong value)

#### Parameters

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt64 | value | Value to write |

### WriteUIntArray(UInt32\[\], Int64)

<div class="markdown level1 summary">

Writes a uint array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUIntArray(uint[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt32\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUIntArrayDiff(UInt32\[\], UInt32\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two uint arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUIntArrayDiff(uint[] write, uint[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt32\[\] | write   | The new array                      |
| System.UInt32\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteUIntArrayPacked(UInt32\[\], Int64)

<div class="markdown level1 summary">

Writes a uint array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUIntArrayPacked(uint[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt32\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUIntArrayPackedDiff(UInt32\[\], UInt32\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two uing arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUIntArrayPackedDiff(uint[] write, uint[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt32\[\] | write   | The new array                      |
| System.UInt32\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteULongArray(UInt64\[\], Int64)

<div class="markdown level1 summary">

Writes a ulong array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteULongArray(ulong[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt64\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteULongArrayDiff(UInt64\[\], UInt64\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two ulong arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteULongArrayDiff(ulong[] write, ulong[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt64\[\] | write   | The new array                      |
| System.UInt64\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteULongArrayPacked(UInt64\[\], Int64)

<div class="markdown level1 summary">

Writes a ulong array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteULongArrayPacked(ulong[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt64\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteULongArrayPackedDiff(UInt64\[\], UInt64\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two ulong arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteULongArrayPackedDiff(ulong[] write, ulong[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt64\[\] | write   | The new array                      |
| System.UInt64\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteUShortArray(UInt16\[\], Int64)

<div class="markdown level1 summary">

Writes a ushort array

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUShortArray(ushort[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt16\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUShortArrayDiff(UInt16\[\], UInt16\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two ushort arrays

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUShortArrayDiff(ushort[] write, ushort[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt16\[\] | write   | The new array                      |
| System.UInt16\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteUShortArrayPacked(UInt16\[\], Int64)

<div class="markdown level1 summary">

Writes a ushort array in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUShortArrayPacked(ushort[] b, long count = -1L)

#### Parameters

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt16\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUShortArrayPackedDiff(UInt16\[\], UInt16\[\], Int64)

<div class="markdown level1 summary">

Writes the diff between two ushort arrays in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteUShortArrayPackedDiff(ushort[] write, ushort[] compare, long count = -1L)

#### Parameters

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt16\[\] | write   | The new array                      |
| System.UInt16\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteVector2(Vector2)

<div class="markdown level1 summary">

Convenience method that writes two non-varint floats from the vector to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteVector2(Vector2 vector2)

#### Parameters

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector2 | vector2 | Vector to write |

### WriteVector2Packed(Vector2)

<div class="markdown level1 summary">

Convenience method that writes two varint floats from the vector to the
stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteVector2Packed(Vector2 vector2)

#### Parameters

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector2 | vector2 | Vector to write |

### WriteVector3(Vector3)

<div class="markdown level1 summary">

Convenience method that writes three non-varint floats from the vector
to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteVector3(Vector3 vector3)

#### Parameters

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector3 | vector3 | Vector to write |

### WriteVector3Packed(Vector3)

<div class="markdown level1 summary">

Convenience method that writes three varint floats from the vector to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteVector3Packed(Vector3 vector3)

#### Parameters

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector3 | vector3 | Vector to write |

### WriteVector4(Vector4)

<div class="markdown level1 summary">

Convenience method that writes four non-varint floats from the vector to
the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteVector4(Vector4 vector4)

#### Parameters

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector4 | vector4 | Vector to write |

### WriteVector4Packed(Vector4)

<div class="markdown level1 summary">

Convenience method that writes four varint floats from the vector to the
stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteVector4Packed(Vector4 vector4)

#### Parameters

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector4 | vector4 | Vector to write |
