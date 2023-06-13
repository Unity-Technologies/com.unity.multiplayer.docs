---
id: Unity.Netcode.ServerRpcParams
title: Unity.Netcode.ServerRpcParams
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:38:12 pm
---

<div class="markdown level0 summary">

Server-Side RPC Can be used with any sever-side remote procedure call

Note: typically this is use primarily for the ServerRpcReceiveParams

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
public struct ServerRpcParams
```

## Fields

### Receive

<div class="markdown level1 summary">
The client RPC receive parameters provides you with the sender's identifier

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ServerRpcReceiveParams Receive
```

#### Field Value

| Type                   | Description |
|------------------------|-------------|
| ServerRpcReceiveParams |             |

### Send

<div class="markdown level1 summary">

The server RPC send parameters (currently a place holder)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ServerRpcSendParams Send
```

#### Field Value

| Type                | Description |
|---------------------|-------------|
| ServerRpcSendParams |             |
