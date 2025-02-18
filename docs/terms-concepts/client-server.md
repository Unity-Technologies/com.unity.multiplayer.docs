---
id: client-server
title: Client-server topologies
---

The [client-server network topology](network-topologies.md#client-server) is one possible [network topology](network-topologies.md) available within Netcode for GameObjects. Client-server games use the [Server authority model](authority.md#server-authority)

## Client-server network architectures

Client-server encompasses a number of potential network architectures. The most common are the dedicated game server, in which a specialized server manages the game and exists solely for that purpose, and the listen server, in which the game server runs on the same game instance as a client.

### Dedicated game server

Dedicated servers run the game simulation and manage all aspects of running the networked game. Players connect to the server using separate game instances (clients) to see and interact with the game.

Dedicated servers are often the most expensive network topology, but also offer the highest performance and can provide additional functionality such as competitive client prediction, rollback, and a centralized authority to manage any potential client conflicts. However, this comes at the cost of added latencies when communicating state changes from one client to another, as all state changes must be sent from client to server, processed, and then sent back out to other clients.

This network topology is primarily used by performance-sensitive games, such as first-person shooters, or competitive games where having a central server authority is necessary to minimize cheating and the effects of bad actors.

![Dedicated Server](/img/ded_server.png)

### Client-hosted listen server

Listen servers are similar to dedicated game servers, except that the server runs in the same game instance as a game client. This makes listen servers cheap to run as there is not requirement for a  separate, dedicated machine to run the game simulation.

There are networking considerations with the listen server architecture. As the hosting client has to communicate updates over a residential internet connection, there can be large variances in the communication time and therefore the lag between clients.

Server performance can also degraded as one machine is both running the simulation and also generating an output image for the user playing on that machine.

The listen server architecture also increases the cheating footprint for bad actors as the simulation is running on a player's machine, and so the runtime of the simulation is completely vulnerable to cheating.

For more details about listen servers, refer to the [Listen server page](../learn/listenserverhostarchitecture.md)

![Client Hosted](/img/client-hosted.png)
