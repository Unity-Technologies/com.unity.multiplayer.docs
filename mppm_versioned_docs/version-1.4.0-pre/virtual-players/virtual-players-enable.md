---
id: virtual-players-enable
title: Activate a Virtual Player
description: Enable up to three additional Virtual Players to your main Editor Player in Multiplayer Play Mode.
---

To use a Virtual Player to test multiplayer gameplay, activate at least one Virtual Player.

The first time you enable a Virtual Player, Unity creates a new folder within your project folder at `...[ProjectName]/Library/VP`. This folder stores the data for each Virtual Player you activate. When you deactivate a Virtual Player, Unity caches its corresponding folder to use again when you re-activate it.

:::info
You can only attach tags to inactive Players (including the main Editor Player). To use tags, [create and configure your tags](../player-tags/player-tags-create.md) before you enable virtual Players.
:::

## Activate a Virtual Player

:::note
You must activate a **Virtual Player** before you enter **Play mode**.
:::

To activate a **Virtual Players** for **Play mode**, do the following.

1. In the Unity Editor, open the Multiplayer Play Mode window by navigating to **Window** > **Multiplayer Play Mode**.
2. Select the checkbox for the Virtual Player (**Player 2**, **Player 3**, or **Player 4**) to open when you enter Play Mode.
3. Wait for the Player status to change from inactive to active for each Virtual Player you selected.
4. When active, the Virtual Player(s) appear in Play Mode in the main Editor Player window. A separate window opens for each enabled Player with the Player name as the window title.

To understand how **Multiplayer Play Mode** works with **Play mode**, refer to [**Synchronize with Play mode**](../sync-play-mode.md).

## Deactivate a Virtual Player

Virtual Players do not automatically deactivate when you close the Virtual Player window.
To deactivate a **Virtual Player**.

1. In the Unity Editor, open the Multiplayer Play Mode window by navigating to **Window** > **Multiplayer Play Mode**.
2. Deselect the checkbox for the active Virtual Player (**Player 2**, **Player 3**, or **Player 4**).

:::note
When you deactivate a Virtual Player, Unity doesn't delete its corresponding folder. To remove a Virtual Player folder, navigate to `C://Users/[YourName]/[ProjectName]Library/VP` and delete the folder for this Virtual Player.
:::
