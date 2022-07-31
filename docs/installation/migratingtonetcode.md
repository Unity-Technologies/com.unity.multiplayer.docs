---
id: migratingtonetcode
title: Migrating From UNet to  Netcode for GameObjects
---

Use this step-by-step guide to migrate your projects from Unity UNet to Netcode for GameObjects (Netcode) Sample code is provided as available. We also recommend reviewing the latest <Link to={useBaseUrl ('/releases/introduction') }>Release Notes</Link> .

:::note
If you need help, contact us in the [Unity Multiplayer Networking Discord](https://discord.gg/buMxnnPvTb).
:::

## Current limitations

Review the following limitations for upgrade and migrations from previous versions of Unity UNet to Netcode:

- Naming constraints may cause issues. UNet prefixed methods with `Cmd` or `Rpc`. Netcode requires postfix. This may require either complicated multi-line regex to find and replace, or manual updates. For example, `CommandAttribute` has been renamed `ServerRpcAttribute` and `ClientRPCAttribute` has been renamed `ClientRpcAttribute`.
- Errors for RPC postfix naming patterns do not show in your IDE. 
- Client and Server have separate representations in UNet. UNet has a number of callbacks that do not exist for Netcode.
- Prefabs need to be added to the prefab registration list for Netcode.
- Matchmaking is not available in Netcode at this time.

## Backup your project

It is recommended that you back up your project before proceeding with the migration. For example:

* Create a copy of your entire project folder.
* Use source control software, like Git. 

:::bestpractice
We recommend using both methods to backup your project. This gives you a copied project and tracking through committed changes and history.
:::

## Install Netcode and restart Unity

See [Installation](installation.md) for more information. 

:::note
If you install Git for the first time, you will need to restart your system.
:::

## RPC Invoking

Invoking an RPC works the same way as in UNet. Just call the function and it will send an RPC.

##  NetworkManager 

UNET’s `NetworkManager` is also called `NetworkManager` in Netcode and works in a similar way.

:::note
We recommend you don't inherit from `NetworkManager` in Netcode, which was a **recommended** pattern in UNET. 
:::

## Replace NetworkManagerHUD 

Currently Netcode offers no replacment for the NetworkMangerHUD.

The [Community Contributions Extension Package](https://github.com/Unity-Technologies/multiplayer-community-contributions/tree/master/com.community.netcode.extensions) contains a a drop in `NetworkManagerHud` component you can use for a quick substitute.

## Replace NetworkIdentity with NetworkObject

UNet’s `NetworkIdentity` is called `NetworkObject` in Netcode and works in a similar way.

## Replace UNet NetworkTransform with Netcode NetworkTransform

UNet’s `NetworkTransform` is also called `NetworkTransform` in Netcode and works in a similar way.

The `NetworkTransform` does not have full feature parity with UNET's `NetworkTransform`. It lacks features like position synchronizing for rigidbodies.

## Replace UNet NetworkAnimator with Netcode NetworkAnimator

Replace UNEt's `NetworkAnimator` with Netcode's `NetworkAnimator` component everywhere in your project.

## Update NetworkBehaviour

Replace UNet `NetworkBehaviour` with Netcode's `NetworkBehaviour` everywhere in your project.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

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

</TabItem>
<TabItem value="tab2">

```csharp
public class MyNetcodeExample : NetworkBehaviour
{
    public NetworkVariable<float> MyNetworkVariable = new NetworkVariable<float>();
    public override void OnNetworkSpawn()
    {
        ExampleClientRpc(10f);
        ExampleServerRpc(10f);
    }
    [ServerRpc]
    public void ExampleServerRpc(float x)
    {
        Debug.Log(“Runs on server”);
    }
    [ClientRpc]
    public void ExampleClientRpc(float x)
    {
        Debug.Log(“Runs on clients”);
    }
}
```
</TabItem>

</Tabs>

See [NetworkBehaviour](../basics/networkbehaviour.md) for more information. 

## Replace SyncVar 

Replace `SyncVar` with `NetworkVariable` everywhere in your project.

To achieve equivalent functionality of `SyncVar` hooks in Netcode subscribe a function to the `OnValueChanged` callback of the `NetworkVariable`. A noteable difference between the UNet hooks and Netcode's `OnValueChanged` callback is that Netcode gives you both the old and the newly changed value while UNet provides you only with the old value. With UNet, you also had to manually assign the value of the SyncVar.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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
        Health = newHealth; //This is no longer necessary in Netcode.
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


void Awake()
{
  // Call this is in Awake or Start to subscribe to changes of the NetworkVariable.
    Health.OnValueChanged += OnChangeHealth;
}

void OnChangeHealth(int oldHealth, int newHealth){
    //There is no need anymore to manually assign the value of the variable here with Netcode. This is done automatically by Netcode for you.
    Debug.Log($"My new health is {newHealth}. Before my health was {oldHealth}");
}
```
</TabItem>

</Tabs>

Replace all postfix increment and decrement usages of SyncVar in your project. Netcode's `NetworkVariable.Value` exposes a value type that's why postfix increment/decrement is not supported.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
  ]}>

<TabItem value="tab1">

```csharp

public int Health = 42;

public void Update(){
  Health++;
}


```

</TabItem>
<TabItem value="tab2">

```csharp

public NetworkVariable<int> Health = new NetworkVariable<int>(42);

public void Update(){
  Health.Value = Health.Value + 1;
}
```
</TabItem>

</Tabs>

See [NetworkVariable](../basics/networkvariable.md) for more information.


## Replace SyncList with NetworkList

Replace `SyncList<T>` with `NetworkList<T>` everywhere in your project. `NetworkList` has a `OnListChanged` event which is similar to UNet's `Callback`.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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

UNet’s `Command/ClientRPC` is replaced with `Server/ClientRpc` in Netcode which works in a similar way.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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
    public void ExampleServerRpc(float x)
    {
        Debug.Log(“Runs on server”);
    }
    [ClientRPC]
    public void ExampleClientRpc(float x)
    {
        Debug.Log(“Runs on clients”);
    }
```
</TabItem>
</Tabs>


:::note
In Netcode, RPC function names must end with a `ClientRpc/ServerRpc` suffix.
:::

See [Messaging System](../advanced-topics/messaging-system.md) for more information.

## Replace OnServerAddPlayer  

Replace `OnServerAddPlayer` with `ConnectionApproval` everywhere in your project.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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
using Unity.Netcode;

private void Setup() 
{
    NetworkManager.Singleton.ConnectionApprovalCallback += ApprovalCheck;
    NetworkManager.Singleton.StartHost();
}

private void ApprovalCheck(byte[] connectionData, ulong clientId, NetworkManager.ConnectionApprovedDelegate callback)
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

## Replace NetworkServer.Spawn with NetworkObject.Spawn

Replace `NetworkServer.Spawn`  with `NetworkObject.Spawn` everywhere in your project. 

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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

See [Object Spawning](../basics/object-spawning.md) for more information.

## Custom Spawn Handlers

Netcode has `Custom Spawn Handlers` to replace UNet's `Custom Spawn Functions`. See [Object Pooling](../advanced-topics/object-pooling) for more information.

## Replace NetworkContextProperties

Netcode has `IsLocalPlayer`, `IsClient`, `IsServer` and `IsHost` to replace UNets `isLocalPlayer`, `isClient` and `isServer`. In Netcode each object can be owned by a specific peer. This can be checked with `IsOwner` which is similar to UNets ``hasAuthority``.

## Network Proximity Checker/ OnCheckObserver with Netcode visibility

There is no direct equivalent to the `NetworkPromimityChecker` UNet component in Netcode. Network visiblilty for clients works similar as in UNet. Netcode does not have an equivalent to the `ObjectHide` message from UNet. In Netcode networked objects on the host are always visible. There is no equivalent to the `OnSetLocalVisibility` function in UNet. A manual network promiximty implementation with the `OnCheckObserver` can be ported to Netcode by using `NetworkObject.CheckObjectVisibility`. `OnRebuildObservers` is not needed for Netcode visibilty system.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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

See [Object Visbility](../basics/object-visibility.md) to learn more about Netcodes network visiblity check.

## Update SceneManagement

In Netcode, scene management is not done over the `NetworkManager` like in UNet. The `NetworkSceneManager` provides equivalent functionality for switching scenes.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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

```csharp
public void ChangeScene()
{
    NetworkSceneManager.LoadScene("MyNewScene", LoadSceneMode.Single);
}
```
</TabItem>

</Tabs>

## Update ClientAttribute/ClientCallbackAttribute and ServerAttribute/ServerCallbackAttribute

Netcode currently does not offer a replacement for marking a function with an attribute so that it only runs on the server or the client. You can manually return out of the function instead.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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


## Replace SyncEvent with RPC event

Netcode does not provide an equivalent for `SyncEvent`. To port `SyncEvent` code from UNet to Netcode, send an RPC to invoke the event on the other side.

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'UNET Example', value: 'tab1'},
    {label: ' Netcode for GameObjects Example', value: 'tab2'},
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

Netcode does not provide Network Discovery. The Contributions repository provides an example implementation for [NetworkDiscovery](https://github.com/Unity-Technologies/multiplayer-community-contributions/tree/main/com.community.netcode.extensions/Runtime/NetworkDiscovery).

## See Also

For more information, see the following:

* <Link to={useBaseUrl ('/releases/introduction') }>Release Notes</Link> - Learn more about updated and changed features, bug fixes, and known issues for Unity Netcode.
* [API Reference](../api/introduction.md) - Review available APIs.
* Guides and tutorials - Review guides for Netcodev and check [tutorials](../learn/index.md).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';