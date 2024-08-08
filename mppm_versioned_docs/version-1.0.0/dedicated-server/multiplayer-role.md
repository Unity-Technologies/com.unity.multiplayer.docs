---
id: multiplayer-role
title: Assign virtual Players to a multiplayer role
description: Learn how to use the dedicated server package to assign virtual Players to a multiplayer role.
---

Install the [Dedicated Server package](https://docs.unity3d.com/Packages/com.unity.dedicated-server@1.0/manual/index.html) with Multiplayer Play Mode to switch Players between the server and client role without a script.

::: Important
To avoid errors, install the Dedicated Server package version that is the same as the Multiplayer Play mode version that exists in your project.
:::

## Set the main Editor Player multiplayer role

To set the role of a the main Editor Player, do the following:

1. Open the Multiplayer Play Mode inspector (**Multiplayer** > **Multiplayer Play Mode**).
2. In the **main Editor Player** section, expand the **Multiplayer Role** dropdown.
3. Select the [multiplayer role](https://docs.unity3d.com/Packages/com.unity.dedicated-server@1.0/manual/multiplayer-roles.html) you want the main Editor Player to use.

## Set the multiplayer role of a virtual Player

To set the role of a [virtual Player](../../virtual-players), do the following:

 1. Open the Multiplayer Play Mode inspector (**Multiplayer** > **Multiplayer Play Mode**).
 2. In the Virtual Players section, expand a virtual Player's **Multiplayer Role** dropdown.
 3. Select the [multiplayer role](https://docs.unity3d.com/Packages/com.unity.dedicated-server@1.0/manual/multiplayer-roles.html) you want this Player to use.
