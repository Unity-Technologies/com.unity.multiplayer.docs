---
id: bitesize-dynamicprefabs
title: Dynamic Prefabs Sample
description: Learn more about the dynamic prefab system, which allows us to add new spawnable prefabs at runtime.
---
# Dynamic Addressables Network Prefabs Sample


The [Dynamic Prefabs Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/master/Basic/DynamicPrefabs) showcases the available use-cases for the dynamic prefab system, which allows us to add new spawnable prefabs at runtime.
<br><br>

## Dynamically Spawn Prefabs at Runtime
The dynamic prefabs system allows the developer to add a new prefab to the network prefab list at runtime. Each scene in the project showcases a different, isolated feature of the API.


This sample covers the two currently possible use-cases for dynamic prefabs:

- **Preloading:** dynamic prefabs get added on all peers *before* we start the connection
- **Server authoritative dynamic prefab loading:** server can spawn things that the clients haven't preloaded yet
<br><br>


### Server authoritative dynamic prefab loading can: (todo: make this accurate lol)

* Handle late-joiners by ensuring that the client has all the prefabs loaded in connection approval callback
  * The late joining client will load the required prefabs and try again if it's missing any (this potentially could happen several times, if the server adds more prefabs while the client is preloading assets)

* Spawn objects "synchronously" - meaning that the server first ensures that clients have loaded a prefab, and then spawns it, waiting for the clients to ack

* Spawn objects on the server immediately, marking that object invisible to the clients that haven't loaded the prefab yet (when they do - the server reacts and makes previously hidden objects visible)
it can ask all the peers to preload prefabs preemptively
<br><br><br>

# Project Overview

## Shared Scripts and Features
These scripts are utlities / features used accross the whole project.
<br><br>

### Addressables

This sample uses Addressables to load the dynamic prefab, however any GameObject with a NetworkObject component can be used, regardless of its source. For more information about Addressables, check out the [Addressables package documentation](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html).
<br><br>

### App Controller
The `AppController.cs` script is where all of our networking logic is handled. 

```csharp reference
Add Code
```
<br>

### Dynamic Prefab Loading Utilities

A utilities class to handle the loading, tracking, and disposing of loaded network prefabs. Connection and disconnection payloads can be easily accessed from this class as well.
<br><br>




## Project Scene Structure

The Dynamic Prefabs sample is broken down into six scenes: 00-04 showcase different use-cases for the Dynamic Prefabs system, and 05 serves as an API playground to test all of the use-cases in tandem. We suggest exploring them in sequential order to get an understanding of the flow of dynamically loading and spawning network prefabs.
<br><br>


### Scene 00_Preloading Dynamic Prefabs

This is the simplest case of a dynamic prefab - we instruct all game instances to load a network prefab (it can be just one, it could also be a set of network prefabs) and inject them to NetworkManager's NetworkPrefabs list before starting the server. What's important is that it doesn't really matter where the prefab comes from. It could be a simple prefab or it could be an Addressable - it's all the same.

This is the less intrusive option for your development, as you don't have any additional spawning and addressable management to do later in your game. 

Here, we're serializing the AssetReferenceGameObject to this class, but ideally you'd want to authenticate players when your game starts up and have them fetch network prefabs from services such as UGS (see Remote Config). It should also be noted that this is a technique that could serve to decrease the install size of your application, since you'd be streaming in networked game assets dynamically.
<br><br>

We use one class to implement this use case, `Preloading.cs`.

On `OnStart()`, we'll await our method for dynamically spawning the prefab(s), which we will touch on after. After we've waited for the prefab(s) to load, we can start the host or the client.

```c#
async void Start()
{
    await PreloadDynamicPlayerPrefab();
}
```

This is said method to preload a dynamic prefab, `PreloadDynamicPlayerPrefab`. In this case, we are preloading the player prefab, but you can preload whatever dynamic prefab(s) you would like. Here is the full method:

```csharp reference 
async Task PreloadDynamicPlayerPrefab()
{
    Debug.Log($"Started to load addressable with GUID: {m_DynamicPrefabReference.AssetGUID}");
    var op =  Addressables.LoadAssetAsync<GameObject>(m_DynamicPrefabReference);
    var prefab = await op.Task;
    Addressables.Release(op);

    // It's important to actually add the player prefab to the list of network prefabs - it doesn't happen
    // automatically
    m_NetworkManager.AddNetworkPrefab(prefab);
    Debug.Log($"Loaded prefab has been assigned to NetworkManager's PlayerPrefab");

    // at this point we can easily change the PlayerPrefab
    m_NetworkManager.NetworkConfig.PlayerPrefab = prefab;

    // Forcing all game instances to load a set of network prefabs and having each game instance inject network
    // prefabs to NetworkManager's NetworkPrefabs list pre-connection time guarantees that all players will have
    // matching NetworkConfigs. This is why NetworkManager.ForceSamePrefabs is set to true. We let Netcode for
    // GameObjects validate the matching NetworkConfigs between clients and the server. If this is set to false
    // on the server, clients may join with a mismatching NetworkPrefabs list from the server. 
    m_NetworkManager.NetworkConfig.ForceSamePrefabs = true;
}
```

