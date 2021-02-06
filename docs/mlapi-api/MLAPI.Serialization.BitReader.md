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

## Constructors <span id="MLAPI_Serialization_BitReader__ctor_"></span>

### BitReader(Stream) [MLAPI_Serialization_BitReader__ctor_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Creates a new BitReader backed by a given stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public BitReader(Stream stream)

#### Parameters [parameters]

| Type                                       | Name                                      | Description             |
|--------------------------------------------|-------------------------------------------|-------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> | The stream to read from |

## Methods <span id="MLAPI_Serialization_BitReader_ReadBit_"></span>

### ReadBit() [MLAPI_Serialization_BitReader_ReadBit]

<div class="markdown level1 summary" markdown="1">

Reads a single bit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public bool ReadBit()

#### Returns [returns]

| Type                                     | Description  |
|------------------------------------------|--------------|
| <span class="xref">System.Boolean</span> | The bit read |

<span id="MLAPI_Serialization_BitReader_ReadBits_"></span>

### ReadBits(Int32) [MLAPI_Serialization_BitReader_ReadBits_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public ulong ReadBits(int bitCount)

#### Parameters [parameters-1]

| Type                                   | Name                                        | Description                                  |
|----------------------------------------|---------------------------------------------|----------------------------------------------|
| <span class="xref">System.Int32</span> | <span class="parametername">bitCount</span> | How many bits to read. Minimum 0, maximum 8. |

#### Returns [returns-1]

| Type                                    | Description             |
|-----------------------------------------|-------------------------|
| <span class="xref">System.UInt64</span> | The bits that were read |

<span id="MLAPI_Serialization_BitReader_ReadBool_"></span>

### ReadBool() [MLAPI_Serialization_BitReader_ReadBool]

<div class="markdown level1 summary" markdown="1">

Reads a single bit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public bool ReadBool()

#### Returns [returns-2]

| Type                                     | Description  |
|------------------------------------------|--------------|
| <span class="xref">System.Boolean</span> | The bit read |

<span id="MLAPI_Serialization_BitReader_ReadByte_"></span>

### ReadByte() [MLAPI_Serialization_BitReader_ReadByte]

<div class="markdown level1 summary" markdown="1">

Reads a single byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public int ReadByte()

#### Returns [returns-3]

| Type                                   | Description                 |
|----------------------------------------|-----------------------------|
| <span class="xref">System.Int32</span> | The byte read as an integer |

<span id="MLAPI_Serialization_BitReader_ReadByteArray_"></span>

### ReadByteArray(Byte\[\], Int64) [MLAPI_Serialization_BitReader_ReadByteArray_System_Byte___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read byte array into an optional buffer from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public byte[] ReadByteArray(byte[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-2]

| Type                                      | Name                                           | Description                                                                                       |
|-------------------------------------------|------------------------------------------------|---------------------------------------------------------------------------------------------------|
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">readTo</span>      | The array to read into. If the array is not large enough or if it's null. A new array is created. |
| <span class="xref">System.Int64</span>    | <span class="parametername">knownLength</span> | The length of the array if it's known. Otherwise -1                                               |

#### Returns [returns-4]

| Type                                      | Description                        |
|-------------------------------------------|------------------------------------|
| <span class="xref">System.Byte</span>\[\] | The byte array that has been read. |

<span id="MLAPI_Serialization_BitReader_ReadByteArrayDiff_"></span>

### ReadByteArrayDiff(Byte\[\], Int64) [MLAPI_Serialization_BitReader_ReadByteArrayDiff_System_Byte___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read byte array diff into an optional buffer from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public byte[] ReadByteArrayDiff(byte[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-3]

| Type                                      | Name                                           | Description                                         |
|-------------------------------------------|------------------------------------------------|-----------------------------------------------------|
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null.      |
| <span class="xref">System.Int64</span>    | <span class="parametername">knownLength</span> | The length of the array if it's known. Otherwise -1 |

#### Returns [returns-5]

| Type                                      | Description                                        |
|-------------------------------------------|----------------------------------------------------|
| <span class="xref">System.Byte</span>\[\] | The byte array created from the diff and original. |

<span id="MLAPI_Serialization_BitReader_ReadByteBits_"></span>

### ReadByteBits(Int32) [MLAPI_Serialization_BitReader_ReadByteBits_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public byte ReadByteBits(int bitCount)

#### Parameters [parameters-4]

| Type                                   | Name                                        | Description                                   |
|----------------------------------------|---------------------------------------------|-----------------------------------------------|
| <span class="xref">System.Int32</span> | <span class="parametername">bitCount</span> | How many bits to read. Minimum 0, maximum 64. |

#### Returns [returns-6]

| Type                                  | Description             |
|---------------------------------------|-------------------------|
| <span class="xref">System.Byte</span> | The bits that were read |

