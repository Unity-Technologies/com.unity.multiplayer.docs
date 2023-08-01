---
id: target-instance
title: Configure a Player to run as a server, client, or host example
sidebar_label: Assign Players different session roles example
description: This example shows how you can use Netcode for GameObjects to run a Player as a server, client, or host in Multiplayer Play Mode.
----

Without configuration, **Player Tags** don't do anything. You must target **Player Tags** in your game scripts with `CurrentPlayer.Tag`. You can place these scripts where you want, but you must attach the scripts to a [NetworkObject](../docs/basics/networkobject.md) (such as the **Player**).

:::important
The following example uses the `Contains` method, which is case-sensitive by default. You can make it case-insensitive by passing the `System.StringComparison.CurrentCultureIgnoreCase` method.
:::

## Run as a server, client, or host

The following script uses the Netcode for GameObjects (NGO) [NetworkManager](../docs/components/networkmanager.md) to automatically connect the **Virtual Player** as a server, client, or host based on their **Player Tag**. A **Player** with the `Server` **Player Tag** automatically runs as a server, and a **Player** with the `Client` **Player Tag** automatically runs as a client.

:::note
This example uses [Netcode for GameObjects (NGO)](../../docs/about.md).
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
        var mppmTag = CurrentPlayer.Tag;
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