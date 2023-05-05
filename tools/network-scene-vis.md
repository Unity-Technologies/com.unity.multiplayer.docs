---
id: netscenevis
title: Network Scene Visualization
---

The Network Scene Visualization (NetSceneVis) is a powerful, user-friendly tool included in the Multiplayer Tools package to help you visualize and debug network communication on a per-object basis in the scene view of your project with visualizations such as mesh shading and text overlay.

When a game session is started, network messages contain information about the game state, such as the position of game objects and player actions. The NetSceneVis tool intercepts these network messages to visually display them in the Unity Editor. Each player is represented by a colored sphere, and lines show the network messages being sent between the players. The state of each GameObject in the scene, including their position, rotation, and any other relevant data is also shown.

The visualizations are updated in real-time as the network messages are sent and received, showing the game state synchronization across the network.

NetSceneVis can help diagnose issues related to network latency, packet loss, and other network-related issues that may affect the player experience in your multiplayer games. This tool can help optimize your network code to ensure that your game runs smoothly for all players.

## Requirements
- Unity 2023.2
:::note
Unity 2023.2.0a11 is specifically required for NetSceneVis mesh shading
:::
- Up-to-date Multiplayer Tools package, see [Install the Multiplayer Tools Package](./install-tools.md).

## Using Network Scene Visualization

After [installing the Multiplayer Tools package](./install-tools.md), the Network Visualization toolbar is available in the scene view of the Unity Editor. This toolbar includes the options to visualize networking information per-object of your game.

