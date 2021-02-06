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

<span class="xref">System.IDisposable</span>

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

## Constructors <span id="MLAPI_Serialization_BitStream__ctor_"></span>

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

<span id="MLAPI_Serialization_BitStream__ctor_"></span>

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

| Type                                      | Name                                      | Description                      |
|-------------------------------------------|-------------------------------------------|----------------------------------|
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">target</span> | Pre-allocated buffer to write to |

<span id="MLAPI_Serialization_BitStream__ctor_"></span>

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

| Type                                   | Name                                        | Description |
|----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.Int32</span> | <span class="parametername">capacity</span> |             |

<span id="MLAPI_Serialization_BitStream__ctor_"></span>

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

| Type                                    | Name                                            | Description                                        |
|-----------------------------------------|-------------------------------------------------|----------------------------------------------------|
| <span class="xref">System.Int32</span>  | <span class="parametername">capacity</span>     | Initial capacity of buffer in bytes.               |
| <span class="xref">System.Single</span> | <span class="parametername">growthFactor</span> | Factor by which buffer should grow when necessary. |

<span id="MLAPI_Serialization_BitStream__ctor_"></span>

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

| Type                                    | Name                                            | Description                                        |
|-----------------------------------------|-------------------------------------------------|----------------------------------------------------|
| <span class="xref">System.Single</span> | <span class="parametername">growthFactor</span> | Factor by which buffer should grow when necessary. |

## Properties <span id="MLAPI_Serialization_BitStream_BitAligned_"></span>

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

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_Serialization_BitStream_BitLength_"></span>

### BitLength [MLAPI_Serialization_BitStream_BitLength]

<div class="markdown level1 summary" markdown="1">

Length of data (in bits) that is considered to be written to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public ulong BitLength { get; }

#### Property Value [property-value-1]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.UInt64</span> |             |

<span id="MLAPI_Serialization_BitStream_BitPosition_"></span>

### BitPosition [MLAPI_Serialization_BitStream_BitPosition]

<div class="markdown level1 summary" markdown="1">

Bit offset into the buffer that new data will be written to.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public ulong BitPosition { get; set; }

#### Property Value [property-value-2]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.UInt64</span> |             |

<span id="MLAPI_Serialization_BitStream_CanRead_"></span>

### CanRead [MLAPI_Serialization_BitStream_CanRead]

<div class="markdown level1 summary" markdown="1">

Whether or not stream supports reading. (Always true)

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public override bool CanRead { get; }

#### Property Value [property-value-3]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

#### Overrides [overrides]

<div markdown="1">

<span class="xref">System.IO.Stream.CanRead</span>

</div>

<span id="MLAPI_Serialization_BitStream_CanSeek_"></span>

### CanSeek [MLAPI_Serialization_BitStream_CanSeek]

<div class="markdown level1 summary" markdown="1">

Whether or not seeking is supported by this stream. (Always true)

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public override bool CanSeek { get; }

#### Property Value [property-value-4]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

#### Overrides [overrides-1]

<div markdown="1">

<span class="xref">System.IO.Stream.CanSeek</span>

</div>

<span id="MLAPI_Serialization_BitStream_CanWrite_"></span>

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

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

#### Overrides [overrides-2]

<div markdown="1">

<span class="xref">System.IO.Stream.CanWrite</span>

</div>

<span id="MLAPI_Serialization_BitStream_Capacity_"></span>

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

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int64</span> |             |

<span id="MLAPI_Serialization_BitStream_GrowthFactor_"></span>

### GrowthFactor [MLAPI_Serialization_BitStream_GrowthFactor]

<div class="markdown level1 summary" markdown="1">

Factor by which buffer should grow when necessary.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public float GrowthFactor { get; set; }

#### Property Value [property-value-7]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.Single</span> |             |

<span id="MLAPI_Serialization_BitStream_HasDataToRead_"></span>

### HasDataToRead [MLAPI_Serialization_BitStream_HasDataToRead]

<div class="markdown level1 summary" markdown="1">

Whether or not or there is any data to be read from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public bool HasDataToRead { get; }

#### Property Value [property-value-8]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_Serialization_BitStream_Length_"></span>

### Length [MLAPI_Serialization_BitStream_Length]

