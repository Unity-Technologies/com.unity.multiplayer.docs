---  
id: Unity.Netcode.FastBufferReader  
title: Unity.Netcode.FastBufferReader  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

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

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct FastBufferReader : IDisposable
```

</div>

### Constructors

#### FastBufferReader(NativeArray\<Byte\>, Allocator, Int32, Int32)

<div class="markdown level1 summary">

Create a FastBufferReader from a NativeArray.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

The exception to this is when the allocator passed in is Allocator.None.
In this scenario, ownership of the data remains with the caller and the
reader will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader(NativeArray<byte> buffer, Allocator allocator, int length = -1, int offset = 0)
```

</div>

##### Parameters

| Type                       | Name      | Description |
|----------------------------|-----------|-------------|
| NativeArray\<System.Byte\> | buffer    |             |
| Allocator                  | allocator |             |
| System.Int32               | length    |             |
| System.Int32               | offset    |             |

#### FastBufferReader(ArraySegment\<Byte\>, Allocator, Int32, Int32)

<div class="markdown level1 summary">

Create a FastBufferReader from an ArraySegment.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

Allocator.None is not supported for byte\[\]. If you need this
functionality, use a fixed() block and ensure the FastBufferReader isn't
used outside that block.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader(ArraySegment<byte> buffer, Allocator allocator, int length = -1, int offset = 0)
```

</div>

##### Parameters

| Type                               | Name      | Description                                     |
|------------------------------------|-----------|-------------------------------------------------|
| System.ArraySegment\<System.Byte\> | buffer    | The buffer to copy from                         |
| Allocator                          | allocator | The allocator to use                            |
| System.Int32                       | length    | The number of bytes to copy (all if this is -1) |
| System.Int32                       | offset    | The offset of the buffer to start copying from  |

#### FastBufferReader(Byte\*, Allocator, Int32, Int32)

<div class="markdown level1 summary">

Create a FastBufferReader from an existing byte buffer.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

The exception to this is when the allocator passed in is Allocator.None.
In this scenario, ownership of the data remains with the caller and the
reader will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader(byte *buffer, Allocator allocator, int length, int offset = 0)
```

</div>

##### Parameters

| Type          | Name      | Description                                    |
|---------------|-----------|------------------------------------------------|
| System.Byte\* | buffer    | The buffer to copy from                        |
| Allocator     | allocator | The allocator to use                           |
| System.Int32  | length    | The number of bytes to copy                    |
| System.Int32  | offset    | The offset of the buffer to start copying from |

#### FastBufferReader(Byte\[\], Allocator, Int32, Int32)

<div class="markdown level1 summary">

Create a FastBufferReader from an existing byte array.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

Allocator.None is not supported for byte\[\]. If you need this
functionality, use a fixed() block and ensure the FastBufferReader isn't
used outside that block.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader(byte[] buffer, Allocator allocator, int length = -1, int offset = 0)
```

</div>

##### Parameters

| Type            | Name      | Description                                     |
|-----------------|-----------|-------------------------------------------------|
| System.Byte\[\] | buffer    | The buffer to copy from                         |
| Allocator       | allocator | The allocator to use                            |
| System.Int32    | length    | The number of bytes to copy (all if this is -1) |
| System.Int32    | offset    | The offset of the buffer to start copying from  |

#### FastBufferReader(FastBufferReader, Allocator, Int32, Int32)

<div class="markdown level1 summary">

Create a FastBufferReader from another existing FastBufferReader. This
is typically used when you want to change the allocator that a reader is
allocated to - for example, upgrading a Temp reader to a Persistent one
to be processed later.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

The exception to this is when the allocator passed in is Allocator.None.
In this scenario, ownership of the data remains with the caller and the
reader will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader(FastBufferReader reader, Allocator allocator, int length = -1, int offset = 0)
```

</div>

##### Parameters

| Type             | Name      | Description                                     |
|------------------|-----------|-------------------------------------------------|
| FastBufferReader | reader    | The reader to copy from                         |
| Allocator        | allocator | The allocator to use                            |
| System.Int32     | length    | The number of bytes to copy (all if this is -1) |
| System.Int32     | offset    | The offset of the buffer to start copying from  |

#### FastBufferReader(FastBufferWriter, Allocator, Int32, Int32)

<div class="markdown level1 summary">

Create a FastBufferReader from a FastBufferWriter.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

