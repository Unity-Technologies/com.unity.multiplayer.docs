---
id: migration
title: Migrate from 1.X
description: How to deal with breaking changes introduced in version 2.0 of Unity Transport.
---

This section describes the breaking changes introduced in version 2.0 of the Unity Transport Package (UTP). It also explains how to update projects written for version 1.X.

:::note
In most use cases, there’s no need to perform any additional steps to migrate from 1.X to 2.0. The core APIs (like `NetworkDriver`) remain the same, and the most significant changes are limited to specialized scenarios, such as [custom network interfaces](#custom-network-interfaces).
:::

## Collections-related errors following upgrade

It is possible that upgrading a project from version 1.X to 2.0 will result in errors like the following appearing in the console:

```
Unity.Collections/NativeParallelHashSetExtensions.gen.cs(17,51): error CS0246: The type or namespace name 'NativeHashSet<>' could not be found (are you missing a using directive or an assembly reference?)

Unity.Collections/UnsafeParallelHashSetExtensions.gen.cs(1084,78): error CS0246: The type or namespace name 'UnsafeHashSet<>' could not be found (are you missing a using directive or an assembly reference?)
```

There errors can occur when upgrading the Collections package from version 1.2 to 2.X. Closing and restarting the editor is usually enough to get rid of the errors.



## Editor version support

UTP 1.X supports Unity Editor 2020.3 and up, but 2.0 only supports 2022.2 and up to keep the Collections package dependency up to date. Unity Editor 2022.2 brings changes to the core Unity Engine runtime, allowing more code to be Burst-compiled. UTP benefits from this through increased performance.

:::note
UTP 1.X remains fully supported on LTS versions 2020.3 and 2021.3, and Unity will continue to release bug fixes and improvements. However, some features (like [WebSocket](workflow-client-server-ws.md) support) will only be available in UTP 2.0 and up.
:::

## DataStreamReader/DataStreamWriter moved to Collections

UTP 2.0 moves the `DataStreamReader` and `DataStreamWriter` APIs to the Collections package to make them more widely available outside UTP. As a result, updating to UTP 2.0 might require you to add a using `Unity.Collections` directive at the top of files using the `DataStreamReader` and `DataStreamWriter` APIs.

The APIs are mostly unchanged, except for raw pointers. `Unity.Collections.LowLevel.Unsafe` namespace now provides the raw pointer methods with Unsafe appended to their names. For example, the method `WriteBytes(byte*, int)` is now `WriteBytesUnsafe(byte*, int)`.

## Protocol incompatibility

The custom communication protocol UTP uses to implement connections over UDP has changed in a backward-incompatible manner, which means clients running UTP 2.0 or later can't connect to servers running 1.X, and vice versa. If you try to establish a connection between UTP 2.0 and UTP 1.X, UTP returns a connection failure after the usual timeout.

Due to the incompatibility between UTP 2.0 and UTP 1.X, you must either ensure that you update clients and servers simultaneously or disallow older clients from connecting to updated servers. Alternatively, you can create different endpoints for UTP 1.X and 2.0 servers to smooth the transition while you update older clients.

These breaking changes improve bandwidth efficiency, simplify the protocol, and lay the foundations for better forward compatibility.

## Custom network interfaces

The updates in UTP 2.0 heavily modify the `INetworkInterface` API used to implement custom network interfaces (the low-level layer to send and receive packets) to simplify it.

UTP 2.0 introduces the following breaking changes to custom network interfaces:

- UTP 2.0 no longer has the idea of `NetworkInterfaceEndPoint`; the more general `NetworkEndpoint` replaces `NetworkInterfaceEndPoint`. As a result, you don't need to implement conversion logic between `NetworkEndpoint` and `NetworkInterfaceEndPoint` anymore, so INetworkInterface omits `CreateInterfaceEndPoint` and `GetGenericEndPoint`.
- You no longer need to create a `NetworkSendInterface` through `CreateSendInterface`. `ScheduleSend` handles send operations, which get passed a `PacketsQueue` containing the packets to send.
- The `ScheduleReceive` method doesn't use the (now obsolete) `NetworkPacketReceiver` to propagate received packets to the rest of UTP. Instead, implementations of `ScheduleReceive` should fill the `PacketsQueue` passed in with the received packets.
- Implementations of `INetworkInterface` must now be fully compatible with Burst. If an implementation is incompatible with Burst, you can wrap it into a compatible implementation with the new `WrapToUnmanaged` extension method.
- You must now create NetworkDrivers using a custom network interface using the static `NetworkDriver.Create` method. For example, `NetworkDriver.Create(new MyCustomInterface())` creates a `NetworkDrivernamed MyCustomInterface()`. Directly constructing a NetworkDriver with new is deprecated.
- `INetworkInterface.Initialize` now takes another parameter: a reference to the packet padding, and you can increase this value to reserve space for headers.

These breaking changes simplify and increase the flexibility of the interface, making it easier to create custom network interfaces.

## Pipeline stages

UTP 2.0 don't introduce changes to how you write custom pipeline stages. However, the mechanisms you should use to register and get the identifier of a pipeline stage have changed:

- Instead of registering a custom pipeline stage with `NetworkPipelineStageCollection.RegisterPipelineStage`, use `NetworkDriver.RegisterPipelineStage`. You must do this on every instance of `NetworkDriver` that uses the custom pipeline stage.
- Instead of retrieving the ID of a pipeline stage with `NetworkPipelineStageCollection.GetStageId`, use the static `NetworkPipelineStageId.Get` method.

These breaking changes remove Burst-incompatible APIs, allowing you to use more of UTP with Burst-compiled code.

For more information, see the [section on using pipelines](https://docs.unity3d.com/Packages/com.unity.transport@2.0/manual/pipelines-usage.html).

## Other breaking changes

UTP 2.0 also introduces the following breaking changes:

* You must now complete a `NetworkDriver.ScheduleUpdate` job when notifying the remote peer of a disconnection after calling `NetworkDriver.Disconnect`. In 1.X, `NetworkDriver.ScheduleFlushSend` was enough to tell a remote peer of a disconnection, but this isn't the case with UTP 2.0. This change supports new protocols, such as WebSockets, where disconnecting might involve more work than simply sending a message.
* Using `SimulatorPipelineStageInSend` is now deprecated. Instead, use SimulatorPipelineStage and configure the new `ApplyMode` parameter to the direction desired (send, receive, or both).
* `NetworkSettings.WithBaselibNetworkInterfaceParameters` is now deprecated. You can no longer configure the maximum payload size; UTP handles the payload size automatically. However, you can configure the receive and send queue sizes with `NetworkSettings.WithNetworkConfigParameters`.
* UTP 2.0 removes `NetworkSettings.WithDataStreamParameters` and `NetworkSettings.WithPipelineParameters`. You no longer need to manually configure either of these parameters, so the methods are unnecessary. You can safely delete calls to these methods.
* You no longer need to configure read and handshake timeouts through `NetworkSettings.WithSecureClientParameters` and `NetworkSettings.WithSecureServerParameters`. Instead, UTP derives the values automatically from other configuration parameters. You can safely remove these settings from these calls.
