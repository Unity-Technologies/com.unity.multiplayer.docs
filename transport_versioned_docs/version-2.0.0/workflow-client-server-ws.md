---
id: minimal-workflow-ws
title: Client and server over WebSocket
---

One thing that isn’t evident in the [simple client-serve example](workflow-client-server-udp.md) is that the `NetworkDriver` instantiates a `NetworkInterface` object internally. However, you might still need to request a particular `NetworkInterface` object.

The `NetworkInterface` defines the operations a `NetworkDriver` requires to establish and coordinate connections. By default, in most platforms, the `NetworkInterface` object is an instance of the `UDPNetworkInterface`, which, as implied by the name, encapsulates a UDP socket. However, you can't normally open a UDP socket in a Web browser. As a result, the default network interface in the WebGL player is the `WebSocketNetworkInterface`, which encapsulates a TCP socket using the WebSocket protocol.

The distinction between the UDPNetworkInterface and the `WebSocketNetworkInterface` is important because of the fundamental network constraint that a client can only directly connect to a server with the same underlying socket type. In other words, a TCP socket can only connect to another TCP socket, and the same applies to UDP. If you plan to create a server for WebGL players to connect to, you have to tell the network driver to use the `WebSocketNetworInterface` explicitly:

```csharp
   m_Driver = NetworkDriver.Create(new WebSocketNetworkInterface());
```

If you plan to share networking code between clients for multiple platforms, including WebGL, you might opt to have a WebSocket server for all platforms. In this case, ensure you assign the `WebSocketNetworkInterface` to the non-WebGL clients.

Alternatively, suppose you plan to have a server dedicated to browsers and another for other platforms. In that case, you can specify a different `NetworkDriver` instantiation with [compiler definitions](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html) that depend on the platforms your project supports.

```csharp
   #if UNITY_WEBGL
    m_Driver = NetworkDriver.Create(new WebSocketNetworkInterface());
    #else
    m_Driver = NetworkDriver.Create(new UDPNetworkInterface());
    #endif
```

:::note
Because the WebGL player is constrained by browser capabilities, it’s currently impossible to start a server in a WebGL player (even with the `WebSocketNetworkInterface`). Web browsers (to date) don't permit applications to open sockets for incoming connections, and trying to do so results in an exception. On the other hand, creating a server while playing in the Unity Editor is still perfectly valid. In some cases, you might want to use the [UNITY_EDITOR compiler definition](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html) to create a `NetworkDriver` with the `WebSocketNetworkInterface` only when using the Unity Editor.
:::

```csharp
   #if UNITY_WEBGL && !UNITY_EDITOR
    m_Driver = NetworkDriver.Create(new WebSocketNetworkInterface());
    #else
    m_Driver = NetworkDriver.Create(new UDPNetworkInterface());
    #endif
```
