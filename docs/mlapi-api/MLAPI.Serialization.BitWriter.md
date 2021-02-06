---

id: MLAPI.Serialization.BitWriter

title: MLAPI.Serialization.BitWriter

---

Class BitWriter

<div class="markdown level0 summary" markdown="1">

A BinaryWriter that can do bit wise manipulation when backed by a
BitStream

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_BitWriter_syntax]

    public class BitWriter

## Constructors 

### BitWriter(Stream) [MLAPI_Serialization_BitWriter__ctor_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Creates a new BitWriter backed by a given stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public BitWriter(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description                   |
|------------------|--------|-------------------------------|
| System.IO.Stream | stream | The stream to use for writing |

## Methods 

### SetStream(Stream) [MLAPI_Serialization_BitWriter_SetStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Changes the underlying stream the writer is writing to

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public void SetStream(Stream stream)

#### Parameters [parameters-1]

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| System.IO.Stream | stream | The stream to write to |

### WriteArrayPacked(Array, Int64) [MLAPI_Serialization_BitWriter_WriteArrayPacked_System_Array_System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes an array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public void WriteArrayPacked(Array a, long count = -1L)

#### Parameters [parameters-2]

| Type         | Name  | Description                     |
|--------------|-------|---------------------------------|
| System.Array | a     | The array to write              |
| System.Int64 | count | The amount of elements to write |

### WriteArrayPackedDiff(Array, Array, Int64) [MLAPI_Serialization_BitWriter_WriteArrayPackedDiff_System_Array_System_Array_System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public void WriteArrayPackedDiff(Array write, Array compare, long count = -1L)

#### Parameters [parameters-3]

| Type         | Name    | Description                        |
|--------------|---------|------------------------------------|
| System.Array | write   | The new array                      |
| System.Array | compare | The previous array to use for diff |
| System.Int64 | count   | The amount of elements to write    |

### WriteBit(Boolean) [MLAPI_Serialization_BitWriter_WriteBit_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Writes a single bit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public void WriteBit(bool bit)

#### Parameters [parameters-4]

| Type           | Name | Description |
|----------------|------|-------------|
| System.Boolean | bit  |             |

### WriteBits(Byte, Int32) [MLAPI_Serialization_BitWriter_WriteBits_System_Byte_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write bits to stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public void WriteBits(byte value, int bitCount)

#### Parameters [parameters-5]

| Type         | Name     | Description              |
|--------------|----------|--------------------------|
| System.Byte  | value    | Value to get bits from.  |
| System.Int32 | bitCount | Amount of bits to write. |

### WriteBits(UInt64, Int32) [MLAPI_Serialization_BitWriter_WriteBits_System_UInt64_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write s certain amount of bits to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public void WriteBits(ulong value, int bitCount)

#### Parameters [parameters-6]

| Type          | Name     | Description             |
|---------------|----------|-------------------------|
| System.UInt64 | value    | Value to get bits from. |
| System.Int32  | bitCount | Amount of bits to write |

### WriteBool(Boolean) [MLAPI_Serialization_BitWriter_WriteBool_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Writes a bool as a single bit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public void WriteBool(bool value)

#### Parameters [parameters-7]

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | value |             |

### WriteByte(Byte) [MLAPI_Serialization_BitWriter_WriteByte_System_Byte_]

<div class="markdown level1 summary" markdown="1">

Write a byte to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public void WriteByte(byte value)

#### Parameters [parameters-8]

| Type        | Name  | Description    |
|-------------|-------|----------------|
| System.Byte | value | Value to write |

### WriteByteArray(Byte\[\], Int64) [MLAPI_Serialization_BitWriter_WriteByteArray_System_Byte___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a byte array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public void WriteByteArray(byte[] b, long count = -1L)

#### Parameters [parameters-9]

| Type            | Name  | Description                     |
|-----------------|-------|---------------------------------|
| System.Byte\[\] | b     | The array to write              |
| System.Int64    | count | The amount of elements to write |

