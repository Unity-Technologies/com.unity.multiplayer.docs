---

id: MLAPI.Transports.Tasks.SocketTask

title: MLAPI.Transports.Tasks.SocketTask

---

Class SocketTask

<div class="markdown level0 summary" markdown="1">

A single socket task.

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

##### Syntax [MLAPI_Transports_Tasks_SocketTask_syntax]

    public class SocketTask

## Properties <span id="MLAPI_Transports_Tasks_SocketTask_Done_"></span>

### Done [MLAPI_Transports_Tasks_SocketTask_Done]

<div class="markdown level1 summary" markdown="1">

Gets a done task.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static SocketTask Done { get; }

#### Property Value [property-value]

| Type       | Description |
|------------|-------------|
| SocketTask | The done.   |

<span id="MLAPI_Transports_Tasks_SocketTask_Fault_"></span>

### Fault [MLAPI_Transports_Tasks_SocketTask_Fault]

<div class="markdown level1 summary" markdown="1">

Gets a faulty task.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static SocketTask Fault { get; }

#### Property Value [property-value-1]

| Type       | Description |
|------------|-------------|
| SocketTask | The fault.  |

<span id="MLAPI_Transports_Tasks_SocketTask_IsDone_"></span>

### IsDone [MLAPI_Transports_Tasks_SocketTask_IsDone]

<div class="markdown level1 summary" markdown="1">

Gets or sets a value indicating whether this SocketTask is done.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public bool IsDone { get; set; }

#### Property Value [property-value-2]

| Type                                     | Description                            |
|------------------------------------------|----------------------------------------|
| <span class="xref">System.Boolean</span> | `true` if is done; otherwise, `false`. |

<span id="MLAPI_Transports_Tasks_SocketTask_Message_"></span>

### Message [MLAPI_Transports_Tasks_SocketTask_Message]

<div class="markdown level1 summary" markdown="1">

Gets or sets the message.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public string Message { get; set; }

#### Property Value [property-value-3]

| Type                                    | Description  |
|-----------------------------------------|--------------|
| <span class="xref">System.String</span> | The message. |

<span id="MLAPI_Transports_Tasks_SocketTask_SocketError_"></span>

### SocketError [MLAPI_Transports_Tasks_SocketTask_SocketError]

<div class="markdown level1 summary" markdown="1">

Gets or sets the socket error.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public SocketError SocketError { get; set; }

#### Property Value [property-value-4]

| Type                                                     | Description       |
|----------------------------------------------------------|-------------------|
| <span class="xref">System.Net.Sockets.SocketError</span> | The socket error. |

<span id="MLAPI_Transports_Tasks_SocketTask_State_"></span>

### State [MLAPI_Transports_Tasks_SocketTask_State]

<div class="markdown level1 summary" markdown="1">

Gets or sets the state.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public object State { get; set; }

#### Property Value [property-value-5]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.Object</span> | The state.  |

<span id="MLAPI_Transports_Tasks_SocketTask_Success_"></span>

### Success [MLAPI_Transports_Tasks_SocketTask_Success]

<div class="markdown level1 summary" markdown="1">

Gets or sets a value indicating whether this SocketTask is success.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public bool Success { get; set; }

#### Property Value [property-value-6]

| Type                                     | Description                            |
|------------------------------------------|----------------------------------------|
| <span class="xref">System.Boolean</span> | `true` if success; otherwise, `false`. |

<span id="MLAPI_Transports_Tasks_SocketTask_TransportCode_"></span>

### TransportCode [MLAPI_Transports_Tasks_SocketTask_TransportCode]

<div class="markdown level1 summary" markdown="1">

Gets or sets the transport code.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public int TransportCode { get; set; }

#### Property Value [property-value-7]

| Type                                   | Description         |
|----------------------------------------|---------------------|
| <span class="xref">System.Int32</span> | The transport code. |

<span id="MLAPI_Transports_Tasks_SocketTask_TransportException_"></span>

### TransportException [MLAPI_Transports_Tasks_SocketTask_TransportException]

<div class="markdown level1 summary" markdown="1">

Gets or sets the transport exception.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public Exception TransportException { get; set; }

#### Property Value [property-value-8]

| Type                                       | Description              |
|--------------------------------------------|--------------------------|
| <span class="xref">System.Exception</span> | The transport exception. |

<span id="MLAPI_Transports_Tasks_SocketTask_Working_"></span>

### Working [MLAPI_Transports_Tasks_SocketTask_Working]

<div class="markdown level1 summary" markdown="1">

Gets a working task.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public static SocketTask Working { get; }

#### Property Value [property-value-9]

| Type       | Description  |
|------------|--------------|
| SocketTask | The working. |

## Methods <span id="MLAPI_Transports_Tasks_SocketTask_AsTasks_"></span>

### AsTasks() [MLAPI_Transports_Tasks_SocketTask_AsTasks]

<div class="markdown level1 summary" markdown="1">

Converts to a SocketTasks.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public SocketTasks AsTasks()

#### Returns [returns]

| Type        | Description |
|-------------|-------------|
| SocketTasks | The tasks.  |
