---
id: Unity.Networking.Transport.DataStreamReader
title: Unity.Networking.Transport.DataStreamReader
---


# Struct DataStreamReader


The `DataStreamReader` class is the counterpart of the
`DataStreamWriter` class and can be be used to deserialize data which
was prepared with it.






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct DataStreamReader
```



##### **Remarks**


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



### Constructors

#### DataStreamReader(NativeArray\<Byte\>)







##### Declaration


``` lang-csharp
public DataStreamReader(NativeArray<byte> array)
```



##### Parameters

| Type                       | Name  | Description |
|----------------------------|-------|-------------|
| NativeArray\<System.Byte\> | array |             |

#### DataStreamReader(Byte\*, Int32)







##### Declaration


``` lang-csharp
public DataStreamReader(byte *data, int length)
```



##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| System.Byte\* | data   |             |
| System.Int32  | length |             |

### Properties

#### HasFailedReads







##### Declaration


``` lang-csharp
public readonly bool HasFailedReads { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsCreated


True if the reader has been pointed to a valid buffer space. This would
be false if the reader was created with no arguments.






##### Declaration


``` lang-csharp
public readonly bool IsCreated { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLittleEndian







##### Declaration


``` lang-csharp
public readonly bool IsLittleEndian { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length


The total size of the buffer space this reader is working with.






##### Declaration


``` lang-csharp
public readonly int Length { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### GetBitsRead()







##### Declaration


``` lang-csharp
public int GetBitsRead()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### GetBytesRead()







##### Declaration


``` lang-csharp
public int GetBytesRead()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReadByte()







##### Declaration


``` lang-csharp
public byte ReadByte()
```



##### Returns

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

#### ReadBytes(NativeArray\<Byte\>)


Read and copy data into the given NativeArray of bytes, an exception
will be thrown if not enough bytes are available.






##### Declaration


``` lang-csharp
public void ReadBytes(NativeArray<byte> array)
```



##### Parameters

| Type                       | Name  | Description |
|----------------------------|-------|-------------|
| NativeArray\<System.Byte\> | array |             |

#### ReadBytes(Byte\*, Int32)


Read and copy data to the memory location pointed to, an exception will
be thrown if it does not fit.






##### Declaration


``` lang-csharp
public void ReadBytes(byte *data, int length)
```



##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| System.Byte\* | data   |             |
| System.Int32  | length |             |

##### Exceptions

| Type                               | Condition                                                                                          |
|------------------------------------|----------------------------------------------------------------------------------------------------|
| System.ArgumentOutOfRangeException | Thrown if the length will put the reader out of bounds based on the current read pointer position. |

#### ReadFixedString(Byte\*, Int32)







##### Declaration


``` lang-csharp
public ushort ReadFixedString(byte *data, int maxLength)
```



##### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.Byte\* | data      |             |
| System.Int32  | maxLength |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### ReadFixedString128()







##### Declaration


``` lang-csharp
public FixedString128Bytes ReadFixedString128()
```



##### Returns

| Type                | Description |
|---------------------|-------------|
| FixedString128Bytes |             |

#### ReadFixedString32()







##### Declaration


``` lang-csharp
public FixedString32Bytes ReadFixedString32()
```



##### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString32Bytes |             |

#### ReadFixedString4096()







##### Declaration


``` lang-csharp
public FixedString4096Bytes ReadFixedString4096()
```



##### Returns

| Type                 | Description |
|----------------------|-------------|
| FixedString4096Bytes |             |

#### ReadFixedString512()







##### Declaration


``` lang-csharp
public FixedString512Bytes ReadFixedString512()
```



##### Returns

| Type                | Description |
|---------------------|-------------|
| FixedString512Bytes |             |

#### ReadFixedString64()







##### Declaration


``` lang-csharp
public FixedString64Bytes ReadFixedString64()
```



##### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString64Bytes |             |

#### ReadFloat()







##### Declaration


``` lang-csharp
public float ReadFloat()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### ReadInt()







##### Declaration


``` lang-csharp
public int ReadInt()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReadIntNetworkByteOrder()







##### Declaration


``` lang-csharp
public int ReadIntNetworkByteOrder()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReadLong()







##### Declaration


``` lang-csharp
public long ReadLong()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### ReadPackedFixedString128Delta(FixedString128Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public FixedString128Bytes ReadPackedFixedString128Delta(FixedString128Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString128Bytes     | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type                | Description |
|---------------------|-------------|
| FixedString128Bytes |             |

#### ReadPackedFixedString32Delta(FixedString32Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public FixedString32Bytes ReadPackedFixedString32Delta(FixedString32Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString32Bytes      | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString32Bytes |             |

#### ReadPackedFixedString4096Delta(FixedString4096Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public FixedString4096Bytes ReadPackedFixedString4096Delta(FixedString4096Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString4096Bytes    | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type                 | Description |
|----------------------|-------------|
| FixedString4096Bytes |             |

#### ReadPackedFixedString512Delta(FixedString512Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public FixedString512Bytes ReadPackedFixedString512Delta(FixedString512Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString512Bytes     | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type                | Description |
|---------------------|-------------|
| FixedString512Bytes |             |

#### ReadPackedFixedString64Delta(FixedString64Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public FixedString64Bytes ReadPackedFixedString64Delta(FixedString64Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString64Bytes      | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString64Bytes |             |

#### ReadPackedFixedStringDelta(Byte\*, Int32, Byte\*, UInt16, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public ushort ReadPackedFixedStringDelta(byte *data, int maxLength, byte *baseData, ushort baseLength, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name       | Description |
|-------------------------|------------|-------------|
| System.Byte\*           | data       |             |
| System.Int32            | maxLength  |             |
| System.Byte\*           | baseData   |             |
| System.UInt16           | baseLength |             |
| NetworkCompressionModel | model      |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### ReadPackedFloat(NetworkCompressionModel)







##### Declaration


``` lang-csharp
public float ReadPackedFloat(NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### ReadPackedFloatDelta(Single, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public float ReadPackedFloatDelta(float baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Single           | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### ReadPackedInt(NetworkCompressionModel)







##### Declaration


``` lang-csharp
public int ReadPackedInt(NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReadPackedIntDelta(Int32, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public int ReadPackedIntDelta(int baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int32            | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReadPackedLong(NetworkCompressionModel)







##### Declaration


``` lang-csharp
public long ReadPackedLong(NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### ReadPackedLongDelta(Int64, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public long ReadPackedLongDelta(long baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int64            | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### ReadPackedUInt(NetworkCompressionModel)







##### Declaration


``` lang-csharp
public uint ReadPackedUInt(NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### ReadPackedUIntDelta(UInt32, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public uint ReadPackedUIntDelta(uint baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt32           | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### ReadPackedULong(NetworkCompressionModel)







##### Declaration


``` lang-csharp
public ulong ReadPackedULong(NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| NetworkCompressionModel | model |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ReadPackedULongDelta(UInt64, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public ulong ReadPackedULongDelta(ulong baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt64           | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ReadRawBits(Int32)







##### Declaration


``` lang-csharp
public uint ReadRawBits(int numbits)
```



##### Parameters

| Type         | Name    | Description |
|--------------|---------|-------------|
| System.Int32 | numbits |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### ReadShort()







##### Declaration


``` lang-csharp
public short ReadShort()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

#### ReadShortNetworkByteOrder()







##### Declaration


``` lang-csharp
public short ReadShortNetworkByteOrder()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

#### ReadUInt()







##### Declaration


``` lang-csharp
public uint ReadUInt()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### ReadUIntNetworkByteOrder()







##### Declaration


``` lang-csharp
public uint ReadUIntNetworkByteOrder()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### ReadULong()







##### Declaration


``` lang-csharp
public ulong ReadULong()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ReadUShort()







##### Declaration


``` lang-csharp
public ushort ReadUShort()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### ReadUShortNetworkByteOrder()







##### Declaration


``` lang-csharp
public ushort ReadUShortNetworkByteOrder()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### SeekSet(Int32)







##### Declaration


``` lang-csharp
public void SeekSet(int pos)
```



##### Parameters

| Type         | Name | Description |
|--------------|------|-------------|
| System.Int32 | pos  |             |