### WriteByteArrayDiff(Byte\[\], Byte\[\], Int64) [MLAPI_Serialization_BitWriter_WriteByteArrayDiff_System_Byte___System_Byte___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two byte arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public void WriteByteArrayDiff(byte[] write, byte[] compare, long count = -1L)

#### Parameters [parameters-10]

| Type            | Name    | Description                        |
|-----------------|---------|------------------------------------|
| System.Byte\[\] | write   | The new array                      |
| System.Byte\[\] | compare | The previous array to use for diff |
| System.Int64    | count   | The amount of elements to write    |

### WriteChar(Char) [MLAPI_Serialization_BitWriter_WriteChar_System_Char_]

<div class="markdown level1 summary" markdown="1">

Write a single character to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public void WriteChar(char c)

#### Parameters [parameters-11]

| Type        | Name | Description        |
|-------------|------|--------------------|
| System.Char | c    | Character to write |

### WriteCharArray(Char\[\], Int64) [MLAPI_Serialization_BitWriter_WriteCharArray_System_Char___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a char array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public void WriteCharArray(char[] b, long count = -1L)

#### Parameters [parameters-12]

| Type            | Name  | Description                     |
|-----------------|-------|---------------------------------|
| System.Char\[\] | b     | The array to write              |
| System.Int64    | count | The amount of elements to write |

### WriteCharArrayDiff(Char\[\], Char\[\], Int64) [MLAPI_Serialization_BitWriter_WriteCharArrayDiff_System_Char___System_Char___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two char arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public void WriteCharArrayDiff(char[] write, char[] compare, long count = -1L)

#### Parameters [parameters-13]

| Type            | Name    | Description                        |
|-----------------|---------|------------------------------------|
| System.Char\[\] | write   | The new array                      |
| System.Char\[\] | compare | The previous array to use for diff |
| System.Int64    | count   | The amount of elements to write    |

### WriteCharArrayPacked(Char\[\], Int64) [MLAPI_Serialization_BitWriter_WriteCharArrayPacked_System_Char___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a char array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public void WriteCharArrayPacked(char[] b, long count = -1L)

#### Parameters [parameters-14]

| Type            | Name  | Description                     |
|-----------------|-------|---------------------------------|
| System.Char\[\] | b     | The array to write              |
| System.Int64    | count | The amount of elements to write |

### WriteCharArrayPackedDiff(Char\[\], Char\[\], Int64) [MLAPI_Serialization_BitWriter_WriteCharArrayPackedDiff_System_Char___System_Char___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two char arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public void WriteCharArrayPackedDiff(char[] write, char[] compare, long count = -1L)

#### Parameters [parameters-15]

| Type            | Name    | Description                        |
|-----------------|---------|------------------------------------|
| System.Char\[\] | write   | The new array                      |
| System.Char\[\] | compare | The previous array to use for diff |
| System.Int64    | count   | The amount of elements to write    |

### WriteCharPacked(Char) [MLAPI_Serialization_BitWriter_WriteCharPacked_System_Char_]

<div class="markdown level1 summary" markdown="1">

Write a two-byte character as a varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public void WriteCharPacked(char c)

#### Parameters [parameters-16]

| Type        | Name | Description    |
|-------------|------|----------------|
| System.Char | c    | Value to write |

### WriteColor(Color) [MLAPI_Serialization_BitWriter_WriteColor_UnityEngine_Color_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes four non-varint floats from the color to
the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public void WriteColor(Color color)

#### Parameters [parameters-17]

| Type              | Name  | Description    |
|-------------------|-------|----------------|
| UnityEngine.Color | color | Color to write |

### WriteColor32(Color32) [MLAPI_Serialization_BitWriter_WriteColor32_UnityEngine_Color32_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes four non-varint floats from the color to
the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void WriteColor32(Color32 color32)

#### Parameters [parameters-18]

| Type                | Name    | Description      |
|---------------------|---------|------------------|
| UnityEngine.Color32 | color32 | Color32 to write |

