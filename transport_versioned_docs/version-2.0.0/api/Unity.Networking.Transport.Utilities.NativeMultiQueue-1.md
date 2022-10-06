---  
id: Unity.Networking.Transport.Utilities.NativeMultiQueue-1  
title: Unity.Networking.Transport.Utilities.NativeMultiQueue-1  
---

<div class="markdown level0 summary">

A NativeMultiQueue is a set of several FIFO queues split into buckets.
Each bucket has its own first and last item and each bucket can have
items pushed and popped individually.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct NativeMultiQueue<T> : IDisposable where T : struct

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## Constructors 

### NativeMultiQueue(Int32)

<div class="markdown level1 summary">

New NativeMultiQueue has a single bucket and the specified number of
items for that bucket. Accessing buckets out of range will grow the
number of buckets and pushing more items than the initial capacity will
increase the number of items for each bucket.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NativeMultiQueue(int initialMessageCapacity)

#### Parameters

| Type         | Name                   | Description |
|--------------|------------------------|-------------|
| System.Int32 | initialMessageCapacity |             |

## Properties 

### IsCreated

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsCreated { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### Clear(Int32)

<div class="markdown level1 summary">

Remove all items from a specific bucket. If the bucket does not exist
the call will not do anything.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Clear(int bucket)

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | bucket |             |

### Dequeue(Int32, out T)

<div class="markdown level1 summary">

Dequeue an item from a specific bucket. If the bucket does not exist or
if the bucket is empty the call will fail and return false.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Dequeue(int bucket, out T value)

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | bucket |             |
| T            | value  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### Enqueue(Int32, T)

<div class="markdown level1 summary">

Enqueue a new item to a specific bucket. If the bucket does not yet
exist the number of buckets will be increased and if the queue is full
the number of items for each bucket will be increased.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Enqueue(int bucket, T value)

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | bucket |             |
| T            | value  |             |

### Peek(Int32, out T)

<div class="markdown level1 summary">

Peek the next item in a specific bucket. If the bucket does not exist or
if the bucket is empty the call will fail and return false.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Peek(int bucket, out T value)

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | bucket |             |
| T            | value  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IDisposable

</div>
