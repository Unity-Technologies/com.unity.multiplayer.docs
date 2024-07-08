---
id: player-tags
title: Create tags
description: Use these steps to create tags to configure the Player actions in Multiplayer Play Mode.
---

Tags are similar to launch arguments for Players (both the main Editor Player and Virtual Players) that you can use to configure Players to do things such as:

- Run as a client, server, or host automatically
- Automatically run as a member of a specific team (for example, “Red Team” or “Blue Team”)
- Move faster or slower to simulate their network connection

Using tags involves three parts,
1. [Create the tag(s)](#create-a-player-tag)
2. [Configure the tag(s)](#next-steps)
3. [Attach the tag(s) to your Players](../virtual-players)

## Create a tag

To create a tag,

1. In the **Unity Editor**, open the **MPPM** window by navigating to **Window** > **Multiplayer Play Mode**.
2. Select the plus sign ![plus sign](/img/add.png) under **Player Tags** to create your new tag.
3. Name the tag.
4. Select **Save**. Your new tag is automatically added to the `VirtualProjectsConfig.json` file in the `ProjectsSettings` folder.
5. Your new tag should also appear under the **Player Tags** section of the **MPPM** window and in the dropdown menu for the **Tag** option of each **Player**.

### Next Steps

Without configuration, tags don't do anything. You must target tags in your game scripts with `CurrentPlayer.Tag`. Refer to the following tag examples as guides for your own scripts:

- [For a **Player** to run as a server, client, or host](target-instance)
- [To automatically assign a **Player** to a team](target-team)
- [To simulate network conditions](target-network)

