---
id: distributed-authority
title: Distributed authority topologies
---

Distributed authority is one possible [network topology](network-topologies.md) you can use for your multiplayer game.

:::note Beta feature
Distributed authority is still in beta. During the beta phase, using the distributed authority service provided by the [Multiplayer Services package](https://docs.unity.com/ugs/en-us/manual/mps-sdk/manual) is free. When distributed authority is fully released, [using the service will incur a cost](https://unity.com/products/gaming-services/pricing).
:::

## Defining distributed authority

In a distributed authority topology, game clients share responsibility for owning and tracking the state of objects in the network and have the authority to spawn and manage objects themselves, with additional options to configure ownership permissions. A small, lightweight central state service keeps track of changes in spawned object states and routes network traffic. There is no central server simulating the game: all clients run their own partial simulations and communicate their updates directly to other clients (via the central state service).

Distributed authority is also distinct from peer-to-peer models, because it still involves a central service that all clients are connected to, rather than a model where communication is client-to-client, or all clients broadcasting to all other clients.

### Session ownership

Distributed authority provides additional permissions to manage object distribution while also incorporating the concept of a session owner. The session owner is given host-like permissions to handle global game state-related tasks that a typical client-server host handles. As long as global game states are persisted via [NetworkVariable](../basics/networkvariable.md) states, a client will be promoted to session owner if the current session owner leaves a distributed authority session. The newly promoted session owner takes over the management of these global game states.

## Use cases for distributed authority

Using a distributed authority topology is typically not suitable for high-performance competitive games that require an accurate predictive motion model. The distributed authority model successfully addresses a lot of visual and input-related issues, but does have some limitations:

* Since authority and ownership of objects is distributed across clients, there's typically no single physics simulation governing the interaction of all objects. This can require approaching physics-related gameplay differently compared to a traditional client-server context.
* Depending on the platform and overall design of your product, it can be easier for bad actors to cheat. The authority model gives more trust to individual clients. Evaluate your cheating tolerance when developing with distributed authority.

For game designs that don't require a precise physics simulation or client prediction model (with potentially some form of rollback), a distributed authority approach can be a good option. It's less resource intensive than having a dedicated game server, and can make it simpler to implement many common netcode features when compared with equivalent implementations in a client-server topology.

### Distributed authority versus client-server

The traditional [client-server](client-server.md) model typically includes a service relay to solve connectivity issues, notably Network Address Translation (NAT), between players across different regions and networks. This topology works well for projects that require competitive client prediction, rollback, and a centralized authority – however, it comes at the cost of added latencies when communicating state changes from one client to another.

With a distributed authority topology, a client's state change takes a single client-relative [round trip period of time (RTT)](../learn/lagandpacketloss.md#round-trip-time-and-pings) (½ per client) to be updated on all connected clients. The distributed authority service is more efficient: messages are routed and then processed, whereas client-server topologies require messages to be processed and then, at a later time, conveyed via new messages to all connected clients.

<p align="middle">
  <img src="/img/cloud-relay-service.jpg" width="50%" />
  <img src="/img/distributed-authority-service.jpg" width="50%" />
</p>

The distributed authority service is designed to quickly inspect messages, make any necessary changes (such as updating the destination address), forward the message, and then update any object state changes it's tracking. For certain operations like joining an in-progress session, the distributed authority service completely substitutes for a traditional host or server: it already has an up-to-date understanding of the state and can immediately transmit it to the joining client. Compared to a traditional client-server topology, this results in faster delivery of state changes, more balanced bandwidth utilization, and a smoother experience for all players.

## More information about distributed authority

For more information about how distributed authority works in Netcode for GameObjects, see the following pages in the documentation:

- [Distributed authority quickstart](../learn/distributed-authority-quick-start.md)
- [Understanding ownership and authority](../basics/ownership.md)
- [Race conditions](../basics/race-conditions.md)
- [Spawning synchronization](../basics/spawning-synchronization.md)
- [Deferred despawning](../basics/deferred-despawning.md)
- [Distributed Authority Social Hub sample](../learn/bitesize/bitesize-socialhub.md)
