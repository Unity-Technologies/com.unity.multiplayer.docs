---  
id: Unity.Networking.Transport.NetworkEvent  
title: Unity.Networking.Transport.NetworkEvent  
---

<div class="markdown level0 summary">

Represents an event on a connection.

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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkEvent
```

## 

### connectionId

<div class="markdown level1 summary">

Internal ID of the connection.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int connectionId
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### offset

<div class="markdown level1 summary">

Offset of the event's data in the internal data stream.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int offset
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### pipelineId

<div class="markdown level1 summary">

The pipeline on which the event was received (for Data events).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public short pipelineId
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int16 |             |

### size

<div class="markdown level1 summary">

Size of the event's data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int size
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### status

<div class="markdown level1 summary">

Status of the event. Used to store the Disconnect reason.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int status
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### type

<div class="markdown level1 summary">

The type of the event.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type type
```

#### Field Value

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |
