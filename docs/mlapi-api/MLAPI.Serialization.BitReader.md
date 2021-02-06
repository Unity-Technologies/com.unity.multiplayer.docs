---

id: MLAPI.Serialization.BitReader

title: MLAPI.Serialization.BitReader

---

Class BitReader

<div class="markdown level0 summary" markdown="1">

A BinaryReader that can do bit wise manipulation when backed by a
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

##### Syntax [MLAPI_Serialization_BitReader_syntax]

    public class BitReader

## Constructors 

### BitReader(Stream) [MLAPI_Serialization_BitReader__ctor_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Creates a new BitReader backed by a given stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public BitReader(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

## Methods 

### ReadBit() [MLAPI_Serialization_BitReader_ReadBit]

<div class="markdown level1 summary" markdown="1">

Reads a single bit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public bool ReadBit()

#### Returns [returns]

| Type           | Description  |
|----------------|--------------|
| System.Boolean | The bit read |

### ReadBits(Int32) [MLAPI_Serialization_BitReader_ReadBits_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public ulong ReadBits(int bitCount)

#### Parameters [parameters-1]

| Type         | Name     | Description                                  |
|--------------|----------|----------------------------------------------|
| System.Int32 | bitCount | How many bits to read. Minimum 0, maximum 8. |

#### Returns [returns-1]

| Type          | Description             |
|---------------|-------------------------|
| System.UInt64 | The bits that were read |

### ReadBool() [MLAPI_Serialization_BitReader_ReadBool]

<div class="markdown level1 summary" markdown="1">

Reads a single bit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public bool ReadBool()

#### Returns [returns-2]

| Type           | Description  |
|----------------|--------------|
| System.Boolean | The bit read |

### ReadByte() [MLAPI_Serialization_BitReader_ReadByte]

<div class="markdown level1 summary" markdown="1">

Reads a single byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public int ReadByte()

#### Returns [returns-3]

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The byte read as an integer |

### ReadByteArray(Byte\[\], Int64) [MLAPI_Serialization_BitReader_ReadByteArray_System_Byte___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read byte array into an optional buffer from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public byte[] ReadByteArray(byte[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-2]

| Type            | Name        | Description                                                                                       |
|-----------------|-------------|---------------------------------------------------------------------------------------------------|
| System.Byte\[\] | readTo      | The array to read into. If the array is not large enough or if it's null. A new array is created. |
| System.Int64    | knownLength | The length of the array if it's known. Otherwise -1                                               |

#### Returns [returns-4]

| Type            | Description                        |
|-----------------|------------------------------------|
| System.Byte\[\] | The byte array that has been read. |

### ReadByteArrayDiff(Byte\[\], Int64) [MLAPI_Serialization_BitReader_ReadByteArrayDiff_System_Byte___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read byte array diff into an optional buffer from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public byte[] ReadByteArrayDiff(byte[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-3]

| Type            | Name        | Description                                         |
|-----------------|-------------|-----------------------------------------------------|
| System.Byte\[\] | readTo      | The buffer containing the old version or null.      |
| System.Int64    | knownLength | The length of the array if it's known. Otherwise -1 |

#### Returns [returns-5]

| Type            | Description                                        |
|-----------------|----------------------------------------------------|
| System.Byte\[\] | The byte array created from the diff and original. |

### ReadByteBits(Int32) [MLAPI_Serialization_BitReader_ReadByteBits_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public byte ReadByteBits(int bitCount)

#### Parameters [parameters-4]

| Type         | Name     | Description                                   |
|--------------|----------|-----------------------------------------------|
| System.Int32 | bitCount | How many bits to read. Minimum 0, maximum 64. |

#### Returns [returns-6]

| Type        | Description             |
|-------------|-------------------------|
| System.Byte | The bits that were read |

### ReadByteDirect() [MLAPI_Serialization_BitReader_ReadByteDirect]

<div class="markdown level1 summary" markdown="1">

Reads a byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public byte ReadByteDirect()

#### Returns [returns-7]

| Type        | Description   |
|-------------|---------------|
| System.Byte | The byte read |

### ReadChar() [MLAPI_Serialization_BitReader_ReadChar]

<div class="markdown level1 summary" markdown="1">

Read a single character from the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public char ReadChar()

#### Returns [returns-8]

| Type        | Description             |
|-------------|-------------------------|
| System.Char | Value read from stream. |

### ReadCharPacked() [MLAPI_Serialization_BitReader_ReadCharPacked]

<div class="markdown level1 summary" markdown="1">

Read a varint two-byte character from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public char ReadCharPacked()

#### Returns [returns-9]

| Type        | Description        |
|-------------|--------------------|
| System.Char | Un-varinted value. |

### ReadColor() [MLAPI_Serialization_BitReader_ReadColor]

<div class="markdown level1 summary" markdown="1">

Read a Color from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public Color ReadColor()

#### Returns [returns-10]

| Type              | Description                     |
|-------------------|---------------------------------|
| UnityEngine.Color | The Color read from the stream. |

### ReadColor32() [MLAPI_Serialization_BitReader_ReadColor32]

<div class="markdown level1 summary" markdown="1">

Read a Color32 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public Color32 ReadColor32()

#### Returns [returns-11]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Color32 | The Color32 read from the stream. |

### ReadColorPacked() [MLAPI_Serialization_BitReader_ReadColorPacked]

<div class="markdown level1 summary" markdown="1">

Read a Color from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public Color ReadColorPacked()

#### Returns [returns-12]

| Type              | Description                     |
|-------------------|---------------------------------|
| UnityEngine.Color | The Color read from the stream. |

### ReadDouble() [MLAPI_Serialization_BitReader_ReadDouble]

<div class="markdown level1 summary" markdown="1">

Read a double-precision floating point value from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public double ReadDouble()

#### Returns [returns-13]

| Type          | Description    |
|---------------|----------------|
| System.Double | The read value |

### ReadDoubleArray(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArray_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public double[] ReadDoubleArray(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-5]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Double\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-14]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Double\[\] | The array read from the stream. |

### ReadDoubleArrayDiff(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArrayDiff_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public double[] ReadDoubleArrayDiff(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-6]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Double\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-15]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Double\[\] | The array created from the diff and the current version. |

### ReadDoubleArrayPacked(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArrayPacked_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public double[] ReadDoubleArrayPacked(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-7]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Double\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-16]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Double\[\] | The array read from the stream. |

### ReadDoubleArrayPackedDiff(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArrayPackedDiff_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public double[] ReadDoubleArrayPackedDiff(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-8]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Double\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-17]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Double\[\] | The array created from the diff and the current version. |

### ReadDoublePacked() [MLAPI_Serialization_BitReader_ReadDoublePacked]

<div class="markdown level1 summary" markdown="1">

Read a double-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public double ReadDoublePacked()

#### Returns [returns-18]

| Type          | Description    |
|---------------|----------------|
| System.Double | The read value |

### ReadFloatArray(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArray_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public float[] ReadFloatArray(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-9]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Single\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-19]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Single\[\] | The array read from the stream. |

### ReadFloatArrayDiff(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArrayDiff_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public float[] ReadFloatArrayDiff(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-10]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Single\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-20]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Single\[\] | The array created from the diff and the current version. |

### ReadFloatArrayPacked(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArrayPacked_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public float[] ReadFloatArrayPacked(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-11]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Single\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-21]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Single\[\] | The array read from the stream. |

### ReadFloatArrayPackedDiff(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArrayPackedDiff_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public float[] ReadFloatArrayPackedDiff(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-12]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Single\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-22]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Single\[\] | The array created from the diff and the current version. |

### ReadInt16() [MLAPI_Serialization_BitReader_ReadInt16]

<div class="markdown level1 summary" markdown="1">

Read a signed short (Int16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public short ReadInt16()

#### Returns [returns-23]

| Type         | Description             |
|--------------|-------------------------|
| System.Int16 | Value read from stream. |

### ReadInt16Packed() [MLAPI_Serialization_BitReader_ReadInt16Packed]

<div class="markdown level1 summary" markdown="1">

Read a ZigZag encoded varint signed short (Int16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public short ReadInt16Packed()

#### Returns [returns-24]

| Type         | Description                |
|--------------|----------------------------|
| System.Int16 | Decoded un-varinted value. |

### ReadInt32() [MLAPI_Serialization_BitReader_ReadInt32]

<div class="markdown level1 summary" markdown="1">

Read a signed int (Int32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public int ReadInt32()

#### Returns [returns-25]

| Type         | Description             |
|--------------|-------------------------|
| System.Int32 | Value read from stream. |

### ReadInt32Packed() [MLAPI_Serialization_BitReader_ReadInt32Packed]

<div class="markdown level1 summary" markdown="1">

Read a ZigZag encoded varint signed int (Int32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public int ReadInt32Packed()

#### Returns [returns-26]

| Type         | Description                |
|--------------|----------------------------|
| System.Int32 | Decoded un-varinted value. |

### ReadInt64() [MLAPI_Serialization_BitReader_ReadInt64]

<div class="markdown level1 summary" markdown="1">

Read a signed long (Int64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public long ReadInt64()

#### Returns [returns-27]

| Type         | Description             |
|--------------|-------------------------|
| System.Int64 | Value read from stream. |

### ReadInt64Packed() [MLAPI_Serialization_BitReader_ReadInt64Packed]

<div class="markdown level1 summary" markdown="1">

Read a ZigZag encoded varint signed long(Int64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public long ReadInt64Packed()

#### Returns [returns-28]

| Type         | Description                |
|--------------|----------------------------|
| System.Int64 | Decoded un-varinted value. |

### ReadIntArray(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArray_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public int[] ReadIntArray(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-13]

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-29]

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int32\[\] | The array read from the stream. |

### ReadIntArrayDiff(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArrayDiff_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public int[] ReadIntArrayDiff(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-14]

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns [returns-30]

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int32\[\] | The array created from the diff and the current version. |

### ReadIntArrayPacked(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArrayPacked_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    public int[] ReadIntArrayPacked(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-15]

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-31]

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int32\[\] | The array read from the stream. |

### ReadIntArrayPackedDiff(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArrayPackedDiff_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-33]

    public int[] ReadIntArrayPackedDiff(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-16]

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns [returns-32]

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int32\[\] | The array created from the diff and the current version. |

### ReadLongArray(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArray_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-34]

    public long[] ReadLongArray(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-17]

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-33]

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int64\[\] | The array read from the stream. |

### ReadLongArrayDiff(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArrayDiff_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-35]

    public long[] ReadLongArrayDiff(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-18]

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns [returns-34]

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int64\[\] | The array created from the diff and the current version. |

### ReadLongArrayPacked(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArrayPacked_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-36]

    public long[] ReadLongArrayPacked(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-19]

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-35]

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int64\[\] | The array read from the stream. |

### ReadLongArrayPackedDiff(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArrayPackedDiff_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-37]

    public long[] ReadLongArrayPackedDiff(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-20]

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns [returns-36]

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int64\[\] | The array created from the diff and the current version. |

### ReadNibble() [MLAPI_Serialization_BitReader_ReadNibble]

<div class="markdown level1 summary" markdown="1">

Read a nibble (4 bits) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-38]

    public byte ReadNibble()

#### Returns [returns-37]

| Type        | Description              |
|-------------|--------------------------|
| System.Byte | The nibble that was read |

### ReadNibble(Boolean) [MLAPI_Serialization_BitReader_ReadNibble_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read a nibble (4 bits) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-39]

    public byte ReadNibble(bool asUpper)

#### Parameters [parameters-21]

| Type           | Name    | Description                                                |
|----------------|---------|------------------------------------------------------------|
| System.Boolean | asUpper | Whether or not the nibble should be left-shifted by 4 bits |

#### Returns [returns-38]

| Type        | Description              |
|-------------|--------------------------|
| System.Byte | The nibble that was read |

### ReadObjectPacked(Type) [MLAPI_Serialization_BitReader_ReadObjectPacked_System_Type_]

<div class="markdown level1 summary" markdown="1">

Reads a single boxed object of a given type in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-40]

    public object ReadObjectPacked(Type type)

#### Parameters [parameters-22]

| Type        | Name | Description      |
|-------------|------|------------------|
| System.Type | type | The type to read |

#### Returns [returns-39]

| Type          | Description                   |
|---------------|-------------------------------|
| System.Object | Returns the boxed read object |

