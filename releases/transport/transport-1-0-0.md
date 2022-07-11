---
title: Unity Transport 1.0.0+
id: transport-1-0-0
---

The [Unity Transport](../../transport/current/about) `com.unity.transport` package respository adds multiplayer and network features to your project. See the following changelog for new features, updates, fixes, and upgrade information.

## [1.1.0] - 2022-06-14

### New features
* A `DataStreamReader` can now be passed to another job without triggering the job safety system.
* A `GetRelayConnectionStatus` method has been added to `NetworkDriver` to query the status of the connection to the Relay server.

### Changes
* `NetworkSettings.WithDataStreamParameters` is now obsolete. The functionality still works and will remain supported for version 1.X of the package, but will be removed in version 2.0. The reason for the removal is that in 2.0 the data stream size is always dynamically-sized to avoid out-of-memory errors.
* `NetworkSettings.WithPipelineParameters` is now obsolete. The functionality still works and will remain supported for version 1.X of the package, but will be removed in version 2.0, where pipeline buffer sizing is handled internally.
* Updated Burst dependency to 1.6.6.
* Updated Collections dependency to 1.2.4.
* Updated Mathematics dependency to 1.2.6.

### Fixes
* `BeginSend` would not return an error if called on a closed connection before the next `ScheduleUpdate` call.
* Fixed a warning if using the default maximum payload size with DTLS.
* Removed an error log when receiving messages on a closed DTLS connection (this scenario is common if there were in-flight messages at the moment of disconnection).
* Fix broken link in package documentation.

## [1.0.0] - 2022-03-28

### Changes
* Changed version to 1.0.0.

## [1.0.0-pre.16] - 2022-03-24

### Changes
* Don't warn when overwriting settings in `NetworkSettings` (e.g. when calling the same `WithFooParameters` method twice).
* Added new methods to set security parameters: `NetworkSettings.WithSecureClientParameters` and `NetworkSettings.WithSecureServerParameters`. These replace the existing `WithSecureParameters`, which is now obsolete.
* Updated Collections dependency to 1.2.3.

### Fixes
* Fixed client certificate not being passed to UnityTLS on secure connections. This prevented client authentication from properly working.
* Fixed: Reliable pipeline drop statistics inaccurate.

## [1.0.0-pre.15] - 2022-03-11

### Changes
* An error is now logged if failing to decrypt a DTLS message when using Relay.
* Decreased default Relay keep-alive period to 3 seconds (was 9 seconds). The value can still be configured through the `relayConnectionTimeMS` parameter of `NetworkSettings.WithRelayParameters`.

### Fixes
* Updated Relay sample to the most recent Relay SDK APIs (would fail to compile with latest packages).

## [1.0.0-pre.14] - 2022-03-01

### Changes
* `IValidatableNetworkParameter.Validate()` method is now part of `INetworkParameter`.
* Added: `NetworkDriver.Create<>()` generic methods.

### Fixes
* Fixed compilation on WebGL. Note that the platform is still unsupported, but at least including the package in a WebGL project will not create compilation errors anymore. Creating a `NetworkDriver` in WebGL projects will now produce a warning.

## [1.0.0-pre.13] - 2022-02-14

### New features
* When using the Relay protocol, error messages sent by the Relay server are now properly captured and logged.

### Fixes

* Fixed: Issue where an overflow of the `ReliableSequencedPipelineStage` sequence numbers would not be handled properly.

## [1.0.0-pre.12] - 2022-01-24

### Fixes
* Clean up changelog for package promotion.

## [1.0.0-pre.11] - 2022-01-24

