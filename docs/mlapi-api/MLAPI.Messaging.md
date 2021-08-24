---  
id: MLAPI.Messaging  
title: MLAPI.Messaging  
---

## Namespace MLAPI.Messaging

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### MLAPI.Messaging.ClientRpcAttribute

<div class="section">

Marks a method as ClientRpc.

A ClientRpc marked method will be fired by the server but executed on
clients.

</div>

### MLAPI.Messaging.CustomMessagingManager

<div class="section">

The manager class to manage custom messages, note that this is different
from the NetworkManager custom messages. These are named and are much
easier to use.

</div>

### MLAPI.Messaging.RpcAttribute

<div class="section">

Represents the common base class for Rpc attributes.

</div>

### MLAPI.Messaging.RpcQueueHistoryFrame

<div class="section">

Used by the RpcQueueContainer to hold queued RPCs

</div>

### MLAPI.Messaging.ServerRpcAttribute

<div class="section">

Marks a method as ServerRpc.

A ServerRpc marked method will be fired by a client but executed on the
server.

</div>

## Structs

### MLAPI.Messaging.RpcParams

<div class="section">

</div>

### MLAPI.Messaging.ClientRpcParams

<div class="section">

</div>

### MLAPI.Messaging.ClientRpcReceiveParams

<div class="section">

</div>

### MLAPI.Messaging.ClientRpcSendParams

<div class="section">

</div>

### MLAPI.Messaging.ServerRpcParams

<div class="section">

</div>

### MLAPI.Messaging.ServerRpcReceiveParams

<div class="section">

</div>

### MLAPI.Messaging.ServerRpcSendParams

<div class="section">

</div>

## Enums

### MLAPI.Messaging.RpcDelivery

<div class="section">

RPC delivery types

</div>

### MLAPI.Messaging.RpcQueueHistoryFrame.QueueFrameType

<div class="section">

</div>

## Delegates

### MLAPI.Messaging.CustomMessagingManager.HandleNamedMessageDelegate

<div class="section">

Delegate used to handle named messages

</div>

### MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate

<div class="section">

Delegate used for incoming unnamed messages

</div>
