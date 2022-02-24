---
title: Unity Transport
id: transport-changelog
---

The [Unity Transport](../../transport/0.8.0/introduction) `com.unity.transport` package respository adds multiplayer and network features to your project. See the following changelog for new features, updates, fixes, and upgrade information.

## [Unreleased]

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

### New features
### Changes
### Fixes
* Fixed: Updated collection types in `SecureNetworkProtocol.cs`
* Fixed: Fixed race condition between UTP and Relay disconnects
* Fixed: Relay not being able to use the fragmentation pipelinestage
### Upgrade guide

## [1.0.0-pre.3] - 2021-09-01
### New features
* Removed references of TransportSamples from readme as they are not currently included in the package
* Stripping out un-needed files from the package

### Changes
### Fixes
### Upgrade guide

## [1.0.0-pre.2] - 2021-08-23
### New features
* Upgraded collections to 1.0.0-pre.5
* Added support for Secure Protocol while using Unity Relay

### Changes
### Fixes
### Upgrade guide

## [1.0.0-pre.1] - 2021-07-29
### New features
* Moving into pre-release
* Added Secure Protocol support (TLS/DTLS) to allow for encrypted and secure connections.
* Unity Transport package now supports connecting to the Unity Relay Service. See [Unity Relay](https://unity.com/products/relay) for more information.
* Upgraded burst to 1.5.5

### Changes
### Fixes
### Upgrade guide

## [0.9.0] - 2021-05-10
### New features
* Added support for long serialization and delta compression.
* Upgraded collections to 1.0.0-pre.1
* Added a new network interface for WebSockets, can be used in both native and web builds.

### Changes
* Minimum required Unity version has changed to 2020.3.0f1.
* The transport package can be compiled with the tiny c# profile and for WebGL, but WebGL builds only support IPC - not sockets.

### Fixes
### Upgrade guide

## [0.8.0] - 2021-03-23
### New features
* Added overloads of `PopEvent` and `PopEventForConnection` which return the pipeline used as an out parameter.

### Changes

### Fixes
* Fixed some compatility issues with tiny.
* Fixed a crash when sending messages slightly less than one MTU using the fragmentation pipeline.
* Fixed a bug causing `NetworkDriver.RemoteEndPoint` to return an invalid value when using the default network interface.

### Upgrade guide

## [0.7.0] - 2021-02-05
### New features
* Added `DataStreamWriter.WriteRawbits` and `DataStreamWriter.ReadRawBits` for reading and writing raw bits from a data stream.

### Changes
* Optimized the `NetworkCompressionModel` to find buckets in constant time.
* Changed the error behavior of `DataStreamReader` to be consistent between the editor and players.

### Fixes
* Fixed a crash when receiving a packet with an invalid pipeline identifier.

### Upgrade guide

## [0.6.0] - 2020-11-26
### New features
* An error handling pass has been made and `Error.StatusCode` have been added to indicate more specific errors.
* `Error.DisconnectReason` has been added, so when NetworkDriver.PopEvent returns a `NetworkEvent.Type.Disconnect` the reader returned contains 1 byte of data indicating the reason.

### Changes
* The function signature for NetworkDriver.BeginSend has changed. It now returns an `int` value indicating if the function succeeded or not and the DataStreamWriter now instead is returned as a `out` parameter.
* The function signature for INetworkInterface.Initialize has changed. It now requires you to return an `int` value indicating if the function succeeded or not.
* The function signature for INetworkInterface.CreateInterfaceEndPoint has changed. It now requires you to return an `int` value indicating if the function succeeded or not, and NetworkInterfaceEndPoint is now returned as a `out` parameter.

### Fixes
* Fixed a potential crash when receiving a malformated packet.
* Fixed an issue where the DataStream could sometimes fail writing packet uints before the buffer was full.

### Upgrade guide
* `NetworkDriver.BeginSend` now returns an `int` indicating a `Error.StatusCode`, and the `DataStreamWriter` is passed as an `out` parameter.


## [0.5.0] - 2020-10-01
### New features
### Changes
### Fixes
* Fixed display of ipv6 addresses as strings

### Upgrade guide

## [0.4.1] - 2020-09-10
### New features
* Added `NetworkDriver.GetEventQueueSizeForConnection` which allows you to check how many pending events a connection has.

### Changes
### Fixes
* Fixed a compatibility isue with DOTS Runtime.

### Upgrade guide

## [0.4.0-preview.3] - 2020-08-21
### New features
* Added a new fragmentation pipeline which allows you to send messages larger than one MTU. If the `FragmentationPipelineStage` is part of the pipeline you are trying to send with the `NetworkDriver` will allow a `requiredPayloadSize` larger than one MTU to be specified and split the message into multiple packages.

### Changes
* The methods to read and write strings in the `DataStreamReader`/`DataStreamWriter` have been changed to use `FixedString<N>` instead of `NativeString<N>`. The name of the methods have also changed from `ReadString` to `ReadFixedString64` - and similar changes for write and the packed version of the calls. The calls support `FixedString32`, `FixedString64`, `FixedString128`, `FixedString512` and `FixedString4096`.
* Minimum required Unity version has changed to 2020.1.2.

### Fixes
### Upgrade guide
The data stream methods for reading and writing strings have changed, they now take `FixedString64` instead of `NativeString64` and the names have changed as follows:

* `DataStreamReader.ReadString` -> `DataStreamReader.ReadFixedString64`
* `DataStreamReader.ReadPackedStringDelta` -> `DataStreamReader.ReadPackedFixedString64Delta`
* `DataStreamWriter.WriteString` -> `DataStreamWriter.WriteFixedString64`
* `DataStreamWriter.WritePackedStringDelta` -> `DataStreamWriter.WritePackedFixedString64Delta`

The transport now requires Unity 2020.1.2.

## [0.3.1-preview.4] - 2020-06-05
### New features
### Changes
* Added a new `requiredPayloadSize` parameter to `BeginSend`. The required size cannot be larger than `NetworkParameterConstants.MTU`.
* Added errorcode parameter to a `network_set_nonblocking`, `network_set_send_buffer_size` and `network_set_receive_buffer_size` in `NativeBindings`.
* Additional APIs added to `NativeBindings`: `network_set_blocking`, `network_get_send_buffer_size`, `network_get_receive_buffer_size`, `network_set_receive_timeout`, `network_set_send_timeout`.
* Implemented `NetworkEndPoint.AddressAsString`.

### Fixes
* Fixed an issue in the reliable pipeline which would cause it to not recover if one end did not receive packages for a while.
* Fixed `NetworkInterfaceEndPoint` and `NetworkEndPoint` `GetHashCode` implementation.
* Fixed invalid use of strings when specifying the size of socket buffers in the native bindings.

### Upgrade guide

## [0.3.0-preview.6] - 2020-02-24
### New features
### Changes
* Pipelines are now registered by calling `NetworkPipelineStageCollection.RegisterPipelineStage` before creating a `NetworkDriver`. The built-in pipelines do not require explicit registration. The interface for implementing pipelines has been changed to support this.
* NetworkDriver is no longer a generic type. You pass it an interface when creating the `NetworkDriver`, which means you can switch between backends without modifying all usage of the driver. There is a new `NetworkDriver.Create` which creates a driver with the default `NetworkInterface`. It is also possible to create a `new NetworkDriver` by passing a `NetworkInterface` instance as the first argument.
* `NetworkDriver.Send` is replaced by `BeginSend` and `EndSend`. This allows us to do less data copying when sending messages. The interface for implementing new network interfaces has been changed to support this.
* `DataStreamReader` and `DataStreamWriter` no longer owns any memory. They are just reading/writing the data of a `NativeArray<byte>`.
* `DataStreamWriter` has explicit types for all Write methods.
* `DataStreamReader.Context` has been removed.
* Error handling for `DataStreamWriter` has been improved, on failure it returns false and sets `DataStreamWriter.HasFailedWrites` to true. `DataStreamReader` returns a default value and sets `DataStreamReader.HasFailedReads` to true. `DataStreamReader` will throw an exception instead of returning a default value in the editor.
* IPCManager is no longer public, it is still possible to create a `NetworkDriver` with a `IPCNetworkInterface`.
* Added `NetworkDriver.ScheduleFlushSend` which must be called to guarantee that messages are send before next call to `NetworkDriver.ScheduleUpdate`.
* Added `NetworkDriver.LastUpdateTime` to get the update time the `NetworkDriver` used for the most recent update.
* Removed the IPC address family, use a IPv4 localhost address instead.

### Fixes
* Fixed a memory overflow in the reliability pipeline.
* Made the soaker report locale independent.

### Upgrade guide
Creation and type of `NetworkDriver` has changed, use `NetworkDriver.Create` or pass an instance of a `NetworkInterface` to the `NetworkDriver` constructor.

`NetworkDriver.Send` has been replaced by a pair of `NetworkDriver.BeginSend` and `NetworkDriver.EndSend`. Calling `BeginSend` will return a `DataStreamWriter` to which you write the data. The `DataStreamWriter` is then passed to `EndSend`.

All write calls in `DataStreamWriter` need an explicit type, for example `Write(0)` should be replaced by `WriteInt(0)`.

`DataStreamWriter` no longer shares current position between copies, if you call a method which writes you must pass it by ref for the modifications to apply.

`DataStreamWriter` no longer returns a DeferedWriter, you need to take a copy of the writer at the point you want to make modifications and use the copy to overwrite data later.

`DataStreamWriter` is no longer disposable. If you use the allocating constructor you need to use `Allocator.Temp`, if you pass a `NativeArray<byte>` to the constructor the `NativeArray` owns the memory.

`DataStreamReader.Context` no longer exists, you need to pass the `DataStreamReader` itself by ref if you read in a different function.

The interface for network pipelines has been changed.

The interface for network interfaces has been changed.

## [0.2.3-preview.0] - 2019-12-12
### New features
### Changes
* Added reading and write methods for NativeString64 to DataStream.

### Fixes
### Upgrade guide

## [0.2.2-preview.2] - 2019-12-05
### New features
### Changes
* Added a stress test for parallel sending of data.
* Upgraded collections to 0.3.0.

### Fixes
* Fixed a race condition in IPCNetworkInterface.
* Changed NetworkEventQueue to use UnsafeList to get some type safety.
* Fixed an out-of-bounds access in the reliable sequenced pipeline.
* Fixed spelling and broken links in the documentation.

### Upgrade guide

## [0.2.1-preview.1] - 2019-11-28
### New features
### Changes
### Fixes
* Added missing bindings for Linux and Android.

### Upgrade guide

## [0.2.0-preview.4] - 2019-11-26
### New features
### Changes
* Added support for unquantized floats to `DataStream` class.
* Added `NetworkConfigParameter.maxFrameTimeMS` so you to allow longer frame times when debugging to prevent disconnections due to timeout.
* Allow "1.1.1.1:1234" strings when parsing the IP string in the NetworkEndPoint class, it will use the port part when it's present.
* Reliable pipeline now doesn't require parameters passed in (uses default window size of 32)
* Added Read/Write of ulong to `DataStream`.
* Made it possible to get connection state from the parallel NetworkDriver.
* Added `LengthInBits` to the `DataStreamWriter`.

### Fixes
* Do not push data events to disconnected connections. Fixes an error about resetting the queue with pending messages.
* Made the endian checks in `DataStream` compatible with latest version of burst.

### Upgrade guide

## [0.1.2-preview.1] - 2019-07-17
### New features
* Added a new *Ping-Multiplay* sample based on the *Ping* sample.
    * Created to be the main sample for demonstrating Multiplay compatibility and best practices (SQP usage, IP binding, etc.).
    * Contains both client and server code. Additional details in readme in `/Assets/Samples/Ping-Multiplay/`.
* **DedicatedServerConfig**: Added arguments for `-fps` and `-timeout`.
* **NetworkEndPoint**: Added a `TryParse()` method which returns false if parsing fails
    * Note: The `Parse()` method returns a default IP / Endpoint if parsing fails, but a method that could report failure was needed for the Multiplay sample.
* **CommandLine**:
    * Added a `HasArgument()` method which returns true if an argument is present.
    * Added a `PrintArgsToLog()` method which is a simple way to print launch args to logs.
    * Added a `TryUpdateVariableWithArgValue()` method which updates a ref var only if an arg was found and successfully parsed.

### Changes
* Deleted existing SQP code and added reference to SQP Package (now in staging).
* Removed SQP server usage from basic *Ping* sample.
    * Note: The SQP server was only needed for Multiplay compatibility, so the addition of *Ping-Multiplay* allowed us to remove SQP from *Ping*.

### Fixes
* **DedicatedServerConfig**: Vsync is now disabled programmatically if requesting an FPS different from the current screen refresh rate.

### Upgrade guide

## [0.1.1-preview.1] - 2019-06-05
### New features
* Moved MatchMaking to a package and supporting code to a separate folder.

### Fixes
* Fixed an issue with the reliable pipeline not resending when completely idle.

### Upgrade guide

## [0.1.0-preview.1] - 2019-04-16
### New features
* Added network pipelines to enable processing of outgoing and incomming packets. The available pipeline stages are `ReliableSequencedPipelineStage` for reliable UDP messages and `SimulatorPipelineStage` for emulating network conditions such as high latency and packet loss. See [the pipeline documentation](Documentation~/pipelines-usage.md) for more information.
* Added reading and writing of packed signed and unsigned integers to `DataStream`. These new methods use huffman encoding to reduce the size of transfered data for small numbers.

### Changes
* Enable Burst compilation for most jobs.
* Made it possible to get the remote endpoint for a connection.
* Replacing EndPoint parsing with custom code to avoid having a dependency on `System.Net`.
* Change the ping sample command-line parameters for server to `-port` and `-query_port`.
* For matchmaking, use an Assignment object containing the `ConnectionString`, the `Roster`, and an `AssignmentError` string instead of just the `ConnectionString`.

### Fixes
* Fixed an issue with building iOS on Windows.
* Fixed inconsistent error handling between platforms when the network buffer is full.

### Upgrade guide
Unity 2019.1 is now required.

`BasicNetworkDriver` has been renamed to `GenericNetworkDriver` and a new `UdpNetworkDriver` helper class is also available.

`System.Net` EndPoints can no longer be used as addresses, use the new NetworkEndpoint struct instead.