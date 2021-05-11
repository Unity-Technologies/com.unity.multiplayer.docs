---  
id: MLAPI.Messaging.RpcQueueHistoryFrame  
title: MLAPI.Messaging.RpcQueueHistoryFrame  
---

<div class="markdown level0 summary">

Used by the RpcQueueContainer to hold queued RPCs

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

    public class RpcQueueHistoryFrame

## Constructors 

### RpcQueueHistoryFrame(RpcQueueHistoryFrame.QueueFrameType, NetworkUpdateStage, Int32, Int32)

<div class="markdown level1 summary">

QueueHistoryFrame Constructor

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public RpcQueueHistoryFrame(RpcQueueHistoryFrame.QueueFrameType queueType, NetworkUpdateStage updateStage, int maxClients = 512, int maxStreamBounds = 1048576)

#### Parameters

| Type                                | Name            | Description                                                          |
|-------------------------------------|-----------------|----------------------------------------------------------------------|
| RpcQueueHistoryFrame.QueueFrameType | queueType       | Inbound or Outbound                                                  |
| NetworkUpdateStage                  | updateStage     | Network Update Stage this RpcQueueHistoryFrame is assigned to        |
| System.Int32                        | maxClients      | maximum number of clients                                            |
| System.Int32                        | maxStreamBounds | maximum size of the message stream an RPC can have (defaults to 1MB) |

## Fields

### HasLoopbackData

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool HasLoopbackData

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsDirty

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDirty

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LoopbackHistoryFrame

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public RpcQueueHistoryFrame LoopbackHistoryFrame

#### Field Value

| Type                 | Description |
|----------------------|-------------|
| RpcQueueHistoryFrame |             |

### QueueBuffer

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public PooledNetworkBuffer QueueBuffer

#### Field Value

| Type                | Description |
|---------------------|-------------|
| PooledNetworkBuffer |             |

### QueueItemOffsets

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public List<uint> QueueItemOffsets

#### Field Value

| Type                                                 | Description |
|------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;System.UInt32&gt; |             |

### QueueReader

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public PooledNetworkReader QueueReader

#### Field Value

| Type                | Description |
|---------------------|-------------|
| PooledNetworkReader |             |

### QueueWriter

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public PooledNetworkWriter QueueWriter

#### Field Value

| Type                | Description |
|---------------------|-------------|
| PooledNetworkWriter |             |

### TotalSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint TotalSize

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

## Methods 

### CloseQueue()

<div class="markdown level1 summary">

Should be called once all processing of the current frame is complete.
This only closes the m\_CurrentQueueItem's stream which is used as a
"middle-man" (currently) for delivering the RPC message to the method
requesting a queue item from a frame.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CloseQueue()

### GetCurrentMarkedPosition()

<div class="markdown level1 summary">

Returns the current position that was marked (to track size of RPC msg)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long GetCurrentMarkedPosition()

#### Returns

| Type         | Description              |
|--------------|--------------------------|
| System.Int64 | m\_CurrentStreamSizeMark |

### GetQueueFrameType()

<div class="markdown level1 summary">

Returns whether this is an inbound or outbound frame

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public RpcQueueHistoryFrame.QueueFrameType GetQueueFrameType()

#### Returns

| Type                                | Description |
|-------------------------------------|-------------|
| RpcQueueHistoryFrame.QueueFrameType |             |

### MarkCurrentStreamPosition()

<div class="markdown level1 summary">

Marks the current size of the stream (used primarily for sanity checks)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void MarkCurrentStreamPosition()
