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

Ref structs help enforce both of those rules: they can't ref live the
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
public ref struct BufferSerializer<TReaderWriter>
    where TReaderWriter : IReaderWriter
```

</div>

##### Type Parameters

| Name          | Description               |
|---------------|---------------------------|
| TReaderWriter | The implementation struct |

### Properties

#### IsReader

<div class="markdown level1 summary">

Check if the contained implementation is a reader

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsReader { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsWriter

<div class="markdown level1 summary">

Check if the contained implementation is a writer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsWriter { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### GetFastBufferReader()

<div class="markdown level1 summary">

Retrieves the FastBufferReader instance. Only valid if IsReader = true,
throws InvalidOperationException otherwise.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferReader GetFastBufferReader()
```

</div>

##### Returns

| Type             | Description     |
|------------------|-----------------|
| FastBufferReader | Reader instance |

#### GetFastBufferWriter()

<div class="markdown level1 summary">

Retrieves the FastBufferWriter instance. Only valid if IsWriter = true,
throws InvalidOperationException otherwise.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public FastBufferWriter GetFastBufferWriter()
```

</div>

##### Returns

| Type             | Description     |
|------------------|-----------------|
| FastBufferWriter | Writer instance |

#### PreCheck(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool PreCheck(int amount)
```

</div>

##### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | amount |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### SerializeNetworkSerializable\<T\>(ref T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeNetworkSerializable<T>(ref T value)
    where T : INetworkSerializable, new()
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

#### SerializeValue(ref Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Color value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Color | value |             |

#### SerializeValue(ref Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Color[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Color\[\] | value |             |

#### SerializeValue(ref Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Color32 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Color32 | value |             |

#### SerializeValue(ref Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Color32[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Color32\[\] | value |             |

#### SerializeValue(ref Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Quaternion value)
```

</div>

##### Parameters

| Type       | Name  | Description |
|------------|-------|-------------|
| Quaternion | value |             |

#### SerializeValue(ref Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Quaternion[] value)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| Quaternion\[\] | value |             |

#### SerializeValue(ref Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Ray value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| Ray  | value |             |

#### SerializeValue(ref Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Ray[] value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Ray\[\] | value |             |

#### SerializeValue(ref Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Ray2D value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Ray2D | value |             |

#### SerializeValue(ref Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Ray2D[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Ray2D\[\] | value |             |

#### SerializeValue(ref Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref byte value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

#### SerializeValue(ref String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description |
|----------------|--------------|-------------|
| System.String  | s            |             |
| System.Boolean | oneByteChars |             |

#### SerializeValue(ref Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Vector2 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector2 | value |             |

#### SerializeValue(ref Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Vector2[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector2\[\] | value |             |

#### SerializeValue(ref Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Vector3 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector3 | value |             |

#### SerializeValue(ref Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Vector3[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector3\[\] | value |             |

#### SerializeValue(ref Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Vector4 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector4 | value |             |

#### SerializeValue(ref Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue(ref Vector4[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector4\[\] | value |             |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
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

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForNetworkSerializable)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
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

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

#### SerializeValuePreChecked(ref Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Color value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Color | value |             |

#### SerializeValuePreChecked(ref Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Color[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Color\[\] | value |             |

#### SerializeValuePreChecked(ref Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Color32 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Color32 | value |             |

#### SerializeValuePreChecked(ref Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Color32[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Color32\[\] | value |             |

#### SerializeValuePreChecked(ref Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Quaternion value)
```

</div>

##### Parameters

| Type       | Name  | Description |
|------------|-------|-------------|
| Quaternion | value |             |

#### SerializeValuePreChecked(ref Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Quaternion[] value)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| Quaternion\[\] | value |             |

#### SerializeValuePreChecked(ref Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Ray value)
```

</div>

##### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| Ray  | value |             |

#### SerializeValuePreChecked(ref Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Ray[] value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Ray\[\] | value |             |

#### SerializeValuePreChecked(ref Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Ray2D value)
```

</div>

##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Ray2D | value |             |

#### SerializeValuePreChecked(ref Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Ray2D[] value)
```

</div>

##### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| Ray2D\[\] | value |             |

#### SerializeValuePreChecked(ref Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref byte value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

#### SerializeValuePreChecked(ref String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref string s, bool oneByteChars = false)
```

</div>

##### Parameters

| Type           | Name         | Description |
|----------------|--------------|-------------|
| System.String  | s            |             |
| System.Boolean | oneByteChars |             |

#### SerializeValuePreChecked(ref Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Vector2 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector2 | value |             |

#### SerializeValuePreChecked(ref Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Vector2[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector2\[\] | value |             |

#### SerializeValuePreChecked(ref Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Vector3 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector3 | value |             |

#### SerializeValuePreChecked(ref Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Vector3[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector3\[\] | value |             |

#### SerializeValuePreChecked(ref Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Vector4 value)
```

</div>

##### Parameters

| Type    | Name  | Description |
|---------|-------|-------------|
| Vector4 | value |             |

#### SerializeValuePreChecked(ref Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked(ref Vector4[] value)
```

</div>

##### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| Vector4\[\] | value |             |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForEnums)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForPrimitives)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForStructs)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

 
