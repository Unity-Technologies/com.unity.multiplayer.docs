---
id: Unity.Netcode.FastBufferWriter.ForNetworkSerializable
title: Unity.Netcode.FastBufferWriter.ForNetworkSerializable
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:34:44 pm
---

<div class="markdown level0 summary">

This empty struct exists to allow overloading WriteValue based on generic constraints. At the bytecode level, constraints aren't included in the method signature, so if multiple methods exist with the same signature, it causes a compile error because they would end up being emitted as the same method, even if the constraints are different. Adding an empty struct with a default value gives them different signatures in the bytecode, which then allows the compiler to do overload resolution based on the generic constraints without the user having to pass the struct in themselves.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetType()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public struct ForNetworkSerializable
```
