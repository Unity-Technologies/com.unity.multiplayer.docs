---
id: object-spawning
title: Object Spawning
sidebar_label: Object Spawning
---
In Unity, you typically create a new game object using the `Instantiate` function. Creating a game object with `Instantiate` will only create that object on the local machine. `Spawning` in  Netcode for GameObjects (Netcode) means to instantiate and/or spawn the object that is synchronized between all clients by the server. 

## Network Prefabs

A network prefab is any unity prefab asset that has one `NetworkObject` component attached to a `GameObject` within the prefab. More commonly, the `NetworkObject` component is attached to the root `GameObject` of the prefab asset because this allows any child `GameObject` to have `NetworkBehaviour` components automatically assigned to the `NetworkObject`.  The reason for this is that a `NetworkObject` component attached to a `GameObject` will be assigned (associated with) any `NetworkBehaviour` components on:
- the same `GameObject` that the `NetworkObject` component is attached to
- any child or children of the `GameObject` that the `NetworkObject` is attached to.  

:::note
A caveat of the above two rules is when one of the children `GameObject`s also has a `NetworkObject` component assigned to it (a.k.a. "Nested NetworkObjects"). Because nested `NetworkObject` components are not permited in network prefabs, Netcode for GameObjects will notify you in the editor if you are trying to add more than one `NetworkObject` to a prefab and will not allow you to do this.
:::

When a `NetworkBehaviour` is assigned to a `NetworkObject`, the `NetworkObject.NetworkObjectId` is used to help determine which `NetworkBehaviour` component instance will receive an update to a `NetworkVariable` or where to invoke an RPC. A `NetworkObject` component can have one or more `NetworkBehaviour` components assigned to it.

### Registering a Network Prefab

One of the requirements to be able to spawn a network prefab instance is that it must be registered with the `NetworkManager` via the "Network Prefabs" property list.
The two steps to registering a network prefab with `NetworkManager`: 

1. Create a network prefab by creating a prefab with a `NetworkObject` component attached to the root `GameObject`   
1. Add your network prefab to the Network Prefabs list poperty of the `NetworkManager`.

### Spawning a Network Prefab (Overview)

Netcode uses a server authorative networking model so spawning netcode objects can only be done on a server or host. To spawn a network prefab, you must first create an instance of the network prefab and then invoke the spawn method on the `NetworkObject` component of the instance you created.  
_In most cases, you will want to keep the `NetworkObject` component attached to the root `GameObject` of the network prefab._

By default a newly spawned network prefab instance is owned by the server unless otherwise specified.

