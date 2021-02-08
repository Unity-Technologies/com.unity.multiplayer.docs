---  
id: MLAPI.Serialization.Pooled.BitReaderPool  
title: MLAPI.Serialization.Pooled.BitReaderPool  
---

<div class="markdown level0 summary" markdown="1">

Static class containing PooledBitReaders

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_Pooled_BitReaderPool_syntax]

    public static class BitReaderPool

## Methods 

### GetReader(Stream) [MLAPI_Serialization_Pooled_BitReaderPool_GetReader_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Retrieves a PooledBitReader

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static PooledBitReader GetReader(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description                            |
|------------------|--------|----------------------------------------|
| System.IO.Stream | stream | The stream the reader should read from |

#### Returns [returns]

| Type            | Description       |
|-----------------|-------------------|
| PooledBitReader | A PooledBitReader |

### PutBackInPool(PooledBitReader) [MLAPI_Serialization_Pooled_BitReaderPool_PutBackInPool_MLAPI_Serialization_Pooled_PooledBitReader_]

<div class="markdown level1 summary" markdown="1">

Puts a PooledBitReader back into the pool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void PutBackInPool(PooledBitReader reader)

#### Parameters [parameters-1]

| Type            | Name   | Description                   |
|-----------------|--------|-------------------------------|
| PooledBitReader | reader | The reader to put in the pool |
