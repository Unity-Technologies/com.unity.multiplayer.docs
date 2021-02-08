---  
id: MLAPI.Serialization.Pooled.BitStreamPool  
title: MLAPI.Serialization.Pooled.BitStreamPool  
---

<div class="markdown level0 summary" markdown="1">

Static class containing PooledBitStreams

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

##### Syntax [MLAPI_Serialization_Pooled_BitStreamPool_syntax]

    public static class BitStreamPool

## Methods 

### GetStream() [MLAPI_Serialization_Pooled_BitStreamPool_GetStream]

<div class="markdown level1 summary" markdown="1">

Retrieves an expandable PooledBitStream from the pool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static PooledBitStream GetStream()

#### Returns [returns]

| Type            | Description                   |
|-----------------|-------------------------------|
| PooledBitStream | An expandable PooledBitStream |

### PutBackInPool(PooledBitStream) [MLAPI_Serialization_Pooled_BitStreamPool_PutBackInPool_MLAPI_Serialization_Pooled_PooledBitStream_]

<div class="markdown level1 summary" markdown="1">

Puts a PooledBitStream back into the pool

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void PutBackInPool(PooledBitStream stream)

#### Parameters [parameters]

| Type            | Name   | Description                   |
|-----------------|--------|-------------------------------|
| PooledBitStream | stream | The stream to put in the pool |
