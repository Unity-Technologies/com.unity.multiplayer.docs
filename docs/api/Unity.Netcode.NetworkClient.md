---
id: Unity.Netcode.NetworkClient
title: Unity.Netcode.NetworkClient
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:16 pm
---

<div class="markdown level0 summary">

A NetworkClient

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
public class NetworkClient
```

## Fields

### ClientId

<div class="markdown level1 summary">

The ClientId of the NetworkClient

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong ClientId
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### PlayerObject

<div class="markdown level1 summary">

The PlayerObject of the Client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObject PlayerObject
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

## Properties

### OwnedObjects

<div class="markdown level1 summary">

The NetworkObject's owned by this Client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<NetworkObject> OwnedObjects { get; }
```

#### Property Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<NetworkObject\> |             |
