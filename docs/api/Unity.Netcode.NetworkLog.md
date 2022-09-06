---
id: Unity.Netcode.NetworkLog
title: Unity.Netcode.NetworkLog
---

# Class NetworkLog


Helper class for logging







##### Inheritance


System.Object




NetworkLog






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public static class NetworkLog
```



### Properties

#### CurrentLogLevel


Gets the current log level.






##### Declaration


``` lang-csharp
public static LogLevel CurrentLogLevel { get; }
```



##### Property Value

| Type     | Description            |
|----------|------------------------|
| LogLevel | The current log level. |

### Methods

#### LogError(String)


Locally logs a error log with Netcode prefixing.






##### Declaration


``` lang-csharp
public static void LogError(string message)
```



##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogErrorServer(String)


Logs an error log locally and on the server if possible.






##### Declaration


``` lang-csharp
public static void LogErrorServer(string message)
```



##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogInfo(String)


Locally logs a info log with Netcode prefixing.






##### Declaration


``` lang-csharp
public static void LogInfo(string message)
```



##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogInfoServer(String)


Logs an info log locally and on the server if possible.






##### Declaration


``` lang-csharp
public static void LogInfoServer(string message)
```



##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogWarning(String)


Locally logs a warning log with Netcode prefixing.






##### Declaration


``` lang-csharp
public static void LogWarning(string message)
```



##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |

#### LogWarningServer(String)


Logs a warning log locally and on the server if possible.






##### Declaration


``` lang-csharp
public static void LogWarningServer(string message)
```



##### Parameters

| Type          | Name    | Description        |
|---------------|---------|--------------------|
| System.String | message | The message to log |



