---  
id: MLAPI.Serialization.Pooled.NetworkBufferPool  
title: MLAPI.Serialization.Pooled.NetworkBufferPool
---

<div class="markdown level0 summary">

Static class containing PooledNetworkBuffers

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

    public static class NetworkBufferPool

## Methods 

### GetBuffer()

<div class="markdown level1 summary">

Retrieves an expandable PooledNetworkBuffer from the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static PooledNetworkBuffer GetBuffer()

#### Returns

| Type                | Description                       |
|---------------------|-----------------------------------|
| PooledNetworkBuffer | An expandable PooledNetworkBuffer |

### PutBackInPool(PooledNetworkBuffer)

<div class="markdown level1 summary">

Puts a PooledNetworkBuffer back into the pool

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void PutBackInPool(PooledNetworkBuffer buffer)

#### Parameters

| Type                | Name   | Description                   |
|---------------------|--------|-------------------------------|
| PooledNetworkBuffer | buffer | The buffer to put in the pool |
