---  
id: Unity.Netcode.NetworkLog  
title: Unity.Netcode.NetworkLog  
---

<div class="markdown level0 summary">

Helper class for logging

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkLog

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public static class NetworkLog
```

</div>

### Properties

#### CurrentLogLevel

<div class="markdown level1 summary">

Gets the current log level.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static LogLevel CurrentLogLevel { get; }
```

</div>

##### Property Value

| Type     | Description            |
|----------|------------------------|
| LogLevel | The current log level. |

### Methods

#### LogError(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void LogError(string message)
```

</div>

##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | message |             |

#### LogErrorServer(String)

<div class="markdown level1 summary">

Logs an error log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void LogErrorServer(string message)
```

</div>

##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogInfo(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void LogInfo(string message)
```

</div>

##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | message |             |

#### LogInfoServer(String)

<div class="markdown level1 summary">

Logs an info log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void LogInfoServer(string message)
```

</div>

##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogWarning(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void LogWarning(string message)
```

</div>

##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | message |             |

#### LogWarningServer(String)

<div class="markdown level1 summary">

Logs a warning log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void LogWarningServer(string message)
```

</div>

##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

 
