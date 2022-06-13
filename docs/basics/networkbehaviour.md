---
id: networkbehavior
title: NetworkBehaviour
---

:::note
Both the `NetworkObject` and `NetworkBehaviour` components require the use of specialized structures in order to be serialized and used with `RPC`s and `NetworkVariables`:<br>
For `NetworkObject`s use the [NetworkObjectReference](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkObjectReference).<br>
For `NetworkBehaviour`s use the [NetworkBehaviourReference](NO API LINK AVAILABLE).
:::

## NetworkBehaviour
`NetworkBehaviour`s can use `NetworkVariable`s and `RPC`s to synchronize state and send messages over the network.  In order to replicate any netcode aware properties or send/receive RPCs a GameObject must have a [NetworkObject component](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject) and at least one NetworkBehaviour component. A `NetworkBehaviour` requires a NetworkObject component on the same relative GameObject or on a parent of the GameObject with the `NetworkBehaviour` component assigned to it.  If you add a `NetworkBehaviour` to a GameObject that does not have a NetworkObject (or any parent), then Netcode for GameObjects will automatically add a `NetworkObject` component to the GameObject that the `NetworkBehaviour` was added.

[`NetworkBehaviour`](../api/Unity.Netcode.NetworkBehaviour.md) is an abstract class that derives from [`MonoBehaviour`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) and is primarily used to create unique netcode/game logic to the derived `NetworkBehaviour` child class.

`NetworkBehaviours` can contain RPC methods and `NetworkVariables`. When you call an RPC function, the function is not called locally. Instead a message is sent containing your parameters, the `networkId` of the `NetworkObject` associated with the same GameObject (or child) that the `NetworkBehaviour` is assigned to, and the "index" of the `NetworkObject` relative `NetworkBehaviour` (i.e. a `NetworkObject` could have several NetworkBehaviours, the index communicates "which one"). 

:::note
It is important that the `NetworkBehaviour`s on each `NetworkObject` remains the same for the server and any client connected. When using multiple projects, this becomes especially important to know that the server isn't going to try and call a client RPC on a `NetworkBehaviour` that might not exist on a specific client type (or set a NetworkVariable, etc).
:::

### Pre-Spawn Updates
Since NetworkBehaviours derive from MonoBehaviour, the `FixedUpdate`, `Update`, and `LateUpdate` methods will still be invoked on `NetworkBehaviour`s even when they are not yet spawned.  In order to "exit early" within the update methods, you can check the local `NetworkBehaviour.IsSpawned` flag and return if it is not yet set like the below example:
```csharp
private void Update()
{
    if (!IsSpawned)
    {
        return;
    }
    // Netcode specific logic below here
}
```
Each `NetworkBehaviour` is always associated with a `NetworkObject`.  You can have multiple unique `NetworkBehavior`s on the same object and on any child object. If you add a `NetworkBehaviour` to a `GameObject` and there is no `NetworkObject` on the current or parent `GameObject`, then Netcode for GameObjects will autimatically add a NetworkObject (while in the editor) to the GameObject that just had a `NetworkBehaviour` added to it.  

### Spawning
`OnNetworkSpawn` is invoked on each `NetworkBehaviour` associatd with a `NetworkObject` spawned.  This is where all netcode related initialization should occur.
:::note
You can still use `Awake` and `Start` to do things like finding components and assigning them to local properties, but if `NetworkBehaviour.IsSpawned` is false do not expect netcode distinguishing properties (like IsClient, IsServer, IsHost, etc) to be accurate while within the those two methods (Awake and Start). For dynamically spawned `NetworkObjects` (instantiating a network prefab during runtime) the `OnNetworkSpawn` method is invoked **before** the `Awake` and `Start` methods are invoked.  The exception to this rule are in-scene placed `NetworkObject`s (prefab instances within a scene or a GameObject with a `NetworkObjet` and `NetworkBehaviour`(s) defined within a scene).  For in-scene placed `NetworkObjects`, the `OnNetworkSpawn` method is invoked **after** the `Awake` and `Start` methods since the SceneManager scene loading process controls when the `NetworkObject`s are instantiated.
:::

### De-Spawning
`OnNetworkDespawn` is invoked on each `NetworkBehaviour` associated with a `NetworkObject` de-spawned.  This is where all netcode "despawn cleanup" should occur.
Despawning occurs before anything is destroyed.