### ReadRangedDouble(Double, Double, Int32) [MLAPI_Serialization_BitReader_ReadRangedDouble_System_Double_System_Double_System_Int32_]

<div class="markdown level1 summary" markdown="1">

read a double-precision floating point value from the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-41]

    public double ReadRangedDouble(double minValue, double maxValue, int bytes)

#### Parameters [parameters-23]

| Type          | Name     | Description                                                                       |
|---------------|----------|-----------------------------------------------------------------------------------|
| System.Double | minValue | Minimum value that this value could be                                            |
| System.Double | maxValue | Maximum possible value that this could be                                         |
| System.Int32  | bytes    | How many bytes the compressed value occupies. Must be between 1 and 8 (inclusive) |

#### Returns [returns-40]

| Type          | Description    |
|---------------|----------------|
| System.Double | The read value |

### ReadRangedSingle(Single, Single, Int32) [MLAPI_Serialization_BitReader_ReadRangedSingle_System_Single_System_Single_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Read a single-precision floating point value from the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-42]

    public float ReadRangedSingle(float minValue, float maxValue, int bytes)

#### Parameters [parameters-24]

| Type          | Name     | Description                                                                       |
|---------------|----------|-----------------------------------------------------------------------------------|
| System.Single | minValue | Minimum value that this value could be                                            |
| System.Single | maxValue | Maximum possible value that this could be                                         |
| System.Int32  | bytes    | How many bytes the compressed value occupies. Must be between 1 and 4 (inclusive) |

#### Returns [returns-41]

| Type          | Description    |
|---------------|----------------|
| System.Single | The read value |

### ReadRay() [MLAPI_Serialization_BitReader_ReadRay]

<div class="markdown level1 summary" markdown="1">

Read a Ray from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-43]

    public Ray ReadRay()

#### Returns [returns-42]

| Type            | Description                   |
|-----------------|-------------------------------|
| UnityEngine.Ray | The Ray read from the stream. |

### ReadRayPacked() [MLAPI_Serialization_BitReader_ReadRayPacked]

<div class="markdown level1 summary" markdown="1">

Read a Ray from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-44]

    public Ray ReadRayPacked()

#### Returns [returns-43]

| Type            | Description                   |
|-----------------|-------------------------------|
| UnityEngine.Ray | The Ray read from the stream. |

### ReadRotation() [MLAPI_Serialization_BitReader_ReadRotation]

<div class="markdown level1 summary" markdown="1">

Reads the rotation from the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-45]

    public Quaternion ReadRotation()

#### Returns [returns-44]

| Type                   | Description                       |
|------------------------|-----------------------------------|
| UnityEngine.Quaternion | The rotation read from the stream |

### ReadRotationPacked() [MLAPI_Serialization_BitReader_ReadRotationPacked]

<div class="markdown level1 summary" markdown="1">

Reads the rotation from the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-46]

    public Quaternion ReadRotationPacked()

#### Returns [returns-45]

| Type                   | Description                       |
|------------------------|-----------------------------------|
| UnityEngine.Quaternion | The rotation read from the stream |

### ReadSByte() [MLAPI_Serialization_BitReader_ReadSByte]

<div class="markdown level1 summary" markdown="1">

Reads a signed byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-47]

    public sbyte ReadSByte()

#### Returns [returns-46]

| Type         | Description             |
|--------------|-------------------------|
| System.SByte | Value read from stream. |

### ReadShortArray(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArray_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-48]

    public short[] ReadShortArray(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-25]

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-47]

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int16\[\] | The array read from the stream. |

### ReadShortArrayDiff(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArrayDiff_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-49]

    public short[] ReadShortArrayDiff(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-26]

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns [returns-48]

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int16\[\] | The array created from the diff and the current version. |

### ReadShortArrayPacked(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArrayPacked_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-50]

    public short[] ReadShortArrayPacked(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-27]

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-49]

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int16\[\] | The array read from the stream. |

### ReadShortArrayPackedDiff(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArrayPackedDiff_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-51]

    public short[] ReadShortArrayPackedDiff(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-28]

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns [returns-50]

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int16\[\] | The array created from the diff and the current version. |

