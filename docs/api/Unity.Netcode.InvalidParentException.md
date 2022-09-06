---
id: Unity.Netcode.InvalidParentException
title: Unity.Netcode.InvalideParentException
---

# Class InvalidParentException


Exception thrown when the new parent candidate of the NetworkObject is
not valid







##### Inheritance


System.Object




System.Exception




InvalidParentException






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
public class InvalidParentException : Exception, _Exception, ISerializable
```



### Constructors

#### InvalidParentException()


Constructor for InvalidParentException






##### Declaration


``` lang-csharp
public InvalidParentException()
```



#### InvalidParentException(String)







##### Declaration


``` lang-csharp
public InvalidParentException(string message)
```



##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | message |             |

#### InvalidParentException(String, Exception)







##### Declaration


``` lang-csharp
public InvalidParentException(string message, Exception innerException)
```



##### Parameters

| Type             | Name           | Description |
|------------------|----------------|-------------|
| System.String    | message        |             |
| System.Exception | innerException |             |

### Implements



System.Runtime.InteropServices.\_Exception





System.Runtime.Serialization.ISerializable





