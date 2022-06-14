---
id: networkmanager
title: NetworkManager
---

The `NetworkManager` is a required Netcode for GameObjects (Netcode) component that contains all of your project's netcode related settings.  It can be thought of as the "central netcode hub" for your netcode enabled project.  

### `NetworkManager` Properties
- **LogLevel**:  Sets the network logging level 
- **PlayerPrefab**:  When a prefab is assigned, the prefab will be instantiated as the player object and assigned to the newly connected and authorized client.
- **NetworkPrefabs**: Where you register your network prefabs.  You can also create a single network prefab override per registered network prefab here.
- **Protocol Version**: Set this value to help distinguish between builds when the most current build has new assets that could cause issues with older builds connecting.
- **Network Transport**: Where your network specific settings and transport type is set.  This field accepts any INetworkTransport implementation.  However, unless you have unique transport specific needs UnityTransport is the recommended transport to use with Netcode for GameObjects.
- **Tick Rate**: This value controls the network tick update rate.
- **Ensure Network Variable Length Safet**y: (Increases cpu processing and bandwidth) When this property is checked, Netcode for GameObjects will prevent user code from writing past the boundaries of a NetworkVariable.
- **Connection Approval**: This enables [connection approval](https://docs-multiplayer.unity3d.com/netcode/current/getting-started/connection-approval/index.html) when this is checked and the `NetworkManager.ConnectionApprovalCallback` is assigned.
- **Client Connection Buffer Timeout**: This value sets the amount of time that has to pass for a connecting client to complete the connection approval process.  If the time specified is exceeded the connecting client will be disconnected.
- **Force Same Prefabs**: When checked it will always verify that connecting clients have the same registered network prefabs as the server.  When not checked, Netcode for GameObjects will ignore any differences.
- **Recycle Network Ids**: When checked this will re-use previously assigned `NetworkObject.NetworkObjectIds` after the specified period of time.
- **Network Id Recycle Delay**: The time it takes for a previously assigned but currently unassigned identifier to be available for use.  
- **Rpc Hash Size**: !!!(UNITY TW ATTENTION) _This is only used for Custom Messages now and could stand to use a refresh on its tool tip text_!!!
- **Enable Scene Management**: When checked Netcode for GameObjects will handle scene management and client synchronization for you.  When not checked, users will have to create their own scene management scripts and handle client synchronization.
- **Load Scene Time Out**: When Enable Scene Management is checked, this specifies the period of time the `NetworkSceneManager` will wait while a scene is being loaded asynchronously before `NetworkSceneManager` considers the load/unload scene event to have failed/timed out.
  
### `NetworkManager` Sub-Systems
`NetworkManager` is also where you can find references to other Netcode related management systems:

- NetworkManager.PrefabHandler: This provides access to the NetworkPrefabHandler that is used for NetworkObject pools and to have more control overriding network prefabs.
- NetworkManager.SceneManager: When scene management is enabled, this is used to load and unload scenes, register for scene events, and other scene management related actions.
- NetworkManager.SpawnManager: This handles NetworkObject spawn related functionality.
- [NetworkManager.NetworkTimeSystem](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/networktime-ticks): a synchronized time that can be used to handle issues with latency between a client and the server.
- [NetworkManager.NetworkTickSystem](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/networktime-ticks#network-ticks): Use this to adjust the frequency of when NetworkVariables are updated.
- [NetworkManager.CustomMessagingManager](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/message-system/custom-messages): Use this system to create and send custom messages.

## Starting a Server, Host, or Client
In order to perform any netcode related action that involves sending messages, you must first have a server started and listening for connections with at least one client (_a server can send RPCs to itself when running as a host_) that is connected.  In order to accomplish this, you must first start your `NetworkManager` as a server, host, or client.  There are three `NetworkManager` methods you can invoke to accomplish this:

```csharp
NetworkManager.Singleton.StartServer();      // Starts the NetworkManager as just a server (i.e. no local client).
NetworkManager.Singleton.StartHost();        // Starts the NetworkManager as both a server and a client (i.e. has local client)
NetworkManager.Singleton.StartClient();      // Starts the NetworkManager as just a client.
```
**Do not start a NetworkManager within a NetworkBehaviour's Awake method as this can lead to undesirable results depending upon your project's settings!**

:::note
 When starting a Server or joining an already started session as client, the `NetworkManager` can spawn a "Player Object" belonging to the client. <br>
 For more information about player prefabs see:
 - [NetworkObject Player Prefab Documentation](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject#player-objects)
 - [Connection Approval](https://docs-multiplayer.unity3d.com/netcode/current/getting-started/connection-approval)  
:::

## Connecting
When Starting a Client, the `NetworkManager` uses the IP and the Port provided in your `Transport` component for connecting.

You can use different transports and have to replace the type inside the following `GetComponent< >` accordingly, but for UNET transport it looks like this:

```csharp
NetworkManager.Singleton.GetComponent<UNetTransport>().ConnectAddress = "127.0.0.1"; //takes string
NetworkManager.Singleton.GetComponent<UNetTransport>().ConnectPort = 12345;          //takes integer
```

## Disconnecting

Disconnecting is rather simple, but you have to remember, that you cannot use the `NetworkSceneManager` once the `NetworkManager` is stopped because it will no longer be available and should only be used for network session scene loading, unloading, and late-joining client synchronization.  When no network session is active and the `NetworkManager` has been stopped, you will need to use `UnityEngine.SceneManagement` to load any non-network session related scene.

```csharp
public void Disconnect()
{
    if (IsHost) 
    {
        NetworkManager.Singleton.StopHost();
    }
    else if (IsClient) 
    {
        NetworkManager.Singleton.StopClient();
    }
    else if (IsServer) 
    {
        NetworkManager.Singleton.StopServer();
    }
    // At this point we must use the UnityEngine's SceneManager to switch back to the MainMenu
    UnityEngine.SceneManagement.SceneManager.LoadScene("MainMenu");
}
```
