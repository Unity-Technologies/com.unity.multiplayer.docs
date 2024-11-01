---
id: bitesize-socialhub
title: Multiplayer Distributed Authority Social Hub sample
description: Learn about the scenes in the Multiplayer Use Cases sample.
---

The [Distributed Authority Social Hub Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/DistributedAuthoritySocialHub) is a project that demonstrates Distributed Authority's features and helps you integrate Distributed Authority into your own game projects.

Within Social Hub, you can explore Distributed Authority in a sandbox-like environment. You can:

- Automatically redistribute ownership of NetworkObjects across connected clients
- Client-side NetworkObject spawning and deferred NetworkObject despawning
- Transfer ownership of NetworkObjects with variable ownership flags
- Host migration of a networked game session

## The Bootstrap scene

This is the entry point to the sample. After it loads, the MainMenu scene appears.

## The MainMenu scene

1. Enter a player name and a session name.
2. Select **Start** to create or join an existing game.

## The HubScene_TownMarket scene

This a sandbox-like environment that supports 64 players. The control model is WASD controls, with the *E* button mapped as the key to interact with crates and pots. These are NetworkObjects that you can pick up, drop, and throw. Attach one NetworkObject to another with an animated rig through the use of FixedJoints. As a client picks up a NetworkObject, authority of that NetworkObject transfers to that client.

A client has authority over its player NetworkObject. Therefore, the movement, animations, and interactions that a client performs are client-authoritative.

## Additional resources

- Get help and ask questions on [Multiplayer Discussions](https://discussions.unity.com/lists/multiplayer).
- Join the community of Multiplayer creators on the [Multiplayer Networking Discord](https://discord.gg/unity-multiplayer-network).
- [Request a feature or report a bug](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/issues/new/choose).
