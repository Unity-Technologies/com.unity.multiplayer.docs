---
id: Unity.Netcode.NetworkManager
title: Unity.Netcode.NetworkManager
---

# Class NetworkManager


The main component of the library







##### Inheritance


System.Object




NetworkManager






##### Implements



INetworkUpdateSystem





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class NetworkManager : MonoBehaviour, INetworkUpdateSystem
```



### Fields

#### LogLevel


The log level to use






##### Declaration


``` lang-csharp
public LogLevel LogLevel
```



##### Field Value

| Type     | Description |
|----------|-------------|
| LogLevel |             |

#### NetworkConfig


The current NetworkConfig






##### Declaration


``` lang-csharp
public NetworkConfig NetworkConfig
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| NetworkConfig |             |

#### PendingClients


Gets a dictionary of the clients that have been accepted by the
transport but are still pending by the Netcode. This is only populated
on the server.






##### Declaration


``` lang-csharp
public readonly Dictionary<ulong, PendingClient> PendingClients
```



##### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, PendingClient\> |             |

#### RunInBackground


Gets or sets if the application should be set to run in background






##### Declaration


``` lang-csharp
public bool RunInBackground
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ServerClientId


The client id used to represent the server






##### Declaration


``` lang-csharp
public const ulong ServerClientId = 0UL
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Properties

#### ConnectedClients


Gets a dictionary of connected clients and their clientId keys. This is
only accessible on the server.






##### Declaration


``` lang-csharp
public IReadOnlyDictionary<ulong, NetworkClient> ConnectedClients { get; }
```



##### Property Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| IReadOnlyDictionary\<System.UInt64, NetworkClient\> |             |

#### ConnectedClientsIds


Gets a list of just the IDs of all connected clients. This is only
accessible on the server.






##### Declaration


``` lang-csharp
public IReadOnlyList<ulong> ConnectedClientsIds { get; }
```



##### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<System.UInt64\> |             |

#### ConnectedClientsList


Gets a list of connected clients. This is only accessible on the server.






##### Declaration


``` lang-csharp
public IReadOnlyList<NetworkClient> ConnectedClientsList { get; }
```



##### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<NetworkClient\> |             |

#### ConnectedHostname


The current host name we are connected to, used to validate certificate






##### Declaration


