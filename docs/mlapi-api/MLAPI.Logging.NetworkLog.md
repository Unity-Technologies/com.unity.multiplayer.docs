---  
id: MLAPI.Logging.NetworkLog  
title: MLAPI.Logging.NetworkLog  
---

<div class="markdown level0 summary" markdown="1">

Helper class for logging

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

##### Syntax [MLAPI_Logging_NetworkLog_syntax]

    public static class NetworkLog

## Methods 

### LogErrorServer(String) [MLAPI_Logging_NetworkLog_LogErrorServer_System_String_]

<div class="markdown level1 summary" markdown="1">

Logs an error log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static void LogErrorServer(string message)

#### Parameters [parameters]

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogInfoServer(String) [MLAPI_Logging_NetworkLog_LogInfoServer_System_String_]

<div class="markdown level1 summary" markdown="1">

Logs an info log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void LogInfoServer(string message)

#### Parameters [parameters-1]

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogWarningServer(String) [MLAPI_Logging_NetworkLog_LogWarningServer_System_String_]

<div class="markdown level1 summary" markdown="1">

Logs a warning log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static void LogWarningServer(string message)

#### Parameters [parameters-2]

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |
