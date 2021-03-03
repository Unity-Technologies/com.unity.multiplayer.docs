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

### MLAPI.Messaging.ClientRPCAttribute

<div class="section">

Attribute used on methods to me marked as ClientRPC ClientRPC methods
can be requested from the server and will execute on a client Remember
that a host is a server and a client

</div>

### MLAPI.Messaging.CustomMessagingManager

<div class="section">

The manager class to manage custom messages, note that this is different
from the NetworkingManager custom messages. These are named and are much
easier to use.

</div>

### MLAPI.Messaging.RPCAttribute

<div class="section">

Generic supertype of Client and Server RPC Attributes. Do not use
directly.

</div>

### MLAPI.Messaging.RpcResponse-1

<div class="section">

The RpcResponse class exposed by the API. Represents a network
Request/Response operation with a result

</div>

### MLAPI.Messaging.RpcResponseBase

<div class="section">

Abstract base class for RpcResponse

</div>

### MLAPI.Messaging.ServerRPCAttribute

<div class="section">

Attribute used on methods to me marked as ServerRPC ServerRPC methods
can be requested from a client and will execute on the server Remember
that a host is a server and a client

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

### MLAPI.Messaging.RpcDelegate

<div class="section">

Delegate definition for performance RPC's.

</div>
