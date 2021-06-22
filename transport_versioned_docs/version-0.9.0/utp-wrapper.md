---
id: wrapper
title: Create a UTP Wrapper
---

To use UTP with some services, you may need to create a wrapper implementing [`NetworkDriver`](api/Unity.Networking.Transport.NetworkDriver.md), which implements virtual connections over any transport.

## Create the Wrapper

To create a wrapper, implement a `NetworkDriver` with the following passed in:

* Modular `NetworkInterfaces`
* Configurable [Pipelines](pipelines-usage.md)
* ProtocolInterfaces with custom protocols, for example Unity Relay (uses UTP protocol by default)

Use the following method to create a `NetworkDriver`:

```csharp
var driver = new NetworkDriver.Create();
```

Through the `NetworkDriver`, you can create calls to:

* Continuously watches for events in a queue and pipeline to initiate data transfers
* Managing connections
* Initiate and end sending of data payloads, using a capacity passed as a value or set by the protocol
* Create and manage pipelines for stages of sending and receiving data
* Update client and server status, settings, connections, and data

Data sent and received by the `NetworkDriver`: 

* NetworkSendInterface - 
* NetworkProtocolInterface - Defines how to send and receive data following a specific protocol including packet-switching servers, allocation 
* EventQueue - Queue of events triggered by connections
* ConnectionList - Received and approved connection requests to the service 
* DataStream - Information a `DataStreamWriter` sends and updates through the network connection.
* DisconnectReasons - Reason for a disconnection, such as timeout 
* PipelineProcesser - Manages pipelines data is written through
* DefaultHeaderFlags - Default headers for provided messages
* ConcurrntParallelSendQueue - 
* ThreadIndex - If collections enabled, indicates the job's index to calculate time in the queue and when it will start
* PendingBeginSend - If collections enabled, indicates the location in the collection queue for connections and data sending 

## ProtocolInterface

By default, UTP is used as the protocol. You can send a custom protocol interface, for example Unity Relay. The wrapper will implement the interface with data for Relay, creating a strut with function pointers containing code for the project.

A NetworkDriver_SendReceive with the following parameters: 

* Message send count
* Network interface to use
* Enable or disable setting for burst

### Relay Message Protocol

The Relay service enables developers to join players together using client-hosted listen-servers instead of dedicated game servers (DGS). Instead of using dedicated game servers, the Relay service expands connectivity between client-hosts running listen-servers by adding a Relay proxy.

Unity Transport (UTP) supports the Relay service by acting as the underlying connection system. It allows you to send and receive bytes. Use the information in the `CreateAllocationAsync` and `JoinRelayAsync` responses to configure the UTP Relay Transport.

Players bind to a relay. Clients are identified by an `AllocationID` UUID provided by the Allocations Service.

:::note
In the case of a single client supporting multiple players, each player is assumed to be its own separate connection with its own `AllocationID`.
:::

All messages have a standard a header and a message-specific message body and include the following types: BIND, BIND_RECEIVED, CONNECT_REQUEST, CONNECT, ACCEPT, ACCEPTED, REJECT, REJECTED, DISCONNECT, CLOSE, and ERROR.

<!-- info on Relay Message https://github.com/Unity-Technologies/mp-relay/blob/main/pkg/protocol/README.md and general closed beta doc https://docs.google.com/document/d/13VKxagyKsImbMX7gJGMvGKCImBFoHyIo6Av6df3cxfc -->
<!-- need to link out to Relay content here -->

## Example Wrapper
<!-- potential example code could be gleaned from https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/blob/develop/com.unity.multiplayer.transport.utp/Runtime/UTPTransport.cs but it is still in development-->

[MLAPI UTP wrapper](/docs/develop/transport-api/introduction) is an in-progress example of a UTP wrapper.