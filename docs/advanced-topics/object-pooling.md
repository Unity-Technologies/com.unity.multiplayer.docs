---
id: object-pooling
title: Object Pooling
---

The MLAPI provides built-in support for Object Pooling, which allows you to override the default MLAPI destroy and spawn handlers with your own logic.

This allows you to store destroyed network objects in a pool to reuse later. This is useful for frequently used objects, such as bullets, and can be used to increase the application's overall performance.

See [Introduction to Object Pooling](https://learn.unity.com/tutorial/introduction-to-object-pooling) to learn more about the importance of pooling objects.

## NetworkPrefabInstanceHandler

You can register your own spawn handlers by including the `INetworkPrefabInstanceHandler` interface and registering with the `NetworkPrefabHandler`.  
```csharp
    public interface INetworkPrefabInstanceHandler
    {
        NetworkObject HandleNetworkPrefabSpawn(ulong ownerClientId, Vector3 position, Quaternion rotation);
        void HandleNetworkPrefabDestroy(NetworkObject networkObject);
    }
```
MLAPI will use the `HandleNetworkPrefabSpawn` and `HandleNetworkPrefabDestroy` methods in place of default spawn handlers for the `NetworkObject` used during the registration process.  In the following implementation example, the `m_OriginalPrefab` property is the prefab we will replace with the `m_TargetPrefabToSpawn`.  As such, we register the `CustomPrefabHandlerExample` class (that implements the `INetworkPrefabInstanceHandler` interface) using the `m_OriginalPrefab`'s `NetworkObject` with a reference to the current instance of `CustomPrefabHandlerExample`.

```csharp
using System.Collections.Generic;
using UnityEngine;
using MLAPI;
using MLAPI.Spawning;

public class CustomPrefabHandlerExample : NetworkBehaviour, INetworkPrefabInstanceHandler
{
    [SerializeField]
    private GameObject m_OriginalPrefab;

    [SerializeField]
    private GameObject m_TargetPrefabToSpawn;

    [SerializeField]
    private int m_ObjectPoolSize = 15;

    private List<NetworkObject> m_NetworkObjectsPool;

    private void Start()
    {
        if (NetworkManager && NetworkManager.PrefabHandler != null)
        {
            NetworkManager.PrefabHandler.AddHandler(m_OriginalPrefab.GetComponent<NetworkObject>(), this);
        }
    }

    public override void NetworkStart()
    {
        if (m_OriginalPrefab != null && m_TargetPrefabToSpawn != null)
        {
            m_NetworkObjectsPool = new List<NetworkObject>();
            for (int i = 0; i < m_ObjectPoolSize; i++)
            {
                InstantiateNewNetworkObject();
            }
        }
    }

    private NetworkObject InstantiateNewNetworkObject()
    {
        var gameObject = Instantiate(m_TargetPrefabToSpawn); 
        var networkObject = gameObject.GetComponent<NetworkObject>();
        gameObject.SetActive(false);
        m_NetworkObjectsPool.Add(networkObject);
        return networkObject;
    }

    private NetworkObject GetNextSpawnObject()
    {
        foreach (var networkObject in m_NetworkObjectsPool)
        {
            if (!networkObject.IsSpawned)
            {
                return networkObject;
            }
        }
        //We are out of objects, expand our pool by 1 more NetworkObject
        return InstantiateNewNetworkObject();
    }

    public NetworkObject HandleNetworkPrefabSpawn(ulong ownerClientId, Vector3 position, Quaternion rotation)
    {
        var networkObject = GetNextSpawnObject();
        networkObject.gameObject.SetActive(true);
        networkObject.transform.position = position;
        networkObject.transform.rotation = rotation;
        return networkObject;
    }

    public void HandleNetworkPrefabDestroy(NetworkObject networkObject)
    {
        if (m_NetworkObjectsPool.Contains(networkObject))
        {
            networkObject.gameObject.SetActive(false);
        }
    }
}
```

Registering your own spawn handlers allows you to pool all networked objects on clients as they are destroyed and spawned on your clients.

To pool objects on the server side, do not use `Destroy`. Use `NetworkObject.Despawn` first, then manually pool the object.
