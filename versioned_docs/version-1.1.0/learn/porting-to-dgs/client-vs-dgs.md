---
id: client-vs-dgs
title: Porting from client-hosted to DGS - Client-hosted vs DGS-hosted
sidebar_label: Client-hosted vs DGS-hosted
---
:::note
This is part two of the [Porting from client-hosted to dedicated server-hosted series](../porting-to-dgs).

See the other pages in this series:

- [Part 1 - Introduction](../porting-to-dgs)
- **Part 2** - Current
- [Part 3 - Game changes](./porting-to-dgs-game-changes)
- [Part 4 - Optimizing server builds](./optimizing-server-builds)
- [Part 5 - Hosting considerations](./hosting-considerations)

:::

Choosing between a client-hosted and a dedicated server game isn’t as straightforward as it might initially seem. There are multiple pros and cons to each solution, and the scales can easily tip one way or another depending on a multitude of factors, such as the game type, the latency tolerance, the game integrity (how easily players can cheat), and the expectations of your players. Sometimes, it might even make sense to have multiple hosting options. This section covers some pros and cons of each solution.

## Client-hosted games

A client-hosted game is a game that doesn’t rely on a dedicated server (or a server-specific build) to host game servers. Instead, the same executable has the code to run as a client or as a host. Players can run the client build locally as a host and allow other players to join through peer-to-peer connections or a peer-to-peer mimicking solution like [Relay](https://docs.unity.com/relay/).

:::note
NGO has three start options: [`StartClient`](../../api/Unity.Netcode.NetworkTransport#startclient), [`StartHost`](../../api/Unity.Netcode.NetworkManager#starthost) and [`StartServer`](../../api/Unity.Netcode.NetworkManager#startserver), and [`StartServer`](../../api/Unity.Netcode.NetworkTransport#startserver). A host acts as both a client and a server.
:::

Games that benefit most from a client-hosted hosting approach include games that:

- Don’t need to scale to large numbers of players
- Aren’t sensitive to lag or latency
- Aren’t sensitive to cheating

The following table lists some pros and cons of using a client-hosted hosting approach to host your multiplayer game.

| PROS | CONS |
|---|---|
| There are fewer costs associated with a client-hosted game because you don’t need to worry about paying for a hosting provider. ✝ | You don’t have control over the quality of service (QoS) of connections because they depend on the host player’s network. |
| It's easier to manage builds in client-hosted games because you only need to release a single build for players. | Depending on the game type, players might become frustrated because it’s not fair that the host player has zero latency. |
| Client-hosted games are simpler to debug and profile compared to dedicated server-hosted games (your development PC can also run the host, a DGS might run on specialized hardware). | Players can more easily cheat because they have physical access to the server. |
| The above makes it great for LAN (local area network) parties. | Client-hosted games don’t scale well. Player hardware usually isn’t capable of hosting game sessions with hundreds of connections. |

✝ However, some games might generate more traffic (compared to compute resources), which might make a client-hosted game more expensive than using a service like Game Server Hosting (Multiplay) if relying too much on Relay.

## Dedicated server-hosted games

A dedicated server-hosted game is a game that runs server builds on hardware that’s dedicated to hosting the game. The dedicated server might be in an [on-premise data center](./hosting-considerations.md#developer-hosted-cloud), in the [cloud](./hosting-considerations#developer-hosted-cloud), or made available through a [managed service provider](#managed-service-provider), such as Unity’s [Game Server Hosting](https://docs.unity.com/game-server-hosting). In any case, players don’t usually have access to the server build.

Games that benefit most from a dedicated server-hosted hosting approach include those that:

- Are sensitive to latency and lag
- Are competitive and sensitive to cheating
- Need to scale to large numbers of players

The following table lists some pros and cons of using a dedicated server hosting approach to host your multiplayer game.

| PROS | CONS |
|---|---|
| Players don’t have access to your server build, which makes it easier to keep game authority and security. | You have to worry about uptime, quality of service, latency, and geographic availability. |
| There’s no extra lag due to relay based connections. | You must consider scalability because the number of players connected to your server fleet can change drastically in a short time. |
| You have more control over performance and quality of service since you as a developer control the hardware the server runs on. | It can quickly get expensive, depending on how you host the server build. |
| It’s easier to think about the server part of your code and the client part of your code when there’s no overlap like a client-hosted game. | It’s more complicated to debug because you usually need to run the production build in a virtual machine for testing. |
| Clients don’t require as much performance because they'ren’t responsible for the processing and bandwidth overhead involved with hosting. | You have to keep a server build and a client build. |
| You don’t have to worry about host migrations or what to do when the host player disconnects. ✝ |  |
| You don’t have to worry about the unfairness of the host having zero latency or lag. |  |
| You have the option of using a managed service provider like Game Server Hosting, which allows you to focus on other aspects of your game. |  |

✝ However, you still need to accommodate for unexpected server failures. These failures are less likely to happen, but you still need to handle them with appropriate error messaging.