<div class="markdown level1 summary" markdown="1">

The current length of data considered to be "written" to the buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public override long Length { get; }

#### Property Value [property-value-9]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int64</span> |             |

#### Overrides [overrides-3]

<div markdown="1">

<span class="xref">System.IO.Stream.Length</span>

</div>

<span id="MLAPI_Serialization_BitStream_Position_"></span>

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

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int64</span> |             |

#### Overrides [overrides-4]

<div markdown="1">

<span class="xref">System.IO.Stream.Position</span>

</div>

<span id="MLAPI_Serialization_BitStream_Resizable_"></span>

### Resizable [MLAPI_Serialization_BitStream_Resizable]

<div class="markdown level1 summary" markdown="1">

Whether or not the stream will grow the buffer to accomodate more data.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public bool Resizable { get; }

#### Property Value [property-value-11]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

## Methods <span id="MLAPI_Serialization_BitStream_CopyFrom_"></span>

### CopyFrom(BitStream, Int32, Boolean) [MLAPI_Serialization_BitStream_CopyFrom_MLAPI_Serialization_BitStream_System_Int32_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Copys the bits from the provided BitStream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public void CopyFrom(BitStream stream, int dataCount, bool copyBits)

#### Parameters [parameters-4]

| Type                                     | Name                                         | Description                                                        |
|------------------------------------------|----------------------------------------------|--------------------------------------------------------------------|
| BitStream                                | <span class="parametername">stream</span>    | The stream to copy from                                            |
| <span class="xref">System.Int32</span>   | <span class="parametername">dataCount</span> | The amount of data evel                                            |
| <span class="xref">System.Boolean</span> | <span class="parametername">copyBits</span>  | Whether or not to copy at the bit level rather than the byte level |

<span id="MLAPI_Serialization_BitStream_CopyFrom_"></span>

### CopyFrom(Stream, Int32) [MLAPI_Serialization_BitStream_CopyFrom_System_IO_Stream_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Copy data from another stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void CopyFrom(Stream s, int count = -1)

#### Parameters [parameters-5]

| Type                                       | Name                                     | Description                                                                          |
|--------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">s</span>     | Stream to copy from                                                                  |
| <span class="xref">System.Int32</span>     | <span class="parametername">count</span> | How many bytes to read. Set to value less than one to read until ReadByte returns -1 |

<span id="MLAPI_Serialization_BitStream_CopyTo_"></span>

### CopyTo(Stream, Int32) [MLAPI_Serialization_BitStream_CopyTo_System_IO_Stream_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Copies internal buffer to stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public void CopyTo(Stream stream, int count = -1)

#### Parameters [parameters-6]

| Type                                       | Name                                      | Description                                                                             |
|--------------------------------------------|-------------------------------------------|-----------------------------------------------------------------------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> | The stream to copy to                                                                   |
| <span class="xref">System.Int32</span>     | <span class="parametername">count</span>  | The maximum amount of bytes to copy. Set to value less than one to copy the full length |

<span id="MLAPI_Serialization_BitStream_CopyUnreadFrom_"></span>

### CopyUnreadFrom(Stream, Int32) [MLAPI_Serialization_BitStream_CopyUnreadFrom_System_IO_Stream_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Copies urnead bytes from the source stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public void CopyUnreadFrom(Stream s, int count = -1)

#### Parameters [parameters-7]

| Type                                       | Name                                     | Description                     |
|--------------------------------------------|------------------------------------------|---------------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">s</span>     | The source stream to copy from  |
| <span class="xref">System.Int32</span>     | <span class="parametername">count</span> | The max amount of bytes to copy |

<span id="MLAPI_Serialization_BitStream_Flush_"></span>

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

<span class="xref">System.IO.Stream.Flush()</span>

</div>

<span id="MLAPI_Serialization_BitStream_GetBuffer_"></span>

### GetBuffer() [MLAPI_Serialization_BitStream_GetBuffer]

<div class="markdown level1 summary" markdown="1">

Get the internal buffer being written to by this stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public byte[] GetBuffer()

#### Returns [returns]

| Type                                      | Description |
|-------------------------------------------|-------------|
| <span class="xref">System.Byte</span>\[\] |             |

