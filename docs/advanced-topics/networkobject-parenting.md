---
id: networkobject-parenting
title:  NetworkObject Parenting
description: A `NetworkObject` parenting solution within Netcode for GameObjects (Netcode) to help developers with synchronizing transform parent-child relationships of `NetworkObjects`.

---
:::note Optional Auto Synchronized Parenting
The Auto Object Parent Sync property of NetworkObject, enabled by default, allows you to disable automatic parent change synchronization in the event you want to implement your own parenting solution for one or more NetworkObjects.
:::

## NetworkObject Parenting Rules

### Overview
If you aren't completely familiar with transform parenting in Unity, then it is highly recommended to [review over the existing Unity documentation](https://docs.unity3d.com/Manual/class-Transform.html) before reading further.  In order to properly synchronize all connected clients with any change in a `GameObject`'s transform parented status, Netcode for GameObjects (NGO) requires that the parent and child `GameObject`s have `NetworkObject` components attached to them. 





### Rules OverView
- Setting the parent of a child's `Transform` directly (i.e. `transform.parent = childTransform;`) will always use the default `WorldPositionStays` value of `true`.
  - It is recommended to always use the `NetworkObject.TrySetParent` method when parenting if you plan on changing the `WorldPositionStays` default value.
- When a server parents a spawned `NetworkObject` under another spawned `NetowrkObject` during a netcode game session this parent child relationship is replicated across the network to all connected and future late joining clients.
- If, while editing a scene, you place an in-scene placed `NetworkObject` under a `GameObject` that does not have a `NetworkObject` component attached to it, NGO will preserve that parenting relationship.
  - During runtime, this parent-child hierarchy will remain true unless user code removes the GameObject parent from the child NetworkObject.
    - _Note: Once removed, NGO will not allow you to re-parent the `NetworkObject` back under the same or another `GameObject` that with no `NetworkObject` component attached to it._ 
- You can perform the same parenting actions with in-scene placed `NetworkObject`s as you can with dynamically spawned `NetworkObject`s.
  - Only in-scene placed `NetworkObject`s can have multiple generations of nested `NetworkObject` children.
  - You can parent dynamically spawned `NetworkObject`s under in-scene placed `NetworkObject`s and vice versa.
- To adjust the child's transform values when parented:
  - Override the `NetworkBehaviour.OnNetworkObjectParentChanged` virtual method within a `NetworkBehaviour` attached to the child NetworkObject
  - When `OnNetworkObjectParentChanged` is invoked (on the server side) adjust the child's transform values within the overridden method.
  - _Note: This can be useful for world objects where the child `NetworkObject`'s local space transform values never change independently of its parent (i.e. picking up a weapon or item)._ 
  - Changes to the child `NetworkObject`'s transform will be synchronized across clients  when a `NetworkObject` is parented 
    - i.e. A `NetworkObject` doesn't need to have a `NetworkTransform` component if it never moves around when it has no parent

