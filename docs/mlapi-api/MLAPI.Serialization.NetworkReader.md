---  
id: MLAPI.Serialization.NetworkReader  
title: MLAPI.Serialization.NetworkReader  
---

<div class="markdown level0 summary">

A BinaryReader that can do bit wise manipulation when backed by a
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

    public class NetworkReader

## Constructors 

### NetworkReader(Stream)

<div class="markdown level1 summary">

Creates a new NetworkReader backed by a given stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkReader(Stream stream)

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

## Methods 

### CreateArraySegment(Int32, Int32)

<div class="markdown level1 summary">

CreateArraySegment Creates an array segment from the size and offset
values passed in. If none are passed in, then it creates an array
segment of the entire buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ArraySegment<byte> CreateArraySegment(int sizeToCopy = -1, int offset = -1)

#### Parameters

| Type         | Name       | Description                                      |
|--------------|------------|--------------------------------------------------|
| System.Int32 | sizeToCopy | size to copy                                     |
| System.Int32 | offset     | offset within the stream buffer to start copying |

#### Returns

| Type                                   | Description              |
|----------------------------------------|--------------------------|
| System.ArraySegment&lt;System.Byte&gt; | ArraySegment&lt;byte&gt; |

### ReadBit()

<div class="markdown level1 summary">

Reads a single bit

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool ReadBit()

#### Returns

| Type           | Description  |
|----------------|--------------|
| System.Boolean | The bit read |

### ReadBits(Int32)

<div class="markdown level1 summary">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ReadBits(int bitCount)

#### Parameters

| Type         | Name     | Description                                  |
|--------------|----------|----------------------------------------------|
| System.Int32 | bitCount | How many bits to read. Minimum 0, maximum 8. |

#### Returns

| Type          | Description             |
|---------------|-------------------------|
| System.UInt64 | The bits that were read |

### ReadBool()

<div class="markdown level1 summary">

Reads a single bit

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool ReadBool()

#### Returns

| Type           | Description  |
|----------------|--------------|
| System.Boolean | The bit read |

### ReadByte()

<div class="markdown level1 summary">

Reads a single byte

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadByte()

#### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The byte read as an integer |

### ReadByteArray(Byte\[\], Int64)

<div class="markdown level1 summary">

Read byte array into an optional buffer from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte[] ReadByteArray(byte[] readTo = null, long knownLength = -1L)

#### Parameters

| Type            | Name        | Description                                                                                       |
|-----------------|-------------|---------------------------------------------------------------------------------------------------|
| System.Byte\[\] | readTo      | The array to read into. If the array is not large enough or if it's null. A new array is created. |
| System.Int64    | knownLength | The length of the array if it's known. Otherwise -1                                               |

#### Returns

| Type            | Description                        |
|-----------------|------------------------------------|
| System.Byte\[\] | The byte array that has been read. |

### ReadByteArrayDiff(Byte\[\], Int64)

<div class="markdown level1 summary">

Read byte array diff into an optional buffer from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte[] ReadByteArrayDiff(byte[] readTo = null, long knownLength = -1L)

#### Parameters

| Type            | Name        | Description                                         |
|-----------------|-------------|-----------------------------------------------------|
| System.Byte\[\] | readTo      | The buffer containing the old version or null.      |
| System.Int64    | knownLength | The length of the array if it's known. Otherwise -1 |

#### Returns

| Type            | Description                                        |
|-----------------|----------------------------------------------------|
| System.Byte\[\] | The byte array created from the diff and original. |

### ReadByteBits(Int32)

<div class="markdown level1 summary">

Read a certain amount of bits from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte ReadByteBits(int bitCount)

#### Parameters

| Type         | Name     | Description                                   |
|--------------|----------|-----------------------------------------------|
| System.Int32 | bitCount | How many bits to read. Minimum 0, maximum 64. |

#### Returns

| Type        | Description             |
|-------------|-------------------------|
| System.Byte | The bits that were read |

### ReadByteDirect()

<div class="markdown level1 summary">

Reads a byte

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte ReadByteDirect()

#### Returns

| Type        | Description   |
|-------------|---------------|
| System.Byte | The byte read |

### ReadChar()

<div class="markdown level1 summary">

Read a single character from the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public char ReadChar()

#### Returns

| Type        | Description             |
|-------------|-------------------------|
| System.Char | Value read from stream. |

