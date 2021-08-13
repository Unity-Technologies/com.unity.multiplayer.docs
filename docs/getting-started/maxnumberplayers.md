---
id: max-players
title: Limiting the maximium number of players
---


MLAPI provides a way to implement a connection approval delegate that can reject incoming connections based on custom logic.
​
This topic is related to [Connection Approval](connection-approval.md).
​

Boss Room provides an example of such delegate

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/63ecd92e1c72b87cd87cc3cbc1de77da4271b720/Assets/BossRoom/Scripts/Server/Net/ServerGameNetPortal.cs#L242
```
​
The code below shows an example of an over-capacity check that would prevent more than a certain pre-defined numebr of players from connecting.
​
```csharp
if( m_ClientData.Count >= CharSelectData.k_MaxLobbyPlayers )
{
    gameReturnStatus = ConnectStatus.ServerFull;
}
```
​
:::tip**SUIBJECT TO CHANGE:**
​
In connection approval delefate MLAPI does not support an ability to send anything more than a boolean back. 
Boss Room demonstrates a way to provide meaningful error code to the client by invoking a client RPC in the same channel that MLAPI uses for its connection callback.
This will become unneccessary in the future.
:::