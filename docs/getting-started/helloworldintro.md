---
id: helloworldintro
title: Your First Networked Game
sidebar_label: Your First Networked Game
---

:::important
This tutorial requires an MLAPI-supported version of Unity (2019.4+)
:::


## Import Package via URL

1. Open the package manager by navigating to Window > Package Manager on Unity’s main menu.
1. Click ![Add](/img/add.png) in the status bar.

    the following options are displayed

     - Add package from disk...
     - Add package from tarball...
     - Add package from git URL...

1. Select '**Add** package from git URL...'  
1. Enter the Git URL https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi.git?path=/com.unity.multiplayer.mlapi#develop
1. Click **Add**
   
    ![installing MLAPI from Git URL](/img/instlling-mlapi-url.gif)

You have now installed MLAPI

## Create the Basic Components.

1. Right Click in the Hierarchy tab of the Main Unity Window
1. Select Create Empty
   
    ![create gameobject](/img/creategameobject.gif) 

You have now created a new empty GameObject.

:::tip 
You could rename this object to give it a more relevant name but for the purpose of this guide its not required.
::: 

1. Select the new Gameobject
1. Click **Add Component** in the Inspector Tab
1. Select MLAPI from the list shown
1. Select NetworkManager Component from the list displayed.
1. Inside the NetworkManger component tab,
1. Locate the  NetworkTransport field. 
1. click "Select Transport" 
1. Select UnetTransport.

    ![selecttransaportani](/img/selecting-transport.gif)

1. Create 3D Object->Capsule (name it Player). 
2. Add a NetworkObject component.
3. Make this Player scene object a prefab.

    ![createplayer prefab](/img/createprefab.gif)
4. Delete Player in scene.
5. Add Player prefab to NetworkedPrefabs list inside of NetworkingManger 
6. tick "Default Player Prefab".

    ![addingdefaultprefab](/img/default-player-prefab.gif)
7. Inside scene, create a Plane GameObject, centered at (0,0,0).
8. Click Play
9. Click "Start Host" under NetworkingManager 

    ![firstnetworkgame](/img/firstnetworkgame.gif)

:::funfact
Congratulations you have created a networked game.  It is not a very flashy,game  but it's a networked game nonetheless.
:::
