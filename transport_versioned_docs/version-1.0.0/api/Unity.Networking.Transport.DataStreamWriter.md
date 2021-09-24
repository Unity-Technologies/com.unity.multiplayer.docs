---  
id: Unity.Networking.Transport.DataStreamWriter  
title: Unity.Networking.Transport.DataStreamWriter  
---

<div class="markdown level0 summary">

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

    public struct DataStreamWriter

## Constructors 

### DataStreamWriter(Int32, Allocator)

<div class="markdown level1 summary">

Initializes a new instance of the DataStreamWriter struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public DataStreamWriter(int length, Allocator allocator)

#### Parameters

| Type                        | Name      | Description                                                  |
|-----------------------------|-----------|--------------------------------------------------------------|
| System.Int32                | length    | The length of the buffer.                                    |
| Unity.Collections.Allocator | allocator | The Unity.Collections.Allocator used to allocate the memory. |

### DataStreamWriter(NativeArray&lt;Byte&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public DataStreamWriter(NativeArray<byte> data)

#### Parameters

| Type                                             | Name | Description |
|--------------------------------------------------|------|-------------|
| Unity.Collections.NativeArray&lt;System.Byte&gt; | data |             |

## Properties 

### Capacity

<div class="markdown level1 summary">

The total size of the data buffer, see Length for the size of space used
in the buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Capacity { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### HasFailedWrites

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool HasFailedWrites { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsCreated

<div class="markdown level1 summary">

True if there is a valid data buffer present. This would be false if the
writer was created with no arguments.

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

The size of the buffer used. See Capacity for the total size.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Length { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### LengthInBits

<div class="markdown level1 summary">

The size of the buffer used in bits. See Length for the length in bytes.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int LengthInBits { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### AsNativeArray()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NativeArray<byte> AsNativeArray()

#### Returns

| Type                                             | Description |
|--------------------------------------------------|-------------|
| Unity.Collections.NativeArray&lt;System.Byte&gt; |             |

### Clear()

<div class="markdown level1 summary">

Moves the write position to the start of the data buffer used.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Clear()

### Flush()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Flush()

### WriteByte(Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteByte(byte value)

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteBytes(Byte\*, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteBytes(byte *data, int bytes)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Byte\* | data  |             |
| System.Int32  | bytes |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteBytes(NativeArray&lt;Byte&gt;)

<div class="markdown level1 summary">

Copy NativeArray of bytes into the writers data buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteBytes(NativeArray<byte> value)

#### Parameters

| Type                                             | Name  | Description       |
|--------------------------------------------------|-------|-------------------|
| Unity.Collections.NativeArray&lt;System.Byte&gt; | value | Source byte array |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteFixedString128(FixedString128)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteFixedString128(FixedString128 str)

#### Parameters

| Type           | Name | Description |
|----------------|------|-------------|
| FixedString128 | str  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteFixedString32(FixedString32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteFixedString32(FixedString32 str)

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| FixedString32 | str  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteFixedString4096(FixedString4096)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteFixedString4096(FixedString4096 str)

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| FixedString4096 | str  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteFixedString512(FixedString512)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteFixedString512(FixedString512 str)

#### Parameters

| Type           | Name | Description |
|----------------|------|-------------|
| FixedString512 | str  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteFixedString64(FixedString64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteFixedString64(FixedString64 str)

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| FixedString64 | str  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteFloat(Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteFloat(float value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Single | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteInt(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteInt(int value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteIntNetworkByteOrder(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteIntNetworkByteOrder(int value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteLong(Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteLong(long value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFixedString128Delta(FixedString128, FixedString128, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFixedString128Delta(FixedString128 str, FixedString128 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString128          | str      |             |
| FixedString128          | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFixedString32Delta(FixedString32, FixedString32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFixedString32Delta(FixedString32 str, FixedString32 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString32           | str      |             |
| FixedString32           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFixedString4096Delta(FixedString4096, FixedString4096, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFixedString4096Delta(FixedString4096 str, FixedString4096 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString4096         | str      |             |
| FixedString4096         | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFixedString512Delta(FixedString512, FixedString512, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFixedString512Delta(FixedString512 str, FixedString512 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString512          | str      |             |
| FixedString512          | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFixedString64Delta(FixedString64, FixedString64, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFixedString64Delta(FixedString64 str, FixedString64 baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| FixedString64           | str      |             |
| FixedString64           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFloat(Single, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFloat(float value, NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.Single           | value |             |
| NetworkCompressionModel | model |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedFloatDelta(Single, Single, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedFloatDelta(float value, float baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Single           | value    |             |
| System.Single           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedInt(Int32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedInt(int value, NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.Int32            | value |             |
| NetworkCompressionModel | model |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedIntDelta(Int32, Int32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedIntDelta(int value, int baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int32            | value    |             |
| System.Int32            | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedLong(Int64, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedLong(long value, NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.Int64            | value |             |
| NetworkCompressionModel | model |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedLongDelta(Int64, Int64, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedLongDelta(long value, long baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.Int64            | value    |             |
| System.Int64            | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedUInt(UInt32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedUInt(uint value, NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.UInt32           | value |             |
| NetworkCompressionModel | model |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedUIntDelta(UInt32, UInt32, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedUIntDelta(uint value, uint baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt32           | value    |             |
| System.UInt32           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedULong(UInt64, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedULong(ulong value, NetworkCompressionModel model)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| System.UInt64           | value |             |
| NetworkCompressionModel | model |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WritePackedULongDelta(UInt64, UInt64, NetworkCompressionModel)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WritePackedULongDelta(ulong value, ulong baseline, NetworkCompressionModel model)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| System.UInt64           | value    |             |
| System.UInt64           | baseline |             |
| NetworkCompressionModel | model    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteRawBits(UInt32, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteRawBits(uint value, int numbits)

#### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.UInt32 | value   |             |
| System.Int32  | numbits |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteShort(Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteShort(short value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteShortNetworkByteOrder(Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteShortNetworkByteOrder(short value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteUInt(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteUInt(uint value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteUIntNetworkByteOrder(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteUIntNetworkByteOrder(uint value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteULong(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteULong(ulong value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteUShort(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteUShort(ushort value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteUShortNetworkByteOrder(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool WriteUShortNetworkByteOrder(ushort value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
