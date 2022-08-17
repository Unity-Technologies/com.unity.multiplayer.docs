---
title: Unity Transport 1.0.0+
id: transport-1-0-0
---

The [Unity Transport](../../transport/current/about) `com.unity.transport` package respository adds multiplayer and network features to your project. See the following changelog for new features, updates, fixes, and upgrade information.

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