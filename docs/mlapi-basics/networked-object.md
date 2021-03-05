---
id: networkedobject
title: NetworkedObject
---

The MLAPI's high level components, the RPC system and the Object Spawning System, rely on two concepts: `NetworkedObject`s and `NetworkedBehaviour`s.

## NetworkedObject

For an object to be replicated across the network it needs to have a NetworkedObject component.
Each object which uses components networking functinality like NetworkTransfor or NetworkBehaviours with NetworkVariables or RPCs needs a `NetworkedObject` component on the same GameObject or in a parent.
When a NetworkedObject is considered "Spawned", it's replicated across the network so that everyone has their own version of the object. Each NetworkedObject gets assigned a NetworkId at runtime which is used to associate two NetworkedObjects across the network. Ex: One peer can say, Send this RPC to the object with the NetworkId 103 and everyone knows what object that is.

To add custom code logic to your NetworkedObjects use [NetworkedBehaviours](TODO LINK).

## Ownership

Each `NetworkedObject` is owned by a specific client. This can be any client or the server.

Give ownership of an object using the following:

```csharp
GetComponent<NetworkedObject>().ChangeOwnership(clientId);
```

The default behavior is that an object is owned by the server. To give ownership back to the server, you can use the `RemoveOwnership` call:

```csharp
GetComponent<NetworkedObject>().RemoveOwnership();
```

When you are owner of an object, you can check for `IsOwner` in any NetworkedBehaviour, similar to how player objects can do `IsLocalPlayer`.


## Player Objects

Player objects are an optional feature in MLAPI which can be used to assign a networked object to a specific client. A client can always only have at most one player object.

If you want a client to control multiple objects use the ownership model instead.

### Creating a Player Object

MLAPI can spawn a default player object for you. If `Create Player Prefab` is activated in the NetworkingManager then MLAPI will spawn the prefab marked as
`Default Player Prefab` in the NetworkPrefabs list for each client upon connection.

To manually spawn an object as player object use `SpawnAsPlayerObject` instead of the regular `Spawn` method to spawn the object. This will replace the old player object with the new one.
(The old object will still exists and will be an object owned by the client instead)

### Finding Player Objects

To find a player object for a specific client id you can use the following:

```csharp
NetworkManager.Singleton.ConnectedClients[clientId].PlayerObject;
```

To find your own player object just pass `NetworkManager.Singleton.LocalClientId` as the clientId in the sample above.
