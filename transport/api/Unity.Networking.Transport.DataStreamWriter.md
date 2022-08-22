---
id: Unity.Networking.Transport.DataStreamWriter
title: Unity.Networking.Transport.DataStreamWriter
---


# Struct DataStreamWriter







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
public struct DataStreamWriter
```



### Constructors

#### DataStreamWriter(NativeArray\<Byte\>)


Initializes a new instance of the DataStreamWriter struct with a
NativeArray{byte}






##### Declaration


``` lang-csharp
public DataStreamWriter(NativeArray<byte> data)
```



##### Parameters

| Type                       | Name | Description                                           |
|----------------------------|------|-------------------------------------------------------|
| NativeArray\<System.Byte\> | data | The buffer we want to attach to our DataStreamWriter. |

#### DataStreamWriter(Byte\*, Int32)


Initializes a new instance of the DataStreamWriter struct with a memory
we don't own






##### Declaration


``` lang-csharp
public DataStreamWriter(byte *data, int length)
```



##### Parameters

| Type          | Name   | Description         |
|---------------|--------|---------------------|
| System.Byte\* | data   | Pointer to the data |
| System.Int32  | length | Length of the data  |

#### DataStreamWriter(Int32, Allocator)


Initializes a new instance of the DataStreamWriter struct.






##### Declaration


``` lang-csharp
public DataStreamWriter(int length, Allocator allocator)
```



##### Parameters

| Type         | Name      | Description                      |
|--------------|-----------|----------------------------------|
| System.Int32 | length    | The length of the buffer.        |
| Allocator    | allocator | The used to allocate the memory. |

### Properties

#### Capacity


The total size of the data buffer, see Length for the size of space used
in the buffer.






##### Declaration


``` lang-csharp
public readonly int Capacity { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### HasFailedWrites







##### Declaration


``` lang-csharp
public readonly bool HasFailedWrites { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsCreated


True if there is a valid data buffer present. This would be false if the
writer was created with no arguments.






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
public static readonly bool IsLittleEndian { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length


The size of the buffer used. See Capacity for the total size.






##### Declaration


``` lang-csharp
public readonly int Length { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### LengthInBits


The size of the buffer used in bits. See Length for the length in bytes.






##### Declaration


``` lang-csharp
public readonly int LengthInBits { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### AsNativeArray()







##### Declaration


``` lang-csharp
public NativeArray<byte> AsNativeArray()
```



##### Returns

| Type                       | Description |
|----------------------------|-------------|
| NativeArray\<System.Byte\> |             |

#### Clear()


Moves the write position to the start of the data buffer used.






##### Declaration


``` lang-csharp
public void Clear()
```



#### Flush()







##### Declaration


``` lang-csharp
public void Flush()
```



#### WriteByte(Byte)







##### Declaration


``` lang-csharp
public bool WriteByte(byte value)
```



##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteBytes(NativeArray\<Byte\>)


Copy NativeArray of bytes into the writers data buffer.






##### Declaration


``` lang-csharp
public bool WriteBytes(NativeArray<byte> value)
```



##### Parameters

| Type                       | Name  | Description       |
|----------------------------|-------|-------------------|
| NativeArray\<System.Byte\> | value | Source byte array |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteBytes(Byte\*, Int32)







##### Declaration


``` lang-csharp
public bool WriteBytes(byte *data, int bytes)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Byte\* | data  |             |
| System.Int32  | bytes |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString128(FixedString128Bytes)







##### Declaration


``` lang-csharp
public bool WriteFixedString128(FixedString128Bytes str)
```



##### Parameters

| Type                | Name | Description |
|---------------------|------|-------------|
| FixedString128Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString32(FixedString32Bytes)







##### Declaration


``` lang-csharp
public bool WriteFixedString32(FixedString32Bytes str)
```



##### Parameters

| Type               | Name | Description |
|--------------------|------|-------------|
| FixedString32Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString4096(FixedString4096Bytes)







##### Declaration


``` lang-csharp
public bool WriteFixedString4096(FixedString4096Bytes str)
```



##### Parameters

| Type                 | Name | Description |
|----------------------|------|-------------|
| FixedString4096Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString512(FixedString512Bytes)







##### Declaration


``` lang-csharp
public bool WriteFixedString512(FixedString512Bytes str)
```



##### Parameters

| Type                | Name | Description |
|---------------------|------|-------------|
| FixedString512Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString64(FixedString64Bytes)







##### Declaration


``` lang-csharp
public bool WriteFixedString64(FixedString64Bytes str)
```



##### Parameters

| Type               | Name | Description |
|--------------------|------|-------------|
| FixedString64Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFloat(Single)







##### Declaration


``` lang-csharp
public bool WriteFloat(float value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Single | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteInt(Int32)







##### Declaration


``` lang-csharp
public bool WriteInt(int value)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteIntNetworkByteOrder(Int32)







##### Declaration


``` lang-csharp
public bool WriteIntNetworkByteOrder(int value)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteLong(Int64)







##### Declaration


``` lang-csharp
public bool WriteLong(long value)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFixedString128Delta(FixedString128Bytes, FixedString128Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFixedString128Delta(FixedString128Bytes str, FixedString128Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString128Bytes     | str      |             |
| FixedString128Bytes     | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFixedString32Delta(FixedString32Bytes, FixedString32Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFixedString32Delta(FixedString32Bytes str, FixedString32Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString32Bytes      | str      |             |
| FixedString32Bytes      | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFixedString4096Delta(FixedString4096Bytes, FixedString4096Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFixedString4096Delta(FixedString4096Bytes str, FixedString4096Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString4096Bytes    | str      |             |
| FixedString4096Bytes    | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFixedString512Delta(FixedString512Bytes, FixedString512Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFixedString512Delta(FixedString512Bytes str, FixedString512Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString512Bytes     | str      |             |
| FixedString512Bytes     | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFixedString64Delta(FixedString64Bytes, FixedString64Bytes, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFixedString64Delta(FixedString64Bytes str, FixedString64Bytes baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString64Bytes      | str      |             |
| FixedString64Bytes      | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFloat(Single, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFloat(float value, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.Single           | value |             |
| NetworkCompressionModel | model |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFloatDelta(Single, Single, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedFloatDelta(float value, float baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Single           | value    |             |
| System.Single           | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedInt(Int32, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedInt(int value, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.Int32            | value |             |
| NetworkCompressionModel | model |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedIntDelta(Int32, Int32, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedIntDelta(int value, int baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int32            | value    |             |
| System.Int32            | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedLong(Int64, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedLong(long value, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.Int64            | value |             |
| NetworkCompressionModel | model |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedLongDelta(Int64, Int64, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedLongDelta(long value, long baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int64            | value    |             |
| System.Int64            | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedUInt(UInt32, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedUInt(uint value, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.UInt32           | value |             |
| NetworkCompressionModel | model |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedUIntDelta(UInt32, UInt32, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedUIntDelta(uint value, uint baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt32           | value    |             |
| System.UInt32           | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedULong(UInt64, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedULong(ulong value, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.UInt64           | value |             |
| NetworkCompressionModel | model |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedULongDelta(UInt64, UInt64, NetworkCompressionModel)







##### Declaration


``` lang-csharp
public bool WritePackedULongDelta(ulong value, ulong baseline, NetworkCompressionModel model)
```



##### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt64           | value    |             |
| System.UInt64           | baseline |             |
| NetworkCompressionModel | model    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteRawBits(UInt32, Int32)







##### Declaration


``` lang-csharp
public bool WriteRawBits(uint value, int numbits)
```



##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.UInt32 | value   |             |
| System.Int32  | numbits |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteShort(Int16)







##### Declaration


``` lang-csharp
public bool WriteShort(short value)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteShortNetworkByteOrder(Int16)







##### Declaration


``` lang-csharp
public bool WriteShortNetworkByteOrder(short value)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUInt(UInt32)







##### Declaration


``` lang-csharp
public bool WriteUInt(uint value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUIntNetworkByteOrder(UInt32)







##### Declaration


``` lang-csharp
public bool WriteUIntNetworkByteOrder(uint value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteULong(UInt64)







##### Declaration


``` lang-csharp
public bool WriteULong(ulong value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUShort(UInt16)







##### Declaration


``` lang-csharp
public bool WriteUShort(ushort value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUShortNetworkByteOrder(UInt16)







##### Declaration


``` lang-csharp
public bool WriteUShortNetworkByteOrder(ushort value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |



