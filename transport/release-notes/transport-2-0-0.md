---
title: Unity Transport 2.0.0+
id: transport-2-0-0
---

The [Unity Transport](https://docs-multiplayer.unity3d.com/transport/current/about/) `com.unity.transport` package repository adds multiplayer and network features to your project. See the following changelog for new features, updates, fixes, and upgrade information.

## [2.2.1] - 2023-12-06

### Fixes

* Fixed an issue where `NetworkEndpoint.TryParse` would leave the out parameter endpoint with a valid `NetworkFamily`, even if parsing of the address had failed.

## [2.2.0] - 2023-12-01

### New features

* The WebSocket URL path can now be configured using `NetworkSettings.WithWebSocketParameters`. For clients, the path provided there is the path on which connections will be made. For servers, it's the path connections will be accepted on.
* It is now possible to specify a payload to be sent along with connection requests through a new parameter for the `NetworkDriver.Connect` call. This payload is retrievable as-is on the server side when calling `NetworkDriver.Accept`. An example usage would be to send an authentication token (thus alleviating the need to do this through a separate message).

### Changes

* All parameter structures that can be used with `NetworkSettings` are now marked as `Serializable`.
* For custom endpoints, `NetworkDriver.Connect` will now automatically bind to the endpoint passed as a parameter instead of binding to the wildcard IPv4 address (only if the driver was not previously bound).
* The size of `NetworkEndpoint` has been increased, which allows creating custom endpoints (endpoints where the family is `NetworkFamily.Custom`) containing up to 60 bytes of data.

### Fixes

* Allow creating a driver with the same Relay allocation as a previous driver. Note that having two drivers using the same Relay allocation _at the same time_ is not supported. This fix is for the case where one disposes of a driver, and then creates a new one with the same Relay allocation.
* Fixed an issue where some data messages could be inadvertently dropped if the last message in the connection handshake was lost in transit.
* Fixed an issue where reliable packets could be resent even after they had been acknowledged, which would lead to wasted bandwidth.
* Fixed an issue that made it impossible to set the family of a `NetworkEndpoint` to `NetworkFamily.Custom`.
* Fixed an issue where it was possible for the state of a connection (as reported by `GetConnectionState`) would be `Disconnected` one update before the `Disconnect` event would appear through `PopEvent`.
* Fixed an issue where WebSocket connections would be closed if the TCP OS buffers were overflowed. In this situation, traffic that can't be sent on the TCP socket will now accumulate in the send queue. If _that_ fills up, then new `BeginSend` operations will return `Error.StatusCode.NetworkSendQueueFull` and the situation can be handled by user as they see fit (e.g. buffer the traffic on the side). Frameworks like Netcode for GameObjects already handle this situation gracefully.
* Fixed an issue where if the receive queue was filled up (say when pulling a lot of data at once from a socket), then WebSocket packets would fail to be processed and their associated connections would be closed.

## [2.1.0] - 2023-09-19

### New features

* It is now possible to configure the maximum message size that the transport will send through a new `maxMessageSize` parameter in `NetworkSettings.WithNetworkConfigParameters`. This is useful for environments where network equipment mishandles larger packets (like some mobile networks or VPNs). The value excludes IP and UDP headers, but includes headers added by the transport itself (e.g. reliability headers). The default value is 1400. Note that it is recommended that both client and server be configured to use the same value.
* Added new values `AuthenticationFailure` and `ProtocolError` to the `Error.DisconnectReason` enum. These values are respectively returned when a connection fails to be established because of DTLS/TLS handshake failure, and for unexpected and unrecoverable errors encountered by the transport (e.g. unexpected socket errors or malformed WebSocket frames).
* Added a new `NetworkFamily.Custom` value and proper support for it in `NetworkEndpoint`. This value is intended for usage with custom `INetworkInterface` implementations, where endpoints are not IP addresses.

### Changes

* Updated Collections dependency to 2.2.1.
* Updated Burst dependency to 1.8.8.
* Updated Mathematics dependency to 1.3.1.
* `NetworkDriver.GetRelayConnectionStatus` will now return the new enum value `RelayConnectionStatus.NotUsingRelay` when called on a `NetworkDriver` that has not been configured to use Unity Relay. The previous behavior was to throw an exception. This can be used to safely determine if a driver is using Relay, even from Burst-compiled code.
* `RelayServerData` now exposes a `IsWebSocket` field that can be used to determine if the server data will be using a WebSocket endpoint. This value is set automatically if constructing the `RelayServerData` from an allocation object, and can be set through a new optional `isWebSocket` parameter for low-level constructors.
* `NetworkEndpoint.RawPort` is now obsolete. There is little use for this API since it basically only converts to/from network byte order. There are standard C# APIs to do this.

### Fixes

* Fixed a possible crash when using secure WebSockets that would occur if a connection was closed suddenly with pending packets waiting to be sent.
* Fixed an issue where empty messages would not properly be received if sent on a non-default pipeline.
* Fixed "Input string was not in a correct format" log when listening on a port already in use.

## [2.0.2] - 2023-05-30

### Changes

* When using Unity Relay, `NetworkDriver.GetRemoteEndpoint` will now always return the address of the Relay server, instead of returning the address until a connection is established, and then returning the allocation ID encoded as an endpoint (appearing as an invalid endpoint). This makes the behavior the same as it was in version 1.X of the package.
* Updated Collections dependency to 2.1.4.
* A warning will now be emitted if passing a connection type other than "wss" to the `RelayServerData` constructors on WebGL (other connection types are not supported on that platform).

### Fixes

* Fixed an issue where the reliable pipeline stage could end up writing past the end of its internal buffer and thrashing the buffers of other connections. This could result in packet corruption, but would most likely result in erroneous -7 (`NetworkDriverParallelForErr`) errors being reported when calling `EndSend`.
* Fixed an issue where upon returning -7 (`NetworkDriverParallelForErr`), `EndSend` would leak the send handle. Over time, this would result in less send handles being available, resulting in more -5 (`NetworkSendQueueFull`) errors.
* Fixed an issue where WebSocket connections would always take at least `connectTimeoutMS` milliseconds to be reported as established, even if the connection was actually established faster than that.
* Fixed an issue where `ArgumentOutOfRangeException` could be thrown in situations where a new WebSocket connection is established while a previous connection is in the process of being closed.
* If nothing is received from a Unity Relay server for a while, the transport will now attempt to rebind to it. This should improve the accuracy of `GetRelayConnectionStatus` in scenarios where the Relay allocation times out while communications with the server are out.
* Fixed an issue where `UDPNetworkInterface` (the default one) would not bind to the correct address if the local IP address change and the socket needs to be recreated (e.g. because the app was backgrounded on a mobile device).
* Fixed an issue where `Disconnect` events would fail to be reported correctly for WebSocket connections.
* Fixed an issue where, when using Relay, heartbeats would be sent constantly when they are disabled by setting `relayConnectionTimeMS` to 0 in the Relay parameters.

## [2.0.1] - 2023-04-17

### Changes

- Updated Collections dependency to 2.1.1.

## [2.0.0] - 2023-04-14

### Changes

- NetworkEndpoint.ToString and its fixed string variant now return "invalid" for invalid endpoints instead of an empty string.
- Updated Burst dependency to 1.8.4.
- Updated Collections dependency to 2.1.0.

### Fixes

- Fixed an issue where the TLS handshake of a new secure WebSocket connection could possibly fail if there were already other active connections on the same server.

## [2.0.0-pre.8] - 2023-03-30

### New features

- MultiNetworkDriver can then be used for client drivers too. The restriction on it accepting only listening drivers has been lifted, and it now offers a new Connect method to connect client drivers. This makes it easier to write networking code that can be shared between server and client.
- Added a new ReliableUtility.SetMaximumResendTime static method, allowing to modify the maximum resend time of the reliable pipeline at runtime (there's already a similar method for the minimum resend time). Increasing this value can improve bandwidth usage for poor connections (RTT greater than 200ms).
- Added the possibility of setting the minimum and maximum resend times of the reliable pipeline through NetworkSettings (with WithReliableStageParameters).

### Changes

- NetworkEndpoint.TryParse will now return false and log an error when attempting to parse an IPv6 address on platforms where IPv6 is not supported. The previous behavior was to throw an exception, but only in the editor. On the devices themselves, the address would be successfully parsed silently, which would lead to confusing socket errors down the line.
- The SimulatorUtility.Context structure has been made internal. It contained only implementation details, or values that appeared useful but were actually either misleading or broken.
- The RelayMessageType enum has been made internal. The only purpose of this type was to list the different messages of the Relay protocol, which is an implementation detail that should not be relevant to users.

### Fixes

- Fixed an issue where calling ScheduleFlushSend before the socket was bound would still result in socket system calls being made, resulting in errors being logged.
- No warning will be printed when attempting to send on a WebSocket connection that has been closed by the remote peer (would only happen if calling ScheduleFlushSend).

## [2.0.0-pre.7] - 2023-03-15

### New features

- Added a new MultiNetworkDriver API to make it easier to handle multiple NetworkDriver instances at the same time for cross-play scenarios. Refer to the "cross-play support" section of the documentation for more details on this feature. This new API is also showcased in a new "CrossPlay" package sample.

### Changes

- Update Burst dependency to 1.8.3.
- The QueuedSendMessage structure was removed as it didn't serve any purpose anymore.
- The dependency argument of NetworkDriver.ScheduleFlushSend is now optional.
- SequenceHelpers, RandomHelpers, and the extensions in NativeListExt and FixedStringExt have all been made internal. These are all internal helper classes that shouldn't have been part of the public API in the first place.
- Many APIs and types inside ReliableUtility have been made internal (among them all APIs and types dealing with send/receive contexts and packet information and timers). The information they contain was meant purely for internal consumption in the first place. The statistics and RTT information inside the shared context remains public.
- Removed errorCode from ReliableUtility.SharedContext. Any useful information it can provide is already returned by higher-level APIs like NetworkDriver.EndSend.
- Default send and receive queue sizes are now set to 512 packets (previous value was 64). The queue sizes are modifiable with NetworkSettings.WithNetworkConfigParameters.

### Fixes

- Fixed a possible exception in IPCNetworkInterface if it was fed an unknown endpoint.
- Fixed NetworkDriver.GetLocalEndpoint when using WebSocketNetworkInterface (note that on web browsers this will now print a warning since local endpoints are not available on WebGL).

## [2.0.0-pre.6] - 2023-01-13

### New features

- Added a NetworkConnection.ToFixedString method to allow logging network connections from Burst.

## [2.0.0-pre.5] - 2023-01-12

### Changes

- Revert to Collections 2.1.0-pre.6 as pre.7 is not promoted yet.

## [2.0.0-pre.4] - 2023-01-12

### Changes

- Update Burst dependency to 1.8.2.
- Update Collections dependency to 2.1.0-pre.7.
- The InternalId and Version properties of NetworkConnection are now internal. These referred to internal values and using them directly was error-prone since values could be reused across connections. To compare connections reliably, compare the NetworkConnection objects directly (they implement all the relevant operators and interfaces).
- Replace NetworkDriverIdentifierParameter (and WithNetworkDriverIdentifierParameters) with a more general LoggingParameter (and WithLoggingParameters). Note that currently these parameters don't affect anything, and are there for future use only.

## [2.0.0-pre.3] - 2022-11-29

### Changes

- it's now possible to set a window size of up to 64 for `ReliableSequencedPipelineStage` (use `NetworkSettings.WithReliableStageParameters` to modify the value). Doing so increases the packet header size by 4 bytes though, so the default value remains at 32.
- The Soaker and Pipeline samples were removed in an effort to streamline the samples offered with the package.

### Fixes

- Fixed an issue where following an IP address change, the connection to the Relay server would not be re-established properly because of a malformed bind message.
- Fixed an issue where connecting to a Relay server on WebGL builds would fail with a `SocketException`.
- Fixed an issue where an `InvalidOperationException` would be thrown when hosting on WebGL even if using Relay (the exception should only be thrown when not using Relay).

## [2.0.0-pre.2] - 2022-11-11

### Changes

- The return code of `NetworkDriver.Bind` and `NetworkDriver.Listen` is now a proper value from the `Error.StatusCode` enum, instead of a seemingly random negative value.
- If the connection to the Relay server fails (for example, the DTLS handshake fails), then the connection status returned by `NetworkDriver.GetRelayConnectionStatus` will now be `AllocationInvalid`. It used to remain `NotEstablished` which would leave no way for a user to determine that the connection had failed.
- Status codes `NetworkHeaderInvalid` and `NetworkArgumentMismatch` are now marked as obsolete. Nothing in the API returns these status codes anymore.

### Fixes

- Fixed `IndexOutOfRangeException` when connecting a driver configured with IPC interface and Relay. This case isn't valid and now fails with a `InvalidOperationException` when the driver is created.
- Fixed a crash on Android when using the Mono backend.

## [2.0.0-exp.8] - 2022-10-28

### New features

- Support for the `com.unity.logging` package has been added. If the package is installed, logs will go through its default logger instead of the classic `UnityEngine.Debug` mechanism.
- A new `FixedPEMString` type is introduced to store certificates and private keys in the PEM format. `WithSecureClientParameters` and `WithSecureServerParameters` from `NetworkSettings` now accept certificates and private keys in this format instead of `FixedString4096Bytes`. it's still recommended to use the `string`\-based versions, however.

### Changes

- It isn't necessary anymore to configure the hostname with `NetworkSettings.WithSecureClientParameters` when using secure WebSockets connections to the Relay server.
- Fields have been renamed in the `SecureNetworkProtocolParameter` structure: `Pem` is now `CACertificate`, `Rsa` is now `Certificate`, and `RsaKey` is now `PrivateKey`. Note that directly using this structure isn't recommended. `WithSecureClientParameters` and `WithSecureServerParameters` from `NetworkSettings` are the preferred ways of configuring encryption parameters.
- The `SecureNetworkProtocolParameter` structure now stores certificates and private keys as `FixedPEMString` instead of `FixedString4096Bytes`, which allows for certificates larger than 4KB.
- `NetworkSettings.WithSimulatorStageParameters` now provides default values for parameters `maxPacketSize` and `applyMode`. The defaults are respectively the MTU size, and to apply the simulator in both directions (send/receive).

### Fixes

- Fixed Websockets sending ping messages when the `HeartbeatsTimeout` parameter is disabled (set to `0`).
- Fixed an issue with secure WebSockets where a connection would fail to be established if the end of the TLS handshake and beginning of the WebSocket handshake arrived in the same message.
- it's now possible to pass certificates larger than 4KB to `WithSecureClientParameters` and `WithSecureServerParameters` from `NetworkSettings`.
- Fixed an issue where if one end of a reliable pipeline stopped sending any traffic and its latest ACK message was lost, then the other end would stall.

## [2.0.0-exp.7] - 2022-09-29

### New features

- it's now possible to obtain `RelayAllocationId`, `RelayConnectionData`, and `RelayHMACKey` structures from byte arrays using their static `FromByteArray` method.
- A new constructor for `RelayServerData` is now provided with argument types that better match those available in the models returned by the Relay SDK. The "RelayPing" sample has been updated to use this constructor.
- New constructors for `RelayServerData` are now provided with argument types that better match those available in the models returned by the Relay SDK. The "RelayPing" sample has been updated to use them constructor.
- `NetworkSettings` now has a `IsCreated` property which can be used to check if it's been disposed of or not.

### Changes

- Reverted the fix for the `SimulatorPipelineStage` always using the same random seed, reverting its behavior to always be deterministic. If non-determinism is desired, use a dynamic random seed (for example, `Stopwatch.GetTimestamp`).
- The default network interface (`UDPNetworkInterface`) does not enable address reuse anymore. This means `NetworkDriver.Bind` will now always fail if something else is listening on the same port, even if that something else is bound to a wildcard address and we are trying to bind to a specific one.
- Added: `NetworkDriverIdentifierParameter` struct and `NetworkSettings.WithDriverIdentifierParameters()` method that can be use to identify the NetworkDriver instances with a custom label. Currently this method serves no purpose, but might be used in future releases to make debugging easier.
- The `InitialEventQueueSize`, `InvalidConnectionId`, and `DriverDataStreamSize` fields were removed from `NetworkParameterConstants`. They all served no purpose anymore.
- If using Relay, it's now possible to call `Connect` without an endpoint (the endpoint would be ignored anyway). This extension to `NetworkDriver` is provided in the `Unity.Networking.Transport.Relay` namespace.
- The `RelayServerData.HMAC` field is now internal. There was no use to this being available publicly.
- The deprecated constructor for `RelayServerData` that was taking strings for the allocation ID, connection data, and key has been completely removed.
- The deprecated `RelayServerData.ComputeNewNonce` method has also been removed. One can provide a custom nonce using the "low level" constructor of `RelayServerData`. Other constructors will select a new one automatically.

### Fixes

- Fixed an issue where a duplicated reliable packet wouldn't be processed correctly, which can possibly lead to the entire reliable pipeline stage stalling (not being able to send new packets).
- Fixed an issue where a warning about having too many pipeline updates would be spammed after a connection was closed.
- Fixed an issue where pipeline updates would be run too many times, which would waste CPU and can lead to the warning about having too many pipeline updates being erroneously logged.
- Fixed issues with `ReliableSequencePipelineStage` that would, in rare circumstances, lead to failure to deliver a reliable packet.
- Fixed an issue where sending maximally-sized packets to the Relay when using DTLS would fail with an error about failing to encrypt the packet.
- Fixed an issue when using secure WebSockets where the stream would become corrupted, resulting in failure to decrypt packets (and eventually potentially a crash of the server).

## [2.0.0-exp.6] - 2022-09-02

### Fixes

- Fixed changelog.

## [2.0.0-exp.5] - 2022-09-01

### New features

- Preliminary WebSocket support. To have a `NetworkDriver` use WebSockets, create it with the appropriate network interface (for example, `NetworkDriver.Create(new WebSocketNetworkInterface())`). To enable TLS support, create the driver with `NetworkSettings` configured with `WithSecureClientParameters`/`WithSecureServerParameters` (on the client, only the hostname needs to be provided).
- `NetworkSettings.WithSecureClientParameters` and `NetworkSettings.WithSecureServerParameters` now have versions where the certificates and hostnames are provided as normal strings, instead of fixed strings.

### Changes

- `Protocol` field was removed from the `SecureNetworkProtocolParameter` structure. The protocol is now determined automatically from the network interface being used.
- Updated to Collections 2.1.0-exp.1
- `FragmentationPipelineStage.FragContext` was made internal as it's an internal implementation detail that serves no purpose being exposed publicly.
- Multiple APIs were removed or made internal in `ReliableUtility` (more than is practical to list here). These were all internal implementation details that served no purpose being exposed publicly. The only remaining public APIs in `ReliableUtility` are those used to gather statistics from a reliable pipeline (as demonstrated in the Soaker sample).
- All APIs except `Parameters` and `Context` in `SimulatorUtility` were made internal as they're implementation details that serve no purpose being exposed publicly.
- it's no longer possible to configure the read timeout in the secure parameters as values other than the default (0) were never properly supported.
- it's no longer possible to configure the handshake minimum/maximum timeouts in the secure parameters. These values are now derived from the `connectTimeoutMS` and `maxConnectAttempts` values configured with `NetworkSettings.WithNetworkConfigParameters`.
- Hostnames in secure parameters are now `FixedString512Bytes` instead of `FixedString32Bytes`, allowing any possibly hostname to be used instead of only short ones.
- `NetworkSendQueueHandle` was removed. It wasn't used for anything anymore (previously it was used for custom implementations of `INetworkInterface`).
- `NetworkInterfaceSendHandle` and `SendHandleFlags` were made internal. With the removal of `NetworkSendInterface`, these served no purpose anymore.
- `INetworkInterface.Initialize` now receives a `ref packetPadding` parameter that can be increased to reserve space for headers.
- `BaselibNetworkInterface` was renamed to `UDPNetworkInterface`.

### Fixes

- Fixed an issue where when sending data on a connection and closing that connection in the same update, the data message would not be sent properly.
- Fixed a stack overflow exception when send/receive queue capacity was set high (>10,000).
- Fixed an issue where `SimulatorPipelineStage` would always use the same seed for its random number generator.

### Upgrade guide

## [2.0.0-exp.4] - 2022-08-03

### New features

- A new global network simulator has been added, configurable through `NetworkSettings.WithNetworkSimulatorParameters` (settings can be modified at runtime with `NetworkDriver.ModifyNetworkSimulatorParameters`). Unlike `SimulatorPipelineStage`, it applies its parameters to *all* traffic (including control messages). Note that it's currently *much* less featureful than `SimulatorPipelineStage` (only supports dropping packets for now), so we still recommend using the latter for all network simulation.
- Added a new `NetworkDriver.ModifySimulatorStageParameters` API to modify the parameters of the `SimulatorPipelineStage` at runtime.
- `NetworkDriver` now exposes the `NetworkSettings` currently in use through the `CurrentSettings` property. These settings are read-only.
- To implement the above functionality, `NetworkSettings` now provides a `AsReadOnly` method that returns a read-only copy of the settings.

## [2.0.0-exp.3] - 2022-07-11

### New features

### Changes

- Updated to Burst 1.7.3.
- Changed: A call to `NetworkDriver.Disconnect` now requires a subsequent call to `NetworkDriver.Update` for the disconnect packet to be effectively sent (Previously `NetworkDriver.FlushSend` was enough).
- Changed: The protocol used to establish connections now supports protocol versioning. This should help keep compatibility for future releases, but unfortunately it's now incompatible with the protocol used in version 1.X.

### Fixes

### Upgrade guide

- For `NetworkDriver.FlushSend` calls that follows a call to `NetworkDriver.Disconnect`, change it to `NetworkDriver.Update`.
- The communication protocol used to establish connections has had a breaking change and is now incompatible with Unity Transport 1.X. Clients and servers will need to be updated at the same time to keep compatibility.

## [2.0.0-exp.2] - 2022-06-07

### New features

- Added a new version of `NetworkDriver.CreatePipeline` that takes a `NativeArray` of `NetworkPipelineStageId` as an argument. The old version taking an array of `Type` objects is still fully supported.

### Changes

- Removed: `NetworkSettings.WithDataStreamParameters` has been deleted. The data stream size (the only parameter this API controlled) is now always dynamically-sized to avoid out-of-memory errors.
- Removed: `NetworkSettings.WithPipelineParameters` has been deleted. Initial sizing of the pipeline buffers is now handled internally.
- Removed: `NetworkPipelineStageCollection` has been deleted. See upgrade guide below for details of how to replace its usages.
- Updated to Collections 2.0.0-pre.32.
- Updated to Burst 1.7.2.
- Removed: `NetworkDriver.LastUpdateTime` has been deleted. This value was an internal detail not meant to be consumed by users, and its time reference cann't be reliably related to typical C# timestamps.

### Fixes

- Removed an error log when receiving messages on a closed DTLS connection (this scenario is common if there were in-flight messages at the moment of disconnection).
- `BeginSend` would not return an error if called on a closed connection before the next `ScheduleUpdate` call.
- Fix broken link in package documentation.
- On iOS, recreate the socket used for communications when coming back from app suspension. This solves an issue where communications would fail after the app was in the background for a few seconds and iOS decided to reclaim its resources.

### Upgrade guide

- Registering custom pipeline stages is now done on a per-`NetworkDriver` basis rather than globally through `NetworkPipelineStageCollection`. Concretely, that means replacing calls to `NetworkPipelineStageCollection.RegisterPipelineStage` with calls to `NetworkDriver.RegisterPipelineStage` for each instance of `NetworkDriver` that will make use of the custom pipeline stage.
- `NetworkPipelineStageId` is now obtained through the static `NetworkPipelineStageId.Get` method, rather than with `NetworkPipelineStageCollection.GetStageId`. Updating only requires replacing calls like `NetworkPipelineStageCollection.GetStageId(typeof(Foo))` with `NetworkPipelineStageId.Get<Foo>()`.
- `NetworkDriver.LocalEndPoint` and `NetworkDriver.RemoteEndPoint` were renamed to `NetworkDriver.GetLocalEndpoint` and `NetworkDriver.RemoteEndpoint`, respectively. This should be updated automatically.
- `INetworkInterface.LocalEndPoint` has been renamed to `INetworkInterface.LocalEndpoint` for consistency with other usages of the term in the API. Since this is an interface property, it must be manually updated (see upgrade guide below).
- Custom implementations of `INetworkInterface` must now implement the `LocalEndpoint` property instead of `LocalEndPoint`. This is purely a change in naming, the behavior should remain the same as before.

## [2.0.0-exp.1] - 2022-04-29

### New features

- Added automatic device reconnection (enabled by default). This feature will attempt to re-establish the connection after some inactivity. This feature is intended to handle IP address changes on mobile devices. The inactivity timeout can be controlled by the new parameter `reconnectionTimeoutMS` in `NetworkConfigParameter`. Setting it to 0 disabled the feature.
- When using the Relay protocol, error messages sent by the Relay server are now properly captured and logged.
- `PacketsQueue` and `PacketProcessor` APIs were added for sending and operating over packets in the `INetworkInterface`.
- A `GetRelayConnectionStatus` method has been added to `NetworkDriver` to query the status of the connection to the Relay server.

### Changes

- Updated to Collections 2.0.0-pre.15
- Updated to Burst 1.7.1.
- Updated to Mathematics 1.2.6.
- Minimal Unity Editor version supported is now 2022.2.0a11.
- Added `NetworkSettings` struct and API for defining network parameters.
- Added `reconnectionTimeoutMS` in `NetworkConfigParameter` to support device reconnection (see above).
- Creating a pipeline with `FragmentationPipelineStage` *after* `ReliableSequencedPipelineStage` is now forbidden (will throw an exception if collections checks are enabled). That order never worked properly to begin with. The reverse order is fully supported and is the recommended way to configure a reliable pipeline with support for large packets.
- If collections checks are enabled, trying to create an IPv6 `NetworkEndPoint` will now throw an exception on consoles that don't support IPv6 (PS4, PS5, Switch).
- Documentation has been moved to the offical multiplayer documentation site.
- The `INetworkInterface.ScheduleSend()` method signature was modified to receive a `SendJobArguments` struct instead of a `NativeQueue`. A `PacketsQueue` parameter is passed in this new struct.
- `sendQueueCapacity` and `receiveQueueCapacity` parameters moved from `BaselibNetworkParameter` to `NetworkConfigParameter`.
- Removed: `BaselibNetworkParameter.maximumPayloadSize` isn't needed anymore as it's handled internally.
- Removed: `INetworkInterface.CreateSendInterface` isn't needed anymore, the send queue is managed internally by the `NetworkDriver`. Operations from the `INetworkInterface` must be done through the `ScheduleSend` and `ScheduleReceive` methods. This removes the need of function pointers which where casing GC allocations on `BeginSend`, `EndSend` and `AbortSend` when burst isn't enabled.
- Added: `SendJobArguments` and `ReceiveJobArguments` structs to pass arguments to the send and receive jobs of the `INetworkInterface`.
- Obsolete: `NetworkDriver` constructor is now obsolete, instead use `NetworkDriver.Create` methods. This improves burst compatibility as generic methods allows to know the INeworkInterface type at compilation time.
- Obsolete: `NetworkPacketReceiver` is now deprecated. Use the `ReceiveJobArguments.ReceiveQueue` and `PacketProcessor` instead.
- `NetworkDriver.LastUpdateTime` is now consistent across different copies of a driver. it's now also set by the job scheduled with `ScheduleUpdate`, so any job scheduled before it won't see the updated value. This also means the value won't be updated right after `ScheduleUpdate` returns (only once its jobs completes).
- An error is now logged if failing to decrypt a DTLS message when using Relay.
- Decreased default Relay keep-alive period to 3 seconds (was 9 seconds). The value can still be configured through the `relayConnectionTimeMS` parameter of `NetworkSettings.WithRelayParameters`.
- `NetworkDriver` now requires that the `INetworkInterface` provided is an unmanaged type. Managed `INetworkInterfaces` are still supported but are required to be wrapped into an unmanaged type: `myInterface.WrapToUnmanaged()`.
- Instantiating a `NetworkDriver` is now only supported through the `NetworkDriver.Create` methods.
- Don't warn when overwriting settings in `NetworkSettings` (for example, when calling the same `WithFooParameters` method twice).
- Added new methods to set security parameters: `NetworkSettings.WithSecureClientParameters` and `NetworkSettings.WithSecureServerParameters`. These replace the existing `WithSecureParameters`.
- `NetworkInterfaceEndPoint` usage replaced with `NetworkEndPoint`.
- Removed: `INetworkInterface.CreateInterfaceEndPoint` and `INetworkInterface.GetGenericEndPoint` removed as interfaces use now `NetworkEndPoint`.
- Renamed `NetworkEndPoint` to `NetworkEndpoint`. This should be automatically updated.

### Fixes

- Fixed: Error message when scheduling an update on an unbound `NetworkDriver` (case 1370584)
- Fixed: Removed boxing in `NetworkDriver` initialization by passing `NetworkSettings` parameter instead of `INetworkParameter[]`
- Fixed: `BeginSend` wouldn't return an error if the required payload size was larger than the supported payload size when close to the MTU
- Fixed: Issue where an overflow of the `ReliableSequencedPipelineStage` sequence numbers would not be handled properly.
- Updated Relay sample to the most recent Relay SDK APIs (would fail to compile with latest packages).
- Fixed client certificate not being passed to UnityTLS on secure connections. This prevented client authentication from properly working.
- Fixed: Reliable pipeline drop statistics inaccurate.

### Upgrade guide

- `INetworkPipelineStage` and `INetworkInterface` initialization methods now receive a `NetworkSettings` parameter instead of `INetworkParameter[]`.
- `SimulatorPipelineStageInSend` is no longer required and can be safely removed from your pipeline construction. To replace it, `SimulatorPipelineStage` now supports handling both sending and receiving via `ApplyMode.AllPackets`.
- On fragmented and reliable pipelines, sending a large packet when the reliable window was almost full can result in the packet being lost.
- Revert decrease of MTU to 1384 on Xbox platforms (now back at 1400). It would cause issues for cross-platform communications.
- For custom implementation of the `INetworkInterface`: Remove the `CreateSendInterface` and update the `ScheduleSend` and `ScheduleReceive` signature; to iterate over the send/receive queue use the `PacketsQueue[]` operator.
- Move the definition of the `sendQueueCapacity` and `receiveQueueCapacity` parameters from the `WithBaselibNetworkParameters()` to the `WithNetworkConfigParameters()`.
- Update all `new NetworkDriver()` usages to `NetworkDriver.Create()`.
- For custom implementations of `INetworkInterface` that are managed types, use the `INetworkInterface.WrapToUnmanaged()` configuring the `NetworkDriver`.
- For custom implementations of `INetworkInterface`: Remove `CreateInterfaceEndPoint` and `GetGenericEndPoint` implementations and update `NetworkInterfaceEndPoint` usages to `NetworkEndPoint`.
