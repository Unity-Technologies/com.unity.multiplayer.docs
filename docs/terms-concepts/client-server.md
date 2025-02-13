---
id: client-server
title: Client-server topologies
---

The [client-server network topology](network-topologies.md#client-server) is one possible [network topology](network-topologies.md) available within Netcode for GameObjects. Client-server games use the [Server authority model](authority.md#server-authority)

Client-server encompasses a number of potential network architectures. The most common are the dedicated game server, in which a specialized server manages the game and exists solely for that purpose, and the listen server, in which the game server runs on the same game instance as a client.

### Dedicated game server

Dedicated servers run the game simulation and manage all aspects of running the networked game. Players connect to the server using separate game instances (clients) to see and interact with the game.

Dedicated servers are often the most expensive network topology, but also offer the highest performance and can provide additional functionality such as competitive client prediction, rollback, and a centralized authority to manage any potential client conflicts. However, this comes at the cost of added latencies when communicating state changes from one client to another, as all state changes must be sent from client to server, processed, and then sent back out to other clients.

This network topology is primarily used by performance-sensitive games, such as first-person shooters, or competitive games where having a central server authority is necessary to minimize cheating and the effects of bad actors.

![Dedicated Server](/img/ded_server.png)

### Client-hosted listen server

Listen servers are similar to dedicated game servers, except that the server runs in the same game instance as a game client. This makes it a cheaper option, but with the disadvantage that the hosting client has to communicate updates over a residential internet connection. Server performance is also degraded because the machine running the server is also generating an output image for the user playing on that machine.

For more details about listen servers, refer to the [Listen server page](../learn/listenserverhostarchitecture.md)

![Client Hosted](/img/client-hosted.png)

### Client-server versus distributed authority

The primary differences between client-server and [distributed authority](distributed-authority.md) topologies are latency, cost, and security.

* **Latency**: Client-server networks typically experience more latency, since all changes must be communicated to a relay service, then the server (where updates are authorized), then back out to clients, whereas clients in distributed authority networks have the authority to communicate changes directly to other clients via the relay service.
* **Cost**: Client-server networks using a dedicated game server are typically an expensive option due to the hardware and running costs involved in maintaining a powerful server machine, although this does allow for higher performance and better [tick rates](../learn/ticks-and-update-rates.md). Distributed authority networks are cheaper, since they lack a dedicated central server and game simulations run solely on clients.
* **Security**: Because client-server networks have a single central authority, they're more resilient to cheating and bad actors, and can support additional features such as client prediction and rollback.
