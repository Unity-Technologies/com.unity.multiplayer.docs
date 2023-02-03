---
id: porting-to-dgs
title: Porting from client-hosted to DGS - Introduction
sidebar_label: Introduction
---
:::note
This is part one of the Porting from client-hosted to dedicated server-hosted series.

See the other pages in this series:

- **Part 1** - Current
- [Part 2 - Client-hosted versus DGS-hosted](./porting-to-dgs/client-vs-dgs)
- [Part 3 - Game changes](./porting-to-dgs/porting-to-dgs-game-changes)
- [Part 4 - Optimizing server builds](./porting-to-dgs/optimizing-server-builds)
- [Part 5 - Hosting considerations](./porting-to-dgs/hosting-considerations)

:::

You might have started developing your game with client-hosted in mind but then realized it wasn’t giving you the performance, reliability, or security you wanted. There are multiple reasons for choosing both a dedicated game server (DGS) solution and a client-hosted solution. This document provides guidance around switching from a client-hosted game to a dedicated-server game in Unity using [Netcode for GameObjects (NGO)](../about).

There are two distinct meanings of the word “host” that you must take caren't to confuse: the NGO host and the hardware host.

- The **NGO host** is where both a client and a server run simultaneously. The hosting provider (the hardware host) runs your Unity server build.
- The **hardware host** (virtual or bare-metal) runs your Unity server build in a data center or hosting provider.

In this article, host refers to the NGO host.

## Support and resources

[Join the Multiplayer Technology group on Discord](https://discord.gg/buMxnnPvTb) for questions, comments, and discussions. Also check out the following resources:

- [An Introduction to multiplayer network and server models](https://unity.com/how-to/intro-to-network-server-models)
- [Dedicated Server target and stripping optimizations discussion in the Unity Forum](https://forum.unity.com/threads/unity-2021-2-dedicated-server-target-and-stripping-optimizations-now-live-please-share-feedback.1143734/)
- [Unity Support](https://support.unity.com/hc/en-us)
