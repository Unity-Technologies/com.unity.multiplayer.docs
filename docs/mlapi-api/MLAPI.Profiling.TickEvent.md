---

id: MLAPI.Profiling.TickEvent

title: MLAPI.Profiling.TickEvent

---

Class TickEvent

<div class="markdown level0 summary" markdown="1">

A event that can occur during a Event

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

##### Syntax [MLAPI_Profiling_TickEvent_syntax]

    public class TickEvent

## Fields

### Bytes [MLAPI_Profiling_TickEvent_Bytes]

<div class="markdown level1 summary" markdown="1">

The amount of bytes sent or received

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public uint Bytes

#### Field Value [field-value]

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### ChannelName [MLAPI_Profiling_TickEvent_ChannelName]

<div class="markdown level1 summary" markdown="1">

The name of the channel

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public string ChannelName

#### Field Value [field-value-1]

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Closed [MLAPI_Profiling_TickEvent_Closed]

<div class="markdown level1 summary" markdown="1">

Whether or not the event is closed

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public bool Closed

#### Field Value [field-value-2]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EventType [MLAPI_Profiling_TickEvent_EventType]

<div class="markdown level1 summary" markdown="1">

The type of evenmt

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public TickType EventType

#### Field Value [field-value-3]

| Type     | Description |
|----------|-------------|
| TickType |             |

### MessageType [MLAPI_Profiling_TickEvent_MessageType]

<div class="markdown level1 summary" markdown="1">

The message type

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public string MessageType

#### Field Value [field-value-4]

| Type          | Description |
|---------------|-------------|
| System.String |             |

## Methods 

### FromStream(Stream) [MLAPI_Profiling_TickEvent_FromStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Creates a TickEvent from data in the provided stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public static TickEvent FromStream(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| System.IO.Stream | stream | The stream containing the TickEvent data |

#### Returns [returns]

| Type      | Description                                  |
|-----------|----------------------------------------------|
| TickEvent | The TickEvent with data read from the stream |

### SerializeToStream(Stream) [MLAPI_Profiling_TickEvent_SerializeToStream_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the TickEvent data to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public void SerializeToStream(Stream stream)

#### Parameters [parameters-1]

| Type             | Name   | Description                               |
|------------------|--------|-------------------------------------------|
| System.IO.Stream | stream | The stream to write the TickEvent data to |
