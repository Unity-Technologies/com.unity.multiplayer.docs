---
id: object-pooling
title: Object Pooling
---

The MLAPI provides built-in support for Object Pooling, which allows you to override the default MLAPI destroy and spawn handlers with your own logic.

This allows you to store destroyed network objects in a pool to reuse later. This is useful for frequently used objects, such as bullets, and can be used to increase the application's overall performance.

See [Introduction to Object Pooling](https://learn.unity.com/tutorial/introduction-to-object-pooling) to learn more about the importance of pooling objects.

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

To pool objects on the server side, do not use `Destroy`. Use `NetworkObject.Despawn` first, then manually pool the object.
