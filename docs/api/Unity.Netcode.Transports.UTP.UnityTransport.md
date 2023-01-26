---
id: Unity.Netcode.Transports.UTP.UnityTransport
title: Unity.Netcode.Transports.UTP.UnityTransport
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:38:42 pm
---

<div class="markdown level0 summary">

The Netcode for GameObjects NetworkTransport for UnityTransport. Note: This is highly recommended to use over UNet.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

## Implements

<div>

INetworkStreamDriverConstructor

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

NetworkTransport.IsSupported

</div>

<div>

NetworkTransport.OnTransportEvent

</div>

<div>

NetworkTransport.InvokeOnTransportEvent(NetworkEvent, UInt64,

ArraySegment\<Byte\>, Single)

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class UnityTransport : NetworkTransport, INetworkStreamDriverConstructor
```

## Fields

### ConnectionData

<div class="markdown level1 summary">

The connection (address) data for this UnityTransport instance. This is

where you can change IP Address, Port, or server's listen address.

UnityTransport.ConnectionAddressData

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public UnityTransport.ConnectionAddressData ConnectionData
```

#### Field Value

| Type                                 | Description |
|--------------------------------------|-------------|
| UnityTransport.ConnectionAddressData |             |

### DebugSimulator

<div class="markdown level1 summary">

Can be used to simulate poor network conditions such as:

* packet delay/latency
* packet jitter (variances in latency, see:

  <https://en.wikipedia.org/wiki/Jitter)>

* packet drop rate (packet loss)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public UnityTransport.SimulatorParameters DebugSimulator
```

#### Field Value

| Type                               | Description |
|------------------------------------|-------------|
| UnityTransport.SimulatorParameters |             |

### InitialMaxPacketQueueSize

<div class="markdown level1 summary">

The default maximum (receive) packet queue size

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int InitialMaxPacketQueueSize = 128
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### InitialMaxPayloadSize

<div class="markdown level1 summary">

The default maximum payload size

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int InitialMaxPayloadSize = 6144
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### InitialMaxSendQueueSize

<div class="markdown level1 summary">

The default maximum send queue size

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[Obsolete("MaxSendQueueSize is now determined dynamically (can still be set programmatically using the MaxSendQueueSize property). This initial value is not used anymore.", false)]
public const int InitialMaxSendQueueSize = 98304
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### s_DriverConstructor

<div class="markdown level1 summary">

The global INetworkStreamDriverConstructor implementation

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static INetworkStreamDriverConstructor s_DriverConstructor
```

#### Field Value

| Type                            | Description |
|---------------------------------|-------------|
| INetworkStreamDriverConstructor |             |

## Properties

### ConnectTimeoutMS

<div class="markdown level1 summary">

Timeout in milliseconds indicating how long we will wait until we send a

new connection attempt.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ConnectTimeoutMS { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### DisconnectTimeoutMS

<div class="markdown level1 summary">

Inactivity timeout after which a connection will be disconnected.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int DisconnectTimeoutMS { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The connection needs to receive data from the connected endpoint within

this timeout. Note that with heartbeats enabled, simply not sending any

data will not be enough to trigger this timeout (since heartbeats count

as connection events).

</div>

### DriverConstructor

<div class="markdown level1 summary">

Returns either the global INetworkStreamDriverConstructor implementation

or the current UnityTransport instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public INetworkStreamDriverConstructor DriverConstructor { get; }
```

#### Property Value

| Type                            | Description |
|---------------------------------|-------------|
| INetworkStreamDriverConstructor |             |

### HeartbeatTimeoutMS

<div class="markdown level1 summary">

Timeout in milliseconds after which a heartbeat is sent if there is no

activity.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int HeartbeatTimeoutMS { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxConnectAttempts

<div class="markdown level1 summary">

The maximum amount of connection attempts we will try before

disconnecting.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxConnectAttempts { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxPacketQueueSize

<div class="markdown level1 summary">

The maximum amount of packets that can be in the internal send/receive

queues.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxPacketQueueSize { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

Basically this is how many packets can be sent/received in a single

update/frame.

</div>

### MaxPayloadSize

<div class="markdown level1 summary">

The maximum size of an unreliable payload that can be handled by the

transport.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxPayloadSize { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxSendQueueSize

<div class="markdown level1 summary">

The maximum size in bytes of the transport send queue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxSendQueueSize { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The send queue accumulates messages for batching and stores messages

when other internal send queues are full. Note that there should not be

any need to set this value manually since the send queue size is

dynamically sized based on need.

This value should only be set if you have particular requirements (e.g.

if you want to limit the memory usage of the send queues). Note however

that setting this value too low can easily lead to disconnections under

heavy traffic.

</div>

### Protocol

<div class="markdown level1 summary">

The current ProtocolType used by the transport

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public UnityTransport.ProtocolType Protocol { get; }
```

#### Property Value

| Type                        | Description |
|-----------------------------|-------------|
| UnityTransport.ProtocolType |             |

### ServerClientId

<div class="markdown level1 summary">

The client id used to represent the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override ulong ServerClientId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### Overrides

<div>

NetworkTransport.ServerClientId

</div>

## Methods

### CreateDriver(UnityTransport, Out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)

<div class="markdown level1 summary">

Creates the internal NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableFragmentedPipeline, out NetworkPipeline unreliableSequencedFragmentedPipeline, out NetworkPipeline reliableSequencedPipeline)
```

#### Parameters

| Type            | Name                                  | Description                                       |
|-----------------|---------------------------------------|---------------------------------------------------|
| UnityTransport  | transport                             | The owner transport                               |
| NetworkDriver   | driver                                | The driver                                        |
| NetworkPipeline | unreliableFragmentedPipeline          | The UnreliableFragmented NetworkPipeline          |
| NetworkPipeline | unreliableSequencedFragmentedPipeline | The UnreliableSequencedFragmented NetworkPipeline |
| NetworkPipeline | reliableSequencedPipeline             | The ReliableSequenced NetworkPipeline             |

### DisconnectLocalClient()

<div class="markdown level1 summary">

Disconnects the local client from the remote

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void DisconnectLocalClient()
```

#### Overrides

<div>

NetworkTransport.DisconnectLocalClient()

</div>

### DisconnectRemoteClient(UInt64)

<div class="markdown level1 summary">

Disconnects a remote client from the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void DisconnectRemoteClient(ulong clientId)
```

#### Parameters

| Type          | Name     | Description              |
|---------------|----------|--------------------------|
| System.UInt64 | clientId | The client to disconnect |

#### Overrides

<div>

NetworkTransport.DisconnectRemoteClient(UInt64)

</div>

### GetCurrentRtt(UInt64)

<div class="markdown level1 summary">

Gets the current RTT for a specific client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override ulong GetCurrentRtt(ulong clientId)
```

#### Parameters

| Type          | Name     | Description           |
|---------------|----------|-----------------------|
| System.UInt64 | clientId | The client RTT to get |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 | The RTT     |

#### Overrides

<div>

NetworkTransport.GetCurrentRtt(UInt64)

</div>

### Initialize(NetworkManager)

<div class="markdown level1 summary">

Initializes the transport

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Initialize(NetworkManager networkManager = null)
```

#### Parameters

| Type           | Name           | Description                                                |
|----------------|----------------|------------------------------------------------------------|
| NetworkManager | networkManager | The NetworkManager that initialized and owns the transport |

#### Overrides

<div>

NetworkTransport.Initialize(NetworkManager)

</div>

### PollEvent(out UInt64, Out ArraySegment\<Byte\>, out Single)

<div class="markdown level1 summary">

Polls for incoming events, with an extra output parameter to report the

precise time the event was received.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override NetworkEvent PollEvent(out ulong clientId, out ArraySegment<byte> payload, out float receiveTime)
```

#### Parameters

| Type                               | Name        | Description                                                                |
|------------------------------------|-------------|----------------------------------------------------------------------------|
| System.UInt64                      | clientId    | The clientId this event is for                                             |
| System.ArraySegment\<System.Byte\> | payload     | The incoming data payload                                                  |
| System.Single                      | receiveTime | The time the event was received, as reported by Time.realtimeSinceStartup. |

#### Returns

| Type         | Description            |
|--------------|------------------------|
| NetworkEvent | Returns the event type |

#### Overrides

<div>

NetworkTransport.PollEvent(out UInt64, out ArraySegment\<Byte\>, out

Single)

</div>

### Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)

<div class="markdown level1 summary">

Send a payload to the specified clientId, data and networkDelivery.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Send(ulong clientId, ArraySegment<byte> payload, NetworkDelivery networkDelivery)
```

#### Parameters

| Type                               | Name            | Description                               |
|------------------------------------|-----------------|-------------------------------------------|
| System.UInt64                      | clientId        | The clientId to send to                   |
| System.ArraySegment\<System.Byte\> | payload         | The data to send                          |
| NetworkDelivery                    | networkDelivery | The delivery type (QoS) to send data with |

#### Overrides

<div>

NetworkTransport.Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)

</div>

### SetClientRelayData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

Set the relay server data for the host.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetClientRelayData(string ipAddress, ushort port, byte[] allocationId, byte[] key, byte[] connectionData, byte[] hostConnectionData, bool isSecure = false)
```

#### Parameters

| Type            | Name               | Description                                   |
|-----------------|--------------------|-----------------------------------------------|
| System.String   | ipAddress          | IP address or hostname of the relay server.   |
| System.UInt16   | port               | UDP port of the relay server.                 |
| System.Byte\[\] | allocationId       | Allocation ID as a byte array.                |
| System.Byte\[\] | key                | Allocation key as a byte array.               |
| System.Byte\[\] | connectionData     | Connection data as a byte array.              |
| System.Byte\[\] | hostConnectionData | Host's connection data as a byte array.       |
| System.Boolean  | isSecure           | Whether the connection is secure (uses DTLS). |

### SetClientSecrets(String, String)

<div class="markdown level1 summary">

Set the client parameters for encryption.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetClientSecrets(string serverCommonName, string caCertificate = null)
```

#### Parameters

| Type          | Name             | Description                                                |
|---------------|------------------|------------------------------------------------------------|
| System.String | serverCommonName | Common name of the server (typically hostname).            |
| System.String | caCertificate    | CA certificate used to validate the server's authenticity. |

#### Remarks

<div class="markdown level1 remarks">

If the CA certificate is not provided, validation will be done against

the OS/browser certificate store. This is what you'd want if using

certificates from a known provider. For self-signed certificates, the CA

certificate needs to be provided.

</div>

### SetConnectionData(String, UInt16, String)

<div class="markdown level1 summary">

Sets IP and Port information. This will be ignored if using the Unity

Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],

Byte\[\], Byte\[\], Byte\[\], Boolean)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetConnectionData(string ipv4Address, ushort port, string listenAddress = null)
```

#### Parameters

| Type          | Name          | Description                                                      |
|---------------|---------------|------------------------------------------------------------------|
| System.String | ipv4Address   | The remote IP address (despite the name, can be an IPv6 address) |
| System.UInt16 | port          | The remote port                                                  |
| System.String | listenAddress | The local listen address                                         |

### SetConnectionData(Networking.Transport.NetworkEndPoint, Networking.Transport.NetworkEndPoint)

<div class="markdown level1 summary">

Sets IP and Port information. This will be ignored if using the Unity

Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],

Byte\[\], Byte\[\], Byte\[\], Boolean)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetConnectionData(Networking.Transport.NetworkEndPoint endPoint, Networking.Transport.NetworkEndPoint listenEndPoint = null)
```

#### Parameters

| Type                                       | Name           | Description               |
|--------------------------------------------|----------------|---------------------------|
| Unity.Networking.Transport.NetworkEndPoint | endPoint       | The remote end point      |
| Unity.Networking.Transport.NetworkEndPoint | listenEndPoint | The local listen endpoint |

### SetDebugSimulatorParameters(Int32, Int32, Int32)

<div class="markdown level1 summary">

Set the parameters for the debug simulator.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetDebugSimulatorParameters(int packetDelay, int packetJitter, int dropRate)
```

#### Parameters

| Type         | Name         | Description                    |
|--------------|--------------|--------------------------------|
| System.Int32 | packetDelay  | Packet delay in milliseconds.  |
| System.Int32 | packetJitter | Packet jitter in milliseconds. |
| System.Int32 | dropRate     | Packet drop percentage.        |

### SetHostRelayData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

Set the relay server data for the host.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetHostRelayData(string ipAddress, ushort port, byte[] allocationId, byte[] key, byte[] connectionData, bool isSecure = false)
```

#### Parameters

| Type            | Name           | Description                                   |
|-----------------|----------------|-----------------------------------------------|
| System.String   | ipAddress      | IP address or hostname of the relay server.   |
| System.UInt16   | port           | UDP port of the relay server.                 |
| System.Byte\[\] | allocationId   | Allocation ID as a byte array.                |
| System.Byte\[\] | key            | Allocation key as a byte array.               |
| System.Byte\[\] | connectionData | Connection data as a byte array.              |
| System.Boolean  | isSecure       | Whether the connection is secure (uses DTLS). |

### SetRelayServerData(RelayServerData)

<div class="markdown level1 summary">

Set the relay server data (using the lower-level Unity Transport data

structure).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetRelayServerData(RelayServerData serverData)
```

#### Parameters

| Type            | Name       | Description                       |
|-----------------|------------|-----------------------------------|
| RelayServerData | serverData | Data for the Relay server to use. |

