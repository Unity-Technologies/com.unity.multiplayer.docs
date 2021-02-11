---  
id: MLAPI.Profiling.ProfilerTick  
title: MLAPI.Profiling.ProfilerTick  
---

<div class="markdown level0 summary">

A tick in used for the Profiler

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

    public class ProfilerTick

## Fields

### EventId

<div class="markdown level1 summary">

The id of the tick

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int EventId

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Events

<div class="markdown level1 summary">

The events that occured during this tick

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly List<TickEvent> Events

#### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;TickEvent&gt; |             |

### Frame

<div class="markdown level1 summary">

The frame the tick executed on

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Frame

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Type

<div class="markdown level1 summary">

The type of tick

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public TickType Type

#### Field Value

| Type     | Description |
|----------|-------------|
| TickType |             |

## Properties 

### Bytes

<div class="markdown level1 summary">

The amount of bytes that were sent and / or received during this tick

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public uint Bytes { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

## Methods 

### FromStream(Stream)

<div class="markdown level1 summary">

Creates a ProfilerTick from data in the provided stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static ProfilerTick FromStream(Stream stream)

#### Parameters

| Type             | Name   | Description                                 |
|------------------|--------|---------------------------------------------|
| System.IO.Stream | stream | The stream containing the ProfilerTick data |

#### Returns

| Type         | Description                                     |
|--------------|-------------------------------------------------|
| ProfilerTick | The ProfilerTick with data read from the stream |

### SerializeToStream(Stream)

<div class="markdown level1 summary">

Writes the current ProfilerTick to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SerializeToStream(Stream stream)

#### Parameters

| Type             | Name   | Description           |
|------------------|--------|-----------------------|
| System.IO.Stream | stream | The stream containing |
