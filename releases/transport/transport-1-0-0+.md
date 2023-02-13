---
title: Unity Transport 1.0.0+
id: transport-1-0-0
---

The [Unity Transport](../../transport/current/about) `com.unity.transport` package respository adds multiplayer and network features to your project. See the following changelog for new features, updates, fixes, and upgrade information.

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