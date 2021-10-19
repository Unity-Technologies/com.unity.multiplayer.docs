---  
id: Unity.Networking.Transport.NetworkCompressionModel  
title: Unity.Networking.Transport.NetworkCompressionModel  
---

<div class="markdown level0 summary">

Used to provide Huffman compression when using packed DataStream
functions

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

Initializes a new instance of the NetworkCompressionModel class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkCompressionModel(Allocator allocator)
```

#### Parameters

| Type      | Name      | Description   |
|-----------|-----------|---------------|
| Allocator | allocator | The allocator |

## 

### CalculateBucket(UInt32)

<div class="markdown level1 summary">

Calculates the bucket using the specified value

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
| System.UInt32 | value | The value   |

#### Returns

| Type         | Description      |
|--------------|------------------|
| System.Int32 | The bucket index |

### Dispose()

<div class="markdown level1 summary">

Disposes this instance

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
