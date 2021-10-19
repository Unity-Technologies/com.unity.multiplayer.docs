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

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkUpdateSystem

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class NetworkManager : MonoBehaviour, INetworkUpdateSystem
```

## 

### DontDestroy

<div class="markdown level1 summary">

Gets or sets if the NetworkManager should be marked as DontDestroyOnLoad

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool DontDestroy
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

Gets a dictionary of the clients that have been accepted by the
transport but are still pending by the Netcode. This is only populated
on the server.

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
| System.Collections.Generic.Dictionary\&lt;System.UInt64, PendingClient&gt; |             |

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

## 

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
| IReadOnlyDictionary\&lt;System.UInt64, NetworkClient&lt; |             |

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
| IReadOnlyList\&lt;System.UInt64&lt; |             |

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
| IReadOnlyList\&lt; NetworkClient&lt; |             |

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

### CustomMessagingManager

<div class="markdown level1 summary">

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

Gets if we are connected as a client

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

### ServerClientId

<div class="markdown level1 summary">

Gets the networkId of the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong ServerClientId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ServerTime

<div class="markdown level1 summary">

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

## 

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

### GetNetworkPrefabOverride(GameObject)

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

### SetSingleton()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetSingleton()
```

### Shutdown()

<div class="markdown level1 summary">

Globally shuts down the library. Disconnects clients if connected and
stops server if running.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Shutdown()
```

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

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### ConnectionApprovalCallback

<div class="markdown level1 summary">

The callback to invoke during connection approval

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event Action<byte[], ulong, NetworkManager.ConnectionApprovedDelegate> ConnectionApprovalCallback
```

#### Event Type

| Type                                                                                       | Description |
|--------------------------------------------------------------------------------------------|-------------|
| System.Action\<System.Byte\[\], System.UInt64, NetworkManager.ConnectionApprovedDelegate\> |             |

### OnClientConnectedCallback

<div class="markdown level1 summary">

The callback to invoke once a client connects. This callback is only ran
on the server and on the local client that connects.

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

The callback to invoke when a client disconnects. This callback is only
ran on the server and on the local client that disconnects.

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