### WriteColorPacked(Color) [MLAPI_Serialization_BitWriter_WriteColorPacked_UnityEngine_Color_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes four varint floats from the color to the
stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public void WriteColorPacked(Color color)

#### Parameters [parameters-19]

| Type              | Name  | Description    |
|-------------------|-------|----------------|
| UnityEngine.Color | color | Color to write |

### WriteDouble(Double) [MLAPI_Serialization_BitWriter_WriteDouble_System_Double_]

<div class="markdown level1 summary" markdown="1">

Write double-precision floating point value to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public void WriteDouble(double value)

#### Parameters [parameters-20]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Double | value | Value to write |

### WriteDoubleArray(Double\[\], Int64) [MLAPI_Serialization_BitWriter_WriteDoubleArray_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a double array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public void WriteDoubleArray(double[] b, long count = -1L)

#### Parameters [parameters-21]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Double\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteDoubleArrayDiff(Double\[\], Double\[\], Int64) [MLAPI_Serialization_BitWriter_WriteDoubleArrayDiff_System_Double___System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two double arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public void WriteDoubleArrayDiff(double[] write, double[] compare, long count = -1L)

#### Parameters [parameters-22]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Double\[\] | write   | The new array                      |
| System.Double\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteDoubleArrayPacked(Double\[\], Int64) [MLAPI_Serialization_BitWriter_WriteDoubleArrayPacked_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a double array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public void WriteDoubleArrayPacked(double[] b, long count = -1L)

#### Parameters [parameters-23]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Double\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteDoubleArrayPackedDiff(Double\[\], Double\[\], Int64) [MLAPI_Serialization_BitWriter_WriteDoubleArrayPackedDiff_System_Double___System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two double arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public void WriteDoubleArrayPackedDiff(double[] write, double[] compare, long count = -1L)

#### Parameters [parameters-24]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Double\[\] | write   | The new array                      |
| System.Double\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteDoublePacked(Double) [MLAPI_Serialization_BitWriter_WriteDoublePacked_System_Double_]

<div class="markdown level1 summary" markdown="1">

Write double-precision floating point value to the stream as a varint

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public void WriteDoublePacked(double value)

#### Parameters [parameters-25]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Double | value | Value to write |

### WriteFloatArray(Single\[\], Int64) [MLAPI_Serialization_BitWriter_WriteFloatArray_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a float array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public void WriteFloatArray(float[] b, long count = -1L)

#### Parameters [parameters-26]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Single\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteFloatArrayDiff(Single\[\], Single\[\], Int64) [MLAPI_Serialization_BitWriter_WriteFloatArrayDiff_System_Single___System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two float arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public void WriteFloatArrayDiff(float[] write, float[] compare, long count = -1L)

#### Parameters [parameters-27]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Single\[\] | write   | The new array                      |
| System.Single\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteFloatArrayPacked(Single\[\], Int64) [MLAPI_Serialization_BitWriter_WriteFloatArrayPacked_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a float array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public void WriteFloatArrayPacked(float[] b, long count = -1L)

#### Parameters [parameters-28]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.Single\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteFloatArrayPackedDiff(Single\[\], Single\[\], Int64) [MLAPI_Serialization_BitWriter_WriteFloatArrayPackedDiff_System_Single___System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two float arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public void WriteFloatArrayPackedDiff(float[] write, float[] compare, long count = -1L)

#### Parameters [parameters-29]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.Single\[\] | write   | The new array                      |
| System.Single\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteInt16(Int16) [MLAPI_Serialization_BitWriter_WriteInt16_System_Int16_]

<div class="markdown level1 summary" markdown="1">

Write a signed short (Int16) to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public void WriteInt16(short value)

#### Parameters [parameters-30]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int16 | value | Value to write |

### WriteInt16Packed(Int16) [MLAPI_Serialization_BitWriter_WriteInt16Packed_System_Int16_]

<div class="markdown level1 summary" markdown="1">

Write a signed short (Int16) as a ZigZag encoded varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public void WriteInt16Packed(short value)

#### Parameters [parameters-31]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int16 | value | Value to write |

### WriteInt32(Int32) [MLAPI_Serialization_BitWriter_WriteInt32_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write a signed int (Int32) to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    public void WriteInt32(int value)

#### Parameters [parameters-32]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int32 | value | Value to write |

### WriteInt32Packed(Int32) [MLAPI_Serialization_BitWriter_WriteInt32Packed_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write a signed int (Int32) as a ZigZag encoded varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-33]

    public void WriteInt32Packed(int value)

#### Parameters [parameters-33]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int32 | value | Value to write |

### WriteInt64(Int64) [MLAPI_Serialization_BitWriter_WriteInt64_System_Int64_]

<div class="markdown level1 summary" markdown="1">

Write a signed long (Int64) to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-34]

    public void WriteInt64(long value)

#### Parameters [parameters-34]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int64 | value | Value to write |

### WriteInt64Packed(Int64) [MLAPI_Serialization_BitWriter_WriteInt64Packed_System_Int64_]

<div class="markdown level1 summary" markdown="1">

Write a signed long (Int64) as a ZigZag encoded varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-35]

    public void WriteInt64Packed(long value)

