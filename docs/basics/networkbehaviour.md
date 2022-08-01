---
id: networkbehavior
title: NetworkBehaviour
---

:::note
Both the `NetworkObject` and `NetworkBehaviour` components require the use of specialized structures in order to be serialized and used with `RPC`s and `NetworkVariables`:

For `NetworkObject`s use the [NetworkObjectReference](../api/Unity.Netcode.NetworkObjectReference).

For `NetworkBehaviour`s use the NetworkBehaviourReference<!-- (NO API LINK AVAILABLE YET)-->.
:::

## NetworkBehaviour

`NetworkBehaviour`s can use `NetworkVariable`s and `RPC`s to synchronize state and send messages over the network.  In order to replicate any netcode aware properties or send/receive RPCs a `GameObject` must have a [NetworkObject component](/basics/networkobject.md) and at least one `NetworkBehaviour` component. A `NetworkBehaviour` requires a `NetworkObject` component on the same relative `GameObject` or on a parent of the `GameObject` with the `NetworkBehaviour` component assigned to it.  If you add a `NetworkBehaviour` to a GameObject that does not have a `NetworkObject` (or any parent), then Netcode for GameObjects will automatically add a `NetworkObject` component to the `GameObject` in which the `NetworkBehaviour` was added.

[`NetworkBehaviour`](../api/Unity.Netcode.NetworkBehaviour.md) is an abstract class that derives from [`MonoBehaviour`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) and is primarily used to create unique netcode/game logic.

`NetworkBehaviours` can contain RPC methods and `NetworkVariables`. When you call an RPC function, the function is not called locally. Instead a message is sent containing your parameters, the `networkId` of the `NetworkObject` associated with the same GameObject (or child) that the `NetworkBehaviour` is assigned to, and the "index" of the `NetworkObject` relative `NetworkBehaviour` (i.e. a `NetworkObject` could have several NetworkBehaviours, the index communicates "which one"). 

:::note
It is important that the `NetworkBehaviour`s on each `NetworkObject` remains the same for the server and any client connected. When using multiple projects, this becomes especially important so the server doesn't try to call a client RPC on a `NetworkBehaviour` that might not exist on a specific client type (or set a NetworkVariable, etc).
:::

### Pre-Spawn and Monobehaviour Updates

Since `NetworkBehaviour`s derive from MonoBehaviour, the `FixedUpdate`, `Update`, and `LateUpdate` methods, if defined, will still be invoked on `NetworkBehaviour`s even when they are not yet spawned.  In order to "exit early" to avoid executing netcode specific code within the update methods, you can check the local `NetworkBehaviour.IsSpawned` flag and return if it is not yet set like the below example:

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

### Spawning

`OnNetworkSpawn` is invoked on each `NetworkBehaviour` associatd with a `NetworkObject` spawned.  This is where all netcode related initialization should occur.
You can still use `Awake` and `Start` to do things like finding components and assigning them to local properties, but if `NetworkBehaviour.IsSpawned` is false do not expect netcode distinguishing properties (like IsClient, IsServer, IsHost, etc) to be accurate while within the those two methods (Awake and Start).
For reference purposes, below is a table of when `NetworkBehaviour.OnNetworkSpawn` is invoked relative to the `NetworkObject` type:

Dynamically Spawned | In-Scene Placed
------------------- | ---------------
Awake               | Awake
OnNetworkSpawn      | Start
Start               | OnNetworkSpawn

#### Dynamically Spawned NetworkObjects

For dynamically spawned `NetworkObjects` (instantiating a network prefab during runtime) the `OnNetworkSpawn` method is invoked **before** the `Start` method is invoked.  So, it is important to be aware of this because finding and assigning components to a local property within the `Start` method exclusively will result in that property not being set in a `NetworkBehaviour` component's `OnNetworkSpawn` method when the `NetworkObject` is dynamically spawned.  To circumvent this issue, you could have a common method that initializes the components and is invoked both during the `Start` method and the `OnNetworkSpawned` method like the code example below:

```csharp
public class MyNetworkBehaviour : NetworkBehaviour
{
    private MeshRenderer m_MeshRenderer;
    private void Start()
    {
        Initialize();
    }

    private void Initialize()
    {
        if (m_MeshRenderer == null)
        {
            m_MeshRenderer = FindObjectOfType<MeshRenderer>();
        }
    }

    public override void OnNetworkSpawn()
    {
        Initialize();
        // Do things with m_MeshRenderer
        
        base.OnNetworkSpawn();
    }
}
```

#### In-Scene Placed NetworkObjects

For in-scene placed `NetworkObjects`, the `OnNetworkSpawn` method is invoked **after** the `Start` method since the SceneManager scene loading process controls when the `NetworkObject`s are instantiated.  The previous code example demonstrates how one can design a `NetworkBehaviour` that assures both in-scene placed and dynamically spawned `NetworkObject`s will have assigned the required properties before attempting to access them. Of course, you can always make the decision to have in-scene placed `NetworkObjects` contain unique components to that of dynamically spawned `NetworkObjects`.  It all depends upon what usage pattern works best for your project.

### De-Spawning

`OnNetworkDespawn` is invoked on each `NetworkBehaviour` associated with a `NetworkObject` when it is de-spawned.  This is where all netcode "despawn cleanup code" should occur, but is not to be confused with destroying.  Despawning occurs before anything is destroyed.

### Destroying

Each 'NetworkBehaviour' has a virtual 'OnDestroy' method that can be overridden to handle clean up that needs to occur when you know the `NetworkBehaviour` is being destroyed.

:::important
If you override the virtual 'OnDestroy' method it is important to alway invoke the base like such:

```csharp
        public override void OnDestroy()
        {
            // Clean up your NetworkBehaviour
            
            // Always invoked the base 
            base.OnDestroy();
        }
```

`NetworkBehaviour` handles other destroy clean up tasks and requires that you invoke the base `OnDestroy` method to operate properly.
:::
