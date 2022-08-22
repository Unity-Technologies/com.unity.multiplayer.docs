---
id: Unity.Netcode.IReaderWriter
title: Unity.Netcode.IReaderWriter
---

# Interface IReaderWriter


Interface for an implementation of one side of a two-way serializer






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public interface IReaderWriter
```



### Properties

#### IsReader


Check whether this implementation is a "reader" - if it's been
constructed to deserialize data






##### Declaration


``` lang-csharp
bool IsReader { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsWriter


Check whether this implementation is a "writer" - if it's been
constructed to serialize data






##### Declaration


``` lang-csharp
bool IsWriter { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### GetFastBufferReader()


Get the underlying FastBufferReader struct. Only valid when IsReader ==
true






##### Declaration


``` lang-csharp
FastBufferReader GetFastBufferReader()
```



##### Returns

| Type             | Description                 |
|------------------|-----------------------------|
| FastBufferReader | underlying FastBufferReader |

#### GetFastBufferWriter()


Get the underlying FastBufferWriter struct. Only valid when IsWriter ==
true






##### Declaration


``` lang-csharp
FastBufferWriter GetFastBufferWriter()
```



##### Returns

| Type             | Description                 |
|------------------|-----------------------------|
| FastBufferWriter | underlying FastBufferWriter |

#### PreCheck(Int32)


Performs an advance check to ensure space is available to read/write one
or more values. This provides a performance benefit for serializing
multiple values using the SerializeValuePreChecked methods. But note
that the benefit is small and only likely to be noticeable if
serializing a very large number of items.






##### Declaration


``` lang-csharp
bool PreCheck(int amount)
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
void SerializeNetworkSerializable<T>(ref T value)
    where T : INetworkSerializable, new()
```



##### Parameters

| Type | Name  | Description             |
|------|-------|-------------------------|
| T    | value | The value to read/write |

##### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The network serializable type |

#### SerializeValue(ref Color)


Read or write a Color value






##### Declaration


``` lang-csharp
void SerializeValue(ref Color value)
```



##### Parameters

| Type  | Name  | Description             |
|-------|-------|-------------------------|
| Color | value | The value to read/write |

#### SerializeValue(ref Color\[\])


Read or write an array of Color values






##### Declaration


``` lang-csharp
void SerializeValue(ref Color[] value)
```



##### Parameters

| Type      | Name  | Description              |
|-----------|-------|--------------------------|
| Color\[\] | value | The values to read/write |

#### SerializeValue(ref Color32)


Read or write a Color32 value






##### Declaration


``` lang-csharp
void SerializeValue(ref Color32 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Color32 | value | The value to read/write |

#### SerializeValue(ref Color32\[\])


Read or write an array of Color32 values






##### Declaration


``` lang-csharp
void SerializeValue(ref Color32[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Color32\[\] | value | The values to read/write |

#### SerializeValue(ref Quaternion)


Read or write a Quaternion value






##### Declaration


``` lang-csharp
void SerializeValue(ref Quaternion value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Quaternion | value | The value to read/write |

#### SerializeValue(ref Quaternion\[\])


Read or write an array of Quaternion values






##### Declaration


``` lang-csharp
void SerializeValue(ref Quaternion[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Quaternion\[\] | value | The values to read/write |

#### SerializeValue(ref Ray)


Read or write a Ray value






##### Declaration


``` lang-csharp
void SerializeValue(ref Ray value)
```



##### Parameters

| Type | Name  | Description             |
|------|-------|-------------------------|
| Ray  | value | The value to read/write |

#### SerializeValue(ref Ray\[\])


Read or write an array of Ray values






##### Declaration


``` lang-csharp
void SerializeValue(ref Ray[] value)
```



##### Parameters

| Type    | Name  | Description              |
|---------|-------|--------------------------|
| Ray\[\] | value | The values to read/write |

#### SerializeValue(ref Ray2D)


Read or write a Ray2D value






##### Declaration


``` lang-csharp
void SerializeValue(ref Ray2D value)
```



##### Parameters

| Type  | Name  | Description             |
|-------|-------|-------------------------|
| Ray2D | value | The value to read/write |

#### SerializeValue(ref Ray2D\[\])


Read or write an array of Ray2D values






##### Declaration


``` lang-csharp
void SerializeValue(ref Ray2D[] value)
```



##### Parameters

| Type      | Name  | Description              |
|-----------|-------|--------------------------|
| Ray2D\[\] | value | The values to read/write |

#### SerializeValue(ref Byte)


Read or write a single byte






##### Declaration


``` lang-csharp
void SerializeValue(ref byte value)
```



##### Parameters

| Type        | Name  | Description             |
|-------------|-------|-------------------------|
| System.Byte | value | The value to read/write |

#### SerializeValue(ref String, Boolean)


Read or write a string






##### Declaration


``` lang-csharp
void SerializeValue(ref string s, bool oneByteChars = false)
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
void SerializeValue(ref Vector2 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector2 | value | The value to read/write |

#### SerializeValue(ref Vector2\[\])


Read or write an array of Vector2 values






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector2[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector2\[\] | value | The values to read/write |

#### SerializeValue(ref Vector2Int)


Read or write a Vector2Int value






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector2Int value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Vector2Int | value | The value to read/write |

#### SerializeValue(ref Vector2Int\[\])


Read or write an array of Vector2Int values






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector2Int[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Vector2Int\[\] | value | The values to read/write |

#### SerializeValue(ref Vector3)


Read or write a Vector3 value






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector3 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector3 | value | The value to read/write |

#### SerializeValue(ref Vector3\[\])


Read or write an array of Vector3 values






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector3[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector3\[\] | value | The values to read/write |

#### SerializeValue(ref Vector3Int)


Read or write a Vector3Int value






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector3Int value)
```



##### Parameters

| Type       | Name  | Description             |
|------------|-------|-------------------------|
| Vector3Int | value | The value to read/write |

#### SerializeValue(ref Vector3Int\[\])


Read or write an array of Vector3Int values






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector3Int[] value)
```



##### Parameters

| Type           | Name  | Description              |
|----------------|-------|--------------------------|
| Vector3Int\[\] | value | The values to read/write |

#### SerializeValue(ref Vector4)


Read or write a Vector4 value






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector4 value)
```



##### Parameters

| Type    | Name  | Description             |
|---------|-------|-------------------------|
| Vector4 | value | The value to read/write |

#### SerializeValue(ref Vector4\[\])


Read or write an array of Vector4 values






##### Declaration


``` lang-csharp
void SerializeValue(ref Vector4[] value)
```



##### Parameters

| Type        | Name  | Description              |
|-------------|-------|--------------------------|
| Vector4\[\] | value | The values to read/write |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForEnums)


Read or write an enum value






##### Declaration


``` lang-csharp
void SerializeValue<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                            |
|----------------------------------|--------|----------------------------------------------------------------------------------------|
| T                                | value  | The value to read/write                                                                |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValue\<T\>(ref T, FastBufferWriter.ForNetworkSerializable)


Read or write a struct or class value implementing INetworkSerializable






##### Declaration


``` lang-csharp
void SerializeValue<T>(ref T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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
void SerializeValuePreChecked(ref Color value)
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
void SerializeValuePreChecked(ref Color[] value)
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
void SerializeValuePreChecked(ref Color32 value)
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
void SerializeValuePreChecked(ref Color32[] value)
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
void SerializeValuePreChecked(ref Quaternion value)
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
void SerializeValuePreChecked(ref Quaternion[] value)
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
void SerializeValuePreChecked(ref Ray value)
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
void SerializeValuePreChecked(ref Ray[] value)
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
void SerializeValuePreChecked(ref Ray2D value)
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
void SerializeValuePreChecked(ref Ray2D[] value)
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
void SerializeValuePreChecked(ref byte value)
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
void SerializeValuePreChecked(ref string s, bool oneByteChars = false)
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
void SerializeValuePreChecked(ref Vector2 value)
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
void SerializeValuePreChecked(ref Vector2[] value)
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
void SerializeValuePreChecked(ref Vector2Int value)
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
void SerializeValuePreChecked(ref Vector2Int[] value)
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
void SerializeValuePreChecked(ref Vector3 value)
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
void SerializeValuePreChecked(ref Vector3[] value)
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
void SerializeValuePreChecked(ref Vector3Int value)
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
void SerializeValuePreChecked(ref Vector3Int[] value)
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
void SerializeValuePreChecked(ref Vector4 value)
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
void SerializeValuePreChecked(ref Vector4[] value)
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
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                                        |
|---------------------------|--------|----------------------------------------------------------------------------------------------------|
| T                         | value  | The value to read/write                                                                            |
| FastBufferWriter.ForEnums | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForFixedStrings)


Serialize a FixedString, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForFixedStrings unused = default(FastBufferWriter.ForFixedStrings))
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type                             | Name   | Description                                                                                        |
|----------------------------------|--------|----------------------------------------------------------------------------------------------------|
| T                                | value  | The value to read/write                                                                            |
| FastBufferWriter.ForFixedStrings | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForPrimitives)


Serialize a primitive, "pre-checked", which skips buffer checks. In
debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                                        |
|--------------------------------|--------|----------------------------------------------------------------------------------------------------|
| T                              | value  | The value to read/write                                                                            |
| FastBufferWriter.ForPrimitives | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked\<T\>(ref T, FastBufferWriter.ForStructs)


Serialize a struct, "pre-checked", which skips buffer checks. In debug
and editor builds, a check is made to ensure you've called "PreCheck"
before calling this. In release builds, calling this without calling
"PreCheck" may read or write past the end of the buffer, which will
cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                                        |
|-----------------------------|--------|----------------------------------------------------------------------------------------------------|
| T                           | value  | The value to read/write                                                                            |
| FastBufferWriter.ForStructs | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForEnums)


Serialize an array of enums, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
    where T : struct, Enum
```



##### Parameters

| Type                      | Name   | Description                                                                                        |
|---------------------------|--------|----------------------------------------------------------------------------------------------------|
| T\[\]                     | value  | The values to read/write                                                                           |
| FastBufferWriter.ForEnums | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForPrimitives)


Serialize an array of primitives, "pre-checked", which skips buffer
checks. In debug and editor builds, a check is made to ensure you've
called "PreCheck" before calling this. In release builds, calling this
without calling "PreCheck" may read or write past the end of the buffer,
which will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
    where T : struct, IComparable, IConvertible, IComparable<T>, IEquatable<T>
```



##### Parameters

| Type                           | Name   | Description                                                                                        |
|--------------------------------|--------|----------------------------------------------------------------------------------------------------|
| T\[\]                          | value  | The values to read/write                                                                           |
| FastBufferWriter.ForPrimitives | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |

#### SerializeValuePreChecked\<T\>(ref T\[\], FastBufferWriter.ForStructs)


Serialize an array of structs, "pre-checked", which skips buffer checks.
In debug and editor builds, a check is made to ensure you've called
"PreCheck" before calling this. In release builds, calling this without
calling "PreCheck" may read or write past the end of the buffer, which
will cause memory corruption and undefined behavior.






##### Declaration


``` lang-csharp
void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
    where T : struct, INetworkSerializeByMemcpy
```



##### Parameters

| Type                        | Name   | Description                                                                                        |
|-----------------------------|--------|----------------------------------------------------------------------------------------------------|
| T\[\]                       | value  | The values to read/write                                                                           |
| FastBufferWriter.ForStructs | unused | An unused parameter that can be used for enabling overload resolution based on generic constraints |

##### Type Parameters

| Name | Description               |
|------|---------------------------|
| T    | The type being serialized |



