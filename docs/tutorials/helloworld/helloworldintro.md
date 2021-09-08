---
id: helloworldintro
title: Your First Networked Game - Hello World
description: Tutorial that explains creating a project, installing the Netcode for GameObjects (Netcode) package, and creating the basic components for your first networked game.
---

A **Hello World** program is a computer program that outputs or displays the message "Hello, World!". Normally, it is  the first program written by people learning to code. It is also used as a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it.

This **Hello World** tutorial walks you through creating a project, installing the Netcode for GameObjects (Netcode) package, and creating the basic components for your first networked game. You can then continue using this project to learn more about Netcode through the multiple Golden Path series.


## Prerequisites

A Netcode-supported version of Unity (2019.4+)

## Create a new project in Unity

1. Open the **Unity Hub**
1. Click **New** 
1. Select type **3D**
1. Rename the project `Hello World`
1. Select the location to save the project


<iframe src="https://www.youtube.com/embed/NsfwlWaZ0ng?playlist=NsfwlWaZ0ng&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Add the Netcode package to your project

Check the guides to [install](../../migration/installation.md), [migrate](../../migration/migratingtomlapi.md), or [update](../../migration/migratingfrommlapi.md) to the current Netcode package.

## The Basic Components of Netcode

The following sections guide you through the basic components of Netcode:
* The Network Manager and Transport
* Objecting spawning for your players
* Testing your project

The [second part](helloworldparttwo.md) of the **Hello World** tutorial will build on these components.

### Creating a Network Manager and selecting a Transport

1. Right-click in the **Hierarchy** tab of your Unity Project Window.
1. Select **Create Empty**.
1. Rename the `GameObject` **NetworkManager**.
   
  :::note
  We renamed the `GameObject` because:
    * It makes it  easier to refer to later.
    * There should only be one **NetworkManager** object that contains the  `NetworkManager` component. You may get unexpected results if you create more than one **NetworkManager**.
  :::

You have created a new `GameObject` called **NetworkManager**. Now we will add the `NetworkManager` component and select the transport type.

1. Select **NetworkManager**.
1. Click **Add Component** in the **Inspector** tab.
1. Select **MLAPI** from the list.
1. Select `NetworkManager` component.
1. Inside the `NetworkManager` component tab, locate the  `NetworkTransport` field. It may have a warning icon stating that a transport is required for Netcode to work. 
1. From the **Select Transport...** dropdown, select `UnetTransport`.
1. Save your scene.


<iframe src="https://www.youtube.com/embed/ZYEUWzsXEoY?playlist=ZYEUWzsXEoY&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Creating an object to spawn for each connected player

This section adds in a player object and spawns it for each connected player.

1. Right-click in the **Hierarchy** tab of your Unity Project Window.
2. Select **3D Object** > **Capsule**, and rename it **Player**.
3. Add a `NetworkObject` component by clicking **Add Component** in the **Inspector** tab, select **MLAPI**, then **NetworkObject**.
4. From the **Projects** tab, right-click the **Assets** folder, hover over **Create**, and select **Folder**. Name this folder **Prefabs**.
5. Drag your recently created **Player** object to your new **Prefabs** folder. This makes the **Player** object a [prefab](https://docs.unity3d.com/Manual/Prefabs.html).
6. Right-click and delete **Player** from the scene.

  :::tip
  We remove **Player**, because we will be using the network library to spawn the player. The library cannot track objects that start in the scene.
  :::
1. Select your `NetworkManager` object from the **Hierarchy** tab.
2. Go to the **Inspector** tab > **NetworkManager** component > **NetworkPrefabs**. 
3. Click `+` to create a slot.
4. Drag the **Player** prefab from **Assets** > **Prefabs** to the new empty slot, and select the **Default Player Prefab** checkbox. You may need to expand your project window to see the **Prefab** space.

  :::important
  When you select the **Default Player Prefab** checkbox, you are telling the library that when a client connects to the game, automatically spawn this prefab as the character for the connecting client. If you do not have any prefab set as `Default Player Prefab`, the game will crash on client connect.
  :::

  :::note
   You may see the following error on your **Console** tab: `There is no NetworkPrefab Marked as a PlayerPrefab`.
   
   Once you have completed the above steps, you can **Clear** the error.
  :::
5. Finish this section by right-clicking in the **Hierarchy** tab, hover over **3D Object**, select **Plane**.
6. Save your scene.

<iframe src="https://www.youtube.com/embed/B_FWb4J1Pxw?playlist=B_FWb4J1Pxw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing Hello World

Now we will test to see if evereything works as expected.

1. Click **Play**. A **DontDestroyOnLoad** scene will appear on the **Hierarchy** tab.
1. Select the **NetworkManager** object under **DontDestroyOnLoad**. Then click **Start Host** under **NetworkManager** component on the **Inspector** tab. A **Player(Clone)** object will appear under your sample scene on the **Hierarchy** tab.

<iframe src="https://www.youtube.com/embed/Ee3t0xNF0n8?playlist=Ee3t0xNF0n8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


:::note Congrats!
Congratulations, you have created a networked game. It is not a very flashy game but it is a networked game nonetheless. For the next steps in your journey see [Building on "Hello World"](helloworldparttwo.md)
:::

:::contribution Special Thanks
 This guide would not have been possible without the hard work and support of Fernando Cortez, Unity. 
:::