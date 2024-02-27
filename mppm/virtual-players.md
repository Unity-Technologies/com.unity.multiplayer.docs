---
id: virtual-players
title: Enable Virtual Players
description: You can enable up to 3 additional Virtual Players to your Main Editor Player in Multiplayer Play Mode.
---

In [Play Mode](https://docs.unity3d.com/Manual/GameView.html), you only have the default Main Editor Player to test your gameplay. By adding the Multiplayer Play Mode package, you can enable up to 3 additional Virtual Players to the Play mode for a total of 4 players.

:::important
You can only attach Player Tags to inactive players (including the Main Editor Player). If you plan to use Player Tags, [create and configure your tags](../player-tags) first.
:::

## Enable a Virtual Player

:::note
You must enable your Virtual Players before entering Play Mode.
:::

To enable Virtual Players for Play Mode,

1. In the Unity Editor, open the Multiplayer Play Mode window by navigating to **Window** > **Multiplayer Play Mode**.
2. If you want to use Player Tags for any of your players, select the Player Tag from the **Tag** dropdown associated with each player. Player Tags can only be added to inactive players before entering Play Mode.
3. Select the checkbox for each Virtual Player (Player 2, Player 3, or Player 4) you want to add to Play Mode.
4. Wait for the player status to change from inactive to active for each Virtual Player you selected.
5. Once active, the Virtual Player(s) appear in Play Mode in the Main Editor window. A separate window opens for each enabled player with the player name as the window title.

## Next Steps

To understand how Multiplayer Play Mode works with Play Mode, see [Synchronize with Play Mode](../synchronize).