### ReadSingle() [MLAPI_Serialization_BitReader_ReadSingle]

<div class="markdown level1 summary" markdown="1">

Read a single-precision floating point value from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-52]

    public float ReadSingle()

#### Returns [returns-51]

| Type          | Description    |
|---------------|----------------|
| System.Single | The read value |

### ReadSinglePacked() [MLAPI_Serialization_BitReader_ReadSinglePacked]

<div class="markdown level1 summary" markdown="1">

Read a single-precision floating point value from the stream from a
varint

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-53]

    public float ReadSinglePacked()

#### Returns [returns-52]

| Type          | Description    |
|---------------|----------------|
| System.Single | The read value |

### ReadString(Boolean) [MLAPI_Serialization_BitReader_ReadString_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read a string from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-54]

    public StringBuilder ReadString(bool oneByteChars)

#### Parameters [parameters-29]

| Type           | Name         | Description                                                           |
|----------------|--------------|-----------------------------------------------------------------------|
| System.Boolean | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-53]

| Type                      | Description               |
|---------------------------|---------------------------|
| System.Text.StringBuilder | The string that was read. |

### ReadString(StringBuilder, Boolean) [MLAPI_Serialization_BitReader_ReadString_System_Text_StringBuilder_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read a string from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-55]

    public StringBuilder ReadString(StringBuilder builder = null, bool oneByteChars = false)

#### Parameters [parameters-30]

| Type                      | Name         | Description                                                           |
|---------------------------|--------------|-----------------------------------------------------------------------|
| System.Text.StringBuilder | builder      | The builder to read the values into or null to use a new builder.     |
| System.Boolean            | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-54]

| Type                      | Description               |
|---------------------------|---------------------------|
| System.Text.StringBuilder | The string that was read. |

### ReadStringDiff(String, Boolean) [MLAPI_Serialization_BitReader_ReadStringDiff_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-56]

    public StringBuilder ReadStringDiff(string compare, bool oneByteChars = false)

#### Parameters [parameters-31]

| Type           | Name         | Description                                                           |
|----------------|--------------|-----------------------------------------------------------------------|
| System.String  | compare      | The version to compare the diff to.                                   |
| System.Boolean | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-55]

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringDiff(StringBuilder, Boolean) [MLAPI_Serialization_BitReader_ReadStringDiff_System_Text_StringBuilder_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-57]

    public StringBuilder ReadStringDiff(StringBuilder compareAndBuffer, bool oneByteChars = false)

#### Parameters [parameters-32]

| Type                      | Name             | Description                                                                                 |
|---------------------------|------------------|---------------------------------------------------------------------------------------------|
| System.Text.StringBuilder | compareAndBuffer | The builder containing the current version and that will also be used as the output buffer. |
| System.Boolean            | oneByteChars     | If set to `true` one byte chars will be used and only ASCII will be supported.              |

#### Returns [returns-56]

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringDiff(StringBuilder, String, Boolean) [MLAPI_Serialization_BitReader_ReadStringDiff_System_Text_StringBuilder_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-58]

    public StringBuilder ReadStringDiff(StringBuilder builder, string compare, bool oneByteChars = false)

#### Parameters [parameters-33]

| Type                      | Name         | Description                                                           |
|---------------------------|--------------|-----------------------------------------------------------------------|
| System.Text.StringBuilder | builder      | The builder to read the string into or null to use a new builder.     |
| System.String             | compare      | The version to compare the diff to.                                   |
| System.Boolean            | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-57]

| Type                      | Description                                      |
|---------------------------|--------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version |

### ReadStringPacked(StringBuilder) [MLAPI_Serialization_BitReader_ReadStringPacked_System_Text_StringBuilder_]

<div class="markdown level1 summary" markdown="1">

Read string encoded as a varint from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-59]

    public StringBuilder ReadStringPacked(StringBuilder builder = null)

#### Parameters [parameters-34]

| Type                      | Name    | Description                                                      |
|---------------------------|---------|------------------------------------------------------------------|
| System.Text.StringBuilder | builder | The builder to read the string into or null to use a new builder |

#### Returns [returns-58]

| Type                      | Description               |
|---------------------------|---------------------------|
| System.Text.StringBuilder | The string that was read. |