[`NetworkBehaviour.OnNetworkObjectParentChanged`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkBehaviour#onnetworkobjectparentchangednetworkobject) is a virtual method you can override to be notified when a `NetworkObject`'s parent has changed. The [`MonoBehaviour.OnTransformParentChanged()`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTransformParentChanged.html) method is used by `NetworkObject` to catch `transform.parent` changes and notify its associated `NetworkBehaviour`s.

```csharp
/// <summary>
/// Gets called when the parent NetworkObject of this NetworkBehaviour's NetworkObject has changed
/// </summary>
virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject) { }
```

:::caution Multi-Generation Children and Scale
If you are dealing with more than one generation of nested children where each parent and child have scale values other than `Vector3.one`, then mixing the `WorldPositionStays` value when parenting and removing a parent will impact how the final scale is calculated! If you want to maintain the same values prior to parenting when removing a parent from a child, then you need to use the same `WorldPositionStays` value used when the child was parented. 
:::

### Only A Server (or A Host) Can Parent NetworkObjects
Similar to [Ownership](../basics/networkobject#ownership), only the server (or host) can control `NetworkObject` parenting.

:::tip
If you run into a situation where your client must trigger parenting a `NetworkObject`, one solution is for the client to send an RPC to the server. Upon receiving the RPC message, the server then handles parenting the `NetworkObject`.
:::

### Only Parent Under A `NetworkObject` Or Nothing (i.e. The Root or null)
A `NetworkObject` can only be parented under another `NetworkObject`. The only exception is if you don't want the `NetworkObject` to have any parent. Under this case, you would parent to the root of the scene hierarchy (i.e. setting the `transform.parent` to `null`).  

:::tip
You can use `NetworkObject.RemoveParent` to remove a parent from a child which doesn't require you to cast `null` to a `GameObject` or `NetworkObject` when using `NetworkObject.TrySetParent`.  This helper method was added for convenience and internally it does the casting for you:
 ```csharp
 public bool TryRemoveParent(bool worldPositionStays = true)
 {
     return TrySetParent((NetworkObject)null, worldPositionStays);
 }
```
:::

### Only Spawned NetworkObjects Can Be Parented
A `NetworkObject` can only be parented if it is spawned and can only be parented under another spawned `NetworkObject`. This also means that `NetworkObject` parenting can only occur during a network session (netcode enabled game session).  Think of `NetworkObject` parenting as a netcode event.  In order for it to happen, you must have, at very minimum, a server or host instance started and listening.

### Invalid `NetworkObject` Parenting Will Be Reverted
If an invalid/unsupported `NetworkObject` parenting happens, the attempted parenting action will be immediately reverted it back to its original parenting status. 

**For example:** 
If you had a `NetworkObject` who's current parent was root and tried to parent it in an invalid way (i.e. under a GameObject without a `NetworkObject` component) then a warning message would be logged and the `NetworkObject` would revert back to having root as its parent.

### In-scene NetworkObject parenting of players
In-scene placed `NetworkObject` parenting of players requires the client to be synchronized first.  Since a server can only perform parenting related actions, the server must have already received the `NetworkSceneManager` generated `SceneEventType.SynchronizeComplete` message  before the server can parent the client's player `NetworkObject`.
:::info
For more information, see the "[Real World In-scene NetworkObject Parenting of Players Solution](inscene_parenting_player.md)".
:::

### WorldPositionStays usage
When using the `NetworkObject.TrySetParent` or `NetworkObject.TryRemoveParent` methods, the `WorldPositionStays` parameter is synchronized with currently connected and late joining clients. When removing a child from its parent, you should use the same `WorldPositionStays` value that was used to parent the child.  More specifically when `WorldPositionStays` is set to false this applies, but if you are using the defalt value of `true` then this is not required (because it is the default).

When the `WorldPositionStays` parameter in `NetworkObject.TrySetParent` is the default value of `true`, this will preserve the world space values of the child `NetworkObject` relative to the parent.  However, sometimes you might want to only preserve the local space values (i.e. pick up an object that only has some initial changes to the child's transform when parented).  Through a combination of `NetworkObject.TrySetParent` and `NetworkBehaviour.OnNetworkObjectParentChanged` you can accomplish this without the need for a `NetworkTransform`.  To better understand how this works, it is important to understand the order of operations for both of these two methods:

**Server-Side**
- `NetworkObject.TrySetParent` invokes `NetworkBehaviour.OnNetworkObjectParentChanged`
  - You can make adjustments to the child's position, rotation, and scale in the overridden `OnNetworkObjectParentChanged` method.
- The ParentSyncMessage is generated, the transform values are added to the message, and the message is then sent.
  - ParentSyncMessage includes the child's position, rotation, and scale
    - Currently connected or late joining clients will be synchronized with the parenting and the child's associated transform values

**When to use a NetworkTransform**
If you plan on the child `NetowrkObject` moving around, rotating, or scaling independently (when parented or not) then you will still want to use a NetworkTransform.
If you only plan on making a one time adjustment to the child `NetworkObject`'s transform when parented, then you would not need `NetworkTransform` if you set `WorldPositionStays` to false when parenting the child.

[Learn More About WorldPositionStays](https://docs.unity3d.com/ScriptReference/Transform.SetParent.html)

### Network Prefabs, Parenting, and NetworkTransforms
Since the `NetworkTransform` component synchronizes the transform of a `GameObject` (with a `NetworkObject` component attached to it), it can become tricky to understand the parent-child transform relationship and how that translates when synchronizing late joining clients.  Currently, a network prefab can only have one `NetworkObject` component within on the root `GameObject` of the prefab.  However, you can have a complex hierarchy of `GameObject`s nested under the root `GameObjet` and each child `GameObject` can have a `NetworkBehaviour` attached to it.  Since a `NetworkTransform` synchronizes the transform of the `GameObject` it is attached to, you might be tempted to setup a network prefab like this:

```
Network Prefab Root (GameObject with NetworkObject and NetworkTransform components attached to it)
  ├─ Child #1 (GameObject with NetworkTransform component attached to it)
  │ 
  └─ Child #2 (GameObject with NetworkTransform component attached to it)
```
While this will not give you any warnings and, depending upon the transform settings of Child #1 & #2, it might appear to work properly (i.e. synchronizes clients, etc.), it is important to understand how the child `GameObject`, with no `NetworkObject` component attached to it, and parent `GameObject`, that does have a `NetworkObject` component attached to it, will be synchronized when a client connects to an already in-progress network session (i.e. late joins or late joining client).  If Child #1 or Child #2 have had changes to their respective `GameObject`'s transform prior to a client joining, then upon a client late joining the two child `GameObject`'s transforms will not get synchronized during the initial synchronization period because they do not have `NetworkObject` components attached to them:

```
Network Prefab Root (Late joining client is synchronized with `GameObject`'s current transform state)
  ├─ Child #1 (Late joining client *is not synchronized* with `GameObject`'s current transform state)
  │ 
  └─ Child #2 (Late joining client *is not synchronized* with `GameObject`'s current transform state)
```
This *is important* to understand because the `NetworkTransform` component initializes itself, during `NetworkTransform.OnNetworkSpawn`, with the `GameObject`'s current transform state. Just below, in the parenting examples, we provide you with some valid and invalid parenting rules. As such, you should take these rules into consideration when using `NetworkTransform` components and if you plan on using a complex parent-child hierarchy you should make sure to design your project's assets where children that have `NetworkTransform` components attached to them also have `NetworkObject` components attached to them as well to avoid late-joining client synchronization issues.

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



