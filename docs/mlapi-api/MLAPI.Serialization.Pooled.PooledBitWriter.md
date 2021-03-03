---  
id: MLAPI.Serialization.Pooled.PooledBitWriter  
title: MLAPI.Serialization.Pooled.PooledBitWriter  
---

<div class="markdown level0 summary">

Disposable BitWriter that returns the Writer to the BitWriterPool when
disposed

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

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

BitWriter.SetStream(Stream)

</div>

<div>

BitWriter.WriteObjectPacked(Object)

</div>

<div>

BitWriter.WriteSingle(Single)

</div>

<div>

BitWriter.WriteDouble(Double)

</div>

<div>

BitWriter.WriteSinglePacked(Single)

</div>

<div>

BitWriter.WriteDoublePacked(Double)

</div>

<div>

BitWriter.WriteRay(Ray)

</div>

<div>

BitWriter.WriteRayPacked(Ray)

</div>

<div>

BitWriter.WriteColor(Color)

</div>

<div>

BitWriter.WriteColorPacked(Color)

</div>

<div>

BitWriter.WriteColor32(Color32)

</div>

<div>

BitWriter.WriteVector2(Vector2)

</div>

<div>

BitWriter.WriteVector2Packed(Vector2)

</div>

<div>

BitWriter.WriteVector3(Vector3)

</div>

<div>

BitWriter.WriteVector3Packed(Vector3)

</div>

<div>

BitWriter.WriteVector4(Vector4)

</div>

<div>

BitWriter.WriteVector4Packed(Vector4)

</div>

<div>

BitWriter.WriteRangedSingle(Single, Single, Single, Int32)

</div>

<div>

BitWriter.WriteRangedDouble(Double, Double, Double, Int32)

</div>

<div>

BitWriter.WriteRotationPacked(Quaternion)

</div>

<div>

BitWriter.WriteRotation(Quaternion)

</div>

<div>

BitWriter.WriteBit(Boolean)

</div>

<div>

BitWriter.WriteBool(Boolean)

</div>

<div>

BitWriter.WritePadBits()

</div>

<div>

BitWriter.WriteNibble(Byte)

</div>

<div>

BitWriter.WriteNibble(Byte, Boolean)

</div>

<div>

BitWriter.WriteBits(UInt64, Int32)

</div>

<div>

BitWriter.WriteBits(Byte, Int32)

</div>

<div>

BitWriter.WriteSByte(SByte)

</div>

<div>

BitWriter.WriteChar(Char)

</div>

<div>

BitWriter.WriteUInt16(UInt16)

</div>

<div>

BitWriter.WriteInt16(Int16)

</div>

<div>

BitWriter.WriteUInt32(UInt32)

</div>

<div>

BitWriter.WriteInt32(Int32)

</div>

<div>

BitWriter.WriteUInt64(UInt64)

</div>

<div>

BitWriter.WriteInt64(Int64)

</div>

<div>

BitWriter.WriteInt16Packed(Int16)

</div>

<div>

BitWriter.WriteUInt16Packed(UInt16)

</div>

<div>

BitWriter.WriteCharPacked(Char)

</div>

<div>

BitWriter.WriteInt32Packed(Int32)

</div>

<div>

BitWriter.WriteUInt32Packed(UInt32)

</div>

<div>

BitWriter.WriteInt64Packed(Int64)

</div>

<div>

BitWriter.WriteUInt64Packed(UInt64)

</div>

<div>

BitWriter.WriteByte(Byte)

</div>

<div>

BitWriter.WriteString(String, Boolean)

</div>

<div>

BitWriter.WriteStringPacked(String)

</div>

<div>

BitWriter.WriteStringDiff(String, String, Boolean)

</div>

<div>

BitWriter.WriteStringPackedDiff(String, String)

</div>

<div>

BitWriter.WriteByteArray(Byte\[\], Int64)

</div>

<div>

BitWriter.WriteByteArrayDiff(Byte\[\], Byte\[\], Int64)

</div>

<div>

BitWriter.WriteShortArray(Int16\[\], Int64)

</div>

<div>

BitWriter.WriteShortArrayDiff(Int16\[\], Int16\[\], Int64)

</div>

<div>

BitWriter.WriteUShortArray(UInt16\[\], Int64)

