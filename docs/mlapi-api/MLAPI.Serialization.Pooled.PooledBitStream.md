---  
id: MLAPI.Serialization.Pooled.PooledBitStream  
title: MLAPI.Serialization.Pooled.PooledBitStream  
---

<div class="markdown level0 summary">

Disposable BitStream that returns the Stream to the BitStreamPool when
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

<div class="level3">

System.Dynamic.ExpandoObject

</div>

<div class="level4">

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

BitStream.Resizable

</div>

<div>

BitStream.GrowthFactor

</div>

<div>

BitStream.CanRead

</div>

<div>

BitStream.HasDataToRead

</div>

<div>

BitStream.CanSeek

</div>

<div>

BitStream.CanWrite

</div>

<div>

BitStream.Capacity

</div>

<div>

BitStream.Length

</div>

<div>

BitStream.Position

</div>

<div>

BitStream.BitPosition

</div>

<div>

BitStream.BitLength

</div>

<div>

BitStream.BitAligned

</div>

<div>

BitStream.Flush()

</div>

<div>

BitStream.ReadByte()

</div>

<div>

BitStream.PeekByte()

</div>

<div>

BitStream.ReadBit()

</div>

<div>

BitStream.Read(Byte\[\], Int32, Int32)

</div>

<div>

BitStream.Seek(Int64, SeekOrigin)

</div>

<div>

BitStream.SetLength(Int64)

</div>

<div>

BitStream.Write(Byte\[\], Int32, Int32)

</div>

<div>

BitStream.WriteByte(Byte)

</div>

<div>

BitStream.Write(Byte\[\])

</div>

<div>

BitStream.WriteBit(Boolean)

</div>

<div>

BitStream.CopyFrom(Stream, Int32)

</div>

<div>

BitStream.CopyTo(Stream, Int32)

</div>

<div>

BitStream.CopyUnreadFrom(Stream, Int32)

</div>

<div>

BitStream.CopyFrom(BitStream, Int32, Boolean)

</div>

<div>

BitStream.GetBuffer()

</div>

<div>

BitStream.ToArray()

</div>

<div>

BitStream.PadStream()

</div>

<div>

BitStream.SkipPadBits()

</div>

<div>

BitStream.ToString()

</div>

<div>

Stream.Null

</div>

<div>

Stream.BeginRead(Byte\[\], Int32, Int32, AsyncCallback, Object)

</div>

<div>

Stream.BeginWrite(Byte\[\], Int32, Int32, AsyncCallback, Object)

</div>

<div>

Stream.Close()

</div>

<div>

Stream.CreateWaitHandle()

</div>

<div>

Stream.Dispose(Boolean)

</div>

<div>

Stream.EndRead(IAsyncResult)

</div>

<div>

Stream.EndWrite(IAsyncResult)

</div>

<div>

Stream.Synchronized(Stream)

</div>

<div>

Stream.CanTimeout

</div>

<div>

Stream.ReadTimeout

</div>

<div>

Stream.WriteTimeout

</div>

<div>

MarshalByRefObject.CreateObjRef(Type)

</div>

<div>

MarshalByRefObject.GetLifetimeService()

</div>

<div>

MarshalByRefObject.InitializeLifetimeService()

</div>

<div>

MarshalByRefObject.MemberwiseClone(Boolean)

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

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public sealed class PooledBitStream : BitStream, IDisposable

## Methods 

### Dispose()

<div class="markdown level1 summary">

Returns the PooledBitStream into the static BitStreamPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### Get()

<div class="markdown level1 summary">

Gets a PooledBitStream from the static BitStreamPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledBitStream Get()

#### Returns

| Type            | Description     |
|-----------------|-----------------|
| PooledBitStream | PooledBitStream |

### Implements

<div>

System.IDisposable

</div>