<span id="MLAPI_Serialization_BitReader_ReadByteDirect_"></span>

### ReadByteDirect() [MLAPI_Serialization_BitReader_ReadByteDirect]

<div class="markdown level1 summary" markdown="1">

Reads a byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public byte ReadByteDirect()

#### Returns [returns-7]

| Type                                  | Description   |
|---------------------------------------|---------------|
| <span class="xref">System.Byte</span> | The byte read |

<span id="MLAPI_Serialization_BitReader_ReadChar_"></span>

### ReadChar() [MLAPI_Serialization_BitReader_ReadChar]

<div class="markdown level1 summary" markdown="1">

Read a single character from the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public char ReadChar()

#### Returns [returns-8]

| Type                                  | Description             |
|---------------------------------------|-------------------------|
| <span class="xref">System.Char</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadCharPacked_"></span>

### ReadCharPacked() [MLAPI_Serialization_BitReader_ReadCharPacked]

<div class="markdown level1 summary" markdown="1">

Read a varint two-byte character from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public char ReadCharPacked()

#### Returns [returns-9]

| Type                                  | Description        |
|---------------------------------------|--------------------|
| <span class="xref">System.Char</span> | Un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadColor_"></span>

### ReadColor() [MLAPI_Serialization_BitReader_ReadColor]

<div class="markdown level1 summary" markdown="1">

Read a Color from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public Color ReadColor()

#### Returns [returns-10]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">UnityEngine.Color</span> | The Color read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadColor32_"></span>

### ReadColor32() [MLAPI_Serialization_BitReader_ReadColor32]

<div class="markdown level1 summary" markdown="1">

Read a Color32 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public Color32 ReadColor32()

#### Returns [returns-11]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Color32</span> | The Color32 read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadColorPacked_"></span>

### ReadColorPacked() [MLAPI_Serialization_BitReader_ReadColorPacked]

<div class="markdown level1 summary" markdown="1">

Read a Color from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public Color ReadColorPacked()

#### Returns [returns-12]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">UnityEngine.Color</span> | The Color read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadDouble_"></span>

### ReadDouble() [MLAPI_Serialization_BitReader_ReadDouble]

<div class="markdown level1 summary" markdown="1">

Read a double-precision floating point value from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public double ReadDouble()

#### Returns [returns-13]

| Type                                    | Description    |
|-----------------------------------------|----------------|
| <span class="xref">System.Double</span> | The read value |

<span id="MLAPI_Serialization_BitReader_ReadDoubleArray_"></span>

### ReadDoubleArray(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArray_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public double[] ReadDoubleArray(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-5]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Double</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-14]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.Double</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadDoubleArrayDiff_"></span>

### ReadDoubleArrayDiff(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArrayDiff_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public double[] ReadDoubleArrayDiff(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-6]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Double</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-15]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Double</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadDoubleArrayPacked_"></span>

### ReadDoubleArrayPacked(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArrayPacked_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public double[] ReadDoubleArrayPacked(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-7]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Double</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-16]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.Double</span>\[\] | The array read from the stream. |

<span
id="MLAPI_Serialization_BitReader_ReadDoubleArrayPackedDiff_"></span>

### ReadDoubleArrayPackedDiff(Double\[\], Int64) [MLAPI_Serialization_BitReader_ReadDoubleArrayPackedDiff_System_Double___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read double array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public double[] ReadDoubleArrayPackedDiff(double[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-8]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Double</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-17]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Double</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadDoublePacked_"></span>

### ReadDoublePacked() [MLAPI_Serialization_BitReader_ReadDoublePacked]

<div class="markdown level1 summary" markdown="1">

Read a double-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public double ReadDoublePacked()

#### Returns [returns-18]

| Type                                    | Description    |
|-----------------------------------------|----------------|
| <span class="xref">System.Double</span> | The read value |

<span id="MLAPI_Serialization_BitReader_ReadFloatArray_"></span>

### ReadFloatArray(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArray_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public float[] ReadFloatArray(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-9]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Single</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-19]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.Single</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadFloatArrayDiff_"></span>

### ReadFloatArrayDiff(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArrayDiff_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public float[] ReadFloatArrayDiff(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-10]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Single</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-20]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Single</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadFloatArrayPacked_"></span>

### ReadFloatArrayPacked(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArrayPacked_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public float[] ReadFloatArrayPacked(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-11]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Single</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-21]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.Single</span>\[\] | The array read from the stream. |

<span
id="MLAPI_Serialization_BitReader_ReadFloatArrayPackedDiff_"></span>

### ReadFloatArrayPackedDiff(Single\[\], Int64) [MLAPI_Serialization_BitReader_ReadFloatArrayPackedDiff_System_Single___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read float array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public float[] ReadFloatArrayPackedDiff(float[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-12]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Single</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-22]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Single</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadInt16_"></span>

