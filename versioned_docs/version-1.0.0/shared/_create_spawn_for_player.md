This section adds in a player object and spawns it for each connected player.

1. Right-click in the **Hierarchy** tab of your Unity Project Window.
2. Select **3D Object** > **Capsule**, and rename it **Player**.
3. While **Player** is selected, add a `NetworkObject` component by clicking **Add Component** in the **Inspector** tab, select **Netcode**, then **NetworkObject**.
4. From the **Projects** tab, right-click the **Assets** folder, hover over **Create**, and select **Folder**. Name this folder **Prefabs**.
5. Drag your recently created **Player** object to your new **Prefabs** folder. This makes the **Player** object a [prefab](https://docs.unity3d.com/Manual/Prefabs.html).
6. Right-click and delete **Player** from the scene.

  :::tip
  We remove **Player**, because we will be using the built-in functionality of the NetworkManager to spawn the player. Doing so will make the NetworkManager spawn a player object for each connecting client and automatically give that client ownership over their player object.

  If you do not remove **Player**, a player object will exist at scene load that doesn't react with the NetworkManager.
  :::
1. Select your `NetworkManager` object from the **Hierarchy** tab.
2. Go to the **Inspector** tab > **NetworkManager** component > **NetworkPrefabs**. 
3. Click `+` to create a slot.
4. Drag the **Player** prefab from **Assets** > **Prefabs** to the new empty slot
5. 1. Drag the prefab also into the `Player Prefab` slot. 

  :::important
  When you drop the prefab into the `Player Prefab` slot, you are telling the library that when a client connects to the game, automatically spawn this prefab as the character for the connecting client. If you do not have any prefab set as the `Player Prefab` no player object will be spawned.
  :::

5. Finish this section by right-clicking in the **Hierarchy** tab, hover over **3D Object**, select **Plane**.
6. Save your scene.

<iframe src="https://www.youtube.com/embed/B_FWb4J1Pxw?playlist=B_FWb4J1Pxw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

