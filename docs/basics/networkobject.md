---
id: networkobject
title: NetworkObject
---

Netcode for Gameobjects' high level components, [the RPC system](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/messaging-system), [object spawning]([https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkSpawnManager](https://docs-multiplayer.unity3d.com/netcode/current/basics/object-spawning)), and [NetworkVariable](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkvariable)s all rely on there being at least two netcode components added to a `GameObject`: 
1. `NetworkObject` (this document)
2. [`NetworkBehaviour`](networkbehaviour.md)

:::note
Both the `NetworkObject` and `NetworkBehaviour` components require the use of specialized structures in order to be serialized and used with `RPC`s and `NetworkVariables`:<br>
For `NetworkObject`s use the [NetworkObjectReference](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkObjectReference).<br>
For `NetworkBehaviour`s use the [NetworkBehaviourReference](NO API LINK AVAILABLE).
:::

## NetworkObject

In order to replicate any netcode aware properties, replicate state, or send/receive RPCs a `GameObject` must have a `NetworkObject` component and at least one `NetworkBehaviour` component.  Any netcode related component, like `NetworkTransform` or a `NetworkBehaviour` with one or more `NetworkVariable`s or `RPC`s, requires a `NetworkObject` component on the same relative `GameObject` or on a parent of the `GameObject` in question.

When spawning a `NetworkObject`, the NetowrkObject.GlobalObjectIdHash value is used to initially identify the associatd network prefab asset clients will instantiate to create a client-local clone/copy.  Each `NetworkObject` gets assigned a `NetworkObjectId` at runtime, which is used to associate two `NetworkObject`s across the network. For example, one peer can say "Send this RPC to the object with the NetworkObjectId 103", and everyone knows what object that is. A `NetworkObject` is considered "Spawned" on a client is when it has been instatiated and assigned a unique `NetworkObjectId`. <br>

[NetworkBehaviours](networkbehaviour.md) provide users with the ability to add their own custom netcode logic to the associated `NetworkObject`.

## Ownership

Each `NetworkObject` is owned by either the server (default) or any connected and approved client.  Netcode for GameObjects is server authoritative, which means the server controls (i.e. is the only system authorized) to spawn or despawn `NetworkObject`s.  _All code snippets below should be invoked on the server-side:_

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

To determine if the local client is the owner of a NetworkObject you can check the [`NetworkBehaviour.IsOwner`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkBehaviour#isowner) property.
<br>
To determine if the NetworkObject is owned by the server you can check the [`NetworkBehaviour.IsOwnedByServer`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkBehaviour#isownedbyserver) property.<br>

## Player Objects

Player objects are an optional feature in Netcode which can be used to assign a networked object to a specific client. A client can always only have at most one player object.<br>
:::note
If you want a client to control multiple objects, then use the ownership methods described above under the ownership section.
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
