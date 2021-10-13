---  
id: MLAPI.Collections.FixedQueue-1  
title: MLAPI.Collections.FixedQueue-1  
---

<div class="markdown level0 summary">

Queue with a fixed size

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

    public sealed class FixedQueue<T>

##### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type of the queue |

## Constructors 

### FixedQueue(Int32)

<div class="markdown level1 summary">

Creates a new FixedQueue with a given size

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public FixedQueue(int maxSize)

#### Parameters

| Type         | Name    | Description           |
|--------------|---------|-----------------------|
| System.Int32 | maxSize | The size of the queue |

## Properties 

### Count

<div class="markdown level1 summary">

The amount of enqueued objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Count { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Item\[Int32\]

<div class="markdown level1 summary">

Gets the element at a given virtual index

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public T this[int index] { get; }

#### Parameters

| Type         | Name  | Description                            |
|--------------|-------|----------------------------------------|
| System.Int32 | index | The virtual index to get the item from |

#### Property Value

| Type | Description                      |
|------|----------------------------------|
| T    | The element at the virtual index |

## Methods 

### Dequeue()

<div class="markdown level1 summary">

Dequeues an object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public T Dequeue()

#### Returns

| Type | Description |
|------|-------------|
| T    |             |

### ElementAt(Int32)

<div class="markdown level1 summary">

Gets the element at a given virtual index

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public T ElementAt(int index)

#### Parameters

| Type         | Name  | Description                            |
|--------------|-------|----------------------------------------|
| System.Int32 | index | The virtual index to get the item from |

#### Returns

| Type | Description                      |
|------|----------------------------------|
| T    | The element at the virtual index |

### Enqueue(T)

<div class="markdown level1 summary">

Enqueues an object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Enqueue(T t)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | t    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
