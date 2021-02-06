---

id: MLAPI.Profiling.ProfilerTick

title: MLAPI.Profiling.ProfilerTick

---

Class ProfilerTick

<div class="markdown level0 summary" markdown="1">

A tick in used for the Profiler

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Profiling_ProfilerTick_syntax]

    public class ProfilerTick

## Fields

### EventId [MLAPI_Profiling_ProfilerTick_EventId]

<div class="markdown level1 summary" markdown="1">

The id of the tick

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public int EventId

#### Field Value [field-value]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

### Events [MLAPI_Profiling_ProfilerTick_Events]

<div class="markdown level1 summary" markdown="1">

The events that occured during this tick

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public readonly List<TickEvent> Events

#### Field Value [field-value-1]

| Type                                                                   | Description |
|------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.List</span>\<TickEvent\> |             |

### Frame [MLAPI_Profiling_ProfilerTick_Frame]

<div class="markdown level1 summary" markdown="1">

The frame the tick executed on

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public int Frame

#### Field Value [field-value-2]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

### Type [MLAPI_Profiling_ProfilerTick_Type]

<div class="markdown level1 summary" markdown="1">

The type of tick

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public TickType Type

#### Field Value [field-value-3]

| Type     | Description |
|----------|-------------|
| TickType |             |

## Properties <span id="MLAPI_Profiling_ProfilerTick_Bytes_"></span>

### Bytes [MLAPI_Profiling_ProfilerTick_Bytes]

<div class="markdown level1 summary" markdown="1">

The amount of bytes that were sent and / or received during this tick

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public uint Bytes { get; }

#### Property Value [property-value]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.UInt32</span> |             |

## Methods <span id="MLAPI_Profiling_ProfilerTick_FromStream_"></span>

### FromStream(Stream) [MLAPI_Profiling_ProfilerTick_FromStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Creates a ProfilerTick from data in the provided stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public static ProfilerTick FromStream(Stream stream)

#### Parameters [parameters]

| Type                                       | Name                                      | Description                                 |
|--------------------------------------------|-------------------------------------------|---------------------------------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> | The stream containing the ProfilerTick data |

#### Returns [returns]

| Type         | Description                                     |
|--------------|-------------------------------------------------|
| ProfilerTick | The ProfilerTick with data read from the stream |

<span id="MLAPI_Profiling_ProfilerTick_SerializeToStream_"></span>

### SerializeToStream(Stream) [MLAPI_Profiling_ProfilerTick_SerializeToStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the current ProfilerTick to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public void SerializeToStream(Stream stream)

#### Parameters [parameters-1]

| Type                                       | Name                                      | Description           |
|--------------------------------------------|-------------------------------------------|-----------------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> | The stream containing |
