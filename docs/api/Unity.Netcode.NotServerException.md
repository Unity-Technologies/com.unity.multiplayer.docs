---
id: Unity.Netcode.NotServerException
title: Unity.Netcode.NotServerException
---

# Class NotServerException


Exception thrown when the operation can only be done on the server







##### Inheritance


System.Object




System.Exception




NotServerException






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
public class NotServerException : Exception, _Exception, ISerializable
```



### Constructors

#### NotServerException()


Constructs a NotServerException






##### Declaration


``` lang-csharp
public NotServerException()
```



#### NotServerException(String)


Constructs a NotServerException with a message






##### Declaration


``` lang-csharp
public NotServerException(string message)
```



##### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

#### NotServerException(String, Exception)


Constructs a NotServerException with a message and a inner exception






##### Declaration


``` lang-csharp
public NotServerException(string message, Exception inner)
```



##### Parameters

| Type             | Name    | Description           |
|------------------|---------|-----------------------|
| System.String    | message | The exception message |
| System.Exception | inner   | The inner exception   |

### Implements



System.Runtime.InteropServices.\_Exception





System.Runtime.Serialization.ISerializable





