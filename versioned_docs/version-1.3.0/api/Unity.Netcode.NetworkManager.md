---
id: Unity.Netcode.NetworkManager
title: Unity.Netcode.NetworkManager
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:34 pm
---

<div class="markdown level0 summary">

The main component of the library

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

## Implements

<div>

INetworkUpdateSystem

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class NetworkManager : MonoBehaviour, INetworkUpdateSystem
```

## Fields

### LogLevel

<div class="markdown level1 summary">

The log level to use

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public LogLevel LogLevel
```

#### Field Value

| Type     | Description |
|----------|-------------|
| LogLevel |             |

### NetworkConfig

<div class="markdown level1 summary">

The current NetworkConfig

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkConfig NetworkConfig
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| NetworkConfig |             |

### PendingClients

<div class="markdown level1 summary">

Gets a dictionary of the clients that have been accepted by the transport but are still pending by the Netcode. This is only populated on the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly Dictionary<ulong, PendingClient> PendingClients
```

#### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, PendingClient\> |             |

### RunInBackground

<div class="markdown level1 summary">

Gets or sets if the application should be set to run in background

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool RunInBackground
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ServerClientId

<div class="markdown level1 summary">

The client id used to represent the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const ulong ServerClientId = 0UL
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

## Properties

### ConnectedClients

<div class="markdown level1 summary">

Gets a dictionary of connected clients and their clientId keys. This is

only accessible on the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IReadOnlyDictionary<ulong, NetworkClient> ConnectedClients { get; }
```

#### Property Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| IReadOnlyDictionary\<System.UInt64, NetworkClient\> |             |

### ConnectedClientsIds

<div class="markdown level1 summary">

Gets a list of just the IDs of all connected clients. This is only

accessible on the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IReadOnlyList<ulong> ConnectedClientsIds { get; }
```

#### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<System.UInt64\> |             |

### ConnectedClientsList

<div class="markdown level1 summary">

Gets a list of connected clients. This is only accessible on the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IReadOnlyList<NetworkClient> ConnectedClientsList { get; }
```

#### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<NetworkClient\> |             |

### ConnectedHostname

<div class="markdown level1 summary">

