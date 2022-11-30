---
id: messaging-system
title: Sending Events with RPCs
description: An introduction to the messaging system in Unity MLAPI, including RPC's and Custom Messages.
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

Netcode for GameObjects (Netcode) has two parts to its messaging system: RPCs and [Custom Messages](message-system/custom-messages.md). Both types have sub-types that change their behaviour, functionality, and performance. This page will focus on RPCs.

## RPC: Remote Procedure Call

The concept of an `RPC` is common not only in video games but in the software industry in general. They are ways to call methods on objects that are not in the same executable. 

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs_Dark.png?text=DarkMode"/>
  <figcaption>Client can invoke a server RPC on a Network Object. The RPC will be placed in the local queue and then sent to the server, where it will be executed on the server version of the same Network Object.</figcaption>
</figure>

At a high level, when calling an `RPC` client side, the SDK will take a note of the object, component, method and any parameters for that `RPC` and send that information over the network. The server will receive that information, find the specified object, find the specified method and call it on the specified object with the received parameters. 

When calling an `RPC`, you call a method remotely on an object that could be anywhere in the world. They are "events" you can trigger when needed. 

If you call an `RPC` method on your side, it will execute on a different machine.

Netcode has two variations of RPCs to execute logic on either server-side or client-side: [`ServerRpc`](message-system/serverrpc.md) and [`ClientRpc`](message-system/clientrpc.md).

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs_Dark.png?text=DarkMode"/>
 <figcaption>Server can invoke a client RPC on a Network Object. The RPC will be placed in the local queue and then sent to a selection of clients (by default this selection is "all clients"). When received by a client, RPC will be executed on the client's version of the same Network Object.</figcaption>
</figure>


:::info
For more information see the wikipedia entry on [Remote Procedure Call's](https://en.wikipedia.org/wiki/Remote_procedure_call). 
:::

### Netcode's RPCs

See the following pages for more information:

- [ClientRpc](message-system/clientrpc.md)
- [ServerRpc](message-system/serverrpc.md)
- [Reliability](message-system/reliabilty.md)
- [Execution Table](message-system/execution-table.md)
- [RPC Params](message-system/rpc-params.md)
  - [Serialization Types and RPCs](message-system/../serialization/serialization-intro.md)

There is also some additional design advice on RPC's and some usage examples on the following pages:

- [RPC vs NetworkVariable](../learn/rpcvnetvar.md)
- [RPC vs NewtorkVariables Examples](../learn/rpcnetvarexamples.md)

:::note Migration and Compatibility
See [RPC Migration and Compatibility](message-system/rpc-compatibility.md) for more information on updates, cross-compatibility, and deprecated methods for Unity RPC.
:::

## RPC method calls

A typical SDK user (Unity developer) can declare multiple RPCs under a `NetworkBehaviour` and inbound/outbound RPC calls will be replicated as a part of its replication in a network frame.

A method turned into an RPC is no longer a regular method, it will have its own implications on direct calls and in the network pipeline. See [Execution Table](message-system/execution-table.md).

### RPC usage checklist:
To use RPCs, make sure
- ```[ClientRpc]``` or ```[ServerRpc]``` attributes are on your method
- Your method name ends with ```ClientRpc``` or ```ServerRpc``` (ex: ```DoSomethingServerRpc()```)
- your method is declared in a class that inherits from NetworkBehaviour
  - your GameObject has a NetworkObject component attached
- Make sure to call your RPC method server side or client side (using ```isClient``` or ```isServer```)
- Only accept value types as parameters

## Serialization Types and RPCs

Instances of Serializable Types are passed into an RPC as parameters and are serialized and replicated to the remote side.

See [Serialization](serialization/serialization-intro.md) for more information.