See [Ownership](networkobject.md#ownership) for more information.

The following is a basic example of how to spawn a network prefab instance (with the default server ownership):

```csharp
GameObject go = Instantiate(myPrefab, Vector3.zero, Quaternion.identity);
go.GetComponent<NetworkObject>().Spawn();
```

The `NetworkObject.Spawn` method takes 1 optional parameter that defaults to `true`:

```csharp
public void Spawn(bool destroyWithScene = true);
```

When you set the destroyWithScene property to `false` it will be treated the same as when you set [Object.DontDestroyOnLoad](https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html). Typically, you use this if you are loading a scene using [LoadSceneMode.Single](https://docs.unity3d.com/ScriptReference/SceneManagement.LoadSceneMode.html) parameter.

[Learn more about Netcode Scene Management here](scenemanagement/scene-management-overview.md)

## Destroying / Despawning

By default, a spawned network prefab instance that is destroyed on the server/host will be automatically destroyed on all clients.

When a client disconnects, all network prefab instances created during the network session will be destroyed on the client-side by default. If you do not want that to happen, set the `DontDestroyWithOwner` field on `NetworkObject` to true before despawning.

To do this at runtime:
```csharp
m_SpawnedNetworkObject.DontDestroyWithOwner = true;
m_SpawnedNetworkObject.Despawn();
```

To make this the default from the editor insepctor view:

![image](images/DontDestroyWithOwner.png)

As an alternative way, you can make the `NetworkObject.DontDestroyWithOwner` property default to `true` by setting it on the `NetworkObject` itself like in the above screenshot.

### Despawning
Only a server can despawn a `NetworkObject`, and the default despawn behavior is to destroy the associated GameObject. In order to despawn but not destroy a `NetworkObject`, you should call `NetworkObject.Despawn` and pass false as the parameter. Clients will always be notified and will mirror the despawn behavior.  If you despawn and destroy on the server then all clients will despawn and then destroy the `GameObject` that the `NetworkObjet` component is attached to.

On the client side, you should never call `Object.Destroy` on any `GameObject` with a `NetworkObject` component attached to it (this is not supported and will cause an exception to be thrown).  If you want to use a more client authority model, have the client with ownership invoke a ServerRpc to defer the despawning on server side.

The only way to despawn `NetworkObject` for a specific client is to use `NetworkObject.NetworkHide`.
See: [Object Visibility](object-visibility.md) for more information on this.

:::warning
If you have `GameObject` children, with `NetworkBehaviour` components attached, of a parent `GameObject`, with a `NetworkObject` component attached, you cannot disable the `GameObject` children prior to spawning or despawning. Doing so, in v1.0.0, could cause unexpected results and it is recommended to make sure all children are enabled in the hierarchy prior to spawning or despawning.
:::

## Dynamically Spawned Network Prefabs

Netcode for GameObjects uses the term "dynamically spawned" to convey that the `NetworkObject` is being spawned via user specific code.  Whereas a player or in-scene placed `NetworkObject` (with scene management enabled) is typically spawned by Netcode for GameObjects.  There are several ways to spawn a network prefab via code:

### Dynamic Spawning (non-pooled):

This type of dynamically spawned `NetworkObject` typically is a simple wrapper class that holds a reference to the prefab asset.  In the example below, the `NonPooledDynamicSpawner.PrefabToSpawn` property holds a reference to the network prefab:

```csharp
    public class NonPooledDynamicSpawner : NetworkBehaviour
    {
        public GameObject PrefabToSpawn;
        public bool DestroyWithSpawner;        
        private GameObject m_PrefabInstance;
        private NetworkObject m_SpawnedNetworkObject;

        public override void OnNetworkSpawn()
        {
            // Only the server spawns, clients will disable this component on their side
            enabled = IsServer;            
            if (!enabled || PrefabToSpawn == null)
            {
                return;
            }
            // Instantiate the GameObject Instance
            m_PrefabInstance = Instantiate(PrefabToSpawn);
            
            // Optional, this example applies the spawner's position and rotation to the new instance
            m_PrefabInstance.transform.position = transform.position;
            m_PrefabInstance.transform.rotation = transform.rotation;
            
            // Get the instance's NetworkObject and Spawn
            m_SpawnedNetworkObject = m_PrefabInstance.GetComponent<NetworkObject>();
            m_SpawnedNetworkObject.Spawn();
        }

        public override void OnNetworkDespawn()
        {
            if (IsServer && DestroyWithSpawner && m_SpawnedNetworkObject != null && m_SpawnedNetworkObject.IsSpawned)
            {
                m_SpawnedNetworkObject.Despawn();
            }
            base.OnNetworkDespawn();
        }
    }
```

Consumable and/or items that can be picked up by a player or NPC(i.e. a weapon, health, potion, etc.) would be some examples of when you might want to use non-pooled dynamically spawned `NetworkObjects`.

:::caution
While the NonPooledDynamicSpawner example is one of the simplest ways to spawn a NetworkObject, there is a memory allocation cost associated with instantiating and destroying the GameObject and all attached components.  This design pattern can sometimes be all you really need for the netcode game asset you are working with, and other times you might want to respawn/re-use the object instance.  When performance is a concern and you want to spawn more than just one `NetworkObject` during the lifetime of the spawner or want to repeatedly respawn a single `NetworkObject`, the less proccessor and memory allocation intensive technique is to use [pooled dynamic spawning](#pooled-dynamic-spawning).
:::

:::note
Really, the when we use the term "non-pooled" more often than not we are referring to the concept that a `GameObject` will be instantiated on both the server and the clients each time an instance is spawned.
:::

### Pooled Dynamic Spawning

Pooled dynamic spawning is when netcode objects (`GameObject` with one `NetworkObject` component) are not destroyed on the server or the client when despawned. Instead, specific components are just disabled (or the `GameObject` itself) when a netcode object is despawned.  A pooled dynamically spawned netcode object is typically instantiated during an already memory allocation heavy period of time (like when a scene is loaded or even at the very start of your application prior to even establishing a network connection).  Pooled dynamically spawned netcode objects are more commonly thought of as more than one netcode object that can be re-used without incurring the memory allocation and initialization costs.  However, you might also run into scenarios where you need just one dynamically spawned netcode object to be treated like a pooled dynmically spawned netcode object.

Fortunately, Netcode for GameObjects provides you with a way to be in control over the instatiation and destruction process for one or many netcode objects by via the `INetworkPrefabInstanceHandler` interface. Any `INetworkPrefabInstanceHandler`implementation should be registered with the `NetworkPrefabHandler`(for multiple netcode objects see [Object Pooling](../advanced-topics/object-pooling)) to accomplish this.

The easiest way to not destroy a network prefab instance is to have something, other than the instance itself, keeping a reference to the instance.  This way you can simply set the root `GameObject` to be inactive when it is despawned while still being able to set it active when the same network prefab type needs to be respawned.  Below is one example of how you can accomplish this for a single netcode object instance:

```csharp
public class SinglePooledDynamicSpawner : NetworkBehaviour, INetworkPrefabInstanceHandler
{
    public GameObject PrefabToSpawn;
    public bool SpawnPrefabAutomatically;

    private GameObject m_PrefabInstance;
    private NetworkObject m_SpawnedNetworkObject;


    private void Start()
    {
        // Instantiate our instance when we start (for both clients and server)
        m_PrefabInstance = Instantiate(PrefabToSpawn);

        // Get the NetworkObject component assigned to the prefab instance
        m_SpawnedNetworkObject = m_PrefabInstance.GetComponent<NetworkObject>();

        // Set it to be inactive
        m_PrefabInstance.SetActive(false);
    }

    private IEnumerator DespawnTimer()
    {
        yield return new WaitForSeconds(2);
        m_SpawnedNetworkObject.Despawn();
        StartCoroutine(SpawnTimer());
        yield break;
    }

    private IEnumerator SpawnTimer()
    {
        yield return new WaitForSeconds(2);
        SpawnInstance();
        yield break;
    }

    /// <summary>
    /// Invoked only on clients and not server or host
    /// INetworkPrefabInstanceHandler.Instantiate implementation
    /// Called when Netcode for GameObjects need an instance to be spawned
    /// </summary>
    public NetworkObject Instantiate(ulong ownerClientId, Vector3 position, Quaternion rotation)
    {
        m_PrefabInstance.SetActive(true);
        m_PrefabInstance.transform.position = transform.position;
        m_PrefabInstance.transform.rotation = transform.rotation;
        return m_SpawnedNetworkObject;
    }

    /// <summary>
    /// Client and Server side
    /// INetworkPrefabInstanceHandler.Destroy implementation
    /// </summary>
    public void Destroy(NetworkObject networkObject)
    {
        m_PrefabInstance.SetActive(false);
    }

    public void SpawnInstance()
    {
        if (!IsServer)
        {
            return;
        }

        if (m_PrefabInstance != null && m_SpawnedNetworkObject != null && !m_SpawnedNetworkObject.IsSpawned)
        {
            m_PrefabInstance.SetActive(true);
            m_SpawnedNetworkObject.Spawn();
            StartCoroutine(DespawnTimer());
        }
    }

    public override void OnNetworkSpawn()
    {
        // We register our network prefab and this NetworkBehaviour that implements the
        // INetworkPrefabInstanceHandler interface with the prefab handler
        NetworkManager.PrefabHandler.AddHandler(PrefabToSpawn, this);

        if (!IsServer || !SpawnPrefabAutomatically)
        {
            return;
        }

        if (SpawnPrefabAutomatically)
        {
            SpawnInstance();
        }
    }

    public override void OnNetworkDespawn()
    {
        if (m_SpawnedNetworkObject != null && m_SpawnedNetworkObject.IsSpawned)
        {
            m_SpawnedNetworkObject.Despawn();
        }
        base.OnNetworkDespawn();
    }

    public override void OnDestroy()
    {
        // This example destroys the
        if (m_PrefabInstance != null)
        {
            // Always deregister the prefab
            NetworkManager.Singleton.PrefabHandler.RemoveHandler(PrefabToSpawn);
            Destroy(m_PrefabInstance);
        }
        base.OnDestroy();
    }
}
```

You might run across a situation where you still want other components on the root `GameObject` of your network prefab instance to remain active.  Primarily, you want to be able to easily disable the components that would normally be active when the netcode object is considered spawned.

Below is an example of what a non-pooled friendly prefab might look like:

![image](images/non-pooled-friendly-prefab.png)

The issues you might run into with the above prefab hierarchy is that everything is on a single `GameObject`, and as such if you wanted to disable the `MeshRenderer` and the `NetworkObjectLabel`, [one of our classes in the Netcode for GameObjects test project](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/f0631414e5a5358a5ac7811d43273b1a82a60ca9/testproject/Assets/Scripts/NetworkObjectLabel.cs#L4), you would need to get those component types prior to disabling them (i.e. during `Start` or `OnNetworkSpawn` or get them when `OnNetworkDespawn` is invoked).

To reduce this level of complexity, a more "pooled dynamic spawning" friendly prefab heirarchy might look like this:

![image](images/pooled-friendly-prefab.png)

The `NetworkObject` sits at the root `GameObject` of the network prefab.  The child `GameObject`, SpawnedComponents, then contains everything that you might want to have disabled when the network prefab instance is not spawned:

![image](images/pooled-friendly-prefab-child.png)

This reduces the complexity down to setting the SpawnedComponents `GameObject` to inactive, which will also disable all of the components attached to it.

:::tip
Using this type of a hierarchical separation is useful in many ways (especially when you have a much more complex prefab).  For more complex prefabs, you could further expand this pattern into specific categories (i.e. visuals, physics, sound, etc) which will provide you with a more macrocosmic way to control enabling or disabling many different components without having to have references to all of them.
:::

## In-Scene Placed `NetworkObject` 

Any objects in the scene with active and spawned `NetworkObject` components will get automatically replicated by Netcode. There is no need to manually spawn them when scene management is enabled in the `NetworkManager`.  In-scene placed `NetworkObjects` should typically be used like a "static" netcode object, where the netcode object is typically spawned upon the scene being loaded on the server-side and synchronized with clients once they finish loading the same scene.

[Learn more about In-Scene Placed `NetworkObjects`](scenemanagement/inscene-placed-networkobjects)

Generally, there are **two** modes that define how an in-scene placed `NetworkObject` is synchronized.
- Soft Synchronization (Scene Management enabled)
- Prefab Synchronization  (Scene Management disabled)

### Soft Synchronization

`SoftSync` or "Soft Synchronization" is a term you might run across if you run into any issue with in-scene placed `NetworkObjects`. Soft synchronization only occurs if scene management is enabled in the `NetworkManager` properties.  If you receive a "soft synchronization error", then this typically means that a client could not locate the same in-scene placed `NetworkObject` after loading a scene.

:::note
The benefit of using scene management is that you don't have to register every in-scene placed `NetworkObject` with the `NetworkManager` as a network prefab, and it handles synchronizing clients to your current game state.
:::

### Prefab Synchronization

`PrefabSync` or "Prefab Synchronization" is used if scene management is disabled in the `NetworkManager`.  With prefab synchronization, every in-scene placed `NetworkObject` has to be a network prefab and must be registered with `NetworkPrefabs` list. When a client starts, Netcode will destroy all existing in-scene placed `NetworkObject`s and spawn its corresponding prefab from the `NetworkPrefabs` list instead. This also means that you will have to implement your own scene manager and handle how you synchronize clients when they join a network session.

**PrefabSync is ONLY recommended for advanced development and/or multi project setups**.


