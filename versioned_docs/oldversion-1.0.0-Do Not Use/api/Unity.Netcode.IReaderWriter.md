---  
id: Unity.Netcode.IReaderWriter  
title: Unity.Netcode.IReaderWriter  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public interface IReaderWriter
```

## 

### IsReader

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
bool IsReader { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsWriter

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
bool IsWriter { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### GetFastBufferReader()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
FastBufferReader GetFastBufferReader()
```

#### Returns

| Type             | Description |
|------------------|-------------|
| FastBufferReader |             |

### GetFastBufferWriter()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
FastBufferWriter GetFastBufferWriter()
```

#### Returns

| Type             | Description |
|------------------|-------------|
| FastBufferWriter |             |

### PreCheck(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
bool PreCheck(int amount)
```

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | amount |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### SerializeNetworkSerializable\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeNetworkSerializable<T>(ref T value)
    where T : INetworkSerializable, new()
```

#### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValue(ref Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValue(ref byte value)
```

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

### SerializeValue(ref String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValue(ref string s, bool oneByteChars = false)
```

#### Parameters

| Type           | Name         | Description |
|----------------|--------------|-------------|
| System.String  | s            |             |
| System.Boolean | oneByteChars |             |

### SerializeValue\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValue<T>(ref T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValue\&lt;T&gt;(ref T\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValue<T>(ref T[] array)
    where T : struct
```

#### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| T\[\] | array |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValuePreChecked(ref Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValuePreChecked(ref byte value)
```

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

### SerializeValuePreChecked(ref String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValuePreChecked(ref string s, bool oneByteChars = false)
```

#### Parameters

| Type           | Name         | Description |
|----------------|--------------|-------------|
| System.String  | s            |             |
| System.Boolean | oneByteChars |             |

### SerializeValuePreChecked\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValuePreChecked<T>(ref T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeValuePreChecked\&lt;T&gt;(ref T\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void SerializeValuePreChecked<T>(ref T[] array)
    where T : struct
```

#### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| T\[\] | array |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |
