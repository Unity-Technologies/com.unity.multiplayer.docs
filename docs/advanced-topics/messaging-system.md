---
id: messaging-system
title: Messaging System and RPCs
description: An introdution to the messaging system in MLAPI covering RPC's and Custom Messages
---


The MLAPI has two parts to its messaging system: [RPC messages](about-rpc.md) and [Custom Messages](custom-messages.md). Both types have sub-types that change their behaviour, functionality, and performance.

## RPC Messages

The multiplayer framework provides two main network constructs to execute logic on either server-side or client-side: [`ServerRpc`](message-system/serverrpc.md) and [`ClientRpc`](message-system/clientrpc.md). This concept is often called Remote Procedure Call (RPC) and has wide adoption across the industry.

:::info
For more information see the wikipedia entry on [Remote Procedure Call's](https://en.wikipedia.org/wiki/Remote_procedure_call). 
:::

## RPCs

Unity MLAPI provides a refactored Remote Procedure Call (RPC) which provides increased performance, significantly reduced boilerplate code, and extensibility for future-proofed code. MLAPI RPC includes `ServerRpc` and `ClientRpc` to execute logic on the server and client-side. This provides a single performant unified RPC solution, replacing previous MLAPI Convenience and Performance RPC.

See the following information:

* [ClientRpc](message-system/clientrpc.md)
* [ServerRpc](message-system/serverrpc.md)
* [Reliability](message-system/reliabilty.md)
* [Execution Table](message-system/execution-table.md)
* [RPC Params](message-system/rpc-params.md)
* [Serialization Types and RPCs](message-system/serialization.md)

:::note Migration and Compatibility
See [RPC Migration and Compatibility](message-system/rpc-compatibility.md) for more information on updates, cross-compatibility, and deprecated methods for Unity RPC.

## RPC method calls

A typical framework user (Unity developer) can declare multiple RPCs under a `NetworkBehaviour` and inbound/outbound RPC calls will be replicated as a part of its replication in a network frame.

A method turned into an RPC is no longer a regular method, it will have its own implications on direct calls and in the network pipeline. See [Execution Table](message-system/execution-table.md).


## Custom Messages

See [Custom Messages](custom-messages.md) for information on Custom Messages.
