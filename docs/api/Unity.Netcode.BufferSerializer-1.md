---
id: Unity.Netcode.BufferSerializer-1
title: Unity.Netcode.BufferSerializer-1
---

# Struct BufferSerializer\<TReaderWriter\>


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
public ref struct BufferSerializer<TReaderWriter>
    where TReaderWriter : IReaderWriter
```



##### Type Parameters

| Name          | Description               |
|---------------|---------------------------|
| TReaderWriter | The implementation struct |

### Properties

#### IsReader


Check if the contained implementation is a reader






##### Declaration


``` lang-csharp
public readonly bool IsReader { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsWriter


Check if the contained implementation is a writer






##### Declaration


``` lang-csharp
public readonly bool IsWriter { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### GetFastBufferReader()


Retrieves the FastBufferReader instance. Only valid if IsReader = true,
throws InvalidOperationException otherwise.






##### Declaration


``` lang-csharp
public FastBufferReader GetFastBufferReader()
```



##### Returns

| Type             | Description     |
|------------------|-----------------|
| FastBufferReader | Reader instance |

#### GetFastBufferWriter()


Retrieves the FastBufferWriter instance. Only valid if IsWriter = true,
throws InvalidOperationException otherwise.






##### Declaration


``` lang-csharp
public FastBufferWriter GetFastBufferWriter()
```



##### Returns

| Type             | Description     |
|------------------|-----------------|
| FastBufferWriter | Writer instance |

#### PreCheck(Int32)


Performs an advance check to ensure space is available to read/write one
or more values. This provides a performance benefit for serializing
multiple values using the SerializeValuePreChecked methods. But note
that the benefit is small and only likely to be noticeable if
serializing a very large number of items.






##### Declaration


``` lang-csharp
public bool PreCheck(int amount)
```



##### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | amount |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### SerializeNetworkSerializable\<T\>(ref T)


Read or write a NetworkSerializable value. SerializeValue() is the
preferred method to do this - this is provided for backward
compatibility only.






##### Declaration


``` lang-csharp
public void SerializeNetworkSerializable<T>(ref T value)
    where T : INetworkSerializable, new()
```



##### Parameters

| Type | Name  | Description              |
|------|-------|--------------------------|
| T    | value | The values to read/write |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValue(ref Color)


Read or write a Color value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Color value)
```



##### Parameters

| Type  | Name  | Description             |
|-------|-------|-------------------------|
| Color | value | The value to read/write |

#### SerializeValue(ref Color\[\])


Read or write an array of Color values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Color[] value)
```



##### Parameters

| Type      | Name  | Description              |
|-----------|-------|--------------------------|
| Color\[\] | value | The values to read/write |

#### SerializeValue(ref Color32)


Read or write a Color32 value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Color32 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Color32 | value | The value to read/write |

#### SerializeValue(ref Color32\[\])


Read or write an array of Color32 values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Color32[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Color32\[\] | value | The values to read/write |

#### SerializeValue(ref Quaternion)


Read or write a Quaternion value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Quaternion value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Quaternion | value | The value to read/write |

#### SerializeValue(ref Quaternion\[\])


Read or write an array of Quaternion values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Quaternion\[\] | value | The values to read/write |

#### SerializeValue(ref Ray)


Read or write a Ray value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Ray value)
```



##### Parameters

| Type | Name  | Description             |
|------|-------|-------------------------|
| Ray  | value | The value to read/write |

#### SerializeValue(ref Ray\[\])


Read or write an array of Ray values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Ray[] value)
```



##### Parameters

| Type    | Name  | Description              |
|---------|-------|--------------------------|
| Ray\[\] | value | The values to read/write |

#### SerializeValue(ref Ray2D)


Read or write a Ray2D value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Ray2D value)
```



##### Parameters

| Type  | Name  | Description             |
|-------|-------|-------------------------|
| Ray2D | value | The value to read/write |

#### SerializeValue(ref Ray2D\[\])


Read or write an array of Ray2D values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description              |
|-----------|-------|--------------------------|
| Ray2D\[\] | value | The values to read/write |

#### SerializeValue(ref Byte)


Read or write a single byte






##### Declaration


``` lang-csharp
public void SerializeValue(ref byte value)
```



##### Parameters

| Type        | Name  | Description             |
|-------------|-------|-------------------------|
| System.Byte | value | The value to read/write |

#### SerializeValue(ref String, Boolean)


Read or write a string






##### Declaration


``` lang-csharp
public void SerializeValue(ref string s, bool oneByteChars = false)
```



##### Parameters

| Type           | Name         | Description                                                      |
|----------------|--------------|------------------------------------------------------------------|
| System.String  | s            | The value to read/write                                          |
| System.Boolean | oneByteChars | If true, characters will be limited to one-byte ASCII characters |

#### SerializeValue(ref Vector2)


Read or write a Vector2 value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector2 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector2 | value | The value to read/write |

#### SerializeValue(ref Vector2\[\])


