---  
id: Unity.Networking.Transport.Utilities.NativeMultiQueue-1  
title: Unity.Networking.Transport.Utilities.NativeMultiQueue-1  
---

<div class="markdown level0 summary">

A NativeMultiQueue is a set of several FIFO queues split into buckets.
Each bucket has its own first and last item, and each bucket can have
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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NativeMultiQueue<T> : IDisposable where T : struct
```

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## 

### NativeMultiQueue(Int32)

<div class="markdown level1 summary">

Instantiates a new NativeMultiQueue which has a single bucket and the
specified capacity for the number of items for that bucket. Accessing
buckets out of range will grow the number of buckets, and pushing more
items than the initial capacity will increase the number of items for
each bucket.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NativeMultiQueue(int initialMessageCapacity)
```

#### Parameters

| Type         | Name                   | Description |
|--------------|------------------------|-------------|
| System.Int32 | initialMessageCapacity |             |

## 

### IsCreated

<div class="markdown level1 summary">

Whether this queue has been allocated (and not yet deallocated).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsCreated { get; }
```

#### Property Value

| Type           | Description                                                      |
|----------------|------------------------------------------------------------------|
| System.Boolean | True if this queue has been allocated (and not yet deallocated). |

## 

### Clear(Int32)

<div class="markdown level1 summary">

Remove all items from a specific bucket. If the bucket does not exist,
the call will not do anything.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Clear(int bucket)
```

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | bucket |             |

### Dequeue(Int32, out T)

<div class="markdown level1 summary">

Dequeue an item from a specific bucket. If the bucket does not exist, or
if the bucket is empty, the call will fail and return false.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Dequeue(int bucket, out T value)
```

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

Releases all resources (memory and safety handles).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### Enqueue(Int32, T)

<div class="markdown level1 summary">

Enqueue a new item to a specific bucket. If the specified bucket is
larger than the current amount of buckets, the queue's number of buckets
will be increased to match. If enqueueing the item would exceed the
queue's capacity, the queue's capacity will be increased.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Enqueue(int bucket, T value)
```

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | bucket |             |
| T            | value  |             |

### Peek(Int32, out T)

<div class="markdown level1 summary">

Peek the next item in a specific bucket. If the bucket does not exist,
or if the bucket is empty, the call will fail and return false.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Peek(int bucket, out T value)
```

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
