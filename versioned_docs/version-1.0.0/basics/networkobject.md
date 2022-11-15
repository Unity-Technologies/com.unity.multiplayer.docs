---
id: networkobject
title: NetworkObject
---

Netcode for Gameobjects' high level components, [the RPC system](../advanced-topics/messaging-system.md), [object spawning](../basics/object-spawning), and [NetworkVariable](../basics/networkvariable)s all rely on there being at least two netcode components added to a `GameObject`: 
  1. `NetworkObject`
  2. [`NetworkBehaviour`](networkbehaviour.md)

:::note
Both the `NetworkObject` and `NetworkBehaviour` components require the use of specialized structures in order to be serialized and used with `RPC`s and `NetworkVariables`:

- For `NetworkObject`s use the [`NetworkObjectReference`](../api/Unity.Netcode.NetworkObjectReference).
- For `NetworkBehaviour`s use the [`NetworkBehaviourReference`](../api/Unity.Netcode.NetworkBehaviourReference.md).
:::

## NetworkObject

In order to replicate any netcode aware properties or send/receive RPCs a `GameObject` must have a `NetworkObject` component and at least one `NetworkBehaviour` component.  Any netcode related component, like `NetworkTransform` or a `NetworkBehaviour` with one or more `NetworkVariable`s or `RPC`s, requires a `NetworkObject` component on the same relative `GameObject` or on a parent of the `GameObject` in question.

When spawning a `NetworkObject`, the NetworkObject.GlobalObjectIdHash value is used to initially identify the associatd network prefab asset clients will instantiate to create a client-local clone/copy.  Once instantiated locally, each `NetworkObject` is assigned a `NetworkObjectId` that is used to associate `NetworkObject`s across the network. For example, one peer can say "Send this RPC to the object with the NetworkObjectId 103", and everyone knows what object that is. A `NetworkObject` is considered "Spawned" on a client is when it has been instatiated and assigned a unique `NetworkObjectId`.

[NetworkBehaviours](networkbehaviour.md) provide users with the ability to add their own custom netcode logic to the associated `NetworkObject`.

## Ownership

Each `NetworkObject` is owned by either the server (default) or any connected and approved client.  Netcode for GameObjects is server authoritative, which means the server controls (i.e. is the only system authorized) to spawn or despawn `NetworkObject`s.  

:::note
All code snippets below should be invoked on the server-side.
:::

The default 'NetworkObject.Spawn' method assumes server-side ownership:
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

To determine if the local client is the owner of a NetworkObject you can check the [`NetworkBehaviour.IsOwner`](../api/Unity.Netcode.NetworkBehaviour#isowner) property.

To determine if the NetworkObject is owned by the server you can check the [`NetworkBehaviour.IsOwnedByServer`](../api/Unity.Netcode.NetworkBehaviour#isownedbyserver) property.

:::note
When you want to despawn and destroy the owner but you don't want a specific `NetworkObject` to be destroyed along with the owner, then you can set the `NetworkObject.DontDestroyWithOwner` property to `true` which will assure that when the owner is destroyed the owned `NetworkObject`is not destroyed.
:::

## Player Objects

Player objects are an optional feature in Netcode which can be used to assign a networked object to a specific client. A client can always only have at most one player object.

:::note
If you want a client to control multiple objects, then use the ownership methods described above under the ownership section.

If you want to be able to assign a unique player prefab on a per client connection basis, use client [Connection Approval](connection-approval).
:::

### Creating a Player Object

Netcode can spawn a default player object for you. If `Create Player Prefab` is checked (`true`) in the `NetworkManager` and the `Player Prefab` is assigned a valid prefab, then Netcode will spawn a unique instance of the designated player prefab for each connected and approved client.

To manually spawn an object as player object, use the following method:

```csharp
GetComponent<NetworkObject>().SpawnAsPlayerObject(clientId);
```
:::note
If the player already had a prefab instance assigned, then the NetworkObject of that prefab instance will still be owned by the client unless there is additional server-side specific user code that removes or changes the ownership.
:::

### Finding Player Objects

To find a player object for a specific client id you can use the following methods:

Within a NetworkBehaviour, you can check the local `NetworkManager`'s `LocalClient` to get the local player object:

```csharp
NetworkManager.LocalClient.PlayerObject
```

Conversely, on the server-side if you need to get the player object instance for a specific client you can use the following:

```csharp
NetworkManager.Singleton.ConnectedClients[clientId].PlayerObject;
```

To find your own player object just pass `NetworkManager.Singleton.LocalClientId` as the clientId in the sample above.

### Network Prefabs
Network prefabs (NetworkPrefabs) are prefabs that contain a GameObject with a `NetworkObject` component.  As an example, if you wanted to create a prefab to be the default player prefab, then you would create a prefab that at the root GameObject included a `NetworkObject` component and any additional player specific `NetworkBehabiour` components.  You can then assign that prefab to the `NetworkManager` Player Prefab property to be used when a player is connected and approved.  Each connected player will have a unique instance spawned on all connected clients (including the server).

:::note
You can only have one `NetworkObject` at the root of a prefab.  This means do not create prefabs with nested `NetworkObjects`!
:::
