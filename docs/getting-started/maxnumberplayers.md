---
id: max-players
title: Limiting the maximum number of players
---


Netcode for Gameobjects (Netcode) provides a way to implement a [connection approval delegate](../api/Unity.Netcode.NetworkManager.ConnectionApprovedDelegate)  that can reject incoming connections based on custom logic.
​


Boss Room provides an example of such delegate

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/ConnectionManagement/ServerGameNetPortal.css#L176
```
​
The code below shows an example of an over-capacity check that would prevent more than a certain pre-defined number of players from connecting.
​
```csharp
if( m_Portal.NetManager.ConnectedClientsIds.Count >= CharSelectData.k_MaxLobbyPlayers )
{
    gameReturnStatus = ConnectStatus.ServerFull;
}
```
​
:::tip**SUBJECT TO CHANGE:**
​
In connection approval delegate Netcode does not support an ability to send anything more than a boolean back. 
Boss Room demonstrates a way to provide meaningful error code to the client by invoking a client RPC in the same channel that Netcode uses for its connection callback.

:::

When using Relay, ensure the maximum number of peer connections allowed by the host satisfies the logic implemented in the connection approval delegate.
