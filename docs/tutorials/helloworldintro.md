---
id: helloworldintro
title: Your First Networked Game "Hello World"
sidebar_label: Your First Networked Game "Hello World"
---


## Create a new project in Unity

1. Open the Unity Hub.
1. Click New. 
1. Select type ‘3D’
1. Rename the project "Hello World".
1. Select the location to save the project.


:::important

This tutorial requires an MLAPI-supported version of Unity (2019.4+).

:::

 ![Open Unity create new project](/img/openunity.gif)
   

## Import MLAPI Package via URL

1. Open the package manager by navigating to Window > Package Manager on Unity’s main menu.
1. Click ![Add](/img/add.png) in the status bar.

    The following options are displayed:

     - Add package from disk...
     - Add package from tarball...
     - Add package from git URL...

1. Select '**Add** package from git URL...'  
1. Enter the Git URL https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi.git?path=/com.unity.multiplayer.mlapi#develop
1. Click **Add**
   
    ![installing MLAPI from Git URL](/img/installingmlapiurl.gif)

You have now installed MLAPI.

## Create the Basic Components

1. Right click in the Hierarchy tab of the Main Unity Window.
1. Select **Create Empty**.
1. Rename the GameObject **NetworkManager**.
   
    ![create gameobject](/img/creategameobject.gif) 

:::tip
We renamed the GameObject because:  
1. It makes it  easier to refer to later.
1. There is one and only one **NetworkManager**, this is the object that contains the  `NetworkManager` component.
:::

You have now created a new GameObject called **NetworkManager**.
 

1. Select **NetworkManager**
1. Click **Add Component** in the Inspector Tab
1. Select **MLAPI** from the list shown
1. Select `NetworkManager` Component from the list displayed.
1. Inside the `NetworkManger` component tab, locate the  `NetworkTransport` field. 
1. Click b
1. Select `UnetTransport`.

    ![selecttransaportani](/img/selectingtransport.gif)

1. Create 3D Object->Capsule (name it **Player**). 
2. Add a `NetworkObject` component.
1. Click the Assets folder.
1. Create a  new Folder and call it **Prefabs**.
3. Make **Player** a prefab by draging it to **Prefabs** folder you jsut created.

    ![createplayer prefab](/img/createprefab.gif)

4. Delete **Player** from scene.
:::tip
We remove **Player**, because we will be using the network library to spawn the player. The library cannot track objects that start in the scene.
:::

5. Add Player prefab to `NetworkPrefabs` list inside of `NetworkManger` .
6. Select **Default Player Prefab.**

    ![addingdefaultprefab](/img/defaultplayerprefab.gif)
:::tip
When you select the **Default Player Prefab** , you are telling the library that when a client connect to the game, automatically spawn this prefab as the character for the connecting client. If you do not have the default selected for any prefab the game will crash on client connect
:::

7. Create a GameObject->Plane", centered at (0,0,0).
8. Click **Play**.
9. Click **Start Host** under **NetworkingManager**. 

    ![firstnetworkgame](/img/firstnetworkgame.gif)

:::note Congrats!!!!
Congratulations you have created a networked game. It is not a very flashy game but it is a networked game nonetheless. For the next steps in your journey see [Building on "Hello World"](helloworldparttwo.md)
:::
