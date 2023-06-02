---
id: Unity.Netcode.NetworkLog
title: Unity.Netcode.NetworkLog
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:33 pm
---

<div class="markdown level0 summary">

Helper class for logging

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public static class NetworkLog
```

## Properties

### CurrentLogLevel

<div class="markdown level1 summary">

Gets the current log level.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static LogLevel CurrentLogLevel { get; }
```

#### Property Value

| Type     | Description            |
|----------|------------------------|
| LogLevel | The current log level. |

## Methods

### LogError(String)

<div class="markdown level1 summary">

Locally logs a error log with Netcode prefixing.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void LogError(string message)
```

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogErrorServer(String)

<div class="markdown level1 summary">

Logs an error log locally and on the server if possible.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void LogErrorServer(string message)
```

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogInfo(String)

<div class="markdown level1 summary">

Locally logs a info log with Netcode prefixing.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void LogInfo(string message)
```

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

``` lang-csharp
public static void LogInfoServer(string message)
```

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

### LogWarning(String)

<div class="markdown level1 summary">

Locally logs a warning log with Netcode prefixing.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void LogWarning(string message)
```

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

``` lang-csharp
public static void LogWarningServer(string message)
```

#### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |
