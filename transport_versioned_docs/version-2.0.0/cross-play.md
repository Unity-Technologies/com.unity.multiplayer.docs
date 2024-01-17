---
id: cross-play
title: Cross-Play support
---

Cross-play is the ability of players on different platforms to play together in the same game session. This is normally not an issue when all players use the same connection type, but it can be when different players must use different means of connecting to a server. For example, players on desktop platforms might use a UDP-based connection, whereas players on WebGL would use WebSockets.

## Cross-play with Unity Relay

When using [Unity Relay](https://docs.unity.com/relay/en/manual/introduction), then cross-play support comes for free, without you having to do anything to enable it. You could have a host connecting to the Relay server with DTLS, a client connecting with WebSocket, and another connecting with UDP, and both clients will be able to communicate with the host without any issue.

Refer to the [Unity Relay documentation](https://docs.unity.com/relay/en/manual/relay-and-utp) for details on how to select a connection type for your host and client connections.

## Cross-play with direct connections
When connecting `NetworkDriver` instances directly to each other without using Unity Relay as the intermediary, the situation is more complicated. `NetworkDriver` can only accept connections on a single connection type. For example, a driver that is using the `WebSocketNetworkInterface` and is bound to an IPv4 endpoint will only be able to accept connections made from WebSocket clients with IPv4 addresses.

A solution to this problem is simply to use multiple `NetworkDriver` instances. For example, one driver for accepting UDP connections, and another to accept WebSocket connections. But that can be bothersome to work with. To simplify this workflow, Unity Transport provides a handy `MultiNetworkDriver` component.

### Overview of MultiNetworkDriver

A `MultiNetworkDriver` is a container for multiple `NetworkDriver` instances. Its API is mostly the same as `NetworkDriver`, so pretty much everywhere you would use `NetworkDriver`, you can use `MultiNetworkDriver` instead.

On creation, a `MultiNetworkDriver` is empty. You can add `NetworkDriver` instances to it with the `AddDriver` method. There are a few limitations to what drivers can be added:

1. The added driver must already be in the `Listening` state. That is, one must already have called `Listen` on the `NetworkDriver` instance before adding it.
2. No connections must have been already made to the added driver.
3. The added driver must have the same number of [pipelines](pipelines-usage.md) configured as previously-added drivers.

A `MultiNetworkDriver` can have a maximum of 4 `NetworkDriver` instances added to it. How these drivers are defined is up to you. They could use different network interfaces (e.g. UDP vs WebSocket), listen on different endpoints, use different configuration values, etc.

Below you'll find examples for two common cases: listening to both UDP and WebSocket connections, and listening on an IPv4 and an IPv6 endpoint. Note that for brevity's sake, error handling is omitted from these examples. In real production code you should check the values returned by `Bind` and `Listen`.

### Example: UDP and WebSockets

This example shows how to create a `MultiNetworkDriver` that will accept connections from both UDP and WebSocket clients. A full working version of that example (including client code) is provided with the Unity Transport package in the "CrossPlay" sample.

First, we need to create a `NetworkDriver` that will accept the UDP connections:

```c sharp
var udpDriver = NetworkDriver.Create(new UDPNetworkInterface());
udpDriver.Bind(NetworkEndpoint.AnyIpv4.WithPort(7777));
udpDriver.Listen();
```

Next, we create a `NetworkDriver` that will accept the WebSocket connections:

```c sharp
var wsDriver = NetworkDriver.Create(new WebSocketNetworkInterface());
wsDriver.Bind(NetworkEndpoint.AnyIpv4.WithPort(7778));
wsDriver.Listen();
```

Finally, we can create the `MultiNetworkDriver` and add both of our drivers to it:

```c sharp
var multiDriver = MultiNetworkDriver.Create();
multiDriver.AddDriver(udpDriver);
multiDriver.AddDriver(wsDriver);
```

At this point, `multiDriver` can be used as you would a normal `NetworkDriver`. You can `Accept` new connections, pop events with `PopEvent` or `PopEventForConnection`, send messages with `BeginSend` and `EndSend`, schedule updates with `ScheduleUpdate`, etc. Clients will be able to reach the server on UDP port 7777 (for UDP connections) and TCP port 7778 (for WebSocket connections).

:::note
While it is possible to keep references to udpDriver and wsDriver around and operate on them individually, it is not recommended to do so. Once a driver is added to a MultiNetworkDriver, only that MultiNetworkDriver should be used to operate on the NetworkDriver. For example, do not call ScheduleUpdate on udpDriver or wsDriver. Instead, call the ScheduleUpdate method of multiDriver.
:::

### Example: IPv4 and IPv6

This example shows how to create a `MultiNetworkDriver` that will accept connections from both IPv4 and IPv6 addresses (using the default UDP-based protocol). This can be very useful for servers for mobile games as cellular networks are increasingly IPv6-based.

First, we create the `NetworkDriver` that will listen to IPv4 addresses:

```c sharp
var ipv4Driver = NetworkDriver.Create();
ipv4Driver.Bind(NetworkEndpoint.AnyIpv4.WithPort(7777));
ipv4Driver.Listen();
```

Next, we create the `NetworkDriver` that will listen to IPv6 addresses:

```c sharp
var ipv6Driver = NetworkDriver.Create();
ipv6Driver.Bind(NetworkEndpoint.AnyIpv6.WithPort(7777));
ipv6Driver.Listen();
```

Finally, we add both drivers to a `MultiNetworkDriver`:

```c sharp
var multiDriver = MultiNetworkDriver.Create();
multiDriver.AddDriver(ipv4Driver);
multiDriver.AddDriver(ipv6Driver);
```

With this setup, calling `multiDriver.Accept` can now return connections made by IPv4 and IPv6 clients in a transparent manner. If you wish to know if any given connection was made from an IPv4 or IPv6 client, you can use `GetRemoteEndpoint` to get the address of a client.

### Advanced usage: per-driver pipeline definitions

All the drivers in a `MultiNetworkDriver` are normally expected to have matching pipelines. If all your drivers are expected to have the same pipeline configurations, then you can simply add the pipelines directly with the `CreatePipeline` method of `MultiNetworkDriver`. For example:

```c sharp
// Add a simulator pipeline to all drivers in multiDriver.
multiDriver.CreatePipeline(typeof(SimulatorPipelineStage));
```

But there might be occasions where you might not want all pipelines to be configured the same way. For example, if you have a driver configured for WebSocket connections, there is no need to ever use `ReliableSequencedPipelineStage` since WebSocket is built on top of TCP which already provides all the guarantees of the reliable pipeline stage.

In such situations, we can create the pipelines before adding the drivers to the `MultiNetworkDriver`. Here's an example:

```c sharp
// Create a UDP driver with a reliable pipeline.
var udpDriver = NetworkDriver.Create(new UDPNetworkInterface());
var reliablePipeline = udpDriver.CreatePipeline(typeof(ReliableSequencedPipelineStage));
udpDriver.Bind(NetworkEndpoint.AnyIpv4.WithPort(7777));
udpDriver.Listen();

// Create a WebSocket driver with a "dummy" reliable pipeline.
var wsDriver = NetworkDriver.Create(new WebSocketNetworkInterface());
var dummyPipeline = wsDriver.CreatePipeline(typeof(NullPipelineStage));
wsDriver.Bind(NetworkEndpoint.AnyIpv4.WithPort(7778));
wsDriver.Listen();

// Add both drivers to a new MultiNetworkDriver.
var multiDriver = MultiNetworkDriver.Create();
multiDriver.AddDriver(udpDriver);
multiDriver.AddDriver(wsDriver);
```

In the above example, `reliablePipeline` and `dummyPipeline` are actually equal. Either one could be used with our `MultiNetworkDriver` to send traffic reliably:

```c sharp
// Will send the value 42 reliably. If connection is UDP-based, then this will send
// the packet through the ReliableSequencedPipelineStage. If it is WebSocket-based,
// then this will send the packet through the NullPipelineStage, which does nothing.
multiDriver.BeginSend(reliablePipeline, connection, out var writer);
writer.WriteInt(42);
multiDriver.EndSend(writer);
```

:::note
Pipelines in all drivers added to a MultiNetworkDriver are expected to have symmetric functions. That is, if the first pipeline is a reliable one, then it must be so for all drivers in the MultiNetworkDriver. This is why we create a "dummy" pipeline for the WebSocket driver in the example above. We still need some pipeline to act as the reliable one, even if this pipeline does nothing.
:::

### Sharing code between server and client

You may have noticed that all examples above use `MultiNetworkDriver` in a server role. While this is indeed its main intended usage, using it only as a server can be problematic if you have code shared between your server and client builds. For example, if you had common networking code that used `NetworkDriver`, porting it to `MultiNetworkDriver` could be difficult since that code would then need to use a `MultiNetworkDriver` on the server, and a `NetworkDriver` on clients.

To address this problem, `MultiNetworkDriver` can also act as a container for client drivers. A non-listening driver can be added to a `MultiNetworkDriver` and connected to a server in the manner below:

```c sharp
var clientDriver = NetworkDriver.Create();
var multiDriver = MultiNetworkDriver.Create();

var driverId = multiDriver.AddDriver(clientDriver);
var connection = multiDriver.Connect(driverId, serverEndpoint);
```

There is no real performance penalty from using a `MultiNetworkDriver` that contains a single `NetworkDriver`. So having both server and client builds rely on `MultiNetworkDriver` is a good way of writing code that can be shared between them. In a way, `MultiNetworkDriver` then serves the purpose of an hypothetical `INetworkDriver` interface for the functionality common between NetworkDriver and `MultiNetworkDriver` (the transport package does not actually provide such an interface because it would be impractical to use in Burst-compiled code).