#### Parameters [parameters-35]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.Int64 | value | Value to write |

### WriteIntArray(Int32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteIntArray_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a int array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-36]

    public void WriteIntArray(int[] b, long count = -1L)

#### Parameters [parameters-36]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int32\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteIntArrayDiff(Int32\[\], Int32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteIntArrayDiff_System_Int32___System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two int arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-37]

    public void WriteIntArrayDiff(int[] write, int[] compare, long count = -1L)

#### Parameters [parameters-37]

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int32\[\] | write   | The new array                      |
| System.Int32\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteIntArrayPacked(Int32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteIntArrayPacked_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a int array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-38]

    public void WriteIntArrayPacked(int[] b, long count = -1L)

#### Parameters [parameters-38]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int32\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteIntArrayPackedDiff(Int32\[\], Int32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteIntArrayPackedDiff_System_Int32___System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two int arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-39]

    public void WriteIntArrayPackedDiff(int[] write, int[] compare, long count = -1L)

#### Parameters [parameters-39]

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int32\[\] | write   | The new array                      |
| System.Int32\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteLongArray(Int64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteLongArray_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a long array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-40]

    public void WriteLongArray(long[] b, long count = -1L)

#### Parameters [parameters-40]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int64\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteLongArrayDiff(Int64\[\], Int64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteLongArrayDiff_System_Int64___System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two long arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-41]

    public void WriteLongArrayDiff(long[] write, long[] compare, long count = -1L)

#### Parameters [parameters-41]

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int64\[\] | write   | The new array                      |
| System.Int64\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteLongArrayPacked(Int64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteLongArrayPacked_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a long array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-42]

    public void WriteLongArrayPacked(long[] b, long count = -1L)

#### Parameters [parameters-42]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int64\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteLongArrayPackedDiff(Int64\[\], Int64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteLongArrayPackedDiff_System_Int64___System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two long arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-43]

    public void WriteLongArrayPackedDiff(long[] write, long[] compare, long count = -1L)

#### Parameters [parameters-43]

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int64\[\] | write   | The new array                      |
| System.Int64\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteNibble(Byte) [MLAPI_Serialization_BitWriter_WriteNibble_System_Byte_]

<div class="markdown level1 summary" markdown="1">

Write the lower half (lower nibble) of a byte.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-44]

    public void WriteNibble(byte value)

#### Parameters [parameters-44]

| Type        | Name  | Description                       |
|-------------|-------|-----------------------------------|
| System.Byte | value | Value containing nibble to write. |

### WriteNibble(Byte, Boolean) [MLAPI_Serialization_BitWriter_WriteNibble_System_Byte_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Write either the upper or lower nibble of a byte to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-45]

    public void WriteNibble(byte value, bool upper)

