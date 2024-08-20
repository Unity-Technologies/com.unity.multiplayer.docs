# Summary

The [Multiplayer Use Cases Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/MultiplayerUseCases) provides a series of scenes that explain a specific API or system commonly used in Netcode for GameObjects (Netcode).

Each scene comes with an in-editor tutorial that will help you explore the main scripts and object of each scene, so you know where to look at to find what you're looking for.

Some of the concepts covered are:

- **Client-server communication** through RPCs
- **State synchronization** through NetworkVariables
- **Server-side manipulation** of data sent by Clients
- **Proximity interactions** visible only to the local player

And other typical mechanics and features of multiplayer games.

### In-Editor Tutorials

The In-Editor tutorials are powered by the official [Tutorial Framework package](https://docs.unity3d.com/Packages/com.unity.learn.iet-framework@4.0/manual/index.html) and can be accessed at any times from the "Tutorials" menu.

It is highly recommended to follow the In-Editor tutorials to get the most value when exploring this Sample.


## Scene: "NetvarVsRpc"

Explains the differences between NetworkVariables and RPCs for state synchronization.

## Scene: "NetworkVariables"

Explains how to use NetworkVariables for state synchronization in a way that allows to send the most up-to-date information even to late joining (or reconnecting) clients.

## Scene: "ProximityChecks"

Showcases how to detect the local player to enable or disable in-game actions based on their distance from an object.

## Scene: "RPCs"

Showcases how to use RPCs to send information from clients to the server, how to perform server-side manipulation of the data sent, and how to use Connection Approval to determine the spawn position of the player.

## Additional resources

- Get help and ask questions on the [Multiplayer Discussions](https://discussions.unity.com/lists/multiplayer)
- Join our community of Multiplayer Creators on the [Multiplayer Networking Discord!](https://discord.gg/unity-multiplayer-network)
- [Request a feature or report a bug](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/issues/new/choose), and help us make the best samples!