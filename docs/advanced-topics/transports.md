---
id: transports
title: Transports
description: A transport collects messages from your application and transmits them safely over the network. It ensures that all packets arrive and in order, if needed.
---

Unity Netcode for GameObjects (Netcode) uses Unity Transport by default and supports UNet Transport (deprecated) up to Unity 2022.2 version.

## So what is a transport layer?

The transport layer establishes communication between your application and different hosts in a network.

A transport layer can provide:
* *Connection-oriented communication* to ensure a robust connection before exchanging data with a handshake protocol.
* *Maintain order delivery* for your packets to fix any discrepancies from the network layer in case of packet drops or device interruption.
* *Ensure data integrity* by requesting retransmission of missing or corrupted data through using checksums.
* *Control the data flow* in a network connection to avoid buffer overflow or underflow--causing unnecessary network performance issues.
* *Manage network congestion* by mediating flow rates and node overloads.
* *Adjust data streams* to transmit as byte streams or packets.

## Unity Transport package

Netcode's default transport Unity Transport is an entire transport layer that you can use to add multiplayer and network features to your project with or without Netcode. Refer to the [Transport documentation](https://docs-multiplayer.unity3d.com/transport/current/about/) for more information and how to [install the Transport package](https://docs-multiplayer.unity3d.com/transport/current/install/).

## `SinglePlayerTransport`

Netcode for GameObjects provides a `SinglePlayerTransport` that you can use to create a local single player network session. This simplifies switching between multiplayer and single player sessions within the same project, while still being able to use existing netcode scripts. The `SinglePlayerTransport` is a effectively a mock transport that ensures full `NetworkTransport` functionality without any transport dependencies. The `SinglePlayerTransport` is unique in that it **requires that you** only start as a host. This is because in reality you are starting a local server and a local client which will still run as if it was a network session but it never actually opens any network ports or communicates outside of the local system.

### Set up a single player session

In addition to your default network transport, you need to add the `SinglePlayerTransport` to the `NetworkManager` `GameObject` (or child of).

![image](/img/transport/SinglePlayerTransport_AddComponent.png)

To start a single player session, assign the `SinglePlayerTransport` to the `NetworkManager.NetworkConfig.NetworkTransport` configuration property using a script. 

For example:

```csharp
using Unity.Netcode;
using Unity.Netcode.Transports.UTP;
using Unity.Netcode.Transports.SinglePlayer;
using UnityEngine;

public class ExtendedNetworkManager : NetworkManager
{
    private UnityTransport m_UnityTransport;
    private SinglePlayerTransport m_SinglePlayerTransport;

    private void Awake()
    {
        m_UnityTransport = GetComponent<UnityTransport>();
        m_SinglePlayerTransport = GetComponent<SinglePlayerTransport>();
    }

    public void StartSinglePlayer()
    {
        // Use the single player transport when starting a single player session.
        NetworkConfig.NetworkTransport = m_SinglePlayerTransport;
        if (!StartHost())
        {
            NetworkLog.LogError("Failed to start single player session!");
        }
    }

    public void StartHostedSession()
    {
        // Use the network transport when starting a multiplayer session.
        NetworkConfig.NetworkTransport = m_UnityTransport;
        if (!StartHost())
        {
            NetworkLog.LogError("Failed to start hosted session!");
        }
    }
}
```

As shown in the script above, when starting a single player session the `SinglePlayerTransport` is assigned to the `NetworkConfig.NetworkTransport`, and when starting a hosted multiplayer session the `UnityTransport` is assigned.

:::info
In order to use `SinglePlayerTransport` you must set the `NetworkConfig.NetworkTransport` to the `SinglePlayerTransport` component and you must start a local single player session using `NetworkManager.StartHost`.
:::

### Single player limitations

When running a single player session, you should take any netcode script into consideration that requires an actual multiplayer session to exist.

#### RPC considerations
You can invoke any RPC that includes:

- The host's client.
- The host's server.
- `SendTo` targets that will be invoked locally:
  - `SendTo.Me`
  - `SendTo.Server`
  - `SendTo.Everyone`
  - `SendTo.Authority`
  - `SendTo.Owner`
  - `ClientsAndHost`
  - `SpecifiedInParams`: As long as it is targeting the `NetworkManager.LocalClientId`.
- `SendTo` targets that will **not be** invoked locally:
  - `SendTo.NotOwner`
  - `SendTo.NotServer`
  - `SendTo.NotMe`
  - `SendTo.NotAuthority`
  - `SpecifiedInParams`: Anything not targeting the `NetworkManager.LocalClientId` will not be invoked locally.

#### NetworkVariable considerations

NetworkVariables should work as expected because the host will always be both the server and the owner of anything spawned. This means that write permissions, whether server or owner, should not be an issue.

#### Distributed authority considerations

To start a single player session using the distributed authority network topology you should:
- Keep your network topology setting set to distributed authority.
- Set the `NetworkConfig.NetworkTransport` to the `SinglePlayerTransport` component.
- Start as a host.


## Unity's UNet transport layer API

UNet is a deprecated solution that is no longer supported after Unity 2022.2. Unity Transport Package is the default transport for Netcode for GameObjects. We recommend transitioning to Unity Transport as soon as possible.

### Community transports or writing your own

You can use any of the community contributed custom transport implementations or write your own.

The community transports are interchangeable transport layers for Netcode and can be installed with the Unity Package Manager. After installation, the transport package will appear in the **Select Transport** dropdown of the `NetworkManager`. Check out the [Netcode community contributed transports](https://github.com/Unity-Technologies/multiplayer-community-contributions/tree/main/Transports) for more information.

To start writing your own and contributing to the community, check out the [Netcode community contribution repository](https://github.com/Unity-Technologies/multiplayer-community-contributions) for starting points and how to add your content.
