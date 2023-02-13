---
id: max-players
title: Limiting the maximum number of players
created: 2023-01-24T18:08:36-06:00
updated: 2023-01-24T18:59:55-06:00
---

Netcode for Gameobjects (Netcode) provides a way to customize the [connection approval process](connection-approval.md) that can reject incoming connections based on any number of user-specific reasons.

Boss Room provides one example of how to handle limiting the number of players through the connection approval process:

Boss Room provides an example of such delegate

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/ConnectionManagement/ConnectionState/HostingState.cs?rgh-link-date=2022-10-19T13%3A14%3A39Z

```

​

The code below shows an example of an over-capacity check that would prevent more than a certain pre-defined number of players from connecting.

​

```csharp
if( m_Portal.NetManager.ConnectedClientsIds.Count >= CharSelectData.k_MaxLobbyPlayers )
{
    return ConnectStatus.ServerFull;
}
```

:::tip**SUBJECT TO CHANGE:**

​

In connection approval delegate Netcode doesn't support an ability to send anything more than a Boolean back.

Boss Room shows a way to offer meaningful error code to the client by invoking a client RPC in the same channel that Netcode uses for its connection callback.

:::

When using Relay, ensure the maximum number of peer connections allowed by the host satisfies the logic implemented in the connection approval delegate.
