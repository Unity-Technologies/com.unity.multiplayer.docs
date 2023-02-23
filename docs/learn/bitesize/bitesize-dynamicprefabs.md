---
id: bitesize-dynamicPrefabs
title: Dynamic Prefabs Sample
description: Learn more about the dynamic Prefab system, which allows you to add new spawnable Prefabs at runtime.
---

# Dynamic Addressables Network Prefabs Sample

The [DynamicAddressablesNetworkPrefabs Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/DynamicAddressablesNetworkPrefabs) showcases the available ways you can use dynamic Prefabs to dynamically load network Prefabs at runtime, either pre-connection or post-connection. Doing so allows you to add new spawnable NetworkObject Prefabs to Netcode for GameObjects.

This sample covers a variety of possible ways you can use dynamically loaded network Prefabs:

- **Pre-loading**: Add dynamic Prefabs to all peers before starting the connection.
- **Connection approval**: Apply server-side validation to late-joining clients after loading dynamic Prefabs.
- **Server-authoritative pre-load all Prefabs asynchronously**: Simplify server spawn management by having the server send a load request to all clients to load a set of network Prefabs.
- **Server-authoritative try spawn synchronously**: Ensure all connected clients individually load a network Prefab before spawning it on the server.
- **Server-authoritative network visibility spawning**: Spawn a network Prefab server-side as soon as it has loaded it locally, and only change the visibility of the spawned NetworkObject when each client loads the Prefab load.

There's also the **APIPlayground**, which serves as an API playground that implements all post-connection uses together.

:::note
**Note**: This sample leverages [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html) to load dynamic Prefabs.
:::

### Scene 00_Preloading Dynamic Prefabs

The `00_Preloading Dynamic Prefabs` scene is the simplest implementation of a dynamic Prefab. It instructs all game instances to load a network Prefab (it can be just one, it can also be a set of network Prefabs) and inject them to NetworkManager's NetworkPrefabs list before starting the server. What's important is that it doesn't matter where the Prefab comes from. It can be a simple Prefab or it can be an Addressable - it's all the same.

This is the lesser intrusive option for your development, as you don't have any extra spawning and Addressables management to perform later in your game.

