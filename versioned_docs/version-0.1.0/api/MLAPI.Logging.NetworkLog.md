---  
id: MLAPI.Logging.NetworkLog  
title: MLAPI.Logging.NetworkLog
---

<div class="markdown level0 summary">

Helper class for logging

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

    public static class NetworkLog

## Methods 

### LogErrorServer(String)

<div class="markdown level1 summary">

Logs an error log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void LogErrorServer(string message)

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogInfoServer(String)

<div class="markdown level1 summary">

Logs an info log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void LogInfoServer(string message)

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogWarningServer(String)

<div class="markdown level1 summary">

Logs a warning log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void LogWarningServer(string message)

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |
