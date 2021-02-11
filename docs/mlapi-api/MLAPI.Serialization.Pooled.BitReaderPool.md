---  
id: MLAPI.Serialization.Pooled.BitReaderPool  
title: MLAPI.Serialization.Pooled.BitReaderPool  
---

<div class="markdown level0 summary">

Static class containing PooledBitReaders

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

    public static class BitReaderPool

## Methods 

### GetReader(Stream)

<div class="markdown level1 summary">

Retrieves a PooledBitReader

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledBitReader GetReader(Stream stream)

#### Parameters

| Type             | Name   | Description                            |
|------------------|--------|----------------------------------------|
| System.IO.Stream | stream | The stream the reader should read from |

#### Returns

| Type            | Description       |
|-----------------|-------------------|
| PooledBitReader | A PooledBitReader |

### PutBackInPool(PooledBitReader)

<div class="markdown level1 summary">

Puts a PooledBitReader back into the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void PutBackInPool(PooledBitReader reader)

#### Parameters

| Type            | Name   | Description                   |
|-----------------|--------|-------------------------------|
| PooledBitReader | reader | The reader to put in the pool |