Read or write an array of Vector2 values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector2[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector2\[\] | value | The values to read/write |

#### SerializeValue(ref Vector2Int)


Read or write a Vector2Int value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector2Int value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Vector2Int | value | The value to read/write |

#### SerializeValue(ref Vector2Int\[\])


Read or write an array of Vector2Int values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Vector2Int\[\] | value | The values to read/write |

#### SerializeValue(ref Vector3)


Read or write a Vector3 value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector3 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector3 | value | The value to read/write |

#### SerializeValue(ref Vector3\[\])


Read or write an array of Vector3 values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector3[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector3\[\] | value | The values to read/write |

#### SerializeValue(ref Vector3Int)


Read or write a Vector3Int value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector3Int value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Vector3Int | value | The value to read/write |

#### SerializeValue(ref Vector3Int\[\])


Read or write an array of Vector3Int values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Vector3Int\[\] | value | The values to read/write |

#### SerializeValue(ref Vector4)


Read or write a Vector4 value






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector4 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector4 | value | The value to read/write |

#### SerializeValue(ref Vector4\[\])


Read or write an array of Vector4 values






##### Declaration


``` lang-csharp
public void SerializeValue(ref Vector4[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector4\[\] | value | The values to read/write |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForEnums)


Read or write an enum value






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T                         | value  | The value to read/write                                                                |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForFixedStrings)


Read or write a FixedString value






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                               |
|----------------------------------|--------|---------------------------------------------------------------------------|
| T                                | value  | The values to read/write                                                  |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter used for enabling overload resolution of FixedStrings |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForNetworkSerializable)


Read or write a struct or class value implementing INetworkSerializable






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                       | value  | The value to read/write                                                                |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForPrimitives)


Read or write a primitive value (int, bool, etc) Accepts any value that
implements the given interfaces, but is not guaranteed to work correctly
on values that are not primitives.






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T                              | value  | The value to read/write                                                                |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForStructs)


Read or write a struct value implementing ISerializeByMemcpy






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T                           | value  | The value to read/write                                                                |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForEnums)


Read or write an array of enum values






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                     | value  | The value to read/write                                                                |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForNetworkSerializable)


Read or write an array of struct or class values implementing
INetworkSerializable






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
    where T : INetworkSerializable, new()
```



##### Parameters

| Type                                    | Name   | Description                                                                            |
|-----------------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                                   | value  | The values to read/write                                                               |
| FastBufferWriter.ForNetworkSerializable | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForPrimitives)


Read or write an array of primitive values (int, bool, etc) Accepts any
value that implements the given interfaces, but is not guaranteed to
work correctly on values that are not primitives.






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                          | value  | The values to read/write                                                               |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T\[\], FastBufferWriter.ForStructs)


Read or write an array of struct values implementing ISerializeByMemcpy






##### Declaration


``` lang-csharp
public void SerializeValue<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                            |
|-----------------------------|--------|----------------------------------------------------------------------------------------|
| T\[\]                       | value  | The values to read/write                                                               |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked(ref Color)


Serialize a Color, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Color value)
```



##### Parameters

| Type  | Name  | Description             |
|-------|-------|-------------------------|
| Color | value | The value to read/write |

#### SerializeValuePreChecked(ref Color\[\])


Serialize a Color array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Color[] value)
```



##### Parameters

| Type      | Name  | Description             |
|-----------|-------|-------------------------|
| Color\[\] | value | The value to read/write |

#### SerializeValuePreChecked(ref Color32)


Serialize a Color32, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Color32 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Color32 | value | The value to read/write |

#### SerializeValuePreChecked(ref Color32\[\])


Serialize a Color32 array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Color32[] value)
```



##### Parameters

| Type        | Name  | Description             |
|-------------|-------|-------------------------|
| Color32\[\] | value | The value to read/write |

#### SerializeValuePreChecked(ref Quaternion)


Serialize a Quaternion, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Quaternion value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Quaternion | value | The value to read/write |

#### SerializeValuePreChecked(ref Quaternion\[\])


Serialize a Quaternion array, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description             |
|----------------|-------|-------------------------|
| Quaternion\[\] | value | The value to read/write |

#### SerializeValuePreChecked(ref Ray)


Serialize a Ray, "pre-checked", which skips buffer checks. In debug and
editor builds, a check is made to ensure you've called "PreCheck" before
calling this. In release builds, calling this without calling "PreCheck"
may read or write past the end of the buffer, which will cause memory
corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Ray value)
```



##### Parameters

| Type | Name  | Description             |
|------|-------|-------------------------|
| Ray  | value | The value to read/write |

#### SerializeValuePreChecked(ref Ray\[\])


Serialize a Ray array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Ray[] value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Ray\[\] | value | The value to read/write |

#### SerializeValuePreChecked(ref Ray2D)


Serialize a Ray2D, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Ray2D value)
```



##### Parameters

