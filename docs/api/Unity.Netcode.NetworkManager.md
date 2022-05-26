---  
id: Unity.Netcode.NetworkManager  
title: Unity.Netcode.NetworkManager  
---

<div class="markdown level0 summary">

The main component of the library

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkManager

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkUpdateSystem

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NetworkManager : MonoBehaviour, INetworkUpdateSystem
```

</div>

### Fields

#### LogLevel

<div class="markdown level1 summary">

The log level to use

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public LogLevel LogLevel
```

</div>

##### Field Value

| Type     | Description |
|----------|-------------|
| LogLevel |             |

#### NetworkConfig

<div class="markdown level1 summary">

The current NetworkConfig

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkConfig NetworkConfig
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| NetworkConfig |             |

#### PendingClients

<div class="markdown level1 summary">

Gets a dictionary of the clients that have been accepted by the
transport but are still pending by the Netcode. This is only populated
on the server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly Dictionary<ulong, PendingClient> PendingClients
```

</div>

##### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, PendingClient\> |             |

#### RunInBackground

<div class="markdown level1 summary">

Gets or sets if the application should be set to run in background

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool RunInBackground
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ServerClientId

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const ulong ServerClientId = 0UL
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Properties

#### ConnectedClients

<div class="markdown level1 summary">

Gets a dictionary of connected clients and their clientId keys. This is
only accessible on the server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public IReadOnlyDictionary<ulong, NetworkClient> ConnectedClients { get; }
```

</div>

##### Property Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| IReadOnlyDictionary\<System.UInt64, NetworkClient\> |             |

#### ConnectedClientsIds

<div class="markdown level1 summary">

Gets a list of just the IDs of all connected clients. This is only
accessible on the server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public IReadOnlyList<ulong> ConnectedClientsIds { get; }
```

</div>

##### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<System.UInt64\> |             |

#### ConnectedClientsList

<div class="markdown level1 summary">

Gets a list of connected clients. This is only accessible on the server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public IReadOnlyList<NetworkClient> ConnectedClientsList { get; }
```

</div>

##### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<NetworkClient\> |             |

#### ConnectedHostname

<div class="markdown level1 summary">