The exception to this is when the allocator passed in is Allocator.None.
In this scenario, ownership of the data remains with the caller and the
reader will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader(FastBufferWriter writer, Allocator allocator, int length = -1, int offset = 0)
```

</div>

##### Parameters

| Type             | Name      | Description                                     |
|------------------|-----------|-------------------------------------------------|
| FastBufferWriter | writer    | The writer to copy from                         |
| Allocator        | allocator | The allocator to use                            |
| System.Int32     | length    | The number of bytes to copy (all if this is -1) |
| System.Int32     | offset    | The offset of the buffer to start copying from  |

### Properties

#### IsInitialized

<div class="markdown level1 summary">

Gets a value indicating whether the reader has been initialized and a
handle allocated.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsInitialized { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length

<div class="markdown level1 summary">

Get the total length of the buffer

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

#### Position

<div class="markdown level1 summary">

Get the current read position

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int Position { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Dispose()

<div class="markdown level1 summary">

Frees the allocated buffer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Dispose()
```

</div>

#### EnterBitwiseContext()

<div class="markdown level1 summary">

Retrieve a BitReader to be able to perform bitwise operations on the
buffer. No bytewise operations can be performed on the buffer until
bitReader.Dispose() has been called. At the end of the operation,
FastBufferReader will remain byte-aligned.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public BitReader EnterBitwiseContext()
```

</div>

##### Returns

| Type      | Description |
|-----------|-------------|
| BitReader | A BitReader |

#### GetUnsafePtr()

<div class="markdown level1 summary">

Gets a direct pointer to the underlying buffer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *GetUnsafePtr()
```

</div>

##### Returns

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### GetUnsafePtrAtCurrentPosition()

<div class="markdown level1 summary">

Gets a direct pointer to the underlying buffer at the current read
position

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *GetUnsafePtrAtCurrentPosition()
```

</div>

##### Returns

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### ReadByte(out Byte)

<div class="markdown level1 summary">

Read a byte to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadByte(out byte value)
```

</div>

##### Parameters

| Type        | Name  | Description           |
|-------------|-------|-----------------------|
| System.Byte | value | Stores the read value |

#### ReadBytes(Byte\*, Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes to the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadBytes(byte *value, int size, int offset = 0)
```

</div>

##### Parameters

| Type          | Name   | Description                                       |
|---------------|--------|---------------------------------------------------|
| System.Byte\* | value  | Pointer to the destination buffer                 |
| System.Int32  | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32  | offset | Offset of the byte buffer to store into           |

#### ReadBytes(ref Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes from the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadBytes(ref byte[] value, int size, int offset = 0)
```

</div>

##### Parameters

| Type            | Name   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| System.Byte\[\] | value  | Pointer to the destination buffer                 |
| System.Int32    | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32    | offset | Offset of the byte buffer to store into           |

#### ReadByteSafe(out Byte)

<div class="markdown level1 summary">

Read a byte to the stream.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadByteSafe(out byte value)
```

</div>

##### Parameters

| Type        | Name  | Description           |
|-------------|-------|-----------------------|
| System.Byte | value | Stores the read value |

#### ReadBytesSafe(Byte\*, Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadBytesSafe(byte *value, int size, int offset = 0)
```

</div>

##### Parameters

| Type          | Name   | Description                                       |
|---------------|--------|---------------------------------------------------|
| System.Byte\* | value  | Pointer to the destination buffer                 |
| System.Int32  | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32  | offset | Offset of the byte buffer to store into           |

#### ReadBytesSafe(ref Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes from the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadBytesSafe(ref byte[] value, int size, int offset = 0)
```

</div>

##### Parameters

| Type            | Name   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| System.Byte\[\] | value  | Pointer to the destination buffer                 |
| System.Int32    | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32    | offset | Offset of the byte buffer to store into           |

#### ReadNetworkSerializable\<T\>(out T)

<div class="markdown level1 summary">

Read an INetworkSerializable

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadNetworkSerializable<T>(out T value)
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type | Name  | Description                   |
|------|-------|-------------------------------|
| T    | value | INetworkSerializable instance |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

##### Exceptions

| Type                           | Condition |
|--------------------------------|-----------|
| System.NotImplementedException |           |

#### ReadNetworkSerializable\<T\>(out T\[\])

<div class="markdown level1 summary">

Read an array of INetworkSerializables

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadNetworkSerializable<T>(out T[] value)
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type  | Name  | Description                   |
|-------|-------|-------------------------------|
| T\[\] | value | INetworkSerializable instance |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

##### Exceptions

| Type                           | Condition |
|--------------------------------|-----------|
| System.NotImplementedException |           |

#### ReadPartialValue\<T\>(out T, Int32, Int32)

<div class="markdown level1 summary">

Read a partial value. The value is zero-initialized and then the
specified number of bytes is read into it.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadPartialValue<T>(out T value, int bytesToRead, int offsetBytes = 0)
    where T : struct
```