#### Parameters [parameters-45]

| Type           | Name  | Description                                                                                                         |
|----------------|-------|---------------------------------------------------------------------------------------------------------------------|
| System.Byte    | value | Value holding the nibble                                                                                            |
| System.Boolean | upper | Whether or not the upper nibble should be written. True to write the four high bits, else writes the four low bits. |

### WriteObjectPacked(Object) [MLAPI_Serialization_BitWriter_WriteObjectPacked_System_Object_]

<div class="markdown level1 summary" markdown="1">

Writes a boxed object in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-46]

    public void WriteObjectPacked(object value)

#### Parameters [parameters-46]

| Type          | Name  | Description         |
|---------------|-------|---------------------|
| System.Object | value | The object to write |

### WritePadBits() [MLAPI_Serialization_BitWriter_WritePadBits]

<div class="markdown level1 summary" markdown="1">

Writes pad bits to make the underlying stream aligned

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-47]

    public void WritePadBits()

### WriteRangedDouble(Double, Double, Double, Int32) [MLAPI_Serialization_BitWriter_WriteRangedDouble_System_Double_System_Double_System_Double_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write a double-precision floating point value to the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-48]

    public void WriteRangedDouble(double value, double minValue, double maxValue, int bytes)

#### Parameters [parameters-47]

| Type          | Name     | Description                                                                             |
|---------------|----------|-----------------------------------------------------------------------------------------|
| System.Double | value    | Value to write                                                                          |
| System.Double | minValue | Minimum value that this value could be                                                  |
| System.Double | maxValue | Maximum possible value that this could be                                               |
| System.Int32  | bytes    | How many bytes the compressed result should occupy. Must be between 1 and 8 (inclusive) |

### WriteRangedSingle(Single, Single, Single, Int32) [MLAPI_Serialization_BitWriter_WriteRangedSingle_System_Single_System_Single_System_Single_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write a single-precision floating point value to the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-49]

    public void WriteRangedSingle(float value, float minValue, float maxValue, int bytes)

#### Parameters [parameters-48]

| Type          | Name     | Description                                                                             |
|---------------|----------|-----------------------------------------------------------------------------------------|
| System.Single | value    | Value to write                                                                          |
| System.Single | minValue | Minimum value that this value could be                                                  |
| System.Single | maxValue | Maximum possible value that this could be                                               |
| System.Int32  | bytes    | How many bytes the compressed result should occupy. Must be between 1 and 4 (inclusive) |

### WriteRay(Ray) [MLAPI_Serialization_BitWriter_WriteRay_UnityEngine_Ray_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes two non-packed Vector3 from the ray to
the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-50]

    public void WriteRay(Ray ray)

#### Parameters [parameters-49]

| Type            | Name | Description  |
|-----------------|------|--------------|
| UnityEngine.Ray | ray  | Ray to write |

### WriteRayPacked(Ray) [MLAPI_Serialization_BitWriter_WriteRayPacked_UnityEngine_Ray_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes two packed Vector3 from the ray to the
stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-51]

    public void WriteRayPacked(Ray ray)

#### Parameters [parameters-50]

| Type            | Name | Description  |
|-----------------|------|--------------|
| UnityEngine.Ray | ray  | Ray to write |

### WriteRotation(Quaternion) [MLAPI_Serialization_BitWriter_WriteRotation_UnityEngine_Quaternion_]

<div class="markdown level1 summary" markdown="1">

Writes the rotation to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-52]

    public void WriteRotation(Quaternion rotation)

#### Parameters [parameters-51]

| Type                   | Name     | Description       |
|------------------------|----------|-------------------|
| UnityEngine.Quaternion | rotation | Rotation to write |

### WriteRotationPacked(Quaternion) [MLAPI_Serialization_BitWriter_WriteRotationPacked_UnityEngine_Quaternion_]

<div class="markdown level1 summary" markdown="1">

Writes the rotation to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-53]

    public void WriteRotationPacked(Quaternion rotation)

#### Parameters [parameters-52]

