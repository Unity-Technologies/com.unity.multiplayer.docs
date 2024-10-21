---
id: network-topologies
title: Network topologies
---

Network topology defines how a network is arranged. In the context of multiplayer games, this primarily relates to how clients, hosts, and servers are connected and communicate. Different network topologies have different benefits and drawbacks, depending on the type of game you want to make.

The two primary network topologies that Netcode for GameObjects supports are [client-server](#client-server) and [distributed authority](#distributed-authority).

## Client-server

### Dedicated game server

Dedicated servers run the main simulation and manage all aspects of running the networked game. Players connect to the server using separate client programs to see and interact with the game.

Dedicated servers are often the most expensive network topology, but also offer the highest performance and can provide additional functionality such as competitive client prediction, rollback, and a centralized authority to manage any potential client conflicts. However, this comes at the cost of added latencies when communicating state changes from one client to another, as all state changes must be sent from client to server, processed, and then sent back out to other clients.

This network topology is primarily used by performance-sensitive games, such as first-person shooters, or competitive games where having a central server authority is necessary to minimize cheating and the effects of bad actors.

![Dedicated Server](/img/ded_server.png)

### Client-hosted listen server

Listen servers are similar to dedicated game servers, except that the server runs in the same process as a game client. This makes it a cheaper option, but with the disadvantage that the hosting client has to communicate updates over a residential internet connection. Server performance is also degraded because the machine running the server is also generating an output image for the user playing on that machine.

![Client Hosted](/img/client-hosted.png)

## Distributed authority

In a distributed authority topology, game clients share responsibility for owning and tracking the state of objects in the network and have the authority to spawn and manage objects themselves, with additional options to configure ownership permissions. A small, lightweight central state service keeps track of changes in spawned object states and routes network traffic. There is no central server simulating the game: all clients run their own simulations and communicate their updates directly to other clients (via the central state service).

Distributed authority topologies are useful for keeping costs down, and solve a lot of the input-related issues typically addressed using client prediction systems, although the lack of a central authority can make them more vulnerable to cheating and bad actors.

For more details about distributed authority topologies, refer to the [Distributed authority page](distributed-authority.md).

## Other network topologies

### Local or couch multiplayer

Local multiplayer games use a single client runtime instance that can be played by two or more people on the same screen in the same physical location.

### Offline local area network (LAN)

Local area network games aren't connected to the internet, but use a hosted server onsite to support a local network of clients in the same physical location.

### Peer-to-peer (P2P)

A peer-to-peer network is created when two or more computers are connected and share resources without going through a separate server.

![Peer-to-Peer](/img/peer2peer1.png)
