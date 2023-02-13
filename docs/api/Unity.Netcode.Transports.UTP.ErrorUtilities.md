---
id: Unity.Netcode.Transports.UTP.ErrorUtilities
title: Unity.Netcode.Transports.UTP.ErrorUtilities
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:38:31 pm
---

<div class="markdown level0 summary">
Helper utility class to convert error codes to human readable error messages.

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

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

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

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public static class ErrorUtilities
```

## Methods

### ErrorToString(Networking.Transport.Error.StatusCode, UInt64)

<div class="markdown level1 summary">

Convert a UTP error code to human-readable error message.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static string ErrorToString(Networking.Transport.Error.StatusCode error, ulong connectionId)
```

#### Parameters

| Type                                  | Name         | Description                                       |
|---------------------------------------|--------------|---------------------------------------------------|
| Networking.Transport.Error.StatusCode | error        | UTP error code.                                   |
| System.UInt64                         | connectionId | ID of the connection on which the error occurred. |

#### Returns

| Type          | Description                   |
|---------------|-------------------------------|
| System.String | Human-readable error message. |
