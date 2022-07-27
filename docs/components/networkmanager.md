---
id: networkmanager
title: NetworkManager
---

The `NetworkManager` is a required **Netcode for GameObjects (Netcode)** component that contains all of your project's netcode related settings. Think of it as the "central netcode hub" for your netcode enabled project.  

### `NetworkManager` Inspector Properties

- **LogLevel**:  Sets the network logging level 
- **PlayerPrefab**:  When a prefab is assigned, the prefab will be instantiated as the player object and assigned to the newly connected and authorized client.
- **NetworkPrefabs**: Where you register your network prefabs.  You can also create a single network prefab override per registered network prefab here.
- **Protocol Version**: Set this value to help distinguish between builds when the most current build has new assets that could cause issues with older builds connecting.
- **Network Transport**: Where your network specific settings and transport type is set.  This field accepts any INetworkTransport implementation.  However, unless you have unique transport specific needs UnityTransport is the recommended transport to use with Netcode for GameObjects.
- **Tick Rate**: This value controls the network tick update rate.
- **Ensure Network Variable Length Safety**: (Increases cpu processing and bandwidth) When this property is checked, Netcode for GameObjects will prevent user code from writing past the boundaries of a NetworkVariable.
- **Connection Approval**: This enables [connection approval](../getting-started/connection-approval.md) when this is checked and the `NetworkManager.ConnectionApprovalCallback` is assigned.
- **Client Connection Buffer Timeout**: This value sets the amount of time that has to pass for a connecting client to complete the connection approval process.  If the time specified is exceeded the connecting client will be disconnected.
- **Force Same Prefabs**: When checked it will always verify that connecting clients have the same registered network prefabs as the server.  When not checked, Netcode for GameObjects will ignore any differences.
- **Recycle Network Ids**: When checked this will re-use previously assigned `NetworkObject.NetworkObjectIds` after the specified period of time.
- **Network Id Recycle Delay**: The time it takes for a previously assigned but currently unassigned identifier to be available for use.  
- **Enable Scene Management**: When checked Netcode for GameObjects will handle scene management and client synchronization for you.  When not checked, users will have to create their own scene management scripts and handle client synchronization.
- **Load Scene Time Out**: When Enable Scene Management is checked, this specifies the period of time the `NetworkSceneManager` will wait while a scene is being loaded asynchronously before `NetworkSceneManager` considers the load/unload scene event to have failed/timed out.
  
### `NetworkManager` Sub-Systems
`NetworkManager` is also where you can find references to other Netcode related management systems:<br/>

:::caution
All `NetworkManager` sub-systems are instantiated once the `NetworkManager` is started (i.e. NetworkManager.IsListening == true).  A good general "rule of thumb" is to not attempt to access the below sub-systems prior to starting the `NetworkManager`, otherwise they will not yet be initialized.
:::

