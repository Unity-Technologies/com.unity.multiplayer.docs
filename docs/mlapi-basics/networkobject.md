---
id: networkobject
title: NetworkObject
---

The MLAPI's high level components, the RPC system and the Object Spawning System, rely on two concepts: `NetworkObject`s and `NetworkBehaviour`s.

## NetworkObject

For an object to be replicated across the network, it needs to have a `NetworkObject` component.
Each object which uses components networking functionality, like `NetworkTransfor` or `NetworkBehaviour`s with `NetworkVariable`s or `RPC`s,  needs a `NetworkObject` component on the same `GameObject` or in a parent.

When a `NetworkObject` is considered "Spawned", it is replicated across the network so that everyone has their own version of the object. Each `NetworkObject` gets assigned a `NetworkId` at runtime, which is used to associate two `NetworkObject`s across the network. For example, one peer can say "Send this RPC to the object with the NetworkId 103", and everyone knows what object that is.

To add custom code logic to your `NetworkObjects`, use [NetworkBehaviours](networkbehaviour.md).

## Ownership

Each `NetworkObject` is owned by a specific client. This can be any client or the server.

Give ownership of an object using the following:

```csharp
GetComponent<NetworkObject>().ChangeOwnership(clientId);
```

The default behavior is that an object is owned by the server. To give ownership back to the server, you can use the `RemoveOwnership` call:

```csharp
GetComponent<NetworkObject>().RemoveOwnership();
```

When you are owner of an object, you can check for `IsOwner` in any `NetworkBehaviour`, similar to how player objects can do `IsLocalPlayer`.


## Player Objects

Player objects are an optional feature in MLAPI which can be used to assign a networked object to a specific client. A client can always only have at most one player object.

If you want a client to control multiple objects use the ownership model instead.

### Creating a Player Object

MLAPI can spawn a default player object for you. If `Create Player Prefab` is activated in the `NetworkManager`, then MLAPI will spawn the prefab marked as `Default Player Prefab` in the `NetworkPrefabs` list for each client upon connection.

To manually spawn an object as player object, use `SpawnAsPlayerObject` instead of the regular `Spawn` method. This replaces the old player object with the new one.

:::note
The old object will still exist and will be an object owned by the client instead.
:::

### Finding Player Objects

To find a player object for a specific client id you can use the following:

```csharp
NetworkSpawnManager.GetPlayerNetworkObject(cliendId);
```

To find your own player object as a client use:
```csharp
NetworkSpawnManager.GetLocalPlayerObject();
```
