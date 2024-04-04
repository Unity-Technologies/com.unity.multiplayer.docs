---
id: networkobject
title: NetworkObject
---

Netcode for GameObjects' high level components, [the RPC system](../advanced-topics/messaging-system.md), [object spawning](../object-spawning), and [NetworkVariable](networkvariable.md)s all rely on there being at least two Netcode components added to a GameObject:

  1. `NetworkObject`
  2. [`NetworkBehaviour`](networkbehaviour.md)

:::note

Both the NetworkObject and NetworkBehaviour components require the use of specialized structures before you can serialize and use them with RPCs and NetworkVariables:

* For NetworkObjects, use the [`NetworkObjectReference`](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@latest?subfolder=/api/Unity.Netcode.NetworkObjectReference.html).
* For NetworkBehaviours, use the [`NetworkBehaviourReference`](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@latest?subfolder=/api/Unity.Netcode.NetworkBehaviourReference.html).

:::

## NetworkObject

To replicate any Netcode-aware properties or send and receive RPCs, a GameObject must have a NetworkObject component and at least one NetworkBehaviour component. Any Netcode-related component, such as a NetworkTransform or a NetworkBehaviour with one or more NetworkVariables or RPCs, requires a NetworkObject component on the same relative GameObject (or on a parent of the GameObject in question).

When spawning a NetworkObject, the `NetworkObject.GlobalObjectIdHash` value initially identifies the associated network Prefab asset clients instantiate to create a client-local clone. After being instantiated locally, each NetworkObject is assigned a NetworkObjectId that's used to associate NetworkObjects across the network. For example, one peer can say "Send this RPC to the object with the NetworkObjectId 103," and everyone knows what object it's referring to. A NetworkObject is spawned on a client is when it's instantiated and assigned a unique NetworkObjectId.

[NetworkBehaviours](networkbehaviour.md) offers users the ability to add their own custom Netcode logic to the associated NetworkObject.

:::warning

The script order of networked objects matters. Make sure to load any NetworkBehaviour components before the NetworkObject component on the GameObject.

:::

## Ownership

By default, the server owns NetworkObjects, although connected and approved clients can also own NetworkObjects using the `SpawnWithOwnership` method. Netcode for GameObjects is server-authoritative, which means that only the server is authorized to spawn and despawn NetworkObjects.

Invoke all the following code snippets on the server-side.

The default `NetworkObject.Spawn` method assumes server-side ownership:

```csharp
GetComponent<NetworkObject>().Spawn();
```

To spawn `NetworkObject`s with ownership use the following:

```csharp
GetComponent<NetworkObject>().SpawnWithOwnership(clientId);
```

To change ownership, use the `ChangeOwnership` method:

```csharp
GetComponent<NetworkObject>().ChangeOwnership(clientId);
```

To give ownership back to the server use the `RemoveOwnership` method:

```csharp
GetComponent<NetworkObject>().RemoveOwnership();
```

To decide if the local client is the owner of a NetworkObject, you can check the [`NetworkBehaviour.IsOwner`](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@latest?subfolder=/api/Unity.Netcode.NetworkBehaviour.IsOwner.html) property.

To decide if the server owns the NetworkObject, you can check the [`NetworkBehaviour.IsOwnedByServer`](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@latest?subfolder=/api/Unity.Netcode.NetworkBehaviour.IsOwnedByServer.html) property.

:::note

When you want to de-spawn and destroy the owner but you don't want to destroy a specific NetworkObject along with the owner, you can set the `NetworkObject.DontDestroyWithOwner` property to `true` which assures that the owned NetworkObject isn't destroyed with the owner.

:::

## Player NetworkObjects

Player objects are an optional feature in Netcode you can use to assign a networked object to a specific client. A client can always only have at most one player object.

:::note

If you want a client to control more than on NetworkObject, use the ownership methods described above under the ownership section.

If you want to be able to assign a unique player Prefab on a per client connection basis, use client [connection approval](connection-approval.md).

:::

### Creating a PlayerObject

Netcode can spawn a default PlayerObject for you. If you enable **Create Player Prefab** (true) in the NetworkManager and you assign a valid Prefab to the Player Prefab, then Netcode spawns a unique instance of the designated player Prefab for each connected and approved client.

To manually spawn an object as PlayerObject, use the following method:

```csharp
GetComponent<NetworkObject>().SpawnAsPlayerObject(clientId);
```

:::note