### ReadInt16() [MLAPI_Serialization_BitReader_ReadInt16]

<div class="markdown level1 summary" markdown="1">

Read a signed short (Int16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public short ReadInt16()

#### Returns [returns-23]

| Type                                   | Description             |
|----------------------------------------|-------------------------|
| <span class="xref">System.Int16</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadInt16Packed_"></span>

### ReadInt16Packed() [MLAPI_Serialization_BitReader_ReadInt16Packed]

<div class="markdown level1 summary" markdown="1">

Read a ZigZag encoded varint signed short (Int16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public short ReadInt16Packed()

#### Returns [returns-24]

| Type                                   | Description                |
|----------------------------------------|----------------------------|
| <span class="xref">System.Int16</span> | Decoded un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadInt32_"></span>

### ReadInt32() [MLAPI_Serialization_BitReader_ReadInt32]

<div class="markdown level1 summary" markdown="1">

Read a signed int (Int32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public int ReadInt32()

#### Returns [returns-25]

| Type                                   | Description             |
|----------------------------------------|-------------------------|
| <span class="xref">System.Int32</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadInt32Packed_"></span>

### ReadInt32Packed() [MLAPI_Serialization_BitReader_ReadInt32Packed]

<div class="markdown level1 summary" markdown="1">

Read a ZigZag encoded varint signed int (Int32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public int ReadInt32Packed()

#### Returns [returns-26]

| Type                                   | Description                |
|----------------------------------------|----------------------------|
| <span class="xref">System.Int32</span> | Decoded un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadInt64_"></span>

### ReadInt64() [MLAPI_Serialization_BitReader_ReadInt64]

<div class="markdown level1 summary" markdown="1">

Read a signed long (Int64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public long ReadInt64()

#### Returns [returns-27]

| Type                                   | Description             |
|----------------------------------------|-------------------------|
| <span class="xref">System.Int64</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadInt64Packed_"></span>

### ReadInt64Packed() [MLAPI_Serialization_BitReader_ReadInt64Packed]

<div class="markdown level1 summary" markdown="1">

Read a ZigZag encoded varint signed long(Int64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public long ReadInt64Packed()

#### Returns [returns-28]

| Type                                   | Description                |
|----------------------------------------|----------------------------|
| <span class="xref">System.Int64</span> | Decoded un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadIntArray_"></span>

### ReadIntArray(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArray_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public int[] ReadIntArray(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-13]

| Type                                       | Name                                           | Description                                           |
|--------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Int32</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-29]

| Type                                       | Description                     |
|--------------------------------------------|---------------------------------|
| <span class="xref">System.Int32</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadIntArrayDiff_"></span>

### ReadIntArrayDiff(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArrayDiff_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public int[] ReadIntArrayDiff(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-14]

| Type                                       | Name                                           | Description                                    |
|--------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Int32</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-30]

| Type                                       | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Int32</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadIntArrayPacked_"></span>

### ReadIntArrayPacked(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArrayPacked_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    public int[] ReadIntArrayPacked(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-15]

| Type                                       | Name                                           | Description                                           |
|--------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Int32</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-31]

| Type                                       | Description                     |
|--------------------------------------------|---------------------------------|
| <span class="xref">System.Int32</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadIntArrayPackedDiff_"></span>

### ReadIntArrayPackedDiff(Int32\[\], Int64) [MLAPI_Serialization_BitReader_ReadIntArrayPackedDiff_System_Int32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read int array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-33]

    public int[] ReadIntArrayPackedDiff(int[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-16]

| Type                                       | Name                                           | Description                                    |
|--------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Int32</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-32]

| Type                                       | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Int32</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadLongArray_"></span>

### ReadLongArray(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArray_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-34]

    public long[] ReadLongArray(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-17]

| Type                                       | Name                                           | Description                                           |
|--------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Int64</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-33]

| Type                                       | Description                     |
|--------------------------------------------|---------------------------------|
| <span class="xref">System.Int64</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadLongArrayDiff_"></span>

### ReadLongArrayDiff(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArrayDiff_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-35]

    public long[] ReadLongArrayDiff(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-18]

| Type                                       | Name                                           | Description                                    |
|--------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Int64</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-34]

| Type                                       | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Int64</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadLongArrayPacked_"></span>

### ReadLongArrayPacked(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArrayPacked_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-36]

    public long[] ReadLongArrayPacked(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-19]

| Type                                       | Name                                           | Description                                           |
|--------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Int64</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-35]

| Type                                       | Description                     |
|--------------------------------------------|---------------------------------|
| <span class="xref">System.Int64</span>\[\] | The array read from the stream. |

<span
id="MLAPI_Serialization_BitReader_ReadLongArrayPackedDiff_"></span>

