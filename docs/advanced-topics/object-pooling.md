---
id: object-pooling
title: Object Pooling
---

Object pooling is useful for frequently used objects, such as projectiles, and is a way to increase the application's overall performance by decreasing the amount of objects being created over time.  Netcode for GameObjects (Netcode) provides built-in support for Object Pooling where a `NetworkObject`'s default destroy and instantiate handlers can be overridden.  

See [Introduction to Object Pooling](https://learn.unity.com/tutorial/introduction-to-object-pooling) to learn more about the importance of pooling objects.

## NetworkPrefabInstanceHandler

You can create your own spawn handler by implementing the `INetworkPrefabInstanceHandler` interface and registering it with the `NetworkPrefabHandler`.

```csharp
    public interface INetworkPrefabInstanceHandler
    {
        NetworkObject Instantiate(ulong ownerClientId, Vector3 position, Quaternion rotation);
        void Destroy(NetworkObject networkObject);
    }
```

Once your implementation is registered, Netcode will use your implementation's `Instantiate` and `Destroy` methods in place of the default spawn handlers for the `NetworkObject` prefab you specify during the registration process. Your `NetworkObject` prefab is uniquely identified by its `GlobalObjectIdHash` value. Because a Server (or host) controls the spawning and despawning of `NetworkObject`s, the instantiate method will not be invoked.  All clients (excluding a Host) will have the `Instantiate` method invoked if the `INetworkPrefabInstanceHandler` implementation is registered with `NetworkPrefabHanlder` (`NetworkManager.PrefabHandler`) and a Host or Server spawns the registered/associated `NetworkObject` that is uniquely identified by its `GlobalObjectIdHash` value.

## Basic Pooling Example

In the following basic pooling example, the `m_ObjectToPool` property is the prefab we want to pool.  We register the `NetworkPrefabHandlerObjectPool` class (that implements the `INetworkPrefabInstanceHandler` interface) using the `m_ObjectToPool`'s `GameObject` with a reference to the current instance of `NetworkPrefabHandlerObjectPool`.  We also take into account any `NetworkManager` defined `NetworkPreab` overrides by calling `NetworkManager.GetNetworkPrefabOverride` while both assigning and passing in our `m_ObjectToPool`.  

<details open>
<summary>Click to show/hide the Code.

</summary>

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Netcode;

public class NetworkPrefabHandlerObjectPool : NetworkBehaviour, INetworkPrefabInstanceHandler
{
    [SerializeField]
    private GameObject m_ObjectToPool;

    [SerializeField]
    private int m_ObjectPoolSize = 15;

    [SerializeField]
    [Range(1, 5)]
    private int m_SpawnsPerSecond = 2;

    private List<GameObject> m_ObjectsPool;

    private bool m_IsSpawningObjects;

    public override void OnNetworkSpawn()
    {
        if (NetworkManager && NetworkManager.PrefabHandler != null)
        {
            NetworkManager.PrefabHandler.AddHandler(m_ObjectToPool, this);
        }

        // This assures we have the right prefab
        if (IsClient)
        {
            m_ObjectToPool = NetworkManager.GetNetworkPrefabOverride(m_ObjectToPool);
        }

        if (m_ObjectToPool != null)
        {
            m_ObjectsPool = new List<GameObject>();
            for (int i = 0; i < m_ObjectPoolSize; i++)
            {
                InstantiatePoolObject().SetActive(false);
            }
        }

        // Host and Server spawn the objects
        if (IsServer)
        {
            StartCoroutine(SpawnObjects());
        }
    }

    private GameObject InstantiatePoolObject()
    {
        m_ObjectsPool.Add(Instantiate(m_ObjectToPool));
        return m_ObjectsPool[m_ObjectsPool.Count - 1];
    }

    private GameObject GetNextSpawnObject()
    {
        foreach (var gameObject in m_ObjectsPool)
        {
            if (!gameObject.activeInHierarchy)
            {
                return gameObject;
            }
        }
        //We are out of objects, expand our pool by 1 more NetworkObject
        return InstantiatePoolObject();
    }

    public NetworkObject Instantiate(ulong ownerClientId, Vector3 position, Quaternion rotation)
    {
        var gameObject = GetNextSpawnObject();
        gameObject.SetActive(true);
        gameObject.transform.position = position;
        gameObject.transform.rotation = rotation;
        return gameObject.GetComponent<NetworkObject>();
    }

    private void OnDisable()
    {
        if (NetworkManager && NetworkManager.PrefabHandler != null)
        {
            NetworkManager.PrefabHandler.RemoveHandler(m_ObjectToPool);
        }
    }

    public void Destroy(NetworkObject networkObject)
    {
        if (m_ObjectsPool.Contains(networkObject.gameObject))
        {
            networkObject.gameObject.SetActive(false);
        }
    }

    private IEnumerator SpawnObjects()
    {
        //Exit if we are a client or we happen to not have a NetworkManager
        if (NetworkManager == null || (NetworkManager.IsClient && !NetworkManager.IsHost && !NetworkManager.IsServer))
        {
            yield return null;
        }

        m_IsSpawningObjects = true;

        var entitySpawnUpdateRate = 1.0f;
        while (m_IsSpawningObjects)
        {
            entitySpawnUpdateRate = 1.0f / (float)m_SpawnsPerSecond;

            GameObject go = GetNextSpawnObject();
            if (go != null)
            {
                go.SetActive(true);
                go.transform.position = transform.position;

                float ang = Random.Range(0.0f, 2 * Mathf.PI);
                go.GetComponent<GenericPooledObjectBehaviour>().SetDirectionAndVelocity(new Vector3(Mathf.Cos(ang), 0, Mathf.Sin(ang)), 4);

                var no = go.GetComponent<NetworkObject>();
                if (!no.IsSpawned)
                {
                    no.Spawn(true);
                }
            }
            yield return new WaitForSeconds(entitySpawnUpdateRate);
        }
    }
}

```
</details>

## Advanced Pooling Example

The next example is more advanced.  The `m_ObjectToOverride` property is the prefab we will replace with one of the `m_ObjectOverrides` prefabs.  As such, we register the `NetworkPrefabHandlerObjectPoolOverride` class (that implements the `INetworkPrefabInstanceHandler` interface) using the `m_ObjectToOverride`.  We then have to handle a special case scenario.  

Since a Host is actually both a client and a server, we need to pre-register the link (association) between the `m_ObjectToOverride` prefab and the `m_ObjectOverrides` prefabs.  We do this by calling `NetworkManager.PrefabHandler.RegisterHostGlobalObjectIdHashValues` and passing in the `m_ObjectToOverride` and the `m_ObjectOverrides` list.  For both the Client and Host, we will create a pool for each prefab type in the m_ObjectOverrides list. If we are just a server (i.e. not a Host), then we only need to create a large pool containing only one prefab type:  `m_ObjectToOverride`. 

 We included this example in order to show that the common link between all instances is the `m_ObjectToOverride`'s GlobalObjectIdHash value.  The `m_ObjectToOverride`'s GlobalObjectIdHash value is always used to signal the creation or destruction for all messages pertaining this prefab handler override.      

<details open>
<summary>Click to show/hide the Code.

</summary>


```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Netcode;

public class NetworkPrefabHandlerObjectPoolOverride : NetworkBehaviour, INetworkPrefabInstanceHandler
{
    private GameObject m_ObjectToPool;

    [SerializeField]
    private GameObject m_ObjectToOverride;

    [SerializeField]
    private List<GameObject> m_ObjectOverrides;

    [SerializeField]
    private int m_ObjectPoolSize = 15;

    [SerializeField]
    [Range(1, 5)]
    private int m_SpawnsPerSecond = 2;

    private Dictionary<int, List<GameObject>> m_ObjectsPool;
    private List<string> m_NameValidation;

    private bool m_IsSpawningObjects;

    public override void OnNetworkSpawn()
    {
        // Register your object to be overridden (m_ObjectToOverride) with this INetworkPrefabInstanceHandler implementation
        if (NetworkManager && NetworkManager.PrefabHandler != null)
        {
            NetworkManager.PrefabHandler.AddHandler(m_ObjectToOverride, this);
        }

        // Start with the base object to be overridden (i.e. Server mode will always use this)
        m_ObjectToPool = m_ObjectToOverride;

        // Host and Client need to do an extra step
        if (IsClient)
        {
            // Makes sure we have the right prefab to create a pool for (i.e. Clients and Hosts)
            m_ObjectToPool = NetworkManager.GetNetworkPrefabOverride(m_ObjectToPool);

            // Host Only:
            // Since the host will be spawning overrides, we need to manually create the link between the
            // m_ObjectToOverride and the objects that could override it (i.e. m_ObjectOverrides)
            if (IsHost)
            {
                // While this seems redundant, we could theoretically have several objects that we could potentially be spawning
                NetworkManager.PrefabHandler.RegisterHostGlobalObjectIdHashValues(m_ObjectToOverride, m_ObjectOverrides);
            }
        }

        m_ObjectsPool = new Dictionary<int, List<GameObject>>();
        m_NameValidation = new List<string>();
        for (int x = 0; x < m_ObjectOverrides.Count; x++)
        {
            // If we are a server, then we just create a big pool of the same base override object
            // otherwise for Host and Client we use the list of object overrides
            var objectIndex = (IsServer && !IsHost) ? 0 : x;
            var objectToPool = (IsServer && !IsHost) ? m_ObjectToOverride : m_ObjectOverrides[objectIndex];

            if (!m_ObjectsPool.ContainsKey(objectIndex))
            {
                m_ObjectsPool.Add(objectIndex, new List<GameObject>());
            }

            for (int y = 0; y < m_ObjectPoolSize; y++)
            {
                var newObject = Instantiate(objectToPool);

                // One way to verify this object exists
                // You could also make this a dictionary that linked to the actual GameObject instance
                newObject.name += m_ObjectsPool[objectIndex].Count.ToString();
                m_NameValidation.Add(newObject.name);

                // Make sure we start this object as inactive
                newObject.SetActive(false);
                m_ObjectsPool[objectIndex].Add(newObject);
            }
        }

        // Host and Server spawn the objects
        if (IsServer)
        {
            StartCoroutine(SpawnObjects());
        }
    }

    private GameObject GetNextSpawnObject(int synchronizedIndex = -1)
    {
        // If we are just a server use index 0, otherwise we are a host or client so get a random override object to spawn
        var indexType = IsServer && !IsHost ? 0 : Random.Range(0, m_ObjectOverrides.Count - 1);

        if (m_ObjectsPool.ContainsKey(indexType))
        {
            foreach (var gameObject in m_ObjectsPool[indexType])
            {
                if (!gameObject.activeInHierarchy)
                {
                    return gameObject;
                }
            }
            // We are out of objects, get the type of object we need to instantiate and add to the pool
            var objectToPool = (IsServer && !IsHost) ? m_ObjectToOverride : m_ObjectOverrides[indexType];

            // Expand our pool by 1 more NetworkObject
            var newObject = Instantiate(objectToPool);
            var genericObjectPooledBehaviour = NetworkObject.GetComponent<GenericPooledObjectBehaviour>();
            genericObjectPooledBehaviour.SyncrhonizedObjectTypeIndex = (IsServer && !IsHost) ? Random.Range(0, m_ObjectOverrides.Count - 1) : indexType;
            m_ObjectsPool[indexType].Add(newObject);
            return newObject;
        }
        // If requesting a bad index return null
        return null;
    }

    public void OnSynchronizeWrite(NetworkWriter networkWriter, NetworkObject networkObject)
    {
        var genericObjectPooledBehaviour = NetworkObject.GetComponent<GenericPooledObjectBehaviour>();
        networkWriter.WriteInt32Packed(genericObjectPooledBehaviour.SyncrhonizedObjectTypeIndex);
    }

    public NetworkObject Instantiate(ulong ownerClientId, Vector3 position, Quaternion rotation)
    {
        var gameObject = GetNextSpawnObject();
        gameObject.SetActive(true);
        gameObject.transform.position = position;
        gameObject.transform.rotation = rotation;
        return gameObject.GetComponent<NetworkObject>();
    }

    public void Destroy(NetworkObject networkObject)
    {
        if (m_NameValidation.Contains(networkObject.gameObject.name))
        {
            networkObject.gameObject.SetActive(false);
        }
    }

    /// <summary>
    ///  Spawns the objects.
    /// </summary>
    /// <returns>IEnumerator</returns>
    private IEnumerator SpawnObjects()
    {
        //Exit if we are a client or we happen to not have a NetworkManager
        if (NetworkManager == null || (NetworkManager.IsClient && !NetworkManager.IsHost && !NetworkManager.IsServer))
        {
            yield return null;
        }

        m_IsSpawningObjects = true;

        var entitySpawnUpdateRate = 1.0f;

        while (m_IsSpawningObjects)
        {
            entitySpawnUpdateRate = 1.0f / (float)m_SpawnsPerSecond;

            GameObject go = GetNextSpawnObject();
            if (go != null)
            {
                go.SetActive(true);
                go.transform.position = transform.position;

                float ang = Random.Range(0.0f, 2 * Mathf.PI);
                go.GetComponent<GenericPooledObjectBehaviour>().SetDirectionAndVelocity(new Vector3(Mathf.Cos(ang), 0, Mathf.Sin(ang)), 4);

                var no = go.GetComponent<NetworkObject>();
                if (!no.IsSpawned)
                {
                    no.Spawn(true);
                }
            }
            yield return new WaitForSeconds(entitySpawnUpdateRate);
        }
    }
}
```
</details>

Registering `INetworkPrefabInstanceHandler` implementations with the `NetworkPrefabHandler` simplifies object pooling.  It also provides the option to have different versions for the same `NetworkObject` instance as it is viewed by Clients (including the Host). Additionally, you do not need to register the network prefabs assigned to the `m_ObjectOverrides` list with the `NetworkManager` since each local overriding prefab instance is linked by the `NetworkObject.NetworkObjectId`.  

:::caution

You **must** register the prefab to be overridden (i.e. `m_ObjectToOverride` in the above example).  While this provides many possibilities, you must also take caution when using multiple prefabs as overrides by making sure that every variation has the same associated `NetworkVariables` and `RPC` implementations as all variations **must be identical** in this regard when it comes to anything that could be communicated between the client(s) and server. Otherwise, you could end up with messages being sent to override instances that don't know how to handle them!  

:::

When using more than one network prefab, it is important to understand that each client determines what prefab they will be using and will not be synchronized across other clients. This feature is primarily to be used for things like platform specific Network Prefabs where things like collision models or graphics related assets might need to vary between platforms.

You can find full working versions of the above two examples in the [testproject/Assets/Samples/PrefabPool](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/develop/testproject/Assets/Samples/PrefabPool) repository directory.

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Noel Stephens, Unity. 
:::
