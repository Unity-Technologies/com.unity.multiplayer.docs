---
id: helloworld
title: Your Netcode "Hello World" Project
description: Tutorial that explains creating a project, installing the  Netcode for GameObjects package, and creating the basic components for your first networked game.
---

A "Hello World" program is a computer program that outputs or displays the message "Hello, World!". Normally it is  the first program written by people learning to code. It  is also  used as a sanity test to make sure that a computer language is correctly installed and that the operator understands how to use it.

This "Hello World" tutorial walks you through creating a project, installing Netcode for GameObjects (Netcode), and creating the basic components for your first networked game. It is also the base for the [Golden Path series](goldenpath_series/gp_intro.md).

:::note
The videos on this page were removed because they were out-of-date and caused more confusion than help. All videos in the Hello World and Golden Path series will be recreated and added back at a later time.
:::

## Create a new project in Unity

1. Open the **Unity Hub**.
1. Click **New**. 
1. Select type ‘3D’
1. Name the project *Hello World*.
1. Select the location you want to save the project.

## Install Netcode

See the [install Netcode guide](../installation/installation.md) to install the Netcode package.

## Create the Basic Components

In this section we will create the basic building blocks of a multiplayer game.

### Creating Network Manager and selecting the Transport

In this section we will add a Network Manager and add a Transport to our project.

1. Right click in the **Hierarchy** tab of the main Unity Window.
1. Select **Create Empty**.
1. Rename the `GameObject` **NetworkManager**.
   
  :::tip
  We renamed the `GameObject` because:
    * It makes it  easier to refer to later.
    * There should only be one **NetworkManager**, this is the object that contains the  `NetworkManager` component. You may get unexpected results if you create more than one **NetworkManager**.
  :::

  You have now created a new `GameObject` called **NetworkManager**.

1. Select **NetworkManager**.
1. Click **Add Component** in the Inspector Tab.
1. Select **Netcode** from the list shown.
1. Select `NetworkManager` Component from the list displayed.
1. Inside the `NetworkManager` component tab, locate the  `NetworkTransport` field. 
1. Click "Select Transport".
1. Select `UnityTransport`.
1. Save your scene.

## Creating an object to spawn for each connected player

This section adds in a player object and spawns it for each connected player.

1. Create a **3D Object->Capsule**
1. Rename it **Player**. 
1. Add a `NetworkObject` component.
1. Click the **Assets** folder.
1. Create a new Folder and call it **Prefabs**.
1. Make **Player** a prefab by dragging it to **Prefabs** folder you just created.
1. Delete **Player** from scene.

  :::tip
  We remove **Player**, because we will be using the network library to spawn the player. The library cannot track objects that start in the scene.
  :::

1. Select `NetworkManager`.
1. Inside the `NetworkManager` component tab, locate the  `NetworkPrefabs` field. 
1. Click `+` to create a slot.
1. Drag this player prefab from above into the new empty slot
1. Drag the prefab also into the `Player Prefab` slot. 

  :::important
  When you drop the prefab into the `Player Prefab` slot, you are telling the library that when a client connects to the game, automatically spawn this prefab as the character for the connecting client. If you do not have any prefab set as the `Player Prefab` no player object will be spawned.
  :::

1. Create a **3D Object->Plane**, centered at (0,0,0).
1. Save your scene

### Adding your scene to the build

  :::important
  When 'Enable Scene Management' is enabled for the NetworkManager (allowing the server to control which scenes should be loaded for the clients), we must ensure that the current scene has been added to the build, otherwise, we will be unable to enter play mode. This option is enabled by default.
  :::

1. Click **File -> Build Settings**, in the upper-left corner of the Unity window
1. Click **Add Open Scenes**
1. Close the `Build Settings` window.

### Testing Hello World

Now we will test to see if everything works as expected.

1. Click **Play**.
1. Click **Start Host** under **NetworkManager**. 

## Next Steps

See the following content to continue your journey using Netcode:

* Build on the Hello World project to continue learning about different features of Netcode with the [Golden Path series](../tutorials/goldenpath_series/gp_intro.md).
* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../learn/bitesize/bitesize-clientdriven.md)
