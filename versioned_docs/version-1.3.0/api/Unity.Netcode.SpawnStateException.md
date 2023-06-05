---
id: Unity.Netcode.SpawnStateException
title: Unity.Netcode.SpawnStateException
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:38:26 pm
---

<div class="markdown level0 summary">

Exception thrown when an object is not yet spawned

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

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

## Implements

<div>

System.Runtime.Serialization.ISerializable

</div>

<div>

System.Runtime.InteropServices.\_Exception

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Exception.GetBaseException()

</div>

<div>

Exception.ToString()

</div>

<div>

Exception.GetObjectData(SerializationInfo, StreamingContext)

</div>

<div>

Exception.GetType()

</div>

<div>

Exception.Message

</div>

<div>

Exception.Data

</div>

<div>

Exception.InnerException

</div>

<div>

Exception.TargetSite

</div>

<div>

Exception.StackTrace

</div>

<div>

Exception.HelpLink

</div>

<div>

Exception.Source

</div>

<div>

Exception.HResult

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

Object.MemberwiseClone()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class SpawnStateException : Exception, ISerializable, _Exception
```

## Constructors

### SpawnStateException()

<div class="markdown level1 summary">

Constructs a SpawnStateException

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SpawnStateException()
```

### SpawnStateException(String)

<div class="markdown level1 summary">

Constructs a SpawnStateException with a message

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SpawnStateException(string message)
```

#### Parameters

| Type          | Name    | Description           |
|---------------|---------|-----------------------|
| System.String | message | The exception message |

### SpawnStateException(String, Exception)

<div class="markdown level1 summary">

Constructs a SpawnStateException with a message and a inner exception

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SpawnStateException(string message, Exception inner)
```

#### Parameters

| Type             | Name    | Description           |
|------------------|---------|-----------------------|
| System.String    | message | The exception message |
| System.Exception | inner   | The inner exception   |

### Implements

<div>

System.Runtime.Serialization.ISerializable

</div>

<div>

System.Runtime.InteropServices.\_Exception

</div>
