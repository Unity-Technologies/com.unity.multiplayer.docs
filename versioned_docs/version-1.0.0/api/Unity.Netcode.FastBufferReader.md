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

``` lang-csharp
public struct FastBufferReader : IDisposable
```

## 

### FastBufferReader(NativeArray\&lt;Byte&gt;, Allocator, Int32, Int32)

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

#### Declaration

``` lang-csharp
public FastBufferReader(NativeArray<byte> buffer, Allocator allocator, int length = -1, int offset = 0)
```

#### Parameters

| Type                       | Name      | Description |
|----------------------------|-----------|-------------|
| NativeArray\&lt;System.Byte&gt; | buffer    |             |
| Allocator                  | allocator |             |
| System.Int32               | length    |             |
| System.Int32               | offset    |             |

### FastBufferReader(ArraySegment\&lt;Byte&gt;, Allocator, Int32, Int32)

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

#### Declaration

``` lang-csharp
public FastBufferReader(ArraySegment<byte> buffer, Allocator allocator, int length = -1, int offset = 0)
```

#### Parameters

| Type                               | Name      | Description                                     |
|------------------------------------|-----------|-------------------------------------------------|
| System.ArraySegment\&lt;System.Byte&gt; | buffer    | The buffer to copy from                         |
| Allocator                          | allocator | The allocator to use                            |
| System.Int32                       | length    | The number of bytes to copy (all if this is -1) |
| System.Int32                       | offset    | The offset of the buffer to start copying from  |

### FastBufferReader(Byte\*, Allocator, Int32, Int32)

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

#### Declaration

``` lang-csharp
public FastBufferReader(byte *buffer, Allocator allocator, int length, int offset = 0)
```

#### Parameters

| Type          | Name      | Description                                    |
|---------------|-----------|------------------------------------------------|
| System.Byte\* | buffer    | The buffer to copy from                        |
| Allocator     | allocator | The allocator to use                           |
| System.Int32  | length    | The number of bytes to copy                    |
| System.Int32  | offset    | The offset of the buffer to start copying from |

### FastBufferReader(Byte\[\], Allocator, Int32, Int32)

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

#### Declaration

``` lang-csharp
public FastBufferReader(byte[] buffer, Allocator allocator, int length = -1, int offset = 0)
```

#### Parameters

| Type            | Name      | Description                                     |
|-----------------|-----------|-------------------------------------------------|
| System.Byte\[\] | buffer    | The buffer to copy from                         |
| Allocator       | allocator | The allocator to use                            |
| System.Int32    | length    | The number of bytes to copy (all if this is -1) |
| System.Int32    | offset    | The offset of the buffer to start copying from  |

### FastBufferReader(FastBufferWriter, Allocator, Int32, Int32)

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

#### Declaration

``` lang-csharp
public FastBufferReader(FastBufferWriter writer, Allocator allocator, int length = -1, int offset = 0)
```

#### Parameters

| Type             | Name      | Description                                     |
|------------------|-----------|-------------------------------------------------|
| FastBufferWriter | writer    | The writer to copy from                         |
| Allocator        | allocator | The allocator to use                            |
| System.Int32     | length    | The number of bytes to copy (all if this is -1) |
| System.Int32     | offset    | The offset of the buffer to start copying from  |

## 

### Length

<div class="markdown level1 summary">

