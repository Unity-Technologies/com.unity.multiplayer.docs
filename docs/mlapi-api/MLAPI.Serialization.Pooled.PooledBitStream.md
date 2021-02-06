---

id: MLAPI.Serialization.Pooled.PooledBitStream

title: MLAPI.Serialization.Pooled.PooledBitStream

---

Class PooledBitStream

<div class="markdown level0 summary" markdown="1">

Disposable BitStream that returns the Stream to the BitStreamPool when
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

<div class="level3" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level4" markdown="1">

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

BitStream.Resizable

</div>

<div markdown="1">

BitStream.GrowthFactor

</div>

<div markdown="1">

BitStream.CanRead

</div>

<div markdown="1">

BitStream.HasDataToRead

</div>

<div markdown="1">

BitStream.CanSeek

</div>

<div markdown="1">

BitStream.CanWrite

</div>

<div markdown="1">

BitStream.Capacity

</div>

<div markdown="1">

BitStream.Length

</div>

<div markdown="1">

BitStream.Position

</div>

<div markdown="1">

BitStream.BitPosition

</div>

<div markdown="1">

BitStream.BitLength

</div>

<div markdown="1">

BitStream.BitAligned

</div>

<div markdown="1">

BitStream.Flush()

</div>

<div markdown="1">

BitStream.ReadByte()

</div>

<div markdown="1">

BitStream.PeekByte()

</div>

<div markdown="1">

BitStream.ReadBit()

</div>

<div markdown="1">

BitStream.Read(Byte\[\], Int32, Int32)

</div>

<div markdown="1">

BitStream.Seek(Int64, SeekOrigin)

</div>

<div markdown="1">

BitStream.SetLength(Int64)

</div>

<div markdown="1">

BitStream.Write(Byte\[\], Int32, Int32)

</div>

<div markdown="1">

BitStream.WriteByte(Byte)

</div>

<div markdown="1">

BitStream.Write(Byte\[\])

</div>

<div markdown="1">

BitStream.WriteBit(Boolean)

</div>

<div markdown="1">

BitStream.CopyFrom(Stream, Int32)

</div>

<div markdown="1">

BitStream.CopyTo(Stream, Int32)

</div>

<div markdown="1">

BitStream.CopyUnreadFrom(Stream, Int32)

</div>

<div markdown="1">

BitStream.CopyFrom(BitStream, Int32, Boolean)

</div>

<div markdown="1">

BitStream.GetBuffer()

</div>

<div markdown="1">

BitStream.ToArray()

</div>

<div markdown="1">

BitStream.PadStream()

</div>

<div markdown="1">

BitStream.SkipPadBits()

</div>

<div markdown="1">

BitStream.ToString()

</div>

<div markdown="1">

Stream.Null

</div>

<div markdown="1">

Stream.BeginRead(Byte\[\], Int32, Int32, AsyncCallback, Object)

</div>

<div markdown="1">

Stream.BeginWrite(Byte\[\], Int32, Int32, AsyncCallback, Object)

</div>

<div markdown="1">

Stream.Close()

</div>

<div markdown="1">

Stream.CreateWaitHandle()

</div>

<div markdown="1">

Stream.Dispose(Boolean)

</div>

<div markdown="1">

Stream.EndRead(IAsyncResult)

</div>

<div markdown="1">

Stream.EndWrite(IAsyncResult)

</div>

<div markdown="1">

Stream.Synchronized(Stream)

</div>

<div markdown="1">

Stream.CanTimeout

</div>

<div markdown="1">

Stream.ReadTimeout

</div>

<div markdown="1">

Stream.WriteTimeout

</div>

<div markdown="1">

MarshalByRefObject.CreateObjRef(Type)

</div>

<div markdown="1">

MarshalByRefObject.GetLifetimeService()

</div>

<div markdown="1">

MarshalByRefObject.InitializeLifetimeService()

</div>

<div markdown="1">

MarshalByRefObject.MemberwiseClone(Boolean)

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

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_Pooled_PooledBitStream_syntax]

    public sealed class PooledBitStream : BitStream, IDisposable

## Methods <span id="MLAPI_Serialization_Pooled_PooledBitStream_Dispose_"></span>

### Dispose() [MLAPI_Serialization_Pooled_PooledBitStream_Dispose]

<div class="markdown level1 summary" markdown="1">

Returns the PooledBitStream into the static BitStreamPool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public void Dispose()

<span id="MLAPI_Serialization_Pooled_PooledBitStream_Get_"></span>

### Get() [MLAPI_Serialization_Pooled_PooledBitStream_Get]

<div class="markdown level1 summary" markdown="1">

Gets a PooledBitStream from the static BitStreamPool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static PooledBitStream Get()

#### Returns [returns]

| Type            | Description     |
|-----------------|-----------------|
| PooledBitStream | PooledBitStream |

### Implements [implements]

<div markdown="1">

<span class="xref">System.IDisposable</span>

</div>
