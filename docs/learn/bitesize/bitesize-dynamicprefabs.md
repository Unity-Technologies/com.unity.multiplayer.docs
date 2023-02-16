---
id: bitesize-dynamicPrefabs
title: Dynamic Prefabs Sample
description: Learn more about the dynamic Prefab system, which allows you to add new spawnable Prefabs at runtime.
---

# Dynamic Addressables Network Prefabs Sample

The [DynamicAddressablesNetworkPrefabs Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/master/Basic/DynamicPrefabs) showcases the available ways you can use dynamic Prefabs to dynamically load network Prefabs at runtime, either pre-connection or post-connection. Doing so allows you to add new spawnable NetworkObject Prefabs to Netcode for GameObjects.

## Uses Breakdown

This sample covers a variety of possible ways you can use dynamically loaded network Prefabs:

- **Pre-loading**: Add dynamic Prefabs to all peers before starting the connection.
- **Connection approval**: Apply server-side validation to late-joining clients after loading dynamic Prefabs.
- **Server-authoritative pre-load all Prefabs asynchronously**: Simplify server spawn management by having the server send a load request to all clients to load a set of network Prefabs.
- **Server-authoritative try spawn synchronously**: Ensure all connected clients individually load a network Prefab before spawning it on the server.
- **Server-authoritative network visibility spawning**: Spawn a network Prefab server-side as soon as it has loaded it locally, and only change the visibility of the spawned NetworkObject when each client loads the Prefab load.

There's also the **APIPlayground**, which serves as an API playground that implements all post-connection uses together.

### Addressables

This sample leverages [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html) to load dynamic Prefabs.

### Scene 00_Preloading Dynamic Prefabs

The `00_Preloading Dynamic Prefabs` scene is the simplest implementation of a dynamic Prefab. It instructs all game instances to load a network Prefab (it can be just one, it can also be a set of network Prefabs) and inject them to NetworkManager's NetworkPrefabs list before starting the server. What's important is that it doesn't matter where the Prefab comes from. It can be a simple Prefab or it can be an Addressable - it's all the same.

This is the lesser intrusive option for your development, as you don't have any extra spawning and Addressables management to perform later in your game.

Here, the sample serializes the AssetReferenceGameObject to this class, but ideally you want to authenticate players when your game starts up and have them fetch network Prefabs from services such as UGS (see [Remote Config](https://docs.unity.com/remote-config)). You should also note that this is a technique that can serve to decrease the install size of your application, since you'd be streaming in networked game assets dynamically.

### Scene 01_Connection Approval Required For Late Joining

The `01_Connection Approval Required For Late Joining` scene uses a class that walks through what a server needs to approve a client when dynamically loading network Prefabs. This is another simple example; it's just the implementation of the connection approval callback, which is an **optional** feature from Netcode for GameObjects. To enable it, enable the **Connection Approval** option on the NetworkManager in your scene. This example enables connection approval functionality to support late-joining clients, and it works best in combination with the techniques from the other example scenes. The other example scenes don't allow for reconciliation after the server loads a Prefab dynamically.

### Scene 02_Server Authoritative Load All Prefabs Asynchronously

The `02_Server Authoritative Load All Prefabs Asynchronously` scene is a simple scenario where the server notifies all clients to pre-load a collection of network Prefabs. The server won't invoke a spawn in this scenario; instead, it incrementally loads each dynamic Prefab, one at a time.

This technique might benefit a scenario where, after all clients connect, the host arrives at a point in the game where it expects that will need to load Prefabs soon. In such a case, the server instructs all clients to preemptively load those Prefabs. Later in the same game session, the server needs to perform a spawn, and can do so knowing all clients have loaded said dynamic Prefab (since it already did so preemptively). This allows for simple spawn management.

This sample is different from the `00_Preloading Dynamic Prefabs` scene, in that it occurs after clients connect and join the game. It allows for more gameplay flexibility and loading different Prefabs based on where players are at in the game, for example.

### Scene 03_Server Authoritative Synchronous Dynamic Prefab Spawn

The `03_Server Authoritative Synchronous Dynamic Prefab Spawn` scene is a dynamic Prefab loading scenario where the server instructs all clients to load a single network Prefab, and only invokes a spawn after all clients have finish loading the Prefab. The server initially sends a [ClientRpc](../../../docs/advanced-topics/message-system/clientrpc.md) to all clients, begins loading the Prefab on the server, awaits a acknowledgement of a load via a [ServerRpcs](../../../docs/advanced-topics/message-system/serverrpc.md) from each client, and only spawns the Prefab over the network after it receives an acknowledgement from every client, within a predetermined amount of time.

This example implementation works best for scenarios where you want to guarantee the same world version across all connected clients. Because the server waits for all clients to finish loading the same dynamic Prefab, the spawn of said dynamic Prefab will be synchronous.

The technique demonstrated in this sample works best for spawning game-changing gameplay elements, assuming you want all clients to be able to interact with said gameplay elements from the same point forward. For example, you don't want to have an enemy that's only visible (network-side or visually) to some clients and not others—you want to delay the spawning the enemy until all clients have dynamically loaded it and are able to see it before spawning it server-side.

### Scene 04_Server Authoritative Spawn Dynamic Prefab Using Network Visibility

The `04_Server Authoritative Spawn Dynamic Prefab Using Network Visibility` scene is a dynamic Prefab loading scenario where the server instructs all clients to load a single network Prefab via a [ClientRpc](../../../docs/advanced-topics/message-system/clientrpc.md), spawns the Prefab as soon as it's loaded on the server, and marks the Prefab as network-visible only to clients that have already loaded that same Prefab. As soon as a client loads the Prefab locally, it sends an acknowledgement [ServerRpcs](../../../docs/advanced-topics/message-system/serverrpc.md), and the server marks that spawned NetworkObject as network-visible for that client.

An important implementation detail to note about this technique is that the server won't wait until all clients load a dynamic Prefab before spawning the corresponding NetworkObject. As a result, a NetworkObject becomes network-visible for a connected client as soon as the client loads it—a client isn't blocked by the loading operation of another client (which might take longer to load the asset or fail to load it at all). A consequence of this asynchronous loading technique is that clients might experience differing world versions momentarily. As a result, it's not recommend to use this technique for spawning game-changing gameplay elements (like a boss fight, for example) if you want all clients to interact with the spawned NetworkObject as soon as the server spawns it..

### Scene 05_API Playground Showcasing All Post-Connection Uses

The `05_API Playground Showcasing All Post-Connection Uses` scene uses a class that serves as the playground of the dynamic Prefab loading uses. It integrates APIs from this sample to use at post-connection time, such as:

- Connection approval for syncing late-joining clients,
- Dynamically loading a collection of network Prefabs on the host and all connected clients,
- Synchronously spawning a dynamically loaded network Prefab across connected clients,
- Spawning a dynamically loaded network Prefab as network-invisible for all clients until they load the Prefab locally (in which case it becomes network-visible to the client).