``` lang-csharp
public string ConnectedHostname { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### ConnectionApprovalCallback


The callback to invoke during connection approval. Allows client code to
decide whether or not to allow incoming client connection






##### Declaration


``` lang-csharp
public Action<NetworkManager.ConnectionApprovalRequest, NetworkManager.ConnectionApprovalResponse> ConnectionApprovalCallback { get; set; }
```



##### Property Value

| Type                                                                                                 | Description |
|------------------------------------------------------------------------------------------------------|-------------|
| System.Action\<NetworkManager.ConnectionApprovalRequest, NetworkManager.ConnectionApprovalResponse\> |             |

#### CustomMessagingManager


Gets the CustomMessagingManager for this NetworkManager






##### Declaration


``` lang-csharp
public CustomMessagingManager CustomMessagingManager { get; }
```



##### Property Value

| Type                   | Description |
|------------------------|-------------|
| CustomMessagingManager |             |

#### IsClient


Gets Whether or not a client is running






##### Declaration


``` lang-csharp
public bool IsClient { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsConnectedClient


Gets if we are connected as a client






##### Declaration


``` lang-csharp
public bool IsConnectedClient { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsHost


Gets if we are running as host






##### Declaration


``` lang-csharp
public bool IsHost { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsListening


Gets Whether or not we are listening for connections






##### Declaration


``` lang-csharp
public bool IsListening { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsServer


Gets Whether or not a server is running






##### Declaration


``` lang-csharp
public bool IsServer { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LocalClient


Gets the local NetworkClient for this client.






##### Declaration


``` lang-csharp
public NetworkClient LocalClient { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkClient |             |

#### LocalClientId


Returns ServerClientId if IsServer or LocalClientId if not






##### Declaration


``` lang-csharp
public ulong LocalClientId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### LocalTime


The local NetworkTime






##### Declaration


``` lang-csharp
public NetworkTime LocalTime { get; }
```



##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### NetworkTickSystem


Accessor for the NetworkTickSystem of the NetworkManager.






##### Declaration


``` lang-csharp
public NetworkTickSystem NetworkTickSystem { get; }
```



##### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkTickSystem |             |

#### NetworkTimeSystem


Accessor for the NetworkTimeSystem of the NetworkManager. Prefer the use
of the LocalTime and ServerTime properties






##### Declaration


``` lang-csharp
public NetworkTimeSystem NetworkTimeSystem { get; }
```



##### Property Value

| Type              | Description |
|-------------------|-------------|
| NetworkTimeSystem |             |

#### PrefabHandler


The NetworkPrefabHandler instance created after starting the
NetworkManager






##### Declaration


``` lang-csharp
public NetworkPrefabHandler PrefabHandler { get; }
```



##### Property Value

| Type                 | Description |
|----------------------|-------------|
| NetworkPrefabHandler |             |

#### SceneManager


The NetworkSceneManager instance created after starting the
NetworkManager






##### Declaration


``` lang-csharp
public NetworkSceneManager SceneManager { get; }
```



##### Property Value

| Type                | Description |
|---------------------|-------------|
| NetworkSceneManager |             |

#### ServerTime


The NetworkTime on the server






##### Declaration


``` lang-csharp
public NetworkTime ServerTime { get; }
```



##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### ShutdownInProgress


Can be used to determine if the NetworkManager is currently shutting
itself down






##### Declaration


``` lang-csharp
public bool ShutdownInProgress { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Singleton


The singleton instance of the NetworkManager






##### Declaration


``` lang-csharp
public static NetworkManager Singleton { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

#### SpawnManager


Gets the SpawnManager for this NetworkManager






##### Declaration


``` lang-csharp
public NetworkSpawnManager SpawnManager { get; }
```



##### Property Value

| Type                | Description |
|---------------------|-------------|
| NetworkSpawnManager |             |

### Methods

#### AddNetworkPrefab(GameObject)


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






##### Declaration


``` lang-csharp
public void AddNetworkPrefab(GameObject prefab)
```



##### Parameters

| Type       | Name   | Description |
|------------|--------|-------------|
| GameObject | prefab |             |

##### Exceptions

| Type             | Condition |
|------------------|-----------|
| System.Exception |           |

#### DisconnectClient(UInt64)


Disconnects the remote client.






##### Declaration


``` lang-csharp
public void DisconnectClient(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The ClientId to disconnect |

#### GetNetworkPrefabOverride(GameObject)


Returns the to use as the override as could be defined within the
NetworkPrefab list Note: This should be used to create pools (with
NetworkObject components) under the scenario where you are using the
Host model as it spawns everything locally. As such, the override will
not be applied when spawning locally on a Host. Related Classes and
Interfaces: NetworkPrefabHandler INetworkPrefabInstanceHandler






##### Declaration


``` lang-csharp
public GameObject GetNetworkPrefabOverride(GameObject gameObject)
```



##### Parameters

| Type       | Name       | Description                                                           |
|------------|------------|-----------------------------------------------------------------------|
| GameObject | gameObject | the to be checked for a NetworkManager defined NetworkPrefab override |

##### Returns

| Type       | Description                                                                                                    |
|------------|----------------------------------------------------------------------------------------------------------------|
| GameObject | a that is either the override or if no overrides exist it returns the same as the one passed in as a parameter |

#### NetworkUpdate(NetworkUpdateStage)


The update method that is being executed in the context of related
NetworkUpdateStage.






##### Declaration


``` lang-csharp
public void NetworkUpdate(NetworkUpdateStage updateStage)
```



##### Parameters

| Type               | Name        | Description                                    |
|--------------------|-------------|------------------------------------------------|
| NetworkUpdateStage | updateStage | The NetworkUpdateStage that is being executed. |

#### RemoveNetworkPrefab(GameObject)


Remove a prefab from the prefab list. As with AddNetworkPrefab, this is
specific to the client it's called on - calling it on the server does
not automatically remove anything on any of the client processes.

Like AddNetworkPrefab, when NetworkConfig.ForceSamePrefabs is enabled,
this cannot be called after connecting.






##### Declaration


``` lang-csharp
public void RemoveNetworkPrefab(GameObject prefab)
```



##### Parameters

| Type       | Name   | Description |
|------------|--------|-------------|
| GameObject | prefab |             |

#### SetSingleton()


Set this NetworkManager instance as the static NetworkManager singleton






##### Declaration


``` lang-csharp
public void SetSingleton()
```



#### Shutdown(Boolean)


Globally shuts down the library. Disconnects clients if connected and
stops server if running.






##### Declaration


``` lang-csharp
public void Shutdown(bool discardMessageQueue = false)
```



##### Parameters

| Type           | Name                | Description                                                                                                                                                                                                                                                                           |
|----------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | discardMessageQueue | If false, any messages that are currently in the incoming queue will be handled, and any messages in the outgoing queue will be sent, before the shutdown is processed. If true, NetworkManager will shut down immediately, and any unprocessed or unsent messages will be discarded. |

#### StartClient()


Starts a client






##### Declaration


``` lang-csharp
public bool StartClient()
```



##### Returns

| Type           | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| System.Boolean | (/) returns true if NetworkManager started in client mode successfully. |

#### StartHost()


Starts a Host






##### Declaration


``` lang-csharp
public bool StartHost()
```



##### Returns

| Type           | Description                                                           |
|----------------|-----------------------------------------------------------------------|
| System.Boolean | (/) returns true if NetworkManager started in host mode successfully. |

#### StartServer()


Starts a server






##### Declaration


``` lang-csharp
public bool StartServer()
```



##### Returns

| Type           | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| System.Boolean | (/) returns true if NetworkManager started in server mode successfully. |

### Events

#### OnClientConnectedCallback


The callback to invoke once a client connects. This callback is only ran
on the server and on the local client that connects.






##### Declaration


``` lang-csharp
public event Action<ulong> OnClientConnectedCallback
```



##### Event Type

| Type                           | Description |
|--------------------------------|-------------|
| System.Action\<System.UInt64\> |             |

#### OnClientDisconnectCallback


The callback to invoke when a client disconnects. This callback is only
ran on the server and on the local client that disconnects.






##### Declaration


``` lang-csharp
public event Action<ulong> OnClientDisconnectCallback
```



##### Event Type

| Type                           | Description |
|--------------------------------|-------------|
| System.Action\<System.UInt64\> |             |

#### OnServerStarted


The callback to invoke once the server is ready






##### Declaration


``` lang-csharp
public event Action OnServerStarted
```



##### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |

#### OnTransportFailure


The callback to invoke if the NetworkTransport fails.






##### Declaration


``` lang-csharp
public event Action OnTransportFailure
```



##### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |

##### Remarks


A failure of the transport is always followed by the NetworkManager
shutting down. Recovering from a transport failure would normally entail
reconfiguring the transport (e.g. re-authenticating, or recreating a new
service allocation depending on the transport) and restarting the
client/server/host.



### Implements



INetworkUpdateSystem



### Extension Methods



NetworkUpdateLoop.RegisterAllNetworkUpdates(INetworkUpdateSystem)





NetworkUpdateLoop.RegisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)





NetworkUpdateLoop.UnregisterAllNetworkUpdates(INetworkUpdateSystem)





NetworkUpdateLoop.UnregisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)





