---  
id: Unity.Netcode.NotServerException  
title: Unity.Netcode.NotServerException  
---

<div class="markdown level0 summary">

Exception thrown when the operation can only be done on the server

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

NotServerException

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
public class NotServerException : Exception, _Exception, ISerializable
```

</div>

### Constructors

#### NotServerException()

<div class="markdown level1 summary">

Constructs a NotServerException

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NotServerException()
```

</div>

#### NotServerException(String)

<div class="markdown level1 summary">

Constructs a NotServerException with a message

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NotServerException(string message)
```

</div>

##### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

#### NotServerException(String, Exception)

<div class="markdown level1 summary">

Constructs a NotServerException with a message and a inner exception

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NotServerException(string message, Exception inner)
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

 
