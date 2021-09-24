---  
id: Unity.Networking.Transport.NetworkDataStreamParameter  
title: Unity.Networking.Transport.NetworkDataStreamParameter  
---

<div class="markdown level0 summary">

The NetworkDataStreamParameter is used to set a fixed data stream size.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkParameter

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

    public struct NetworkDataStreamParameter : INetworkParameter

##### **Remarks**

<div class="markdown level0 remarks">

The DataStreamWriter will grow on demand if the size is set to zero.

</div>

## Fields

### size

<div class="markdown level1 summary">

Size of the default DataStreamWriter

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int size

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Implements

<div>

INetworkParameter

</div>
