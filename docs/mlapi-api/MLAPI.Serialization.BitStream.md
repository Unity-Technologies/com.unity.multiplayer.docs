---

id: MLAPI.Serialization.BitStream

title: MLAPI.Serialization.BitStream

---

Class BitStream

<div class="markdown level0 summary" markdown="1">

A stream that can be used at the bit level

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

System.IDisposable

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

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

Stream.Dispose()

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

##### Syntax [MLAPI_Serialization_BitStream_syntax]

    public class BitStream : Stream, IDisposable

## Constructors 

### BitStream() [MLAPI_Serialization_BitStream__ctor]

<div class="markdown level1 summary" markdown="1">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public BitStream()

### BitStream(Byte\[\]) [MLAPI_Serialization_BitStream__ctor_System_Byte___]

<div class="markdown level1 summary" markdown="1">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data. NOTE: when using a pre-allocated
buffer, the stream will not grow!

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public BitStream(byte[] target)

#### Parameters [parameters]

| Type            | Name   | Description                      |
|-----------------|--------|----------------------------------|
| System.Byte\[\] | target | Pre-allocated buffer to write to |

### BitStream(Int32) [MLAPI_Serialization_BitStream__ctor_System_Int32_]

<div class="markdown level1 summary" markdown="1">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public BitStream(int capacity)

#### Parameters [parameters-1]

| Type         | Name     | Description |
|--------------|----------|-------------|
| System.Int32 | capacity |             |

### BitStream(Int32, Single) [MLAPI_Serialization_BitStream__ctor_System_Int32_System_Single_]

<div class="markdown level1 summary" markdown="1">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public BitStream(int capacity, float growthFactor)

#### Parameters [parameters-2]

| Type          | Name         | Description                                        |
|---------------|--------------|----------------------------------------------------|
| System.Int32  | capacity     | Initial capacity of buffer in bytes.               |
| System.Single | growthFactor | Factor by which buffer should grow when necessary. |

### BitStream(Single) [MLAPI_Serialization_BitStream__ctor_System_Single_]

<div class="markdown level1 summary" markdown="1">

A stream that supports writing data smaller than a single byte. This
stream also has a built-in compression algorithm that can (optionally)
be used to write compressed data.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public BitStream(float growthFactor)

#### Parameters [parameters-3]

| Type          | Name         | Description                                        |
|---------------|--------------|----------------------------------------------------|
| System.Single | growthFactor | Factor by which buffer should grow when necessary. |

## Properties 

### BitAligned [MLAPI_Serialization_BitStream_BitAligned]

<div class="markdown level1 summary" markdown="1">

Whether or not the current BitPosition is evenly divisible by 8. I.e.
whether or not the BitPosition is at a byte boundary.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public bool BitAligned { get; }

#### Property Value [property-value]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### BitLength [MLAPI_Serialization_BitStream_BitLength]

<div class="markdown level1 summary" markdown="1">

Length of data (in bits) that is considered to be written to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public ulong BitLength { get; }

#### Property Value [property-value-1]

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### BitPosition [MLAPI_Serialization_BitStream_BitPosition]

<div class="markdown level1 summary" markdown="1">

Bit offset into the buffer that new data will be written to.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public ulong BitPosition { get; set; }

#### Property Value [property-value-2]

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### CanRead [MLAPI_Serialization_BitStream_CanRead]

<div class="markdown level1 summary" markdown="1">

Whether or not stream supports reading. (Always true)

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public override bool CanRead { get; }

#### Property Value [property-value-3]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides [overrides]

<div markdown="1">

System.IO.Stream.CanRead

</div>

### CanSeek [MLAPI_Serialization_BitStream_CanSeek]

<div class="markdown level1 summary" markdown="1">

Whether or not seeking is supported by this stream. (Always true)

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public override bool CanSeek { get; }

#### Property Value [property-value-4]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides [overrides-1]

<div markdown="1">

System.IO.Stream.CanSeek

</div>

### CanWrite [MLAPI_Serialization_BitStream_CanWrite]

<div class="markdown level1 summary" markdown="1">

Whether or not this stream can accept new data. NOTE: this will return
true even if only fewer than 8 bits can be written!

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public override bool CanWrite { get; }

#### Property Value [property-value-5]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides [overrides-2]

<div markdown="1">

System.IO.Stream.CanWrite

</div>

### Capacity [MLAPI_Serialization_BitStream_Capacity]

<div class="markdown level1 summary" markdown="1">

Current buffer size. The buffer will not be resized (if possible) until
Position is equal to Capacity and an attempt to write data is made.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public long Capacity { get; set; }

#### Property Value [property-value-6]

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

### GrowthFactor [MLAPI_Serialization_BitStream_GrowthFactor]

<div class="markdown level1 summary" markdown="1">

Factor by which buffer should grow when necessary.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public float GrowthFactor { get; set; }

#### Property Value [property-value-7]

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### HasDataToRead [MLAPI_Serialization_BitStream_HasDataToRead]

<div class="markdown level1 summary" markdown="1">

