---
id: using-sample
title: Sample projects
---

The Unity Transport package comes with a `Samples` folder containing simple assembly definitions and associated scenes that illustrate the basic functionality of the Unity Transport package library. These sample projects include:

- [Ping](#ping)
- [Pipeline](#pipeline)
- [RelayPing](#relayping)

## Ping

The Ping sample project implements a simple ping-pong service and supplies client and server behaviors for two scenarios.

- The first scenario uses `PingMainThreadServerBehaviour` and `PingMainThreadClientBehaviour` to implement peers to process messages only in the main thread.
- The second scenario shows how to use the Burst compiler and the job system with `PingServerBehaviour` and `PingClientBehaviour`.

## Pipeline

The Pipeline sample shows how to define [pipeline](pipelines-usage.md) stages as described in [Pipelines](pipelines-usage.md). The code shows a pipeline definition for unreliable sequenced delivery based on a default `UDPNetworkInterface`.

:::note
Consider using pipeline stages carefully. Some pipeline configurations can't add value to the quality of service and might be harmful, depending on the underlying `NetworkInterface` you use. For example, it makes sense to have a pipeline stage for unreliable sequenced delivery over a `UDPNetworkInterface`. The same [pipeline](pipelines-usage.md) stage over a `WebSocketNetworkInterface` incurs unnecessary overhead because the underlying network interface already provides unreliable sequenced delivery.
:::

## RelayPing

The RelayPing sample project extends the [Ping](#ping) sample project to use the [Unity Relay Service](https://unity.com/products/relay) to connect players. It shows how to manipulate and pass custom [Network Settings](network-settings.md) to a `NetworkDriver`.
