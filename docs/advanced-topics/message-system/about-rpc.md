---
id: about-rpc
title: About RPCs
description: Learn about Unity MLAPI Remote Procedure Calls (RPCs), with implementations for server-side ServerRpc and client-side ClientRpc.
---

Unity MLAPI provides a refactored Remote Procedure Call (RPC) which provides increased performance, significantly reduced boilerplate code, and extensibility for future-proofed code. MLAPI RPC includes `ServerRpc` and `ClientRpc` to execute logic on the server and client-side. This provides a single performant unified RPC solution, replacing previous MLAPI Convenience and Performance RPC.

The multiplayer framework provides two main network constructs ServerRpc and ClientRpc to execute logic on either server-side or client-side. 

See the following information:


* [ClientRpc](clientrpc.md)
* [ServerRpc](serverrpc.md)
* [Reliability](reliabilty.md)
* [Execution Table](execution-table.md)
* [RPC Params](rpc-params.md)
* [Serialization Types and RPCs](serialization.md)

:::note Migration and Compatibility
See [RPC Migration and Compatibility](rpc-compatibility.md) for more information on updates, cross-compatibility, and deprecated methods for Unity RPC.

:::