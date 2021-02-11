---  
id: MLAPI.Serialization.Pooled.BitStreamPool  
title: MLAPI.Serialization.Pooled.BitStreamPool  
---

<div class="markdown level0 summary">

Static class containing PooledBitStreams

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

    public static class BitStreamPool

## Methods 

### GetStream()

<div class="markdown level1 summary">

Retrieves an expandable PooledBitStream from the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledBitStream GetStream()

#### Returns

| Type            | Description                   |
|-----------------|-------------------------------|
| PooledBitStream | An expandable PooledBitStream |

### PutBackInPool(PooledBitStream)

<div class="markdown level1 summary">

Puts a PooledBitStream back into the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void PutBackInPool(PooledBitStream stream)

#### Parameters

| Type            | Name   | Description                   |
|-----------------|--------|-------------------------------|
| PooledBitStream | stream | The stream to put in the pool |