| Type                   | Name     | Description       |
|------------------------|----------|-------------------|
| UnityEngine.Quaternion | rotation | Rotation to write |

### WriteSByte(SByte) [MLAPI_Serialization_BitWriter_WriteSByte_System_SByte_]

<div class="markdown level1 summary" markdown="1">

Write a signed byte to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-54]

    public void WriteSByte(sbyte value)

#### Parameters [parameters-53]

| Type         | Name  | Description    |
|--------------|-------|----------------|
| System.SByte | value | Value to write |

### WriteShortArray(Int16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteShortArray_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a short array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-55]

    public void WriteShortArray(short[] b, long count = -1L)

#### Parameters [parameters-54]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int16\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteShortArrayDiff(Int16\[\], Int16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteShortArrayDiff_System_Int16___System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two short arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-56]

    public void WriteShortArrayDiff(short[] write, short[] compare, long count = -1L)

#### Parameters [parameters-55]

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int16\[\] | write   | The new array                      |
| System.Int16\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteShortArrayPacked(Int16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteShortArrayPacked_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a short array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-57]

    public void WriteShortArrayPacked(short[] b, long count = -1L)

#### Parameters [parameters-56]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.Int16\[\] | b     | The array to write              |
| System.Int64     | count | The amount of elements to write |

### WriteShortArrayPackedDiff(Int16\[\], Int16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteShortArrayPackedDiff_System_Int16___System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two short arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-58]

    public void WriteShortArrayPackedDiff(short[] write, short[] compare, long count = -1L)

#### Parameters [parameters-57]

| Type             | Name    | Description                        |
|------------------|---------|------------------------------------|
| System.Int16\[\] | write   | The new array                      |
| System.Int16\[\] | compare | The previous array to use for diff |
| System.Int64     | count   | The amount of elements to write    |

### WriteSingle(Single) [MLAPI_Serialization_BitWriter_WriteSingle_System_Single_]

<div class="markdown level1 summary" markdown="1">

Write single-precision floating point value to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-59]

    public void WriteSingle(float value)

#### Parameters [parameters-58]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Single | value | Value to write |

### WriteSinglePacked(Single) [MLAPI_Serialization_BitWriter_WriteSinglePacked_System_Single_]

<div class="markdown level1 summary" markdown="1">

Write single-precision floating point value to the stream as a varint

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-60]

    public void WriteSinglePacked(float value)

#### Parameters [parameters-59]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.Single | value | Value to write |

### WriteString(String, Boolean) [MLAPI_Serialization_BitWriter_WriteString_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Writes a string

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-61]

    public void WriteString(string s, bool oneByteChars = false)

#### Parameters [parameters-60]

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

### WriteStringDiff(String, String, Boolean) [MLAPI_Serialization_BitWriter_WriteStringDiff_System_String_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two strings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-62]

    public void WriteStringDiff(string write, string compare, bool oneByteChars = false)

#### Parameters [parameters-61]

| Type           | Name         | Description                                                                    |
|----------------|--------------|--------------------------------------------------------------------------------|
| System.String  | write        | The new array                                                                  |
| System.String  | compare      | The previous array to use for diff                                             |
| System.Boolean | oneByteChars | Whether or not to use single byte chars. This will only allow ASCII characters |

### WriteStringPacked(String) [MLAPI_Serialization_BitWriter_WriteStringPacked_System_String_]

<div class="markdown level1 summary" markdown="1">

Writes a string in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-63]

    public void WriteStringPacked(string s)

#### Parameters [parameters-62]

| Type          | Name | Description |
|---------------|------|-------------|
| System.String | s    |             |

### WriteStringPackedDiff(String, String) [MLAPI_Serialization_BitWriter_WriteStringPackedDiff_System_String_System_String_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two strings in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-64]

    public void WriteStringPackedDiff(string write, string compare)

#### Parameters [parameters-63]

| Type          | Name    | Description                         |
|---------------|---------|-------------------------------------|
| System.String | write   | The new string                      |
| System.String | compare | The previous string to use for diff |

