---
id: connection-events
title: Connection Events
sidebar_label: Connection Events

---

When you need to react to connection / disconnection events for yourself and other clients, you can use `NetworkManager.OnConnectionEvent` as a single unified source of information about changes to the network topology. `OnConnectionEvent` will receive a `ConnectionEventData` struct detailing the relevant information about the connection state change:

```csharp
public enum ConnectionEvent
{
    ClientConnected,
    PeerConnected,
    ClientDisconnected,
    PeerDisconnected
}

public struct ConnectionEventData
{
    public ConnectionEvent EventType;
    public ulong ClientId;
    public NativeArray<ulong> PeerClientIds;
}
```



The four types of events you can receive are as follows:

- **ConnectionEvent.ClientConnected:** On the server or host, this event indicates a new client has connected; on the client, this  event indicates that the local client has completed its connection to the server. **ClientId** will be the ID of the newly connected client (on the client side, it will be LocalClientId). On the client side, **PeerClientIds** will contain the list of client IDs for other clients that are currently connected to the server. On the server side, **PeerClientIds** will be uninitialized and should not be used.
- **ConnectionEvent.PeerConnected:** This event is only executed for clients, including the host client if running in host mode. This is executed when another client connects to the server. **ClientId** will contain the client ID for the newly connected client. **PeerClientIds** will be uninitialized and should not be used.
- **ConnectionEvent.ClientDisconnected:** On the server or host, this event indicates a client has disconnected; on the client, this event indicates the connection to the server has been lost. **ClientId** will be the ID of the disconnected client (on the client side, it will be LocalClientId). **PeerClientIds** will be uninitialized and should not be used.
- **ConnectionEvent.PeerDisconnected:** This event is only executed for clients, including the host client if running in host mode. This is executed when another client disconnects from the server. **ClientId** will contain the client ID for the disconnected client. **PeerClientIds** will be uninitialized and should not be used.