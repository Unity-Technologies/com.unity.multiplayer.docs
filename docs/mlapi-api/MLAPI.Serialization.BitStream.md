---  
id: MLAPI.Serialization.BitStream  
title: MLAPI.Serialization.BitStream  
---

<div class="markdown level0 summary">

A stream that can be used at the bit level

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

Stream.Dispose()

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

    public class BitStream : Stream, IDisposable

## Constructors 

### BitStream()

<div class="markdown level1 summary">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public BitStream()

### BitStream(Byte\[\])

<div class="markdown level1 summary">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data. NOTE: when using a pre-allocated
buffer, the stream will not grow!

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public BitStream(byte[] target)

#### Parameters

| Type            | Name   | Description                      |
|-----------------|--------|----------------------------------|
| System.Byte\[\] | target | Pre-allocated buffer to write to |

### BitStream(Int32)

<div class="markdown level1 summary">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public BitStream(int capacity)

#### Parameters

| Type         | Name     | Description |
|--------------|----------|-------------|
| System.Int32 | capacity |             |

### BitStream(Int32, Single)

<div class="markdown level1 summary">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public BitStream(int capacity, float growthFactor)

#### Parameters

| Type          | Name         | Description                                        |
|---------------|--------------|----------------------------------------------------|
| System.Int32  | capacity     | Initial capacity of buffer in bytes.               |
| System.Single | growthFactor | Factor by which buffer should grow when necessary. |

### BitStream(Single)

<div class="markdown level1 summary">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public BitStream(float growthFactor)

#### Parameters

| Type          | Name         | Description                                        |
|---------------|--------------|----------------------------------------------------|
| System.Single | growthFactor | Factor by which buffer should grow when necessary. |

## Properties 

### BitAligned

<div class="markdown level1 summary">