### ReadLongArrayPackedDiff(Int64\[\], Int64) [MLAPI_Serialization_BitReader_ReadLongArrayPackedDiff_System_Int64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read long array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-37]

    public long[] ReadLongArrayPackedDiff(long[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-20]

| Type                                       | Name                                           | Description                                    |
|--------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Int64</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-36]

| Type                                       | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Int64</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadNibble_"></span>

### ReadNibble() [MLAPI_Serialization_BitReader_ReadNibble]

<div class="markdown level1 summary" markdown="1">

Read a nibble (4 bits) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-38]

    public byte ReadNibble()

#### Returns [returns-37]

| Type                                  | Description              |
|---------------------------------------|--------------------------|
| <span class="xref">System.Byte</span> | The nibble that was read |

<span id="MLAPI_Serialization_BitReader_ReadNibble_"></span>

### ReadNibble(Boolean) [MLAPI_Serialization_BitReader_ReadNibble_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read a nibble (4 bits) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-39]

    public byte ReadNibble(bool asUpper)

#### Parameters [parameters-21]

| Type                                     | Name                                       | Description                                                |
|------------------------------------------|--------------------------------------------|------------------------------------------------------------|
| <span class="xref">System.Boolean</span> | <span class="parametername">asUpper</span> | Whether or not the nibble should be left-shifted by 4 bits |

#### Returns [returns-38]

| Type                                  | Description              |
|---------------------------------------|--------------------------|
| <span class="xref">System.Byte</span> | The nibble that was read |

<span id="MLAPI_Serialization_BitReader_ReadObjectPacked_"></span>

### ReadObjectPacked(Type) [MLAPI_Serialization_BitReader_ReadObjectPacked_System_Type_]

<div class="markdown level1 summary" markdown="1">

Reads a single boxed object of a given type in a packed format

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-40]

    public object ReadObjectPacked(Type type)

#### Parameters [parameters-22]

| Type                                  | Name                                    | Description      |
|---------------------------------------|-----------------------------------------|------------------|
| <span class="xref">System.Type</span> | <span class="parametername">type</span> | The type to read |

#### Returns [returns-39]

| Type                                    | Description                   |
|-----------------------------------------|-------------------------------|
| <span class="xref">System.Object</span> | Returns the boxed read object |

<span id="MLAPI_Serialization_BitReader_ReadRangedDouble_"></span>

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

| Type                                    | Name                                        | Description                                                                       |
|-----------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------------|
| <span class="xref">System.Double</span> | <span class="parametername">minValue</span> | Minimum value that this value could be                                            |
| <span class="xref">System.Double</span> | <span class="parametername">maxValue</span> | Maximum possible value that this could be                                         |
| <span class="xref">System.Int32</span>  | <span class="parametername">bytes</span>    | How many bytes the compressed value occupies. Must be between 1 and 8 (inclusive) |

#### Returns [returns-40]

| Type                                    | Description    |
|-----------------------------------------|----------------|
| <span class="xref">System.Double</span> | The read value |

<span id="MLAPI_Serialization_BitReader_ReadRangedSingle_"></span>

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

| Type                                    | Name                                        | Description                                                                       |
|-----------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------------|
| <span class="xref">System.Single</span> | <span class="parametername">minValue</span> | Minimum value that this value could be                                            |
| <span class="xref">System.Single</span> | <span class="parametername">maxValue</span> | Maximum possible value that this could be                                         |
| <span class="xref">System.Int32</span>  | <span class="parametername">bytes</span>    | How many bytes the compressed value occupies. Must be between 1 and 4 (inclusive) |

#### Returns [returns-41]

| Type                                    | Description    |
|-----------------------------------------|----------------|
| <span class="xref">System.Single</span> | The read value |

<span id="MLAPI_Serialization_BitReader_ReadRay_"></span>

### ReadRay() [MLAPI_Serialization_BitReader_ReadRay]

<div class="markdown level1 summary" markdown="1">

Read a Ray from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-43]

    public Ray ReadRay()

#### Returns [returns-42]

| Type                                      | Description                   |
|-------------------------------------------|-------------------------------|
| <span class="xref">UnityEngine.Ray</span> | The Ray read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadRayPacked_"></span>

### ReadRayPacked() [MLAPI_Serialization_BitReader_ReadRayPacked]

<div class="markdown level1 summary" markdown="1">

Read a Ray from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-44]

    public Ray ReadRayPacked()

#### Returns [returns-43]

| Type                                      | Description                   |
|-------------------------------------------|-------------------------------|
| <span class="xref">UnityEngine.Ray</span> | The Ray read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadRotation_"></span>

### ReadRotation() [MLAPI_Serialization_BitReader_ReadRotation]

<div class="markdown level1 summary" markdown="1">

Reads the rotation from the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-45]

    public Quaternion ReadRotation()

#### Returns [returns-44]

| Type                                             | Description                       |
|--------------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Quaternion</span> | The rotation read from the stream |

<span id="MLAPI_Serialization_BitReader_ReadRotationPacked_"></span>

### ReadRotationPacked() [MLAPI_Serialization_BitReader_ReadRotationPacked]

<div class="markdown level1 summary" markdown="1">

Reads the rotation from the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-46]

    public Quaternion ReadRotationPacked()

#### Returns [returns-45]

| Type                                             | Description                       |
|--------------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Quaternion</span> | The rotation read from the stream |

<span id="MLAPI_Serialization_BitReader_ReadSByte_"></span>

### ReadSByte() [MLAPI_Serialization_BitReader_ReadSByte]

<div class="markdown level1 summary" markdown="1">

Reads a signed byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-47]

    public sbyte ReadSByte()

#### Returns [returns-46]

| Type                                   | Description             |
|----------------------------------------|-------------------------|
| <span class="xref">System.SByte</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadShortArray_"></span>

### ReadShortArray(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArray_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-48]

    public short[] ReadShortArray(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-25]

| Type                                       | Name                                           | Description                                           |
|--------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Int16</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-47]

| Type                                       | Description                     |
|--------------------------------------------|---------------------------------|
| <span class="xref">System.Int16</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadShortArrayDiff_"></span>

### ReadShortArrayDiff(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArrayDiff_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-49]

    public short[] ReadShortArrayDiff(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-26]

| Type                                       | Name                                           | Description                                    |
|--------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Int16</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-48]

| Type                                       | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Int16</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadShortArrayPacked_"></span>

### ReadShortArrayPacked(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArrayPacked_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-50]

    public short[] ReadShortArrayPacked(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-27]

| Type                                       | Name                                           | Description                                           |
|--------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.Int16</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-49]

| Type                                       | Description                     |
|--------------------------------------------|---------------------------------|
| <span class="xref">System.Int16</span>\[\] | The array read from the stream. |

<span
id="MLAPI_Serialization_BitReader_ReadShortArrayPackedDiff_"></span>

### ReadShortArrayPackedDiff(Int16\[\], Int64) [MLAPI_Serialization_BitReader_ReadShortArrayPackedDiff_System_Int16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read short array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-51]

    public short[] ReadShortArrayPackedDiff(short[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-28]

| Type                                       | Name                                           | Description                                    |
|--------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.Int16</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>     | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-50]

| Type                                       | Description                                              |
|--------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.Int16</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadSingle_"></span>

### ReadSingle() [MLAPI_Serialization_BitReader_ReadSingle]

<div class="markdown level1 summary" markdown="1">

Read a single-precision floating point value from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-52]

    public float ReadSingle()

#### Returns [returns-51]

| Type                                    | Description    |
|-----------------------------------------|----------------|
| <span class="xref">System.Single</span> | The read value |

<span id="MLAPI_Serialization_BitReader_ReadSinglePacked_"></span>

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

| Type                                    | Description    |
|-----------------------------------------|----------------|
| <span class="xref">System.Single</span> | The read value |

<span id="MLAPI_Serialization_BitReader_ReadString_"></span>

### ReadString(Boolean) [MLAPI_Serialization_BitReader_ReadString_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read a string from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-54]

    public StringBuilder ReadString(bool oneByteChars)

#### Parameters [parameters-29]

| Type                                     | Name                                            | Description                                                           |
|------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------|
| <span class="xref">System.Boolean</span> | <span class="parametername">oneByteChars</span> | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-53]

| Type                                                | Description               |
|-----------------------------------------------------|---------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string that was read. |

<span id="MLAPI_Serialization_BitReader_ReadString_"></span>

### ReadString(StringBuilder, Boolean) [MLAPI_Serialization_BitReader_ReadString_System_Text_StringBuilder_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read a string from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-55]

    public StringBuilder ReadString(StringBuilder builder = null, bool oneByteChars = false)

#### Parameters [parameters-30]

| Type                                                | Name                                            | Description                                                           |
|-----------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | <span class="parametername">builder</span>      | The builder to read the values into or null to use a new builder.     |
| <span class="xref">System.Boolean</span>            | <span class="parametername">oneByteChars</span> | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-54]

| Type                                                | Description               |
|-----------------------------------------------------|---------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string that was read. |

<span id="MLAPI_Serialization_BitReader_ReadStringDiff_"></span>

### ReadStringDiff(String, Boolean) [MLAPI_Serialization_BitReader_ReadStringDiff_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-56]

    public StringBuilder ReadStringDiff(string compare, bool oneByteChars = false)

#### Parameters [parameters-31]

| Type                                     | Name                                            | Description                                                           |
|------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------|
| <span class="xref">System.String</span>  | <span class="parametername">compare</span>      | The version to compare the diff to.                                   |
| <span class="xref">System.Boolean</span> | <span class="parametername">oneByteChars</span> | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-55]

| Type                                                | Description                                       |
|-----------------------------------------------------|---------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string based on the diff and the old version. |

<span id="MLAPI_Serialization_BitReader_ReadStringDiff_"></span>

### ReadStringDiff(StringBuilder, Boolean) [MLAPI_Serialization_BitReader_ReadStringDiff_System_Text_StringBuilder_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-57]

    public StringBuilder ReadStringDiff(StringBuilder compareAndBuffer, bool oneByteChars = false)

#### Parameters [parameters-32]

| Type                                                | Name                                                | Description                                                                                 |
|-----------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | <span class="parametername">compareAndBuffer</span> | The builder containing the current version and that will also be used as the output buffer. |
| <span class="xref">System.Boolean</span>            | <span class="parametername">oneByteChars</span>     | If set to `true` one byte chars will be used and only ASCII will be supported.              |

#### Returns [returns-56]

| Type                                                | Description                                       |
|-----------------------------------------------------|---------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string based on the diff and the old version. |

<span id="MLAPI_Serialization_BitReader_ReadStringDiff_"></span>

### ReadStringDiff(StringBuilder, String, Boolean) [MLAPI_Serialization_BitReader_ReadStringDiff_System_Text_StringBuilder_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-58]

    public StringBuilder ReadStringDiff(StringBuilder builder, string compare, bool oneByteChars = false)

#### Parameters [parameters-33]

| Type                                                | Name                                            | Description                                                           |
|-----------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | <span class="parametername">builder</span>      | The builder to read the string into or null to use a new builder.     |
| <span class="xref">System.String</span>             | <span class="parametername">compare</span>      | The version to compare the diff to.                                   |
| <span class="xref">System.Boolean</span>            | <span class="parametername">oneByteChars</span> | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns [returns-57]

| Type                                                | Description                                      |
|-----------------------------------------------------|--------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string based on the diff and the old version |

<span id="MLAPI_Serialization_BitReader_ReadStringPacked_"></span>

### ReadStringPacked(StringBuilder) [MLAPI_Serialization_BitReader_ReadStringPacked_System_Text_StringBuilder_]

<div class="markdown level1 summary" markdown="1">

Read string encoded as a varint from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-59]

    public StringBuilder ReadStringPacked(StringBuilder builder = null)

#### Parameters [parameters-34]

| Type                                                | Name                                       | Description                                                      |
|-----------------------------------------------------|--------------------------------------------|------------------------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | <span class="parametername">builder</span> | The builder to read the string into or null to use a new builder |

#### Returns [returns-58]

| Type                                                | Description               |
|-----------------------------------------------------|---------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string that was read. |

<span id="MLAPI_Serialization_BitReader_ReadStringPackedDiff_"></span>

### ReadStringPackedDiff(String) [MLAPI_Serialization_BitReader_ReadStringPackedDiff_System_String_]

<div class="markdown level1 summary" markdown="1">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-60]

    public StringBuilder ReadStringPackedDiff(string compare)

#### Parameters [parameters-35]

| Type                                    | Name                                       | Description                         |
|-----------------------------------------|--------------------------------------------|-------------------------------------|
| <span class="xref">System.String</span> | <span class="parametername">compare</span> | The version to compare the diff to. |

#### Returns [returns-59]

| Type                                                | Description                                       |
|-----------------------------------------------------|---------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string based on the diff and the old version. |

<span id="MLAPI_Serialization_BitReader_ReadStringPackedDiff_"></span>

### ReadStringPackedDiff(StringBuilder) [MLAPI_Serialization_BitReader_ReadStringPackedDiff_System_Text_StringBuilder_]

<div class="markdown level1 summary" markdown="1">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-61]

    public StringBuilder ReadStringPackedDiff(StringBuilder compareAndBuffer)

#### Parameters [parameters-36]

| Type                                                | Name                                                | Description                                                                                 |
|-----------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | <span class="parametername">compareAndBuffer</span> | The builder containing the current version and that will also be used as the output buffer. |

#### Returns [returns-60]

| Type                                                | Description                                       |
|-----------------------------------------------------|---------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string based on the diff and the old version. |

<span id="MLAPI_Serialization_BitReader_ReadStringPackedDiff_"></span>

### ReadStringPackedDiff(StringBuilder, String) [MLAPI_Serialization_BitReader_ReadStringPackedDiff_System_Text_StringBuilder_System_String_]

<div class="markdown level1 summary" markdown="1">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-62]

    public StringBuilder ReadStringPackedDiff(StringBuilder builder, string compare)

#### Parameters [parameters-37]

| Type                                                | Name                                       | Description                                                       |
|-----------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | <span class="parametername">builder</span> | The builder to read the string into or null to use a new builder. |
| <span class="xref">System.String</span>             | <span class="parametername">compare</span> | The version to compare the diff to.                               |

#### Returns [returns-61]

