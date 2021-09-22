---  
id: MLAPI.Serialization.Pooled.PooledNetworkBuffer  
title: MLAPI.Serialization.Pooled.PooledNetworkBuffer
---

<div class="markdown level0 summary">

Disposable NetworkBuffer that returns back to the NetworkBufferPool when
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

NetworkBuffer.Resizable

</div>

<div>

NetworkBuffer.GrowthFactor

</div>

<div>

NetworkBuffer.CanRead

</div>

<div>

NetworkBuffer.HasDataToRead

</div>

<div>

NetworkBuffer.CanSeek

</div>

<div>

NetworkBuffer.CanWrite

</div>

<div>

NetworkBuffer.Capacity

</div>

<div>

NetworkBuffer.Length

</div>

<div>

NetworkBuffer.Position

</div>

<div>

NetworkBuffer.BitPosition

</div>

<div>

NetworkBuffer.BitLength

</div>

<div>

NetworkBuffer.BitAligned

</div>

<div>

NetworkBuffer.Flush()

</div>

<div>

NetworkBuffer.ReadByte()

</div>

<div>

NetworkBuffer.PeekByte()

</div>

<div>

NetworkBuffer.ReadBit()

</div>

<div>

NetworkBuffer.Read(Byte\[\], Int32, Int32)

</div>

<div>

NetworkBuffer.Seek(Int64, SeekOrigin)

</div>

<div>

NetworkBuffer.SetLength(Int64)

</div>

<div>

NetworkBuffer.Write(Byte\[\], Int32, Int32)

</div>

<div>

NetworkBuffer.WriteByte(Byte)

</div>

<div>

NetworkBuffer.Write(Byte\[\])

</div>

<div>

NetworkBuffer.WriteBit(Boolean)

</div>

<div>

NetworkBuffer.CopyFrom(Stream, Int32)

</div>

<div>

NetworkBuffer.CopyTo(Stream, Int32)

</div>

<div>

NetworkBuffer.CopyUnreadFrom(Stream, Int32)

</div>

<div>

NetworkBuffer.CopyFrom(NetworkBuffer, Int32, Boolean)

</div>

<div>

NetworkBuffer.GetBuffer()

</div>

<div>

NetworkBuffer.ToArray()

</div>

<div>

NetworkBuffer.PadBuffer()

</div>

<div>

NetworkBuffer.SkipPadBits()

</div>

<div>

NetworkBuffer.ToString()

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

    public sealed class PooledNetworkBuffer : NetworkBuffer, IDisposable

## Methods 

### Dispose()

<div class="markdown level1 summary">

Returns the PooledNetworkBuffer into the static NetworkBufferPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### Get()

<div class="markdown level1 summary">

Gets a PooledNetworkBuffer from the static NetworkBufferPool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledNetworkBuffer Get()

#### Returns

| Type                | Description         |
|---------------------|---------------------|
| PooledNetworkBuffer | PooledNetworkBuffer |

### Implements

<div>

System.IDisposable

</div>
