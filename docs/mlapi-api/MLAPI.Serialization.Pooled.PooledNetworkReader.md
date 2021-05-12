---  
id: MLAPI.Serialization.Pooled.PooledNetworkReader  
title: MLAPI.Serialization.Pooled.PooledNetworkReader  
---

<div class="markdown level0 summary">

Disposable NetworkReader that returns the Reader to the
NetworkReaderPool when disposed

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

NetworkReader.SetStream(Stream)

</div>

<div>

NetworkReader.ReadByte()

</div>

<div>

NetworkReader.ReadByteDirect()

</div>

<div>

NetworkReader.ReadBit()

</div>

<div>

NetworkReader.ReadBool()

</div>

<div>

NetworkReader.SkipPadBits()

</div>

<div>

NetworkReader.ReadObjectPacked(Type)

</div>

<div>

NetworkReader.ReadSingle()

</div>

<div>

NetworkReader.ReadDouble()

</div>

<div>

NetworkReader.ReadSinglePacked()

</div>

<div>

NetworkReader.ReadDoublePacked()

</div>

<div>

NetworkReader.ReadVector2()

</div>

<div>

NetworkReader.ReadVector2Packed()

</div>

<div>

NetworkReader.ReadVector3()

</div>

<div>

NetworkReader.ReadVector3Packed()

</div>

<div>

NetworkReader.ReadVector4()

</div>

<div>

NetworkReader.ReadVector4Packed()

</div>

<div>

NetworkReader.ReadColor()

</div>

<div>

NetworkReader.ReadColorPacked()

</div>

<div>

NetworkReader.ReadColor32()

</div>

<div>

NetworkReader.ReadRay()

</div>

<div>

NetworkReader.ReadRayPacked()

</div>

<div>

NetworkReader.ReadRay2D()

</div>

<div>

NetworkReader.ReadRay2DPacked()

</div>

<div>

NetworkReader.ReadRangedSingle(Single, Single, Int32)

</div>

<div>

NetworkReader.ReadRangedDouble(Double, Double, Int32)

</div>

<div>

NetworkReader.ReadRotationPacked()

</div>

<div>

NetworkReader.ReadRotation()

</div>

<div>

NetworkReader.ReadBits(Int32)

</div>

<div>

NetworkReader.ReadByteBits(Int32)

</div>

<div>

NetworkReader.ReadNibble(Boolean)

</div>

<div>

NetworkReader.ReadNibble()

</div>

<div>

NetworkReader.ReadSByte()

</div>

<div>

NetworkReader.ReadUInt16()

</div>

<div>

NetworkReader.ReadInt16()

</div>

<div>

NetworkReader.ReadChar()

</div>

<div>

NetworkReader.ReadUInt32()

</div>

<div>

NetworkReader.ReadInt32()

</div>

<div>

NetworkReader.ReadUInt64()

</div>

<div>

NetworkReader.ReadInt64()

</div>

<div>

NetworkReader.ReadInt16Packed()

</div>

<div>

NetworkReader.ReadUInt16Packed()

</div>

<div>

NetworkReader.ReadCharPacked()

</div>

<div>

NetworkReader.ReadInt32Packed()

</div>

<div>

NetworkReader.ReadUInt32Packed()

</div>

<div>

NetworkReader.ReadInt64Packed()

</div>

<div>

NetworkReader.ReadUInt64Packed()

</div>

<div>

NetworkReader.ReadString(Boolean)

</div>

<div>

NetworkReader.ReadString(StringBuilder, Boolean)

</div>

<div>

NetworkReader.ReadStringPacked(StringBuilder)

</div>

<div>

NetworkReader.ReadStringDiff(String, Boolean)

</div>

<div>

NetworkReader.ReadStringDiff(StringBuilder, String, Boolean)

</div>

<div>

NetworkReader.ReadStringDiff(StringBuilder, Boolean)

</div>

<div>

NetworkReader.ReadStringPackedDiff(String)

</div>

<div>

NetworkReader.ReadStringPackedDiff(StringBuilder, String)

</div>

<div>

