---  
id: Unity.Networking.Transport.DataStreamReader  
title: Unity.Networking.Transport.DataStreamReader  
---

<div class="markdown level0 summary">

The `DataStreamReader` class is the counterpart of the
`DataStreamWriter` class and can be be used to deserialize data which
was prepared with it.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct DataStreamReader

##### **Remarks**

<div class="markdown level0 remarks">

Simple usage example:

    using (var dataWriter = new DataStreamWriter(16, Allocator.Persistent))
    {
        dataWriter.Write(42);
        dataWriter.Write(1234);
        // Length is the actual amount of data inside the writer,
        // Capacity is the total amount.
        var dataReader = new DataStreamReader(dataWriter, 0, dataWriter.Length);
        var context = default(DataStreamReader.Context);
        var myFirstInt = dataReader.ReadInt(ref context);
        var mySecondInt = dataReader.ReadInt(ref context);
    }

The `DataStreamReader` carries the position of the read pointer inside
the struct, taking a copy of the reader will also copy the read
position. This includes passing the reader to a method by value instead
of by ref.

See the DataStreamWriter class for more information and examples.

</div>

## Constructors 

### DataStreamReader(NativeArray&lt;Byte&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public DataStreamReader(NativeArray<byte> array)

#### Parameters

| Type                                             | Name  | Description |
|--------------------------------------------------|-------|-------------|
| Unity.Collections.NativeArray&lt;System.Byte&gt; | array |             |

## Properties 

### HasFailedReads

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool HasFailedReads { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsCreated

<div class="markdown level1 summary">

True if the reader has been pointed to a valid buffer space. This would
be false if the reader was created with no arguments.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsCreated { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Length

<div class="markdown level1 summary">

The total size of the buffer space this reader is working with.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Length { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### GetBitsRead()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int GetBitsRead()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### GetBytesRead()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int GetBytesRead()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReadByte()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte ReadByte()

#### Returns

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

### ReadBytes(Byte\*, Int32)

<div class="markdown level1 summary">

Read and copy data to the memory location pointed to, an exception will
be thrown if it does not fit.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadBytes(byte *data, int length)

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| System.Byte\* | data   |             |
| System.Int32  | length |             |

#### Exceptions

| Type                               | Condition                                                                                          |
|------------------------------------|----------------------------------------------------------------------------------------------------|
| System.ArgumentOutOfRangeException | Thrown if the length will put the reader out of bounds based on the current read pointer position. |

### ReadBytes(NativeArray&lt;Byte&gt;)

<div class="markdown level1 summary">

Read and copy data into the given NativeArray of bytes, an exception
will be thrown if not enough bytes are available.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadBytes(NativeArray<byte> array)

#### Parameters

| Type                                             | Name  | Description |
|--------------------------------------------------|-------|-------------|
| Unity.Collections.NativeArray&lt;System.Byte&gt; | array |             |

### ReadFixedString(Byte\*, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort ReadFixedString(byte *data, int maxLength)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.Byte\* | data      |             |
| System.Int32  | maxLength |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### ReadFixedString128()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString128 ReadFixedString128()

#### Returns

| Type           | Description |
|----------------|-------------|
| FixedString128 |             |

### ReadFixedString32()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString32 ReadFixedString32()

#### Returns

| Type          | Description |
|---------------|-------------|
| FixedString32 |             |

### ReadFixedString4096()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString4096 ReadFixedString4096()

#### Returns

| Type            | Description |
|-----------------|-------------|
| FixedString4096 |             |

### ReadFixedString512()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString512 ReadFixedString512()

#### Returns

| Type           | Description |
|----------------|-------------|
| FixedString512 |             |

### ReadFixedString64()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString64 ReadFixedString64()

#### Returns

| Type          | Description |
|---------------|-------------|
| FixedString64 |             |

### ReadFloat()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float ReadFloat()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### ReadInt()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadInt()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReadIntNetworkByteOrder()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadIntNetworkByteOrder()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReadPackedFixedString128Delta(FixedString128, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString128 ReadPackedFixedString128Delta(FixedString128 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString128          | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| FixedString128 |             |

### ReadPackedFixedString32Delta(FixedString32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString32 ReadPackedFixedString32Delta(FixedString32 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString32           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| FixedString32 |             |

### ReadPackedFixedString4096Delta(FixedString4096, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString4096 ReadPackedFixedString4096Delta(FixedString4096 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString4096         | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| FixedString4096 |             |

### ReadPackedFixedString512Delta(FixedString512, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString512 ReadPackedFixedString512Delta(FixedString512 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString512          | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| FixedString512 |             |

### ReadPackedFixedString64Delta(FixedString64, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedString64 ReadPackedFixedString64Delta(FixedString64 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString64           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| FixedString64 |             |

### ReadPackedFixedStringDelta(Byte\*, Int32, Byte\*, UInt16, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort ReadPackedFixedStringDelta(byte *data, int maxLength, byte *baseData, ushort baseLength, NetworkCompressionModel model)

#### Parameters

| Type                    | Name       | Description |
|-------------------------|------------|-------------|
| System.Byte\*           | data       |             |
| System.Int32            | maxLength  |             |
| System.Byte\*           | baseData   |             |
| System.UInt16           | baseLength |             |
| NetworkCompressionModel | model      |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### ReadPackedFloat(NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float ReadPackedFloat(NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### ReadPackedFloatDelta(Single, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float ReadPackedFloatDelta(float baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Single           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### ReadPackedInt(NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadPackedInt(NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReadPackedIntDelta(Int32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReadPackedIntDelta(int baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int32            | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReadPackedUInt(NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadPackedUInt(NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ReadPackedUIntDelta(UInt32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadPackedUIntDelta(uint baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt32           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ReadRawBits(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadRawBits(int numbits)

#### Parameters

| Type         | Name    | Description |
|--------------|---------|-------------|
| System.Int32 | numbits |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ReadShort()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short ReadShort()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

### ReadShortNetworkByteOrder()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public short ReadShortNetworkByteOrder()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

### ReadUInt()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadUInt()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ReadUIntNetworkByteOrder()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint ReadUIntNetworkByteOrder()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ReadULong()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ReadULong()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ReadUShort()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort ReadUShort()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### ReadUShortNetworkByteOrder()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort ReadUShortNetworkByteOrder()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### SeekSet(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SeekSet(int pos)

#### Parameters

| Type         | Name | Description |
|--------------|------|-------------|
| System.Int32 | pos  |             |
