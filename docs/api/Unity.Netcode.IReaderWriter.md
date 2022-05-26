---  
id: Unity.Netcode.IReaderWriter  
title: Unity.Netcode.IReaderWriter  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public interface IReaderWriter
```

</div>

### Properties

#### IsReader

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
bool IsReader { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsWriter

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
bool IsWriter { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### GetFastBufferReader()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
FastBufferReader GetFastBufferReader()
```

</div>

##### Returns

| Type             | Description |
|------------------|-------------|
| FastBufferReader |             |

#### GetFastBufferWriter()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
FastBufferWriter GetFastBufferWriter()
```

</div>

##### Returns

| Type             | Description |
|------------------|-------------|
| FastBufferWriter |             |

#### PreCheck(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
bool PreCheck(int amount)
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
void SerializeNetworkSerializable<T>(ref T value)
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
void SerializeValue(ref Color value)
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
void SerializeValue(ref Color[] value)
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
void SerializeValue(ref Color32 value)
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
void SerializeValue(ref Color32[] value)
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
void SerializeValue(ref Quaternion value)
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
void SerializeValue(ref Quaternion[] value)
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
void SerializeValue(ref Ray value)
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
void SerializeValue(ref Ray[] value)
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
void SerializeValue(ref Ray2D value)
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
void SerializeValue(ref Ray2D[] value)
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
void SerializeValue(ref byte value)
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
void SerializeValue(ref string s, bool oneByteChars = false)
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
void SerializeValue(ref Vector2 value)
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
void SerializeValue(ref Vector2[] value)
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
void SerializeValue(ref Vector3 value)
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
void SerializeValue(ref Vector3[] value)
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
void SerializeValue(ref Vector4 value)
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
void SerializeValue(ref Vector4[] value)
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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
void SerializeValue<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForNetworkSerializable unused = default(FastBufferWriter.ForNetworkSerializable))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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
void SerializeValue<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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
void SerializeValuePreChecked(ref Color value)
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
void SerializeValuePreChecked(ref Color[] value)
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
void SerializeValuePreChecked(ref Color32 value)
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
void SerializeValuePreChecked(ref Color32[] value)
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
void SerializeValuePreChecked(ref Quaternion value)
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
void SerializeValuePreChecked(ref Quaternion[] value)
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
void SerializeValuePreChecked(ref Ray value)
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
void SerializeValuePreChecked(ref Ray[] value)
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
void SerializeValuePreChecked(ref Ray2D value)
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
void SerializeValuePreChecked(ref Ray2D[] value)
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
void SerializeValuePreChecked(ref byte value)
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
void SerializeValuePreChecked(ref string s, bool oneByteChars = false)
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
void SerializeValuePreChecked(ref Vector2 value)
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
void SerializeValuePreChecked(ref Vector2[] value)
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
void SerializeValuePreChecked(ref Vector3 value)
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
void SerializeValuePreChecked(ref Vector3[] value)
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
void SerializeValuePreChecked(ref Vector4 value)
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
void SerializeValuePreChecked(ref Vector4[] value)
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
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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
void SerializeValuePreChecked<T>(ref T value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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
void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForEnums unused = default(FastBufferWriter.ForEnums))
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
void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForPrimitives unused = default(FastBufferWriter.ForPrimitives))
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
void SerializeValuePreChecked<T>(ref T[] value, FastBufferWriter.ForStructs unused = default(FastBufferWriter.ForStructs))
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

 
