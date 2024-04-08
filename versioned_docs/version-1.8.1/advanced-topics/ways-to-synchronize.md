---
id: ways-synchronize
title: Synchronizing states and events
---

## Introduction
Netcode for GameObjects (Netcode) includes three options for synchronizing game states and/or events:
- Messaging System
    - Remote Procedure Calls (RPCs)
    - Custom Messages
- NetworkVariables
    - Handled by the "internal" messaging system and [categorized under "Networking".](../basics/networkvariable.md)

While each of the above options can be used for the same thing, synchronizing states or events, they all have specific use cases and limitations.

## Messaging System
The Netcode messaging system provides you with the ability to handle sending and receiving messages or events.  The entire messaging system supports the serialization of most primitive value `type`s as well as any classes and/or structures that implement the `INetworkSerializable` interface.

### Remote Procedure Calls
RPCs can be viewed as a way to send an event notification as well as a way to handle direct communication between a server and a client (or vice versa).  This is sometimes useful when the ownership scope of the `NetworkBehavior`, that the remote procedure call is declared within, belongs to the server but you still want one or more clients to be able to communicate with the associated `NetworkObject`.  
**Some Usage Examples:**
- An Rpc with `SendTo.Server` can be used by a client to notify the server that the player is trying to use a world object (that is, a door, a vehicle, etc.)
- A second Rpc with `SendTo.SpecifiedInParams` can be used by a server to notify a specific client of a special reconnection key or some other player specific information that doesn't require its state to be synchronized with all current and any future late joining client(s).

**The are several types of RPC methods,** but most are circumstantial. The ones you are most likely to use are:

- **Rpc(SendTo.Server):** A remote procedure call received by and executed on the server-side.
- **Rpc(SendTo.NotServer):** A remote procedure call received by and executed on the client side. Note that this does NOT execute on the host, as the host is also the server.
- **Rpc(SendTo.ClientsAndHost):** A remote procedure call received by and executed on the client side. If the server is running in host mode, this RPC will also be executed on the server (the host client).
- **Rpc(SendTo.SpecifiedInParams):** A remote procedure call that will be sent to a list of client IDs provided as parameters at runtime. (By default, other `SendTo` values cannot have any client IDs passed to them to change where they are being sent, but this can also be changed by passing `AllowTargetOverride = true` to the `Rpc` attribute.

RPCs have no limitations on who can send them - the server can invoke an RPC with `SendTo.Server`, a client can invoke an RPC with `SendTo.NotServer`, etc. If an RPC is invoked in a way that would cause it to be received by the same process that invoked it, it will be executed immediately in that process by default. Passing `DeferOverride = true` to the `Rpc` attribute will change this behavior and the RPC will be invoked at the start of the next frame.

[Read More About Rpcs](../advanced-topics/message-system/rpc.md)

### Custom Messages
Custom messages provide you with the ability to create your own "netcode message type" to handle scenarios where you might just need to create your own custom message.
[Read More About Custom Messages](../advanced-topics/message-system/custom-messages.md)

## NetworkVariable System
A NetworkVariable is most commonly used to synchronize state between both connected and late joining clients. The `NetworkVariable` system only supports non-nullable value `type`s, but also provides support for `INetworkSerializable` implementations as well you can create your own `NetworkVariable` class by deriving from the `NetworkVariableBase` abstract class. If you want something to always be synchronized with current and late-joining clients, then it's likely a good `NetworkVariable` candidate.

[Read More About NetworkVariable](../basics/networkvariable.md)
