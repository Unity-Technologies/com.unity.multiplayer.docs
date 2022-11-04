---
id: Unity.Netcode.NotListeningException
title: Unity.Netcode.NotListeningException
---

# Class NotListeningException


Exception thrown when the operation require NetworkManager to be
listening.







##### Inheritance


System.Object




System.Exception




NotListeningException






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
public class NotListeningException : Exception, _Exception, ISerializable
```



### Constructors

#### NotListeningException()


Constructs a NotListeningException






##### Declaration


``` lang-csharp
public NotListeningException()
```



#### NotListeningException(String)


Constructs a NotListeningException with a message






##### Declaration


``` lang-csharp
public NotListeningException(string message)
```



##### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

#### NotListeningException(String, Exception)


Constructs a NotListeningException with a message and a inner exception






##### Declaration


``` lang-csharp
public NotListeningException(string message, Exception inner)
```



##### Parameters

| Type             | Name    | Description           |
|------------------|---------|-----------------------|
| System.String    | message | The exception message |
| System.Exception | inner   | The inner exception   |

### Implements



System.Runtime.InteropServices.\_Exception





System.Runtime.Serialization.ISerializable





