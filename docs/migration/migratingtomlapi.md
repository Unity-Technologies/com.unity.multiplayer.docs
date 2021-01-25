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
Invoking in the MLAPI is done by calling the Invoke method on the NetworkedBehaviour instead of calling the method directly like in UNET.

See [NetworkedBehaviour](../core-components/networked-behaviour.md) for more information.

### Replace NetworkManager 

UNET’s NetworkManager is called Networking manager in the MLAPI and works in a similar way.


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

### Replace NetworkIdentity => NetworkedObject

### Replace UNet NetworkTransform => NetworkedTransform

### Replace  UNet NetworkAnimator => NetworkedAnimator

### Replace NetworkBehaviour => NetworkedBehaviour

UNET’s NetworkBehaviour is called NetworkedBehaviour in the MLAPI and works in a similar way.

#### UNET Example
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
#### MLAPI Example

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
In the MLAPI, RPCs, VarChanges etc will not be replicated if they are done before the NetworkedStart method is called. The NetworkedStart method is called when the NetworkedObject is replicated.

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

### Replace SyncList => NetworkedList

### Replace Command/ClientRPC => Standard RPC

UNET’s Command/ClientRPC is replaced with  Server/ClientRPC in the MLAPI and works in a similar way.

#### UNET Example
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
#### MLAPI Example
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

See [Messaging System](../mlapi-basics/messaging-system.md) for more information

### Replace OnServerAddPlayer => ConnectionApproval 

### Replace NetworkServer.Spawn => NetworkingManager.Spawn

### Custom Spawn Handlers

### NetworkContextProperties

The MLAPI has IsLocalPlayer, IsClient, IsServer and IsHost to replace UNETs isLocalPlayer, isClient and isServer. In the MLAPI each object can be owned by a specific peer. This can be checked with IsOwner which is similar to UNETs hasAuthority.

### Network Proximity Checker/ OnCheckObserver => MLAPI visibility

### SceneManagement