<span id="MLAPI_Serialization_BitStream_PadStream_"></span>

### PadStream() [MLAPI_Serialization_BitStream_PadStream]

<div class="markdown level1 summary" markdown="1">

Writes zeros to fill the last byte

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public void PadStream()

<span id="MLAPI_Serialization_BitStream_PeekByte_"></span>

### PeekByte() [MLAPI_Serialization_BitStream_PeekByte]

<div class="markdown level1 summary" markdown="1">

Peeks a byte without advancing the position

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public int PeekByte()

#### Returns [returns-1]

| Type                                   | Description     |
|----------------------------------------|-----------------|
| <span class="xref">System.Int32</span> | The peeked byte |

<span id="MLAPI_Serialization_BitStream_Read_"></span>

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

| Type                                      | Name                                      | Description                              |
|-------------------------------------------|-------------------------------------------|------------------------------------------|
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span> | Buffer to copy data to.                  |
| <span class="xref">System.Int32</span>    | <span class="parametername">offset</span> | Offset into the buffer to write data to. |
| <span class="xref">System.Int32</span>    | <span class="parametername">count</span>  | How many bytes to attempt to read.       |

#### Returns [returns-2]

| Type                                   | Description           |
|----------------------------------------|-----------------------|
| <span class="xref">System.Int32</span> | Amount of bytes read. |

#### Overrides [overrides-6]

<div markdown="1">

<span class="xref">System.IO.Stream.Read(System.Byte\[\], System.Int32,
System.Int32)</span>

</div>

<span id="MLAPI_Serialization_BitStream_ReadBit_"></span>

### ReadBit() [MLAPI_Serialization_BitStream_ReadBit]

<div class="markdown level1 summary" markdown="1">

Read a single bit from the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public bool ReadBit()

#### Returns [returns-3]

| Type                                     | Description                                                   |
|------------------------------------------|---------------------------------------------------------------|
| <span class="xref">System.Boolean</span> | A bit in bool format. (True represents 1, False represents 0) |

<span id="MLAPI_Serialization_BitStream_ReadByte_"></span>

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

| Type                                   | Description                                             |
|----------------------------------------|---------------------------------------------------------|
| <span class="xref">System.Int32</span> | A byte from the buffer or, if a byte can't be read, -1. |

#### Overrides [overrides-7]

<div markdown="1">

<span class="xref">System.IO.Stream.ReadByte()</span>

</div>

<span id="MLAPI_Serialization_BitStream_Seek_"></span>

### Seek(Int64, SeekOrigin) [MLAPI_Serialization_BitStream_Seek_System_Int64_System_IO_SeekOrigin_]

<div class="markdown level1 summary" markdown="1">

Set position in stream to read from/write to.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public override long Seek(long offset, SeekOrigin origin)

#### Parameters [parameters-9]

| Type                                           | Name                                      | Description                  |
|------------------------------------------------|-------------------------------------------|------------------------------|
| <span class="xref">System.Int64</span>         | <span class="parametername">offset</span> | Offset from position origin. |
| <span class="xref">System.IO.SeekOrigin</span> | <span class="parametername">origin</span> | How to calculate offset.     |

#### Returns [returns-5]

| Type                                   | Description                                                  |
|----------------------------------------|--------------------------------------------------------------|
| <span class="xref">System.Int64</span> | The new position in the buffer that data will be written to. |

#### Overrides [overrides-8]

<div markdown="1">

<span class="xref">System.IO.Stream.Seek(System.Int64,
System.IO.SeekOrigin)</span>

</div>

<span id="MLAPI_Serialization_BitStream_SetLength_"></span>

### SetLength(Int64) [MLAPI_Serialization_BitStream_SetLength_System_Int64_]

<div class="markdown level1 summary" markdown="1">

Set length of data considered to be "written" to the stream.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public override void SetLength(long value)

#### Parameters [parameters-10]

| Type                                   | Name                                     | Description                     |
|----------------------------------------|------------------------------------------|---------------------------------|
| <span class="xref">System.Int64</span> | <span class="parametername">value</span> | New length of the written data. |

#### Overrides [overrides-9]

<div markdown="1">

<span class="xref">System.IO.Stream.SetLength(System.Int64)</span>

