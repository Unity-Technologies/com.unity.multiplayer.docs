---
id: bitesize-dynamicprefabs
title: Dynamic Prefabs Sample
description: Learn more about the dynamic prefab system, which allows us to add new spawnable prefabs at runtime.
---
# Dynamic Addressables Network Prefabs Sample


The [DynamicAddressablesNetworkPrefabs Sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/master/Basic/DynamicPrefabs) showcases the available use-cases for dynamically loading network prefabs at runtime, either pre-connection or post-connection, which allows us to add new spawnable NetworkObject prefabs to Netcode for GameObjects.

# Project Overview

## Use-cases Breakdown

This sample covers a variety of possible use-cases for dynamically loading network prefabs:

- **Preloading:** dynamic prefabs get added on all peers *before* we start the connection
- **Connection Approval:** the validation that a server would apply to validate late-joining clients after dynamic prefabs have been loaded on the server
- **Server Authoritative Preload All Prefabs Asynchronously:** the server sends a load request to all clients to load a set of network prefabs, for simpler future spawn management
- **Server Authoritative Try Spawn Synchronously:** the server waits for all connected clients to individually load a network prefab before spawning on the server
- **Server Authoritative Network Visibility Spawning:** the server spawns a network prefab as soon as it has loaded it locally, and changes the visibility of the spawned NetworkObject when each client completes their respective prefab load
- **APIPlayground:** this integration serves as an API playground, where all post-connection use-cases are used in harmony 
<br>

### Addressables

This sample leverages Addressables to load dynamic prefabs. which. For more information about Addressables, check out the [Addressables package documentation](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html).
<br><br>

### Scene 00_Preloading Dynamic Prefabs

This is the simplest case of a dynamic prefab - we instruct all game instances to load a network prefab (it can be just one, it could also be a set of network prefabs) and inject them to NetworkManager's NetworkPrefabs list before starting the server. What's important is that it doesn't really matter where the prefab comes from. It could be a simple prefab or it could be an Addressable - it's all the same.

This is the lesser intrusive option for your development, as you don't have any additional spawning and Addressables management to perform later in your game. 

Here, we're serializing the AssetReferenceGameObject to this class, but ideally you'd want to authenticate players when your game starts up and have them fetch network prefabs from services such as UGS (see Remote Config). It should also be noted that this is a technique that could serve to decrease the install size of your application, since you'd be streaming in networked game assets dynamically.
<br><br>

### Scene 01_Connection Approval Required For Late Joining

A class that walks through what a server would need to validate from a client when dynamically loading network prefabs. This is another simple use-case scenario, as this is just the implementation of the connection approval callback, which is an **optional** feature from Netcode for GameObjects. To enable it, make sure the "Connection Approval" toggle is enabled on the NetworkManager in your scene. Other use-cases don't allow for reconciliation after the server has loaded a prefab dynamically, whereas this one enables that functionality. This is to support late join and should be used in combination with the other techniques described below.
<br><br>

### Scene 02_Server Authoritative Load All Prefabs Asynchronously

A simple use-case where the server notifies all clients to preload a collection of network prefabs. The server will not invoke a spawn in this use-case, and will incrementally load each dynamic prefab, one prefab at a time.

A gameplay scenario where this technique would be useful: clients and host are connected, the host arrives at a point in the game where they know some prefabs will be needed soon, and so the server instructs all clients to preemptively load those prefabs. Some time later in the same session, the server needs to perform a spawn, and can do so without making sure all clients have loaded said dynamic prefab, since it already did so preemptively. This allows for simple spawn management.

This is different from option 00, as here this is done after clients are connected and already in game. This allows for more flexibility around your gameplay and could load different prefabs depending on where your players are at in the game, for example.
<br><br>

### Scene 03_Server Authoritative Synchronous Dynamic Prefab Spawn

A dynamic prefab loading use-case where the server instructs all clients to load a single network prefab, and will only invoke a spawn once all clients have successfully completed their respective loads of said prefab. The server will initially send a ClientRpc to all clients, begin loading the prefab on the server, will await acknowledgement of a load via ServerRpcs from each client, and will only spawn the prefab over the network once it has received an acknowledgement from every client, within a predetermined amount of time.

This use-case is recommended for scenarios where you'd want to guarantee the same world version across all connected clients. Since the server will wait until all clients have loaded the same dynamic prefab, the spawn of said dynamic prefab will be synchronous. Thus, we recommend using this technique for spawning game-changing gameplay elements, assuming you'd want all clients to be able to interact with said gameplay elements from the same point forward. For example, you wouldn't want to have an enemy only be visible (network side and/or visually) to some clients and not others -- you'd want to delay the enemy's spawn until all clients have dynamically loaded it and are able to see it before spawning it server side.
<br><br>

### Scene 04_Server Authoritative Spawn Dynamic Prefab Using Network Visibility

A dynamic prefab loading use-case where the server instructs all clients to load a single network prefab via a ClientRpc, will spawn said prefab as soon as it is loaded on the server, and will mark it as network-visible only to clients that have already loaded that same prefab. As soon as a client loads the prefab locally, it sends an acknowledgement ServerRpc, and the server will mark that spawned NetworkObject as network-visible to that client.

An important implementation detail to note about this technique: the server will not wait until all clients have loaded a dynamic prefab before spawning the corresponding NetworkObject. Thus, this means that a NetworkObject will become network-visible for a connected client as soon as it has loaded it as well -- a client is not blocked by the loading operation of another client (which may be loading the asset slower or may have failed to load it at all). A consequence of this asynchronous loading technique is that clients may experience differing world versions momentarily. Therefore, we don't recommend using this technique for spawning game-changing gameplay elements (like a boss fight for example) assuming you'd want all clients to interact with the spawned NetworkObject as soon as it is spawned on the server.
<br><br>

### Scene 05_API Playground Showcasing All Post-Connection Use-Cases

This class serves as the playground of the dynamic prefab loading use-cases. It integrates API from this sample to use at post-connection time such as: connection approval for syncing late-joining clients, dynamically loading a collection of network prefabs on the host and all connected clients, synchronously spawning a dynamically loaded network prefab across connected clients, and spawning a dynamically loaded network prefab as network-invisible for all clients until they load the prefab locally (in which case it becomes network-visible to the client).
