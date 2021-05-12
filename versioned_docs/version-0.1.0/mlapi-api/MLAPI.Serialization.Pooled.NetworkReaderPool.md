---  
id: MLAPI.Serialization.Pooled.NetworkReaderPool  
title: MLAPI.Serialization.Pooled.NetworkReaderPool
---

<div class="markdown level0 summary">

Static class containing PooledNetworkReaders

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

    public static class NetworkReaderPool

## Methods 

### GetReader(Stream)

<div class="markdown level1 summary">

Retrieves a PooledNetworkReader

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledNetworkReader GetReader(Stream stream)

#### Parameters

| Type             | Name   | Description                            |
|------------------|--------|----------------------------------------|
| System.IO.Stream | stream | The stream the reader should read from |

#### Returns

| Type                | Description           |
|---------------------|-----------------------|
| PooledNetworkReader | A PooledNetworkReader |

### PutBackInPool(PooledNetworkReader)

<div class="markdown level1 summary">

Puts a PooledNetworkReader back into the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void PutBackInPool(PooledNetworkReader reader)

#### Parameters

| Type                | Name   | Description                   |
|---------------------|--------|-------------------------------|
| PooledNetworkReader | reader | The reader to put in the pool |
