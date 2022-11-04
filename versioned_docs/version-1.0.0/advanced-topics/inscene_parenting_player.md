---
id: inscene-parenting-players
title:   Real world In-scene NetworkObject parenting of players solution
description: In-scene NetworkObject parenting of players Solution
---


We received the following issue in Github. 

## Issue:

When a player prefab contains a script that dynamically adds a parent to its transform, the client cannot join a game hosted by another client. [You can see orignal issue here](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/issues/1211)

Steps to reproduce the behavior:

1. Set up basic networking game with at least one `GameObject` in a scene that is not the player.
1. Add a script to the player prefab that adds parenting to its transform via `gameObject.transform.SetParent()` in the `Start()` method.
1. Launch one instance of the game as Host.
1. Launch another instance and try to join as Client.

## Solution:


If you want to do this when a player has first connected and all `NetworkObjects` (in-scene placed and already dynamically spawned by the server-host) have been fully synchronized with the client then we would recommend using the `NetworkManager.SceneManager.OnSceneEvent` to trap for the `C2S_SyncComplete` event.

Here is an example script that we recommend using to achieve this:

```csharp
using Unity.Netcode;

public class ParentPlayerToInSceneNetworkObject : NetworkBehaviour
{   
    public override void OnNetworkSpawn()
    {
        if (IsServer)
        {
            // Server subscribes to the NetworkSceneManager.OnSceneEvent event
            NetworkManager.SceneManager.OnSceneEvent += SceneManager_OnSceneEvent;

            // Server player is parented under this NetworkObject
            SetPlayerParent(NetworkManager.LocalClientId);
        }
    }

    private void SetPlayerParent(ulong clientId)
    {
        if (IsSpawned && IsServer)
        {
            // As long as the client (player) is in the connected clients list
            if (NetworkManager.ConnectedClients.ContainsKey(clientId))
            {
                // Set the player as a child of this in-scene placed NetworkObject 
                NetworkManager.ConnectedClients[clientId].PlayerObject.transform.parent = transform;
            }
        }
    }

    private void SceneManager_OnSceneEvent(SceneEvent sceneEvent)
    {
        // OnSceneEvent is very useful for many things
        switch (sceneEvent.SceneEventType)
        {
            // The C2S_SyncComplete event tells the server that a client-player has:
            // 1.) Connected and Spawned
            // 2.) Loaded all scenes that were loaded on the server at the time of connecting
            // 3.) Synchronized (instantiated and spawned) all NetworkObjects in the network session
            case SceneEventData.SceneEventTypes.C2S_SyncComplete:
                {
                    // As long as we are not the server-player
                    if (sceneEvent.ClientId != NetworkManager.LocalClientId)
                    {
                        // Set the newly joined and synchronized client-player as a child of this in-scene placed NetworkObject
                        SetPlayerParent(sceneEvent.ClientId);
                    }
                    break;
                }
        }
    }
}
```

You should place this script on your in-scene placed `NetworkObject` (i.e. the first `GameObject`) and do the parenting from it in order to avoid any timing issues of when it is spawned or the like. It only runs the script on the server-host side since parenting is server authoritative. 


:::note
Remove any parenting code you might have had from your player prefab before using the above script.
:::