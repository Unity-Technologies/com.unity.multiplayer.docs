---  
id: Unity.Networking.Transport.PacketsQueue  
title: Unity.Networking.Transport.PacketsQueue  
---

<div class="markdown level0 summary">

A queue of packets with an internal pool of preallocated packet buffers

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
public struct PacketsQueue : IDisposable
```

## 

### Capacity

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Capacity { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Count

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Count { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### IsCreated

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsCreated { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Item\[Int32\]

<div class="markdown level1 summary">

Gets the packet processor for the packetIndex.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly PacketProcessor this[int packetIndex] { get; }
```

#### Parameters

| Type         | Name        | Description                                        |
|--------------|-------------|----------------------------------------------------|
| System.Int32 | packetIndex | The index of the packet in the current send queue. |

#### Property Value

| Type            | Description                                                |
|-----------------|------------------------------------------------------------|
| PacketProcessor | The packet processor for the packet in the provided index. |

#### Exceptions

| Type                            | Condition                                               |
|---------------------------------|---------------------------------------------------------|
| System.IndexOutOfRangeException | Throws an exception if the index provided is not valid. |

## 

### Clear()

<div class="markdown level1 summary">

Removes and releases all the packets in the queue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Clear()
```

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### EnqueuePacket(out PacketProcessor)

<div class="markdown level1 summary">

Acquires a new packet buffer from the packets pool if there are
available and returns its PacketProcessor.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool EnqueuePacket(out PacketProcessor packetProcessor)
```

#### Parameters

| Type            | Name            | Description                            |
|-----------------|-----------------|----------------------------------------|
| PacketProcessor | packetProcessor | The PacketProcessor of the new packet. |

#### Returns

| Type           | Description                                                                              |
|----------------|------------------------------------------------------------------------------------------|
| System.Boolean | Returns true if the packet was created. Returns false if there are no buffers available. |

### EnqueuePackets(ref PacketsQueue)

<div class="markdown level1 summary">

Coppies all the packets from the origin queue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void EnqueuePackets(ref PacketsQueue originQueue)
```

#### Parameters

| Type         | Name        | Description                                     |
|--------------|-------------|-------------------------------------------------|
| PacketsQueue | originQueue | The queue that contains the packets to enqueue. |

### Implements

<div>

System.IDisposable

</div>
