---
id: migratingtomlapi
title: Migration Guide
sidebar_label: Migration Guide
---

This guide is intended to provide a step by step guide to migrating your project from Unet to MLAPI. 


## Current Limitations

- `CommandAttribute` → `ServerRPCAttribute` and `ClientRPCAttribute` → `ClientRPCAttribute` naming constraints may cause issues (Unet tended to prefix methods with `Cmd` or `Rpc`, MLAPI requires postfix. Means either complicated multi-line regex find/replace, or a ton of manual effort
- Errors about RPC postfix naming pattern do not show up in IDE. 
- MLAPI RPCs do not support arrays yet
- Client & Server have separate representations in UNET. There's a number of callbacks in UNET that don't exist for MLAPI 
- Prefabs need to be added to the prefab registration list for MLAPI
- You cannot  sub-class NetworkingManager, which was a RECOMMENDED pattern in UNET. 
- Connection callbacks do not happen in single player / host mode 
- Matchmaking

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

Currently MLAPI offers no replacment for the NetworkMangerHUD. 

### Replace NetworkIdentity => NetworkedObject

UNET’s `NetworkIdentity` is called `NetworkedObject` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### Replace UNet NetworkTransform => NetworkedTransform

UNET’s `NetworkTransform` is called `NetworkedTransform` in the MLAPI and works in a similar way.


##### UNET Example
##### MLAPI Example

### Replace  UNet NetworkAnimator => NetworkedAnimator

Replace  `NetworkAnimator` with `NetworkedAnimator` everywhere in your project.


##### UNET Example
##### MLAPI Example

### Replace NetworkBehaviour

Replace `NetworkBehaviour` with `NetworkedBehaviour` everywhere in your project.


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

##### Add callback registration in `Awake` or Init methods

##### Replace postfix increment/decrement usages

##### Update callback method signatures to new format (MLAPI passes oldvalue & newvalue, unet only passed newvalue)

##### NetworkedStart
In the MLAPI, RPCs, VarChanges etc will not be replicated if they are done before the `NetworkedStart` method is called. The `NetworkedStart` method is called when the `NetworkedObject` is replicated.

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


### Replace SyncVar 

Replace  `SyncVar`  with  `NetworkedVar` everywhere in your project.

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

### SyncedVar

`SyncedVar` has been removed from MLAPI use `NetworkedVar` for that functionality.

See [NetworkedVar](../mlapi-basics/networkedvar.md) for more information.

### Replace SyncList => NetworkedList

Replace `SyncList` with `NetworkedList` everywhere in your project.


##### UNET Example

##### MLAPI Example

### Replace Command/ClientRPC 

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

### Replace OnServerAddPlayer  

Replace  `OnServerAddPlayer` with  `ConnectionApproval` everywhere in your project.


##### UNET Example

```csharp
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.Networking.NetworkSystem;

class MyManager : NetworkManager
{
    public override void OnServerAddPlayer(NetworkConnection conn, short playerControllerId, NetworkReader extraMessageReader)
    {
        if (extraMessageReader != null)
        {
            var s = extraMessageReader.ReadMessage<StringMessage>();
            Debug.Log("my name is " + s.value);
        }
        OnServerAddPlayer(conn, playerControllerId, extraMessageReader);
    }
}
```

##### MLAPI Example

Server-only example:
```csharp
using MLAPI;
using MLAPI.Spawning;

private void Setup() 
{
    NetworkingManager.Singleton.ConnectionApprovalCallback += ApprovalCheck;
    NetworkingManager.Singleton.StartHost();
}

private void ApprovalCheck(byte[] connectionData, ulong clientId, MLAPI.NetworkingManager.ConnectionApprovedDelegate callback)
{
    //Your logic here
    bool approve = true;
    bool createPlayerObject = true;

    // The prefab hash. Use null to use the default player prefab
    // If using this hash, replace "MyPrefabHashGenerator" with the name of a prefab added to the NetworkedPrefabs field of your NetworkingManager object in the scene
    ulong? prefabHash = SpawnManager.GetPrefabHashFromGenerator("MyPrefabHashGenerator");
    
    //If approve is true, the connection gets added. If it's false. The client gets disconnected
    callback(createPlayerObject, prefabHash, approve, positionToSpawnAt, rotationToSpawnWith);
}
```
See [Connection Approvasl](../getting-started/connection-approval.md) for more information.

### Replace NetworkServer.Spawn => NetworkingManager.Spawn

Replace `NetworkServer.spawn`  with `NetworkingManager.spawn` everywhere in your project. 

##### UNET Example
```csharp

using UnityEngine;
using UnityEngine.Networking;

public class Example : NetworkBehaviour
{
    //Assign the prefab in the Inspector
    public GameObject m_MyGameObject;
    GameObject m_MyInstantiated;

    void Start()
    {
        //Instantiate the prefab
        m_MyInstantiated = Instantiate(m_MyGameObject);
        //Spawn the GameObject you assign in the Inspector
        NetworkServer.Spawn(m_MyInstantiated);
    }
}

```
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

Replace  `OnCheckObserver` with  `NetworkedBehaviour` everywhere in your project.


##### UNET Example


```csharp
public bool OnCheckObserver(Networking.NetworkConnection conn);
```

##### MLAPI Example

### SceneManagement

Replace `SceneManagement` with  `TBC` everywhere in your project. 
##### UNET Example

##### MLAPI Example


### ClientAttribute/CLientCallbackAttribute and ServerAttribute/ServerCallbackAttribute

MLAPI currently does not offer a replacement for marking a function with an attribute so that it only
runs on the server or the client. You can manually return out of the function instead.

##### UNET Example

```csharp
[Client]
public void MyClientOnlyFunction()
{
    Debug.Log("I'm a client!");
}
```

##### MLAPI Example

```csharp
public void MyClientOnlyFunction()
{
    if (!IsClient) { return; }

    Debug.Log("I'm a client!");
}
```


### SyncEvent

MLAPI does not provide an equivalent for SyncEvent. To port SyncEvent code from UNet to MLAPI send an
RPC to invoke the event on the other side.

##### UNET Example

```csharp
public class DamageClass : NetworkBehaviour
{
    public delegate void TakeDamageDelegate(int amount);

    [SyncEvent]
    public event TakeDamageDelegate EventTakeDamage;

    [Command]
    public void CmdTakeDamage(int val)
    {
        EventTakeDamage(val);
    }
}
```

##### MLAPI Example

```csharp
public class DamageClass : NetworkBehaviour
{
    public delegate void TakeDamageDelegate(int amount);

    public event TakeDamageDelegate EventTakeDamage;

    [ServerRpc]
    public void TakeDamageServerRpc(int val)
    {
        EventTakeDamage(val);
        OnTakeDamageClientRpc(val);
    }

    [ClientRpc]
    public void OnTakeDamageClientRpc(int val){
        EventTakeDamage(val);
    }
}
```