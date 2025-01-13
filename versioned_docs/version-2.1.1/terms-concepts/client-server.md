---
id: client-server
title: Client-server topologies
---

Client-server is one possible [network topology](network-topologies.md) you can use for your multiplayer game.

## Defining client-server

In a client-server topology, a central server is responsible for running the main simulation and managing all aspects of running the networked game, including simulating physics, spawning and despawning objects, and authorizing client requests. Players connect to the server using separate client programs to see and interact with the game.

Client-server encompasses a number of potential network arrangements. The most common is a dedicated game server, in which a specialized server manages the game and exists solely for that purpose. An alternative client-server arrangement is to have a [listen server](../learn/listenserverhostarchitecture.md), in which the game server runs on the same machine as a client.

## Use cases for client-server

Dedicated servers are often the most expensive network topology, but also offer the highest performance and can provide additional functionality such as competitive client prediction, rollback, and a centralized authority to manage any potential client conflicts. However, this comes at the cost of added latencies when communicating state changes from one client to another, as all state changes must be sent from client to server, processed, and then sent back out to other clients.

Client-server is primarily used by performance-sensitive games, such as first-person shooters, or competitive games where having a central server authority is necessary to minimize cheating and the effects of bad actors.

### Client-server versus distributed authority

The primary differences between client-server and [distributed authority](distributed-authority.md) topologies are latency, cost, and security.

* **Latency**: Client-server networks typically experience more latency, since all changes must be communicated to a relay service, then the server (where updates are authorized), then back out to clients, whereas clients in distributed authority networks have the authority to communicate changes directly to other clients via the relay service.
* **Cost**: Client-server networks using a dedicated game server are typically an expensive option due to the hardware and running costs involved in maintaining a powerful server machine, although this does allow for higher performance and better [tick rates](../learn/ticks-and-update-rates.md). Distributed authority networks are cheaper, since they lack a dedicated central server and game simulations run solely on clients.
* **Security**: Because client-server networks have a single central authority, they're more resilient to cheating and bad actors, and can support additional features such as client prediction and rollback.
