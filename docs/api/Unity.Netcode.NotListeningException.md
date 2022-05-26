---  
id: Unity.Netcode.NotListeningException  
title: Unity.Netcode.NotListeningException  
---

<div class="markdown level0 summary">

Exception thrown when the operation require NetworkManager to be
listening.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

System.Exception

</div>

<div class="level2">

NotListeningException

</div>

</div>

<div classs="implements">

##### Implements

<div>

System.Runtime.InteropServices.\_Exception

</div>

<div>

System.Runtime.Serialization.ISerializable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Exception.GetBaseException()

</div>

<div>

System.Exception.GetObjectData(System.Runtime.Serialization.SerializationInfo,
System.Runtime.Serialization.StreamingContext)

</div>

<div>

System.Exception.GetType()

</div>

<div>

System.Exception.ToString()

</div>

<div>

System.Exception.Data

</div>

<div>

System.Exception.HelpLink

</div>

<div>

System.Exception.HResult

</div>

<div>

System.Exception.InnerException

</div>

<div>

System.Exception.Message

</div>

<div>

System.Exception.Source

</div>

<div>

System.Exception.StackTrace

</div>

<div>

System.Exception.TargetSite

</div>

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

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NotListeningException : Exception, _Exception, ISerializable
```

</div>

### Constructors

#### NotListeningException()

<div class="markdown level1 summary">

Constructs a NotListeningException

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NotListeningException()
```

</div>

#### NotListeningException(String)

<div class="markdown level1 summary">

Constructs a NotListeningException with a message

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NotListeningException(string message)
```

</div>

##### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

#### NotListeningException(String, Exception)

<div class="markdown level1 summary">

Constructs a NotListeningException with a message and a inner exception

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NotListeningException(string message, Exception inner)
```

</div>

##### Parameters

| Type             | Name    | Description           |
|------------------|---------|-----------------------|
| System.String    | message | The exception message |
| System.Exception | inner   | The inner exception   |

### Implements

<div>

System.Runtime.InteropServices.\_Exception

</div>

<div>

System.Runtime.Serialization.ISerializable

</div>

 
