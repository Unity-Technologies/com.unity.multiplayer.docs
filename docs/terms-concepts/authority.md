---
id: authority
title: Authority
---

Multiplayer games are games that are played between many different game instances. Each game instance has their own copy of the game world and behaviors within that game world. To have a shared game experience, each networked object is required to have an **authority**.

The authoritative game instance is the game instance that has authority over a given networked object. The authority has the ultimate power to make definitive decisions about an object. It's important for each networked object to have a single source of authority. The authority has the final control over all state and behavior of that object.

An authority is required to mediate and reconcile behavior on each object. The authority is able to mediate the effects of network lag, and is responsible for reconciling behavior if many players are attempting to simultaneously interact with the same object.

## Authority models

Netcode for GameObjects supports two authority models: [server authority](#server-authority) and [distributed authority](#distributed-authority).

### Server authority

In a [server authority](client-server.md) game, the server is always the authority on all objects within the game.

A server authority game has a single game instance that is defined as the server. That game instance is responsible for running the main simulation and managing all aspects of running the networked game.

The server authority model has the strength of providing a centralized authority to manage any potential game state conflicts. This allows the implementation of systems such as game state rollback and competitive client prediction. However, this can come at the cost of adding latencies, because all state changes must be sent to the server game instance, processed, and then sent out to other game instances.

Server authority games can also be resource intensive. The server runs the simulation for the entire game world, and so the server needs to be powerful enough to handle the simulation and networking of all connected game clients. This resource requirement can become expensive.

Server authority is primarily used by performance-sensitive games, such as first-person shooters, or competitive games where having a central server authority is necessary to minimize cheating and the effects of bad actors.

### Distributed authority

A distributed authority game has an authority per individual network object.

In a distributed authority game, each game instance is the authority for a subdivision of the networked objects in the game. Each game instance runs the simulation for their subdivision of objects, and receives updates from other game instances for the rest of the simulation.

The authority of each network object is responsible for simulating the behaviour and managing any aspects of running the networked game that relate to the objects it is the authority of.

Because distributed authority games share the simulation between each connected client, they are less resource intensive. Each machine connected to the game processes a subdivision of the simulation, so no single machine needs to have the capacity to process the entire simulation. This results in a multiplayer game experience that can run on cheaper machines and is less resource intensive.
