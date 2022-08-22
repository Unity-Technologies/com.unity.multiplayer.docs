---
id: Unity.Netcode.SpawnStateException
title: Unity.Netcode.SpawnStateException
---

# Class SpawnStateException


Exception thrown when an object is not yet spawned







##### Inheritance


System.Object




System.Exception




SpawnStateException






##### Implements



System.Runtime.InteropServices.\_Exception





System.Runtime.Serialization.ISerializable






##### Inherited Members



System.Exception.GetBaseException()





System.Exception.GetObjectData(System.Runtime.Serialization.SerializationInfo,
System.Runtime.Serialization.StreamingContext)





System.Exception.GetType()





System.Exception.ToString()





System.Exception.Data





System.Exception.HelpLink





System.Exception.HResult





System.Exception.InnerException





System.Exception.Message





System.Exception.Source





System.Exception.StackTrace





System.Exception.TargetSite





System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class SpawnStateException : Exception, _Exception, ISerializable
```



### Constructors

#### SpawnStateException()


Constructs a SpawnStateException






##### Declaration


``` lang-csharp
public SpawnStateException()
```



#### SpawnStateException(String)


Constructs a SpawnStateException with a message






##### Declaration


``` lang-csharp
public SpawnStateException(string message)
```



##### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

#### SpawnStateException(String, Exception)


Constructs a SpawnStateException with a message and a inner exception






##### Declaration


``` lang-csharp
public SpawnStateException(string message, Exception inner)
```



##### Parameters

| Type             | Name    | Description           |
|------------------|---------|-----------------------|
| System.String    | message | The exception message |
| System.Exception | inner   | The inner exception   |

### Implements



System.Runtime.InteropServices.\_Exception





System.Runtime.Serialization.ISerializable