</div>

<span id="MLAPI_Serialization_BitStream_SkipPadBits_"></span>

### SkipPadBits() [MLAPI_Serialization_BitStream_SkipPadBits]

<div class="markdown level1 summary" markdown="1">

Reads zeros until the the stream is byte aligned

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public void SkipPadBits()

<span id="MLAPI_Serialization_BitStream_ToArray_"></span>

### ToArray() [MLAPI_Serialization_BitStream_ToArray]

<div class="markdown level1 summary" markdown="1">

Creates a copy of the internal buffer. This only contains the used bytes

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public byte[] ToArray()

#### Returns [returns-6]

| Type                                      | Description                                 |
|-------------------------------------------|---------------------------------------------|
| <span class="xref">System.Byte</span>\[\] | A copy of used bytes in the internal buffer |

<span id="MLAPI_Serialization_BitStream_ToString_"></span>

### ToString() [MLAPI_Serialization_BitStream_ToString]

<div class="markdown level1 summary" markdown="1">

Returns hex encoded version of the buffer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    public override string ToString()

#### Returns [returns-7]

| Type                                    | Description                       |
|-----------------------------------------|-----------------------------------|
| <span class="xref">System.String</span> | Hex encoded version of the buffer |

#### Overrides [overrides-10]

<div markdown="1">

<span class="xref">System.Object.ToString()</span>

</div>

<span id="MLAPI_Serialization_BitStream_Write_"></span>

### Write(Byte\[\]) [MLAPI_Serialization_BitStream_Write_System_Byte___]

<div class="markdown level1 summary" markdown="1">

Write data from the given buffer to the internal stream buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-33]

    public void Write(byte[] buffer)

#### Parameters [parameters-11]

| Type                                      | Name                                      | Description           |
|-------------------------------------------|-------------------------------------------|-----------------------|
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span> | Buffer to write from. |

<span id="MLAPI_Serialization_BitStream_Write_"></span>

### Write(Byte\[\], Int32, Int32) [MLAPI_Serialization_BitStream_Write_System_Byte___System_Int32_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Write data from the given buffer to the internal stream buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-34]

    public override void Write(byte[] buffer, int offset, int count)

#### Parameters [parameters-12]

| Type                                      | Name                                      | Description                                                      |
|-------------------------------------------|-------------------------------------------|------------------------------------------------------------------|
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span> | Buffer to write from.                                            |
| <span class="xref">System.Int32</span>    | <span class="parametername">offset</span> | Offset in given buffer to start reading from.                    |
| <span class="xref">System.Int32</span>    | <span class="parametername">count</span>  | Amount of bytes to read copy from given buffer to stream buffer. |

#### Overrides [overrides-11]

<div markdown="1">

<span class="xref">System.IO.Stream.Write(System.Byte\[\], System.Int32,
System.Int32)</span>

</div>

<span id="MLAPI_Serialization_BitStream_WriteBit_"></span>

### WriteBit(Boolean) [MLAPI_Serialization_BitStream_WriteBit_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Write a single bit to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-35]

    public void WriteBit(bool bit)

#### Parameters [parameters-13]

| Type                                     | Name                                   | Description                                             |
|------------------------------------------|----------------------------------------|---------------------------------------------------------|
| <span class="xref">System.Boolean</span> | <span class="parametername">bit</span> | Value of the bit. True represents 1, False represents 0 |

<span id="MLAPI_Serialization_BitStream_WriteByte_"></span>

### WriteByte(Byte) [MLAPI_Serialization_BitStream_WriteByte_System_Byte_]

<div class="markdown level1 summary" markdown="1">

Write byte value to the internal stream buffer.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-36]

    public override void WriteByte(byte value)

#### Parameters [parameters-14]

| Type                                  | Name                                     | Description              |
|---------------------------------------|------------------------------------------|--------------------------|
| <span class="xref">System.Byte</span> | <span class="parametername">value</span> | The byte value to write. |

#### Overrides [overrides-12]

<div markdown="1">

<span class="xref">System.IO.Stream.WriteByte(System.Byte)</span>

</div>

### Implements [implements]

<div markdown="1">

<span class="xref">System.IDisposable</span>

</div>
