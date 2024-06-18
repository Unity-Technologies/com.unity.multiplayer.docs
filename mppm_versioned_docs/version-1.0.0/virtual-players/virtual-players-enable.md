---
id: virtual-players-enable
title: Activate a Virtual Player
description: Enable up to 3 additional Virtual Players to your Main Editor Player in Multiplayer Play Mode.
---
To use a Virtual Player to test multiplayer gameplay, activate at least one Virtual Player.

When you enable a Virtual Player, Unity creates a new local folder in  `C://Users/[YourName]/[ProjectName]Library/VP` that contains the data for each Virtual Player you activate. To remove this folder, delete it from your local files. 

:::info
You can only attach **Player Tags** to inactive players (including the **Main Editor Player**). To use **Player Tags**, [create and configure your tags](../player-tags/player-tags-create.md) before you enable virtual players.
:::

## Activate a Virtual Player

:::note
You must activate a **Virtual Player** before you enter **Play mode**.
:::

To activate a **Virtual Players** for **Play mode**, do the following.

1. In the Unity Editor, open the Multiplayer Play Mode window by navigating to **Window** > **Multiplayer Play Mode**.
2. Select the checkbox for the Virtual Player (**Player 2**, **Player 3**, or **Player 4**) to open when you enter Play Mode.
3. Wait for the player status to change from inactive to active for each Virtual Player you selected.
4. When active, the Virtual Player(s) appear in Play Mode in the Main Editor window. A separate window opens for each enabled player with the player name as the window title.

To understand how **Multiplayer Play Mode** works with **Play mode**, refer to [**Synchronize with Play mode**](../sync-play-mode.md).

## Deactivate a Virtual Player

Virtual players do not automatically deactivate when you close the Virtual Player window. 
To deactivate a **Virtual Player**.

1. In the Unity Editor, open the Multiplayer Play Mode window by navigating to **Window** > **Multiplayer Play Mode**.
2. Deselect the checkbox for the active Virtual Player (**Player 2**, **Player 3**, or **Player 4**).