</div>

<div>

BitWriter.WriteUShortArrayDiff(UInt16\[\], UInt16\[\], Int64)

</div>

<div>

BitWriter.WriteCharArray(Char\[\], Int64)

</div>

<div>

BitWriter.WriteCharArrayDiff(Char\[\], Char\[\], Int64)

</div>

<div>

BitWriter.WriteIntArray(Int32\[\], Int64)

</div>

<div>

BitWriter.WriteIntArrayDiff(Int32\[\], Int32\[\], Int64)

</div>

<div>

BitWriter.WriteUIntArray(UInt32\[\], Int64)

</div>

<div>

BitWriter.WriteUIntArrayDiff(UInt32\[\], UInt32\[\], Int64)

</div>

<div>

BitWriter.WriteLongArray(Int64\[\], Int64)

</div>

<div>

BitWriter.WriteLongArrayDiff(Int64\[\], Int64\[\], Int64)

</div>

<div>

BitWriter.WriteULongArray(UInt64\[\], Int64)

</div>

<div>

BitWriter.WriteULongArrayDiff(UInt64\[\], UInt64\[\], Int64)

</div>

<div>

BitWriter.WriteFloatArray(Single\[\], Int64)

</div>

<div>

BitWriter.WriteFloatArrayDiff(Single\[\], Single\[\], Int64)

</div>

<div>

BitWriter.WriteDoubleArray(Double\[\], Int64)

</div>

<div>

BitWriter.WriteDoubleArrayDiff(Double\[\], Double\[\], Int64)

</div>

<div>

BitWriter.WriteArrayPacked(Array, Int64)

</div>

<div>

BitWriter.WriteArrayPackedDiff(Array, Array, Int64)

</div>

<div>

BitWriter.WriteShortArrayPacked(Int16\[\], Int64)

</div>

<div>

BitWriter.WriteShortArrayPackedDiff(Int16\[\], Int16\[\], Int64)

</div>

<div>

BitWriter.WriteUShortArrayPacked(UInt16\[\], Int64)

</div>

<div>

BitWriter.WriteUShortArrayPackedDiff(UInt16\[\], UInt16\[\], Int64)

</div>

<div>

BitWriter.WriteCharArrayPacked(Char\[\], Int64)

</div>

<div>

BitWriter.WriteCharArrayPackedDiff(Char\[\], Char\[\], Int64)

</div>

<div>

BitWriter.WriteIntArrayPacked(Int32\[\], Int64)

</div>

<div>

BitWriter.WriteIntArrayPackedDiff(Int32\[\], Int32\[\], Int64)

</div>

<div>

BitWriter.WriteUIntArrayPacked(UInt32\[\], Int64)

</div>

<div>

BitWriter.WriteUIntArrayPackedDiff(UInt32\[\], UInt32\[\], Int64)

</div>

<div>

BitWriter.WriteLongArrayPacked(Int64\[\], Int64)

</div>

<div>

BitWriter.WriteLongArrayPackedDiff(Int64\[\], Int64\[\], Int64)

</div>

<div>

BitWriter.WriteULongArrayPacked(UInt64\[\], Int64)

</div>

<div>

BitWriter.WriteULongArrayPackedDiff(UInt64\[\], UInt64\[\], Int64)

</div>

<div>

BitWriter.WriteFloatArrayPacked(Single\[\], Int64)

</div>

<div>

BitWriter.WriteFloatArrayPackedDiff(Single\[\], Single\[\], Int64)

</div>

<div>

BitWriter.WriteDoubleArrayPacked(Double\[\], Int64)

</div>

<div>

BitWriter.WriteDoubleArrayPackedDiff(Double\[\], Double\[\], Int64)

</div>

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

    public sealed class PooledBitWriter : BitWriter, IDisposable

## Methods 

### Dispose()

<div class="markdown level1 summary">

Returns the PooledBitWriter into the static BitWriterPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### Get(Stream)

<div class="markdown level1 summary">

Gets a PooledBitWriter from the static BitWriterPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledBitWriter Get(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

#### Returns

| Type            | Description     |
|-----------------|-----------------|
| PooledBitWriter | PooledBitWriter |

### Implements

<div>

System.IDisposable

</div>
