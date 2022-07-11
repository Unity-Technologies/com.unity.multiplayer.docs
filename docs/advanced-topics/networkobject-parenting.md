---
id: networkobject-parenting
title:  NetworkObject Parenting
description: A `NetworkObject` parenting solution within Netcode for GameObjects (Netcode) to help developers with synchronizing transform parent-child relationships of `NetworkObjects`.

---

:::important Opt-OUT
This feature is behind a bool flag that can be toggled on the `NetworkObject` inspector UI. It will be enabled by default but you can opt-out from it if you want to implement your own solution
:::

 [`MonoBehaviour.OnTransformParentChanged()`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTransformParentChanged.html) under `NetworkObject`  is utilized to catch `transform.parent` changes.

Three additional state variables are stored in `NetworkObject`:

```csharp
bool m_IsReparented; // did parent change compared to initial scene hierarchy?
ulong? m_LatestParent; // who (NetworkObjectId) is our latest (current) parent if we changed our parent?
Transform m_CachedParent; // who (Transform) was our previously assigned parent?
```

`NetworkBehaviour` includes a virtual method you can override to be notified when a `NetworkObject`'s parent has changed:

```csharp
/// <summary>
/// Gets called when the parent NetworkObject of this NetworkBehaviour's NetworkObject has changed
/// </summary>
virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject) { }
```

You need to consider two main code paths when synchronizing `NetworkObject` parenting:

1. At Object Spawn
    - Client spawns objects including static scene objects and dynamic spawned objects on join.
    - Serialize `NetworkObject`s with their payloads (such as `NetworkBehaviour`s etc.)
    - Write `m_IsReparented` and `m_LatestParent` fields to sync on the client-side
2. During Gameplay
    - When a server parents a spawned `NetworkObject` under another spawned `NetowrkObject` during a netcode game session this parent child relationship is replicated across the network to all connected clients.
:::info
The server will writes the `m_IsReparented` and `m_LatestParent` fields into a `NetworkBuffer` and sends a `PARENT_SYNC` message on the `MLAPI_INTERNAL` channel to all connected clients.
:::

:::important
Transform parent synchronization relies on the initial formation of transforms in the scene hierarchy being identical on all standalone instances.
:::

## NetworkObject Parenting Rules
A few basic `NetworkObject` Parenting rules are listed below.

:::warning Limiting Non-Networked NetworkObject Transform Parenting
Rules outlined below are applied and enforced even while not networking (not hosting or connected). Specifically, if you were to try parenting a `NetworkObject` under a non-`NetworkObject`, that'd be invalid and reverted even though you are not hosting or connected to a server.
:::


### Only A Server (or A Host) Can Parent NetworkObjects
Similar to [Ownership](../basics/networkobject#ownership), only the server (or host) can control `NetworkObject` parenting.

:::tip
If you run into a situation where your client must trigger parenting a `NetworkObject`, one solution is for the client to send an RPC to the server. Upon receiving the RPC message, the server then handles parenting the `NetworkObject`.
:::

### Only Parent Under A `NetworkObject` Or Nothing (i.e. The Root or null)
A `NetworkObject` can only be parented under another `NetworkObject`. The only exception is if you don't want the `NetworkObject` to have any parent. Under this case, you would parent to the root of the scene hierarchy (i.e. setting the `transform.parent` to `null`).

:::info
The `NetworkObject` requirement is primarily for identification purposes (i.e. knowing which GameObject's transform we are going to parent under).
:::

### Only Spawned NetworkObjects Can Be Parented
A `NetworkObject` can only be parented if it is spawned and can only be parented under another spawned `NetworkObject`. This also means that `NetworkObject` parenting can only occur during a network session (netcode enabled game session).  Think of `NetworkObject` parenting as a netcode event.  In order for it to happen, you must have, at very minimum, a server or host instance started and listening.

### Invalid `NetworkObject` Parenting Will Be Reverted
If an invalid/unsupported `NetworkObject` parenting happens, Netcode will immediately revert it back to its original parenting status. 

**For example:** 
If you had a `NetworkObject` who's current parent was root and tried to parent it in an invalid way (i.e. under a GameObject without a `NetworkObject` component) then a warning message would be logged and the `NetworkObject` would revert back to having root as its parent.

### In-scene NetworkObject parenting of players
In-scene placed `NetworkObject` parenting of players requires the client to be synchronized first.  Since a server can only perform parenting related actions, the server must have already received the `NetworkSceneManager` generated `SceneEventType.SynchronizeComplete` message before the server can parent the client's player `NetworkObject`.
:::info
For more information, see the "[Real World In-scene NetworkObject Parenting of Players Solution](inscene_parenting_player.md)".
:::

## Parenting Examples

### Simple Example:
Let's assume we have the following initial scene hierarchy before we attempt parenting:
```
Sun
Tree
Camera
Player (GameObject->NetworkObject)
Vehicle (GameObject->NetworkObject)
```
Both the player and vehicle `NetworkObject`s are spawned and the player moves towards the vehicle and wants to "get into" the vehicle.  The player's client sends perhaps a "use object" RPC command to the server.  In turn, the server then parents the player under the vehicle and changes the player's model pose to sitting.  Since both `NetworkObject`s are spawned and the server is receiving an RPC to perform the parenting action, the parenting action performed by the server is considered valid and the player is then parented under the vehicle as it is shown below:

```
Sun
Tree
Camera
Vehicle (GameObject->NetworkObject)
  └─ Player (GameObject->NetworkObject)
```

### Mildly Complex Invalid Example:
```
Sun
Tree
Camera
Player (GameObject->NetworkObject)
Vehicle (GameObject->NetworkObject)
  ├─ Seat1 (GameObject)
  └─ Seat2 (GameObject)
```
In the above example, the vehicle has two GameObjects nested under the vehicle's root GameObject to represent the two available seats.  If we tried to parent the player under Seat1:
```
Sun
Tree
Camera
Vehicle (GameObject->NetworkObject)
  ├─Seat1 (GameObject)
  │ └─Player (GameObject->NetworkObject)
  └─Seat2 (GameObject)
```
This would be considered an invalid parenting and would be reverted.  

### Mildly Complex Valid Example:
In order to resolve the previous invalid parenting issue, we would need to add a `NetworkObjet` component to the seats.  This means we would need to:
1. Spawn the vehicle and the seats:
```
Sun
Tree
Camera
Player (GameObject->NetworkObject)
Vehicle (GameObject->NetworkObject)
Seat1 (GameObject->NetworkObject)
Seat2 (GameObject->NetworkObject)
```

2. Once spawned, parent the seats under the vehicle 

```
Sun
Tree
Camera
Player (GameObject->NetworkObject)
Vehicle (GameObject->NetworkObject)
  ├─ Seat1 (GameObject->NetworkObject)
  └─ Seat2 (GameObject->NetworkObject)
```
3. Finally, some time later a player wants to get into the vehicle and the player is parented under Seat1:
```
Sun
Tree
Camera
Vehicle (GameObject->NetworkObject)
  ├─Seat1 (GameObject->NetworkObject)
  │ └─Player (GameObject->NetworkObject)
  └─Seat2 (GameObject->NetworkObject)
```