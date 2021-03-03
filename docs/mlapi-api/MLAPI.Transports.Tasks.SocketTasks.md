---  
id: MLAPI.Transports.Tasks.SocketTasks  
title: MLAPI.Transports.Tasks.SocketTasks  
---

<div class="markdown level0 summary">

Represents one or more socket tasks.

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

    public class SocketTasks

## Properties 

### AnyDone

<div class="markdown level1 summary">

Gets a value indicating whether any tasks are done.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool AnyDone { get; }

#### Property Value

| Type           | Description                             |
|----------------|-----------------------------------------|
| System.Boolean | `true` if any done; otherwise, `false`. |

### AnySuccess

<div class="markdown level1 summary">

Gets a value indicating whether any tasks were successful.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool AnySuccess { get; }

#### Property Value

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | `true` if any success; otherwise, `false`. |

### IsDone

<div class="markdown level1 summary">

Gets a value indicating whether this all tasks is done.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDone { get; }

#### Property Value

| Type           | Description                            |
|----------------|----------------------------------------|
| System.Boolean | `true` if is done; otherwise, `false`. |

### Success

<div class="markdown level1 summary">

Gets a value indicating whether all tasks were sucessful.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Success { get; }

#### Property Value

| Type           | Description                            |
|----------------|----------------------------------------|
| System.Boolean | `true` if success; otherwise, `false`. |

### Tasks

<div class="markdown level1 summary">

Gets or sets the underlying SocketTasks.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public SocketTask[] Tasks { get; set; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| SocketTask\[\] | The tasks.  |