Here, the sample serializes the AssetReferenceGameObject to this class, but ideally you want to authenticate players when your game starts up and have them fetch network Prefabs from services such as UGS (see [Remote Config](https://docs.unity.com/remote-config)). You should also note that this is a technique that can serve to decrease the install size of your application, since you'd be streaming in networked game assets dynamically.

The entirety of this use-case is performed pre-connection time, and all game instances would execute this bit of code inside Preloading.cs' Start() method:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/00_Preloading/Preloading.cs#L27-L31
```

The logic of this method invoked on Start() is defined below:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/00_Preloading/Preloading.cs#L33-L56
```

First, we wait for the dynamic prefab asset to be loaded from its address and into memory. Once the object is ready to be used, we add it to NetworkManger's list of NetworkPrefabs, and afterwards mark this NetworkObject as NetworkManager's PlayerPrefab.

Lastly, we force NetworkManager to perform the check for matching [NetworkConfig](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/ngo/1.2.0/com.unity.netcode.gameobjects/Runtime/Configuration/NetworkConfig.cs)s between a client and the server by setting ForceSamePrefabs to be true. Essentially, if the server detects a mismatch in the server and client's NetworkManager's NetworkPrefabs list when a client is attempting to connect, the connection will be denied automatically. 

### Scene 01_Connection Approval Required For Late Joining

The `01_Connection Approval Required For Late Joining` scene uses a class that walks through what a server needs to approve a client when dynamically loading network Prefabs. This is another simple example; it's just the implementation of the connection approval callback, which is an **optional** feature from Netcode for GameObjects. To enable it, enable the **Connection Approval** option on the NetworkManager in your scene. This example enables connection approval functionality to support late-joining clients, and it works best in combination with the techniques from the other example scenes. The other example scenes don't allow for reconciliation after the server loads a Prefab dynamically, except for scene `05_API Playground Showcasing All Post-Connection Uses`, where all post-connection use-cases are integrated in one scene.

To commence, we'll walk through what the client will send to the server when attempting a connection. This is done inside of [ClientConnectingState.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/ConnectionStates/ClientConnectingState.cs)' StartClient() method:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/ConnectionStates/ClientConnectingState.cs#L25-L32
```

Before invoking NetworkManager.StartClient(), the client defines what the ConnectionData to send along with the connection request, gathered from [DynamicPrefabLoadingUtilities.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/DynamicPrefabLoadingUtilities.cs):

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/DynamicPrefabLoadingUtilities.cs#L81-L89
```

For simplicity's sake, this method generates a hash that uniquely describes the dynamic prefabs that a client has loaded. This hash is what the server will use as validation to determine whether a client is approved a connection.

Now, we'll take a look at how the server handles incoming ConnectionData. We listen for NetworkManager's ConnectionApprovalCallback and define the behaviour when this is invoked inside of [ConnectionApproval.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval). This is done on Start():

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L30-L52
```

Unlike the previous use-case, ForceSamePrefab is set to false, since this allows us to add NetworkObject prefabs to NetworkManager's NetworkPrefabs list after establishing a connection, on both server and clients. Before walking through what this class' connection approval callback looks like, it's worth noting here that we'll force a mismatch of NetworkPrefabs between server and clients, because as soon as the server starts it'll load a dynamic prefab, and register it to the server's NetworkPrefabs list:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L54-L69
```

We'll walk through the connection approval defined in this class in steps. First, its worth noting that the connection approval will be invoked on the host. Therefore, we simply allow the host to establish a connection: 

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L85-L90
```

Next, a few more validation steps will be introduced. First, this sample only allows 4 connected clients. If the server detects any more connections past that limit, the requesting client will be denied a connection. Secondly, if the ConnectionData is above a certain size threshold, it'll be denied outright.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L92-L105
```

A trivial approval for an incoming connection request occurs when the server has not yet loaded any dynamic prefabs. Assuming the client has not injected any prefabs outside of the `DynamicPrefabLoadingUtilities` system, a client is approved a connection:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L107-L112
```

Another case for connection approval is when the requesting client's Prefab hash is identical to that of the server:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L114-L128
```

If the requesting client has a mismatching Prefab hash, it means that the client has not yet loaded the appropriate dynamic Prefabs. When this occurs, we'll leverage NetworkManager's ConnectionApprovalResponse's Reason string field, and populate it with a payload containing the GUIDs of the dynamic prefabs the client should load locally before re-attempting connection:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/01_Connection%20Approval/ConnectionApproval.cs#L140-L144
```

A client that is attempting to connect will receive a callback from Netcode that it has been disconnected inside of `ClientConnectingState`:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/ConnectionStates/ClientConnectingState.cs#L39-L68
```

If the parsed DisconnectReason string is valid, and the parsed reason is of type `DisconnectReason.ClientNeedsToPreload`, the client will be instructed to load the prefabs by their GUID. This is done inside of [ClientPreloadingState.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/ConnectionStates/ClientPreloadingState.cs):

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/Shared/ConnectionStates/ClientPreloadingState.cs#L30-L37
```

Once the client loads the necessary prefabs, it once again transitions to the `ClientConnectingState`, and re-attempts the connection to the server, sending along a new Prefab hash.

Note: This sample leveraged a state machine to handle connection management. A state machine is not by any means necessary for connection approvals to work -- it serves to compartmentalize connection logic per state, and to be a debug-friendly tool to step through connection steps.

### Scene 02_Server Authoritative Load All Prefabs Asynchronously

The `02_Server Authoritative Load All Prefabs Asynchronously` scene is a simple scenario where the server notifies all clients to pre-load a collection of network Prefabs. The server won't invoke a spawn in this scenario; instead, it incrementally loads each dynamic Prefab, one at a time.

This technique might benefit a scenario where, after all clients connect, the host arrives at a point in the game where it expects that will need to load Prefabs soon. In such a case, the server instructs all clients to preemptively load those Prefabs. Later in the same game session, the server needs to perform a spawn, and can do so knowing all clients have loaded said dynamic Prefab (since it already did so preemptively). This allows for simple spawn management.

This sample is different from the `00_Preloading Dynamic Prefabs` scene, in that it occurs after clients connect and join the game. It allows for more gameplay flexibility and loading different Prefabs based on where players are at in the game, for example.

The logic that drives the behaviour for this use-case resides inside [ServerAuthoritativeLoadAllAsync.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/02_Server%20Authoritative%20Load%20All%20Async/ServerAuthoritativeLoadAllAsync.cs). Its Start() method is as follows:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/02_Server%20Authoritative%20Load%20All%20Async/ServerAuthoritativeLoadAllAsync.cs#L36-L59
```

You will notice that similarly to the last use-case, we have ConnectionApproval set to true and ForceSamePrefabs set to false here. We've defined a trimmed-down ConnectionApproval callback inside of this class resembling that of the last use-case to let us deny connection to clients that have mismatched NetworkPrefabs lists to that of the server. If we had ConnectionApproval set to false, then any incoming connection will be approved.

We'll also bind a UI button's pressed callback to a method inside this class. This method, shown below, will iterate through the serialized list of `AssetReferenceGameObject`s, and generate a set of tasks to asynchronously load the prefabs on every connected client, as well as the server.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/02_Server%20Authoritative%20Load%20All%20Async/ServerAuthoritativeLoadAllAsync.cs#L136-L145
```

The task to load an Addressable individually is as follows:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/02_Server%20Authoritative%20Load%20All%20Async/ServerAuthoritativeLoadAllAsync.cs#L147-L189
```

First, we make sure that this block of code is executed only on the server. Next a simple check will let us verify if the dynamic prefab has already been loaded, in which case we can easily early return inside this method.

Next, the server sends out a ClientRpc to every client, instructing them to load an Addressable and add it to their NetworkManager's NetworkPrefabs list. After sending out the ClientRpc, the server begins to asynchronously load the same prefab. The ClientRpc looks like:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/02_Server%20Authoritative%20Load%20All%20Async/ServerAuthoritativeLoadAllAsync.cs#L191-L213
```

We want this operation to run only on clients. Once the prefab has been loaded on the client, the client will send back an acknowledgement ServerRpc containing the hashcode of the loaded prefab. The ServerRpc looks like:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/v1.2.1/Basic/DynamicAddressablesNetworkPrefabs/Assets/Scripts/02_Server%20Authoritative%20Load%20All%20Async/ServerAuthoritativeLoadAllAsync.cs#L215-L242
```

The server simply records that the client has successfully loaded the dynamic prefab. As hinted by the class' name, this use-case only instructs clients to load a set of dynamic prefabs and does not invoke a network spawn.

### Scene 03_Server Authoritative Synchronous Dynamic Prefab Spawn

The `03_Server Authoritative Synchronous Dynamic Prefab Spawn` scene is a dynamic Prefab loading scenario where the server instructs all clients to load a single network Prefab, and only invokes a spawn after all clients have finish loading the Prefab. The server initially sends a [ClientRpc](../../../docs/advanced-topics/message-system/clientrpc.md) to all clients, begins loading the Prefab on the server, awaits a acknowledgement of a load via a [ServerRpcs](../../../docs/advanced-topics/message-system/serverrpc.md) from each client, and only spawns the Prefab over the network after it receives an acknowledgement from every client, within a predetermined amount of time.

This example implementation works best for scenarios where you want to guarantee the same world version across all connected clients. Because the server waits for all clients to finish loading the same dynamic Prefab, the spawn of said dynamic Prefab will be synchronous.

The technique demonstrated in this sample works best for spawning game-changing gameplay elements, assuming you want all clients to be able to interact with said gameplay elements from the same point forward. For example, you don't want to have an enemy that's only visible (network-side or visually) to some clients and not others—you want to delay the spawning the enemy until all clients have dynamically loaded it and are able to see it before spawning it server-side.

### Scene 04_Server Authoritative Spawn Dynamic Prefab Using Network Visibility

The `04_Server Authoritative Spawn Dynamic Prefab Using Network Visibility` scene is a dynamic Prefab loading scenario where the server instructs all clients to load a single network Prefab via a [ClientRpc](../../../docs/advanced-topics/message-system/clientrpc.md), spawns the Prefab as soon as it's loaded on the server, and marks the Prefab as network-visible only to clients that have already loaded that same Prefab. As soon as a client loads the Prefab locally, it sends an acknowledgement [ServerRpcs](../../../docs/advanced-topics/message-system/serverrpc.md), and the server marks that spawned NetworkObject as network-visible for that client.

An important implementation detail to note about this technique is that the server won't wait until all clients load a dynamic Prefab before spawning the corresponding NetworkObject. As a result, a NetworkObject becomes network-visible for a connected client as soon as the client loads it—a client isn't blocked by the loading operation of another client (which might take longer to load the asset or fail to load it at all). A consequence of this asynchronous loading technique is that clients might experience differing world versions momentarily. As a result, it's not recommend to use this technique for spawning game-changing gameplay elements (like a boss fight, for example) if you want all clients to interact with the spawned NetworkObject as soon as the server spawns it..

### Scene 05_API Playground Showcasing All Post-Connection Uses

The `05_API Playground Showcasing All Post-Connection Uses` scene uses a class that serves as the playground of the dynamic Prefab loading uses. It integrates APIs from this sample to use at post-connection time, such as:

- Connection approval for syncing late-joining clients.
- Dynamically loading a collection of network Prefabs on the host and all connected clients.
- Synchronously spawning a dynamically loaded network Prefab across connected clients.
- Spawning a dynamically loaded network Prefab as network-invisible for all clients until they load the Prefab locally (in which case it becomes network-visible to the client).
