---  
id: Unity.Networking.Transport.NetworkCompressionModel  
title: Unity.Networking.Transport.NetworkCompressionModel  
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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkCompressionModel : IDisposable
```

## 

### NetworkCompressionModel(Allocator)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkCompressionModel(Allocator allocator)
```

#### Parameters

| Type      | Name      | Description |
|-----------|-----------|-------------|
| Allocator | allocator |             |

## 

### bucketOffsets

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint *bucketOffsets
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.UInt32\* |             |

### bucketSizes

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *bucketSizes
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### decodeTable

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort *decodeTable
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.UInt16\* |             |

### encodeTable

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort *encodeTable
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.UInt16\* |             |

## 

### CalculateBucket(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CalculateBucket(uint value)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### Implements

<div>

System.IDisposable

</div>