| Type                                                | Description                                      |
|-----------------------------------------------------|--------------------------------------------------|
| <span class="xref">System.Text.StringBuilder</span> | The string based on the diff and the old version |

<span id="MLAPI_Serialization_BitReader_ReadUInt16_"></span>

### ReadUInt16() [MLAPI_Serialization_BitReader_ReadUInt16]

<div class="markdown level1 summary" markdown="1">

Read an unsigned short (UInt16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-63]

    public ushort ReadUInt16()

#### Returns [returns-62]

| Type                                    | Description             |
|-----------------------------------------|-------------------------|
| <span class="xref">System.UInt16</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadUInt16Packed_"></span>

### ReadUInt16Packed() [MLAPI_Serialization_BitReader_ReadUInt16Packed]

<div class="markdown level1 summary" markdown="1">

Read a varint unsigned short (UInt16) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-64]

    public ushort ReadUInt16Packed()

#### Returns [returns-63]

| Type                                    | Description        |
|-----------------------------------------|--------------------|
| <span class="xref">System.UInt16</span> | Un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadUInt32_"></span>

### ReadUInt32() [MLAPI_Serialization_BitReader_ReadUInt32]

<div class="markdown level1 summary" markdown="1">

Read an unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-65]

    public uint ReadUInt32()

#### Returns [returns-64]

| Type                                    | Description             |
|-----------------------------------------|-------------------------|
| <span class="xref">System.UInt32</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadUInt32Packed_"></span>

### ReadUInt32Packed() [MLAPI_Serialization_BitReader_ReadUInt32Packed]

<div class="markdown level1 summary" markdown="1">

Read a varint unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-66]

    public uint ReadUInt32Packed()

#### Returns [returns-65]

| Type                                    | Description        |
|-----------------------------------------|--------------------|
| <span class="xref">System.UInt32</span> | Un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadUInt64_"></span>

### ReadUInt64() [MLAPI_Serialization_BitReader_ReadUInt64]

<div class="markdown level1 summary" markdown="1">

Read an unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-67]

    public ulong ReadUInt64()

#### Returns [returns-66]

| Type                                    | Description             |
|-----------------------------------------|-------------------------|
| <span class="xref">System.UInt64</span> | Value read from stream. |

<span id="MLAPI_Serialization_BitReader_ReadUInt64Packed_"></span>

### ReadUInt64Packed() [MLAPI_Serialization_BitReader_ReadUInt64Packed]

<div class="markdown level1 summary" markdown="1">

Read a varint unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-68]

    public ulong ReadUInt64Packed()

#### Returns [returns-67]

| Type                                    | Description        |
|-----------------------------------------|--------------------|
| <span class="xref">System.UInt64</span> | Un-varinted value. |

<span id="MLAPI_Serialization_BitReader_ReadUIntArray_"></span>

### ReadUIntArray(UInt32\[\], Int64) [MLAPI_Serialization_BitReader_ReadUIntArray_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read uint array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-69]

    public uint[] ReadUIntArray(uint[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-38]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.UInt32</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-68]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.UInt32</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadUIntArrayDiff_"></span>

### ReadUIntArrayDiff(UInt32\[\], Int64) [MLAPI_Serialization_BitReader_ReadUIntArrayDiff_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read uint array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-70]

    public uint[] ReadUIntArrayDiff(uint[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-39]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.UInt32</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-69]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.UInt32</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadUIntArrayPacked_"></span>

### ReadUIntArrayPacked(UInt32\[\], Int64) [MLAPI_Serialization_BitReader_ReadUIntArrayPacked_System_UInt32___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read uint array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-71]

    public uint[] ReadUIntArrayPacked(uint[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-40]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.UInt32</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-70]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.UInt32</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadULongArray_"></span>

### ReadULongArray(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArray_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-72]

    public ulong[] ReadULongArray(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-41]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.UInt64</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-71]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.UInt64</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadULongArrayDiff_"></span>

### ReadULongArrayDiff(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArrayDiff_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-73]

    public ulong[] ReadULongArrayDiff(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-42]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.UInt64</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-72]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.UInt64</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadULongArrayPacked_"></span>

### ReadULongArrayPacked(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArrayPacked_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-74]

    public ulong[] ReadULongArrayPacked(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-43]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.UInt64</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-73]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.UInt64</span>\[\] | The array read from the stream. |

<span
id="MLAPI_Serialization_BitReader_ReadULongArrayPackedDiff_"></span>

### ReadULongArrayPackedDiff(UInt64\[\], Int64) [MLAPI_Serialization_BitReader_ReadULongArrayPackedDiff_System_UInt64___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ulong array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-75]

    public ulong[] ReadULongArrayPackedDiff(ulong[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-44]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.UInt64</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-74]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.UInt64</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadUShortArray_"></span>