Get the total length of the buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Length { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Position

<div class="markdown level1 summary">

Get the current read position

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Position { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Dispose()

<div class="markdown level1 summary">

Frees the allocated buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### EnterBitwiseContext()

<div class="markdown level1 summary">

Retrieve a BitReader to be able to perform bitwise operations on the
buffer. No bytewise operations can be performed on the buffer until
bitReader.Dispose() has been called. At the end of the operation,
FastBufferReader will remain byte-aligned.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public BitReader EnterBitwiseContext()
```

#### Returns

| Type      | Description |
|-----------|-------------|
| BitReader | A BitReader |

### GetUnsafePtr()

<div class="markdown level1 summary">

Gets a direct pointer to the underlying buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *GetUnsafePtr()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### GetUnsafePtrAtCurrentPosition()

<div class="markdown level1 summary">

Gets a direct pointer to the underlying buffer at the current read
position

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *GetUnsafePtrAtCurrentPosition()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### ReadByte(out Byte)

<div class="markdown level1 summary">

Read a byte to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadByte(out byte value)
```

#### Parameters

| Type        | Name  | Description           |
|-------------|-------|-----------------------|
| System.Byte | value | Stores the read value |

### ReadBytes(Byte\*, Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBytes(byte *value, int size, int offset = 0)
```

#### Parameters

| Type          | Name   | Description                                       |
|---------------|--------|---------------------------------------------------|
| System.Byte\* | value  | Pointer to the destination buffer                 |
| System.Int32  | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32  | offset | Offset of the byte buffer to store into           |

### ReadBytes(ref Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes from the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBytes(ref byte[] value, int size, int offset = 0)
```

#### Parameters

| Type            | Name   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| System.Byte\[\] | value  | Pointer to the destination buffer                 |
| System.Int32    | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32    | offset | Offset of the byte buffer to store into           |

### ReadByteSafe(out Byte)

<div class="markdown level1 summary">

Read a byte to the stream.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadByteSafe(out byte value)
```

#### Parameters

| Type        | Name  | Description           |
|-------------|-------|-----------------------|
| System.Byte | value | Stores the read value |

### ReadBytesSafe(Byte\*, Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBytesSafe(byte *value, int size, int offset = 0)
```

#### Parameters

| Type          | Name   | Description                                       |
|---------------|--------|---------------------------------------------------|
| System.Byte\* | value  | Pointer to the destination buffer                 |
| System.Int32  | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32  | offset | Offset of the byte buffer to store into           |

### ReadBytesSafe(ref Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Read multiple bytes from the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadBytesSafe(ref byte[] value, int size, int offset = 0)
```

#### Parameters

| Type            | Name   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| System.Byte\[\] | value  | Pointer to the destination buffer                 |
| System.Int32    | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32    | offset | Offset of the byte buffer to store into           |

### ReadNetworkSerializable\&lt;T&gt;(out T)

<div class="markdown level1 summary">

Read an INetworkSerializable

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadNetworkSerializable<T>(out T value)
    where T : INetworkSerializable, new()
```

#### Parameters

| Type | Name  | Description                   |
|------|-------|-------------------------------|
| T    | value | INetworkSerializable instance |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### Exceptions

| Type                           | Condition |
|--------------------------------|-----------|
| System.NotImplementedException |           |

### ReadNetworkSerializable\&lt;T&gt;(out T\[\])

<div class="markdown level1 summary">

Read an array of INetworkSerializables

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadNetworkSerializable<T>(out T[] value)
    where T : INetworkSerializable, new()
```

#### Parameters

| Type  | Name  | Description                   |
|-------|-------|-------------------------------|
| T\[\] | value | INetworkSerializable instance |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### Exceptions

| Type                           | Condition |
|--------------------------------|-----------|
| System.NotImplementedException |           |

### ReadPartialValue\&lt;T&gt;(out T, Int32, Int32)

<div class="markdown level1 summary">

Read a partial value. The value is zero-initialized and then the
specified number of bytes is read into it.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadPartialValue<T>(out T value, int bytesToRead, int offsetBytes = 0)
    where T : struct
```

#### Parameters

| Type         | Name        | Description                              |
|--------------|-------------|------------------------------------------|
| T            | value       | Value to read                            |
| System.Int32 | bytesToRead | Number of bytes                          |
| System.Int32 | offsetBytes | Offset into the value to write the bytes |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |
| System.OverflowException         |           |

### ReadValue(out String, Boolean)

<div class="markdown level1 summary">

Reads a string NOTE: ALLOCATES

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadValue(out string s, bool oneByteChars = false)
```

#### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | Stores the read string                                                   |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

### ReadValue\&lt;T&gt;(out T)

<div class="markdown level1 summary">

Read a value of any unmanaged type to the buffer. It will be copied from
the buffer exactly as it existed in memory on the writing end.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadValue<T>(out T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description    |
|------|-------|----------------|
| T    | value | The read value |

#### Type Parameters

| Name | Description        |
|------|--------------------|
| T    | Any unmanaged type |

### ReadValue\&lt;T&gt;(out T\[\])

<div class="markdown level1 summary">

Writes an unmanaged array NOTE: ALLOCATES

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadValue<T>(out T[] array)
    where T : struct
```

#### Parameters

| Type  | Name  | Description           |
|-------|-------|-----------------------|
| T\[\] | array | Stores the read array |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### ReadValueSafe(out String, Boolean)

<div class="markdown level1 summary">

Reads a string. NOTE: ALLOCATES

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadValueSafe(out string s, bool oneByteChars = false)
```

#### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | Stores the read string                                                   |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

### ReadValueSafe\&lt;T&gt;(out T)

<div class="markdown level1 summary">

Read a value of any unmanaged type to the buffer. It will be copied from
the buffer exactly as it existed in memory on the writing end.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadValueSafe<T>(out T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description    |
|------|-------|----------------|
| T    | value | The read value |

#### Type Parameters

| Name | Description        |
|------|--------------------|
| T    | Any unmanaged type |

### ReadValueSafe\&lt;T&gt;(out T\[\])

<div class="markdown level1 summary">

Reads an unmanaged array NOTE: ALLOCATES

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ReadValueSafe<T>(out T[] array)
    where T : struct
```

#### Parameters

| Type  | Name  | Description           |
|-------|-------|-----------------------|
| T\[\] | array | Stores the read array |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Seek(Int32)

<div class="markdown level1 summary">

Move the read position in the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Seek(int where)
```

#### Parameters

| Type         | Name  | Description                                                 |
|--------------|-------|-------------------------------------------------------------|
| System.Int32 | where | Absolute value to move the position to, truncated to Length |

### ToArray()

<div class="markdown level1 summary">

Returns an array representation of the underlying byte buffer.
!!Allocates a new array!!

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte[] ToArray()
```

#### Returns

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### TryBeginRead(Int32)

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

#### Declaration

``` lang-csharp
public bool TryBeginRead(int bytes)
```

#### Parameters

| Type         | Name  | Description             |
|--------------|-------|-------------------------|
| System.Int32 | bytes | Amount of bytes to read |

#### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | True if the read is allowed, false otherwise |

#### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

### TryBeginReadValue\&lt;T&gt;(in T)

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

#### Declaration

``` lang-csharp
public bool TryBeginReadValue<T>(in T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description                |
|------|-------|----------------------------|
| T    | value | The value you want to read |

#### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | True if the read is allowed, false otherwise |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

### Implements

<div>

System.IDisposable

</div>
