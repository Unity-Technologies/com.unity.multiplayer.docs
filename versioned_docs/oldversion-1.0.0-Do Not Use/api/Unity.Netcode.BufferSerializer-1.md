---  
id: Unity.Netcode.BufferSerializer-1  
title: Unity.Netcode.BufferSerializer-1  
---

<div class="markdown level0 summary">

Two-way serializer wrapping FastBufferReader or FastBufferWriter.

Implemented as a ref struct for two reasons:

1.  The BufferSerializer cannot outlive the FBR/FBW it wraps or using it
    will cause a crash
2.  The BufferSerializer must always be passed by reference and can't be
    copied

Ref structs help enforce both of those rules: they can't out live the
stack context in which they were created, and they're always passed by
reference no matter what.

BufferSerializer doesn't wrapp FastBufferReader or FastBufferWriter
directly because it can't. ref structs can't implement interfaces, and
in order to be able to have two different implementations with the same
interface (which allows us to avoid an "if(IsReader)" on every call),
the thing directly wrapping the struct has to implement an interface. So
IReaderWriter exists as the interface, which is implemented by a normal
struct, while the ref struct wraps the normal one to enforce the two
above requirements. (Allowing direct access to the IReaderWriter struct
would allow dangerous things to happen because the struct's lifetime
could outlive the Reader/Writer's.)

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

``` lang-csharp
public ref struct BufferSerializer<TReaderWriter>
    where TReaderWriter : IReaderWriter
```

##### Type Parameters

| Name          | Description               |
|---------------|---------------------------|
| TReaderWriter | The implementation struct |

## 

### IsReader

<div class="markdown level1 summary">

Check if the contained implementation is a reader

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsReader { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsWriter

<div class="markdown level1 summary">

Check if the contained implementation is a writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsWriter { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### GetFastBufferReader()

<div class="markdown level1 summary">

Retrieves the FastBufferReader instance. Only valid if IsReader = true,
throws InvalidOperationException otherwise.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public FastBufferReader GetFastBufferReader()
```

#### Returns

| Type             | Description     |
|------------------|-----------------|
| FastBufferReader | Reader instance |

### GetFastBufferWriter()

<div class="markdown level1 summary">

Retrieves the FastBufferWriter instance. Only valid if IsWriter = true,
throws InvalidOperationException otherwise.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public FastBufferWriter GetFastBufferWriter()
```

#### Returns

| Type             | Description     |
|------------------|-----------------|
| FastBufferWriter | Writer instance |

### PreCheck(Int32)

<div class="markdown level1 summary">

Allows faster serialization by batching bounds checking. When you know
you will be writing multiple fields back-to-back and you know the total
size, you can call PreCheck() once on the total size, and then follow it
with calls to SerializeValuePreChecked() for faster serialization. Write
buffers will grow during PreCheck() if needed.

PreChecked serialization operations will throw OverflowException in
editor and development builds if you go past the point you've marked
using PreCheck(). In release builds, OverflowException will not be
thrown for performance reasons, since the point of using PreCheck is to
avoid bounds checking in the following operations in release builds.

To get the correct size to check for, use
FastBufferWriter.GetWriteSize(value) or
FastBufferWriter.GetWriteSize\&lt;type&gt;()

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool PreCheck(int amount)
```

#### Parameters

| Type         | Name   | Description                               |
|--------------|--------|-------------------------------------------|
| System.Int32 | amount | Number of bytes you plan to read or write |

#### Returns

| Type           | Description                                          |
|----------------|------------------------------------------------------|
| System.Boolean | True if the read/write can proceed, false otherwise. |

### SerializeNetworkSerializable\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

Serialize an INetworkSerializable

Throws OverflowException if the end of the buffer has been reached.
Write buffers will grow up to the maximum allowable message size before
throwing OverflowException.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeNetworkSerializable<T>(ref T value)
    where T : INetworkSerializable, new()
```

#### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | Value to serialize |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValue(ref Byte)

<div class="markdown level1 summary">

Serialize a single byte

Throws OverflowException if the end of the buffer has been reached.
Write buffers will grow up to the maximum allowable message size before
throwing OverflowException.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValue(ref byte value)
```

#### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| System.Byte | value | Value to serialize |

### SerializeValue(ref String, Boolean)

<div class="markdown level1 summary">

Serialize a string.

Note: Will ALWAYS allocate a new string when reading.

Throws OverflowException if the end of the buffer has been reached.
Write buffers will grow up to the maximum allowable message size before
throwing OverflowException.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValue(ref string s, bool oneByteChars = false)
```

#### Parameters

| Type           | Name         | Description                                                                                                |
|----------------|--------------|------------------------------------------------------------------------------------------------------------|
| System.String  | s            | Value to serialize                                                                                         |
| System.Boolean | oneByteChars | If true, will truncate each char to one byte. This is slower than two-byte chars, but uses less bandwidth. |

### SerializeValue\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

Serialize an unmanaged type. Supports basic value types as well as
structs. The provided type will be copied to/from the buffer as it
exists in memory.

Throws OverflowException if the end of the buffer has been reached.
Write buffers will grow up to the maximum allowable message size before
throwing OverflowException.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValue<T>(ref T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | Value to serialize |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValue\&lt;T&gt;(ref T\[\])

<div class="markdown level1 summary">

Serialize an array value.

Note: Will ALWAYS allocate a new array when reading. If you have a
statically-sized array that you know is large enough, it's recommended
to serialize the size yourself and iterate serializing array members.

(This is because C# doesn't allow setting an array's length value, so
deserializing into an existing array of larger size would result in an
array that doesn't have as many values as its Length indicates it
should.)

Throws OverflowException if the end of the buffer has been reached.
Write buffers will grow up to the maximum allowable message size before
throwing OverflowException.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValue<T>(ref T[] array)
    where T : struct
```

#### Parameters

| Type  | Name  | Description        |
|-------|-------|--------------------|
| T\[\] | array | Value to serialize |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValuePreChecked(ref Byte)

<div class="markdown level1 summary">

Serialize a single byte

Using the PreChecked versions of these functions requires calling
PreCheck() ahead of time, and they should only be called if PreCheck()
returns true. This is an efficiency option, as it allows you to
PreCheck() multiple serialization operations in one function call
instead of having to do bounds checking on every call.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValuePreChecked(ref byte value)
```

#### Parameters

| Type        | Name  | Description        |
|-------------|-------|--------------------|
| System.Byte | value | Value to serialize |

### SerializeValuePreChecked(ref String, Boolean)

<div class="markdown level1 summary">

Serialize a string.

Note: Will ALWAYS allocate a new string when reading.

Using the PreChecked versions of these functions requires calling
PreCheck() ahead of time, and they should only be called if PreCheck()
returns true. This is an efficiency option, as it allows you to
PreCheck() multiple serialization operations in one function call
instead of having to do bounds checking on every call.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValuePreChecked(ref string s, bool oneByteChars = false)
```

#### Parameters

| Type           | Name         | Description                                                                                                |
|----------------|--------------|------------------------------------------------------------------------------------------------------------|
| System.String  | s            | Value to serialize                                                                                         |
| System.Boolean | oneByteChars | If true, will truncate each char to one byte. This is slower than two-byte chars, but uses less bandwidth. |

### SerializeValuePreChecked\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

Serialize an unmanaged type. Supports basic value types as well as
structs. The provided type will be copied to/from the buffer as it
exists in memory.

Using the PreChecked versions of these functions requires calling
PreCheck() ahead of time, and they should only be called if PreCheck()
returns true. This is an efficiency option, as it allows you to
PreCheck() multiple serialization operations in one function call
instead of having to do bounds checking on every call.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | Value to serialize |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValuePreChecked\&lt;T&gt;(ref T\[\])

<div class="markdown level1 summary">

Serialize an array value.

Note: Will ALWAYS allocate a new array when reading. If you have a
statically-sized array that you know is large enough, it's recommended
to serialize the size yourself and iterate serializing array members.

(This is because C# doesn't allow setting an array's length value, so
deserializing into an existing array of larger size would result in an
array that doesn't have as many values as its Length indicates it
should.)

Using the PreChecked versions of these functions requires calling
PreCheck() ahead of time, and they should only be called if PreCheck()
returns true. This is an efficiency option, as it allows you to
PreCheck() multiple serialization operations in one function call
instead of having to do bounds checking on every call.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] array)
    where T : struct
```

#### Parameters

| Type  | Name  | Description        |
|-------|-------|--------------------|
| T\[\] | array | Value to serialize |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |
