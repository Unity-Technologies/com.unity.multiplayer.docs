---
id: networkmanager
title: NetworkManager
---

The `NetworkManager` is a script component handling all your Networking related settings, your Networked Prefabs and your registered scene names. A Transport component is needed on the same GameObject. It is responsible for handling IP adresses and additional settings.

## Starting a Server, Host, or Client
The `NetworkManager` allows you to start/stop the Networking. It provides the same functions for Server, Host and Client.

The Host functions as Server and Client simultaneously:

```csharp
NetworkManager.Singleton.StartServer();      //or
NetworkManager.Singleton.StartHost();        //or
NetworkManager.Singleton.StartClient();
```
:::note
 When starting a Server or joining a running session as client, the `NetworkManager` will spawn a "Player Object" belonging to that Player. You can choose which prefab shall be spawned as "Player Object" in the `NetworkManager` Component under `NetworkPrefabs`. Simply tick the corresponding `Default Player Prefab` checkbox there.
:::
Only the "Player Object" will return true for `IsLocalPlayer` on the corresponding machine, use `IsOwner` for non Player Objects instead.

## Connecting

When Starting a Client, the `NetworkManager` uses the IP and the Port provided in your `Transport` component for connecting.

You can use different transports and have to replace the type inside the following `GetComponent< >` accordingly, but for UNET transport it looks like this:

```csharp
NetworkManager.Singleton.GetComponent<UNetTransport>().ConnectAddress = "127.0.0.1"; //takes string
NetworkManager.Singleton.GetComponent<UNetTransport>().ConnectPort = 12345;          //takes integer
```

## Disconnecting

Disconnecting is rather simple, but you have to remember, that you cannot use the `NetworkSceneManager` for scene switching in most Disconnecting cases. As soon as you stop the Client, Server or Host you have to use `UnityEngine.SceneManagement` instead.

```csharp
public void Disconnect()
{
    NetworkManager.Singleton.Shutdown();

    UnityEngine.SceneManagement.SceneManager.LoadScene("MainMenu");
}
```

The only case where you could use the `NetworkSceneManager` for disconnecting, would be if the Server/Host switches back to MainMenu or similar for everyone and then Stopping the Server and all the Clients. 

See `NetworkSceneManager` for more details.