### WriteUInt16(UInt16) [MLAPI_Serialization_BitWriter_WriteUInt16_System_UInt16_]

<div class="markdown level1 summary" markdown="1">

Write an unsigned short (UInt16) to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-65]

    public void WriteUInt16(ushort value)

#### Parameters [parameters-64]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt16 | value | Value to write |

### WriteUInt16Packed(UInt16) [MLAPI_Serialization_BitWriter_WriteUInt16Packed_System_UInt16_]

<div class="markdown level1 summary" markdown="1">

Write an unsigned short (UInt16) as a varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-66]

    public void WriteUInt16Packed(ushort value)

#### Parameters [parameters-65]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt16 | value | Value to write |

### WriteUInt32(UInt32) [MLAPI_Serialization_BitWriter_WriteUInt32_System_UInt32_]

<div class="markdown level1 summary" markdown="1">

Write an unsigned int (UInt32) to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-67]

    public void WriteUInt32(uint value)

#### Parameters [parameters-66]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt32 | value | Value to write |

### WriteUInt32Packed(UInt32) [MLAPI_Serialization_BitWriter_WriteUInt32Packed_System_UInt32_]

<div class="markdown level1 summary" markdown="1">

Write an unsigned int (UInt32) as a varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-68]

    public void WriteUInt32Packed(uint value)

#### Parameters [parameters-67]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt32 | value | Value to write |

### WriteUInt64(UInt64) [MLAPI_Serialization_BitWriter_WriteUInt64_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Write an unsigned long (UInt64) to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-69]

    public void WriteUInt64(ulong value)

#### Parameters [parameters-68]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt64 | value | Value to write |

### WriteUInt64Packed(UInt64) [MLAPI_Serialization_BitWriter_WriteUInt64Packed_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Write an unsigned long (UInt64) as a varint to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-70]

    public void WriteUInt64Packed(ulong value)

#### Parameters [parameters-69]

| Type          | Name  | Description    |
|---------------|-------|----------------|
| System.UInt64 | value | Value to write |

### WriteUIntArray(UInt32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUIntArray_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a uint array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-71]

    public void WriteUIntArray(uint[] b, long count = -1L)

#### Parameters [parameters-70]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt32\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUIntArrayDiff(UInt32\[\], UInt32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUIntArrayDiff_System_UInt32___System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two uint arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-72]

    public void WriteUIntArrayDiff(uint[] write, uint[] compare, long count = -1L)

#### Parameters [parameters-71]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt32\[\] | write   | The new array                      |
| System.UInt32\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteUIntArrayPacked(UInt32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUIntArrayPacked_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a uint array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-73]

    public void WriteUIntArrayPacked(uint[] b, long count = -1L)

#### Parameters [parameters-72]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt32\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUIntArrayPackedDiff(UInt32\[\], UInt32\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUIntArrayPackedDiff_System_UInt32___System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two uing arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-74]

    public void WriteUIntArrayPackedDiff(uint[] write, uint[] compare, long count = -1L)

#### Parameters [parameters-73]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt32\[\] | write   | The new array                      |
| System.UInt32\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteULongArray(UInt64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteULongArray_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a ulong array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-75]

    public void WriteULongArray(ulong[] b, long count = -1L)

#### Parameters [parameters-74]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt64\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteULongArrayDiff(UInt64\[\], UInt64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteULongArrayDiff_System_UInt64___System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two ulong arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-76]

    public void WriteULongArrayDiff(ulong[] write, ulong[] compare, long count = -1L)

#### Parameters [parameters-75]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt64\[\] | write   | The new array                      |
| System.UInt64\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteULongArrayPacked(UInt64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteULongArrayPacked_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a ulong array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-77]

    public void WriteULongArrayPacked(ulong[] b, long count = -1L)

