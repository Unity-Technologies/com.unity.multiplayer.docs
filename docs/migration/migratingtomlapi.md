---
id: migratingtomlapi
title: Migrating from UNet to MLAPI
---

This guide is intended to provide a step-by-step guide to migrating your project from UNet to MLAPI. Sample code is provided as available. We also recommend reviewing the latest [MLAPI Release Notes](../release-notes/index.md).

:::note
If you need help, contact us in the [Unity MLAPI Discord](https://discord.gg/buMxnnPvTb).
:::

## Current Limitations

- `CommandAttribute` → `ServerRPCAttribute` and `ClientRPCAttribute` → `ClientRPCAttribute` naming constraints may cause issues (UNet tended to prefix methods with `Cmd` or `Rpc`, MLAPI requires postfix. Means either complicated multi-line regex find/replace, or a ton of manual effort
- Errors about RPC postfix naming pattern do not show up in IDE. 
- MLAPI RPCs do not support arrays yet
- Client & Server have separate representations in UNet. There's a number of callbacks in UNet that don't exist for MLAPI 
- Prefabs need to be added to the prefab registration list for MLAPI
- Connection callbacks do not happen in single player / host mode 
- Matchmaking

## Backup

It is recommended that you back up your project before proceeding with the migration.

## Install MLAPI and restart Unity

See [Installation](installation.md) for more information.

## Invoking
Invoking in the MLAPI is done by calling the `Invoke` method on the `NetworkBehaviour` instead of calling the method directly like in UNet.

See [NetworkBehaviour](../mlapi-basics/networkbehaviour.md) for more information.


## Replace NetworkManagerHUD

Currently MLAPI offers no replacment for the NetworkMangerHUD. 

## Replace NetworkIdentity with NetworkObject

UNet’s `NetworkIdentity` is called `NetworkObject` in the MLAPI and works in a similar way.

## Add callback registration in `Awake` or `Init` methods

## Update callback method signatures

Callback method signatures use a new format. MLAPI passes `oldvalue` and `newvalue`, where UNet only passed `newvalue`.

## Add  NetworkedStart

In the MLAPI, `RPC`s and `VarChanges` will not be replicated if they are done before the `NetworkedStart` method is called. The `NetworkedStart` method is called when the `NetworkObject` is replicated.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
      {label: 'MLAPI Example', value: 'tab1'},
  ]}>

<TabItem value="tab1">

```csharp
public class MyMLAPIExample : NetworkBehaviour
{
    public override NetworkedStart()
    {
        // This object is now spawned across the network and RPC's can be sent.
    }
}
```
</TabItem>

</Tabs>

## Replace SyncVar 

Replace `SyncVar` with `NetworkVariable` everywhere in your project.

To achieve equivalent functionality of `SyncVar` hooks in MLAPI subscribe a function to the `OnValueChanged` callback of the `NetworkVariable`. A noteable difference between the UNet hooks and the MLAPI `OnValueChanged` callback is that MLAPI gives you both the old and the newly changed value while UNet provides you only with the old value.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

```csharp
public class SpaceShip : NetworkBehaviour
{
    [SyncVar]
    public string PlayerName;


    [SyncVar(hook = "OnChangeHealth"))]
    public int Health = 42;

    void OnChangeHealth(int newHealth){
        Debug.Log($"My new health is {newHealth}.");
    }
}
```

</TabItem>
<TabItem value="tab2">

```csharp
// Don't forget to initialize NetworkVariable with a value.
public NetworkVariable<string> PlayerName = new NetworkVariable<string>();

public NetworkVariable<int> Health = new NetworkVariable<int>(42);

// This how you update the value of a NetworkVariable, you can also use .Value to access the current value of a NetworkVariable.
void MyUpdate()
{
    Health.Value += 30;
}

// Call this is in Awake or Start to subscribe to changes of the NetworkVariable.
void ListenChanges()
{
    Health.OnValueChanged += OnChangeHealth;
}

void OnChangeHealth(int oldHealth, int newHealth){
        Debug.Log($"My new health is {newHealth}. Before my health was {oldHealth}");
}
```
</TabItem>

</Tabs>


See [NetworkVariable](../mlapi-basics/networkvariable.md) for more information.


## Replace SyncList with NetworkList

Replace `SyncList<T>` with `NetworkList<T>` everywhere in your project. `NetworkList` has a `OnListChanged` event which is similar to UNet's `Callback`.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

```csharp
public SyncListInt m_ints = new SyncListInt();

private void OnIntChanged(SyncListInt.Operation op, int index)
{
    Debug.Log("list changed " + op);
}


public override void OnStartClient()
{
    m_ints.Callback = OnIntChanged;
}
```
</TabItem>
<TabItem value="tab2">

```csharp
NetworkList<int> m_ints = new NetworkList<int>();

// Call this is in Awake or Start to subscribe to changes of the NetworkList.
void ListenChanges()
{
    m_ints.OnListChanged += OnIntChanged;
}

// The NetworkListEvent contains information about the operation and index of the change.
void OnIntChanged(NetworkListEvent<int> changeEvent)
{

}
```

</TabItem>

</Tabs>

## Replace Command/ClientRPC 

UNet’s `Command/ClientRPC` is replaced with `Server/ClientRPC` in the MLAPI which works in a similar way.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

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

</TabItem>
<TabItem value="tab2">

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