</div>

##### Parameters

| Type         | Name        | Description                              |
|--------------|-------------|------------------------------------------|
| T            | value       | Value to read                            |
| System.Int32 | bytesToRead | Number of bytes                          |
| System.Int32 | offsetBytes | Offset into the value to write the bytes |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

##### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |
| System.OverflowException         |           |

#### ReadValue(out Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Color value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Color | value |             |

#### ReadValue(out Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Color[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Color\[\] | value |             |

#### ReadValue(out Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Color32 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Color32 | value |             |

#### ReadValue(out Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Color32[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Color32\[\] | value |             |

#### ReadValue(out Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Quaternion value)
```

</div>

##### Parameters

| Type       | Name  | Description |
|------------|-------|-------------|
| Quaternion | value |             |

#### ReadValue(out Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Quaternion[] value)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| Quaternion\[\] | value |             |

#### ReadValue(out Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Ray value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| Ray  | value |             |

#### ReadValue(out Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Ray[] value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Ray\[\] | value |             |

#### ReadValue(out Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Ray2D value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Ray2D | value |             |

#### ReadValue(out Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Ray2D[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Ray2D\[\] | value |             |

#### ReadValue(out String, Boolean)

<div class="markdown level1 summary">

Reads a string NOTE: ALLOCATES

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | Stores the read string                                                   |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### ReadValue(out Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Vector2 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector2 | value |             |

#### ReadValue(out Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Vector2[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector2\[\] | value |             |

#### ReadValue(out Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Vector3 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector3 | value |             |

#### ReadValue(out Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Vector3[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector3\[\] | value |             |

#### ReadValue(out Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Vector4 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector4 | value |             |

#### ReadValue(out Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue(out Vector4[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector4\[\] | value |             |

#### ReadValue\<T\>(out T, FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```

</div>

##### Parameters

| Type                      | Name   | Description |
|---------------------------|--------|-------------|
| T                         | value  |             |
| FastBufferWriter.ForEnums | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T, FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type                                    | Name   | Description |
|-----------------------------------------|--------|-------------|
| T                                       | value  |             |
| FastBufferWriter.ForNetworkSerializable | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T, FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```

</div>

##### Parameters

| Type                           | Name   | Description |
|--------------------------------|--------|-------------|
| T                              | value  |             |
| FastBufferWriter.ForPrimitives | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T, FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```

</div>

##### Parameters

| Type                        | Name   | Description |
|-----------------------------|--------|-------------|
| T                           | value  |             |
| FastBufferWriter.ForStructs | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```

</div>

##### Parameters

| Type                      | Name   | Description |
|---------------------------|--------|-------------|
| T\[\]                     | value  |             |
| FastBufferWriter.ForEnums | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type                                    | Name   | Description |
|-----------------------------------------|--------|-------------|
| T\[\]                                   | value  |             |
| FastBufferWriter.ForNetworkSerializable | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```

</div>

##### Parameters

| Type                           | Name   | Description |
|--------------------------------|--------|-------------|
| T\[\]                          | value  |             |
| FastBufferWriter.ForPrimitives | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```

</div>

##### Parameters

| Type                        | Name   | Description |
|-----------------------------|--------|-------------|
| T\[\]                       | value  |             |
| FastBufferWriter.ForStructs | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe(out Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Color value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Color | value |             |

#### ReadValueSafe(out Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Color[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Color\[\] | value |             |

#### ReadValueSafe(out Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Color32 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Color32 | value |             |

#### ReadValueSafe(out Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Color32[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Color32\[\] | value |             |

#### ReadValueSafe(out Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Quaternion value)
```

</div>

##### Parameters

| Type       | Name  | Description |
|------------|-------|-------------|
| Quaternion | value |             |

#### ReadValueSafe(out Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Quaternion[] value)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| Quaternion\[\] | value |             |

#### ReadValueSafe(out Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Ray value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| Ray  | value |             |

#### ReadValueSafe(out Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Ray[] value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Ray\[\] | value |             |

#### ReadValueSafe(out Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Ray2D value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Ray2D | value |             |