### SetRelayServerData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

Set the relay server data for the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetRelayServerData(string ipv4Address, ushort port, byte[] allocationIdBytes, byte[] keyBytes, byte[] connectionDataBytes, byte[] hostConnectionDataBytes = null, bool isSecure = false)
```

#### Parameters

| Type            | Name                    | Description                                   |
|-----------------|-------------------------|-----------------------------------------------|
| System.String   | ipv4Address             | IP address or hostname of the relay server.   |
| System.UInt16   | port                    | UDP port of the relay server.                 |
| System.Byte\[\] | allocationIdBytes       | Allocation ID as a byte array.                |
| System.Byte\[\] | keyBytes                | Allocation key as a byte array.               |
| System.Byte\[\] | connectionDataBytes     | Connection data as a byte array.              |
| System.Byte\[\] | hostConnectionDataBytes | The HostConnectionData as a byte array.       |
| System.Boolean  | isSecure                | Whether the connection is secure (uses DTLS). |

### SetServerSecrets(String, String)

<div class="markdown level1 summary">

Set the server parameters for encryption.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetServerSecrets(string serverCertificate, string serverPrivateKey)
```

#### Parameters

| Type          | Name              | Description                                     |
|---------------|-------------------|-------------------------------------------------|
| System.String | serverCertificate | Public certificate for the server (PEM format). |
| System.String | serverPrivateKey  | Private key for the server (PEM format).        |

### Shutdown()

<div class="markdown level1 summary">

Shuts down the transport

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Shutdown()
```

#### Overrides

<div>

NetworkTransport.Shutdown()

</div>

### StartClient()

<div class="markdown level1 summary">

Connects client to the server Note: When this method returns false it

could mean:

* You are trying to start a client that is already started
* It failed during the initial port binding when attempting to begin to

  connect

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool StartClient()
```

#### Returns

| Type           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| System.Boolean | true if the client was started and false if it failed to start the client |

#### Overrides

<div>

NetworkTransport.StartClient()

</div>

### StartServer()

<div class="markdown level1 summary">

Starts to listening for incoming clients Note: When this method returns

false it could mean:

* You are trying to start a client that is already started
* It failed during the initial port binding when attempting to begin to

  connect

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool StartServer()
```

#### Returns

| Type           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| System.Boolean | true if the server was started and false if it failed to start the server |

#### Overrides

<div>

NetworkTransport.StartServer()

</div>

### Implements

<div>

INetworkStreamDriverConstructor

</div>
