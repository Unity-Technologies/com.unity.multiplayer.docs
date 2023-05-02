---
id: using-sample
title: Sample projects
---

The Unity Transport package comes with a `Samples` folder containing simple assembly definitions and associated scenes that illustrate the basic functionality of the Unity Transport package library. These sample projects include:

## SimpleClientServer

The [SimpleClientServer](workflow-client-server-udp.md) sample covers all aspects of the Unity Transport package and helps you create a sample project that highlights how to use the API to:

- Configure the transport
- Establish a connection
- Send data
- Receive data
- Close a connection

The goal is to make a remote "add" function. The flow will be: a client connects to the server, and sends a number. This number is then received by the server that adds another number to it and sends it back to the client. The client, upon receiving the number, closes the connection.

## JobifiedClientServer

Continuing from the the [SimpleClientServer](#simpleclientserver) sample, the [JobifiedClientServer](workflow-client-server-jobs.md) sample walks you through creating a client and server that use jobs. Using jobs allows you to take advantage of parallel code execution.

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
