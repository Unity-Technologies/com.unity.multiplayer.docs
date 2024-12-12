---
id: player-tags-configure
title: Configure tags
description: Set up tags to use them to configure the player actions.
---

Tags don't do anything until you configure them. To configure a tag, do the following:

1. Use `CurrentPlayer.ReadOnlyTags()` to target the tag in a script.
2. Attach the script to a [NetworkObject](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/), for example, the **Player**.

Use the following tag examples as guides for your own scripts:

- [For a **Player** to run as a server, client, or host](../target-instance)
- [To automatically assign a **Player** to a team](../target-team)
- [To simulate network conditions](../target-network)