- [NetworkManager.PrefabHandler](../advanced-topics/object-pooling.md): This provides access to the NetworkPrefabHandler that is used for NetworkObject pools and to have more control overriding network prefabs.
- [NetworkManager.SceneManager](../basics/scene-management.md): When scene management is enabled, this is used to load and unload scenes, register for scene events, and other scene management related actions.
- [NetworkManager.SpawnManager](../basics/object-spawning.md): This handles NetworkObject spawn related functionality.
- [NetworkManager.NetworkTimeSystem](../advanced-topics/networktime-ticks.md): a synchronized time that can be used to handle issues with latency between a client and the server.
- [NetworkManager.NetworkTickSystem](../advanced-topics/networktime-ticks#network-ticks.md): Use this to adjust the frequency of when NetworkVariables are updated.
- [NetworkManager.CustomMessagingManager](../advanced-topics/message-system/custom-messages.md): Use this system to create and send custom messages.

## Starting a Server, Host, or Client

In order to perform any netcode related action that involves sending messages, you must first have a server started and listening for connections with at least one client (_a server can send RPCs to itself when running as a host_) that is connected.  In order to accomplish this, you must first start your `NetworkManager` as a server, host, or client.  There are three `NetworkManager` methods you can invoke to accomplish this:

```csharp
NetworkManager.Singleton.StartServer();      // Starts the NetworkManager as just a server (i.e. no local client).
NetworkManager.Singleton.StartHost();        // Starts the NetworkManager as both a server and a client (i.e. has local client)
NetworkManager.Singleton.StartClient();      // Starts the NetworkManager as just a client.
```

:::warning
Do not start a NetworkManager within a NetworkBehaviour's Awake method as this can lead to undesirable results depending upon your project's settings!
:::

:::note
 When starting a Server or joining an already started session as client, the `NetworkManager` can spawn a "Player Object" belonging to the client.

 For more information about player prefabs see:
 - [NetworkObject Player Prefab Documentation](../basics/networkobject.md#player-objects)
 - [Connection Approval](../getting-started/connection-approval.md)  
:::

## Connecting

When Starting a Client, the `NetworkManager` uses the IP and the Port provided in your `Transport` component for connecting. While you can set the IP address in the editor, many times you might want to be able to set the IP address and port during runtime.

If you are using [Unity Transport](../../transport/about.md) it would look like this:

```csharp
NetworkManager.Singleton.GetComponent<UnityTransport>().ConnectionData.Address = "127.0.0.1"; //takes string
NetworkManager.Singleton.GetComponent<UnityTransport>().ConnectionDat.Port = 12345;           //takes integer
```

[More information about Netcode for GameObjects Transports](../advanced-topics/transports.md)

## Disconnecting and Shutting Down

Disconnecting is rather simple, but you cannot use/access any subsystems (i.e. `NetworkSceneManager`) once the `NetworkManager` is stopped because they will no longer be available.  For client, host, or server modes, you only need to call the `NetworkManager.Shutdown` method as it will disconnect while shutting down.  

:::info
When no network session is active and the `NetworkManager` has been shutdown, you will need to use `UnityEngine.SceneManagement` to load any non-network session related scene. 
::: 

```csharp
public void Disconnect()
{
    NetworkManager.Singleton.Shutdown();
    // At this point we must use the UnityEngine's SceneManager to switch back to the MainMenu
    UnityEngine.SceneManagement.SceneManager.LoadScene("MainMenu");
}
```

## Disconnecting Clients (Server Only)

At times you might need to disconnect a client for various reasons without shutting down the server.  To do this, you can call the `NetworkManager.DisconnectClient` method while passing the identifier of the client you wish to disconnect as the only parameter.  The client identifier can be found within:
- The `NetworkManager.ConnectedClients` dictionary that uses the client identifier as a key and the value as the [`NetworkClient`](../api/Unity.Netcode.NetworkClient.md).
- As a read only list of `NetworkClients`  via the `NetworkManager.ConnectedClientsList`.
- A full list of all connected client identifiers can be accessed via `NetworkManager.ConnectedClientsIds`.
- The client identifier is passed as a parameter to all subscribers of the `NetworkManager.OnClientConnected` event.
- The player's `NetworkObject` has the `NetworkObject.OwnerClientId` property.

:::tip
One way to get a player's primary `NetworkObject` is via `NetworkClient.PlayerObject`.
:::

```csharp
void DisconnectPlayer(NetworkObject player)
{    
    NetworkManager.DisconnectClient(player.OwnerClientId);
}
```

### Client Disconnection Notifications

Both the client and the server can subscribe to the `NetworkManger.OnClientDisconnectCallback` event in order to be notified when a client is disconnected. Client disconnect notifications are "relative" to who is receiving the notification.

**There are two general "disconnection" categories:**
- **Logical**: Custom server side code (code you might have written for your project) invokes `NetworkManager.DisconnectClient`.
  - Example: A host player might eject a player or a player becomes "inactive" for too long.
- **Network Interruption**: The transport detects there is no longer a valid network connection.

**When disconnect notifications are triggered:**
- Clients are notified when they are disconnected by the server.
- The server is notified if the client side disconnects (i.e. a player exits a game session)
- Both the server and clients are notified when their network connection is disconnected (network interruption)

**Scenarios where the disconnect notification will not be triggered**:
- When a server "logically" disconnects a client.
  - _Reason: The server already knows the client is disconnected._
- When a client "logically" disconnects itself.
  - _Reason: The client already knows that it is disconnected._

### Connection Notification Manager Example
Below is one example of how you could provide client connect and disconnect notifications to any
type of NetworkBehaviour or MonoBehaviour derived component.

```csharp
using System;
using UnityEngine;
using Unity.Netcode;

/// <summary>
/// This could be attached to the NetworkManager GameObject and
/// provides you with a single location that anything (netcode
/// aware or not) can be notified when a client is connected and
/// when the client is disconnected.
/// </summary>
public class ConnectionNotificationManager : MonoBehaviour
{
    public static ConnectionNotificationManager Singleton { get; internal set; }

    public enum ConnectionStatus
    {
        Connected,
        Disconnected
    }

    public event Action<ulong, ConnectionStatus> OnClientConnectionNotification;

    private void Awake()
    {
        if (Singleton != null)
        {
            throw new Exception($"Detected more than one instance of {nameof(ConnectionNotificationManager)}! " +
                $"Do you have more than one component attached to a {nameof(GameObject)}");
        }
        Singleton = this;
    }

    private void Start()
    {
        NetworkManager.Singleton.OnClientConnectedCallback += OnClientConnectedCallback;
        NetworkManager.Singleton.OnClientDisconnectCallback += OnClientDisconnectCallback;
    }

    private void OnDestroy()
    {
        // As long as you attach this to the NetworkManager GameObject,
        // you need not worry about removing your subscription from the
        // NetworkManager connected disconnected events since when this
        // is getting destroyed the NetworkManager itself is getting
        // destroyed.
        Singleton = null;
    }

    private void OnClientConnectedCallback(ulong clientId)
    {
        OnClientConnectionNotification?.Invoke(clientId, ConnectionStatus.Connected);
    }

    private void OnClientDisconnectCallback(ulong clientId)
    {
        OnClientConnectionNotification?.Invoke(clientId, ConnectionStatus.Disconnected);
    }
}
```