#### ReadValueSafe(out Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Ray2D[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Ray2D\[\] | value |             |

#### ReadValueSafe(out String, Boolean)

<div class="markdown level1 summary">

Reads a string. NOTE: ALLOCATES

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | Stores the read string                                                   |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### ReadValueSafe(out Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Vector2 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector2 | value |             |

#### ReadValueSafe(out Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Vector2[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector2\[\] | value |             |

#### ReadValueSafe(out Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Vector3 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector3 | value |             |

#### ReadValueSafe(out Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Vector3[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector3\[\] | value |             |

#### ReadValueSafe(out Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Vector4 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector4 | value |             |

#### ReadValueSafe(out Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe(out Vector4[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector4\[\] | value |             |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```

</div>

##### Parameters

| Type                      | Name   | Description |
|---------------------------|--------|-------------|
| T                         | value  |             |
| FastBufferWriter.ForEnums | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type                                    | Name   | Description |
|-----------------------------------------|--------|-------------|
| T                                       | value  |             |
| FastBufferWriter.ForNetworkSerializable | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```

</div>

##### Parameters

| Type                           | Name   | Description |
|--------------------------------|--------|-------------|
| T                              | value  |             |
| FastBufferWriter.ForPrimitives | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```

</div>

##### Parameters

| Type                        | Name   | Description |
|-----------------------------|--------|-------------|
| T                           | value  |             |
| FastBufferWriter.ForStructs | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```

</div>

##### Parameters

| Type                      | Name   | Description |
|---------------------------|--------|-------------|
| T\[\]                     | value  |             |
| FastBufferWriter.ForEnums | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type                                    | Name   | Description |
|-----------------------------------------|--------|-------------|
| T\[\]                                   | value  |             |
| FastBufferWriter.ForNetworkSerializable | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```

</div>

##### Parameters

| Type                           | Name   | Description |
|--------------------------------|--------|-------------|
| T\[\]                          | value  |             |
| FastBufferWriter.ForPrimitives | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```

</div>

##### Parameters

| Type                        | Name   | Description |
|-----------------------------|--------|-------------|
| T\[\]                       | value  |             |
| FastBufferWriter.ForStructs | unused |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### Seek(Int32)

<div class="markdown level1 summary">

Move the read position in the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Seek(int where)
```

</div>

##### Parameters

| Type         | Name  | Description                                                 |
|--------------|-------|-------------------------------------------------------------|
| System.Int32 | where | Absolute value to move the position to, truncated to Length |

#### ToArray()

<div class="markdown level1 summary">

Returns an array representation of the underlying byte buffer.
!!Allocates a new array!!

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte[] ToArray()
```

</div>

##### Returns

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

#### TryBeginRead(Int32)

<div class="markdown level1 summary">

Allows faster serialization by batching bounds checking. When you know
you will be reading multiple fields back-to-back and you know the total
size, you can call TryBeginRead() once on the total size, and then
follow it with calls to ReadValue() instead of ReadValueSafe() for
faster serialization.

Unsafe read operations will throw OverflowException in editor and
development builds if you go past the point you've marked using
TryBeginRead(). In release builds, OverflowException will not be thrown
for performance reasons, since the point of using TryBeginRead is to
avoid bounds checking in the following operations in release builds.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryBeginRead(int bytes)
```

</div>

##### Parameters

| Type         | Name  | Description             |
|--------------|-------|-------------------------|
| System.Int32 | bytes | Amount of bytes to read |

##### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | True if the read is allowed, false otherwise |

##### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

#### TryBeginReadValue\<T\>(in T)

<div class="markdown level1 summary">

Allows faster serialization by batching bounds checking. When you know
you will be reading multiple fields back-to-back and you know the total
size, you can call TryBeginRead() once on the total size, and then
follow it with calls to ReadValue() instead of ReadValueSafe() for
faster serialization.

Unsafe read operations will throw OverflowException in editor and
development builds if you go past the point you've marked using
TryBeginRead(). In release builds, OverflowException will not be thrown
for performance reasons, since the point of using TryBeginRead is to
avoid bounds checking in the following operations in release builds.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryBeginReadValue<T>(in T value)
    where T : struct
```

</div>

##### Parameters

| Type | Name  | Description                |
|------|-------|----------------------------|
| T    | value | The value you want to read |

##### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | True if the read is allowed, false otherwise |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

##### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

### Implements

<div>

System.IDisposable

</div>

 
