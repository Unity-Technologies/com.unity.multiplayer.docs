---  
id: MLAPI.Profiling.TickEvent  
title: MLAPI.Profiling.TickEvent
---

<div class="markdown level0 summary">

A event that can occur during a Event

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

    public class TickEvent

## Fields

### Bytes

<div class="markdown level1 summary">

The amount of bytes sent or received

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint Bytes

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ChannelName

<div class="markdown level1 summary">

The name of the channel

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string ChannelName

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Closed

<div class="markdown level1 summary">

Whether or not the event is closed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Closed

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EventType

<div class="markdown level1 summary">

The type of evenmt

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public TickType EventType

#### Field Value

| Type     | Description |
|----------|-------------|
| TickType |             |

### MessageType

<div class="markdown level1 summary">

The message type

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string MessageType

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

## Methods 

### FromStream(Stream)

<div class="markdown level1 summary">

Creates a TickEvent from data in the provided stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static TickEvent FromStream(Stream stream)

#### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| System.IO.Stream | stream | The stream containing the TickEvent data |

#### Returns

| Type      | Description                                  |
|-----------|----------------------------------------------|
| TickEvent | The TickEvent with data read from the stream |

### SerializeToStream(Stream)

<div class="markdown level1 summary">

Writes the TickEvent data to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SerializeToStream(Stream stream)

#### Parameters

| Type             | Name   | Description                               |
|------------------|--------|-------------------------------------------|
| System.IO.Stream | stream | The stream to write the TickEvent data to |
