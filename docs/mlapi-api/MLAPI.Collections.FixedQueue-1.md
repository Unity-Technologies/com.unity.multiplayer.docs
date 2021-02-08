---  
id: MLAPI.Collections.FixedQueue-1  
title: MLAPI.Collections.FixedQueue-1  
---

<div class="markdown level0 summary" markdown="1">

Queue with a fixed size

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

##### Syntax [MLAPI_Collections_FixedQueue_1_syntax]

    public sealed class FixedQueue<T>

##### Type Parameters [type-parameters]

| Name | Description           |
|------|-----------------------|
| T    | The type of the queue |

## Constructors 

### FixedQueue(Int32) [MLAPI_Collections_FixedQueue_1__ctor_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Creates a new FixedQueue with a given size

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public FixedQueue(int maxSize)

#### Parameters [parameters]

| Type         | Name    | Description           |
|--------------|---------|-----------------------|
| System.Int32 | maxSize | The size of the queue |

## Properties 

### Count [MLAPI_Collections_FixedQueue_1_Count]

<div class="markdown level1 summary" markdown="1">

The amount of enqueued objects

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public int Count { get; }

#### Property Value [property-value]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Item\[Int32\] [MLAPI_Collections_FixedQueue_1_Item_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Gets the element at a given virtual index

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public T this[int index] { get; }

#### Parameters [parameters-1]

| Type         | Name  | Description                            |
|--------------|-------|----------------------------------------|
| System.Int32 | index | The virtual index to get the item from |

#### Property Value [property-value-1]

| Type | Description                      |
|------|----------------------------------|
| T    | The element at the virtual index |

## Methods 

### Dequeue() [MLAPI_Collections_FixedQueue_1_Dequeue]

<div class="markdown level1 summary" markdown="1">

Dequeues an object

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public T Dequeue()

#### Returns [returns]

| Type | Description |
|------|-------------|
| T    |             |

### ElementAt(Int32) [MLAPI_Collections_FixedQueue_1_ElementAt_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Gets the element at a given virtual index

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public T ElementAt(int index)

#### Parameters [parameters-2]

| Type         | Name  | Description                            |
|--------------|-------|----------------------------------------|
| System.Int32 | index | The virtual index to get the item from |

#### Returns [returns-1]

| Type | Description                      |
|------|----------------------------------|
| T    | The element at the virtual index |

### Enqueue(T) [MLAPI_Collections_FixedQueue_1_Enqueue__0_]

<div class="markdown level1 summary" markdown="1">

Enqueues an object

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public bool Enqueue(T t)

#### Parameters [parameters-3]

| Type | Name | Description |
|------|------|-------------|
| T    | t    |             |

#### Returns [returns-2]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