</TabItem>

</Tabs>

See [Messaging System](../advanced-topics/messaging-system.md) for more information.

## Replace OnServerAddPlayer  

Replace `OnServerAddPlayer` with `ConnectionApproval` everywhere in your project.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

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

</TabItem>

<TabItem value="tab2">

Server-only example:

```csharp
using MLAPI;
using MLAPI.Spawning;

private void Setup() 
{
    NetworkManager.Singleton.ConnectionApprovalCallback += ApprovalCheck;
    NetworkManager.Singleton.StartHost();
}

private void ApprovalCheck(byte[] connectionData, ulong clientId, MLAPI.NetworkManager.ConnectionApprovedDelegate callback)
{
    //Your logic here
    bool approve = true;
    bool createPlayerObject = true;

    // The prefab hash. Use null to use the default player prefab
    // If using this hash, replace "MyPrefabHashGenerator" with the name of a prefab added to the NetworkPrefabs field of your NetworkManager object in the scene
    ulong? prefabHash = NetworkpawnManager.GetPrefabHashFromGenerator("MyPrefabHashGenerator");
    
    //If approve is true, the connection gets added. If it's false. The client gets disconnected
    callback(createPlayerObject, prefabHash, approve, positionToSpawnAt, rotationToSpawnWith);
}
```
</TabItem>

</Tabs>

See [Connection Approval](../getting-started/connection-approval.md) for more information.

####  Replace NetworkServer.Spawn with NetworkManager.Spawn

Replace `NetworkServer.spawn`  with `NetworkManager.spawn` everywhere in your project. 

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

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
</TabItem>

<TabItem value="tab2">

```csharp
GameObject go = Instantiate(myPrefab, Vector3.zero, Quaternion.identity);
go.GetComponent<NetworkObject>().Spawn();
```

</TabItem>

</Tabs>

See [Object Spawning](../mlapi-basics/object-spawning.md) for more information.

## Custom Spawn Handlers

## NetworkContextProperties

The MLAPI has `IsLocalPlayer`, `IsClient`, `IsServer` and `IsHost` to replace UNets `isLocalPlayer`, `isClient` and `isServer`. In the MLAPI each object can be owned by a specific peer. This can be checked with `IsOwner` which is similar to UNets ``hasAuthority``.


## Network Proximity Checker/ OnCheckObserver with MLAPI visibility

There is no direct equivalent to the `NetworkPromimityChecker` UNet component in MLAPI. Network visiblilty for clients works similar as in UNet. MLAPI does not have an equivalent to the `ObjectHide` message from UNet. In MLAPI networked objects on the host are always visible. There is no equivalent to the `OnSetLocalVisibility` function in UNet. A manual network promiximty implementation with the `OnCheckObserver` can be ported to MLAPI by using `NetworkedObject.CheckObjectVisibility`. `OnRebuildObservers` is not needed for MLAPIs visibilty system.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

```csharp
public override bool OnCheckObserver(NetworkConnection conn)
{
 return IsvisibleToPlayer(getComponent<NetworkIdentity>(), coon);
}

public bool IsVisibleToPlayer(NetworkIdentity identity, NetworkConnection conn){
    // Any promimity function.
    return true;
}
```

</TabItem>


<TabItem value="tab2">

```csharp
public void Start(){
    NetworkObject.CheckObjectVisibility = ((clientId) => {
        return IsVisibleToPlayer(NetworkObject, NetworkManager.Singleton.ConnectedClients[clientId]);
    });
}

public bool IsVisibleToPlayer(NetworkObject networkObject, NetworkClient client){
    // Any promimity function.
    return true;
}
```
</TabItem>

</Tabs>

See [Object Visbility](../mlapi-basics/object-visibility.md) to learn more about MLAPIs network visiblity check.

## SceneManagement

In MLAPI, scene management is not done over the `NetworkManager` like in UNet. The `NetworkSceneManager` provides equivalent functionality for switching scenes.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

```csharp
public void ChangeScene()
{
    MyNetworkManager.ServerChangeScene("MyNewScene");
}
```

</TabItem>


<TabItem value="tab2">

public void ChangeScene()
{
    NetworkSceneManager.SwitchScene("MyNewScene");
}
</TabItem>

</Tabs>

## ClientAttribute/ClientCallbackAttribute and ServerAttribute/ServerCallbackAttribute

MLAPI currently does not offer a replacement for marking a function with an attribute so that it only
runs on the server or the client. You can manually return out of the function instead.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

```csharp
[Client]
public void MyClientOnlyFunction()
{
    Debug.Log("I'm a client!");
}
```

</TabItem>


<TabItem value="tab2">

```csharp
public void MyClientOnlyFunction()
{
    if (!IsClient) { return; }

    Debug.Log("I'm a client!");
}
```
</TabItem>

</Tabs>


## SyncEvent

MLAPI does not provide an equivalent for `SyncEvent`. To port `SyncEvent` code from UNet to MLAPI send an RPC to invoke the event on the other side.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: 'MLAPI Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

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
</TabItem>


<TabItem value="tab2">

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
</TabItem>

</Tabs>

## Network Discovery

MLAPI does not provide Network Discovery. The UNet Network Discovery is a standalone component that can be used with any networking solution. You can use the UNet Network Discovery to discover a broadcasting MLAPI host and then connect to it with MLAPI.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';