---
id: porting-to-dgs-1
title: Porting from client-hosted to DGS - Introduction
sidebar_label: Introduction
---
:::note
This is part one of the [Porting from client-hosted to dedicated server-hosted series](./porting-to-dedicated-server-hosted.md).

See the other pages in this series:

- **Part 1** - Current
- [Part 2 - Client-hosted versus DGS-hosted](./client-vs-dgs.md)
- [Part 3 - Game changes](./game-changes.md)
- [Part 4 - Optimizing server builds](./optimizing-server-builds.md)
- [Part 5 - Hosting considerations](./hosting-considerations.md)

:::

You might have started developing your game with client-hosted in mind but then realized it wasn’t giving you the performance, reliability, or security you wanted. There are multiple reasons for choosing both a dedicated game server (DGS) solution and a client-hosted solution. This document provides guidance around switching from a client-hosted game to a dedicated-server game in Unity using [Netcode for GameObjects (NGO)](../about.md).

If your server and clients run the same code, it’s usually simpler to port from DGS to client-hosted than the other way around. It’s easier to place a client on top of a DGS than to extract a DGS from your host. By starting with your DGS logic already isolated, you can then more easily change to client-hosted by enabling client-side logic for the host. This isn't the case if your server uses a different technology stack than your clients.

There are two distinct meanings of the word “host” that you must take care not to confuse: the NGO host and the hardware host.

- The **NGO host** is where both a client and a server run simultaneously. The hosting provider (the hardware host) runs your Unity server build.
- The **hardware host** (virtual or bare-metal) runs your Unity server build in a data center or hosting provider.

In this article, host refers to the NGO host.

## Support and resources

[Join the Multiplayer Technology group on Discord](https://discord.gg/buMxnnPvTb) for questions, comments, and discussions. Also check out the following resources:

- [An Introduction to multiplayer network and server models](https://unity.com/how-to/intro-to-network-server-models)
- [Dedicated Server target and stripping optimizations discussion in the Unity Forum](https://forum.unity.com/threads/unity-2021-2-dedicated-server-target-and-stripping-optimizations-now-live-please-share-feedback.1143734/)
- [Unity Support](https://support.unity.com/hc/en-us)
