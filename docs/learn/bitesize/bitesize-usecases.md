---
id: bitesize-usecases
title: Multiplayer Use Cases sample
description: Learn about the scenes in the Multiplayer Use Cases sample.
---

The [Multiplayer Use Cases Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/MultiplayerUseCases) provides multiple scenes that explain some APIs, systems, and concepts that you can use with Netcode for GameObjects:

- Server-side manipulation of data sent by Clients.
- State synchronization through NetworkVariables.
- Proximity interactions that are only visible only to the local player.
- Client-server communication through  Remote Procedure Calls (RPCs).

### Tutorials

Each scene includes a tutorial to help you locate the scripts and GameObjects it uses. Follow the tutorial included in each sample scene to learn how to use it.

The tutorials that open with each scene use the [Tutorial Framework package](https://docs.unity3d.com/Packages/com.unity.learn.iet-framework@4.0/manual/index.html). You can open each tutorial at any time from the **Tutorials** menu.

## The NetvarVsRpc scene

The NetvarVsRpc scene explains why to use NetworkVariables instead of Remote Procedure Calls (RPCs) to perform state synchronization.

## The NetworkVariables scene

The NetworkVariables scene shows you how to use NetworkVariables to perform state synchronization in a way that also sends the most recent information to late joining or reconnecting clients.

## The ProximityChecks scene

The ProximityChecks scene shows you how to detect the local user and enable or disable in-game actions based on the player character's distance from a GameObject.

## The RPCs scene

The RPCs scene demonstrates the following Remote Procedure Call (RPC) processes: 
 * Use RPCs to send information from clients to the server.
 * Perform server-side manipulation of the data sent.
 * Use connection approval to determine the spawn position of the player.

## Additional resources

- Get help and ask questions on [Multiplayer Discussions](https://discussions.unity.com/lists/multiplayer).
- Join the community of Multiplayer creators on the [Multiplayer Networking Discord](https://discord.gg/unity-multiplayer-network).
- [Request a feature or report a bug](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/issues/new/choose).