### Changes
* Updated to Burst 1.6.4.
* Updated to Mathematics 1.2.5.
* Documentation has been moved to the [offical multiplayer documentation site](https://docs-multiplayer.unity3d.com/transport/1.0.0/introduction).

### Fixes
* Fixed a division by zero in `SimulatorPipelineStage` when `PacketDropInterval` is set.
* Don't warn when receiving repeated connection accept messages (case 1370591).
* Fixed an exception when receiving a data message from an unknown connection.

## [1.0.0-pre.10] - 2021-12-02

### Fixes
* On fragmented and reliable pipelines, sending a large packet when the reliable window was almost full could result in the packet being lost.
* Fixed "pending sends" warning being emitted very often when sending to remote hosts.
* Revert decrease of MTU to 1384 on Xbox platforms (now back at 1400). It would cause issues for cross-platform communications.

## [1.0.0-pre.9] - 2021-11-26

### Changes
* Disabled Roslyn Analyzers provisionally

### Fixes
* Fixed: Compiler error due to Roslyn Analyzers causing a wrong compiler argument

## [1.0.0-pre.8] - 2021-11-18

### Changes
* Creating a pipeline with `FragmentationPipelineStage` _after_ `ReliableSequencedPipelineStage` is now forbidden (will throw an exception if collections checks are enabled). That order never worked properly to begin with. The reverse order is fully supported and is the recommended way to configure a reliable pipeline with support for large packets.
* Added `NetworkSettings` struct and API for defining network parameters. See [NetworkSettings documentation](https://docs-multiplayer.unity3d.com/transport/1.0.0/network-settings) for more information.
* Added Roslyn Analyzers for ensuring proper extension of NetworkParameters and NetworkSettings API.
* Update Collections package to 1.1.0

### Fixes
* Fixed: Error message when scheduling an update on an unbound `NetworkDriver` (case 1370584)
* Fixed: `BeginSend` wouldn't return an error if the required payload size was larger than the supported payload size when close to the MTU
* Fixed: Removed boxing in `NetworkDriver` initialization by passing `NetworkSettings` parameter instead of `INetworkParameter[]`
* Fixed a crash on XboxOne(X/S) when using the fragmentation pipeline (case 1370473)

### Upgrade guide
* `INetworkPipelineStage` and `INetworkInterface` initialization methods now receive a `NetworkSettings` parameter instead of `INetworkParameter[]`.

## [1.0.0-pre.7] - 2021-10-21

### Changes
* Some public APIs that should have always been internal are now internal (`Base64`, `SHA256`, `HMACSHA256`, `NetworkEventQueue`, `UdpCHeader`, `UdpCProtocol`, `SessionIdToken`, `NativeMultiQueue`).

### Fixes
* Fixed: Couldn't send a payload of the configured payload size on fragmented pipelines

## [1.0.0-pre.6] - 2021-10-14

### New features
* Added heartbeats functionality to all protocols (enabled by default). If there's no traffic on a connection for some time, a heartbeat is automatically sent to keep the connection alive. The inactivity timeout is controlled by the new parameter `heartbeatTimeoutMS` in `NetworkConfigParameter`. Setting it to 0 disables the feature.

### Changes
* Added `heartbeatTimeoutMS` in `NetworkConfigParameter` to support heartbeats (see above).
* `NetworkDriver.Bind` is now synchronous when using Relay (matches behavior of other protocols).
* `NetworkDriver.Bind` is not required to be called anymore for Relay clients (only for host).
* `EndSend` will now return an error if called with a writer that has failed writes.
* MTU decreased to 1384 (from 1400) on Xbox platforms.
* `Connect` will automatically bind the driver if not already bound. This was already done implicitly before, but now it's explicit (the `NetworkDriver.Bound` property will be true after a successful call to `Connect`).
* Added `DataStream.ReadLong`

### Fixes
* Fixed: Receiving a Disconnect message on DTLS would crash the receive job
* Fixed: TLS server name might be set to nothing in Relay+DTLS, causing the handshake to fail
* Fixed: Couldn't send large messages on fragmented pipeline if `requiredPayloadSize` was not provided to `BeginSend`
* Fixed: DTLS handshake messages were never resent if lost
* Fixed: Clients wouldn't honor the endpoint their were bound to

### Known issues
* Function pointers (for instance in `BeginSend` and `EndSend`) generate GC allocations in non-Burst use cases. The issue will be fixed in the next releases
* XboxOne(S/X) crash when using fragmentation pipeline when the size of the packet is within 100 bytes of the MTU. This will be fixed in the next release


## [1.0.0-pre.5] - 2021-09-16

### Fixes
* Fixed: Socket never created on unbound DTLS clients (causes handshake to fail)
* Fixed: When using DTLS it would not properly read data packets
* Fixed: When using DTLS it could possibly fail to send a packet that was at the MTU size.

## [1.0.0-pre.4] - 2021-09-07

### Fixes
* Fixed: Updated collection types in `SecureNetworkProtocol.cs`
* Fixed: Fixed race condition between UTP and Relay disconnects
* Fixed: Relay not being able to use the fragmentation pipelinestage

## [1.0.0-pre.3] - 2021-09-01

### New features
* Removed references of TransportSamples from readme as they are not currently included in the package
* Stripping out un-needed files from the package

## [1.0.0-pre.2] - 2021-08-23

### New features
* Upgraded collections to 1.0.0-pre.5
* Added support for Secure Protocol while using Unity Relay


## [1.0.0-pre.1] - 2021-07-29

### New features
* Moving into pre-release
* Added Secure Protocol support (TLS/DTLS) to allow for encrypted and secure connections.
* Unity Transport package now supports connecting to the Unity Relay Service. See [Unity Relay](https://unity.com/products/relay) for more information.
* Upgraded burst to 1.5.5


## [0.9.0] - 2021-05-10

### New features
* Added support for long serialization and delta compression.
* Upgraded collections to 1.0.0-pre.1
* Added a new network interface for WebSockets, can be used in both native and web builds.

### Changes
* Minimum required Unity version has changed to 2020.3.0f1.
* The transport package can be compiled with the tiny c# profile and for WebGL, but WebGL builds only support IPC - not sockets.