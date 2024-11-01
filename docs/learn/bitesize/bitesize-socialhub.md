---
id: bitesize-usecases
title: Multiplayer Use Cases sample
description: Learn about the scenes in the Multiplayer Use Cases sample.
---

The [Distributed Authority Social Hub Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/DistributedAuthoritySocialHub) is a project aimed to demonstrate Distributed Authority's core features and benefits, helping users seamlessly integrate Distributed Authority into their own game projects.
Within Social Hub, you are free to explore Distributed Authority's key features & functionalities in a sandbox-like environment. Such features include:

* Automatic redistribution of ownership of NetworkObjects across connected clients
* Client-side NetworkObject spawning and deferred NetworkObject despawning
* Ownership transfer of NetworkObjects with variable ownership flags
* Host migration of a networked game session

## The Bootstrap scene

This is the entry point to the sample. Once loaded, you will be transitioned to the MainMenu scene.

## The MainMenu scene

Here, you're able to enter a player name, as well as a session name. When these fields are populated, you may then create or join an existing game session by pressing the *Start* button.

## The HubScene_TownMarket Scene

You'll be placed in a sandbox-like environment that supports 64-players. The control model is WASD controls, with the *E* button mapped as the key to interact with crates and pots. These NetworkObjects can be picked up and subsequently dropped or thrown, showcasing how to attach one NetworkObject to another with an animated rig through the use of FixedJoints. As a NetworkObject is picked up by a client, authority of that NetworkObject is transferred to that client.

A client has authority over its player NetworkObject, thus the movement, animations, and interactions performed by a client are client-authoritative.

## Additional resources

- Get help and ask questions on [Multiplayer Discussions](https://discussions.unity.com/lists/multiplayer).
- Join the community of Multiplayer creators on the [Multiplayer Networking Discord](https://discord.gg/unity-multiplayer-network).
- [Request a feature or report a bug](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/issues/new/choose).
