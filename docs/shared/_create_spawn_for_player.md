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

1. Select **NetworkManager**.
1. Inside the **NetworkManager** Component tab, locate the  `NetworkPrefabs` field. 
1. Click `+` to create a slot
1. Drag this player prefab from above into the new empty slot

  :::important
  When you select the **Default Player Prefab** , you are telling the library that when a client connects to the game, automatically spawn this prefab as the character for the connecting client. If you do not have the default selected for any prefab the game will crash on client connect.
  :::

  :::note
   You may see the following error reported `There is no NetworkPrefab Marked as a PlayerPrefab`. Once you have completed the above steps you can clear the error.
  :::

1. Create a **3D Object->Plane**, centered at (0,0,0).
1. Save your scene.

<iframe src="https://www.youtube.com/embed/B_FWb4J1Pxw?playlist=B_FWb4J1Pxw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