| Type  | Name  | Description             |
|-------|-------|-------------------------|
| Ray2D | value | The value to read/write |

#### SerializeValuePreChecked(ref Ray2D\[\])


Serialize a Ray2D array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description             |
|-----------|-------|-------------------------|
| Ray2D\[\] | value | The value to read/write |

#### SerializeValuePreChecked(ref Byte)


Serialize a byte, "pre-checked", which skips buffer checks. In debug and
editor builds, a check is made to ensure you've called "PreCheck" before
calling this. In release builds, calling this without calling "PreCheck"
may read or write past the end of the buffer, which will cause memory
corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref byte value)
```



##### Parameters

| Type        | Name  | Description             |
|-------------|-------|-------------------------|
| System.Byte | value | The value to read/write |

#### SerializeValuePreChecked(ref String, Boolean)


Serialize a string, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref string s, bool oneByteChars = false)
```



##### Parameters

| Type           | Name         | Description                                                      |
|----------------|--------------|------------------------------------------------------------------|
| System.String  | s            | The value to read/write                                          |
| System.Boolean | oneByteChars | If true, characters will be limited to one-byte ASCII characters |

#### SerializeValuePreChecked(ref Vector2)


Serialize a Vector2, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector2 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector2 | value | The value to read/write |

#### SerializeValuePreChecked(ref Vector2\[\])


Serialize a Vector2 array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector2[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector2\[\] | value | The values to read/write |

#### SerializeValuePreChecked(ref Vector2Int)


Serialize a Vector2Int, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector2Int value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Vector2Int | value | The value to read/write |

#### SerializeValuePreChecked(ref Vector2Int\[\])


Serialize a Vector2Int array, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Vector2Int\[\] | value | The values to read/write |

#### SerializeValuePreChecked(ref Vector3)


Serialize a Vector3, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector3 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector3 | value | The value to read/write |

#### SerializeValuePreChecked(ref Vector3\[\])


Serialize a Vector3 array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector3[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector3\[\] | value | The values to read/write |

#### SerializeValuePreChecked(ref Vector3Int)


Serialize a Vector3Int, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector3Int value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Vector3Int | value | The value to read/write |

#### SerializeValuePreChecked(ref Vector3Int\[\])


Serialize a Vector3Int array, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description             |
|----------------|-------|-------------------------|
| Vector3Int\[\] | value | The value to read/write |

#### SerializeValuePreChecked(ref Vector4)


Serialize a Vector4, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector4 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector4 | value | The value to read/write |

#### SerializeValuePreChecked(ref Vector4\[\])


Serialize a Vector4Array, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked(ref Vector4[] value)
```



##### Parameters

| Type        | Name  | Description             |
|-------------|-------|-------------------------|
| Vector4\[\] | value | The value to read/write |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForEnums)


Serialize an enum, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                        |
|---------------------------|--------|--------------------------------------------------------------------|
| T                         | value  | The values to read/write                                           |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution of enums |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForFixedStrings)


Serialize a FixedString, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                             |
|----------------------------------|--------|-----------------------------------------------------------------------------------------|
| T                                | value  | The value to read/write                                                                 |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter that can be used for enabling overload resolution for fixed strings |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForPrimitives)


Serialize a primitive, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                            |
|--------------------------------|--------|----------------------------------------------------------------------------------------|
| T                              | value  | The value to read/write                                                                |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForStructs)


Serialize a struct, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                          |
|-----------------------------|--------|----------------------------------------------------------------------|
| T                           | value  | The values to read/write                                             |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution of structs |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForEnums)


Serialize an array of enums, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                        |
|---------------------------|--------|--------------------------------------------------------------------|
| T\[\]                     | value  | The values to read/write                                           |
| FastBufferWriter.ForEnums | unused | An unused parameter used for enabling overload resolution of enums |

##### Type Parameters

| Name | Description                                |
|------|--------------------------------------------|
| T    | The network serializable types in an array |

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForPrimitives)


Serialize an array of primitives, "pre-checked", which skips buffer
checks. In debug and editor builds, a check is made to ensure you've
called "PreCheck" before calling this. In release builds, calling this
without calling "PreCheck" may read or write past the end of the buffer,
which will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                             |
|--------------------------------|--------|-------------------------------------------------------------------------|
| T\[\]                          | value  | The values to read/write                                                |
| FastBufferWriter.ForPrimitives | unused | An unused parameter used for enabling overload resolution of primitives |

##### Type Parameters

| Name | Description                                |
|------|--------------------------------------------|
| T    | The network serializable types in an array |

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForStructs)


Serialize an array of structs, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
public void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                          |
|-----------------------------|--------|----------------------------------------------------------------------|
| T\[\]                       | value  | The values to read/write                                             |
| FastBufferWriter.ForStructs | unused | An unused parameter used for enabling overload resolution of structs |

##### Type Parameters

| Name | Description                                |
|------|--------------------------------------------|
| T    | The network serializable types in an array |



