---
id: networkobject-parenting
title:  NetworkObject Parenting
description: A `NetworkObject` parenting solution within Netcode for GameObjects (Netcode) to help developers with synchronizing transform parent-child relationships of `NetworkObjects`.

---
### Overview 
If you aren't completely familiar with transform parenting in Unity, then it's highly recommended to [review over the existing Unity documentation](https://docs.unity3d.com/Manual/class-Transform.html) before reading further.  to properly synchronize all connected clients with any change in a `GameObject`'s transform parented status, Netcode for GameObjects (NGO) requires that the parent and child `GameObject`s have `NetworkObject` components attached to them. 

### Parenting Rules
- Setting the parent of a child's `Transform` directly (that is, `transform.parent = childTransform;`) will always use the default `WorldPositionStays` value of `true`.
  - it's recommended to always use the `NetworkObject.TrySetParent` method when parenting if you plan on changing the `WorldPositionStays` default value.
  - Likewise, it's also recommended to use the `NetworkObject.TryRemoveParent` method to remove a parent from a child.
- When a server parents a spawned `NetworkObject` under another spawned `NetowrkObject` during a netcode game session this parent child relationship is replicated across the network to all connected and future late joining clients.
- If, while editing a scene, you place an in-scene placed `NetworkObject` under a `GameObject` that does not have a `NetworkObject` component attached to it, NGO will preserve that parenting relationship.
  - During runtime, this parent-child hierarchy will remain true unless user code removes the GameObject parent from the child NetworkObject.
    - _Note: Once removed, NGO won't allow you to re-parent the `NetworkObject` back under the same or another `GameObject` that with no `NetworkObject` component attached to it._ 
- You can perform the same parenting actions with in-scene placed `NetworkObject`s as you can with dynamically spawned `NetworkObject`s.
  - Only in-scene placed `NetworkObject`s can have multiple generations of nested `NetworkObject` children.
  - You can parent dynamically spawned `NetworkObject`s under in-scene placed `NetworkObject`s and vice versa.
- To adjust a child's transform values when parenting or when removing a parent:
  - Override the `NetworkBehaviour.OnNetworkObjectParentChanged` virtual method within a `NetworkBehaviour` attached to the child NetworkObject.
  - When `OnNetworkObjectParentChanged` is invoked, on the server side, adjust the child's transform values within the overridden method.
  - NGO will then synchronize all clients with the child's parenting and transform changes.
  
:::tip
When a NetworkObject is parented, NGO will synchronize both the parenting information along with the child's transform values. NGO uses the `WorldPositionStays` setting to determine whether to synchronize the local or world space transform values of the child `NetworkObject`. This means that a `NetworkObject` does not require you to include a `NetworkTransform` component if it never moves around, rotates, or changes its scale when it isn't parented. This can be useful for world items a player might pickup (that is, parent the item under the player) and the item in question needs to be adjusted relative to the player when it's parented or the parent is removed (that is, dropped).  This helps to reduce the item's over-all bandwidth and processing resources consumption.
:::

### OnNetworkObjectParentChanged
[`NetworkBehaviour.OnNetworkObjectParentChanged`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkBehaviour#onnetworkobjectparentchangednetworkobject) is a virtual method you can override to be notified when a `NetworkObject`'s parent has changed. The [`MonoBehaviour.OnTransformParentChanged()`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTransformParentChanged.html) method is used by `NetworkObject` to catch `transform.parent` changes and notify its associated `NetworkBehaviour`s.

```csharp
/// <summary>
/// Gets called when the parent NetworkObject of this NetworkBehaviour's NetworkObject has changed
/// </summary>
virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject) { }
```

:::caution Multi-Generation Children and Scale
If you are dealing with more than one generation of nested children where each parent and child have scale values other than `Vector3.one`, then mixing the `WorldPositionStays` value when parenting and removing a parent will impact how the final scale is calculated! If you want to keep the same values before parenting when removing a parent from a child, then you need to use the same `WorldPositionStays` value used when the child was parented. 
:::

### Only A Server (or A Host) Can Parent NetworkObjects
Similar to [Ownership](../basics/networkobject#ownership), only the server (or host) can control `NetworkObject` parenting.

:::tip
If you run into a situation where your client must trigger parenting a `NetworkObject`, one solution is for the client to send an RPC to the server. Upon receiving the RPC message, the server then handles parenting the `NetworkObject`.
:::

### Only Parent Under A `NetworkObject` Or Nothing (that is, The Root or null)
You can only parent a NetworkObject under another NetworkObject. The only exception is if you don't want the NetworkObject to have a parent. In this case, you would can remove the NetworkObject's parent by invoking `NetworkObject.TryRemoveParent`. If this operation succeeds, the the parent of the child will be set to `null` (root of the scene hierarchy).

### Only Spawned NetworkObjects Can Be Parented
A `NetworkObject` can only be parented if it's spawned and can only be parented under another spawned `NetworkObject`. This also means that `NetworkObject` parenting can only occur during a network session (netcode enabled game session).  Think of `NetworkObject` parenting as a netcode event.  In order for it to happen, you must have, at minimum, a server or host instance started and listening.

### Invalid Parenting Actions Are Reverted
If an invalid/unsupported `NetworkObject` parenting action occurs, the attempted parenting action will be reverted back to the `NetworkObject`'s original parenting state.

**For example:** 
If you had a `NetworkObject` who's current parent was root and tried to parent it in an invalid way (that is, under a GameObject without a `NetworkObject` component) then a warning message would be logged and the `NetworkObject` would revert back to having root as its parent.

### In-scene Object Parenting and Player Objects
If you plan on parenting in-scene placed `NetworkObject`s with a player `NetworkObject` when it's initially spawned, you need to wait until the client has finished synchronizing with the server first. Since parenting can only be performed on the server side, you should perform the parenting action only when the server has received the `NetworkSceneManager` generated `SceneEventType.SynchronizeComplete` message from the client that owns the player `NetworkObject` to be parented (as a child or parent).
:::info For More Information
- [Real World In-scene NetworkObject Parenting of Players Solution](inscene_parenting_player.md) <br />
- [Scene Event Notifications](../basics/scenemanagement/scene-events#scene-event-notifications) <br />
- [In-Scene NetworkObjects](../basics/scenemanagement/inscene-placed-networkobjects.md)
:::

### WorldPositionStays usage
When using the `NetworkObject.TrySetParent` or `NetworkObject.TryRemoveParent` methods, the `WorldPositionStays` parameter is synchronized with currently connected and late joining clients. When removing a child from its parent, you should use the same `WorldPositionStays` value that was used to parent the child.  More specifically when `WorldPositionStays` is set to false this applies, but if you are using the defalt value of `true` then this isn't required (because it's the default).

When the `WorldPositionStays` parameter in `NetworkObject.TrySetParent` is the default value of `true`, this will preserve the world space values of the child `NetworkObject` relative to the parent.  However, sometimes you might want to only preserve the local space values (that is, pick up an object that only has some initial changes to the child's transform when parented).  Through a combination of `NetworkObject.TrySetParent` and `NetworkBehaviour.OnNetworkObjectParentChanged` you can accomplish this without the need for a `NetworkTransform`.  To better understand how this works, it's important to understand the order of operations for both of these two methods:

**Server-Side**
- `NetworkObject.TrySetParent` invokes `NetworkBehaviour.OnNetworkObjectParentChanged`
  - You can make adjustments to the child's position, rotation, and scale in the overridden `OnNetworkObjectParentChanged` method.
- The ParentSyncMessage is generated, the transform values are added to the message, and the message is then sent.
  - ParentSyncMessage includes the child's position, rotation, and scale
    - Currently connected or late joining clients will be synchronized with the parenting and the child's associated transform values

**When to use a NetworkTransform** <br />
If you plan on the child `NetowrkObject` moving around, rotating, or scaling independently (when parented or not) then you will still want to use a NetworkTransform.
If you only plan on making a one time adjustment to the child `NetworkObject`'s transform when parented or having a parent removed, then the child does not need a `NetworkTransform` component.

:::info For More Information
- [Learn More About WorldPositionStays](https://docs.unity3d.com/ScriptReference/Transform.SetParent.html)
:::

### Network Prefabs, Parenting, and NetworkTransforms
Since the `NetworkTransform` component synchronizes the transform of a `GameObject` (with a `NetworkObject` component attached to it), it can become tricky to understand the parent-child transform relationship and how that translates when synchronizing late joining clients.  Currently, a network Prefab can only have one `NetworkObject` component within on the root `GameObject` of the prefab.  However, you can have a complex hierarchy of `GameObject`s nested under the root `GameObjet` and each child `GameObject` can have a `NetworkBehaviour` attached to it.  Since a `NetworkTransform` synchronizes the transform of the `GameObject` it's attached to, you might be tempted to setup a network Prefab like this:

```
Network Prefab Root (GameObject with NetworkObject and NetworkTransform components attached to it)
  ├─ Child #1 (GameObject with NetworkTransform component attached to it)
  │ 
  └─ Child #2 (GameObject with NetworkTransform component attached to it)
```
While this won't give you any warnings and, depending upon the transform settings of Child #1 & #2, it might appear to work properly (that is, synchronizes clients, etc.), it's important to understand how the child `GameObject`, with no `NetworkObject` component attached to it, and parent `GameObject`, that does have a `NetworkObject` component attached to it, will be synchronized when a client connects to an already in-progress network session (that is, late joins or late joining client).  If Child #1 or Child #2 have had changes to their respective `GameObject`'s transform before a client joining, then upon a client late joining the two child `GameObject`'s transforms won't get synchronized during the initial synchronization period because they don't have `NetworkObject` components attached to them:

```
Network Prefab Root (Late joining client is synchronized with `GameObject`'s current transform state)
  ├─ Child #1 (Late joining client *isn't synchronized* with `GameObject`'s current transform state)
  │ 
  └─ Child #2 (Late joining client *isn't synchronized* with `GameObject`'s current transform state)
```
This *is important* to understand because the `NetworkTransform` component initializes itself, during `NetworkTransform.OnNetworkSpawn`, with the `GameObject`'s current transform state. Just below, in the parenting examples, we provide you with some valid and invalid parenting rules. As such, you should take these rules into consideration when using `NetworkTransform` components if you plan on using a complex parent-child hierarchy and should make sure to organize your project's assets where any children that have `NetworkTransform` components attached to them also have `NetworkObject` components attached to them to avoid late-joining client synchronization issues.

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
Both the player and vehicle `NetworkObject`s are spawned and the player moves towards the vehicle and wants to "get into" the vehicle.  The player's client sends perhaps a "use object" RPC command to the server.  In turn, the server then parents the player under the vehicle and changes the player's model pose to sitting.  Since both `NetworkObject`s are spawned and the server is receiving an RPC to perform the parenting action, the parenting action performed by the server is considered valid and the player is then parented under the vehicle as it's shown below:

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
In order to resolve the previous invalid parenting issue, we would need to add a `NetworkObject` component to the seats.  This means we would need to:
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

### Parenting & Transform Synchronization
It is important to understand that without the use of a `NetworkTransform` clients are only synchronized with the transform values when:
- A client is being synchronized with the NetworkObject in question:
  - During the client's first synchronization after a client has their connection approved.
  - When a server spawns a new `NetworkObject`.
- A `NetworkObject` has been parented _(or a parent removed)_. 
 - The server can override the `NetworkBehaviour.OnNetworkObjectParentChanged` method and adjust the transform values when that is invoked.
   - These transform changes will be synchronized with clients via the `ParentSyncMessage`


:::note Optional Auto Synchronized Parenting
The Auto Object Parent Sync property of a `NetworkObject`, enabled by default, allows you to disable automatic parent change synchronization in the event you want to implement your own parenting solution for one or more NetworkObjects. it's important to understand that disabling the Auto Object Parent Sync option of a `NetworkObject` will treat the `NetworkObject`'s transform synchronization with *clients* as if its parent is the hierarchy root _(that is, null)_.
:::


