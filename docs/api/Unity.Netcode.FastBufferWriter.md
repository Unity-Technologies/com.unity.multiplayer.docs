---
id: Unity.Netcode.FastBufferWriter
title: Unity.Netcode.FastBufferWriter
---

# Struct FastBufferWriter


Optimized class used for writing values into a byte stream
FastBufferReader BytePacker ByteUnpacker







##### Implements



System.IDisposable






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct FastBufferWriter : IDisposable
```



### Constructors

#### FastBufferWriter(Int32, Allocator, Int32)


Create a FastBufferWriter.






##### Declaration


``` lang-csharp
public FastBufferWriter(int size, Allocator allocator, int maxSize = -1)
```



##### Parameters

| Type         | Name      | Description                                                                 |
|--------------|-----------|-----------------------------------------------------------------------------|
| System.Int32 | size      | Size of the buffer to create                                                |
| Allocator    | allocator | Allocator to use in creating it                                             |
| System.Int32 | maxSize   | Maximum size the buffer can grow to. If less than size, buffer cannot grow. |

### Properties

#### Capacity


The current total buffer size






##### Declaration


``` lang-csharp
public readonly int Capacity { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### IsInitialized


Gets a value indicating whether the writer has been initialized and a
handle allocated.






##### Declaration


``` lang-csharp
public readonly bool IsInitialized { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length


The total amount of bytes that have been written to the stream






##### Declaration


``` lang-csharp
public readonly int Length { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxCapacity


The maximum possible total buffer size






##### Declaration


``` lang-csharp
public readonly int MaxCapacity { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Position


The current write position






##### Declaration


``` lang-csharp
public readonly int Position { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### CopyFrom(FastBufferWriter)


Copy the contents of another writer into this writer. The contents will
be copied from the beginning of the other writer to its current
position. They will be copied to this writer starting at this writer's
current position.






##### Declaration


``` lang-csharp
public void CopyFrom(FastBufferWriter other)
```



##### Parameters

| Type             | Name  | Description       |
|------------------|-------|-------------------|
| FastBufferWriter | other | Writer to copy to |

#### CopyTo(FastBufferWriter)


Copy the contents of this writer into another writer. The contents will
be copied from the beginning of this writer to its current position.
They will be copied to the other writer starting at the other writer's
current position.






##### Declaration


``` lang-csharp
public void CopyTo(FastBufferWriter other)
```



##### Parameters

| Type             | Name  | Description       |
|------------------|-------|-------------------|
| FastBufferWriter | other | Writer to copy to |

#### Dispose()


System.IDisposable implementation that frees the allocated buffer






##### Declaration


``` lang-csharp
public void Dispose()
```



#### EnterBitwiseContext()


Retrieve a BitWriter to be able to perform bitwise operations on the
buffer. No bytewise operations can be performed on the buffer until
bitWriter.Dispose() has been called. At the end of the operation,
FastBufferWriter will remain byte-aligned.






##### Declaration


``` lang-csharp
public BitWriter EnterBitwiseContext()
```



##### Returns

| Type      | Description |
|-----------|-------------|
| BitWriter | A BitWriter |

#### GetUnsafePtr()


Gets a direct pointer to the underlying buffer






##### Declaration


``` lang-csharp
public byte *GetUnsafePtr()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### GetUnsafePtrAtCurrentPosition()


Gets a direct pointer to the underlying buffer at the current read
position






##### Declaration


``` lang-csharp
public byte *GetUnsafePtrAtCurrentPosition()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### GetWriteSize(String, Boolean)


Get the required size to write a string






##### Declaration


``` lang-csharp
public static int GetWriteSize(string s, bool oneByteChars = false)
```



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


Get the size required to write an unmanaged value of type T






##### Declaration


``` lang-csharp
public static int GetWriteSize<T>()
    where T : struct
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### GetWriteSize\<T\>(in T)


Get the write size for a FixedString






##### Declaration


``` lang-csharp
public static int GetWriteSize<T>(in T value)
    where T : struct, INativeList<byte>, IUTF8Bytes
```



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

#### GetWriteSize\<T\>(in T, FastBufferWriter.ForStructs)


Get the write size for any general unmanaged value The ForStructs value
here makes this the lowest-priority overload so other versions will be
prioritized over this if they match






##### Declaration


``` lang-csharp
public static int GetWriteSize<T>(in T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct
```



##### Parameters

| Type                        | Name   | Description |
|-----------------------------|--------|-------------|
| T                           | value  |             |
| FastBufferWriter.ForStructs | unused |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### GetWriteSize\<T\>(T\[\], Int32, Int32)


Get the required size to write an unmanaged array






##### Declaration


``` lang-csharp
public static int GetWriteSize<T>(T[] array, int count = -1, int offset = 0)
    where T : struct
```



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


Move the write position in the stream. Note that moving forward past the
current length will extend the buffer's Length value even if you don't
write.






##### Declaration


``` lang-csharp
public void Seek(int where)
```



##### Parameters

| Type         | Name  | Description                                                   |
|--------------|-------|---------------------------------------------------------------|
| System.Int32 | where | Absolute value to move the position to, truncated to Capacity |

#### ToArray()


Returns an array representation of the underlying byte buffer.
!!Allocates a new array!!






##### Declaration


``` lang-csharp
public byte[] ToArray()
```



##### Returns

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

#### Truncate(Int32)


Truncate the stream by setting Length to the specified value. If
Position is greater than the specified value, it will be moved as well.






##### Declaration


``` lang-csharp
public void Truncate(int where = -1)
```



##### Parameters

| Type         | Name  | Description                                                         |
|--------------|-------|---------------------------------------------------------------------|
| System.Int32 | where | The value to truncate to. If -1, the current position will be used. |

#### TryBeginWrite(Int32)


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






##### Declaration


``` lang-csharp
public bool TryBeginWrite(int bytes)
```



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


Internal version of TryBeginWrite. Differs from TryBeginWrite only in
that it won't ever move the AllowedWriteMark backward.






##### Declaration


``` lang-csharp
public bool TryBeginWriteInternal(int bytes)
```



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






##### Declaration


``` lang-csharp
public bool TryBeginWriteValue<T>(in T value)
    where T : struct
```



##### Parameters

| Type | Name  | Description                                 |
|------|-------|---------------------------------------------|
| T    | value | The value of the type `T` you want to write |

##### Returns

| Type           | Description                                   |
|----------------|-----------------------------------------------|
| System.Boolean | True if the write is allowed, false otherwise |

##### Type Parameters

| Name | Description             |
|------|-------------------------|
| T    | The value type to write |

##### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

#### WriteByte(Byte)


Write a byte to the stream.






##### Declaration


``` lang-csharp
public void WriteByte(byte value)
```



##### Parameters

| Type        | Name  | Description    |
|-------------|-------|----------------|
| System.Byte | value | Value to write |

#### WriteBytes(Byte\*, Int32, Int32)


Write multiple bytes to the stream






##### Declaration


``` lang-csharp
public void WriteBytes(byte *value, int size, int offset = 0)
```



##### Parameters

| Type          | Name   | Description                             |
|---------------|--------|-----------------------------------------|
| System.Byte\* | value  | Value to write                          |
| System.Int32  | size   | Number of bytes to write                |
| System.Int32  | offset | Offset into the buffer to begin writing |

#### WriteBytes(Byte\[\], Int32, Int32)


Write multiple bytes to the stream






##### Declaration


``` lang-csharp
public void WriteBytes(byte[] value, int size = -1, int offset = 0)
```



##### Parameters

| Type            | Name   | Description                             |
|-----------------|--------|-----------------------------------------|
| System.Byte\[\] | value  | Value to write                          |
| System.Int32    | size   | Number of bytes to write                |
| System.Int32    | offset | Offset into the buffer to begin writing |

#### WriteByteSafe(Byte)


Write a byte to the stream.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteByteSafe(byte value)
```



##### Parameters

| Type        | Name  | Description    |
|-------------|-------|----------------|
| System.Byte | value | Value to write |

#### WriteBytesSafe(Byte\*, Int32, Int32)


Write multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteBytesSafe(byte *value, int size, int offset = 0)
```



##### Parameters

| Type          | Name   | Description                             |
|---------------|--------|-----------------------------------------|
| System.Byte\* | value  | Value to write                          |
| System.Int32  | size   | Number of bytes to write                |
| System.Int32  | offset | Offset into the buffer to begin writing |

#### WriteBytesSafe(Byte\[\], Int32, Int32)


Write multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteBytesSafe(byte[] value, int size = -1, int offset = 0)
```



##### Parameters

| Type            | Name   | Description                             |
|-----------------|--------|-----------------------------------------|
| System.Byte\[\] | value  | Value to write                          |
| System.Int32    | size   | Number of bytes to write                |
| System.Int32    | offset | Offset into the buffer to begin writing |

#### WriteNetworkSerializable\<T\>(in T)


Write an INetworkSerializable






##### Declaration


``` lang-csharp
public void WriteNetworkSerializable<T>(in T value)
    where T : INetworkSerializable
```



##### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | The value to write |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### WriteNetworkSerializable\<T\>(T\[\], Int32, Int32)


Write an array of INetworkSerializables






##### Declaration


``` lang-csharp
public void WriteNetworkSerializable<T>(T[] array, int count = -1, int offset = 0)
    where T : INetworkSerializable
```



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


Write a partial value. The specified number of bytes is written from the
value and the rest is ignored.






##### Declaration


``` lang-csharp
public void WritePartialValue<T>(T value, int bytesToWrite, int offsetBytes = 0)
    where T : struct
```



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


Write a Color






##### Declaration


``` lang-csharp
public void WriteValue(in Color value)
```



##### Parameters

| Type  | Name  | Description        |
|-------|-------|--------------------|
| Color | value | the value to write |

#### WriteValue(Color\[\])


Write a Color array






##### Declaration


``` lang-csharp
public void WriteValue(Color[] value)
```



##### Parameters

| Type      | Name  | Description         |
|-----------|-------|---------------------|
| Color\[\] | value | the values to write |

#### WriteValue(in Color32)


Write a Color32






##### Declaration


``` lang-csharp
public void WriteValue(in Color32 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Color32 | value | the value to write |

#### WriteValue(Color32\[\])


Write a Color32 array






##### Declaration


``` lang-csharp
public void WriteValue(Color32[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Color32\[\] | value | the values to write |

#### WriteValue(in Quaternion)


Write a Quaternion






##### Declaration


``` lang-csharp
public void WriteValue(in Quaternion value)
```



##### Parameters

| Type       | Name  | Description        |
|------------|-------|--------------------|
| Quaternion | value | the value to write |

#### WriteValue(Quaternion\[\])


Write a Quaternion array






##### Declaration


``` lang-csharp
public void WriteValue(Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description         |
|----------------|-------|---------------------|
| Quaternion\[\] | value | the values to write |

#### WriteValue(in Ray)


Write a Ray






##### Declaration


``` lang-csharp
public void WriteValue(in Ray value)
```



##### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| Ray  | value | the value to write |

#### WriteValue(Ray\[\])


Write a Ray array






##### Declaration


``` lang-csharp
public void WriteValue(Ray[] value)
```



##### Parameters

| Type    | Name  | Description         |
|---------|-------|---------------------|
| Ray\[\] | value | the values to write |

#### WriteValue(in Ray2D)


Write a Ray2D






##### Declaration


``` lang-csharp
public void WriteValue(in Ray2D value)
```



##### Parameters

| Type  | Name  | Description        |
|-------|-------|--------------------|
| Ray2D | value | the value to write |

#### WriteValue(Ray2D\[\])


Write a Ray2D array






##### Declaration


``` lang-csharp
public void WriteValue(Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description         |
|-----------|-------|---------------------|
| Ray2D\[\] | value | the values to write |

#### WriteValue(String, Boolean)


Writes a string






##### Declaration


``` lang-csharp
public void WriteValue(string s, bool oneByteChars = false)
```



##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### WriteValue(in Vector2)


Write a Vector2






##### Declaration


``` lang-csharp
public void WriteValue(in Vector2 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Vector2 | value | the value to write |

#### WriteValue(Vector2\[\])


Write a Vector2 array






##### Declaration


``` lang-csharp
public void WriteValue(Vector2[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Vector2\[\] | value | the values to write |

#### WriteValue(in Vector2Int)


Write a Vector2Int






##### Declaration


``` lang-csharp
public void WriteValue(in Vector2Int value)
```



##### Parameters

| Type       | Name  | Description        |
|------------|-------|--------------------|
| Vector2Int | value | the value to write |

#### WriteValue(Vector2Int\[\])


Write a Vector2Int array






##### Declaration


``` lang-csharp
public void WriteValue(Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description         |
|----------------|-------|---------------------|
| Vector2Int\[\] | value | the values to write |

#### WriteValue(in Vector3)


Write a Vector3






##### Declaration


``` lang-csharp
public void WriteValue(in Vector3 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Vector3 | value | the value to write |

#### WriteValue(Vector3\[\])


Write a Vector3 array






##### Declaration


``` lang-csharp
public void WriteValue(Vector3[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Vector3\[\] | value | the values to write |

#### WriteValue(in Vector3Int)


Write a Vector3Int






##### Declaration


``` lang-csharp
public void WriteValue(in Vector3Int value)
```



##### Parameters

| Type       | Name  | Description        |
|------------|-------|--------------------|
| Vector3Int | value | the value to write |

#### WriteValue(Vector3Int\[\])


Write a Vector3Int array






##### Declaration


``` lang-csharp
public void WriteValue(Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description        |
|----------------|-------|--------------------|
| Vector3Int\[\] | value | the value to write |

#### WriteValue(in Vector4)


Write a Vector4






##### Declaration


``` lang-csharp
public void WriteValue(in Vector4 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Vector4 | value | the value to write |

#### WriteValue(Vector4\[\])


Write a Vector4






##### Declaration


``` lang-csharp
public void WriteValue(Vector4[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Vector4\[\] | value | the values to write |

#### WriteValue\<T\>(in T, FastBufferWriter.ForEnums)


Write an enum value






##### Declaration


``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T                         | value  | The value to write                                                                     |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(in T, FastBufferWriter.ForFixedStrings)


Write a FixedString value. Writes only the part of the string that's
actually used. When calling TryBeginWrite, ensure you calculate the
write size correctly (preferably by calling
FastBufferWriter.GetWriteSize())






##### Declaration


``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                            |
|----------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                | value  | the value to write                                                                     |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(in T, FastBufferWriter.ForNetworkSerializable)


Write a NetworkSerializable value






##### Declaration


``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                       | value  | The value to write                                                                     |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(in T, FastBufferWriter.ForPrimitives)


Write a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.






##### Declaration


``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T                              | value  | The value to write                                                                     |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(in T, FastBufferWriter.ForStructs)


Write a struct






##### Declaration


``` lang-csharp
public void WriteValue<T>(in T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T                           | value  | The value to write                                                                     |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForEnums)


Write an enum array






##### Declaration


``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                     | value  | The values to write                                                                    |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForNetworkSerializable)


Write a NetworkSerializable array






##### Declaration


``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                                   | value  | The values to write                                                                    |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForPrimitives)


Write a primitive value array (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.






##### Declaration


``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                          | value  | The values to write                                                                    |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValue\<T\>(T\[\], FastBufferWriter.ForStructs)


Write a struct array






##### Declaration


``` lang-csharp
public void WriteValue<T>(T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                       | value  | The values to write                                                                    |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe(in Color)


Write a Color

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Color value)
```



##### Parameters

| Type  | Name  | Description        |
|-------|-------|--------------------|
| Color | value | the value to write |

#### WriteValueSafe(Color\[\])


Write a Collor array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Color[] value)
```



##### Parameters

| Type      | Name  | Description         |
|-----------|-------|---------------------|
| Color\[\] | value | the values to write |

#### WriteValueSafe(in Color32)


Write a Color32

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Color32 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Color32 | value | the value to write |

#### WriteValueSafe(Color32\[\])


Write a Color32 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Color32[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Color32\[\] | value | the values to write |

#### WriteValueSafe(in Quaternion)


Write a Quaternion

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Quaternion value)
```



##### Parameters

| Type       | Name  | Description        |
|------------|-------|--------------------|
| Quaternion | value | the value to write |

#### WriteValueSafe(Quaternion\[\])


Write a Quaternion array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description         |
|----------------|-------|---------------------|
| Quaternion\[\] | value | the values to write |

#### WriteValueSafe(in Ray)


Write a Ray

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Ray value)
```



##### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| Ray  | value | the value to write |

#### WriteValueSafe(Ray\[\])


Write a Ray array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Ray[] value)
```



##### Parameters

| Type    | Name  | Description         |
|---------|-------|---------------------|
| Ray\[\] | value | the values to write |

#### WriteValueSafe(in Ray2D)


Write a Ray2D

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Ray2D value)
```



##### Parameters

| Type  | Name  | Description        |
|-------|-------|--------------------|
| Ray2D | value | the value to write |

#### WriteValueSafe(Ray2D\[\])


Write a Ray2D array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description         |
|-----------|-------|---------------------|
| Ray2D\[\] | value | the values to write |

#### WriteValueSafe(String, Boolean)


Writes a string

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(string s, bool oneByteChars = false)
```



##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | The string to write                                                      |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### WriteValueSafe(in Vector2)


Write a Vector2

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Vector2 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Vector2 | value | the value to write |

#### WriteValueSafe(Vector2\[\])


Write a Vector2 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Vector2[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Vector2\[\] | value | the values to write |

#### WriteValueSafe(in Vector2Int)


Write a Vector2Int

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Vector2Int value)
```



##### Parameters

| Type       | Name  | Description        |
|------------|-------|--------------------|
| Vector2Int | value | the value to write |

#### WriteValueSafe(Vector2Int\[\])


Write a Vector2Int array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description         |
|----------------|-------|---------------------|
| Vector2Int\[\] | value | the values to write |

#### WriteValueSafe(in Vector3)


Write a Vector3

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Vector3 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Vector3 | value | the value to write |

#### WriteValueSafe(Vector3\[\])


Write a Vector3 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Vector3[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Vector3\[\] | value | the values to write |

#### WriteValueSafe(in Vector3Int)


Write a Vector3Int

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Vector3Int value)
```



##### Parameters

| Type       | Name  | Description        |
|------------|-------|--------------------|
| Vector3Int | value | the value to write |

#### WriteValueSafe(Vector3Int\[\])


Write a Vector3Int array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description         |
|----------------|-------|---------------------|
| Vector3Int\[\] | value | the values to write |

#### WriteValueSafe(in Vector4)


Write a Vector4

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(in Vector4 value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Vector4 | value | the value to write |

#### WriteValueSafe(Vector4\[\])


Write a Vector4 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe(Vector4[] value)
```



##### Parameters

| Type        | Name  | Description         |
|-------------|-------|---------------------|
| Vector4\[\] | value | the values to write |

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForEnums)


Write an enum value

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T                         | value  | The value to write                                                                     |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForFixedStrings)


Write a FixedString value. Writes only the part of the string that's
actually used.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                            |
|----------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                | value  | the value to write                                                                     |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForNetworkSerializable)


Write a NetworkSerializable value

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                       | value  | The value to write                                                                     |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForPrimitives)


Write a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T                              | value  | The value to write                                                                     |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(in T, FastBufferWriter.ForStructs)


Write a struct

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(in T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T                           | value  | The value to write                                                                     |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForEnums)


Write an enum array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                     | value  | The values to write                                                                    |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForNetworkSerializable)


Write a NetworkSerializable array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                                   | value  | The values to write                                                                    |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForPrimitives)


Write a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                          | value  | The value to write                                                                     |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### WriteValueSafe\<T\>(T\[\], FastBufferWriter.ForStructs)


Write a struct array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple writes at once by calling
TryBeginWrite.






##### Declaration


``` lang-csharp
public void WriteValueSafe<T>(T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                       | value  | The values to write                                                                    |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

### Implements



System.IDisposable