### ReadStringPackedDiff(String) [MLAPI_Serialization_BitReader_ReadStringPackedDiff_System_String_]

<div class="markdown level1 summary" markdown="1">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-60]

    public StringBuilder ReadStringPackedDiff(string compare)

#### Parameters [parameters-35]

| Type          | Name    | Description                         |
|---------------|---------|-------------------------------------|
| System.String | compare | The version to compare the diff to. |

#### Returns [returns-59]

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringPackedDiff(StringBuilder) [MLAPI_Serialization_BitReader_ReadStringPackedDiff_System_Text_StringBuilder_]

<div class="markdown level1 summary" markdown="1">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-61]

    public StringBuilder ReadStringPackedDiff(StringBuilder compareAndBuffer)

#### Parameters [parameters-36]

| Type                      | Name             | Description                                                                                 |
|---------------------------|------------------|---------------------------------------------------------------------------------------------|
| System.Text.StringBuilder | compareAndBuffer | The builder containing the current version and that will also be used as the output buffer. |

#### Returns [returns-60]

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringPackedDiff(StringBuilder, String) [MLAPI_Serialization_BitReader_ReadStringPackedDiff_System_Text_StringBuilder_System_String_]

<div class="markdown level1 summary" markdown="1">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-62]

    public StringBuilder ReadStringPackedDiff(StringBuilder builder, string compare)

#### Parameters [parameters-37]

| Type                      | Name    | Description                                                       |
|---------------------------|---------|-------------------------------------------------------------------|
| System.Text.StringBuilder | builder | The builder to read the string into or null to use a new builder. |
| System.String             | compare | The version to compare the diff to.                               |

#### Returns [returns-61]

| Type                      | Description                                      |
|---------------------------|--------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version |

### ReadUInt16() [MLAPI_Serialization_BitReader_ReadUInt16]

<div class="markdown level1 summary" markdown="1">

Read an unsigned short (UInt16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-63]

    public ushort ReadUInt16()

#### Returns [returns-62]

| Type          | Description             |
|---------------|-------------------------|
| System.UInt16 | Value read from stream. |

### ReadUInt16Packed() [MLAPI_Serialization_BitReader_ReadUInt16Packed]

<div class="markdown level1 summary" markdown="1">

Read a varint unsigned short (UInt16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-64]

    public ushort ReadUInt16Packed()

#### Returns [returns-63]

| Type          | Description        |
|---------------|--------------------|
| System.UInt16 | Un-varinted value. |

### ReadUInt32() [MLAPI_Serialization_BitReader_ReadUInt32]

<div class="markdown level1 summary" markdown="1">

Read an unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-65]

    public uint ReadUInt32()

#### Returns [returns-64]

| Type          | Description             |
|---------------|-------------------------|
| System.UInt32 | Value read from stream. |

### ReadUInt32Packed() [MLAPI_Serialization_BitReader_ReadUInt32Packed]

<div class="markdown level1 summary" markdown="1">

Read a varint unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-66]

    public uint ReadUInt32Packed()

#### Returns [returns-65]

| Type          | Description        |
|---------------|--------------------|
| System.UInt32 | Un-varinted value. |

### ReadUInt64() [MLAPI_Serialization_BitReader_ReadUInt64]

<div class="markdown level1 summary" markdown="1">

Read an unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-67]

    public ulong ReadUInt64()

#### Returns [returns-66]

| Type          | Description             |
|---------------|-------------------------|
| System.UInt64 | Value read from stream. |

### ReadUInt64Packed() [MLAPI_Serialization_BitReader_ReadUInt64Packed]

<div class="markdown level1 summary" markdown="1">

Read a varint unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-68]

    public ulong ReadUInt64Packed()

#### Returns [returns-67]

| Type          | Description        |
|---------------|--------------------|
| System.UInt64 | Un-varinted value. |

### ReadUIntArray(UInt32\[\], Int64) [MLAPI_Serialization_BitReader_ReadUIntArray_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read uint array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-69]

    public uint[] ReadUIntArray(uint[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-38]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-68]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt32\[\] | The array read from the stream. |

