---
id: Unity.Netcode.ClientRpcParams
title: Unity.Netcode.ClientRpcParams
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:17 pm
---

<div class="markdown level0 summary">

Client-Side RPC Can be used with any client-side remote procedure call Note: Typically this is used primarily for sending to a specific list of clients as opposed to the default (all). ClientRpcSendParams

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
public struct ClientRpcParams
```

## Fields

### Receive

<div class="markdown level1 summary">

The client RPC receive parameters (currently a place holder)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ClientRpcReceiveParams Receive
```

#### Field Value

| Type                   | Description |
|------------------------|-------------|
| ClientRpcReceiveParams |             |

### Send

<div class="markdown level1 summary">

The client RPC send parameters provides you with the ability to send to

a specific list of clients

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ClientRpcSendParams Send
```

#### Field Value

| Type                | Description |
|---------------------|-------------|
| ClientRpcSendParams |             |