<br><br>

### Scene 01_Connection Approval Required For Late Joining

A class that walks through what a server would need to validate from a client when dynamically loading network prefabs. This is another simple use-case scenario, as this is just the implementation of the connection approval callback, which is an **optional** feature from Netcode for GameObjects. To enable it, make sure the "Connection Approval" toggle is enabled on the NetworkManager in your scene. Other use-cases don't allow for reconciliation after the server has loaded a prefab dynamically, whereas this one enables that functionality. This is to support late join and should be used in combination with the other techniques described below.
<br><br>

This is the `ConnectionApprovalCalback` method:
```csharp reference
void ConnectionApprovalCallback(NetworkManager.ConnectionApprovalRequest request, NetworkManager.ConnectionApprovalResponse response)
{
    Debug.Log($"Client {request.ClientNetworkId} is trying to connect ");
    var connectionData = request.Payload;
    var clientId = request.ClientNetworkId;
    
    if (clientId == m_NetworkManager.LocalClientId)
    {
        //allow the host to connect
        Approve();
        return;
    }
    
    if (connectionData.Length > k_MaxConnectPayload)
    {
        // If connectionData is too big, deny immediately to avoid wasting time on the server. This is intended as
        // a bit of light protection against DOS attacks that rely on sending silly big buffers of garbage.
        ImmediateDeny();
        return;
    
    if (DynamicPrefabLoadingUtilities.LoadedPrefabCount == 0)
    {
        // immediately approve the connection if we haven't loaded any prefabs yet
        Approve();
        return;
    
    var payload = System.Text.Encoding.UTF8.GetString(connectionData);
    var connectionPayload = JsonUtility.FromJson<ConnectionPayload>(payload); // https://docs.unity3d.com/2020.2/Documentation/Manual/JSONSerialization.html
    int clientPrefabHash = connectionPayload.hashOfDynamicPrefabGUIDs;
    int serverPrefabHash = DynamicPrefabLoadingUtilities.HashOfDynamicPrefabGUIDs;
    
    // if the client has the same prefabs as the server - approve the connection
    if (clientPrefabHash == serverPrefabHash)
    {
        Approve
        DynamicPrefabLoadingUtilities.RecordThatClientHasLoadedAllPrefabs(clientId);
        
        return;
    }
    
    // In order for clients to not just get disconnected with no feedback, the server needs to tell the client
    // why it disconnected it. This could happen after an auth check on a service or because of gameplay
    // reasons (server full, wrong build version, etc).
    // The server can do so via the DisconnectReason in the ConnectionApprovalResponse. The guids of the prefabs
    // the client will need to load will be sent, such that the client loads the needed prefabs, and reconnects.
            
    // A note: DisconnectReason will not be written to if the string is too large in size. This should be used
    // only to tell the client "why" it failed -- the client should instead use services like UGS to fetch the
    // relevant data it needs to fetch & download.
    DynamicPrefabLoadingUtilities.RefreshLoadedPrefabGuids
    response.Reason = DynamicPrefabLoadingUtilities.GenerateDisconnectionPayload();
    
    ImmediateDeny();
    
    // A note: sending large strings through Netcode is not ideal -- you'd usually want to use REST services to
    // accomplish this instead. UGS services like Lobby can be a useful alternative. Another route may be to
    // set ConnectionApprovalResponse's Pending flag to true, and send a CustomMessage containing the array of 
    // GUIDs to a client, which the client would load and reattempt a reconnection.
    void Approve()
    {
        Debug.Log($"Client {clientId} approved");
        response.Approved = true;
        response.CreatePlayerObject = false; //we're not going to spawn a player object for this sample
    }
    
    void ImmediateDeny()
    {
        Debug.Log($"Client {clientId} denied connection");
        response.Approved = false;
        response.CreatePlayerObject = false;
    }
}
```


We keep a constant for the max payload of a connection, which is useful for secutiry purposes.
```csharp reference
const int k_MaxConnectPayload = 1024;
```
For example, if connectionData is too big, deny immediately to avoid wasting time on the server. This is intended as a bit of light protection against DOS attacks that rely on sending silly big buffers of garbage.

``` csharp reference
if (connectionData.Length > k_MaxConnectPayload)
{
    ImmediateDeny();
    return;
}
```

<br>

### Scene 02_Server Authoritative Load All Prefabs Asynchronously

A simple use-case where the server notifies all clients to preload a collection of network prefabs. The server will not invoke a spawn in this use-case, and will incrementally load each dynamic prefab, one prefab at a time.

A gameplay scenario where this technique would be useful: clients and host are connected, the host arrives at a point in the game where they know some prefabs will be needed soon, and so the server instructs all clients to preemptively load those prefabs. Some time later in the same session, the server needs to perform a spawn, and can do so without making sure all clients have loaded said dynamic prefab, since it already did so preemptively. This allows for simple spawn management.

This is different from option 0, as here this is done when clients are connected and already in game. This allows for more flexibility around your gameplay and could load different prefabs depending on where your players are at in the game for example.


```csharp reference
Add Code
```
<br>

### Scene 03_Server Authoritative Synchronous Dynamic Prefab Spawn

A dynamic prefab loading use-case where the server instructs all clients to load a single network prefab, and will only invoke a spawn once all clients have successfully completed their respective loads of said prefab. The server will initially send a ClientRpc to all clients, begin loading the prefab on the server, will await acknowledgement of a load via ServerRpcs from each client, and will only spawn the prefab over the network once it has received an acknowledgement from every client, within m_SynchronousSpawnTimeoutTimer seconds.

This use-case is recommended for scenarios where you'd want to guarantee the same world version across all connected clients. Since the server will wait until all clients have loaded the same dynamic prefab, the spawn of said dynamic prefab will be synchronous. Thus, we recommend using this technique for spawning game-changing gameplay elements, assuming you'd want all clients to be able to interact with said gameplay elements from the same point forward. For example, you wouldn't want to have an enemy only be visible (network side and/or visually) to some clients and not others -- you'd want to delay the enemy's spawn until all clients have dynamically loaded it and are able to see it before spawning it server side.


```csharp reference
Add Code
```
<br>

### Scene 04_Server Authoritative Spawn Dynamic Prefab Using Network Visibility

A dynamic prefab loading use-case where the server instructs all clients to load a single network prefab via a ClientRpc, will spawn said prefab as soon as it is loaded on the server, and will mark it as network-visible only to clients that have already loaded that same prefab. As soon as a client loads the prefab locally, it sends an acknowledgement ServerRpc, and the server will mark that spawned NetworkObject as network-visible to that client.

An important implementation detail to note about this technique: the server will not wait until all clients have loaded a dynamic prefab before spawning the corresponding NetworkObject. Thus, this means that a NetworkObject will become network-visible for a connected client as soon as it has loaded it as well -- a client is not blocked by the loading operation of another client (which may be loading the asset slower or may have failed to load it at all). A consequence of this asynchronous loading technique is that clients may experience differing world versions momentarily. Therefore, we don't recommend using this technique for spawning game-changing gameplay elements (like a boss fight for example) assuming you'd want all clients to interact with the spawned NetworkObject as soon as it is spawned on the server.

```csharp reference
Add Code
```
<br>

### Scene 05_API Playground Shocasing All Post-Connection Use-Cases

This class serves as the playground of the dynamic prefab loading use-cases. It integrates API from this sample to use at post-connection time such as: connection approval for syncing late-joining clients, dynamically loading a collection of network prefabs on the host and all connected clients, synchronously spawning a dynamically loaded network prefab across connected clients, and spawning a dynamically loaded network prefab as network-invisible for all clients until they load the prefab locally (in which case it becomes network-visible to the client).

Assumption: Addressables are loadable, ie when the client tries to load it - it will not fail. 

Last note: this sample does not cover the case of addressable usage when the client is loading custom visual prefabs and swapping out the rendering object for essentially non-dynamic prefabs.

```csharp reference
Add Code
```
<br><br>


## Using the Sample UI

This sample also uses in-game UI (created using UI Toolkit) to interface with the dynamic prefabs system with configurable options like artificial latency and network spawn timeout for easy testing. The `HostJoinUI.cs` and `InGameUI.cs` scripts provide UI logic hookups for the `AppController.cs` script to use.
<br><br><br>

## Limitations of the Dynamic Prefab System

There are several limitations to this API:
- If you have NetworkConfig.ForceSamePrefabs enabled, you can only modify your prefab lists **before** starting
  networking, and the server and all connected clients must all have the same exact set of prefabs
  added via this method before connecting.

- Adding a prefab on the server **does not** automatically add it on the client - it's up to you
  to make sure the client and server are synchronized via whatever method makes sense for your game
  (RPCs, configs, deterministic loading, etc).

- If the server sends a Spawn message to a client that does not yet have the corresponding prefab loaded, the spawn message
  (and any other relevant messages) will be held for a configurable time before an error is logged (default 1 second, configured via
  NetworkConfig.SpawnTimeout). This is intented to enable the SDK to gracefully
  handle unexpected conditions that slow down asset loading (slow disks, slow network, etc). This timeout
  should not be relied upon and code shouldn't be written around it - your code should be written so that
  the asset is expected to be loaded before it's needed.

- It's currently impossible for clients to late join after a dynamic prefab has been spawned by the server - this is because the initial sync doesn't allow us any time to load prefabs that are aren't yet loaded on the client.