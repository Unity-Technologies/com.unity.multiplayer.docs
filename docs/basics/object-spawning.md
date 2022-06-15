---
id: object-spawning
title: Object Spawning
sidebar_label: Object Spawning
---
In Unity, you typically create a new game object using the `Instantiate` function. Creating a game object with `Instantiate` will only create that object on that player's local machine. `Spawning` in  Netcode for GameObjects (Netcode) means to create an object which is shared between all clients and the server. 

## Network Prefabs
A network prefab is any unity prefab asset that has one NetworkObject component assigned to a `GameObject` within the prefab. More commonly, the `NetworkObject` component is assigned to the root `GameObject` of the prefab asset.  Placing the `NetworkObjet` component on the root `GameObject` is typically the more common configuration because this allows any child `GameObject` to have a `NetworkBehaviour` assigned to it.  The reason for this is that a `NetworkObject` component assigned to a `GameObject` will be associated with any `NetworkBehaviour` components on:
- the same `GameObject` that the `NetworkObject` component is assigned to
- any child or children of the `GameObject` that the `NetworkObject` is assigned to.  

:::note
The caveat to how `NetworkObject`s are associated with NetworkBehaviours is when one of the children `GameObject`s also has a `NetworkObjet` component assigned to it (a.k.a. "Nested NetworkObjects"). Because nested 'NetworkObject' components are not permited in network prefabs, Netcode for GameObjects will notify you in the editor if you are trying to add more than one `NetowrkObject` to a prefab and will not allow it. 
:::