### ReadUIntArrayDiff(UInt32\[\], Int64) [MLAPI_Serialization_BitReader_ReadUIntArrayDiff_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read uint array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-70]

    public uint[] ReadUIntArrayDiff(uint[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-39]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt32\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-69]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt32\[\] | The array created from the diff and the current version. |

### ReadUIntArrayPacked(UInt32\[\], Int64) [MLAPI_Serialization_BitReader_ReadUIntArrayPacked_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read uint array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-71]

    public uint[] ReadUIntArrayPacked(uint[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-40]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-70]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt32\[\] | The array read from the stream. |

### ReadULongArray(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArray_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-72]

    public ulong[] ReadULongArray(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-41]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-71]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt64\[\] | The array read from the stream. |

### ReadULongArrayDiff(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArrayDiff_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-73]

    public ulong[] ReadULongArrayDiff(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-42]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-72]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt64\[\] | The array created from the diff and the current version. |

### ReadULongArrayPacked(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArrayPacked_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-74]

    public ulong[] ReadULongArrayPacked(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-43]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-73]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt64\[\] | The array read from the stream. |

### ReadULongArrayPackedDiff(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArrayPackedDiff_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-75]

    public ulong[] ReadULongArrayPackedDiff(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-44]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-74]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt64\[\] | The array created from the diff and the current version. |

### ReadUShortArray(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArray_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-76]

    public ushort[] ReadUShortArray(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-45]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-75]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt16\[\] | The array read from the stream. |

### ReadUShortArrayDiff(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArrayDiff_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-77]

    public ushort[] ReadUShortArrayDiff(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-46]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-76]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt16\[\] | The array created from the diff and the current version. |

### ReadUShortArrayPacked(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArrayPacked_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-78]

    public ushort[] ReadUShortArrayPacked(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-47]

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns [returns-77]

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt16\[\] | The array read from the stream. |

### ReadUShortArrayPackedDiff(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArrayPackedDiff_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-79]

    public ushort[] ReadUShortArrayPackedDiff(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-48]

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns [returns-78]

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt16\[\] | The array created from the diff and the current version. |

### ReadVector2() [MLAPI_Serialization_BitReader_ReadVector2]

<div class="markdown level1 summary" markdown="1">

Read a Vector2 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-80]

    public Vector2 ReadVector2()

#### Returns [returns-79]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector2 | The Vector2 read from the stream. |

### ReadVector2Packed() [MLAPI_Serialization_BitReader_ReadVector2Packed]

<div class="markdown level1 summary" markdown="1">

Read a Vector2 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-81]

    public Vector2 ReadVector2Packed()

#### Returns [returns-80]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector2 | The Vector2 read from the stream. |

### ReadVector3() [MLAPI_Serialization_BitReader_ReadVector3]

<div class="markdown level1 summary" markdown="1">

Read a Vector3 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-82]

    public Vector3 ReadVector3()

#### Returns [returns-81]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector3 | The Vector3 read from the stream. |

### ReadVector3Packed() [MLAPI_Serialization_BitReader_ReadVector3Packed]

<div class="markdown level1 summary" markdown="1">

Read a Vector3 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-83]

    public Vector3 ReadVector3Packed()

#### Returns [returns-82]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector3 | The Vector3 read from the stream. |

### ReadVector4() [MLAPI_Serialization_BitReader_ReadVector4]

<div class="markdown level1 summary" markdown="1">

Read a Vector4 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-84]

    public Vector4 ReadVector4()

#### Returns [returns-83]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector4 | The Vector4 read from the stream. |

### ReadVector4Packed() [MLAPI_Serialization_BitReader_ReadVector4Packed]

<div class="markdown level1 summary" markdown="1">

Read a Vector4 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-85]

    public Vector4 ReadVector4Packed()

#### Returns [returns-84]

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector4 | The Vector4 read from the stream. |

### SetStream(Stream) [MLAPI_Serialization_BitReader_SetStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Changes the underlying stream the reader is reading from

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-86]

    public void SetStream(Stream stream)

#### Parameters [parameters-49]

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

### SkipPadBits() [MLAPI_Serialization_BitReader_SkipPadBits]

<div class="markdown level1 summary" markdown="1">

Skips pad bits and aligns the position to the next byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-87]

    public void SkipPadBits()
