---
id: library-initialization
title: Library Initialization
---

Initializing Netcode for GameObjects (Netcode) is fairly simple. You need a `GameObject` with the `NetworkManager` component added to it. The `NetworkManager` class has a static singleton reference to itself making it easy to access from anywhere. The first configuration you have to do is to set the [`Transport`](../advanced-topics/custom-transports.md). 

## Add Netcode for GameObjects library

Add Netcode for GameObjects to your `using` declarations:

```csharp
using Unity.Netcode;
```

To initialize the library. You have three options: Host mode, Client mode, and Server mode.

### Host mode

This mode runs a Server and a virtual Client connected to its own server. The virtual client has no real network connection to the server, but instead communicates using message queues. This makes the host both a Server and a Client in the same process.

Usage:

```csharp
NetworkManager.Singleton.StartHost();
```

### Client mode

This mode runs a Client that connects to a Server or Host.

Usage:

```csharp
NetworkManager.Singleton.StartClient();
```

### Server mode

This mode runs a Server that other Clients can connect to. It has no own Client attached, and lacks its own player object and such. This is the "dedicated server" mode.

Usage:

```csharp
NetworkManager.Singleton.StartServer();
```
