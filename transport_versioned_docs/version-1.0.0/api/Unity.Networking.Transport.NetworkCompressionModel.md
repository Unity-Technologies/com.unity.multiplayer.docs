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

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct NetworkCompressionModel : IDisposable

## Constructors 

### NetworkCompressionModel(Allocator)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkCompressionModel(Allocator allocator)

#### Parameters

| Type                        | Name      | Description |
|-----------------------------|-----------|-------------|
| Unity.Collections.Allocator | allocator |             |

## Fields

### bucketOffsets

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint *bucketOffsets

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

    public byte *bucketSizes

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

    public ushort *decodeTable

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

    public ushort *encodeTable

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.UInt16\* |             |

## Methods 

### CalculateBucket(UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int CalculateBucket(uint value)

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

    public void Dispose()

### Implements

<div>

System.IDisposable

</div>