Whether or not the current BitPosition is evenly divisible by 8. I.e.
whether or not the BitPosition is at a byte boundary.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool BitAligned { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### BitLength

<div class="markdown level1 summary">

Length of data (in bits) that is considered to be written to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong BitLength { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### BitPosition

<div class="markdown level1 summary">

Bit offset into the buffer that new data will be written to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong BitPosition { get; set; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### CanRead

<div class="markdown level1 summary">

Whether or not stream supports reading. (Always true)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override bool CanRead { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.IO.Stream.CanRead

</div>

### CanSeek

<div class="markdown level1 summary">

Whether or not seeking is supported by this stream. (Always true)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override bool CanSeek { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.IO.Stream.CanSeek

</div>

### CanWrite

<div class="markdown level1 summary">

Whether or not this stream can accept new data. NOTE: this will return
true even if only fewer than 8 bits can be written!

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override bool CanWrite { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.IO.Stream.CanWrite

</div>

### Capacity

<div class="markdown level1 summary">

Current buffer size. The buffer will not be resized (if possible) until
Position is equal to Capacity and an attempt to write data is made.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long Capacity { get; set; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

### GrowthFactor

<div class="markdown level1 summary">

Factor by which buffer should grow when necessary.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float GrowthFactor { get; set; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### HasDataToRead

<div class="markdown level1 summary">

Whether or not or there is any data to be read from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool HasDataToRead { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Length

<div class="markdown level1 summary">

The current length of data considered to be "written" to the buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override long Length { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### Overrides

<div>

System.IO.Stream.Length

</div>

### Position

<div class="markdown level1 summary">

The index that will be written to when any call to write data is made to
this stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override long Position { get; set; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### Overrides

<div>

System.IO.Stream.Position

</div>

### Resizable

<div class="markdown level1 summary">

Whether or not the stream will grow the buffer to accomodate more data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Resizable { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### CopyFrom(BitStream, Int32, Boolean)

<div class="markdown level1 summary">

Copys the bits from the provided BitStream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CopyFrom(BitStream stream, int dataCount, bool copyBits)

#### Parameters

| Type           | Name      | Description                                                        |
|----------------|-----------|--------------------------------------------------------------------|
| BitStream      | stream    | The stream to copy from                                            |
| System.Int32   | dataCount | The amount of data evel                                            |
| System.Boolean | copyBits  | Whether or not to copy at the bit level rather than the byte level |

### CopyFrom(Stream, Int32)

<div class="markdown level1 summary">

Copy data from another stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CopyFrom(Stream s, int count = -1)

#### Parameters

| Type             | Name  | Description                                                                          |
|------------------|-------|--------------------------------------------------------------------------------------|
| System.IO.Stream | s     | Stream to copy from                                                                  |
| System.Int32     | count | How many bytes to read. Set to value less than one to read until ReadByte returns -1 |

### CopyTo(Stream, Int32)

<div class="markdown level1 summary">

Copies internal buffer to stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CopyTo(Stream stream, int count = -1)

#### Parameters

| Type             | Name   | Description                                                                             |
|------------------|--------|-----------------------------------------------------------------------------------------|
| System.IO.Stream | stream | The stream to copy to                                                                   |
| System.Int32     | count  | The maximum amount of bytes to copy. Set to value less than one to copy the full length |

### CopyUnreadFrom(Stream, Int32)

<div class="markdown level1 summary">

Copies urnead bytes from the source stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CopyUnreadFrom(Stream s, int count = -1)

#### Parameters

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.IO.Stream | s     | The source stream to copy from  |
| System.Int32     | count | The max amount of bytes to copy |

### Flush()

<div class="markdown level1 summary">

Flush stream. This does nothing since data is written directly to a byte
buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override void Flush()

#### Overrides

<div>

System.IO.Stream.Flush()

</div>

### GetBuffer()

<div class="markdown level1 summary">

Get the internal buffer being written to by this stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte[] GetBuffer()

#### Returns

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### PadStream()

<div class="markdown level1 summary">

Writes zeros to fill the last byte

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void PadStream()

### PeekByte()

<div class="markdown level1 summary">

Peeks a byte without advancing the position

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int PeekByte()

#### Returns

| Type         | Description     |
|--------------|-----------------|
| System.Int32 | The peeked byte |

### Read(Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Read a subset of the stream buffer and write the contents to the
supplied buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override int Read(byte[] buffer, int offset, int count)

#### Parameters

| Type            | Name   | Description                              |
|-----------------|--------|------------------------------------------|
| System.Byte\[\] | buffer | Buffer to copy data to.                  |
| System.Int32    | offset | Offset into the buffer to write data to. |
| System.Int32    | count  | How many bytes to attempt to read.       |

#### Returns

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Amount of bytes read. |

#### Overrides

<div>

System.IO.Stream.Read(System.Byte\[\], System.Int32, System.Int32)

</div>

### ReadBit()

<div class="markdown level1 summary">

Read a single bit from the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool ReadBit()

#### Returns

| Type           | Description                                                   |
|----------------|---------------------------------------------------------------|
| System.Boolean | A bit in bool format. (True represents 1, False represents 0) |

### ReadByte()

<div class="markdown level1 summary">

Read a byte from the buffer. This takes into account possible byte
misalignment.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override int ReadByte()

#### Returns

| Type         | Description                                             |
|--------------|---------------------------------------------------------|
| System.Int32 | A byte from the buffer or, if a byte can't be read, -1. |

#### Overrides

<div>

System.IO.Stream.ReadByte()

</div>

### Seek(Int64, SeekOrigin)

<div class="markdown level1 summary">

Set position in stream to read from/write to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override long Seek(long offset, SeekOrigin origin)

#### Parameters

| Type                 | Name   | Description                  |
|----------------------|--------|------------------------------|
| System.Int64         | offset | Offset from position origin. |
| System.IO.SeekOrigin | origin | How to calculate offset.     |

#### Returns

| Type         | Description                                                  |
|--------------|--------------------------------------------------------------|
| System.Int64 | The new position in the buffer that data will be written to. |

#### Overrides

<div>

System.IO.Stream.Seek(System.Int64, System.IO.SeekOrigin)

</div>

### SetLength(Int64)

<div class="markdown level1 summary">

Set length of data considered to be "written" to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override void SetLength(long value)

#### Parameters

| Type         | Name  | Description                     |
|--------------|-------|---------------------------------|
| System.Int64 | value | New length of the written data. |

#### Overrides

<div>

System.IO.Stream.SetLength(System.Int64)

</div>

### SkipPadBits()

<div class="markdown level1 summary">

Reads zeros until the the stream is byte aligned

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SkipPadBits()

### ToArray()

<div class="markdown level1 summary">

Creates a copy of the internal buffer. This only contains the used bytes

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte[] ToArray()

#### Returns

| Type            | Description                                 |
|-----------------|---------------------------------------------|
| System.Byte\[\] | A copy of used bytes in the internal buffer |

### ToString()

<div class="markdown level1 summary">

Returns hex encoded version of the buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override string ToString()

#### Returns

| Type          | Description                       |
|---------------|-----------------------------------|
| System.String | Hex encoded version of the buffer |

#### Overrides

<div>

System.Object.ToString()

</div>

### Write(Byte\[\])

<div class="markdown level1 summary">

Write data from the given buffer to the internal stream buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Write(byte[] buffer)

#### Parameters

| Type            | Name   | Description           |
|-----------------|--------|-----------------------|
| System.Byte\[\] | buffer | Buffer to write from. |

### Write(Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Write data from the given buffer to the internal stream buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override void Write(byte[] buffer, int offset, int count)

#### Parameters

| Type            | Name   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| System.Byte\[\] | buffer | Buffer to write from.                                            |
| System.Int32    | offset | Offset in given buffer to start reading from.                    |
| System.Int32    | count  | Amount of bytes to read copy from given buffer to stream buffer. |

#### Overrides

<div>

System.IO.Stream.Write(System.Byte\[\], System.Int32, System.Int32)

</div>

### WriteBit(Boolean)

<div class="markdown level1 summary">

Write a single bit to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteBit(bool bit)

#### Parameters

| Type           | Name | Description                                             |
|----------------|------|---------------------------------------------------------|
| System.Boolean | bit  | Value of the bit. True represents 1, False represents 0 |

### WriteByte(Byte)

<div class="markdown level1 summary">

Write byte value to the internal stream buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override void WriteByte(byte value)

#### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| System.Byte | value | The byte value to write. |

#### Overrides

<div>

System.IO.Stream.WriteByte(System.Byte)

</div>

### Implements

<div>

System.IDisposable

</div>