Whether or not or there is any data to be read from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public bool HasDataToRead { get; }

#### Property Value [property-value-8]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Length [MLAPI_Serialization_BitStream_Length]

<div class="markdown level1 summary" markdown="1">

The current length of data considered to be "written" to the buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public override long Length { get; }

#### Property Value [property-value-9]

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### Overrides [overrides-3]

<div markdown="1">

System.IO.Stream.Length

</div>

### Position [MLAPI_Serialization_BitStream_Position]

<div class="markdown level1 summary" markdown="1">

The index that will be written to when any call to write data is made to
this stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public override long Position { get; set; }

#### Property Value [property-value-10]

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### Overrides [overrides-4]

<div markdown="1">

System.IO.Stream.Position

</div>

### Resizable [MLAPI_Serialization_BitStream_Resizable]

<div class="markdown level1 summary" markdown="1">

Whether or not the stream will grow the buffer to accomodate more data.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public bool Resizable { get; }

#### Property Value [property-value-11]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### CopyFrom(BitStream, Int32, Boolean) [MLAPI_Serialization_BitStream_CopyFrom_MLAPI_Serialization_BitStream_System_Int32_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Copys the bits from the provided BitStream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public void CopyFrom(BitStream stream, int dataCount, bool copyBits)

#### Parameters [parameters-4]

| Type           | Name      | Description                                                        |
|----------------|-----------|--------------------------------------------------------------------|
| BitStream      | stream    | The stream to copy from                                            |
| System.Int32   | dataCount | The amount of data evel                                            |
| System.Boolean | copyBits  | Whether or not to copy at the bit level rather than the byte level |

### CopyFrom(Stream, Int32) [MLAPI_Serialization_BitStream_CopyFrom_System_IO_Stream_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Copy data from another stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void CopyFrom(Stream s, int count = -1)

#### Parameters [parameters-5]

| Type             | Name  | Description                                                                          |
|------------------|-------|--------------------------------------------------------------------------------------|
| System.IO.Stream | s     | Stream to copy from                                                                  |
| System.Int32     | count | How many bytes to read. Set to value less than one to read until ReadByte returns -1 |

### CopyTo(Stream, Int32) [MLAPI_Serialization_BitStream_CopyTo_System_IO_Stream_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Copies internal buffer to stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public void CopyTo(Stream stream, int count = -1)

#### Parameters [parameters-6]

| Type             | Name   | Description                                                                             |
|------------------|--------|-----------------------------------------------------------------------------------------|
| System.IO.Stream | stream | The stream to copy to                                                                   |
| System.Int32     | count  | The maximum amount of bytes to copy. Set to value less than one to copy the full length |

### CopyUnreadFrom(Stream, Int32) [MLAPI_Serialization_BitStream_CopyUnreadFrom_System_IO_Stream_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Copies urnead bytes from the source stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public void CopyUnreadFrom(Stream s, int count = -1)

#### Parameters [parameters-7]

| Type             | Name  | Description                     |
|------------------|-------|---------------------------------|
| System.IO.Stream | s     | The source stream to copy from  |
| System.Int32     | count | The max amount of bytes to copy |

### Flush() [MLAPI_Serialization_BitStream_Flush]

<div class="markdown level1 summary" markdown="1">

Flush stream. This does nothing since data is written directly to a byte
buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public override void Flush()

#### Overrides [overrides-5]

<div markdown="1">

System.IO.Stream.Flush()

</div>

### GetBuffer() [MLAPI_Serialization_BitStream_GetBuffer]

<div class="markdown level1 summary" markdown="1">

Get the internal buffer being written to by this stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public byte[] GetBuffer()

#### Returns [returns]

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### PadStream() [MLAPI_Serialization_BitStream_PadStream]

<div class="markdown level1 summary" markdown="1">

Writes zeros to fill the last byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public void PadStream()

### PeekByte() [MLAPI_Serialization_BitStream_PeekByte]

<div class="markdown level1 summary" markdown="1">

Peeks a byte without advancing the position

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public int PeekByte()

#### Returns [returns-1]

| Type         | Description     |
|--------------|-----------------|
| System.Int32 | The peeked byte |

### Read(Byte\[\], Int32, Int32) [MLAPI_Serialization_BitStream_Read_System_Byte___System_Int32_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Read a subset of the stream buffer and write the contents to the
supplied buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public override int Read(byte[] buffer, int offset, int count)

#### Parameters [parameters-8]

| Type            | Name   | Description                              |
|-----------------|--------|------------------------------------------|
| System.Byte\[\] | buffer | Buffer to copy data to.                  |
| System.Int32    | offset | Offset into the buffer to write data to. |
| System.Int32    | count  | How many bytes to attempt to read.       |

#### Returns [returns-2]

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Amount of bytes read. |

#### Overrides [overrides-6]

<div markdown="1">

System.IO.Stream.Read(System.Byte\[\], System.Int32, System.Int32)

</div>

### ReadBit() [MLAPI_Serialization_BitStream_ReadBit]

<div class="markdown level1 summary" markdown="1">

Read a single bit from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public bool ReadBit()

