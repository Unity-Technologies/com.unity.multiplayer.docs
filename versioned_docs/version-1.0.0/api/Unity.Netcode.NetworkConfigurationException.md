---
id: Unity.Netcode.NetworkConfigurationException
title: Unity.Netcode.NetworkConfigurationException
---

# Class NetworkConfigurationException


Exception thrown when a change to a configuration is wrong







##### Inheritance


System.Object




System.Exception




NetworkConfigurationException






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
public class NetworkConfigurationException : Exception, _Exception, ISerializable
```



### Constructors

#### NetworkConfigurationException()


Constructs a NetworkConfigurationException






##### Declaration


``` lang-csharp
public NetworkConfigurationException()
```



#### NetworkConfigurationException(String)


Constructs a NetworkConfigurationException with a message






##### Declaration


``` lang-csharp
public NetworkConfigurationException(string message)
```



##### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

#### NetworkConfigurationException(String, Exception)


Constructs a NetworkConfigurationException with a message and a inner
exception






##### Declaration


``` lang-csharp
public NetworkConfigurationException(string message, Exception inner)
```



##### Parameters

| Type             | Name    | Description           |
|------------------|---------|-----------------------|
| System.String    | message | The exception message |
| System.Exception | inner   | The inner exception   |

### Implements



System.Runtime.InteropServices.\_Exception





System.Runtime.Serialization.ISerializable