The current host name we are connected to, used to validate certificate

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string ConnectedHostname { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### CustomMessagingManager

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public CustomMessagingManager CustomMessagingManager { get; }
```

</div>

##### Property Value

| Type                   | Description |
|------------------------|-------------|
| CustomMessagingManager |             |

#### IsClient

<div class="markdown level1 summary">

Gets Whether or not a client is running

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsClient { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsConnectedClient

<div class="markdown level1 summary">

Gets if we are connected as a client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsConnectedClient { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsHost

<div class="markdown level1 summary">

Gets if we are running as host

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsHost { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsListening

<div class="markdown level1 summary">

Gets Whether or not we are listening for connections

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsListening { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsServer

<div class="markdown level1 summary">

Gets Whether or not a server is running

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsServer { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LocalClient

<div class="markdown level1 summary">

Gets the local NetworkClient for this client.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkClient LocalClient { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkClient |             |

#### LocalClientId

<div class="markdown level1 summary">

Returns ServerClientId if IsServer or LocalClientId if not

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong LocalClientId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### LocalTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTime LocalTime { get; }
```

</div>

##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### NetworkTickSystem

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTickSystem NetworkTickSystem { get; }
```

</div>

##### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkTickSystem |             |

#### NetworkTimeSystem

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTimeSystem NetworkTimeSystem { get; }
```

</div>

##### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkTimeSystem |             |

#### PrefabHandler

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkPrefabHandler PrefabHandler { get; }
```

</div>

##### Property Value

| Type                 | Description |
|----------------------|-------------|
| NetworkPrefabHandler |             |

#### SceneManager

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkSceneManager SceneManager { get; }
```

</div>

##### Property Value

| Type                | Description |
|---------------------|-------------|
| NetworkSceneManager |             |

#### ServerTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTime ServerTime { get; }
```

</div>

##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### ShutdownInProgress

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool ShutdownInProgress { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Singleton

<div class="markdown level1 summary">

The singleton instance of the NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkManager Singleton { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

#### SpawnManager

<div class="markdown level1 summary">

Gets the SpawnManager for this NetworkManager

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkSpawnManager SpawnManager { get; }
```

</div>

##### Property Value

| Type                | Description |
|---------------------|-------------|
| NetworkSpawnManager |             |

### Methods

#### AddNetworkPrefab(GameObject)

<div class="markdown level1 summary">

Adds a new prefab to the network prefab list. This can be any GameObject
with a NetworkObject component, from any source (addressables, asset
bundles, Resource.Load, dynamically created, etc)

There are three limitations to this method:

-   If you have NetworkConfig.ForceSamePrefabs enabled, you can only do
    this before starting networking, and the server and all connected
    clients must all have the same exact set of prefabs added via this
    method before connecting
-   Adding a prefab on the server does not automatically add it on the
    client - it's up to you to make sure the client and server are
    synchronized via whatever method makes sense for your game (RPCs,
    configs, deterministic loading, etc)
-   If the server sends a Spawn message to a client that has not yet
    added a prefab for, the spawn message and any other relevant
    messages will be held for a configurable time (default 1 second,
    configured via NetworkConfig.SpawnTimeout) before an error is
    logged. This is intented to enable the SDK to gracefully handle
    unexpected conditions (slow disks, slow network, etc) that slow down
    asset loading. This timeout should not be relied on and code
    shouldn't be written around it - your code should be written so that
    the asset is expected to be loaded before it's needed.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void AddNetworkPrefab(GameObject prefab)
```

</div>

##### Parameters

| Type       | Name   | Description |
|------------|--------|-------------|
| GameObject | prefab |             |

##### Exceptions

| Type             | Condition |
|------------------|-----------|
| System.Exception |           |

#### DisconnectClient(UInt64)

<div class="markdown level1 summary">

Disconnects the remote client.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void DisconnectClient(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The ClientId to disconnect |

#### GetNetworkPrefabOverride(GameObject)

<div class="markdown level1 summary">

Returns the to use as the override as could be defined within the
NetworkPrefab list Note: This should be used to create pools (with
NetworkObject components) under the scenario where you are using the
Host model as it spawns everything locally. As such, the override will
not be applied when spawning locally on a Host. Related Classes and
Interfaces: NetworkPrefabHandler INetworkPrefabInstanceHandler

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public GameObject GetNetworkPrefabOverride(GameObject gameObject)
```

</div>

##### Parameters

| Type       | Name       | Description                                                           |
|------------|------------|-----------------------------------------------------------------------|
| GameObject | gameObject | the to be checked for a NetworkManager defined NetworkPrefab override |

##### Returns

| Type       | Description                                                                                                    |
|------------|----------------------------------------------------------------------------------------------------------------|
| GameObject | a that is either the override or if no overrides exist it returns the same as the one passed in as a parameter |

#### NetworkUpdate(NetworkUpdateStage)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void NetworkUpdate(NetworkUpdateStage updateStage)
```

</div>

##### Parameters

| Type               | Name        | Description |
|--------------------|-------------|-------------|
| NetworkUpdateStage | updateStage |             |

#### SetSingleton()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetSingleton()
```

</div>

#### Shutdown(Boolean)

<div class="markdown level1 summary">

Globally shuts down the library. Disconnects clients if connected and
stops server if running.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Shutdown(bool discardMessageQueue = false)
```

</div>

##### Parameters

| Type           | Name                | Description                                                                                                                                                                                                                                                                           |
|----------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | discardMessageQueue | If false, any messages that are currently in the incoming queue will be handled, and any messages in the outgoing queue will be sent, before the shutdown is processed. If true, NetworkManager will shut down immediately, and any unprocessed or unsent messages will be discarded. |

#### StartClient()

<div class="markdown level1 summary">

Starts a client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool StartClient()
```

</div>

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### StartHost()

<div class="markdown level1 summary">

Starts a Host

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool StartHost()
```

</div>

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### StartServer()

<div class="markdown level1 summary">

Starts a server

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool StartServer()
```

</div>

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Events

#### ConnectionApprovalCallback

<div class="markdown level1 summary">

The callback to invoke during connection approval

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public event Action<byte[], ulong, NetworkManager.ConnectionApprovedDelegate> ConnectionApprovalCallback
```

</div>

##### Event Type

| Type                                                                                       | Description |
|--------------------------------------------------------------------------------------------|-------------|
| System.Action\<System.Byte\[\], System.UInt64, NetworkManager.ConnectionApprovedDelegate\> |             |

#### OnClientConnectedCallback

<div class="markdown level1 summary">

The callback to invoke once a client connects. This callback is only ran
on the server and on the local client that connects.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public event Action<ulong> OnClientConnectedCallback
```

</div>

##### Event Type

| Type                           | Description |
|--------------------------------|-------------|
| System.Action\<System.UInt64\> |             |

#### OnClientDisconnectCallback

<div class="markdown level1 summary">

The callback to invoke when a client disconnects. This callback is only
ran on the server and on the local client that disconnects.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public event Action<ulong> OnClientDisconnectCallback
```

</div>

##### Event Type

| Type                           | Description |
|--------------------------------|-------------|
| System.Action\<System.UInt64\> |             |

#### OnServerStarted

<div class="markdown level1 summary">

The callback to invoke once the server is ready

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public event Action OnServerStarted
```

</div>

##### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |

### Implements

<div>

INetworkUpdateSystem

</div>

### Extension Methods

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

 
