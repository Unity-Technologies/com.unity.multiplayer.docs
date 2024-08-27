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

Each scene includes a tutorial to help you locate the scripts and GameObjects it uses. Follow each tutorials to learn how to use this Sample.

The tutorials that open with each scene use the [Tutorial Framework package](https://docs.unity3d.com/Packages/com.unity.learn.iet-framework@4.0/manual/index.html). You can open each tutorial at any time from the **Tutorials** menu.

## The NetvarVsRpc scene

The NetvarVsRpc scene demonstrates the differences between the way NetworkVariables and Remote Procedure Calls (RPCs) perform state synchronization.

## The NetworkVariables scene

The NetworkVariables scene demonstrates the way NetworkVariables perform state synchronization in a way that sends the most recent information to late joining or reconnecting clients.

## The ProximityChecks scene

The ProximityChecks scene shows you how to detect the local player and enable or disable in-game actions based on their distance from a GameObject.

## The RPCs scene

Demonstrates the following Remote Procedure Call (RPC) processes: 
 * Use RPCs to send information from clients to the server.
 * Perform server-side manipulation of the data sent.
 * Use Connection Approval to determine the spawn position of the player.

## Additional resources

- Get help and ask questions on the [Multiplayer Discussions](https://discussions.unity.com/lists/multiplayer).
- Join our community of Multiplayer Creators on the [Multiplayer Networking Discord!](https://discord.gg/unity-multiplayer-network).
- [Request a feature or report a bug](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/issues/new/choose).