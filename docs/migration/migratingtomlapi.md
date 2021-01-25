---
id: migratingtomlapi
title: Migration Guide
sidebar_label: Migration Guide
---

This guide give you a step by step guide to migrating your project from Unet to MLAPI. The migration should be straightforward for most projects.

:::important
You should review the information on the Deprecations page to see if your project will be impacted.
:::

### Backup

It is recommended that you back up your project before proceeding with the migration.

### Install MLAPI and restart Unity.

See [Installion](../getting-started/installation.md) for more information.

### Invoking
Invoking in the MLAPI is done by calling the `Invoke` method on the ``NetworkedBehaviour`` instead of calling the method directly like in UNET.

See [NetworkedBehaviour](../core-components/networked-behaviour.md) for more information.

### Replace NetworkManager 

UNET’s `NetworkManager` is called `NetworkingManager` in the MLAPI and works in a similar way.


#### UNET Example

```csharp
NetworkManager.Singleton.StartServer();      //or
NetworkManager.Singleton.StartHost();        //or
NetworkManager.Singleton.StartClient();
```

#### MLAPI Example
```csharp
NetworkingManager.Singleton.StartServer();      //or
NetworkingManager.Singleton.StartHost();        //or
NetworkingManager.Singleton.StartClient();
```
See [NetworkingManager](../core-components/networking-manager.md) for more information.
### Replace NetworkManagerHUD 

UNET’s `NetworkBehaviour` is called `NetworkedBehaviour` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### Replace NetworkIdentity => NetworkedObject

UNET’s `NetworkIdentity` is called `NetworkedBehaviour` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### Replace UNet NetworkTransform => NetworkedTransform

UNET’s `NetworkTransform` is called `NetworkedTransform` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### Replace  UNet NetworkAnimator => NetworkedAnimator

UNET’s `NetworkAnimator` is called `NetworkedAnimator` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### Replace NetworkBehaviour

UNET’s `NetworkBehaviour` is called `NetworkedBehaviour` in the MLAPI and works in a similar way.

##### UNET Example
```csharp
public class MyUnetClass : NetworkBehaviour
{
    [SyncVar]
    public float MySyncFloat;
    public void Start()
    {
        if (isClient)
        {
            CmdExample(10f);
        }
        else if (isServer)
        {
            RpcExample(10f);
        }
    }
    [Command]
    public void CmdExample(float x)
    {
        Debug.Log(“Runs on server”);
    }
    [ClientRpc]
    public void RpcExample(float x)
    {
        Debug.Log(“Runs on clients”);
    }
}
```
##### MLAPI Example

```csharp
public class MyMLAPIExample : NetworkedBehaviour
{
    public NetworkedVar<float> MyNetworkedVar;
    public override void NetworkedStart()
    {
        InvokeClientRpcOnEveryone(ClientRpcExample, 10f);
        InvokeServerRpc(ServerRpcExample, 10f);
    }
    [ServerRPC]
    public void ServerRpcExample(float x)
    {
        Debug.Log(“Runs on server”);
    }
    [ClientRPC]
    public void ClientRpcExample(float x)
    {
        Debug.Log(“Runs on clients”);
    }
}
```

See [NetworkedBehaviour](../core-components/networked-behaviour.md) for more information. 

##### NetworkedStart
In the MLAPI, RPCs, VarChanges etc will not be replicated if they are done before the `NetworkedStart` method is called. The `NetworkedStart` method is called when the `NetworkedObject` is replicated.

##### UNET Example

##### MLAPI Example
```csharp
public class MyMLAPIExample : NetworkedBehaviour
{
    public override NetworkedStart()
    {
        // This object is now spawned across the network and RPC's can be sent.
    }
}
```


### Replace SyncVar => NetworkedVar

UNET’s `SyncVar` is replaced by `NetworkedVar` in the MLAPI which works in a similar way.

##### UNET Example

```csharp
public class SpaceShip : NetworkBehaviour
{
    [SyncVar]
    public int health;

    [SyncVar]
    public string playerName;
}
```
##### MLAPI Example

```csharp
private NetworkedVar<float> myFloat = new NetworkedVar<float>(5.0f);

void MyUpdate()
{
    myFloat.Value += 30;
}

void ListenChanges()
{
    myFloat.OnValueChanged += valueChanged;
}

void valueChanged(float prevF, float newF){
    Debug.Log("myFloat went from " + prevF + " to " + newF);
}
```
See [NetworkedVar](../mlapi-basics/networkedvar.md) for more information.


### Replace SyncList => NetworkedList

UNET’s `SyncList` is called `NetworkedList` in the MLAPI and works in a similar way.


##### UNET Example

##### MLAPI Example

### Replace Command/ClientRPC => Standard RPC

UNET’s Command/ClientRPC is replaced with  Server/ClientRPC in the MLAPI which works in a similar way.

##### UNET Example
```csharp
    [Command]
    public void CmdExample(float x)
    {
        Debug.Log(“Runs on server”);
    }
    [ClientRpc]
    public void RpcExample(float x)
    {
        Debug.Log(“Runs on clients”);
    }
```
##### MLAPI Example
```csharp
    [ServerRPC]
    public void ServerRpcExample(float x)
    {
        Debug.Log(“Runs on server”);
    }
    [ClientRPC]
    public void ClientRpcExample(float x)
    {
        Debug.Log(“Runs on clients”);
    }
```

See [Messaging System](../mlapi-basics/messaging-system.md) for more information.

### Replace OnServerAddPlayer => ConnectionApproval 

UNET’s `OnServerAddPlayer` is called `ConnectionApproval` in the MLAPI and works in a similar way.


##### UNET Example

##### MLAPI Example

### Replace NetworkServer.Spawn => NetworkingManager.Spawn

UNET’s `NetworkServer.spawn` is replaced with `NetworkingManager.spawn` and works in a similar way. 

##### UNET Example

##### MLAPI Example
```csharp
GameObject go = Instantiate(myPrefab, Vector3.zero, Quaternion.identity);
go.GetComponent<NetworkedObject>().Spawn();
```

See [Object Spawning](../mlapi-basics/object-spawning.md) for more information.

### Custom Spawn Handlers

### NetworkContextProperties

The MLAPI has IsLocalPlayer, IsClient, IsServer and IsHost to replace UNETs isLocalPlayer, isClient and isServer. In the MLAPI each object can be owned by a specific peer. This can be checked with IsOwner which is similar to UNETs hasAuthority.

##### UNET Example

##### MLAPI Example

### Network Proximity Checker/ OnCheckObserver => MLAPI visibility

UNET’s `OnCheckObserver` is called `NetworkedBehaviour` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### SceneManagement

UNET’s `SceneManagement` is called `TBC` in the MLAPI and works in a similar way.

##### UNET Example

##### MLAPI Example