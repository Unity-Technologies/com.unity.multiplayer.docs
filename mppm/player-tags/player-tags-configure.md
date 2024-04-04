---
id: player-tags-configure
title: Configure Player Tags
description: Set up Player Tags to use them to configure the player actions.
---

Player Tags don't do anything until you configure them. To configure a player tag, do the following:

1. Use `CurrentPlayer.ReadOnlyTags()` to target the Player Tag in a script.
2. Attach the script to a [NetworkObject](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/), for example, the **Player**.

Use the following **Player Tag** examples as guides for your own scripts:

- [For a **Player** to run as a server, client, or host](../target-instance)
- [To automatically assign a **Player** to a team](../target-team)
- [To simulate network conditions](../target-network)
