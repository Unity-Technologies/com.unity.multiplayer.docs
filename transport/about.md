---
id: about
title: About Unity Transport
---

The Unity Transport package (`com.unity.transport`) is a low-level networking library for multiplayer game development.

It’s the underlying protocol of both [Netcode for GameObjects](../../docs/about.md) and [Netcode for Entities](https://docs.unity3d.com/Packages/com.unity.netcode@latest), but you can also use it with a custom solution.

Unity Transport seamlessly supports all platforms the Unity Engine supports thanks to a connection-based abstraction layer (built-in network driver) provided over UDP and WebSockets.

You can set up both UDP and WebSockets with or without encryption. The following illustration shows encrypted connections with a closed padlock and unencrypted connections with an open padlock.

![Block diagram](/img/transport/layercake-2.png)

You can also use [pipelines](pipelines-usage.md) to leverage additional functionality, such as reliability, packet ordering, and packet fragmentation.

## Get started with Unity Transport

See the [Installation](install.md) guide if you’re new to Unity Transport. If you’re upgrading from a earlier version of Unity Transport, see [Migrating from 1.X](migration.md). Check the [Compatibility with Unity Editor versions](#compatibility-with-unity-editor-versions) table to ensure your Editor version is compatible with Transport 2.X or 1.X.

## Main Features of Transport 2.0

* Addition of WebGL: Transport package can now be used for all Unity Engine supported platforms.
* Transport users now have access to our Websocket transport implementation, with or without TLS. It is supported on every platform as Client or Server and for WebGL as Client only.
* Players on the go can now benefit from a transparent network migration, typically across cell towers. The feature is currently limited to client side and for UDP transport.
* The integration with Relay more is straightforward thanks to a new set of API that are now abstracting some boiler plate code.
* Added support for com.unity.logging package. If the package is installed, logs will go through its default logger instead of the classic UnityEngine.Debug mechanism.

### Compatibility with Unity Editor versions

Based on your Unity Editor Version

| Unity Editor Version | Transport 1.X | Transport 2.X |
|---|---|---|
| 2020 LTS | Yes | No |
| 2021 LTS | Yes | No |
| 2022.2 and LTS | Yes | Yes |
| Next | No | Yes |

Based on your Netcode Solution working with Transport

| Unity Editor Version | Netcode for GameObjects 1.2.0 + | Netcode for Entities 1.0.0 + | Custom Solutions |
|---|---|---|---|
| 2020 LTS | Transport 1.X | N/A | Transport 1.X | Transport 2.X |
| 2021 LTS | Transport 1.X | N/A | Transport 1.X | Transport 2.X |
| 2022.2 and LTS | Transport 1.X | Transport 2.X | Transport 2.X |
| Next | Transport 2.X | Transport 2.X | Transport 2.X |

Next, check out [Create a simple client and server](workflow-client-server-udp.md) and the Unity Transport [sample projects](using-sample.md).

### Requirements for Unity Transport 2.X

- Install Unity Editor version 2022.2 or later.
- Install the `com.unity.transport` package.

:::note
WebGL only supports Unity Transport WebSocket connections in client mode.
:::

:::warning
Unity Transport (the `com.unity.transport` package) is separate from the NetworkTransport abstraction in Netcode for GameObjects.
:::