### ReadCharPacked()

<div class="markdown level1 summary">

Read a varint two-byte character from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public char ReadCharPacked()

#### Returns

| Type        | Description        |
|-------------|--------------------|
| System.Char | Un-varinted value. |

### ReadColor()

<div class="markdown level1 summary">

Read a Color from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Color ReadColor()

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| UnityEngine.Color | The Color read from the stream. |

### ReadColor32()

<div class="markdown level1 summary">

Read a Color32 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Color32 ReadColor32()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Color32 | The Color32 read from the stream. |

### ReadColorPacked()

<div class="markdown level1 summary">

Read a Color from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Color ReadColorPacked()

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| UnityEngine.Color | The Color read from the stream. |

### ReadDouble()

<div class="markdown level1 summary">

Read a double-precision floating point value from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double ReadDouble()

#### Returns

| Type          | Description    |
|---------------|----------------|
| System.Double | The read value |

### ReadDoubleArray(Double\[\], Int64)

<div class="markdown level1 summary">

Read double array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double[] ReadDoubleArray(double[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Double\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Double\[\] | The array read from the stream. |

### ReadDoubleArrayDiff(Double\[\], Int64)

<div class="markdown level1 summary">

Read double array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double[] ReadDoubleArrayDiff(double[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Double\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Double\[\] | The array created from the diff and the current version. |

### ReadDoubleArrayPacked(Double\[\], Int64)

<div class="markdown level1 summary">

Read double array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double[] ReadDoubleArrayPacked(double[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Double\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Double\[\] | The array read from the stream. |

### ReadDoubleArrayPackedDiff(Double\[\], Int64)

<div class="markdown level1 summary">

Read double array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double[] ReadDoubleArrayPackedDiff(double[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Double\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Double\[\] | The array created from the diff and the current version. |

### ReadDoublePacked()

<div class="markdown level1 summary">

Read a double-precision floating point value from the stream as a varint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double ReadDoublePacked()

#### Returns

| Type          | Description    |
|---------------|----------------|
| System.Double | The read value |

### ReadFloatArray(Single\[\], Int64)

<div class="markdown level1 summary">

Read float array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float[] ReadFloatArray(float[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Single\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Single\[\] | The array read from the stream. |

### ReadFloatArrayDiff(Single\[\], Int64)

<div class="markdown level1 summary">

Read float array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float[] ReadFloatArrayDiff(float[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Single\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Single\[\] | The array created from the diff and the current version. |

### ReadFloatArrayPacked(Single\[\], Int64)

<div class="markdown level1 summary">

Read float array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float[] ReadFloatArrayPacked(float[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.Single\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.Single\[\] | The array read from the stream. |

### ReadFloatArrayPackedDiff(Single\[\], Int64)

<div class="markdown level1 summary">

Read float array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float[] ReadFloatArrayPackedDiff(float[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.Single\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.Single\[\] | The array created from the diff and the current version. |

### ReadInt16()

<div class="markdown level1 summary">

Read a signed short (Int16) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short ReadInt16()

#### Returns

| Type         | Description             |
|--------------|-------------------------|
| System.Int16 | Value read from stream. |

### ReadInt16Packed()

<div class="markdown level1 summary">

Read a ZigZag encoded varint signed short (Int16) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short ReadInt16Packed()

#### Returns

| Type         | Description                |
|--------------|----------------------------|
| System.Int16 | Decoded un-varinted value. |

### ReadInt32()

<div class="markdown level1 summary">

Read a signed int (Int32) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadInt32()

#### Returns

| Type         | Description             |
|--------------|-------------------------|
| System.Int32 | Value read from stream. |

### ReadInt32Packed()

<div class="markdown level1 summary">

Read a ZigZag encoded varint signed int (Int32) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadInt32Packed()

#### Returns

| Type         | Description                |
|--------------|----------------------------|
| System.Int32 | Decoded un-varinted value. |

### ReadInt64()

<div class="markdown level1 summary">

Read a signed long (Int64) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long ReadInt64()

#### Returns

| Type         | Description             |
|--------------|-------------------------|
| System.Int64 | Value read from stream. |

### ReadInt64Packed()

<div class="markdown level1 summary">

Read a ZigZag encoded varint signed long(Int64) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long ReadInt64Packed()

#### Returns

| Type         | Description                |
|--------------|----------------------------|
| System.Int64 | Decoded un-varinted value. |

### ReadIntArray(Int32\[\], Int64)

<div class="markdown level1 summary">

Read int array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int[] ReadIntArray(int[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int32\[\] | The array read from the stream. |

### ReadIntArrayDiff(Int32\[\], Int64)

<div class="markdown level1 summary">

Read int array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int[] ReadIntArrayDiff(int[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int32\[\] | The array created from the diff and the current version. |

### ReadIntArrayPacked(Int32\[\], Int64)

<div class="markdown level1 summary">

Read int array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int[] ReadIntArrayPacked(int[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int32\[\] | The array read from the stream. |

### ReadIntArrayPackedDiff(Int32\[\], Int64)

<div class="markdown level1 summary">

Read int array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int[] ReadIntArrayPackedDiff(int[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int32\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int32\[\] | The array created from the diff and the current version. |

### ReadLongArray(Int64\[\], Int64)

<div class="markdown level1 summary">

Read long array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long[] ReadLongArray(long[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int64\[\] | The array read from the stream. |

### ReadLongArrayDiff(Int64\[\], Int64)

<div class="markdown level1 summary">

Read long array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long[] ReadLongArrayDiff(long[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int64\[\] | The array created from the diff and the current version. |

### ReadLongArrayPacked(Int64\[\], Int64)

<div class="markdown level1 summary">

Read long array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long[] ReadLongArrayPacked(long[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int64\[\] | The array read from the stream. |

### ReadLongArrayPackedDiff(Int64\[\], Int64)

<div class="markdown level1 summary">

Read long array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long[] ReadLongArrayPackedDiff(long[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int64\[\] | The array created from the diff and the current version. |

### ReadNibble()

<div class="markdown level1 summary">

Read a nibble (4 bits) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte ReadNibble()

#### Returns

| Type        | Description              |
|-------------|--------------------------|
| System.Byte | The nibble that was read |

### ReadNibble(Boolean)

<div class="markdown level1 summary">

Read a nibble (4 bits) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte ReadNibble(bool asUpper)

#### Parameters

| Type           | Name    | Description                                                |
|----------------|---------|------------------------------------------------------------|
| System.Boolean | asUpper | Whether or not the nibble should be left-shifted by 4 bits |

#### Returns

| Type        | Description              |
|-------------|--------------------------|
| System.Byte | The nibble that was read |

### ReadObjectPacked(Type)

<div class="markdown level1 summary">

Reads a single boxed object of a given type in a packed format

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public object ReadObjectPacked(Type type)

#### Parameters

| Type        | Name | Description      |
|-------------|------|------------------|
| System.Type | type | The type to read |

#### Returns

| Type          | Description                   |
|---------------|-------------------------------|
| System.Object | Returns the boxed read object |

### ReadRangedDouble(Double, Double, Int32)

<div class="markdown level1 summary">

read a double-precision floating point value from the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public double ReadRangedDouble(double minValue, double maxValue, int bytes)

#### Parameters

| Type          | Name     | Description                                                                       |
|---------------|----------|-----------------------------------------------------------------------------------|
| System.Double | minValue | Minimum value that this value could be                                            |
| System.Double | maxValue | Maximum possible value that this could be                                         |
| System.Int32  | bytes    | How many bytes the compressed value occupies. Must be between 1 and 8 (inclusive) |

#### Returns

| Type          | Description    |
|---------------|----------------|
| System.Double | The read value |

### ReadRangedSingle(Single, Single, Int32)

<div class="markdown level1 summary">

Read a single-precision floating point value from the stream. The value
is between (inclusive) the minValue and maxValue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float ReadRangedSingle(float minValue, float maxValue, int bytes)

#### Parameters

| Type          | Name     | Description                                                                       |
|---------------|----------|-----------------------------------------------------------------------------------|
| System.Single | minValue | Minimum value that this value could be                                            |
| System.Single | maxValue | Maximum possible value that this could be                                         |
| System.Int32  | bytes    | How many bytes the compressed value occupies. Must be between 1 and 4 (inclusive) |

#### Returns

| Type          | Description    |
|---------------|----------------|
| System.Single | The read value |

### ReadRay()

<div class="markdown level1 summary">

Read a Ray from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Ray ReadRay()

#### Returns

| Type            | Description                   |
|-----------------|-------------------------------|
| UnityEngine.Ray | The Ray read from the stream. |

### ReadRay2D()

<div class="markdown level1 summary">

Read a Ray2D from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Ray2D ReadRay2D()

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| UnityEngine.Ray2D | The Ray2D read from the stream. |

### ReadRay2DPacked()

<div class="markdown level1 summary">

Read a Ray2D from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Ray2D ReadRay2DPacked()

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| UnityEngine.Ray2D | The Ray2D read from the stream. |

### ReadRayPacked()

<div class="markdown level1 summary">

Read a Ray from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Ray ReadRayPacked()

#### Returns

| Type            | Description                   |
|-----------------|-------------------------------|
| UnityEngine.Ray | The Ray read from the stream. |

### ReadRotation()

<div class="markdown level1 summary">

Reads the rotation from the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Quaternion ReadRotation()

#### Returns

| Type                   | Description                       |
|------------------------|-----------------------------------|
| UnityEngine.Quaternion | The rotation read from the stream |

### ReadRotationPacked()

<div class="markdown level1 summary">

Reads the rotation from the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Quaternion ReadRotationPacked()

#### Returns

| Type                   | Description                       |
|------------------------|-----------------------------------|
| UnityEngine.Quaternion | The rotation read from the stream |

### ReadSByte()

<div class="markdown level1 summary">

Reads a signed byte

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public sbyte ReadSByte()

#### Returns

| Type         | Description             |
|--------------|-------------------------|
| System.SByte | Value read from stream. |

### ReadShortArray(Int16\[\], Int64)

<div class="markdown level1 summary">

Read short array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short[] ReadShortArray(short[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int16\[\] | The array read from the stream. |

### ReadShortArrayDiff(Int16\[\], Int64)

<div class="markdown level1 summary">

Read short array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short[] ReadShortArrayDiff(short[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int16\[\] | The array created from the diff and the current version. |

### ReadShortArrayPacked(Int16\[\], Int64)

<div class="markdown level1 summary">

Read short array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short[] ReadShortArrayPacked(short[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64     | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type             | Description                     |
|------------------|---------------------------------|
| System.Int16\[\] | The array read from the stream. |

### ReadShortArrayPackedDiff(Int16\[\], Int64)

<div class="markdown level1 summary">

Read short array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short[] ReadShortArrayPackedDiff(short[] readTo = null, long knownLength = -1L)

#### Parameters

| Type             | Name        | Description                                    |
|------------------|-------------|------------------------------------------------|
| System.Int16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64     | knownLength | The known length or -1 if unknown              |

#### Returns

| Type             | Description                                              |
|------------------|----------------------------------------------------------|
| System.Int16\[\] | The array created from the diff and the current version. |

### ReadSingle()

<div class="markdown level1 summary">

Read a single-precision floating point value from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float ReadSingle()

#### Returns

| Type          | Description    |
|---------------|----------------|
| System.Single | The read value |

### ReadSinglePacked()

<div class="markdown level1 summary">

Read a single-precision floating point value from the stream from a
varint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float ReadSinglePacked()

#### Returns

| Type          | Description    |
|---------------|----------------|
| System.Single | The read value |

### ReadString(Boolean)

<div class="markdown level1 summary">

Read a string from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadString(bool oneByteChars)

#### Parameters

| Type           | Name         | Description                                                           |
|----------------|--------------|-----------------------------------------------------------------------|
| System.Boolean | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns

| Type                      | Description               |
|---------------------------|---------------------------|
| System.Text.StringBuilder | The string that was read. |

### ReadString(StringBuilder, Boolean)

<div class="markdown level1 summary">

Read a string from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadString(StringBuilder builder = null, bool oneByteChars = false)

#### Parameters

| Type                      | Name         | Description                                                           |
|---------------------------|--------------|-----------------------------------------------------------------------|
| System.Text.StringBuilder | builder      | The builder to read the values into or null to use a new builder.     |
| System.Boolean            | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns

| Type                      | Description               |
|---------------------------|---------------------------|
| System.Text.StringBuilder | The string that was read. |

### ReadStringDiff(String, Boolean)

<div class="markdown level1 summary">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadStringDiff(string compare, bool oneByteChars = false)

#### Parameters

| Type           | Name         | Description                                                           |
|----------------|--------------|-----------------------------------------------------------------------|
| System.String  | compare      | The version to compare the diff to.                                   |
| System.Boolean | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringDiff(StringBuilder, Boolean)

<div class="markdown level1 summary">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadStringDiff(StringBuilder compareAndBuffer, bool oneByteChars = false)

#### Parameters

| Type                      | Name             | Description                                                                                 |
|---------------------------|------------------|---------------------------------------------------------------------------------------------|
| System.Text.StringBuilder | compareAndBuffer | The builder containing the current version and that will also be used as the output buffer. |
| System.Boolean            | oneByteChars     | If set to `true` one byte chars will be used and only ASCII will be supported.              |

#### Returns

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringDiff(StringBuilder, String, Boolean)

<div class="markdown level1 summary">

Read string diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadStringDiff(StringBuilder builder, string compare, bool oneByteChars = false)

#### Parameters

| Type                      | Name         | Description                                                           |
|---------------------------|--------------|-----------------------------------------------------------------------|
| System.Text.StringBuilder | builder      | The builder to read the string into or null to use a new builder.     |
| System.String             | compare      | The version to compare the diff to.                                   |
| System.Boolean            | oneByteChars | If set to `true` one byte chars are used and only ASCII is supported. |

#### Returns

| Type                      | Description                                      |
|---------------------------|--------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version |

### ReadStringPacked(StringBuilder)

<div class="markdown level1 summary">

Read string encoded as a varint from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string ReadStringPacked(StringBuilder builder = null)

#### Parameters

| Type                      | Name    | Description                                                      |
|---------------------------|---------|------------------------------------------------------------------|
| System.Text.StringBuilder | builder | The builder to read the string into or null to use a new builder |

#### Returns

| Type          | Description               |
|---------------|---------------------------|
| System.String | The string that was read. |

### ReadStringPackedDiff(String)

<div class="markdown level1 summary">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadStringPackedDiff(string compare)

#### Parameters

| Type          | Name    | Description                         |
|---------------|---------|-------------------------------------|
| System.String | compare | The version to compare the diff to. |

#### Returns

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringPackedDiff(StringBuilder)

<div class="markdown level1 summary">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadStringPackedDiff(StringBuilder compareAndBuffer)

#### Parameters

| Type                      | Name             | Description                                                                                 |
|---------------------------|------------------|---------------------------------------------------------------------------------------------|
| System.Text.StringBuilder | compareAndBuffer | The builder containing the current version and that will also be used as the output buffer. |

#### Returns

| Type                      | Description                                       |
|---------------------------|---------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version. |

### ReadStringPackedDiff(StringBuilder, String)

<div class="markdown level1 summary">

Read string diff encoded as varints from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public StringBuilder ReadStringPackedDiff(StringBuilder builder, string compare)

#### Parameters

| Type                      | Name    | Description                                                       |
|---------------------------|---------|-------------------------------------------------------------------|
| System.Text.StringBuilder | builder | The builder to read the string into or null to use a new builder. |
| System.String             | compare | The version to compare the diff to.                               |

#### Returns

| Type                      | Description                                      |
|---------------------------|--------------------------------------------------|
| System.Text.StringBuilder | The string based on the diff and the old version |

### ReadUInt16()

<div class="markdown level1 summary">

Read an unsigned short (UInt16) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort ReadUInt16()

#### Returns

| Type          | Description             |
|---------------|-------------------------|
| System.UInt16 | Value read from stream. |

### ReadUInt16Packed()

<div class="markdown level1 summary">

Read a varint unsigned short (UInt16) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort ReadUInt16Packed()

#### Returns

| Type          | Description        |
|---------------|--------------------|
| System.UInt16 | Un-varinted value. |

### ReadUInt32()

<div class="markdown level1 summary">

Read an unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadUInt32()

#### Returns

| Type          | Description             |
|---------------|-------------------------|
| System.UInt32 | Value read from stream. |

### ReadUInt32Packed()

<div class="markdown level1 summary">

Read a varint unsigned int (UInt32) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadUInt32Packed()

#### Returns

| Type          | Description        |
|---------------|--------------------|
| System.UInt32 | Un-varinted value. |

### ReadUInt64()

<div class="markdown level1 summary">

Read an unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ReadUInt64()

#### Returns

| Type          | Description             |
|---------------|-------------------------|
| System.UInt64 | Value read from stream. |

### ReadUInt64Packed()

<div class="markdown level1 summary">

Read a varint unsigned long (UInt64) from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ReadUInt64Packed()

#### Returns

| Type          | Description        |
|---------------|--------------------|
| System.UInt64 | Un-varinted value. |

### ReadUIntArray(UInt32\[\], Int64)

<div class="markdown level1 summary">

Read uint array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint[] ReadUIntArray(uint[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt32\[\] | The array read from the stream. |

### ReadUIntArrayDiff(UInt32\[\], Int64)

<div class="markdown level1 summary">

Read uint array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint[] ReadUIntArrayDiff(uint[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt32\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt32\[\] | The array created from the diff and the current version. |

### ReadUIntArrayPacked(UInt32\[\], Int64)

<div class="markdown level1 summary">

Read uint array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint[] ReadUIntArrayPacked(uint[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt32\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt32\[\] | The array read from the stream. |

### ReadULongArray(UInt64\[\], Int64)

<div class="markdown level1 summary">

Read ulong array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong[] ReadULongArray(ulong[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt64\[\] | The array read from the stream. |

### ReadULongArrayDiff(UInt64\[\], Int64)

<div class="markdown level1 summary">

Read ulong array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong[] ReadULongArrayDiff(ulong[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt64\[\] | The array created from the diff and the current version. |

### ReadULongArrayPacked(UInt64\[\], Int64)

<div class="markdown level1 summary">

Read ulong array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong[] ReadULongArrayPacked(ulong[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt64\[\] | The array read from the stream. |

### ReadULongArrayPackedDiff(UInt64\[\], Int64)

<div class="markdown level1 summary">

Read ulong array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong[] ReadULongArrayPackedDiff(ulong[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt64\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt64\[\] | The array created from the diff and the current version. |

### ReadUShortArray(UInt16\[\], Int64)

<div class="markdown level1 summary">

Read ushort array from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort[] ReadUShortArray(ushort[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt16\[\] | The array read from the stream. |

### ReadUShortArrayDiff(UInt16\[\], Int64)

<div class="markdown level1 summary">

Read ushort array diff from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort[] ReadUShortArrayDiff(ushort[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt16\[\] | The array created from the diff and the current version. |

### ReadUShortArrayPacked(UInt16\[\], Int64)

<div class="markdown level1 summary">

Read ushort array in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort[] ReadUShortArrayPacked(ushort[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                           |
|-------------------|-------------|-------------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer to read into or null to create a new array |
| System.Int64      | knownLength | The known length or -1 if unknown                     |

#### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| System.UInt16\[\] | The array read from the stream. |

### ReadUShortArrayPackedDiff(UInt16\[\], Int64)

<div class="markdown level1 summary">

Read ushort array diff in a packed format from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort[] ReadUShortArrayPackedDiff(ushort[] readTo = null, long knownLength = -1L)

#### Parameters

| Type              | Name        | Description                                    |
|-------------------|-------------|------------------------------------------------|
| System.UInt16\[\] | readTo      | The buffer containing the old version or null. |
| System.Int64      | knownLength | The known length or -1 if unknown              |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| System.UInt16\[\] | The array created from the diff and the current version. |

### ReadVector2()

<div class="markdown level1 summary">

Read a Vector2 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Vector2 ReadVector2()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector2 | The Vector2 read from the stream. |

### ReadVector2Packed()

<div class="markdown level1 summary">

Read a Vector2 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Vector2 ReadVector2Packed()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector2 | The Vector2 read from the stream. |

### ReadVector3()

<div class="markdown level1 summary">

Read a Vector3 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Vector3 ReadVector3()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector3 | The Vector3 read from the stream. |

### ReadVector3Packed()

<div class="markdown level1 summary">

Read a Vector3 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Vector3 ReadVector3Packed()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector3 | The Vector3 read from the stream. |

### ReadVector4()

<div class="markdown level1 summary">

Read a Vector4 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Vector4 ReadVector4()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector4 | The Vector4 read from the stream. |

### ReadVector4Packed()

<div class="markdown level1 summary">

Read a Vector4 from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Vector4 ReadVector4Packed()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| UnityEngine.Vector4 | The Vector4 read from the stream. |

### SetStream(Stream)

<div class="markdown level1 summary">

Changes the underlying stream the reader is reading from

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetStream(Stream stream)

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

### SkipPadBits()

<div class="markdown level1 summary">

Skips pad bits and aligns the position to the next byte

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SkipPadBits()