NetworkReader.ReadStringPackedDiff(StringBuilder)

</div>

<div>

NetworkReader.ReadByteArray(Byte\[\], Int64)

</div>

<div>

NetworkReader.CreateArraySegment(Int32, Int32)

</div>

<div>

NetworkReader.ReadByteArrayDiff(Byte\[\], Int64)

</div>

<div>

NetworkReader.ReadShortArray(Int16\[\], Int64)

</div>

<div>

NetworkReader.ReadShortArrayPacked(Int16\[\], Int64)

</div>

<div>

NetworkReader.ReadShortArrayDiff(Int16\[\], Int64)

</div>

<div>

NetworkReader.ReadShortArrayPackedDiff(Int16\[\], Int64)

</div>

<div>

NetworkReader.ReadUShortArray(UInt16\[\], Int64)

</div>

<div>

NetworkReader.ReadUShortArrayPacked(UInt16\[\], Int64)

</div>

<div>

NetworkReader.ReadUShortArrayDiff(UInt16\[\], Int64)

</div>

<div>

NetworkReader.ReadUShortArrayPackedDiff(UInt16\[\], Int64)

</div>

<div>

NetworkReader.ReadIntArray(Int32\[\], Int64)

</div>

<div>

NetworkReader.ReadIntArrayPacked(Int32\[\], Int64)

</div>

<div>

NetworkReader.ReadIntArrayDiff(Int32\[\], Int64)

</div>

<div>

NetworkReader.ReadIntArrayPackedDiff(Int32\[\], Int64)

</div>

<div>

NetworkReader.ReadUIntArray(UInt32\[\], Int64)

</div>

<div>

NetworkReader.ReadUIntArrayPacked(UInt32\[\], Int64)

</div>

<div>

NetworkReader.ReadUIntArrayDiff(UInt32\[\], Int64)

</div>

<div>

NetworkReader.ReadLongArray(Int64\[\], Int64)

</div>

<div>

NetworkReader.ReadLongArrayPacked(Int64\[\], Int64)

</div>

<div>

NetworkReader.ReadLongArrayDiff(Int64\[\], Int64)

</div>

<div>

NetworkReader.ReadLongArrayPackedDiff(Int64\[\], Int64)

</div>

<div>

NetworkReader.ReadULongArray(UInt64\[\], Int64)

</div>

<div>

NetworkReader.ReadULongArrayPacked(UInt64\[\], Int64)

</div>

<div>

NetworkReader.ReadULongArrayDiff(UInt64\[\], Int64)

</div>

<div>

NetworkReader.ReadULongArrayPackedDiff(UInt64\[\], Int64)

</div>

<div>

NetworkReader.ReadFloatArray(Single\[\], Int64)

</div>

<div>

NetworkReader.ReadFloatArrayPacked(Single\[\], Int64)

</div>

<div>

NetworkReader.ReadFloatArrayDiff(Single\[\], Int64)

</div>

<div>

NetworkReader.ReadFloatArrayPackedDiff(Single\[\], Int64)

</div>

<div>

NetworkReader.ReadDoubleArray(Double\[\], Int64)

</div>

<div>

NetworkReader.ReadDoubleArrayPacked(Double\[\], Int64)

</div>

<div>

NetworkReader.ReadDoubleArrayDiff(Double\[\], Int64)

</div>

<div>

NetworkReader.ReadDoubleArrayPackedDiff(Double\[\], Int64)

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

    public sealed class PooledNetworkReader : NetworkReader, IDisposable

## Properties 

### Serializer

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkSerializer Serializer { get; }

#### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkSerializer |             |

## Methods 

### Dispose()

<div class="markdown level1 summary">

Returns the PooledNetworkReader into the static NetworkReaderPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### Get(Stream)

<div class="markdown level1 summary">

Gets a PooledNetworkReader from the static NetworkReaderPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledNetworkReader Get(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

#### Returns

| Type                | Description         |
|---------------------|---------------------|
| PooledNetworkReader | PooledNetworkReader |

### Implements

<div>

System.IDisposable

</div>
