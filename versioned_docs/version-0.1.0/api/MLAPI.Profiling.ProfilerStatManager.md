---  
id: MLAPI.Profiling.ProfilerStatManager  
title: MLAPI.Profiling.ProfilerStatManager
---

<div class="markdown level0 summary">

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

    public static class ProfilerStatManager

## Fields

### AllStats

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static List<ProfilerStat> AllStats

#### Field Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;ProfilerStat&gt; |             |

### BytesRcvd

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat BytesRcvd

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### BytesSent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat BytesSent

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### Connections

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerIncStat Connections

#### Field Value

| Type            | Description |
|-----------------|-------------|
| ProfilerIncStat |             |

### NamedMessage

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat NamedMessage

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### NetTranforms

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerIncStat NetTranforms

#### Field Value

| Type            | Description |
|-----------------|-------------|
| ProfilerIncStat |             |

### NetworkVarsRcvd

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat NetworkVarsRcvd

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RcvTickRate

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RcvTickRate

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcBatchesRcvd

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcBatchesRcvd

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcBatchesSent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcBatchesSent

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcInQueueSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcInQueueSize

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcOutQueueSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcOutQueueSize

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcsQueueProc

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcsQueueProc

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcsRcvd

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcsRcvd

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### RpcsSent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat RpcsSent

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

### UnnamedMessage

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly ProfilerStat UnnamedMessage

#### Field Value

| Type         | Description |
|--------------|-------------|
| ProfilerStat |             |

## Methods 

### Add(ProfilerStat)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Add(ProfilerStat s)

#### Parameters

| Type         | Name | Description |
|--------------|------|-------------|
| ProfilerStat | s    |             |
