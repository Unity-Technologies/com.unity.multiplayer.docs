---
id: networkobject-parenting
title:  NetworkObject Parenting
---

A `NetworkObject` reparenting solution within Netcode for GameObjects (Netcode)  to help developers with synchronizing transform parent-child relationships of `NetworkObjects`.

:::important Opt-OUT
This feature is behind a bool flag that can be toggled on the `NetworkObject` inspector UI. It will be enabled by default but you can can opt-out from it if you want to implement your oen solution
:::

We utilize [`MonoBehaviour.OnTransformParentChanged()`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTransformParentChanged.html) under `NetworkObject` to catch `transform.parent` changes.

We store three additional state variables in `NetworkObject`:

```cs
bool m_IsReparented; // did parent change compared to initial scene hierarchy?
ulong? m_LatestParent; // who (NetworkObjectId) is our latest (current) parent if we changed our parent?
Transform m_CachedParent; // who (Transform) was our previously assigned parent?
```

We also add another new virtual method into `NetworkBehaviour`:

```cs
/// <summary>
/// Gets called when the parent NetworkObject of this NetworkBehaviour's NetworkObject has changed
/// </summary>
virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject) { }
```

There are two main codepaths we need to consider when sychronizing `NetworkObject` parenting:

1. At Object Spawn
    - Client spawns objects including static scene objects and dynamic spawned objects on join.
    - We serialize `NetworkObject`s with their payloads (such as `NetworkBehaviour`s etc.)
    - We will also write `m_IsReparented` and `m_LatestParent` fields to sync on the client-side
2. During Gameplay
    - When a valid `NetworkObject` reparenting happens during networked gameplay on the server-side, it will be replicated across the network to the connected clients to sync
    - We will write `m_IsReparented` and `m_LatestParent` fields into a `NetworkBuffer` and send that over to all connected clients with `PARENT_SYNC` message type on `MLAPI_INTERNAL` channel

Transform parent synchronization will rely on initial formation of transforms in the scene hierarchy being identical on all standalone instances.

## NetworkObject Reparenting Rules

Let's list a few basic `NetworkObject` reparenting rules below.

### Only A Server (or A Host) Can Reparent

Similar to Ownership, only the server (or host, which is both a server and a client at the same time) can control reparenting of a `NetworkObject` in the network.

Clients however, can send RPCs to server and execute a logic server-side that ultimately makes server to reparent a `NetworkObject`.

### Only Reparenting Under A NetworkObject (Or To The Root) Is Valid

A `NetworkObject` can only be reparented under another `NetworkObject` (`GameObject` with `NetworkObject` component attached). Only exception is moving a `NetworkObject` to the root of the scene hierarchy.

This is simply due to the fact that MLAPI would not be able to identify & locate new parent on the remote-side if it was a non-`NetworkObject` parent. Again, except moving it to the root because we could identify no parent (root) scenario without `NetworkObject` identification or scene hierarchy traversal.

### Only Reparenting During Networking Is Valid

A `NetworkObject` can only be reparented while networking, in other terms you can only reparent while listening/running as a server.

If we were to allow moves while not networking, we would be desynced immediately when we switch to networking. Also reparenting a `NetworkObject` under a non-`NetworkObject` while not networking would sound valid but that would not be replicable on the remote-side since MLAPI does not cover full scene hierarchy synchronization (and this might be a good thing, hence server vs client scene hierarchies).

In short, we have to keep initial `NetworkObject` formation in the scene hierarchy identical between instances so that we could rely on initial states to be in sync as reference points.

### Invalid Reparenting Will Move NetworkObject Back To Its Original Location

If an invalid/unsupported `NetworkObject` parenting happens, MLAPI will immediately pop it back to its previous location to keep things in sync and also will print relevant error/warning messages to indicate the issue.

## (Re)Parenting Move Examples

We will assume that our initial scene hierarchy is looking like this:

```
Sun
Tree
Camera
Player (NetworkObject)
  ├─ Head
  ├─ Body
  ├─ Arms
  │  ├─ LeftArm
  │  │  └─ LeftHand (NetworkObject)
  │  └─ RightArm
  │     └─ RightHand (NetworkObject)
  └─ Legs
Axe (NetworkObject)
```

So, let's try a few moves!

### Root/Axe → RightHand/Axe

This is a **valid** move because `Axe (NetworkObject)` is being moved under `RightHand (NetworkObject)`. We know about their `NetworkObjectId`s and it will be replicated across the network to the clients by the server.

Now, our hierarchy is looking like this:

```
Sun
Tree
Camera
Player (NetworkObject)
  ├─ Head
  ├─ Body
  ├─ Arms
  │  ├─ LeftArm
  │  │  └─ LeftHand (NetworkObject)
  │  └─ RightArm
  │     └─ RightHand (NetworkObject)
  │        └─ Axe (NetworkObject) [to] <──┐
  └─ Legs                                 ├ OK
                                [from] ───┘
```

### RightHand/Axe → Body/Axe

This is an **invalid** move because `Axe (NetworkObject)` is being moved under `Body` which is _not_ a `NetworkObject`. It does _not_ have a `NetworkObjectId` and it can _not_ be replicated and synced on the clients.

So, we tried to do this but it did _not_ succeed:

```
Sun
Tree
Camera
Player (NetworkObject)
  ├─ Head
  ├─ Body
  │                               [to] <──┐
  ├─ Arms                                 │
  │  ├─ LeftArm                           │
  │  │  └─ LeftHand (NetworkObject)       ├ INVALID
  │  └─ RightArm                          │
  │     └─ RightHand (NetworkObject)      │
  │        └─ Axe (NetworkObject) [from] ─┘
  └─ Legs
```

We'd get an error message in the logs similar to this:

```
Invalid parenting, NetworkObject moved under a non-NetworkObject parent
```

### RightHand/Axe → SceneRoot/Axe

This is a **valid** move because `Axe (NetworkObject)` is being moved to the scene root (no parent). Even though there is no `NetworkObjectId` to sync, empty/null parent _can_ be synced across the network on the clients.

Our up-to-date hierarchy is now looking like this:

```
Sun
Tree
Camera
Player (NetworkObject)
  ├─ Head
  ├─ Body
  ├─ Arms
  │  ├─ LeftArm
  │  │  └─ LeftHand (NetworkObject)
  │  └─ RightArm
  │     └─ RightHand (NetworkObject)
  │               [from] ───┐
  └─ Legs                   ├ OK
Axe (NetworkObject) [to] <──┘
```


:::important Limiting Non-Networked NetworkObject Transform Parenting
Rules outlined above are applied and enforced even while not networking (not hosting or connected). More specifically, if you were to try reparenting a `NetworkObject` under a non-`NetworkObject`, that'd be invalid and reverted even though you are not hosting or connected to a server.
:::

