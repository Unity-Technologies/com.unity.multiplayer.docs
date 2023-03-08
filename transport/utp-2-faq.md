---
id: utp-2-faq
title: UTP 2.0 FAQs
---

## Frequently asked questions

### Which endpoint should I bind to?

The endpoint you should bind to varies between clients and servers and depends on the services your game uses. For example, if you’re using [Unity Relay](https://unity.com/products/relay), all communication goes through the Relay servers, so there’s no need to use a known port.

**For clients**:

Clients usually shouldn't call the `Bind` method. The default behavior is to automatically bind to an [ephemeral port](https://en.wikipedia.org/wiki/Ephemeral_port) when connecting, which is the desired behavior 99% of the time.

The only time a client might bind to a particular endpoint is if a firewall requires the client to use a specific source port. This requirement of clients is uncommon and typically only seen in restrictive corporate environments.

**For servers**:

Servers typically bind to a wildcard IP address (for IPv4, it's `0.0.0.0` and for IPv6, it's `::1`) and a ephemeral port number. Here's an example of binding to port `7777`:

```cs
driver.Bind(NetworkEndpoint.AnyIpv4.WithPort(7777));
```

The only reason you might want to bind to a specific IP address (instead of the wildcard address) is if your server has multiple interfaces and you want to limit clients to connect only through a particular one. You might want to do this for security reasons or if another service is already listening on the same port on a different interface.

**When using Relay**:

When using [Unity Relay](https://unity.com/products/relay), there is no real need to use a known port because all communications go through the Relay servers. In this situation, the recommended best practice is to bind to an ephemeral port for clients and servers. Check out the following code sample:

```cs
driver.Bind(NetworkEndpoint.AnyIpv4);
```

### Why is `Bind` returning an error?

`NetworkDriver.Bind` returns an error (a negative value) in the following cases:

- If the socket has creation fails
- If the socket fails to bind to its endpoint

There are many reasons for either of these cases. Here are the most common reasons:

1. The endpoint doesn't exist on the local machine. This is common when binding to a public IP address on a machine behind a LAN (local area network). Refer to the earlier question about which endpoint to bind to.
2. The port is already used by another service. You can use the `netstat` command line utility to diagnose this. For example, on Windows use the command `netstat -a -p UDP` to list UDP endpoints already in use.
3. Binding to a port lower than `1024`. On some platforms (for example, Linux), this requires elevated privileges.
4. Your user doesn't have the permission to create sockets. Some platforms will disallow the creation of sockets for restricted users. For example, on Android the application might require [extra permissions](https://docs.unity3d.com/2022.2/Documentation/Manual/android-permissions-in-unity.html).

### Why isn't my client connecting?

Common causes for a client failing to connect:

1. Binding to an improper endpoint on the server (as in the earlier code sample).
2. The server's firewall has a bad configuration. Try disabling it. If it solves the issue, you can then add a proper exception to its configuration (don't leave it disabled!).
3. The client can't reach the server. You can use command line utilities like `ping` and `traceroute` (`tracert` on Windows) to test the reachability of another machine on the network. It's also possible to observe the traffic sent/received on a machine with tools like [Wireshark](https://www.wireshark.org/).

### How can I change the connection/disconnection timeouts?

You can change connection and disconnection timeouts through custom `NetworkSettings` when creating the NetworkDriver component:

```cs
var settings = new NetworkSettings();
settings.WithNetworkConfigParameters(
    connectTimeoutMS: 500,
    maxConnectAttempts: 10,
    disconnectTimeoutMS: 10000);

var driver = NetworkDriver.Create(settings);
```

This code creates a NetworkDriver where establishing a connection fails after five seconds (with a maximum of 10 attempts, every 500 milliseconds). It also closes connections after 10 seconds of inactivity. The defaults are respectively one minute (60 attempts every second) and 30 seconds.

### Why was my connection closed?

You can get the reason for a `Disconnect` event from the event's `DataStreamReader`:

```cs
var eventType = driver.PopEvent(out _, out var streamReader);
if (eventType == NetworkEvent.Type.Disconnect)
{
    var disconnectReason = streamReader.ReadByte();
}
```

The obtained value is from the `Error.DisconnectReason` enum and indicates the cause of the `Disconnect` event.

### What's the largest message I can send?

By default, the [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) limits the size of messages. The MTU limit ensures messages aren't larger than a single IP packet on most network configurations. Because different protocols and pipelines have different overhead, the size of the maximum payload that you can write to a `DataStreamWriter` might vary. There are two ways to get this value:

```cs
// 1. Directly by subtracting headers from the MTU.
var maxPayloadSize = NetworkParameterConstants.MTU - driver.MaxHeaderSize(pipeline);

// 2. By looking at the capacity of a DataStreamWriter.
driver.BeginSend(pipeline, connection, out var writer);
var maxPayloadSize = writer.Capacity;
driver.AbortSend(writer);
```

To send messages larger than that, use a pipeline with the `FragmentationPipelineStage`. Refer to the section on [using pipelines](./pipelines-usage.md) for more information.

### What does error `NetworkSendQueueFull` mean?

Both `BeginSend` and `EndSend` can return the error code `NetworkSendQueueFull` (value -5).

#### If returned by `BeginSend`

It means UTP couldn't get a buffer for the new message from the send queue. This might indicate that the send queue capacity is insufficient for the workload. You can increase the capacity when creating the NetworkDriver:

```cs
var settings = new NetworkSettings();
settings.WithNetworkConfigParameters(
    sendQueueCapacity: 256
    receiveQueueCapacity: 256);

var driver = NetworkDriver.Create(settings);
```

As the example code demonstrates, it's often a good idea to set the receive queue capacity to the same value. Failing to do so might add latency to the processing of packets, or even cause the packets to drop. This is because if the receive queue is full, newly received packets have to wait in OS (operating system) buffers for processing. If the OS buffers are full, new packets are dropped.

The default value for both send and receive queue capacity is 64. Increasing the values will result in increased memory usage (the impact is about 1500 bytes per unit of capacity).

#### If returned by `EndSend`

This can only happen when sending on a pipeline with a `ReliableSequencedPipelineStage`. It indicates that there already 32 reliable packets in flight, which is the maximum. Refer to the section on [using pipelines](./pipelines-usage.md) or to the question below for tips on how to deal with this situation.

### Can I increase the limit of 32 packets in flight for the reliable pipeline?

It's possible to increase it to 64. Visit the section on [using pipelines](./pipelines-usage.md) for details. Unfortunately, it's impossible to increase it further than that.

However, if your application has different streams of data that require reliability and sequencing, but the ordering of messages between the streams doesn't matter, then it's possible to somewhat circumvent the limit by creating multiple reliable pipelines. That's because the limit is both per connection and per pipeline.

For example, you can create a pipeline for RPCs and another one for chat messages:

```cs
var rpcPipeline = driver.CreatePipeline(typeof(ReliableSequencedPipelineStage));
var chatPipeline = driver.CreatePipeline(typeof(ReliableSequencedPipelineStage));
```

Each pipeline will have its own limit of 32/64 messages in flight. Ordering between the two pipelines isn't guaranteed. Sending a message on `rpcPipeline` and then sending a message on `chatPipeline` doesn't mean that the RPC will be delivered first.