The current host name we are connected to, used to validate certificate

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ConnectedHostname { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ConnectionApprovalCallback

<div class="markdown level1 summary">

The callback to invoke during connection approval. Allows client code to decide whether or not to allow incoming client connection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public Action<NetworkManager.ConnectionApprovalRequest, NetworkManager.ConnectionApprovalResponse> ConnectionApprovalCallback { get; set; }
```

#### Property Value

| Type                                                                                                 | Description |
|------------------------------------------------------------------------------------------------------|-------------|
| System.Action\<NetworkManager.ConnectionApprovalRequest, NetworkManager.ConnectionApprovalResponse\> |             |

### CustomMessagingManager

<div class="markdown level1 summary">

Gets the CustomMessagingManager for this NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public CustomMessagingManager CustomMessagingManager { get; }
```

#### Property Value

| Type                   | Description |
|------------------------|-------------|
| CustomMessagingManager |             |

### DisconnectReason

<div class="markdown level1 summary">

When disconnected from the server, the server may send a reason. If a reason was sent, this property will tell client code what the reason was. It should be queried after the OnClientDisconnectCallback is called

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string DisconnectReason { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### IsApproved

<div class="markdown level1 summary">

Is true when the client has been approved.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsApproved { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Remarks

<div class="markdown level1 remarks">

This only reflects the client's approved status and does not mean the client has finished the connection and synchronization process. The server-host will always be approved upon being starting the NetworkManager IsConnectedClient

</div>

### IsClient

<div class="markdown level1 summary">

Gets Whether or not a client is running

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsClient { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsConnectedClient

<div class="markdown level1 summary">

When true, the client is connected, approved, and synchronized with the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsConnectedClient { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsHost

<div class="markdown level1 summary">

Gets if we are running as host

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsHost { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsListening

<div class="markdown level1 summary">

Gets Whether or not we are listening for connections

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsListening { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsServer

<div class="markdown level1 summary">

Gets Whether or not a server is running

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsServer { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LocalClient

<div class="markdown level1 summary">

Gets the local NetworkClient for this client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkClient LocalClient { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkClient |             |

### LocalClientId

<div class="markdown level1 summary">

Returns ServerClientId if IsServer or LocalClientId if not

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong LocalClientId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### LocalTime

<div class="markdown level1 summary">

The local NetworkTime

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime LocalTime { get; }
```

#### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### NetworkTickSystem

<div class="markdown level1 summary">

Accessor for the NetworkTickSystem of the NetworkManager.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTickSystem NetworkTickSystem { get; }
```

#### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkTickSystem |             |

### NetworkTimeSystem

<div class="markdown level1 summary">

Accessor for the NetworkTimeSystem of the NetworkManager. Prefer the use of the LocalTime and ServerTime properties

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTimeSystem NetworkTimeSystem { get; }
```

#### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkTimeSystem |             |

### PrefabHandler

<div class="markdown level1 summary">

The NetworkPrefabHandler instance created after starting the

NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPrefabHandler PrefabHandler { get; }
```

#### Property Value

| Type                 | Description |
|----------------------|-------------|
| NetworkPrefabHandler |             |

### SceneManager

<div class="markdown level1 summary">

The NetworkSceneManager instance created after starting the

NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkSceneManager SceneManager { get; }
```

#### Property Value

| Type                | Description |
|---------------------|-------------|
| NetworkSceneManager |             |

### ServerTime

<div class="markdown level1 summary">

The NetworkTime on the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime ServerTime { get; }
```

#### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### ShutdownInProgress

<div class="markdown level1 summary">

Can be used to determine if the NetworkManager is currently shutting itself down

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool ShutdownInProgress { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Singleton

<div class="markdown level1 summary">

The singleton instance of the NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkManager Singleton { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

### SpawnManager

<div class="markdown level1 summary">

Gets the SpawnManager for this NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkSpawnManager SpawnManager { get; }
```

#### Property Value

| Type                | Description |
|---------------------|-------------|
| NetworkSpawnManager |             |

## Methods

### AddNetworkPrefab(GameObject)

<div class="markdown level1 summary">

Adds a new prefab to the network prefab list. This can be any GameObject with a NetworkObject component, from any source (addressables, asset bundles, Resource.Load, dynamically created, etc) There are three limitations to this method:

* If you have NetworkConfig.ForceSamePrefabs enabled, you can only do this before starting networking, and the server and all connected clients must all have the same exact set of prefabs added via this method before connecting

* Adding a prefab on the server does not automatically add it on the client - it's up to you to make sure the client and server are synchronized via whatever method makes sense for your game (RPCs, configs, deterministic loading, etc)

* If the server sends a Spawn message to a client that has not yet added a prefab for, the spawn message and any other relevant messages will be held for a configurable time (default 1 second, configured via NetworkConfig.SpawnTimeout) before an error is logged. This is intented to enable the SDK to gracefully handle unexpected conditions (slow disks, slow network, etc) that slow down asset loading. This timeout should not be relied on and code shouldn't be written around it - your code should be written so that the asset is expected to be loaded before it's needed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddNetworkPrefab(GameObject prefab)
```

#### Parameters

| Type       | Name   | Description |
|------------|--------|-------------|
| GameObject | prefab |             |

#### Exceptions

| Type             | Condition |
|------------------|-----------|
| System.Exception |           |

### DisconnectClient(UInt64)

<div class="markdown level1 summary">

Disconnects the remote client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void DisconnectClient(ulong clientId)
```

#### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The ClientId to disconnect |

### DisconnectClient(UInt64, String)

<div class="markdown level1 summary">

Disconnects the remote client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void DisconnectClient(ulong clientId, string reason)
```

#### Parameters

| Type          | Name     | Description                                                                                                                                               |
|---------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | clientId | The ClientId to disconnect                                                                                                                                |
| System.String | reason   | Disconnection reason. If set, client will receive a DisconnectReasonMessage and have the reason available in the NetworkManager.DisconnectReason property |

### GetNetworkPrefabOverride(GameObject)

<div class="markdown level1 summary">

Returns the to use as the override as could be defined within the NetworkPrefab list Note: This should be used to create pools (with NetworkObject components) under the scenario where you are using the Host model as it spawns everything locally. As such, the override will not be applied when spawning locally on a Host. Related Classes and Interfaces: NetworkPrefabHandler INetworkPrefabInstanceHandler

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GameObject GetNetworkPrefabOverride(GameObject gameObject)
```

#### Parameters

| Type       | Name       | Description                                                           |
|------------|------------|-----------------------------------------------------------------------|
| GameObject | gameObject | the to be checked for a NetworkManager defined NetworkPrefab override |

#### Returns

| Type       | Description                                                                                                    |
|------------|----------------------------------------------------------------------------------------------------------------|
| GameObject | a that is either the override or if no overrides exist it returns the same as the one passed in as a parameter |

### NetworkUpdate(NetworkUpdateStage)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void NetworkUpdate(NetworkUpdateStage updateStage)
```

#### Parameters

| Type               | Name        | Description |
|--------------------|-------------|-------------|
| NetworkUpdateStage | updateStage |             |

### RemoveNetworkPrefab(GameObject)

<div class="markdown level1 summary">

Remove a prefab from the prefab list. As with AddNetworkPrefab, this is specific to the client it's called on - calling it on the server does not automatically remove anything on any of the client processes. Like AddNetworkPrefab, when NetworkConfig.ForceSamePrefabs is enabled, this cannot be called after connecting.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RemoveNetworkPrefab(GameObject prefab)
```

#### Parameters

| Type       | Name   | Description |
|------------|--------|-------------|
| GameObject | prefab |             |

### SetSingleton()

<div class="markdown level1 summary">

Set this NetworkManager instance as the static NetworkManager singleton

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetSingleton()
```

### Shutdown(Boolean)

<div class="markdown level1 summary">

Globally shuts down the library. Disconnects clients if connected and

stops server if running.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Shutdown(bool discardMessageQueue = false)
```

#### Parameters

| Type           | Name                | Description                                                                                                                                                                                                                                                                           |
|----------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | discardMessageQueue | If false, any messages that are currently in the incoming queue will be handled, and any messages in the outgoing queue will be sent, before the shutdown is processed. If true, NetworkManager will shut down immediately, and any unprocessed or unsent messages will be discarded. |

### StartClient()

<div class="markdown level1 summary">

Starts a client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool StartClient()
```

#### Returns

| Type           | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| System.Boolean | (/) returns true if NetworkManager started in client mode successfully. |

### StartHost()

<div class="markdown level1 summary">

Starts a Host

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool StartHost()
```

#### Returns

| Type           | Description                                                           |
|----------------|-----------------------------------------------------------------------|
| System.Boolean | (/) returns true if NetworkManager started in host mode successfully. |

### StartServer()

<div class="markdown level1 summary">

Starts a server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool StartServer()
```

#### Returns

| Type           | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| System.Boolean | (/) returns true if NetworkManager started in server mode successfully. |

## Events

### OnClientConnectedCallback

<div class="markdown level1 summary">

The callback to invoke once a client connects. This callback is only ran on the server and on the local client that connects.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event Action<ulong> OnClientConnectedCallback
```

#### Event Type

| Type                           | Description |
|--------------------------------|-------------|
| System.Action\<System.UInt64\> |             |

### OnClientDisconnectCallback

<div class="markdown level1 summary">
The callback to invoke when a client disconnects. This callback is only ran on the server and on the local client that disconnects.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event Action<ulong> OnClientDisconnectCallback
```

#### Event Type

| Type                           | Description |
|--------------------------------|-------------|
| System.Action\<System.UInt64\> |             |

### OnServerStarted

<div class="markdown level1 summary">

The callback to invoke once the server is ready

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event Action OnServerStarted
```

#### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |

### OnTransportFailure

<div class="markdown level1 summary">

The callback to invoke if the NetworkTransport fails.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event Action OnTransportFailure
```

#### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |

#### Remarks

<div class="markdown level1 remarks">
A failure of the transport is always followed by the NetworkManager shutting down. Recovering from a transport failure would normally entail reconfiguring the transport (e.g. re-authenticating, or recreating a new service allocation depending on the transport) and restarting the client/server/host.

</div>

### Implements

<div>

INetworkUpdateSystem

</div>

#### Extension Methods

<div>

NetworkUpdateLoop.RegisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.RegisterNetworkUpdate(INetworkUpdateSystem,

NetworkUpdateStage)

</div>

<div>

NetworkUpdateLoop.UnregisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.UnregisterNetworkUpdate(INetworkUpdateSystem,

NetworkUpdateStage)

</div>
