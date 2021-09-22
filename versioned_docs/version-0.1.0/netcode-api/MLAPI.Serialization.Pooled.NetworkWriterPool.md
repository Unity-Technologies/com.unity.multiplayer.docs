---  
id: MLAPI.Serialization.Pooled.NetworkWriterPool  
title: MLAPI.Serialization.Pooled.NetworkWriterPool
---

<div class="markdown level0 summary">

Static class containing PooledNetworkWriters

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class NetworkWriterPool

## Methods 

### GetWriter(Stream)

<div class="markdown level1 summary">

Retrieves a PooledNetworkWriter

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledNetworkWriter GetWriter(Stream stream)

#### Parameters

| Type             | Name   | Description                           |
|------------------|--------|---------------------------------------|
| System.IO.Stream | stream | The stream the writer should write to |

#### Returns

| Type                | Description           |
|---------------------|-----------------------|
| PooledNetworkWriter | A PooledNetworkWriter |

### PutBackInPool(PooledNetworkWriter)

<div class="markdown level1 summary">

Puts a PooledNetworkWriter back into the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void PutBackInPool(PooledNetworkWriter writer)

#### Parameters

| Type                | Name   | Description                   |
|---------------------|--------|-------------------------------|
| PooledNetworkWriter | writer | The writer to put in the pool |