### ReadUShortArray(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArray_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-76]

    public ushort[] ReadUShortArray(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-45]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.UInt16</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-75]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.UInt16</span>\[\] | The array read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadUShortArrayDiff_"></span>

### ReadUShortArrayDiff(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArrayDiff_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array diff from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-77]

    public ushort[] ReadUShortArrayDiff(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-46]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.UInt16</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-76]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.UInt16</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadUShortArrayPacked_"></span>

### ReadUShortArrayPacked(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArrayPacked_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-78]

    public ushort[] ReadUShortArrayPacked(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-47]

| Type                                        | Name                                           | Description                                           |
|---------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.UInt16</span>\[\] | <span class="parametername">readTo</span>      | The buffer to read into or null to create a new array |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown                     |

#### Returns [returns-77]

| Type                                        | Description                     |
|---------------------------------------------|---------------------------------|
| <span class="xref">System.UInt16</span>\[\] | The array read from the stream. |

<span
id="MLAPI_Serialization_BitReader_ReadUShortArrayPackedDiff_"></span>

### ReadUShortArrayPackedDiff(UInt16\[\], Int64) [MLAPI_Serialization_BitReader_ReadUShortArrayPackedDiff_System_UInt16___System_Int64_]

<div class="markdown level1 summary" markdown="1">

Read ushort array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-79]

    public ushort[] ReadUShortArrayPackedDiff(ushort[] readTo = null, long knownLength = -1L)

#### Parameters [parameters-48]

| Type                                        | Name                                           | Description                                    |
|---------------------------------------------|------------------------------------------------|------------------------------------------------|
| <span class="xref">System.UInt16</span>\[\] | <span class="parametername">readTo</span>      | The buffer containing the old version or null. |
| <span class="xref">System.Int64</span>      | <span class="parametername">knownLength</span> | The known length or -1 if unknown              |

#### Returns [returns-78]

| Type                                        | Description                                              |
|---------------------------------------------|----------------------------------------------------------|
| <span class="xref">System.UInt16</span>\[\] | The array created from the diff and the current version. |

<span id="MLAPI_Serialization_BitReader_ReadVector2_"></span>

### ReadVector2() [MLAPI_Serialization_BitReader_ReadVector2]

<div class="markdown level1 summary" markdown="1">

Read a Vector2 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-80]

    public Vector2 ReadVector2()

#### Returns [returns-79]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Vector2</span> | The Vector2 read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadVector2Packed_"></span>

### ReadVector2Packed() [MLAPI_Serialization_BitReader_ReadVector2Packed]

<div class="markdown level1 summary" markdown="1">

Read a Vector2 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-81]

    public Vector2 ReadVector2Packed()

#### Returns [returns-80]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Vector2</span> | The Vector2 read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadVector3_"></span>

### ReadVector3() [MLAPI_Serialization_BitReader_ReadVector3]

<div class="markdown level1 summary" markdown="1">

Read a Vector3 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-82]

    public Vector3 ReadVector3()

#### Returns [returns-81]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Vector3</span> | The Vector3 read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadVector3Packed_"></span>

### ReadVector3Packed() [MLAPI_Serialization_BitReader_ReadVector3Packed]

<div class="markdown level1 summary" markdown="1">

Read a Vector3 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-83]

    public Vector3 ReadVector3Packed()

#### Returns [returns-82]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Vector3</span> | The Vector3 read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadVector4_"></span>

### ReadVector4() [MLAPI_Serialization_BitReader_ReadVector4]

<div class="markdown level1 summary" markdown="1">

Read a Vector4 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-84]

    public Vector4 ReadVector4()

#### Returns [returns-83]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Vector4</span> | The Vector4 read from the stream. |

<span id="MLAPI_Serialization_BitReader_ReadVector4Packed_"></span>

### ReadVector4Packed() [MLAPI_Serialization_BitReader_ReadVector4Packed]

<div class="markdown level1 summary" markdown="1">

Read a Vector4 from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-85]

    public Vector4 ReadVector4Packed()

#### Returns [returns-84]

| Type                                          | Description                       |
|-----------------------------------------------|-----------------------------------|
| <span class="xref">UnityEngine.Vector4</span> | The Vector4 read from the stream. |

<span id="MLAPI_Serialization_BitReader_SetStream_"></span>

### SetStream(Stream) [MLAPI_Serialization_BitReader_SetStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Changes the underlying stream the reader is reading from

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-86]

    public void SetStream(Stream stream)

#### Parameters [parameters-49]

| Type                                       | Name                                      | Description             |
|--------------------------------------------|-------------------------------------------|-------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> | The stream to read from |

<span id="MLAPI_Serialization_BitReader_SkipPadBits_"></span>

### SkipPadBits() [MLAPI_Serialization_BitReader_SkipPadBits]

<div class="markdown level1 summary" markdown="1">

Skips pad bits and aligns the position to the next byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-87]

    public void SkipPadBits()
