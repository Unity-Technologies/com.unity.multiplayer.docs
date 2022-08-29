---
id: migration
title: Migration from 1.X
description: How to deal with breaking changes introduced in version 2.0 of Unity Transport.
---

This section describes the breaking changes introduced in version 2.0 of the Unity Transport Package (UTP) and how to update projects written for version 1.X.

Note that for most use cases, no action should be required when updating to 2.0. The core APIs like `NetworkDriver` remain the same, with the biggest changes limited to specialized scenarios (e.g. custom network interfaces).

## Protocol incompatibility

The custom communication protocol used by UTP to implement connections over UDP has changed in a backward-incompatible manner. This means that clients running UTP 2.0 or later can't connect to servers running 1.X, and vice versa. Attempting to establish such connections will result in connection failure after the usual timeout.

It is thus recommended to ensure that clients and servers are updated at the same time, or to disallow older clients from connecting once the server is updated. Another strategy is to offer different endpoints for UTP 1.X and 2.0 servers, which could smooth the transition while older clients are updated.

The reasons for this breaking change are to improve bandwidth efficiency, simplify the protocol, and lay foundations for better forward-compatibility of the protocol.

## Custom network interfaces

The `INetworkInterface` API used to implement custom network interfaces (the low-level layer to send and receive packets) has been heavily modified (with the intent of simplifying it). The breaking changes are as follows:

  * There is no concept of `NetworkInterfaceEndPoint` anymore. It has been completely replaced with the more general `NetworkEndpoint`. Consequently, there is no need to implement conversion logic between the two anymore (so `CreateInterfaceEndPoint` and `GetGenericEndPoint` were removed from `INetworkInterface`).
  * There is no need to provide a `NetworkSendInterface` through `CreateSendInterface` anymore. Send operations are now handled entirely by `ScheduleSend`, which gets passed a `PacketsQueue` containing the packets to be sent.
  * The `ScheduleReceive` method doesn't use `NetworkPacketReceiver` (which is now obsolete) to propagate received packets to the rest of UTP. Instead, implementations of `ScheduleReceive` are expected to fill the `PacketsQueue` that is now passed in with the received packets.
  * Implementations of `INetworkInterface` are now expected to be fully compatible with Burst. However, an implementation that is not may be wrapped into a compatible one with the new `WrapToUnmanaged` extension method.
  * Creating a `NetworkDriver` with a custom network interface must now be done using the static `NetworkDriver.Create` method (e.g. `NetworkDriver.Create(new MyCustomInterface())`). Directly constructing a `NetworkDriver` with `new` is deprecated.
  * `INetworkInterface.Initialize` now takes another parameter: a reference to the packet padding. This value can be increased to reserve space for headers and such.

The reason for these breaking changes is to simplify the interface and make it more flexible. For more details on how to create custom network interfaces, please refer to [this section of the documentation](custom-network-interface.md).

## Pipeline stages

There are no changes to how custom pipeline stages themselves are written. However, the mechanisms used to register them and get the identifier of a pipeline stage are different:

  * Instead of registering a custom pipeline stage with `NetworkPipelineStageCollection.RegisterPipelineStage`, use `NetworkDriver.RegisterPipelineStage`. Note that this must be performed on every instance of `NetworkDriver` that will make use of the custom pipeline stage.
  * Instead of retrieving the ID of a pipeline stage with `NetworkPipelineStageCollection.GetStageId`, use the static `NetworkPipelineStageId.Get` method.

The reason for these breaking changes is to remove Burst-incompatible APIs, allowing more of UTP to be used from Burst-compiled code. For more details on how to create custom pipeline stage, please refer to [this section of the documentation](custom-pipeline.md). For more details on pipelines in general, see [this section instead](pipelines-usage.md).

## Other breaking changes

  * After calling `NetworkDriver.Disconnect`, notifying the remote peer of the disconnection now requires completing a `NetworkDriver.ScheduleUpdate` job. In 1.X, `NetworkDriver.ScheduleFlushSend` used to be sufficient for this purpose but it's not the case anymore. The reason for this change is to allow supporting new protocols (e.g. WebSockets) where disconnecting might involve more work than simply sending a message.
  * Using `SimulatorPipelineStageInSend` is now deprecated. Instead, use `SimulatorPipelineStage` and configure the new `ApplyMode` parameter to the direction (send, receive, or both) it should apply to.
  * `NetworkSettings.WithBaselibNetworkInterfaceParameters` is now deprecated. The maximum payload size can't be configured anymore and is automatically handled by UTP. The receive/send queue sizes are now configured via `NetworkSettings.WithNetworkConfigParameters`.
  * `NetworkSettings.WithDataStreamParameters` and `NetworkSettings.WithPipelineParameters` have been removed. The parameters they were used to configure are now handled automatically by UTP and don't require manual configuration anymore. Calls to these methods can be safely deleted.
  * Read and handshake timeouts are not configurable anymore through `NetworkSettings.WithSecureClientParameters` and `NetworkSettings.WithSecureServerParameters`. Instead, the values are derived automatically from other configuration parameters. These settings can safely be removed from these calls.