If the player already had a Prefab instance assigned, then the client owns the NetworkObject of that Prefab instance unless there's additional server-side specific user code that removes or changes the ownership.

:::

### Finding PlayerObjects

To find a PlayerObjects for a specific client ID, you can use the following methods:

Within a NetworkBehaviour, you can check the local `NetworkManager.LocalClient` to get the local PlayerObjects:

```csharp
NetworkManager.LocalClient.PlayerObject
```

Conversely, on the server-side, if you need to get the PlayerObject instance for a specific client, you can use the following:

```csharp
NetworkManager.Singleton.ConnectedClients[clientId].PlayerObject;
```

To find your own player object just pass `NetworkManager.Singleton.LocalClientId` as the `clientId` in the sample above.

### Network Prefabs

Network Prefabs are registered to a `NetworkPrefabsList` object (a type of `ScriptableObject`). By default, a Default Prefabs List containing every Network Prefab in your project.

However, when you want to limit which prefabs are available (for example, to reduce memory usage), you can disable this behavior in **Project Settings** > **Netcode For GameObjects** > **Project Settings**. You can also manually create a `NetworkPrefabsList` by right-clicking in the assets view and selecting **Create** > **Netcode** > **Network Prefabs List** and adding your prefabs to it. That prefab list can then be assigned to a `NetworkManager` to allow that `NetworkManager` to create those prefabs.

:::warning

You can only have one `NetworkObject` at the root of a Prefab. Don't create Prefabs with nested `NetworkObjects`!

:::

### Spawning with (or without) Observers
![image](/img/SpawnWithObservers.png)

The `NetworkObject.SpawnWithObservers` property (default is true) provides you with the ability to spawn a `NetworkObject` with no initial observers. This is the recommended alternative to using `NetworkObject.CheckObjectVisibility` when you just want it to be applied globally to all clients (only when spawning an instance of the `NetworkObject` in question). If you want more precise per-client control then `NetworkObject.CheckObjectVisibility` is recommended. `NetworkObject.SpawnWithObservers` is only applied upon the initial server-side spawning and once spawned it has no impact on object visibility.


### Transform Synchronization
![image](/img/NetworkObject-TransformSynchronization.png)

There are times when you want to use a NetworkObject for something that does not require the synchronization of its transform. You might have an [In-Scene placed NetworkObject](./scenemanagement/inscene-placed-networkobjects.md) that is purely used to manage game state (or the like) and it doesn't make sense to incur the initial client synchronization cost of synchronizing its transform. To prevent a NetworkObject from initially synchronizing its transform when spawned, un-check the Synchronize Transform property. This property is enabled/checked by default.

:::caution
If you are planning to use a NetworkTransform then you always want to make sure the Synchronize Transform property is enabled/checked.
:::

### Active Scene Synchronization
![image](/img/ActiveSceneMigration.png)

When a GameObject is instantiated it gets instantiated in the current active scene. However, sometimes you might find that you want to change the currently active scene and would like specific NetworkObject instances to automatically migrate to the newly assigned active scene. While you could keep a list or table of the NetworkObject instances and write the code/logic to migrate them into a newly assigned active scene, this can be time consuming an become complicated depending upon project size and complexity. The alternate way (and recommended) to handle this is by enabling/checking the Active Scene Synchronization property of each NetworkObject you want to automatically migrate into any newly assigned scene. This property defaults to disabled/un-checked.

See Also: [NetworkSceneManager Active Scene Synchronization](../basics/scenemanagement/using-networkscenemanager#active-scene-synchronization)

### Scene Migration Synchronization

![image](/img/SceneMigrationSynchronization.png)

Similar to `NetworkObject.ActiveSceneSynchronization`, this property will automatically synchronize client-side NetworkObject instances that are migrated to a scene via [`SceneManager.MoveGameObjectToScene`](https://docs.unity3d.com/ScriptReference/SceneManagement.SceneManager.MoveGameObjectToScene.html) on the host or server side. This can be useful if you have a specific scene you wish to migrate NetworkObject instances to that is not the currently active scene.

:::info
`NetworkObject.ActiveSceneSynchronization` can be used with `NetworkObject.SceneMigrationSynchronization` as long as you take into consideration that if you migrate a NetworkObject into a non-active scene via `SceneManager.MoveGameObjectToScene` and then later change the active scene then the NetworkObject instance will be automatically migrated to the newly set active scene.
:::
