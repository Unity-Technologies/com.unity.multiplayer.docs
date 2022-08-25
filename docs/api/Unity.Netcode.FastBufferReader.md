---
id: Unity.Netcode.FastBufferReader
title: Unity.Netcode.FastBufferReader
---

# Struct FastBufferReader


Optimized class used for reading values from a byte stream
FastBufferWriter BytePacker ByteUnpacker







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
public struct FastBufferReader : IDisposable
```



### Constructors

#### FastBufferReader(NativeArray\<Byte\>, Allocator, Int32, Int32, Allocator)


Create a FastBufferReader from a NativeArray.

A new buffer will be created using the given and the value will be
copied in. FastBufferReader will then own the data.

The exception to this is when the passed in is Allocator.None. In this
scenario, ownership of the data remains with the caller and the reader
will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory). This is
true, unless the param is explicitly set to i.e.: Allocator.Persistent
in which case it would allow the internal data to Persist for longer,
but the caller should manually call Dispose() when it is no longer
needed.






##### Declaration


``` lang-csharp
public FastBufferReader(NativeArray<byte> buffer, Allocator copyAllocator, int length = -1, int offset = 0, Allocator internalAllocator = null)
```



##### Parameters

| Type                       | Name              | Description                                                                                                                                                                      |
|----------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NativeArray\<System.Byte\> | buffer            |                                                                                                                                                                                  |
| Allocator                  | copyAllocator     | The allocator type used for internal data when copying an existing buffer if other than Allocator.None is specified, that memory will be owned by this FastBufferReader instance |
| System.Int32               | length            |                                                                                                                                                                                  |
| System.Int32               | offset            |                                                                                                                                                                                  |
| Allocator                  | internalAllocator | The allocator type used for internal data when this reader points directly at a buffer owned by someone else                                                                     |

#### FastBufferReader(ArraySegment\<Byte\>, Allocator, Int32, Int32)


Create a FastBufferReader from an ArraySegment.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

Allocator.None is not supported for byte\[\]. If you need this
functionality, use a fixed() block and ensure the FastBufferReader isn't
used outside that block.






##### Declaration


``` lang-csharp
public FastBufferReader(ArraySegment<byte> buffer, Allocator copyAllocator, int length = -1, int offset = 0)
```



##### Parameters

| Type                               | Name          | Description                                                                                                                                                                      |
|------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.ArraySegment\<System.Byte\> | buffer        | The buffer to copy from                                                                                                                                                          |
| Allocator                          | copyAllocator | The allocator type used for internal data when copying an existing buffer if other than Allocator.None is specified, that memory will be owned by this FastBufferReader instance |
| System.Int32                       | length        | The number of bytes to copy (all if this is -1)                                                                                                                                  |
| System.Int32                       | offset        | The offset of the buffer to start copying from                                                                                                                                   |

#### FastBufferReader(Byte\*, Allocator, Int32, Int32, Allocator)


Create a FastBufferReader from an existing byte buffer.

A new buffer will be created using the given and the value will be
copied in. FastBufferReader will then own the data.

The exception to this is when the passed in is Allocator.None. In this
scenario, ownership of the data remains with the caller and the reader
will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory). This is
true, unless the param is explicitly set to i.e.: Allocator.Persistent
in which case it would allow the internal data to Persist for longer,
but the caller should manually call Dispose() when it is no longer
needed.






##### Declaration


``` lang-csharp
public FastBufferReader(byte *buffer, Allocator copyAllocator, int length, int offset = 0, Allocator internalAllocator = null)
```



##### Parameters

| Type          | Name              | Description                                                                                                                                                                      |
|---------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Byte\* | buffer            | The buffer to copy from                                                                                                                                                          |
| Allocator     | copyAllocator     | The allocator type used for internal data when copying an existing buffer if other than Allocator.None is specified, that memory will be owned by this FastBufferReader instance |
| System.Int32  | length            | The number of bytes to copy                                                                                                                                                      |
| System.Int32  | offset            | The offset of the buffer to start copying from                                                                                                                                   |
| Allocator     | internalAllocator | The allocator type used for internal data when this reader points directly at a buffer owned by someone else                                                                     |

#### FastBufferReader(Byte\[\], Allocator, Int32, Int32)


Create a FastBufferReader from an existing byte array.

A new buffer will be created using the given allocator and the value
will be copied in. FastBufferReader will then own the data.

Allocator.None is not supported for byte\[\]. If you need this
functionality, use a fixed() block and ensure the FastBufferReader isn't
used outside that block.






##### Declaration


``` lang-csharp
public FastBufferReader(byte[] buffer, Allocator copyAllocator, int length = -1, int offset = 0)
```



##### Parameters

| Type            | Name          | Description                                                                                                                                                                      |
|-----------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Byte\[\] | buffer        | The buffer to copy from                                                                                                                                                          |
| Allocator       | copyAllocator | The allocator type used for internal data when copying an existing buffer if other than Allocator.None is specified, that memory will be owned by this FastBufferReader instance |
| System.Int32    | length        | The number of bytes to copy (all if this is -1)                                                                                                                                  |
| System.Int32    | offset        | The offset of the buffer to start copying from                                                                                                                                   |

#### FastBufferReader(FastBufferReader, Allocator, Int32, Int32, Allocator)


Create a FastBufferReader from another existing FastBufferReader. This
is typically used when you want to change the copyAllocator that a
reader is allocated to - for example, upgrading a Temp reader to a
Persistent one to be processed later.

A new buffer will be created using the given and the value will be
copied in. FastBufferReader will then own the data.

The exception to this is when the passed in is Allocator.None. In this
scenario, ownership of the data remains with the caller and the reader
will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory).






##### Declaration


``` lang-csharp
public FastBufferReader(FastBufferReader reader, Allocator copyAllocator, int length = -1, int offset = 0, Allocator internalAllocator = null)
```



##### Parameters

| Type             | Name              | Description                                                                                                                                                                      |
|------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FastBufferReader | reader            | The reader to copy from                                                                                                                                                          |
| Allocator        | copyAllocator     | The allocator type used for internal data when copying an existing buffer if other than Allocator.None is specified, that memory will be owned by this FastBufferReader instance |
| System.Int32     | length            | The number of bytes to copy (all if this is -1)                                                                                                                                  |
| System.Int32     | offset            | The offset of the buffer to start copying from                                                                                                                                   |
| Allocator        | internalAllocator | The allocator type used for internal data when this reader points directly at a buffer owned by someone else                                                                     |

#### FastBufferReader(FastBufferWriter, Allocator, Int32, Int32, Allocator)


Create a FastBufferReader from a FastBufferWriter.

A new buffer will be created using the given and the value will be
copied in. FastBufferReader will then own the data.

The exception to this is when the passed in is Allocator.None. In this
scenario, ownership of the data remains with the caller and the reader
will point at it directly. When created with Allocator.None,
FastBufferReader will allocate some internal data using Allocator.Temp,
so it should be treated as if it's a ref struct and not allowed to
outlive the context in which it was created (it should neither be
returned from that function nor stored anywhere in heap memory). This is
true, unless the param is explicitly set to i.e.: Allocator.Persistent
in which case it would allow the internal data to Persist for longer,
but the caller should manually call Dispose() when it is no longer
needed.






##### Declaration


``` lang-csharp
public FastBufferReader(FastBufferWriter writer, Allocator copyAllocator, int length = -1, int offset = 0, Allocator internalAllocator = null)
```



##### Parameters

| Type             | Name              | Description                                                                                                                                                                      |
|------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FastBufferWriter | writer            | The writer to copy from                                                                                                                                                          |
| Allocator        | copyAllocator     | The allocator type used for internal data when copying an existing buffer if other than Allocator.None is specified, that memory will be owned by this FastBufferReader instance |
| System.Int32     | length            | The number of bytes to copy (all if this is -1)                                                                                                                                  |
| System.Int32     | offset            | The offset of the buffer to start copying from                                                                                                                                   |
| Allocator        | internalAllocator | The allocator type used for internal data when this reader points directly at a buffer owned by someone else                                                                     |

### Properties

#### IsInitialized


Gets a value indicating whether the reader has been initialized and a
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


Get the total length of the buffer






##### Declaration


``` lang-csharp
public readonly int Length { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Position


Get the current read position






##### Declaration


``` lang-csharp
public readonly int Position { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Dispose()


System.IDisposable implementation that frees the allocated buffer






##### Declaration


``` lang-csharp
public void Dispose()
```



#### EnterBitwiseContext()


Retrieve a BitReader to be able to perform bitwise operations on the
buffer. No bytewise operations can be performed on the buffer until
bitReader.Dispose() has been called. At the end of the operation,
FastBufferReader will remain byte-aligned.






##### Declaration


``` lang-csharp
public BitReader EnterBitwiseContext()
```



##### Returns

| Type      | Description |
|-----------|-------------|
| BitReader | A BitReader |

#### GetUnsafePtr()


Gets a direct pointer to the underlying buffer






##### Declaration


``` lang-csharp
public byte *GetUnsafePtr()
```



##### Returns

| Type          | Description         |
|---------------|---------------------|
| System.Byte\* | System.Byte pointer |

#### GetUnsafePtrAtCurrentPosition()


Gets a direct pointer to the underlying buffer at the current read
position






##### Declaration


``` lang-csharp
public byte *GetUnsafePtrAtCurrentPosition()
```



##### Returns

| Type          | Description         |
|---------------|---------------------|
| System.Byte\* | System.Byte pointer |

#### ReadByte(out Byte)


Read a byte to the stream.






##### Declaration


``` lang-csharp
public void ReadByte(out byte value)
```



##### Parameters

| Type        | Name  | Description           |
|-------------|-------|-----------------------|
| System.Byte | value | Stores the read value |

#### ReadBytes(Byte\*, Int32, Int32)


Read multiple bytes to the stream






##### Declaration


``` lang-csharp
public void ReadBytes(byte *value, int size, int offset = 0)
```



##### Parameters

| Type          | Name   | Description                                       |
|---------------|--------|---------------------------------------------------|
| System.Byte\* | value  | Pointer to the destination buffer                 |
| System.Int32  | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32  | offset | Offset of the byte buffer to store into           |

#### ReadBytes(ref Byte\[\], Int32, Int32)


Read multiple bytes from the stream






##### Declaration


``` lang-csharp
public void ReadBytes(ref byte[] value, int size, int offset = 0)
```



##### Parameters

| Type            | Name   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| System.Byte\[\] | value  | Pointer to the destination buffer                 |
| System.Int32    | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32    | offset | Offset of the byte buffer to store into           |

#### ReadByteSafe(out Byte)


Read a byte to the stream.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadByteSafe(out byte value)
```



##### Parameters

| Type        | Name  | Description           |
|-------------|-------|-----------------------|
| System.Byte | value | Stores the read value |

#### ReadBytesSafe(Byte\*, Int32, Int32)


Read multiple bytes to the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadBytesSafe(byte *value, int size, int offset = 0)
```



##### Parameters

| Type          | Name   | Description                                       |
|---------------|--------|---------------------------------------------------|
| System.Byte\* | value  | Pointer to the destination buffer                 |
| System.Int32  | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32  | offset | Offset of the byte buffer to store into           |

#### ReadBytesSafe(ref Byte\[\], Int32, Int32)


Read multiple bytes from the stream

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadBytesSafe(ref byte[] value, int size, int offset = 0)
```



##### Parameters

| Type            | Name   | Description                                       |
|-----------------|--------|---------------------------------------------------|
| System.Byte\[\] | value  | Pointer to the destination buffer                 |
| System.Int32    | size   | Number of bytes to read - MUST BE \<= BUFFER SIZE |
| System.Int32    | offset | Offset of the byte buffer to store into           |

#### ReadNetworkSerializable\<T\>(out T)


Read an INetworkSerializable






##### Declaration


``` lang-csharp
public void ReadNetworkSerializable<T>(out T value)
    where T : INetworkSerializable, new()
```



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


Read an array of INetworkSerializables






##### Declaration


``` lang-csharp
public void ReadNetworkSerializable<T>(out T[] value)
    where T : INetworkSerializable, new()
```



##### Parameters

| Type  | Name  | Description                   |
|-------|-------|-------------------------------|
| T\[\] | value | INetworkSerializable instance |

##### Type Parameters

| Name | Description                                   |
|------|-----------------------------------------------|
| T    | the array to read the values of type `T` into |

##### Exceptions

| Type                           | Condition |
|--------------------------------|-----------|
| System.NotImplementedException |           |

#### ReadPartialValue\<T\>(out T, Int32, Int32)


Read a partial value. The value is zero-initialized and then the
specified number of bytes is read into it.






##### Declaration


``` lang-csharp
public void ReadPartialValue<T>(out T value, int bytesToRead, int offsetBytes = 0)
    where T : struct
```



##### Parameters

| Type         | Name        | Description                              |
|--------------|-------------|------------------------------------------|
| T            | value       | Value to read                            |
| System.Int32 | bytesToRead | Number of bytes                          |
| System.Int32 | offsetBytes | Offset into the value to write the bytes |

##### Type Parameters

| Name | Description                           |
|------|---------------------------------------|
| T    | the type value to read the value into |

##### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |
| System.OverflowException         |           |

#### ReadValue(out Color)


Read a Color






##### Declaration


``` lang-csharp
public void ReadValue(out Color value)
```



##### Parameters

| Type  | Name  | Description       |
|-------|-------|-------------------|
| Color | value | the value to read |

#### ReadValue(out Color\[\])


Read a Color array






##### Declaration


``` lang-csharp
public void ReadValue(out Color[] value)
```



##### Parameters

| Type      | Name  | Description        |
|-----------|-------|--------------------|
| Color\[\] | value | the values to read |

#### ReadValue(out Color32)


Read a Color32






##### Declaration


``` lang-csharp
public void ReadValue(out Color32 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Color32 | value | the value to read |

#### ReadValue(out Color32\[\])


Read a Color32 array






##### Declaration


``` lang-csharp
public void ReadValue(out Color32[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Color32\[\] | value | the values to read |

#### ReadValue(out Quaternion)


Read a Quaternion






##### Declaration


``` lang-csharp
public void ReadValue(out Quaternion value)
```



##### Parameters

| Type       | Name  | Description       |
|------------|-------|-------------------|
| Quaternion | value | the value to read |

#### ReadValue(out Quaternion\[\])


Read a Quaternion array






##### Declaration


``` lang-csharp
public void ReadValue(out Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description        |
|----------------|-------|--------------------|
| Quaternion\[\] | value | the values to read |

#### ReadValue(out Ray)


Read a Ray






##### Declaration


``` lang-csharp
public void ReadValue(out Ray value)
```



##### Parameters

| Type | Name  | Description       |
|------|-------|-------------------|
| Ray  | value | the value to read |

#### ReadValue(out Ray\[\])


Read a Ray array






##### Declaration


``` lang-csharp
public void ReadValue(out Ray[] value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Ray\[\] | value | the values to read |

#### ReadValue(out Ray2D)


Read a Ray2D






##### Declaration


``` lang-csharp
public void ReadValue(out Ray2D value)
```



##### Parameters

| Type  | Name  | Description       |
|-------|-------|-------------------|
| Ray2D | value | the value to read |

#### ReadValue(out Ray2D\[\])


Read a Ray2D array






##### Declaration


``` lang-csharp
public void ReadValue(out Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description        |
|-----------|-------|--------------------|
| Ray2D\[\] | value | the values to read |

#### ReadValue(out String, Boolean)


Reads a string NOTE: ALLOCATES






##### Declaration


``` lang-csharp
public void ReadValue(out string s, bool oneByteChars = false)
```



##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | Stores the read string                                                   |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### ReadValue(out Vector2)


Read a Vector2






##### Declaration


``` lang-csharp
public void ReadValue(out Vector2 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Vector2 | value | the value to read |

#### ReadValue(out Vector2\[\])


Read a Vector2 array






##### Declaration


``` lang-csharp
public void ReadValue(out Vector2[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Vector2\[\] | value | the values to read |

#### ReadValue(out Vector2Int)


Read a Vector2Int






##### Declaration


``` lang-csharp
public void ReadValue(out Vector2Int value)
```



##### Parameters

| Type       | Name  | Description       |
|------------|-------|-------------------|
| Vector2Int | value | the value to read |

#### ReadValue(out Vector2Int\[\])


Read a Vector2Int array






##### Declaration


``` lang-csharp
public void ReadValue(out Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description        |
|----------------|-------|--------------------|
| Vector2Int\[\] | value | the values to read |

#### ReadValue(out Vector3)


Read a Vector3






##### Declaration


``` lang-csharp
public void ReadValue(out Vector3 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Vector3 | value | the value to read |

#### ReadValue(out Vector3\[\])


Read a Vector3 array






##### Declaration


``` lang-csharp
public void ReadValue(out Vector3[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Vector3\[\] | value | the values to read |

#### ReadValue(out Vector3Int)


Read a Vector3Int






##### Declaration


``` lang-csharp
public void ReadValue(out Vector3Int value)
```



##### Parameters

| Type       | Name  | Description       |
|------------|-------|-------------------|
| Vector3Int | value | the value to read |

#### ReadValue(out Vector3Int\[\])


Read a Vector3Int array






##### Declaration


``` lang-csharp
public void ReadValue(out Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description       |
|----------------|-------|-------------------|
| Vector3Int\[\] | value | the value to read |

#### ReadValue(out Vector4)


Read a Vector4






##### Declaration


``` lang-csharp
public void ReadValue(out Vector4 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Vector4 | value | the value to read |

#### ReadValue(out Vector4\[\])


Read a Vector4






##### Declaration


``` lang-csharp
public void ReadValue(out Vector4[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Vector4\[\] | value | the values to read |

#### ReadValue\<T\>(out T, FastBufferWriter.ForEnums)


Read an enum value






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T                         | value  | The value to read                                                                      |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T, FastBufferWriter.ForFixedStrings)


Read a FixedString value. This method is a little difficult to use,
since you have to know the size of the string before reading it, but is
useful when the string is a known, fixed size. Note that the size of the
string is also encoded, so the size to call TryBeginRead on is actually
the fixed size (in bytes) plus sizeof(int)






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                            |
|----------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                | value  | the value to read                                                                      |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T, FastBufferWriter.ForNetworkSerializable)


Read a NetworkSerializable value






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                       | value  | The value to read                                                                      |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T, FastBufferWriter.ForPrimitives)


Read a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T                              | value  | The value to read                                                                      |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T, FastBufferWriter.ForStructs)


Read a struct






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T                           | value  | The value to read                                                                      |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForEnums)


Read an enum array






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                     | value  | The values to read                                                                     |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForNetworkSerializable)


Read a NetworkSerializable array






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                                   | value  | The values to read                                                                     |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForPrimitives)


Read a primitive value array (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                          | value  | The values to read                                                                     |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValue\<T\>(out T\[\], FastBufferWriter.ForStructs)


Read a struct array






##### Declaration


``` lang-csharp
public void ReadValue<T>(out T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                       | value  | The values to read                                                                     |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe(out Color)


Read a Color

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Color value)
```



##### Parameters

| Type  | Name  | Description       |
|-------|-------|-------------------|
| Color | value | the value to read |

#### ReadValueSafe(out Color\[\])


Read a Collor array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Color[] value)
```



##### Parameters

| Type      | Name  | Description        |
|-----------|-------|--------------------|
| Color\[\] | value | the values to read |

#### ReadValueSafe(out Color32)


Read a Color32

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Color32 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Color32 | value | the value to read |

#### ReadValueSafe(out Color32\[\])


Read a Color32 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Color32[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Color32\[\] | value | the values to read |

#### ReadValueSafe(out Quaternion)


Read a Quaternion

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Quaternion value)
```



##### Parameters

| Type       | Name  | Description       |
|------------|-------|-------------------|
| Quaternion | value | the value to read |

#### ReadValueSafe(out Quaternion\[\])


Read a Quaternion array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description        |
|----------------|-------|--------------------|
| Quaternion\[\] | value | the values to read |

#### ReadValueSafe(out Ray)


Read a Ray

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Ray value)
```



##### Parameters

| Type | Name  | Description       |
|------|-------|-------------------|
| Ray  | value | the value to read |

#### ReadValueSafe(out Ray\[\])


Read a Ray array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Ray[] value)
```



##### Parameters

| Type    | Name  | Description        |
|---------|-------|--------------------|
| Ray\[\] | value | the values to read |

#### ReadValueSafe(out Ray2D)


Read a Ray2D

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Ray2D value)
```



##### Parameters

| Type  | Name  | Description       |
|-------|-------|-------------------|
| Ray2D | value | the value to read |

#### ReadValueSafe(out Ray2D\[\])


Read a Ray2D array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description        |
|-----------|-------|--------------------|
| Ray2D\[\] | value | the values to read |

#### ReadValueSafe(out String, Boolean)


Reads a string. NOTE: ALLOCATES

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out string s, bool oneByteChars = false)
```



##### Parameters

| Type           | Name         | Description                                                              |
|----------------|--------------|--------------------------------------------------------------------------|
| System.String  | s            | Stores the read string                                                   |
| System.Boolean | oneByteChars | Whether or not to use one byte per character. This will only allow ASCII |

#### ReadValueSafe(out Vector2)


Read a Vector2

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector2 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Vector2 | value | the value to read |

#### ReadValueSafe(out Vector2\[\])


Read a Vector2 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector2[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Vector2\[\] | value | the values to read |

#### ReadValueSafe(out Vector2Int)


Read a Vector2Int

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector2Int value)
```



##### Parameters

| Type       | Name  | Description       |
|------------|-------|-------------------|
| Vector2Int | value | the value to read |

#### ReadValueSafe(out Vector2Int\[\])


Read a Vector2Int array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description        |
|----------------|-------|--------------------|
| Vector2Int\[\] | value | the values to read |

#### ReadValueSafe(out Vector3)


Read a Vector3

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector3 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Vector3 | value | the value to read |

#### ReadValueSafe(out Vector3\[\])


Read a Vector3 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector3[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Vector3\[\] | value | the values to read |

#### ReadValueSafe(out Vector3Int)


Read a Vector3Int

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector3Int value)
```



##### Parameters

| Type       | Name  | Description       |
|------------|-------|-------------------|
| Vector3Int | value | the value to read |

#### ReadValueSafe(out Vector3Int\[\])


Read a Vector3Int array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description        |
|----------------|-------|--------------------|
| Vector3Int\[\] | value | the values to read |

#### ReadValueSafe(out Vector4)


Read a Vector4

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector4 value)
```



##### Parameters

| Type    | Name  | Description       |
|---------|-------|-------------------|
| Vector4 | value | the value to read |

#### ReadValueSafe(out Vector4\[\])


Read a Vector4 array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe(out Vector4[] value)
```



##### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| Vector4\[\] | value | the values to read |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForEnums)


Read an enum value

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T                         | value  | The value to read                                                                      |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForFixedStrings)


Read a FixedString value.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                            |
|----------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                | value  | the value to read                                                                      |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForNetworkSerializable)


Read a NetworkSerializable value

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                       | value  | The value to read                                                                      |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForPrimitives)


Read a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T                              | value  | The value to read                                                                      |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T, FastBufferWriter.ForStructs)


Read a struct

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T                           | value  | The value to read                                                                      |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForEnums)


Read an enum array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                     | value  | The values to read                                                                     |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForNetworkSerializable)


Read a NetworkSerializable array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                                   | value  | The values to read                                                                     |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForPrimitives)


Read a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                          | value  | The value to read                                                                      |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### ReadValueSafe\<T\>(out T\[\], FastBufferWriter.ForStructs)


Read a struct array

"Safe" version - automatically performs bounds checking. Less efficient
than bounds checking for multiple reads at once by calling TryBeginRead.






##### Declaration


``` lang-csharp
public void ReadValueSafe<T>(out T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                       | value  | The values to read                                                                     |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### Seek(Int32)


Move the read position in the stream






##### Declaration


``` lang-csharp
public void Seek(int where)
```



##### Parameters

| Type         | Name  | Description                                                 |
|--------------|-------|-------------------------------------------------------------|
| System.Int32 | where | Absolute value to move the position to, truncated to Length |

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
| System.Byte\[\] | byte array  |

#### TryBeginRead(Int32)


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






##### Declaration


``` lang-csharp
public bool TryBeginRead(int bytes)
```



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






##### Declaration


``` lang-csharp
public bool TryBeginReadValue<T>(in T value)
    where T : struct
```



##### Parameters

| Type | Name  | Description                |
|------|-------|----------------------------|
| T    | value | The value you want to read |

##### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | True if the read is allowed, false otherwise |

##### Type Parameters

| Name | Description                                      |
|------|--------------------------------------------------|
| T    | the type `T` of the value you are trying to read |

##### Exceptions

| Type                             | Condition                            |
|----------------------------------|--------------------------------------|
| System.InvalidOperationException | If called while in a bitwise context |

### Implements



System.IDisposable





