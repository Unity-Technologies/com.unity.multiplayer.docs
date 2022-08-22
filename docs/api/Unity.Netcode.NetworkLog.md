---
id: Unity.Netcode.NetworkLog
title: Unity.Netcode.NetworkLog
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Class NetworkLog

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

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

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

Locally logs a error log with Netcode prefixing.

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

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

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

Locally logs a info log with Netcode prefixing.

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

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

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

Locally logs a warning log with Netcode prefixing.

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

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

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

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
