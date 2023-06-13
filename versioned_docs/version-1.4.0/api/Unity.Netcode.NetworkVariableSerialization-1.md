---
id: Unity.Netcode.NetworkVariableSerialization-1
title: Unity.Netcode.NetworkVariableSerialization-1
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:39:47 pm
---

<div class="markdown level0 summary">

Support methods for reading/writing NetworkVariables Because there are multiple overloads of WriteValue/ReadValue based on different generic constraints, but there's no way to achieve the same thing with a class, this sets up various read/write schemes based on which constraints are met by `T` using reflection, which is done at module load time.

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
[Serializable]
public static class NetworkVariableSerialization<T>
```

## Type Parameters

| Name | Description                                             |
|------|---------------------------------------------------------|
| T    | The type the associated NetworkVariable is templated on |
