---
id: target-instance
title: Use Player Tags to run a player as a server, client, or host
description: This example shows how you can use Netcode for GameObjects to run a Player as a server, client, or host in Multiplayer Play Mode.
---

This example explains how to target **Player Tags** in your game scripts with `CurrentPlayer.ReadOnlyTags()`. You can place these scripts where you want, but you must attach the scripts to a [NetworkObject](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/)(such as the **Player**).

You can also use the dedicated server package to set a player tag to server, client, or host. For more information, refer to ()[###LINK###].

## Set a player tag to server, client, or host in a script

The following script uses the Netcode for GameObjects (NGO) [NetworkManager](https://docs-multiplayer.unity3d.com/netcode/current/components/networkmanager/) to automatically connect the Virtual Player as a server, client, or host based on their Player Tag. A Player with the `Server` Player Tag automatically runs as a server, and a Player with the `Client` Player Tag automatically runs as a client.

:::important
This example uses the `Contains` method which is case-sensitive by default. To make it case-insensitive, pass the `System.StringComparison.CurrentCultureIgnoreCase` method.
:::

:::note
This example uses [Netcode for GameObjects (NGO)](https://docs-multiplayer.unity3d.com/netcode/current/about/).
:::

```csharp
using Unity.Netcode;
using UnityEngine;
using Unity.Multiplayer.Playmode;

/// A MonoBehaviour to automatically start Netcode for GameObjects
/// clients, hosts, and servers
public class MppmConnect : MonoBehaviour
{
    void Start()
    {
        var mppmTag = CurrentPlayer.ReadOnlyTags();
        var networkManager = NetworkManager.Singleton;
        if (mppmTag.Contains("Server"))
        {
            networkManager.StartServer();
        }
        else if (mppmTag.Contains("Host"))
        {
            networkManager.StartHost();
        }
        else if (mppmTag.Contains("Client"))
        {
            networkManager.StartClient();
        }
    }
}
```
