---
id: object-spawning
title: Object Spawning
sidebar_label: Object Spawning
---

In Unity creating a new game object is usually done via the `Instantiate` function. Creating a game object with `Instantiate` will only create that object on
that players local machine. `Spawning` in MLAPI means to create an object which is shared between all clients and the server.

### Registering a Networked Prefab

To spawn an object it must first be registered as a networked prefab. First create a prefab out of the object you want to spawn.
Then make sure the object has a `NetworkedObject` component on it. The `NetworkedObject` component has a `PrefabHash` this is a unique name
which is used by MLAPI to find the right object to spawn on the clients. By default this is the name of the object but it can be changed if needed.
Finally to register your prefab as a networked prefab, add it to the `NetworkedPrefabs` list of the `NetworkingManager`.

### Spawning a Networked Prefab

MLAPI uses a server authorative networking model so spawning objects can only be done on the server/host.
To spawn an object first instantiate the object from your prefab and then invoke the spawn method on the `NetworkedObject` component that should be attached to the prefab.
This should only be done on the server as the object will automatically replicate on the other clients.
By default a newly spawned object is owned by the server. You can learn more about ownership [here] (TODO LINK "MLAPI Basics/NetworkedObject/Object Ownership")

The following is an example to spawn an object (with server ownership):

```csharp
GameObject go = Instantiate(myPrefab, Vector3.zero, Quaternion.identity);
go.GetComponent<NetworkedObject>().Spawn();
```

The `.Spawn()` method takes 2 optional parameters, both with default values:

```csharp
public void Spawn(Stream spawnPayload = null, bool destroyWithScene = false);
```

| Parameter | Description |
| -- | -- |
| `spawnPayload` | A System.IO.Stream and can be retrieved in the `NetworkStart()` to sync values once when spawning this object. The payload data is only available for already connected clients. If a client connects later they won't get the payload data. |
| `destroyWithScene` | If set to true, the object will be destroyed on scene switching. This can only be set inside the spawn call. |

## Destroying / Unspawning

When a spawned object gets destroyed on the server/host, MLAPI will automatically destroy it on all clients as well.

To despawn a networked object on all clients but keep it on the server call `NetworkedObject.Despawn` on the server. An unspawned object can also later be spawned again with another spawn call if needed.

A client should never call destroy on a networked object itself. That's not supported. To destroy an object with client authority have the client send an RPC to the server and let the server destroy the object.

You cannot unspawn objects on just specific clients. If you want to hide an object on some clients but display it on others use [Object Visibility] (TODO LINK).

To get more control about object the object lifecycle MLAPI has built in object pooling you can learn more about that [here](TODO LINK advanced-topics/object-pooling).

## Scene Objects

Any objects in the scene with NetworkedObject components will get automatically replicated by MLAPI. There is no need to manually spawn them.

There are **two** modes that define how scene objects are synchronized.

### SoftSync

SoftSync is the default and recommended mode for synchronizing scene objects.

When using SoftSync MLAPI will just synchronize existing scene objects with each other.
This allows scene objects to be non prefabs and they will not be replaced, thus keeping their serialized data.


### PrefabSync

PrefabSync can be manually enabled in the `NetworkingManager` by ticking the `Use Prefab Sync` checkbox. Prefab sync will also be used if SceneManagement is disabled.

If it's enabled, every scene object with a `NetworkedObject` component has to be a prefab and must be registered in the `NetworkedPrefabs` list. When a client starts, MLAPI will destroy all existing scene objects with a `NetworkedObject` component on them and spawn a corresponding prefab from the `NetworkedPrefabs` list instead. This means that serialized data gets lost on the clients. It's thus recommended to place serialized data in NetworkedVars.
**PrefabSync is ONLY recommended for multi project setups**.
