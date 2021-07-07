---  
id: MLAPI.Transports.Tasks.SocketTask  
title: MLAPI.Transports.Tasks.SocketTask  
---

<div class="markdown level0 summary">

A single socket task.

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

    public class SocketTask

## Properties 

### Done

<div class="markdown level1 summary">

Gets a done task.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static SocketTask Done { get; }

#### Property Value

| Type       | Description |
|------------|-------------|
| SocketTask | The done.   |

### Fault

<div class="markdown level1 summary">

Gets a faulty task.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static SocketTask Fault { get; }

#### Property Value

| Type       | Description |
|------------|-------------|
| SocketTask | The fault.  |

### IsDone

<div class="markdown level1 summary">

Gets or sets a value indicating whether this SocketTask is done.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDone { get; set; }

#### Property Value

| Type           | Description                            |
|----------------|----------------------------------------|
| System.Boolean | `true` if is done; otherwise, `false`. |

### Message

<div class="markdown level1 summary">

Gets or sets the message.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string Message { get; set; }

#### Property Value

| Type          | Description  |
|---------------|--------------|
| System.String | The message. |

### SocketError

<div class="markdown level1 summary">

Gets or sets the socket error.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public SocketError SocketError { get; set; }

#### Property Value

| Type                           | Description       |
|--------------------------------|-------------------|
| System.Net.Sockets.SocketError | The socket error. |

### State

<div class="markdown level1 summary">

Gets or sets the state.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public object State { get; set; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Object | The state.  |

### Success

<div class="markdown level1 summary">

Gets or sets a value indicating whether this SocketTask is success.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Success { get; set; }

#### Property Value

| Type           | Description                            |
|----------------|----------------------------------------|
| System.Boolean | `true` if success; otherwise, `false`. |

### TransportCode

<div class="markdown level1 summary">

Gets or sets the transport code.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int TransportCode { get; set; }

#### Property Value

| Type         | Description         |
|--------------|---------------------|
| System.Int32 | The transport code. |

### TransportException

<div class="markdown level1 summary">

Gets or sets the transport exception.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public Exception TransportException { get; set; }

#### Property Value

| Type             | Description              |
|------------------|--------------------------|
| System.Exception | The transport exception. |

### Working

<div class="markdown level1 summary">

Gets a working task.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static SocketTask Working { get; }

#### Property Value

| Type       | Description  |
|------------|--------------|
| SocketTask | The working. |

## Methods 

### AsTasks()

<div class="markdown level1 summary">

Converts to a SocketTasks.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public SocketTasks AsTasks()

#### Returns

| Type        | Description |
|-------------|-------------|
| SocketTasks | The tasks.  |
