---

id: MLAPI.Serialization.Pooled.BitWriterPool

title: MLAPI.Serialization.Pooled.BitWriterPool

---

Class BitWriterPool

<div class="markdown level0 summary" markdown="1">

Static class containing PooledBitWriters

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

##### Syntax [MLAPI_Serialization_Pooled_BitWriterPool_syntax]

    public static class BitWriterPool

## Methods 

### GetWriter(Stream) [MLAPI_Serialization_Pooled_BitWriterPool_GetWriter_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Retrieves a PooledBitWriter

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static PooledBitWriter GetWriter(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description                           |
|------------------|--------|---------------------------------------|
| System.IO.Stream | stream | The stream the writer should write to |

#### Returns [returns]

| Type            | Description       |
|-----------------|-------------------|
| PooledBitWriter | A PooledBitWriter |

### PutBackInPool(PooledBitWriter) [MLAPI_Serialization_Pooled_BitWriterPool_PutBackInPool_MLAPI_Serialization_Pooled_PooledBitWriter_]

<div class="markdown level1 summary" markdown="1">

Puts a PooledBitWriter back into the pool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void PutBackInPool(PooledBitWriter writer)

#### Parameters [parameters-1]

| Type            | Name   | Description                   |
|-----------------|--------|-------------------------------|
| PooledBitWriter | writer | The writer to put in the pool |