#### Parameters [parameters-76]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt64\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteULongArrayPackedDiff(UInt64\[\], UInt64\[\], Int64) [MLAPI_Serialization_BitWriter_WriteULongArrayPackedDiff_System_UInt64___System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two ulong arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-78]

    public void WriteULongArrayPackedDiff(ulong[] write, ulong[] compare, long count = -1L)

#### Parameters [parameters-77]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt64\[\] | write   | The new array                      |
| System.UInt64\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteUShortArray(UInt16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUShortArray_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a ushort array

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-79]

    public void WriteUShortArray(ushort[] b, long count = -1L)

#### Parameters [parameters-78]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt16\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUShortArrayDiff(UInt16\[\], UInt16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUShortArrayDiff_System_UInt16___System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two ushort arrays

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-80]

    public void WriteUShortArrayDiff(ushort[] write, ushort[] compare, long count = -1L)

#### Parameters [parameters-79]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt16\[\] | write   | The new array                      |
| System.UInt16\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteUShortArrayPacked(UInt16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUShortArrayPacked_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes a ushort array in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-81]

    public void WriteUShortArrayPacked(ushort[] b, long count = -1L)

#### Parameters [parameters-80]

| Type              | Name  | Description                     |
|-------------------|-------|---------------------------------|
| System.UInt16\[\] | b     | The array to write              |
| System.Int64      | count | The amount of elements to write |

### WriteUShortArrayPackedDiff(UInt16\[\], UInt16\[\], Int64) [MLAPI_Serialization_BitWriter_WriteUShortArrayPackedDiff_System_UInt16___System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Writes the diff between two ushort arrays in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-82]

    public void WriteUShortArrayPackedDiff(ushort[] write, ushort[] compare, long count = -1L)

#### Parameters [parameters-81]

| Type              | Name    | Description                        |
|-------------------|---------|------------------------------------|
| System.UInt16\[\] | write   | The new array                      |
| System.UInt16\[\] | compare | The previous array to use for diff |
| System.Int64      | count   | The amount of elements to write    |

### WriteVector2(Vector2) [MLAPI_Serialization_BitWriter_WriteVector2_UnityEngine_Vector2_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes two non-varint floats from the vector to
the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-83]

    public void WriteVector2(Vector2 vector2)

#### Parameters [parameters-82]

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector2 | vector2 | Vector to write |

### WriteVector2Packed(Vector2) [MLAPI_Serialization_BitWriter_WriteVector2Packed_UnityEngine_Vector2_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes two varint floats from the vector to the
stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-84]

    public void WriteVector2Packed(Vector2 vector2)

#### Parameters [parameters-83]

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector2 | vector2 | Vector to write |

### WriteVector3(Vector3) [MLAPI_Serialization_BitWriter_WriteVector3_UnityEngine_Vector3_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes three non-varint floats from the vector
to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-85]

    public void WriteVector3(Vector3 vector3)

#### Parameters [parameters-84]

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector3 | vector3 | Vector to write |

### WriteVector3Packed(Vector3) [MLAPI_Serialization_BitWriter_WriteVector3Packed_UnityEngine_Vector3_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes three varint floats from the vector to
the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-86]

    public void WriteVector3Packed(Vector3 vector3)

#### Parameters [parameters-85]

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector3 | vector3 | Vector to write |

### WriteVector4(Vector4) [MLAPI_Serialization_BitWriter_WriteVector4_UnityEngine_Vector4_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes four non-varint floats from the vector to
the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-87]

    public void WriteVector4(Vector4 vector4)

#### Parameters [parameters-86]

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector4 | vector4 | Vector to write |

### WriteVector4Packed(Vector4) [MLAPI_Serialization_BitWriter_WriteVector4Packed_UnityEngine_Vector4_]

<div class="markdown level1 summary" markdown="1">

Convenience method that writes four varint floats from the vector to the
stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-88]

    public void WriteVector4Packed(Vector4 vector4)

#### Parameters [parameters-87]

| Type                | Name    | Description     |
|---------------------|---------|-----------------|
| UnityEngine.Vector4 | vector4 | Vector to write |
