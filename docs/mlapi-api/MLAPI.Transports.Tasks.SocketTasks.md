---  
id: MLAPI.Transports.Tasks.SocketTasks  
title: MLAPI.Transports.Tasks.SocketTasks  
---

<div class="markdown level0 summary" markdown="1">

Represents one or more socket tasks.

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

##### Syntax [MLAPI_Transports_Tasks_SocketTasks_syntax]

    public class SocketTasks

## Properties 

### AnyDone [MLAPI_Transports_Tasks_SocketTasks_AnyDone]

<div class="markdown level1 summary" markdown="1">

Gets a value indicating whether any tasks are done.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public bool AnyDone { get; }

#### Property Value [property-value]

| Type           | Description                             |
|----------------|-----------------------------------------|
| System.Boolean | `true` if any done; otherwise, `false`. |

### AnySuccess [MLAPI_Transports_Tasks_SocketTasks_AnySuccess]

<div class="markdown level1 summary" markdown="1">

Gets a value indicating whether any tasks were successful.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public bool AnySuccess { get; }

#### Property Value [property-value-1]

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | `true` if any success; otherwise, `false`. |

### IsDone [MLAPI_Transports_Tasks_SocketTasks_IsDone]

<div class="markdown level1 summary" markdown="1">

Gets a value indicating whether this all tasks is done.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public bool IsDone { get; }

#### Property Value [property-value-2]

| Type           | Description                            |
|----------------|----------------------------------------|
| System.Boolean | `true` if is done; otherwise, `false`. |

### Success [MLAPI_Transports_Tasks_SocketTasks_Success]

<div class="markdown level1 summary" markdown="1">

Gets a value indicating whether all tasks were sucessful.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public bool Success { get; }

#### Property Value [property-value-3]

| Type           | Description                            |
|----------------|----------------------------------------|
| System.Boolean | `true` if success; otherwise, `false`. |

### Tasks [MLAPI_Transports_Tasks_SocketTasks_Tasks]

<div class="markdown level1 summary" markdown="1">

Gets or sets the underlying SocketTasks.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public SocketTask[] Tasks { get; set; }

#### Property Value [property-value-4]

| Type           | Description |
|----------------|-------------|
| SocketTask\[\] | The tasks.  |
