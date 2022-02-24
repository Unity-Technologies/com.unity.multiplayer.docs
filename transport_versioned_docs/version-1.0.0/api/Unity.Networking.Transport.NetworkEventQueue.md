---  
id: Unity.Networking.Transport.NetworkEventQueue  
title: Unity.Networking.Transport.NetworkEventQueue  
---

<div class="markdown level0 summary">

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

    public struct NetworkEventQueue : IDisposable

## Constructors 

### NetworkEventQueue(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEventQueue(int queueSizePerConnection)

#### Parameters

| Type         | Name                   | Description |
|--------------|------------------------|-------------|
| System.Int32 | queueSizePerConnection |             |

## Methods 

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### GetCountForConnection(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int GetCountForConnection(int connectionId)

#### Parameters

| Type         | Name         | Description |
|--------------|--------------|-------------|
| System.Int32 | connectionId |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PopEvent(out Int32, out Int32, out Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEvent(out int id, out int offset, out int size)

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | id     |             |
| System.Int32 | offset |             |
| System.Int32 | size   |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEvent(out Int32, out Int32, out Int32, out Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEvent(out int id, out int offset, out int size, out int pipelineId)

#### Parameters

| Type         | Name       | Description |
|--------------|------------|-------------|
| System.Int32 | id         |             |
| System.Int32 | offset     |             |
| System.Int32 | size       |             |
| System.Int32 | pipelineId |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEventForConnection(Int32, out Int32, out Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEventForConnection(int connectionId, out int offset, out int size)

#### Parameters

| Type         | Name         | Description |
|--------------|--------------|-------------|
| System.Int32 | connectionId |             |
| System.Int32 | offset       |             |
| System.Int32 | size         |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEventForConnection(Int32, out Int32, out Int32, out Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEventForConnection(int connectionId, out int offset, out int size, out int pipelineId)

#### Parameters

| Type         | Name         | Description |
|--------------|--------------|-------------|
| System.Int32 | connectionId |             |
| System.Int32 | offset       |             |
| System.Int32 | size         |             |
| System.Int32 | pipelineId   |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PushEvent(NetworkEvent)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void PushEvent(NetworkEvent ev)

#### Parameters

| Type         | Name | Description |
|--------------|------|-------------|
| NetworkEvent | ev   |             |

### ToConcurrent()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEventQueue.Concurrent ToConcurrent()

#### Returns

| Type                         | Description |
|------------------------------|-------------|
| NetworkEventQueue.Concurrent |             |

### Implements

<div>

System.IDisposable

</div>
