---

id: MLAPI.Serialization.Pooled.PooledBitWriter

title: MLAPI.Serialization.Pooled.PooledBitWriter

---

Class PooledBitWriter

<div class="markdown level0 summary" markdown="1">

Disposable BitWriter that returns the Writer to the BitWriterPool when
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

<span class="xref">System.IDisposable</span>

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

BitWriter.SetStream(Stream)

</div>

<div markdown="1">

BitWriter.WriteObjectPacked(Object)

</div>

<div markdown="1">

BitWriter.WriteSingle(Single)

</div>

<div markdown="1">

BitWriter.WriteDouble(Double)

</div>

<div markdown="1">

BitWriter.WriteSinglePacked(Single)

</div>

<div markdown="1">

BitWriter.WriteDoublePacked(Double)

</div>

<div markdown="1">

BitWriter.WriteRay(Ray)

</div>

<div markdown="1">

BitWriter.WriteRayPacked(Ray)

</div>

<div markdown="1">

BitWriter.WriteColor(Color)

</div>

<div markdown="1">

BitWriter.WriteColorPacked(Color)

</div>

<div markdown="1">

BitWriter.WriteColor32(Color32)

</div>

<div markdown="1">

BitWriter.WriteVector2(Vector2)

</div>

<div markdown="1">

BitWriter.WriteVector2Packed(Vector2)

</div>

<div markdown="1">

BitWriter.WriteVector3(Vector3)

</div>

<div markdown="1">

BitWriter.WriteVector3Packed(Vector3)

</div>

<div markdown="1">

BitWriter.WriteVector4(Vector4)

</div>

<div markdown="1">

BitWriter.WriteVector4Packed(Vector4)

</div>

<div markdown="1">

BitWriter.WriteRangedSingle(Single, Single, Single, Int32)

</div>

<div markdown="1">

BitWriter.WriteRangedDouble(Double, Double, Double, Int32)

</div>

<div markdown="1">

BitWriter.WriteRotationPacked(Quaternion)

</div>

<div markdown="1">

BitWriter.WriteRotation(Quaternion)

</div>

<div markdown="1">

BitWriter.WriteBit(Boolean)

</div>

<div markdown="1">

BitWriter.WriteBool(Boolean)

</div>

<div markdown="1">

BitWriter.WritePadBits()

</div>

<div markdown="1">

BitWriter.WriteNibble(Byte)

</div>

<div markdown="1">

BitWriter.WriteNibble(Byte, Boolean)

</div>

<div markdown="1">

BitWriter.WriteBits(UInt64, Int32)

</div>

<div markdown="1">

BitWriter.WriteBits(Byte, Int32)

</div>

<div markdown="1">

BitWriter.WriteSByte(SByte)

</div>

<div markdown="1">

BitWriter.WriteChar(Char)

</div>

<div markdown="1">

BitWriter.WriteUInt16(UInt16)

</div>

<div markdown="1">

BitWriter.WriteInt16(Int16)

</div>

<div markdown="1">

BitWriter.WriteUInt32(UInt32)

</div>

<div markdown="1">

BitWriter.WriteInt32(Int32)

</div>

<div markdown="1">

BitWriter.WriteUInt64(UInt64)

</div>

<div markdown="1">

BitWriter.WriteInt64(Int64)

</div>

<div markdown="1">

BitWriter.WriteInt16Packed(Int16)

</div>

<div markdown="1">

BitWriter.WriteUInt16Packed(UInt16)

</div>

<div markdown="1">

BitWriter.WriteCharPacked(Char)

</div>

<div markdown="1">

BitWriter.WriteInt32Packed(Int32)

</div>

<div markdown="1">

BitWriter.WriteUInt32Packed(UInt32)

</div>

<div markdown="1">

BitWriter.WriteInt64Packed(Int64)

</div>

<div markdown="1">

BitWriter.WriteUInt64Packed(UInt64)

</div>

<div markdown="1">

BitWriter.WriteByte(Byte)

</div>

<div markdown="1">

BitWriter.WriteString(String, Boolean)

</div>

<div markdown="1">

BitWriter.WriteStringPacked(String)

</div>

<div markdown="1">

BitWriter.WriteStringDiff(String, String, Boolean)

</div>

<div markdown="1">

BitWriter.WriteStringPackedDiff(String, String)

</div>

<div markdown="1">

BitWriter.WriteByteArray(Byte\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteByteArrayDiff(Byte\[\], Byte\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteShortArray(Int16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteShortArrayDiff(Int16\[\], Int16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUShortArray(UInt16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUShortArrayDiff(UInt16\[\], UInt16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteCharArray(Char\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteCharArrayDiff(Char\[\], Char\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteIntArray(Int32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteIntArrayDiff(Int32\[\], Int32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUIntArray(UInt32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUIntArrayDiff(UInt32\[\], UInt32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteLongArray(Int64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteLongArrayDiff(Int64\[\], Int64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteULongArray(UInt64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteULongArrayDiff(UInt64\[\], UInt64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteFloatArray(Single\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteFloatArrayDiff(Single\[\], Single\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteDoubleArray(Double\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteDoubleArrayDiff(Double\[\], Double\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteArrayPacked(Array, Int64)

</div>

<div markdown="1">

BitWriter.WriteArrayPackedDiff(Array, Array, Int64)

</div>

<div markdown="1">

BitWriter.WriteShortArrayPacked(Int16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteShortArrayPackedDiff(Int16\[\], Int16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUShortArrayPacked(UInt16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUShortArrayPackedDiff(UInt16\[\], UInt16\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteCharArrayPacked(Char\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteCharArrayPackedDiff(Char\[\], Char\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteIntArrayPacked(Int32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteIntArrayPackedDiff(Int32\[\], Int32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUIntArrayPacked(UInt32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteUIntArrayPackedDiff(UInt32\[\], UInt32\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteLongArrayPacked(Int64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteLongArrayPackedDiff(Int64\[\], Int64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteULongArrayPacked(UInt64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteULongArrayPackedDiff(UInt64\[\], UInt64\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteFloatArrayPacked(Single\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteFloatArrayPackedDiff(Single\[\], Single\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteDoubleArrayPacked(Double\[\], Int64)

</div>

<div markdown="1">

BitWriter.WriteDoubleArrayPackedDiff(Double\[\], Double\[\], Int64)

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

##### Syntax [MLAPI_Serialization_Pooled_PooledBitWriter_syntax]

    public sealed class PooledBitWriter : BitWriter, IDisposable

## Methods <span id="MLAPI_Serialization_Pooled_PooledBitWriter_Dispose_"></span>

### Dispose() [MLAPI_Serialization_Pooled_PooledBitWriter_Dispose]

<div class="markdown level1 summary" markdown="1">

Returns the PooledBitWriter into the static BitWriterPool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public void Dispose()

<span id="MLAPI_Serialization_Pooled_PooledBitWriter_Get_"></span>

### Get(Stream) [MLAPI_Serialization_Pooled_PooledBitWriter_Get_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Gets a PooledBitWriter from the static BitWriterPool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static PooledBitWriter Get(Stream stream)

#### Parameters [parameters]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

#### Returns [returns]

| Type            | Description     |
|-----------------|-----------------|
| PooledBitWriter | PooledBitWriter |

### Implements [implements]

<div markdown="1">

<span class="xref">System.IDisposable</span>

</div>
