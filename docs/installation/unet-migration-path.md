---
id: unet-migration-path
title: Migrate a project from UNet to supported services
---


This guide explains how to replace the following major UNet components:

* Runtime component (UNet netcode framework)
* Backend service components (UNet services)

:::warning
UNet services will no longer be accessible after May 2025.
:::

All options provided below require that you upgrade the project to Unity 2020.3 LTS first. Since UNet’s services are no longer available, the suggested first party alternatives are Unity Lobby, and Unity Relay, which are available from Unity 2020.3 onward.

:::note 
When you upgrade to Unity versions 2022 or later, you can access the latest versions and fixes, but it might make it harder to upgrade your project seamlessly. Despite the suggestion to use Unity 2020.3 LTS, note that Unity no longer provides support for that version of the Editor. If this is something that is important for you and your project, consider upgrading to a later version of Unity.
:::

## Requirements

Follow these steps before continuing:

1. Download Unity 2020.3.48f1 from the [Unity Download Archive](https://unity.com/releases/editor/whats-new/2020.3.48).
2. Back up your project.
3. Open your project with Unity 2020.3.48f1.
4. Fix all the compilation errors (if any).
5. Ensure your game works as expected.

When you upgrade your project, decide what Netcode framework to use to replace UNet.

:::important

Replacing the netcode framework of a game means replacing the foundation onto which all multiplayer features were built: It’s a high-risk, and usually very time consuming, operation that will very likely break features of your core game loop.

Therefore, if you don’t plan to invest a long time reworking and testing your game, keeping UNet might be the lowest-effort solution in terms of netcode, but you won’t be able to use Unity Relay. You also won’t receive support for any future UNet issues because it’s deprecated.

UNet services won’t be active and accessible after May 2025, even if you keep UNet as a netcode framework. Once you’ve made a decision about the netcode framework, replace the gaming services.
:::

## Replacing UNet and adopting Unity Gaming Services

You can use one of the following options to replace UNet: 

* Mirror (Recommended)
* Netcode for GameObjects

### Get started with Mirror

:::info
The following concerns a product or service (each a “Third Party Product”) that is not developed, owned, or operated by Unity. This information may not be up-to-date or complete, and is provided to you for your information and convenience only. Your access and use of any Third Party Product is governed solely by the terms and conditions of such Third Party Product. Unity makes no express or implied representations or warranties regarding such Third Party Products, and will not be responsible or liable, directly or indirectly, for any actual or alleged damage or loss arising from your use thereof (including damage or loss arising from any content, advertising, products or other materials on or available from the provider of any Third Party Products).
:::

Mirror is a third party fork of UNet, so its syntax and core system, at least for the first versions of Mirror, is very similar to UNet. For this reason, it might be easier to adopt Mirror as a replacement for UNet.

1. Follow the [Migration Guide](https://mirror-networking.gitbook.io/docs/manual/general/migration-guide) (Mirror), picking a Mirror release that is as close as possible to when your game was released. Mirror 51.0.1 should be a close enough pick.
2. Ensure your game works as expected.
3. Mirror is compatible with Unity Relay through Unity Transport and a transport adapter. Refer to the [Unity Mirror sample](https://docs.unity.com/ugs/manual/relay/manual/mirror), which provides a P2P connectivity solution for the game. To replace session management and matchmaking, continue to [Replacing deprecated services](#)


### Get started with Netcode For GameObjects

Netcode For GameObjects is Unity’s first party solution for small-scale, real-time, slow-paced games.

Before starting the migration, it is recommended to go through the Unity [Multiplayer Use Cases sample](https://docs-multiplayer.unity3d.com/netcode/current/learn/bitesize/bitesize-usecases/)’s tutorials to learn the basics of Netcode For GameObjects in case you need to rework some of the features of your game.

1. Follow the steps in [Migrate from UNet to Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/installation/upgrade_from_UNet/) (Unity Multiplayer).
2. Ensure your game works as expected.
3. Follow [Replacing deprecated services](https://docs.google.com/document/d/1IypzNq9b0NroKBkUYT3Ih7IJtfBzMrk7M6qMmAmfnb8/edit?disco=AAABeKnHmEw&tab=t.0).

# Replace deprecated services

At this point, integrate a service that allows you to connect multiple players playing on different devices. You can use Unity Lobby and Unity Relay for this purpose. These services are the ideal solution for casual, client-authoritative games (in other words, party games or co-op games).

Before getting started, refer to [the pricing of Unity Gaming Services](https://unity.com/products/gaming-services/pricing) in order to understand the impact of choosing these services.

Once you’ve checked the pricing, refer to the documentation of [Lobby](https://docs.unity.com/ugs/en-us/manual/lobby/manual/create-a-lobby) and [Relay](https://docs.unity.com/ugs/en-us/manual/relay/manual/get-started) to get started.

You can also explore the [Game Lobby Sample](https://github.com/Unity-Technologies/com.unity.services.samples.game-lobby) (GitHub), which uses the concepts explained in the documentation to connect players with each other during a game session. Refer to [How to set up Relay and Lobby](https://www.youtube.com/watch?v=mgIDwkaVAqw) (YouTube) to learn how to setup the services, and explore the sample. 

If you prefer to access Lobby and Relay through the [Unity Matchmaker service](https://docs.unity.com/ugs/en-us/manual/matchmaker/manual/matchmaker-overview), which enables more powerful features but also increases the complexity of the implementation, you can instead refer to [How to Use Unity Matchmaker with Relay to Match Players](https://support.unity.com/hc/en-us/articles/30896635553940-How-to-Use-Unity-Matchmaker-with-Relay-to-Match-Players) (Unity Support) that highlights the main steps to integrate Unity Lobby and Relay in your project through the Unity Matchmaker. 

:::important
There might not be a direct replacement for UNet services. For example, most of what was doable with UNet matchmaking can be replaced by the now-deprecated Lobby and Relay packages, and their related services, which are part of [Unity Gaming Services](https://unity.com/solutions/gaming-services). 
Refer to [Migrate from UNet Matchmaker to to the Lobby Unity Gaming Service](installation/migrate-from-matchmaker-to-lobby.md) explains the details about migrating from UNet Matchmaker to UGS Lobby and Relay.

If you upgrade a project to Unity 2022.3 or later, you can access the [Multiplayer SDK](https://docs.unity.com/ugs/en-us/manual/mps-sdk/manual). The Multiplayer SDK groups several Unity Gaming Services under a single package, and makes it easier to work with several of them at once through a unified API layer.
:::


## Get started with the Multiplayer SDK

Use one of the following templates to create a project from the Unity Hub to explore Multiplayer SDK functionality: 

* [Small Scale Competitive Multiplayer Template](https://docs.unity3d.com/Packages/com.unity.template.multiplayer-ngo@2.1/manual/index.html) -This template is available from Unity version 2022.3 and based on Netcode For GameObjects).
* [Competitive Action Multiplayer Template](https://docs.unity3d.com/Packages/com.unity.template.multiplayer-netcode-for-entities@1.0/manual/index.html) - This template is available from Unity version 6.0 and based on Netcode For Entities.

These templates contain production-ready systems that use the individual services packages in 2022.3, or the Multiplayer SDK in Unity 6, to connect players with each other.

It is recommended to refer to these templates and extract the systems that can replace the deprecated UNet services. For example, Small Scale’s `MatchmakerTicketer.cs` class is a good replacement for deprecated matchmaking systems.

Alternatively, you can reference the [Multiplayer SDK’s Get started](https://docs.unity.com/ugs/en-us/manual/mps-sdk/manual/get-started).
