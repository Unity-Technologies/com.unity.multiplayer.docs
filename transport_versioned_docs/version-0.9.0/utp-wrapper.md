---
id: wrapper
title: Create a UTP Wrapper
---

To use UTP with some services, like Unity MLAPI, you may need to create a wrapper implementing a `NetworkDriver`.

You can set up `NetworkDriver` with modular `NetworkInterfaces`, configurable Pipelines, and Protocols to implement virtual connections over any transport.

## NetworkDriver

`NetworkDriver` data

NetworkSendInterface
NetworkProtocolInterface - Protocol for the NetworkDriver, for example Unity Relay
EventQueue
ConnectionList
DataStream - Information a `DataStreamWriter` sends and updates through the network connection.
DisconnectReasons
PipelineProcesser - Manages pipelines
DefaultHeaderFlags - Default headers for provided messages
ConcurrntParallelSendQueue
ThreadIndex
PendingBeginSend

## ProtocolInterface

A NetworkDriver_SendReceive with the following parameters: 
* Message send count
* Network interface to use
* Enable or disable setting for burst

### Relay Message Protocol

Players bind to a relay. Clients are identified by an AllocationID UUID provided by the Allocations Service.

:::note
In the case of a single client supporting multiple players, each player is assumed to be its own separate connection with its own AllocationID.
:::

All messages have a standard a header and a message-specific message body and include the following types: BIND, BIND_RECEIVED, CONNECT_REQUEST, CONNECT, ACCEPT, ACCEPTED, REJECT, REJECTED, DISCONNECT, CLOSE, and ERROR.

<!-- info on Relay Message https://github.com/Unity-Technologies/mp-relay/blob/main/pkg/protocol/README.md -->
