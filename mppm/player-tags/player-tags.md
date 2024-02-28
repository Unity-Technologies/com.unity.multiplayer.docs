---
id: player-tags
title: Create Player Tags
description: Use these steps to create Player Tags to configure the player actions in Multiplayer Play Mode.
---

Player Tags are similar to launch arguments for Players (both the Main Editor Player and Virtual Players) that you can use to configure Players to do things such as:

- Run as a client, server, or host automatically
- Automatically run as a member of a specific team (for example, “Red Team” or “Blue Team”)
- Move faster or slower to simulate their network connection

Using Player Tags involves 3 parts,
1. [Create the tag(s)](#create-a-player-tag)
2. [Configure the tag(s)](#next-steps)
3. [Attach the tag(s) to your players](../virtual-players)

## Create a Player Tag

To create a Player Tag,

1. In the Unity Editor, open the Multiplayer Play Mode window by navigating to **Window** > **Multiplayer Play Mode**.
2. Select the plus sign ![plus sign](/img/add.png) under **Player Tags** to create your new tag.
3. Name the Player Tag.
4. Select **Save**. Your new tag is automatically added to the `VirtualProjectsConfig.json` file in the `ProjectsSettings` folder.
5. Your new tag should also appear under the Player Tags section of the Multiplayer Play Mode window and in the dropdown menu for the Tag option of each Player.

### Next steps

Without configuration, Player Tags don't do anything. You must target Player Tags in your game scripts with `CurrentPlayer.ReadOnlyTags()`. See the following Player Tag examples as guides for your own scripts:

- [For a Player to run as a server, client, or host](target-instance)
- [To automatically assign a Player to a team](target-team)
- [To simulate network conditions](target-network)
