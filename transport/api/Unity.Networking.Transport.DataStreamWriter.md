<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Struct DataStreamWriter

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct DataStreamWriter
```

</div>

### Constructors

#### DataStreamWriter(NativeArray\<Byte\>)

<div class="markdown level1 summary">

Initializes a new instance of the DataStreamWriter struct with a
NativeArray{byte}

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public DataStreamWriter(NativeArray<byte> data)
```

</div>

##### Parameters

| Type                       | Name | Description                                           |
|----------------------------|------|-------------------------------------------------------|
| NativeArray\<System.Byte\> | data | The buffer we want to attach to our DataStreamWriter. |

#### DataStreamWriter(Byte\*, Int32)

<div class="markdown level1 summary">

Initializes a new instance of the DataStreamWriter struct with a memory
we don't own

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public DataStreamWriter(byte *data, int length)
```

</div>

##### Parameters

| Type          | Name   | Description         |
|---------------|--------|---------------------|
| System.Byte\* | data   | Pointer to the data |
| System.Int32  | length | Length of the data  |

#### DataStreamWriter(Int32, Allocator)

<div class="markdown level1 summary">

Initializes a new instance of the DataStreamWriter struct.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public DataStreamWriter(int length, Allocator allocator)
```

</div>

##### Parameters

| Type         | Name      | Description                      |
|--------------|-----------|----------------------------------|
| System.Int32 | length    | The length of the buffer.        |
| Allocator    | allocator | The used to allocate the memory. |

### Properties

#### Capacity

<div class="markdown level1 summary">

The total size of the data buffer, see Length for the size of space used
in the buffer.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int Capacity { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### HasFailedWrites

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool HasFailedWrites { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsCreated

<div class="markdown level1 summary">

True if there is a valid data buffer present. This would be false if the
writer was created with no arguments.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsCreated { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLittleEndian

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static readonly bool IsLittleEndian { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length

<div class="markdown level1 summary">

The size of the buffer used. See Capacity for the total size.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int Length { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### LengthInBits

<div class="markdown level1 summary">

The size of the buffer used in bits. See Length for the length in bytes.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int LengthInBits { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### AsNativeArray()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NativeArray<byte> AsNativeArray()
```

</div>

##### Returns

| Type                       | Description |
|----------------------------|-------------|
| NativeArray\<System.Byte\> |             |

#### Clear()

<div class="markdown level1 summary">

Moves the write position to the start of the data buffer used.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Clear()
```

</div>

#### Flush()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Flush()
```

</div>

#### WriteByte(Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteByte(byte value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteBytes(NativeArray\<Byte\>)

<div class="markdown level1 summary">

Copy NativeArray of bytes into the writers data buffer.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteBytes(NativeArray<byte> value)
```

</div>

##### Parameters

| Type                       | Name  | Description       |
|----------------------------|-------|-------------------|
| NativeArray\<System.Byte\> | value | Source byte array |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteBytes(Byte\*, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteBytes(byte *data, int bytes)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteFixedString128(FixedString128Bytes str)
```

</div>

##### Parameters

| Type                | Name | Description |
|---------------------|------|-------------|
| FixedString128Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString32(FixedString32Bytes)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteFixedString32(FixedString32Bytes str)
```

</div>

##### Parameters

| Type               | Name | Description |
|--------------------|------|-------------|
| FixedString32Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString4096(FixedString4096Bytes)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteFixedString4096(FixedString4096Bytes str)
```

</div>

##### Parameters

| Type                 | Name | Description |
|----------------------|------|-------------|
| FixedString4096Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString512(FixedString512Bytes)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteFixedString512(FixedString512Bytes str)
```

</div>

##### Parameters

| Type                | Name | Description |
|---------------------|------|-------------|
| FixedString512Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFixedString64(FixedString64Bytes)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteFixedString64(FixedString64Bytes str)
```

</div>

##### Parameters

| Type               | Name | Description |
|--------------------|------|-------------|
| FixedString64Bytes | str  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteFloat(Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteFloat(float value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Single | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteInt(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteInt(int value)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteIntNetworkByteOrder(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteIntNetworkByteOrder(int value)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteLong(Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteLong(long value)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WritePackedFixedString128Delta(FixedString128Bytes, FixedString128Bytes, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFixedString128Delta(FixedString128Bytes str, FixedString128Bytes baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFixedString32Delta(FixedString32Bytes str, FixedString32Bytes baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFixedString4096Delta(FixedString4096Bytes str, FixedString4096Bytes baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFixedString512Delta(FixedString512Bytes str, FixedString512Bytes baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFixedString64Delta(FixedString64Bytes str, FixedString64Bytes baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFloat(float value, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedFloatDelta(float value, float baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedInt(int value, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedIntDelta(int value, int baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedLong(long value, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedLongDelta(long value, long baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedUInt(uint value, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedUIntDelta(uint value, uint baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedULong(ulong value, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WritePackedULongDelta(ulong value, ulong baseline, NetworkCompressionModel model)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteRawBits(uint value, int numbits)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteShort(short value)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteShortNetworkByteOrder(Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteShortNetworkByteOrder(short value)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUInt(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteUInt(uint value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUIntNetworkByteOrder(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteUIntNetworkByteOrder(uint value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteULong(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteULong(ulong value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUShort(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteUShort(ushort value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WriteUShortNetworkByteOrder(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool WriteUShortNetworkByteOrder(ushort value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
