---
id: Unity.Netcode.NetworkManager.ConnectionApprovalRequest
title: Unity.Netcode.NetworkManager.ConnectionApprovalRequest
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:35:36 pm
---

<div class="markdown level0 summary">

Connection Approval Request

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
public struct ConnectionApprovalRequest
```

## Fields

### ClientNetworkId

<div class="markdown level1 summary">

The Network Id of the client we are about to handle

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong ClientNetworkId
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Payload

<div class="markdown level1 summary">

The connection data payload

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte[] Payload
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |
