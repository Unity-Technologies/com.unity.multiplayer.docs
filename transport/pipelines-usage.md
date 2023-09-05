---
id: pipelines
title: Pipeline use
---

Pipelines are a core functionality of Unity Transport that allows selectively adding layers of functionality on top of the standard unreliable datagrams that UTP provides by default.

You can use pipelines to add sequencing, reliability, and fragmentation features.

Pipelines are a sequence of one or more stages. When you **send** a message through a pipeline, Unity Transport runs through the stages in order, piping the output of the first stage into the second stage. As a result, if the first stage adds a header to the packet, the second stage processes the entire packet, including the header added by the first stage. When you **receive** a message, it goes through the same chain of stages in reverse order.

![Pipeline stages](/img/transport/pipeline-stages-2.png)

`FragmentationPipelineStage` allows breaking large messages into smaller pieces, and `ReliableSequencedPipelineStage` allows sending messages with guaranteed order and delivery. The following example shows how to create a pipeline with both functionalities:

```csharp
// In initialization code, before any connections are made.
var myPipeline = driver.CreatePipeline(
    typeof(FragmentationPipelineStage), typeof(ReliableSequencedPipelineStage));
```

This creates a pipeline where Unity Transport first fragments messages into smaller pieces (that each fit in a packet), then delivers the individual packets reliably and in the correct order.

![Block diagram](/img/transport/fragmentation-2.png)

This illustration shows the process of fragmentation and delivering packets in order. The small orange pieces on the fragments represent sequence numbers and other information added by the reliable stage.

:::note
The order of the stages in a pipeline is important. If you reverse the order, UTP only adds the reliability information to the larger unfragmented message. Doing so is less bandwidth-efficient because losing any single fragment would result in needing to resend the entire unfragmented message. By ordering the reliable stage after fragmentation, you only need to resend a single fragment if you lose a fragment.
:::

You can pass the pipeline to `BeginSend` to send a message on this new pipeline:

```csharp
driver.BeginSend(myPipeline, connection, out var writer);
```

You can use the last argument of `PopEvent`/`PopEventForConnection` to know which pipeline you received a message on:

```csharp
var eventType = driver.PopEvent(out _, out _, out var receivePipeline);
if (eventType == NetworkEvent.Type.Data)
{
    // Data message was received on the receivePipeline pipeline.
}
```

:::note
You should always configure pipelines the same way on the server and client. The CreatePipeline calls (and their order) must match on both ends of a connection. Unity Transport doesn't protect you against mismatched pipelines between servers and clients.
:::

## The fragmentation pipeline stage

By default, Unity Transport can only send messages that fit into the [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) (roughly 1400 bytes). You must split larger messages into smaller pieces. This process is called message fragmentation.

Pipelines configured with a `FragmentationPipelineStage` automatically fragment messages for you. You can configure the maximum pre-fragmentation payload size when creating a `NetworkDriver`:

```csharp
var settings = new NetworkSettings();
settings.WithFragmentationStageParameters(payloadCapacity: 10000);

var driver = NetworkDriver.Create(settings);
var fragmentedPipeline = driver.CreatePipeline(typeof(FragmentationPipelineStage));
```

The maximum value is about ~20 megabytes. However, the fragmentation pipeline stage is only optimized for payloads of a few kilobytes (the default value is 4096 bytes). We don't recommend sending messages much larger than a few kilobytes unless it’s a one-time transmission at initialization.

Furthermore, if you use this pipeline stage with the `ReliableSequencedPipelineStage`, the maximum value is even lower at around 88 kilobytes.

:::note
Most pipeline stages don't support packets larger than the MTU (maximum transmission unit). As a result, in most cases, you should use `FragmentationPipelineStage` as the first stage in pipelines with multiple stages.
:::

## The reliable pipeline stage

Pipelines configured with a `ReliableSequencedPipelineStage` guarantee the delivery and order of their packets, similar to how a [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection would. The `ReliableSequencedPipelineStage` tags packets with a sequence number and peers acknowledge the reception of these numbers. If a peer doesn't acknowledge a packet, UTP resends it until it’s acknowledged. If a packet arrives out of order, UTP buffers it until it receives all earlier packets.

While reliability is useful, you should use it sparingly in a multiplayer game context. Reliable data streams can suffer from [head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking), which can cause increased latency and delay packet processing. We recommend using the `ReliableSequencedPipelineStage` pipeline stage only for important traffic you can't afford to lose (like RPCs and character actions).

### Maximum in-flight packets

The reliable stage limits the number of packets in-flight at any given time. The default limit is 32, but you can increase the limit up to 64. The in-flight packet limit is per connection and per pipeline; it's not shared across connections.

Due to the in-flight package limitation, we recommend batching reliable messages together as much as possible. For example, instead of sending two reliable messages of 20 bytes each, concatenate them and send a single message of 40 bytes.

If you try to send a new reliable message while the maximum number of packets is already in-flight, `EndSend` returns the error code `NetworkSendQueueFull` (value `-5`). If you encounter this situation, we recommend storing the message in a queue until it's possible to send it again:

```csharp
driver.BeginSend(myReliablePipeline, connection, out var writer);
// Write your message to the writer.
if (driver.EndSend(writer) == (int)Error.StatusCode.NetworkSendQueueFull))
{
    // Copy your message to a queue, and try resending later.
}
```

### Increasing the limit

You can change the in-flight package limit when creating a `NetworkDriver`:

```csharp
var settings = new NetworkSettings();
settings.WithReliableStageParameters(windowSize: 64);

var driver = NetworkDriver.Create(settings);
var reliablePipeline = driver.CreatePipeline(typeof(ReliableSequencedPipelineStage));
```

The default limit is 32, and the maximum is 64. Any value higher than 32 results in slightly large (4 bytes) headers, leaving much less space for actual data in the packets.

## The simulator pipeline stage

The `SimulatorPipelineStage` is meant to be used when testing your application. It allows you to simulate network conditions like packet loss, delay, and jitter. You can use this stage to know how a game might behave in a real-world environment.

You can configure the network conditions when creating a `NetworkDriver`:

```csharp
var settings = new NetworkSettings();
settings.WithSimulatorStageParameters(
    maxPacketCount: 100,
    mode: ApplyMode.AllPackets,
    packetDelayMs: 50);

var driver = NetworkDriver.Create(settings);
var simulatorPipeline = driver.CreatePipeline(typeof(SimulatorPipelineStage));
```

The following list has some important parameters of the `SimulatorPipelineStage`.

* `maxPacketCount` is the maximum number of simultaneously delayed packets. Past that, packets go through without any added delay.
* mode In which direction the simulator should apply the network conditions (send, receive, or both).
* `packetDelayMs` is the delay in milliseconds to apply to packets. Good values range between `20` (for a good broadband connection) and `200` (for a bad mobile connection).
* `packetJitterMs` is the deviation around the packet delay in milliseconds. This value is typically half the packet delay or slightly less.
* `packetDropPercentage` is the percentage of packets to drop. You should use values above `3`, even for bad mobile connections.

:::note
SimulatorPipelineStage should normally be the last in the chain when creating a pipeline with multiple stages. Otherwise, packets might drop before other stages can process them (which isn't useful for a reliable pipeline, for example).
:::
