---  
id: Unity.Netcode.FastBufferWriter  
title: Unity.Netcode.FastBufferWriter  
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
public struct FastBufferWriter : IDisposable
```

</div>

### Constructors

#### FastBufferWriter(Int32, Allocator, Int32)

<div class="markdown level1 summary">

Create a FastBufferWriter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferWriter(int size, Allocator allocator, int maxSize = -1)
```

</div>

##### Parameters

| Type         | Name      | Description                                                                 |
|--------------|-----------|-----------------------------------------------------------------------------|
| System.Int32 | size      | Size of the buffer to create                                                |
| Allocator    | allocator | Allocator to use in creating it                                             |
| System.Int32 | maxSize   | Maximum size the buffer can grow to. If less than size, buffer cannot grow. |

### Properties

#### Capacity

<div class="markdown level1 summary">

The current total buffer size

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

#### IsInitialized

<div class="markdown level1 summary">

Gets a value indicating whether the writer has been initialized and a
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

The total amount of bytes that have been written to the stream

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

#### MaxCapacity

<div class="markdown level1 summary">

The maximum possible total buffer size

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int MaxCapacity { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Position

<div class="markdown level1 summary">

The current write position

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

#### CopyFrom(FastBufferWriter)

<div class="markdown level1 summary">

Copy the contents of another writer into this writer. The contents will
be copied from the beginning of the other writer to its current
position. They will be copied to this writer starting at this writer's
current position.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void CopyFrom(FastBufferWriter other)
```

</div>

##### Parameters

| Type             | Name  | Description       |
|------------------|-------|-------------------|
| FastBufferWriter | other | Writer to copy to |

#### CopyTo(FastBufferWriter)

<div class="markdown level1 summary">

Copy the contents of this writer into another writer. The contents will
be copied from the beginning of this writer to its current position.
They will be copied to the other writer starting at the other writer's
current position.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void CopyTo(FastBufferWriter other)
```

</div>

##### Parameters

| Type             | Name  | Description       |
|------------------|-------|-------------------|
| FastBufferWriter | other | Writer to copy to |

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

Retrieve a BitWriter to be able to perform bitwise operations on the
buffer. No bytewise operations can be performed on the buffer until
bitWriter.Dispose() has been called. At the end of the operation,
FastBufferWriter will remain byte-aligned.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public BitWriter EnterBitwiseContext()
```

</div>

##### Returns

| Type      | Description |
|-----------|-------------|
| BitWriter | A BitWriter |

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

#### GetWriteSize(String, Boolean)

<div class="markdown level1 summary">

Get the required size to write a string

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetWriteSize(string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### GetWriteSize\<T\>()

<div class="markdown level1 summary">

Get the size required to write an unmanaged value of type T

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetWriteSize<T>()
    where T : struct
```

</div>

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### GetWriteSize\<T\>(in T)

<div class="markdown level1 summary">

Get the size required to write an unmanaged value

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetWriteSize<T>(in T value)
    where T : struct
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### GetWriteSize\<T\>(T\[\], Int32, Int32)

<div class="markdown level1 summary">

Get the required size to write an unmanaged array

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetWriteSize<T>(T[] array, int count = -1, int offset = 0)
    where T : struct
```

</div>

##### Parameters

| Type         | Name   | Description                     |
|--------------|--------|---------------------------------|
| T\[\]        | array  | The array to write              |
| System.Int32 | count  | The amount of elements to write |
| System.Int32 | offset | Where in the array to start     |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### Seek(Int32)

<div class="markdown level1 summary">

Move the write position in the stream. Note that moving forward past the
current length will extend the buffer's Length value even if you don't
write.

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

| Type         | Name  | Description                                                   |
|--------------|-------|---------------------------------------------------------------|
| System.Int32 | where | Absolute value to move the position to, truncated to Capacity |

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

#### Truncate(Int32)

<div class="markdown level1 summary">

Truncate the stream by setting Length to the specified value. If
Position is greater than the specified value, it will be moved as well.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Truncate(int where = -1)
```

</div>

##### Parameters

| Type         | Name  | Description                                                         |
|--------------|-------|---------------------------------------------------------------------|
| System.Int32 | where | The value to truncate to. If -1, the current position will be used. |

#### TryBeginWrite(Int32)

<div class="markdown level1 summary">

Allows faster serialization by batching bounds checking. When you know
you will be writing multiple fields back-to-back and you know the total
size, you can call TryBeginWrite() once on the total size, and then
follow it with calls to WriteValue() instead of WriteValueSafe() for
faster serialization.

Unsafe write operations will throw OverflowException in editor and
development builds if you go past the point you've marked using
TryBeginWrite(). In release builds, OverflowException will not be thrown
for performance reasons, since the point of using TryBeginWrite is to
avoid bounds checking in the following operations in release builds.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryBeginWrite(int bytes)
```

</div>

##### Parameters

| Type         | Name  | Description              |
|--------------|-------|--------------------------|
| System.Int32 | bytes | Amount of bytes to write |

##### Returns

| Type           | Description                                   |
|----------------|-----------------------------------------------|
| System.Boolean | True if the write is allowed, false otherwise |

##### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

#### TryBeginWriteInternal(Int32)

<div class="markdown level1 summary">

Internal version of TryBeginWrite. Differs from TryBeginWrite only in
that it won't ever move the AllowedWriteMark backward.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryBeginWriteInternal(int bytes)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | bytes |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |

#### TryBeginWriteValue\<T\>(in T)

<div class="markdown level1 summary">

Allows faster serialization by batching bounds checking. When you know
you will be writing multiple fields back-to-back and you know the total
size, you can call TryBeginWrite() once on the total size, and then
follow it with calls to WriteValue() instead of WriteValueSafe() for
faster serialization.

Unsafe write operations will throw OverflowException in editor and
development builds if you go past the point you've marked using
TryBeginWrite(). In release builds, OverflowException will not be thrown
for performance reasons, since the point of using TryBeginWrite is to
avoid bounds checking in the following operations in release builds.
Instead, attempting to write past the marked position in release builds
will write to random memory and cause undefined behavior, likely
including instability and crashes.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryBeginWriteValue<T>(in T value)
    where T : struct
```

</div>

##### Parameters

| Type | Name  | Description                 |
|------|-------|-----------------------------|
| T    | value | The value you want to write |

##### Returns

| Type           | Description                                   |
|----------------|-----------------------------------------------|
| System.Boolean | True if the write is allowed, false otherwise |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

##### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

#### WriteByte(Byte)

<div class="markdown level1 summary">

Write a byte to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteByte(byte value)
```

</div>

##### Parameters

| Type        | Name  | Description    |
|-------------|-------|----------------|
| System.Byte | value | Value to write |

#### WriteBytes(Byte\*, Int32, Int32)

<div class="markdown level1 summary">

Write multiple bytes to the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBytes(byte *value, int size, int offset = 0)
```

</div>

##### Parameters

| Type          | Name   | Description                             |
|---------------|--------|-----------------------------------------|
| System.Byte\* | value  | Value to write                          |
| System.Int32  | size   | Number of bytes to write                |
| System.Int32  | offset | Offset into the buffer to begin writing |

#### WriteBytes(Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Write multiple bytes to the stream

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBytes(byte[] value, int size = -1, int offset = 0)
```

</div>

##### Parameters

| Type            | Name   | Description                             |
|-----------------|--------|-----------------------------------------|
| System.Byte\[\] | value  | Value to write                          |
| System.Int32    | size   | Number of bytes to write                |
| System.Int32    | offset | Offset into the buffer to begin writing |

#### WriteByteSafe(Byte)

<div class="markdown level1 summary">

Write a byte to the stream.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteByteSafe(byte value)
```

</div>

##### Parameters

| Type        | Name  | Description    |
|-------------|-------|----------------|
| System.Byte | value | Value to write |

#### WriteBytesSafe(Byte\*, Int32, Int32)

<div class="markdown level1 summary">

Write multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBytesSafe(byte *value, int size, int offset = 0)
```

</div>

##### Parameters

| Type          | Name   | Description                             |
|---------------|--------|-----------------------------------------|
| System.Byte\* | value  | Value to write                          |
| System.Int32  | size   | Number of bytes to write                |
| System.Int32  | offset | Offset into the buffer to begin writing |

#### WriteBytesSafe(Byte\[\], Int32, Int32)

<div class="markdown level1 summary">

Write multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBytesSafe(byte[] value, int size = -1, int offset = 0)
```

</div>

##### Parameters

| Type            | Name   | Description                             |
|-----------------|--------|-----------------------------------------|
| System.Byte\[\] | value  | Value to write                          |
| System.Int32    | size   | Number of bytes to write                |
| System.Int32    | offset | Offset into the buffer to begin writing |

#### WriteNetworkSerializable\<T\>(in T)

<div class="markdown level1 summary">

Write an INetworkSerializable

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteNetworkSerializable<T>(in T value)
    where T : INetworkSerializable
```

</div>

##### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | The value to write |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### WriteNetworkSerializable\<T\>(T\[\], Int32, Int32)

<div class="markdown level1 summary">

Write an array of INetworkSerializables

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteNetworkSerializable<T>(T[] array, int count = -1, int offset = 0)
    where T : INetworkSerializable
```

</div>

##### Parameters

| Type         | Name   | Description        |
|--------------|--------|--------------------|
| T\[\]        | array  | The value to write |
| System.Int32 | count  |                    |
| System.Int32 | offset |                    |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### WritePartialValue\<T\>(T, Int32, Int32)

<div class="markdown level1 summary">

Write a partial value. The specified number of bytes is written from the
value and the rest is ignored.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WritePartialValue<T>(T value, int bytesToWrite, int offsetBytes = 0)
    where T : struct
```

</div>

##### Parameters

| Type         | Name         | Description                                      |
|--------------|--------------|--------------------------------------------------|
| T            | value        | Value to write                                   |
| System.Int32 | bytesToWrite | Number of bytes                                  |
| System.Int32 | offsetBytes  | Offset into the value to begin reading the bytes |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

##### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |
| System.OverflowException         |           |

#### WriteValue(in Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Color value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Color | value |             |

#### WriteValue(Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Color[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Color\[\] | value |             |

#### WriteValue(in Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Color32 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Color32 | value |             |

#### WriteValue(Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Color32[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Color32\[\] | value |             |

#### WriteValue(in Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Quaternion value)
```

</div>

##### Parameters

| Type       | Name  | Description |
|------------|-------|-------------|
| Quaternion | value |             |

#### WriteValue(Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Quaternion[] value)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| Quaternion\[\] | value |             |

#### WriteValue(in Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Ray value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| Ray  | value |             |

#### WriteValue(Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Ray[] value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Ray\[\] | value |             |

#### WriteValue(in Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Ray2D value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Ray2D | value |             |

#### WriteValue(Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Ray2D[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Ray2D\[\] | value |             |

#### WriteValue(String, Boolean)

<div class="markdown level1 summary">

Writes a string

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### WriteValue(in Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Vector2 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector2 | value |             |

#### WriteValue(Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Vector2[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector2\[\] | value |             |

#### WriteValue(in Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Vector3 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector3 | value |             |

#### WriteValue(Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Vector3[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector3\[\] | value |             |

#### WriteValue(in Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(in Vector4 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector4 | value |             |

#### WriteValue(Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue(Vector4[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector4\[\] | value |             |

#### WriteValue\<T\>(in T, FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### WriteValue\<T\>(in T, FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
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

#### WriteValue\<T\>(in T, FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### WriteValue\<T\>(in T, FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
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

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

#### WriteValueSafe(in Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Color value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Color | value |             |

#### WriteValueSafe(Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Color[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Color\[\] | value |             |

#### WriteValueSafe(in Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Color32 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Color32 | value |             |

#### WriteValueSafe(Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Color32[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Color32\[\] | value |             |

#### WriteValueSafe(in Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Quaternion value)
```

</div>

##### Parameters

| Type       | Name  | Description |
|------------|-------|-------------|
| Quaternion | value |             |

#### WriteValueSafe(Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Quaternion[] value)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| Quaternion\[\] | value |             |

#### WriteValueSafe(in Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Ray value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| Ray  | value |             |

#### WriteValueSafe(Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Ray[] value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Ray\[\] | value |             |

#### WriteValueSafe(in Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Ray2D value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Ray2D | value |             |

#### WriteValueSafe(Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Ray2D[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Ray2D\[\] | value |             |

#### WriteValueSafe(String, Boolean)

<div class="markdown level1 summary">

Writes a string

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### WriteValueSafe(in Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Vector2 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector2 | value |             |

#### WriteValueSafe(Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Vector2[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector2\[\] | value |             |

#### WriteValueSafe(in Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Vector3 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector3 | value |             |

#### WriteValueSafe(Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Vector3[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector3\[\] | value |             |

#### WriteValueSafe(in Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(in Vector4 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector4 | value |             |

#### WriteValueSafe(Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe(Vector4[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector4\[\] | value |             |

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
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

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
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

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

### Implements

<div>

System.IDisposable

</div>

 
