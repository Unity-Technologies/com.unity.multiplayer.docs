---
id: Unity.Netcode.NetworkVariableSerializationTypes
title: Unity.Netcode.NetworkVariableSerializationTypes
date created: Wednesday, January 25th 2023, 5:30:22 pm
date modified: Wednesday, January 25th 2023, 5:36:47 pm
---

<div class="markdown level0 summary">
This class contains initialization functions for various different types used in NetworkVariables. Generally speaking, these methods are called by a module initializer created by codegen (NetworkBehaviourILPP) and do not need to be called manually.

There are two types of initializers: Serializers and EqualityCheckers. Every type must have an EqualityChecker registered to it in order to be used in NetworkVariable; however, not all types need a Serializer. Types without a serializer registered will fall back to using the delegates in UserNetworkVariableSerialization\<T\>. If no such delegate has been registered, a type without a serializer will throw an exception on the first attempt to serialize or deserialize it. (Again, however, codegen handles this automatically and this registration doesn't typically need to be performed manually.)

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
public static class NetworkVariableSerializationTypes
```

## Methods

### InitializeEqualityChecker_ManagedClassEquals\<T\>()

<div class="markdown level1 summary">

Registers a managed type that will be checked for equality using the == operator

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeEqualityChecker_ManagedClassEquals<T>()

    where T : class
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeEqualityChecker_ManagedIEquatable\<T\>()

<div class="markdown level1 summary">

Registers a managed type that will be checked for equality using T.Equals()

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeEqualityChecker_ManagedIEquatable<T>()

    where T : class, IEquatable<T>
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeEqualityChecker_UnmanagedIEquatable\<T\>()

<div class="markdown level1 summary">

Registers an unmanaged type that will be checked for equality using T.Equals()
</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeEqualityChecker_UnmanagedIEquatable<T>()

    where T : struct, IEquatable<T>
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeEqualityChecker_UnmanagedValueEquals\<T\>()

<div class="markdown level1 summary">

Registers an unmanaged type that will be checked for equality using memcmp and only considered equal if they are bitwise equivalent in memory

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeEqualityChecker_UnmanagedValueEquals<T>()

    where T : struct
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeSerializer_FixedString\<T\>()

<div class="markdown level1 summary">

Registers a FixedString type that will be serialized through FastBufferReader/FastBufferWriter's FixedString serializers

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeSerializer_FixedString<T>()

    where T : struct, INativeList<byte>, IUTF8Bytes
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeSerializer_ManagedINetworkSerializable\<T\>()

<div class="markdown level1 summary">

Registers a managed type that implements INetworkSerializable and will be serialized through a call to NetworkSerialize

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeSerializer_ManagedINetworkSerializable<T>()

    where T : class, INetworkSerializable, new()
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeSerializer_UnmanagedByMemcpy\<T\>()

<div class="markdown level1 summary">

Registeres an unmanaged type that will be serialized by a direct memcpy into a buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeSerializer_UnmanagedByMemcpy<T>()

    where T : struct
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### InitializeSerializer_UnmanagedINetworkSerializable\<T\>()

<div class="markdown level1 summary">

Registers an unmanaged type that implements INetworkSerializable and will be serialized through a call to NetworkSerialize

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void InitializeSerializer_UnmanagedINetworkSerializable<T>()

    where T : struct, INetworkSerializable
```

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |
