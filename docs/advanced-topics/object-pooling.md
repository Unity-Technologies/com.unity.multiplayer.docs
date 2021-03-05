---
id: object-pooling
title: Object Pooling
---

The MLAPI has built-in support for Object Pooling. Object pooling allows to overide the default destroy and spawn handlers of MLAPI with your own logic.
This allows you to store destroyed network objects in a pool to reuse them later. This is useful for frequently used objects such as bullets and can be used to overall increase the applications performance.
You can learn more about the importance of pooling objects [here](https://learn.unity.com/tutorial/introduction-to-object-pooling).

## SpawnHandlers

You can register your own spawn handlers. MLAPI will use them in place of default spawn handlers to instantiate and destroy objects.

```csharp
SpawnManager.RegisterCustomSpawnHandler(SpawnManager.GetPrefabHash("myPrefabName"), (position, rotation, disabled) =>
{
    // Called when the MLAPI want's to spawn a prefab with the name "myPrefabName"
});
```
## DestroyHandler

```csharp
SpawnManager.RegisterCustomDestroyHandler(SpawnManager.GetPrefabHash("myPrefabName"), (networkedObject) =>
{
    // Called when the MLAPI want's to destroy the given NetworkedObject
});
```

Registering your own spawn handlers allows you to pool all networked objects on clients as they are destroyed and spawned on your clients.

To pool objects on the server side, do not use `Destroy`. Use `NetworkedObject.Despawn` first, then manually pool the object.
