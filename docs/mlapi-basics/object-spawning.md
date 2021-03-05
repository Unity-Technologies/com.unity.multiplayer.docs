---
id: object-spawning
title: Object Spawning
sidebar_label: Object Spawning
---

In Unity, you typically creating a new game object using the `Instantiate` function. Creating a game object with `Instantiate` will only create that object on that player's local machine. `Spawning` in MLAPI means to create an object which is shared between all clients and the server.

### Registering a Networked Prefab

To spawn an object, it must first be registered as a networked prefab:

1. Create a prefab out of the object you want to spawn.
1. Make sure the object has a `NetworkObject` component on it. 

  The `NetworkObject` component has a `PrefabHash` this is a unique name used by MLAPI to find the right object to spawn on the clients. By default this is the name of the object but it can be changed if needed.
  
1. Add your prefab to the `NetworkPrefabs` list of the `NetworkManager`.

### Spawning a Networked Prefab

MLAPI uses a server authorative networking model so spawning objects can only be done on the server/host.
To spawn an object first instantiate the object from your prefab and then invoke the spawn method on the `NetworkObject` component that should be attached to the prefab.
This should only be done on the server as the object will automatically replicate on the other clients.
By default a newly spawned object is owned by the server. See [Ownership](networkedobject.md#ownership) for more information.```

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

When a spawned object gets destroyed on the server/host, MLAPI will automatically destroy it on all clients as well.

When a client disconnects, all objects owned by that client will be destroyed. If you do not want that to happen for an object set the `DontDestroyWithOwner` field on `NetworkObject` to true.

### Despawning

To despawn a networked object on all clients but keep it on the server call `NetworkObject.Despawn` on the server. An despawned object can also later be spawned again with another spawn call if needed.

A client should never call destroy on a networked object itself (this is not supported).  To destroy an object with client authority, have the client send an RPC to the server, which allows the server to destroy the object.

You cannot despawn objects on just specific clients. If you want to hide an object on some clients but display it on others use [Object Visibility] (TODO LINK).

To get more control about the object lifecycle, MLAPI has built in object pooling. See [Object Pooling](../advanced-topics/object-pooling.md) to learn more.

## Scene Objects

Any objects in the scene with `NetworkObject` components will get automatically replicated by MLAPI. There is no need to manually spawn them.

There are **two** modes that define how scene objects are synchronized.

### SoftSync

`SoftSync` is the default and recommended mode for synchronizing scene objects.

When using `SoftSync` MLAPI will just synchronize existing scene objects with each other.
This allows scene objects to be non prefabs and they will not be replaced, thus keeping their serialized data.


### PrefabSync

`PrefabSync` can be manually enabled in the `NetworkManager` by ticking the *Use Prefab Sync* checkbox. Prefab sync will also be used if `SceneManagement` is disabled.

If it's enabled, every scene object with a `NetworkObject` component has to be a prefab and must be registered in the `NetworkPrefabs` list. When a client starts, MLAPI will destroy all existing scene objects with a `NetworkObject` component on them and spawn a corresponding prefab from the `NetworkPrefabs` list instead. This means that serialized data gets lost on the clients. It's thus recommended to place serialized data in `NetworkVariable`'s.
**PrefabSync is ONLY recommended for multi project setups**.
