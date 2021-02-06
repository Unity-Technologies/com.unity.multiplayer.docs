---

id: MLAPI.Serialization.Pooled.PooledBitReader

title: MLAPI.Serialization.Pooled.PooledBitReader

---

Class PooledBitReader

<div class="markdown level0 summary" markdown="1">

Disposable BitReader that returns the Reader to the BitReaderPool when
disposed

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

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

System.IDisposable

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

BitReader.SetStream(Stream)

</div>

<div markdown="1">

BitReader.ReadByte()

</div>

<div markdown="1">

BitReader.ReadByteDirect()

</div>

<div markdown="1">

BitReader.ReadBit()

</div>

<div markdown="1">

BitReader.ReadBool()

</div>

<div markdown="1">

BitReader.SkipPadBits()

</div>

<div markdown="1">

BitReader.ReadObjectPacked(Type)

</div>

<div markdown="1">

BitReader.ReadSingle()

</div>

<div markdown="1">

BitReader.ReadDouble()

</div>

<div markdown="1">

BitReader.ReadSinglePacked()

</div>

<div markdown="1">

BitReader.ReadDoublePacked()

</div>

<div markdown="1">

BitReader.ReadVector2()

</div>

<div markdown="1">

BitReader.ReadVector2Packed()

</div>

<div markdown="1">

BitReader.ReadVector3()

</div>

<div markdown="1">

BitReader.ReadVector3Packed()

</div>

<div markdown="1">

BitReader.ReadVector4()

</div>

<div markdown="1">

BitReader.ReadVector4Packed()

</div>

<div markdown="1">

BitReader.ReadColor()

</div>

<div markdown="1">

BitReader.ReadColorPacked()

</div>

<div markdown="1">

BitReader.ReadColor32()

</div>

<div markdown="1">

BitReader.ReadRay()

</div>

<div markdown="1">

BitReader.ReadRayPacked()

</div>

<div markdown="1">

BitReader.ReadRangedSingle(Single, Single, Int32)

</div>

<div markdown="1">

BitReader.ReadRangedDouble(Double, Double, Int32)

</div>

<div markdown="1">

BitReader.ReadRotationPacked()

</div>

<div markdown="1">

BitReader.ReadRotation()

</div>

<div markdown="1">

BitReader.ReadBits(Int32)

</div>

<div markdown="1">

BitReader.ReadByteBits(Int32)

</div>

<div markdown="1">

BitReader.ReadNibble(Boolean)

</div>

<div markdown="1">

BitReader.ReadNibble()

</div>

<div markdown="1">

BitReader.ReadSByte()

</div>

<div markdown="1">

BitReader.ReadUInt16()

</div>

<div markdown="1">

BitReader.ReadInt16()

</div>

<div markdown="1">

BitReader.ReadChar()

</div>

<div markdown="1">

BitReader.ReadUInt32()

</div>

<div markdown="1">

BitReader.ReadInt32()

</div>

<div markdown="1">

BitReader.ReadUInt64()

</div>

<div markdown="1">

BitReader.ReadInt64()

</div>

<div markdown="1">

BitReader.ReadInt16Packed()

</div>

<div markdown="1">

BitReader.ReadUInt16Packed()

</div>

<div markdown="1">

BitReader.ReadCharPacked()

</div>

<div markdown="1">

BitReader.ReadInt32Packed()

</div>

<div markdown="1">

BitReader.ReadUInt32Packed()

</div>

<div markdown="1">

BitReader.ReadInt64Packed()

</div>

<div markdown="1">

BitReader.ReadUInt64Packed()

</div>

<div markdown="1">

BitReader.ReadString(Boolean)

</div>

<div markdown="1">

BitReader.ReadString(StringBuilder, Boolean)

</div>

<div markdown="1">

BitReader.ReadStringPacked(StringBuilder)

</div>

<div markdown="1">

BitReader.ReadStringDiff(String, Boolean)

</div>

<div markdown="1">

BitReader.ReadStringDiff(StringBuilder, String, Boolean)

</div>

<div markdown="1">

BitReader.ReadStringDiff(StringBuilder, Boolean)

</div>

<div markdown="1">

BitReader.ReadStringPackedDiff(String)

</div>

<div markdown="1">

BitReader.ReadStringPackedDiff(StringBuilder, String)

</div>

<div markdown="1">

BitReader.ReadStringPackedDiff(StringBuilder)

</div>

<div markdown="1">

BitReader.ReadByteArray(Byte\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadByteArrayDiff(Byte\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadShortArray(Int16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadShortArrayPacked(Int16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadShortArrayDiff(Int16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadShortArrayPackedDiff(Int16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUShortArray(UInt16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUShortArrayPacked(UInt16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUShortArrayDiff(UInt16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUShortArrayPackedDiff(UInt16\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadIntArray(Int32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadIntArrayPacked(Int32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadIntArrayDiff(Int32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadIntArrayPackedDiff(Int32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUIntArray(UInt32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUIntArrayPacked(UInt32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadUIntArrayDiff(UInt32\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadLongArray(Int64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadLongArrayPacked(Int64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadLongArrayDiff(Int64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadLongArrayPackedDiff(Int64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadULongArray(UInt64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadULongArrayPacked(UInt64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadULongArrayDiff(UInt64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadULongArrayPackedDiff(UInt64\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadFloatArray(Single\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadFloatArrayPacked(Single\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadFloatArrayDiff(Single\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadFloatArrayPackedDiff(Single\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadDoubleArray(Double\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadDoubleArrayPacked(Double\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadDoubleArrayDiff(Double\[\], Int64)

</div>

<div markdown="1">

BitReader.ReadDoubleArrayPackedDiff(Double\[\], Int64)

</div>

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

##### Syntax [MLAPI_Serialization_Pooled_PooledBitReader_syntax]

    public sealed class PooledBitReader : BitReader, IDisposable

## Methods 

### Dispose() [MLAPI_Serialization_Pooled_PooledBitReader_Dispose]

<div class="markdown level1 summary" markdown="1">

Returns the PooledBitReader into the static BitReaderPool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public void Dispose()

### Get(Stream) [MLAPI_Serialization_Pooled_PooledBitReader_Get_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Gets a PooledBitReader from the static BitReaderPool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static PooledBitReader Get(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

#### Returns [returns]

| Type            | Description     |
|-----------------|-----------------|
| PooledBitReader | PooledBitReader |

### Implements [implements]

<div markdown="1">

System.IDisposable

</div>
