---  
id: Unity.Networking.Transport.NetworkEventQueue.Concurrent  
title: Unity.Networking.Transport.NetworkEventQueue.Concurrent  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

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

    public struct Concurrent

## Methods 

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
