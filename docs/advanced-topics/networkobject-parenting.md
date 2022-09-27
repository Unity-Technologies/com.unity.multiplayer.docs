---
id: networkobject-parenting
title:  NetworkObject Parenting
description: A `NetworkObject` parenting solution within Netcode for GameObjects (Netcode) to help developers with synchronizing transform parent-child relationships of `NetworkObjects`.

---
:::note Optional Auto Synchronized Parenting
The Auto Object Parent Sync property of NetworkObject, enabled by default, allows you to disable automatic parent change synchronziation in the event you want to implement your own parenting solution for one or more NetworkObjects.
:::


## Things to consider for `NetworkObject` parenting:

- It is recommended to use the `NetworkObject.TrySetParent` method when parenting unless you want the to-be-parented child to maintain local space transform values. 
- If you directly set the parent of a child's `Transform` it will use the default WorldPositionStays value (true).
- If you want the child `NetworkObject` to not keep its current world space values relative to the parent:
  - Always use the `NetworkObject.TrySetParent` method in order to set the `worldPositionStays` paremeter to false and have that synchronized across clients.
  - On the server-side, you can adjust the child's transform values by overriding the `NetworkBehaviour.OnNetworkObjectParentChanged` virtual method.
    - This can be useful if you don't plan to adjust the child NetworkObject's local space transform values while it is parented as it allows you to "pickup" and "drop" NetworkObjects without the need to attach a NetworkTransform component to the child.
- When a server parents a spawned `NetworkObject` under another spawned `NetowrkObject` during a netcode game session this parent child relationship is replicated across the network to all connected and future late joining clients.
- In-scene placed `NetworkObject`s can be nested under a GameObject without a `NetworkObject` component and that hierarchy will be preserved.
- You can perform the same parenting actions with in-scene placed `NetworkObject`s as you can with dynamically spawned `NetworkObject`s.

:::caution Multi-Generation Children and Scale
If you are dealing with more than one generation of nested children where each parent and child have scale values other than `Vector3.one`, then mixing the `WorldPositionStays` value when parenting and removing a parent will impact how the final scale is calculated! If you want to maintain the same values prior to parenting when removing a parent from a child, then you need to use the same `WorldPositionStays` value used when the child was parented. 
:::

[`NetworkBehaviour.OnNetworkObjectParentChanged`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkBehaviour#onnetworkobjectparentchangednetworkobject) is a virtual method you can override to be notified when a `NetworkObject`'s parent has changed. The [`MonoBehaviour.OnTransformParentChanged()`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTransformParentChanged.html) method is used by `NetworkObject` to catch `transform.parent` changes and notify its associated NetworkBehaviours.

```csharp
/// <summary>
/// Gets called when the parent NetworkObject of this NetworkBehaviour's NetworkObject has changed
/// </summary>
virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject) { }
```

## NetworkObject Parenting Rules
A few basic `NetworkObject` Parenting rules are listed below.

:::warning Limiting Non-Networked NetworkObject Transform Parenting
Rules outlined below are applied and enforced even while not networking (not hosting or connected). Specifically, if you were to try parenting a `NetworkObject` under a non-`NetworkObject`, that'd be invalid and reverted even though you are not hosting or connected to a server.  The only time you can have a `NetworkObject` nested under a non-`NetworkObject` is when using in-scene placed `NetworkObject`s. Under this scenario, if you remove the child `NetworkObject` from the non-`NetworkObject` during runtime you will not be able to parent it back under a `GameObject`.
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

### WorldPositionStays usage
When using the `NetworkObjdct.TrySetParent` method, the `WorldPositionStays` paremeter is synchronized with currently connected and late joining clients. When removing a child from its parent, you should use the same `WorldPositionStays` value that was used to parent the child.  More specifically when `WorldPositionStays` is set to false this applies, but if you are using the defalt value of `true` then this is not required (because it is the default).

When the `WorldPositionStays` parameter in `NetworkObject.TrySetParent` is the default value of `true`, this will preserve the world space values of the child `NetworkObject` relative to the parent.  However, sometimes you might want to only preserve the local space values (i.e. pick up an object that only has some initial changes to the child's transform when parented).  Through a combination of `NetworkObject.TrySetParent` and `NetworkBehaviour.OnNetworkObjectParentChanged` you can accomplish this without the need for a `NetworkTransform`.  To better understand how this works, it is important to understand the order of operatiosn for both of these two methods:

**Server-Side**
- `NetworkObject.TrySetParent` invokes `NetworkBehaviour.OnNetworkObjectParentChanged`
  - You can make adjustments to the child's position, rotation, and scale in `OnNetworkObjectParentChanged`
- The ParentSyncMessage is generated and sent
  - ParentSyncMessage includes the child's postion, rotation, and scale
    - Currently connected or late joining clients will be synchronized with the parenting and the child's associated transform values

**When to use a NetworkTransform**
If you plan on the child `NetowrkObject` moving around, rotating, or scaling independently (when parented or not) then you will still want to use a NetworkTransform.
If you only plan on making a one time adjustment to the child `NetworkObject`'s transform when parented, then you would not need `NetworkTransform` if you set `WorldPositionStays` to false when parenting the child.

[Learn More About WorldPositionStays](https://docs.unity3d.com/ScriptReference/Transform.SetParent.html)


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


