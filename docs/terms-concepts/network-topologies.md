---
id: network-topologies
title: Network topologies
---

Network topology defines how a network is arranged. In the context of multiplayer games, this primarily relates to how clients, hosts, and servers are connected and communicate. Different network topologies have different benefits and drawbacks, depending on the type of game you want to make.

The network topologies that Netcode for GameObjects supports are based on the two primary [authority models](authority.md).

## Client-Server

Client-Server games use the [Server authority model](authority.md#server-authority). In this network topology the server has final authority on the state of the game. Each client sends updates to the server, and the server runs the main game simulation. The game has a single server and many clients.

The two primary network topologies that Netcode for GameObjects supports are [client-server](#client-server) and [distributed authority](#distributed-authority).

For more details about client-server topologies, refer to the [Client-Server page](#client-server).


## Distributed authority

In a distributed authority topology, game instances share responsibility for owning and tracking the state of objects in the network using the [Distributed authority model](authority.md#distributed-authority). A small, lightweight central state service tracks a minimal amount of game state and routes network traffic. There is no server simulating the game: each connected game instance runs a subdivision of the simulation.

Distributed authority topologies are useful for keeping costs down, and solve a lot of the input-related issues typically addressed using client prediction systems. The lack of a central authority can make them more vulnerable to cheating and bad actors.

For more details about distributed authority topologies, refer to the [Distributed authority page](distributed-authority.md).

## Client-server versus distributed authority topology

The primary differences between [client-server](client-server.md) and [distributed authority](distributed-authority.md) topologies are latency, cost, and security.

* **Latency**: Client-server topologies typically experience more latency, since all changes must be communicated to a relay service, then the server (where updates are authorized), then back out to clients, whereas clients in distributed authority networks have the authority to communicate changes directly to other clients via the relay service.
* **Cost**: Client-server topologies using a dedicated game server are typically an expensive option due to the hardware and running costs involved in maintaining a powerful server machine, although this does allow for higher performance and better [tick rates](../learn/ticks-and-update-rates.md). Distributed authority networks are cheaper, since they lack a dedicated central server and game simulations run solely on clients.
* **Security**: Because client-server topologies have a single central authority, they're more resilient to cheating and bad actors, and can support additional features such as client prediction and rollback.