**Network prefabs can be used as:**
- the player object when assigned to the [`NetworkManager`'s Player Prefab property](https://docs-multiplayer.unity3d.com/netcode/current/components/networkmanager) 
- a dynamically spawned `NetworkObject`
- an in-scene placed `NetworkObject` (i.e. drag and drop a network prefab into a scene) 


## Dynamically Spawned
Netcode for GameObjects uses the term "dynamically spawned" to convey that the `NetworkObject` is being spawned via user specific code.  Whereas a player or in-scene placed `NetworkObject` (with scene management enabled) is spawned by Netcode for GameObjects.  There are several ways to spawn a network prefab via code:

### Dynamic Spawning (non-pooled):
This type of dynamically spawned `NetworkObject` typically is a simple wrapper class that holds a reference to the prefab asset via the `NonPooledDynamicSpawner.PrefabToSpawn` property in the below example:  
```csharp
    public class NonPooledDynamicSpawner : NetworkBehaviour
    {
        public GameObject PrefabToSpawn;
        public bool DestroyWithSpawner;        
        private GameObject m_PrefabInstance;
        private NetworkObject m_SpawnedNetworkObject;

        public override void OnNetworkSpawn()
        {
            // Only the server spawns, clients will disable this component on their side
            enabled = IsServer;            
            if (!enabled || PrefabToSpawn == null)
            {
                return;
            }
            // Instantiate the GameObject Instance
            m_PrefabInstance = Instantiate(PrefabToSpawn);
            
            // Optional, this example applies the spawner's position and rotation to the new instance
            m_PrefabInstance.transform.position = transform.position;
            m_PrefabInstance.transform.rotation = transform.rotation;
            
            // Get the instance's NetworkObject and Spawn
            m_SpawnedNetworkObject = m_PrefabInstance.GetComponent<NetworkObject>();
            m_SpawnedNetworkObject.Spawn();
        }

        public override void OnNetworkDespawn()
        {
            if (DestroyWithSpawner && m_SpawnedNetworkObject != null && m_SpawnedNetworkObject.IsSpawned)
            {
                m_SpawnedNetworkObject.Despawn();
            }
            base.OnNetworkDespawn();
        }
    }
```
Consumable and/or items that can be picked up by a player or NPC(i.e. a weapon, health, potion, etc.) would be some examples of when you might want to use non-pooled dynamically spawned `NetworkObjects`.

:::note
While the NonPooledDynamicSpawner example is one of the simplest ways to spawn a NetworkObject, there is a memory allocation cost associated with instantiating and destroying the GameObject and all attached components.  This design pattern can sometimes be all you really need for the netcode game asset you are working with, and other times you might want to respawn/re-use the object instance.  When performance is a concern and you want to spawn more than just one `NetworkObject` during the lifetime of the spawner (i.e. NonPooledDynamicSpawner basic example), the less proccessor intensive spawning technique is pooled NetworkObjects. (_see Pooled Dynamic Spawning_)
:::

_Really, the when we use the term "non-pooled" more often than not we are referring to the concept that a `GameObject` will be instantiated on both the server and the clients each time an instance is spawned.
_

### Pooled Dynamic Spawning:
Pooled dynamic spawning is when netcode objects (`GameObjects` with a `NetworkObject` component as a minimum requirement) are not destroyed when they are despawned, but rather specific components are just disabled when they are despawned as opposed to the entire netcode object being destroyed.  A pooled dynamically spawned netcode object is typically instantiated during an already memory allocation heavy period of time (like when a scene is loaded or even at the very start of your application prior to even establishing a network connection.  Pooled dynamically spawned netcode objects typically are thought of as more than one netcode object, but you might also run into scenarios where you need just one dynamically spawned netcode object.  <br>
Netcode for GameObjects provides you with a way to be in controll over the instatiate and destoy process for one or many netcode objects by implementing the `INetworkPrefabInstanceHandler` interface and registering it with the `NetworkPrefabHandler`(for multiple netcode objects see [Object Pooling](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/object-pooling).

The easiest way to not destroy a network prefab instance is to have something, other than the instance itself, keeping a reference to the instance.


If you are planning on using the pooled dynamic spawning pattern for a single, there are some things you should take into consideration.  Primarily, the concept behind pooled netcode objects is to be able to easily disable the components that would normally be active when the netcode object is considered spawned.  Below is an example of what a non-pooled friendly prefab might look like:<br>
![image](https://user-images.githubusercontent.com/73188597/173889212-7f6e6b00-b74c-46c7-9516-b167959267f3.png)<br>
The issues you might run into with the above prefab hierarchy is that everything is on a single `GameObject`, and as such if you wanted to disable the `MeshRenderer` and the `NetworkObjectLabel` ([one of our classes in the Netcode for GameObjects test project](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/f0631414e5a5358a5ac7811d43273b1a82a60ca9/testproject/Assets/Scripts/NetworkObjectLabel.cs#L4)) you would need to get those component types prior to disabling them (i.e. during `OnNetworkSpawn` or get them when OnNetworkDespawn is invoked.  

A more "pooled dynamic spawning" friendly prefab would look like this:
![image](https://user-images.githubusercontent.com/73188597/173891138-dbdd314c-5275-49f6-9d59-83ffb11aae93.png)
The `NetworkObject` sits at the root `GameObject` of the network prefab.  The child `GameObject`, SpawnedComponents, then contains everything that you might want to have disabled when the network prefab instance is not spawned:
![image](https://user-images.githubusercontent.com/73188597/173891756-12a3c839-2b40-4d66-a43e-e138b85df926.png)
This is more "pooled dynamic spawn" friendly because all you need to do is make the SpawnedComponents `GameObject` inactive to disable everything that should not be visible/updating while the network prefab instance is not spawned or enable it when it is spawned.

:::tip
Using this type of a hierarchical separation is useful in many ways (especially when you have a much more complex prefab).  For more complex prefabs, you could further expand this pattern into specific categories (i.e. visuals, physics, sound, etc) which will provide you with a more macrocosmic way to control enabling or disabling many different components without having to have references to all of them.
:::




### Registering a Network Prefab

To spawn an object, it must first be registered with the `NetworkManager` as a network prefab:

1. Create a prefab out of the object you want to spawn.
1. Make sure the object has a `NetworkObject` component on it. 

  All `NetworkObject` components assigned to a GameObject will have a `GlobalObjectIdHash` value assigned to it.  
  
1. Add your prefab to the `NetworkPrefabs` list of the `NetworkManager`.

### Spawning a Networked Prefab

Netcode uses a server authorative networking model so spawning objects can only be done on the server/host.
To spawn an object first instantiate the object from your prefab and then invoke the spawn method on the `NetworkObject` component that should be attached to the prefab.
This should only be done on the server as the object will automatically replicate on the other clients.
By default a newly spawned object is owned by the server. See [Ownership](networkobject.md#ownership) for more information.

The following is an example to spawn an object (with server ownership):

```csharp
GameObject go = Instantiate(myPrefab, Vector3.zero, Quaternion.identity);
go.GetComponent<NetworkObject>().Spawn();
```

The `.Spawn()` method takes 2 optional parameters, both with default values:

```csharp
public void Spawn(Stream spawnPayload = null, bool destroyWithScene = false);
```

| Parameter | Description |
| -- | -- |
| `spawnPayload` | A `System.IO.Stream` and can be retrieved in `NetworkStart()` to sync values once when spawning this object. The payload data is only available for already connected clients. If a client connects later they will not get the payload data. |
| `destroyWithScene` | If set to true, the object will be destroyed on scene switching. This can only be set inside the spawn call. |

## Destroying / Despawning

When a spawned object gets destroyed on the server/host, Netcode will automatically destroy it on all clients as well.

When a client disconnects, all objects owned by that client will be destroyed. If you do not want that to happen for an object set the `DontDestroyWithOwner` field on `NetworkObject` to true.

### Despawning

To despawn a networked object on all clients but keep it on the server call `NetworkObject.Despawn` on the server. An despawned object can also later be spawned again with another spawn call if needed.

A client should never call destroy on a networked object itself (this is not supported).  To destroy an object with client authority, have the client send an RPC to the server, which allows the server to destroy the object.

You cannot despawn objects on just specific clients. If you want to hide an object on some clients but display it on others use [Object Visibility](object-visibility.md).

To get more control about the object lifecycle, Netcode has built in object pooling. See [Object Pooling](../advanced-topics/object-pooling.md) to learn more.

## Scene Objects

Any objects in the scene with  active `NetworkObject` components will get automatically replicated by Netcode. There is no need to manually spawn them.

There are **two** modes that define how scene objects are synchronized.

### SoftSync

`SoftSync` is the default and recommended mode for synchronizing scene objects.

When using `SoftSync` Netcode will just synchronize existing scene objects with each other.
This allows scene objects to be non prefabs and they will not be replaced, thus keeping their serialized data.


### PrefabSync

`PrefabSync` can be manually enabled in the `NetworkManager` by ticking the *Use Prefab Sync* checkbox. Prefab sync will also be used if `SceneManagement` is disabled.

If it's enabled, every scene object with a `NetworkObject` component has to be a prefab and must be registered in the `NetworkPrefabs` list. When a client starts, Netcode will destroy all existing scene objects with a `NetworkObject` component on them and spawn a corresponding prefab from the `NetworkPrefabs` list instead. This means that serialized data gets lost on the clients. It's thus recommended to place serialized data in `NetworkVariable`'s.
**PrefabSync is ONLY recommended for multi project setups**.


