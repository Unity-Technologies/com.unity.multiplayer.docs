---
title: Unity Transport 1.0.0+
id: transport-1-0-0
---

The [Unity Transport](https://docs-multiplayer.unity3d.com/transport/1.0.0/about/) `com.unity.transport` package respository adds multiplayer and network features to your project. See the following changelog for new features, updates, fixes, and upgrade information.

## [1.4.0] - 2023-06-28

### New features

* Added a new `GetUnsafeReadOnlyPtr` method to `DataStreamReader`. This is meant as an escape hatch for use cases that require passing stream readers outside of a job (this not possible with `DataStreamReader` directly since the safety system will not allow it). As the name implies, this throws away many safety guarantees and is thus not recommended to use unless absolutely required.

### Changes

* `NetworkDriver.GetRelayConnectionStatus` will now return the new enum value `RelayConnectionStatus.NotUsingRelay` when called on a `NetworkDriver` that has not been configured to use Unity Relay. The previous behavior was to throw an exception.
* It is now possible to configure the maximum message size that the transport will send through a new `maxMessageSize` parameter in `NetworkSettings.WithNetworkConfigParameters`. This is useful for environments where network equipment mishandles larger packets (like some mobile networks or VPNs). The value excludes IP and UDP headers, but includes headers added by the transport itself (e.g. reliability headers). The default value is 1400. Note that it is recommended that both client and server be configured to use the same value.

## [1.3.4] - 2023-04-27

### Fixes

- Fixed an issue where the reliable pipeline stage could end up writing past the end of its internal buffer and thrashing the buffers of other connections. This could result in packet corruption, but would most likely result in erroneous -7 (NetworkDriverParallelForErr) errors being reported when calling EndSend.
- Fixed an issue where upon returning -7 (NetworkDriverParallelForErr), EndSend would leak the send handle. Over time, this would result in less send handles being available, resulting in more -5 (NetworkSendQueueFull) errors.
- If nothing is received from a Unity Relay server for a while, the transport will now attempt to rebind to it. This should improve the accuracy of GetRelayConnectionStatus in scenarios where the Relay allocation times out while communications with the server are out.

## [1.3.3] - 2023-03-17

### Fixes

- Fixed an issue where calling ScheduleFlushSend before the socket was bound would still result in socket system calls being made, resulting in errors being logged.

## [1.3.2] - 2023-03-09

### Fixes

- Fixed issue where UWP Xbox builds were crashing because the split buffer fix was not including UWP defines.
- Fixed an issue where IPCNetworkInterface would perform useless work for each packet received.
- Fixed an issue where ReliableSequencedPipelineStage could end up duplicating packets when sending reliable packets while the send queue is full.

## [1.3.1] - 2022-12-09

### Changes

- It is now possible to set a window size of up to 64 for ReliableSequencedPipelineStage (use NetworkSettings.WithReliableStageParameters to modify the value). Doing so increases the packet header size by 4 bytes though, so the default value remains at 32.

### Fixes
- Fixed an issue where if one end of a reliable pipeline stopped sending any traffic and its latest ACK message was lost, then the other end would stall.
- Fixed a crash when using DTLS if an update was delayed for long enough that both the disconnection and heartbeat timeouts expire.

## [1.3.0] - 2022-09-27

### New features

* Added a way to obtain `RelayAllocationId`, `RelayConnectionData`, and `RelayHMACKey` structures from byte arrays using the static `FromByteArray` method.
* Added a new constructor for `RelayServerData` that is now provided with argument types that better match those available in the models returned by the [Relay SDK](https://docs.unity.com/relay/SDK/sdk.html). **Note**: We also updated the "RelayPing" sample to use the new constructor.
* Added new constructors for `RelayServerData` that are provided with argument types that better match those available in the models returned by the [Relay SDK](https://docs.unity.com/relay/SDK/sdk.html). **Note**: We also updated the "RelayPing" sample to use the new constructor.
* Updated `NetworkSettings` to include a `IsCreated` property that can be used to check if it's been disposed of or not.
* Added new versions of `NetworkSettings.WithSecureClientParameters` and `NetworkSettins.WithSecureServerParameters`. These new versions take strings as parameters instead of references to fixed strings. The older versions are still available and fully supported.
* Added a new version of `NetworkSettings.WithSecureClientParameters` that only takes the server name as a parameter. You can use this when the server uses certificates from a recognized CA (certificate authority).

### Changes

* Added a warning that triggers if binding to a port where another application is listening. The binding operation still succeeds in that scenario, but this will fail in Unity Transport 2.0 (which disables address reuse on the sockets used by the default interface).
* Deprecated the constructor for `RelayServerData` that was taking strings for the allocation ID, connection data, and key. Use the new constructor (see above) or the existing lower-level constructor instead.
* Deprecated the `RelayServerData.ComputeNewNonce` method. You can provide a custom nonce using the "low level" constructor of `RelayServerData`. The new constructor selects a new nonce automatically.
* Added the option to call `Connect` without an endpoint if you’re using [Relay](https://docs.unity.com/relay) (the endpoint would be ignored anyway). This extension to `NetworkDriver` is provided in the `Unity.Networking.Transport.Relay` namespace.

### Fixes

* Fixed a possible stack overflow error that occurs if the `receive` or `send` queue parameters are configured with large values (>15,000).
* Prevented an issue where a warning about having too many pipeline updates would be spammed after a connection was closed.
* Fixed an issue where a duplicated reliable packet wouldn't be processed correctly, which can possibly lead to the entire reliable pipeline stage stalling (not being able to send new packets).
* Fixed an issue where pipeline updates would be run too many times, which would waste CPU and can lead to the warning about having too many pipeline updates being erroneously logged.
* Fixed issues with `ReliableSequencePipelineStage` that would, in rare circumstances, lead to failure to deliver a reliable packet.

## [1.2.0] - 2022-08-16

### Fixes

* Fixed a lag issue with iOS when switching app from being in background to resuming use.

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