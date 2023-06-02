---
id: Unity.Netcode.UserNetworkVariableSerialization-1
title: Unity.Netcode.UserNetworkVariableSerialization-1
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:39:22 pm
---

<div class="markdown level0 summary">
This class is used to register user serialization with NetworkVariables for types that are serialized via user serialization, such as with FastBufferReader and FastBufferWriter extension methods. Finding those methods isn't achievable efficiently at runtime, so this allows users to tell NetworkVariable about those extension methods (or simply pass in a lambda)

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
public class UserNetworkVariableSerialization<T>
```

## Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## Fields

### ReadValue

<div class="markdown level1 summary">

The UserNetworkVariableSerialization\<T\>.ReadValueDelegate delegate

handler declaration

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static UserNetworkVariableSerialization<T>.ReadValueDelegate ReadValue
```

#### Field Value

| Type                                                   | Description |
|--------------------------------------------------------|-------------|
| UserNetworkVariableSerialization.ReadValueDelegate\<\> |             |

### WriteValue

<div class="markdown level1 summary">

The UserNetworkVariableSerialization\<T\>.WriteValueDelegate delegate

handler declaration

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static UserNetworkVariableSerialization<T>.WriteValueDelegate WriteValue
```

#### Field Value

| Type                                                    | Description |
|---------------------------------------------------------|-------------|
| UserNetworkVariableSerialization.WriteValueDelegate\<\> |             |
