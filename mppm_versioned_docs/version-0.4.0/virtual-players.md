---
id: virtual-players
title: Enable Virtual Players
description: You can enable up to three additional Virtual Players to your main Editor Player Player in Multiplayer Play Mode.
---

In [**Play mode**](https://docs.unity3d.com/Manual/GameView.html), you only have the default main Editor Player to test your gameplay. By adding the **Multiplayer Play Mode (MPPM)** package, you can enable up to three additional Virtual Players to the **Play mode** for a total of four Players.

:::important
You can only attach tags to inactive Players (including the main Editor Player). If you plan to use tags, [create and configure your tags](../player-tags) first.
:::

## Enable a Virtual Player

:::note
You must enable your Virtual Players before entering **Play mode**.
:::

To enable Virtual Players for **Play mode**,

1. In the **Unity Editor**, open the **MPPM** window by navigating to **Window** > **Multiplayer Play Mode**.
2. If you want to use tags for any of your Players, select the tag from the **Tag** dropdown associated with each Player. tags can only be added to inactive Players before entering **Play mode**.
3. Select the checkbox for each Virtual Player (Player 2, Player 3, or Player 4) you want to add to **Play mode**.
4. Wait for the Player status to change from inactive to active for each Virtual Player you selected.
5. Once active, the **Virtual Player(s)** appear in **Play mode** in the main Editor Player window. A separate window opens for each enabled Player with the Player name as the window title.

## Next Steps

To understand how **Multiplayer Play Mode** works with **Play mode**, refer to [**Synchronize with Play mode**](../synchronize).