---
id: helloworldintro
title: Your First Networked Game "Hello World"
description: Tutorial that explains creating a project, installing the  Netcode for GameObjects package, and creating the basic components for your first networked game.
---

A "Hello World" program is a computer program that outputs or displays the message "Hello, World!". Normally it is  the first program written by people learning to code. It  is also  used as a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it.

This "Hello World" tutorial walks you through creating a project, installing the Netcode for GameObjects (Netcode) package, and creating the basic components for your first networked game.

  :::note 
  The videos on this page were recorded using a prerelease version of Netcode for GameObjects, so a few details of those videos are somewhat inaccurate nowadays. However, the written instructions on this page are accurate, as of Netcode for GameObjects v1.0.0
  :::


## Requirements

This tutorial requires an Netcode-supported version of Unity (2020.3+).


## Create a new project in Unity

1. Open the Unity Hub.
1. Click New. 
1. Select type ‘3D’
1. Rename the project "Hello World".
1. Select the location to save the project.


<iframe src="https://www.youtube.com/embed/NsfwlWaZ0ng?playlist=NsfwlWaZ0ng&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Import Netcode Package via URL

See the [Install Netcode](../../migration/installation.md) guide to install the Netcode package.

## Create the Basic Components

In this section we will create the basic building blocks of a multiplayer game.

### Creating Network Manager and selecting the Transport

In this section we will add a Network Manager and add a Transport to our project.

1. Right click in the Hierarchy tab of the Main Unity Window.
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


<iframe src="https://www.youtube.com/embed/ZYEUWzsXEoY?playlist=ZYEUWzsXEoY&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


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

<iframe src="https://www.youtube.com/embed/B_FWb4J1Pxw?playlist=B_FWb4J1Pxw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

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


<iframe src="https://www.youtube.com/embed/Ee3t0xNF0n8?playlist=Ee3t0xNF0n8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


:::note Congrats!
Congratulations you have created a networked game. It is not a very flashy game but it is a networked game nonetheless. For the next steps in your journey see [Building on "Hello World"](helloworldparttwo.md)
:::

:::contribution Special Thanks

 This guide would not have been possible without the hard work and support of Fernando Cortez, Unity. 
:::