#### Returns [returns-3]

| Type           | Description                                                   |
|----------------|---------------------------------------------------------------|
| System.Boolean | A bit in bool format. (True represents 1, False represents 0) |

### ReadByte() [MLAPI_Serialization_BitStream_ReadByte]

<div class="markdown level1 summary" markdown="1">

Read a byte from the buffer. This takes into account possible byte
misalignment.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public override int ReadByte()

#### Returns [returns-4]

| Type         | Description                                             |
|--------------|---------------------------------------------------------|
| System.Int32 | A byte from the buffer or, if a byte can't be read, -1. |

#### Overrides [overrides-7]

<div markdown="1">

System.IO.Stream.ReadByte()

</div>

### Seek(Int64, SeekOrigin) [MLAPI_Serialization_BitStream_Seek_System_Int64_System_IO_SeekOrigin_]

<div class="markdown level1 summary" markdown="1">

Set position in stream to read from/write to.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public override long Seek(long offset, SeekOrigin origin)

#### Parameters [parameters-9]

| Type                 | Name   | Description                  |
|----------------------|--------|------------------------------|
| System.Int64         | offset | Offset from position origin. |
| System.IO.SeekOrigin | origin | How to calculate offset.     |

#### Returns [returns-5]

| Type         | Description                                                  |
|--------------|--------------------------------------------------------------|
| System.Int64 | The new position in the buffer that data will be written to. |

#### Overrides [overrides-8]

<div markdown="1">

System.IO.Stream.Seek(System.Int64, System.IO.SeekOrigin)

</div>

### SetLength(Int64) [MLAPI_Serialization_BitStream_SetLength_System_Int64_]

<div class="markdown level1 summary" markdown="1">

Set length of data considered to be "written" to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public override void SetLength(long value)

#### Parameters [parameters-10]

| Type         | Name  | Description                     |
|--------------|-------|---------------------------------|
| System.Int64 | value | New length of the written data. |

#### Overrides [overrides-9]

<div markdown="1">

System.IO.Stream.SetLength(System.Int64)

</div>

### SkipPadBits() [MLAPI_Serialization_BitStream_SkipPadBits]

<div class="markdown level1 summary" markdown="1">

Reads zeros until the the stream is byte aligned

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public void SkipPadBits()

### ToArray() [MLAPI_Serialization_BitStream_ToArray]

<div class="markdown level1 summary" markdown="1">

Creates a copy of the internal buffer. This only contains the used bytes

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public byte[] ToArray()

#### Returns [returns-6]

| Type            | Description                                 |
|-----------------|---------------------------------------------|
| System.Byte\[\] | A copy of used bytes in the internal buffer |

### ToString() [MLAPI_Serialization_BitStream_ToString]

<div class="markdown level1 summary" markdown="1">

Returns hex encoded version of the buffer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    public override string ToString()

#### Returns [returns-7]

| Type          | Description                       |
|---------------|-----------------------------------|
| System.String | Hex encoded version of the buffer |

#### Overrides [overrides-10]

<div markdown="1">

System.Object.ToString()

</div>

### Write(Byte\[\]) [MLAPI_Serialization_BitStream_Write_System_Byte___]

<div class="markdown level1 summary" markdown="1">

Write data from the given buffer to the internal stream buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-33]

    public void Write(byte[] buffer)

#### Parameters [parameters-11]

| Type            | Name   | Description           |
|-----------------|--------|-----------------------|
| System.Byte\[\] | buffer | Buffer to write from. |

### Write(Byte\[\], Int32, Int32) [MLAPI_Serialization_BitStream_Write_System_Byte___System_Int32_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write data from the given buffer to the internal stream buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-34]

    public override void Write(byte[] buffer, int offset, int count)

#### Parameters [parameters-12]

| Type            | Name   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| System.Byte\[\] | buffer | Buffer to write from.                                            |
| System.Int32    | offset | Offset in given buffer to start reading from.                    |
| System.Int32    | count  | Amount of bytes to read copy from given buffer to stream buffer. |

#### Overrides [overrides-11]

<div markdown="1">

System.IO.Stream.Write(System.Byte\[\], System.Int32, System.Int32)

</div>

### WriteBit(Boolean) [MLAPI_Serialization_BitStream_WriteBit_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Write a single bit to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-35]

    public void WriteBit(bool bit)

#### Parameters [parameters-13]

| Type           | Name | Description                                             |
|----------------|------|---------------------------------------------------------|
| System.Boolean | bit  | Value of the bit. True represents 1, False represents 0 |

### WriteByte(Byte) [MLAPI_Serialization_BitStream_WriteByte_System_Byte_]

<div class="markdown level1 summary" markdown="1">

Write byte value to the internal stream buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-36]

    public override void WriteByte(byte value)

#### Parameters [parameters-14]

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| System.Byte | value | The byte value to write. |

#### Overrides [overrides-12]

<div markdown="1">

System.IO.Stream.WriteByte(System.Byte)

</div>

### Implements [implements]

<div markdown="1">

System.IDisposable

</div>
