---
id: Unity.Netcode.Transports.UTP.UnityTransport
title: Unity.Netcode.Transports.UTP.UnityTransport
---

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkTransport

</div>

<div class="level2">

UnityTransport

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkStreamDriverConstructor

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

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



##### Syntax

<div class="codewrapper">

``` lang-csharp
public class UnityTransport : NetworkTransport, INetworkStreamDriverConstructor
```

</div>

### Fields

#### ConnectionData

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public UnityTransport.ConnectionAddressData ConnectionData
```

</div>

##### Field Value

| Type                                 | Description |
|--------------------------------------|-------------|
| UnityTransport.ConnectionAddressData |             |

#### DebugSimulator

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public UnityTransport.SimulatorParameters DebugSimulator
```

</div>

##### Field Value

| Type                               | Description |
|------------------------------------|-------------|
| UnityTransport.SimulatorParameters |             |

#### InitialMaxPacketQueueSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int InitialMaxPacketQueueSize = 128
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitialMaxPayloadSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int InitialMaxPayloadSize = 6144
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitialMaxSendQueueSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int InitialMaxSendQueueSize = 98304
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### s_DriverConstructor

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static INetworkStreamDriverConstructor s_DriverConstructor
```

</div>

##### Field Value

| Type                            | Description |
|---------------------------------|-------------|
| INetworkStreamDriverConstructor |             |

### Properties

#### ConnectTimeoutMS

<div class="markdown level1 summary">

Timeout in milliseconds indicating how long we will wait until we send a
new connection attempt.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int ConnectTimeoutMS { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### DisconnectTimeoutMS

<div class="markdown level1 summary">

Inactivity timeout after which a connection will be disconnected.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int DisconnectTimeoutMS { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

The connection needs to receive data from the connected endpoint within
this timeout. Note that with heartbeats enabled, simply not sending any
data will not be enough to trigger this timeout (since heartbeats count
as connection events).

</div>

#### DriverConstructor

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public INetworkStreamDriverConstructor DriverConstructor { get; }
```

</div>

##### Property Value

| Type                            | Description |
|---------------------------------|-------------|
| INetworkStreamDriverConstructor |             |

#### HeartbeatTimeoutMS

<div class="markdown level1 summary">

Timeout in milliseconds after which a heartbeat is sent if there is no
activity.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int HeartbeatTimeoutMS { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxConnectAttempts

<div class="markdown level1 summary">

The maximum amount of connection attempts we will try before
disconnecting.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MaxConnectAttempts { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxPacketQueueSize

<div class="markdown level1 summary">

The maximum amount of packets that can be in the internal send/receive
queues.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MaxPacketQueueSize { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

Basically this is how many packets can be sent/received in a single
update/frame.

</div>

#### MaxPayloadSize

<div class="markdown level1 summary">

The maximum size of a payload that can be handled by the transport.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MaxPayloadSize { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxSendQueueSize

<div class="markdown level1 summary">

The maximum size in bytes of the transport send queue.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MaxSendQueueSize { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

The send queue accumulates messages for batching and stores messages
when other internal send queues are full. If you routinely observe an
error about too many in-flight packets, try increasing this.

</div>

#### Protocol

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public UnityTransport.ProtocolType Protocol { get; }
```

</div>

##### Property Value

| Type                        | Description |
|-----------------------------|-------------|
| UnityTransport.ProtocolType |             |

#### ServerClientId

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override ulong ServerClientId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

##### Overrides

<div>

NetworkTransport.ServerClientId

</div>

### Methods

#### CreateDriver(UnityTransport, out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableFragmentedPipeline, out NetworkPipeline unreliableSequencedFragmentedPipeline, out NetworkPipeline reliableSequencedPipeline)
```

</div>

##### Parameters

| Type            | Name                                  | Description |
|-----------------|---------------------------------------|-------------|
| UnityTransport  | transport                             |             |
| NetworkDriver   | driver                                |             |
| NetworkPipeline | unreliableFragmentedPipeline          |             |
| NetworkPipeline | unreliableSequencedFragmentedPipeline |             |
| NetworkPipeline | reliableSequencedPipeline             |             |

#### DisconnectLocalClient()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void DisconnectLocalClient()
```

</div>

##### Overrides

<div>

NetworkTransport.DisconnectLocalClient()

</div>

#### DisconnectRemoteClient(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void DisconnectRemoteClient(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

##### Overrides

<div>

NetworkTransport.DisconnectRemoteClient(UInt64)

</div>

#### GetCurrentRtt(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override ulong GetCurrentRtt(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

##### Overrides

<div>

NetworkTransport.GetCurrentRtt(UInt64)

</div>

#### Initialize(NetworkManager)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void Initialize(NetworkManager networkManager = null)
```

</div>

##### Parameters

| Type           | Name           | Description |
|----------------|----------------|-------------|
| NetworkManager | networkManager |             |

##### Overrides

<div>

NetworkTransport.Initialize(NetworkManager)

</div>

#### PollEvent(out UInt64, out ArraySegment\<Byte\>, out Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override NetworkEvent PollEvent(out ulong clientId, out ArraySegment<byte> payload, out float receiveTime)
```

</div>

##### Parameters

| Type                               | Name        | Description |
|------------------------------------|-------------|-------------|
| System.UInt64                      | clientId    |             |
| System.ArraySegment\<System.Byte\> | payload     |             |
| System.Single                      | receiveTime |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| NetworkEvent |             |

##### Overrides

<div>

NetworkTransport.PollEvent(out UInt64, out ArraySegment\<Byte\>, out
Single)

</div>

#### Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void Send(ulong clientId, ArraySegment<byte> payload, NetworkDelivery networkDelivery)
```

</div>

##### Parameters

| Type                               | Name            | Description |
|------------------------------------|-----------------|-------------|
| System.UInt64                      | clientId        |             |
| System.ArraySegment\<System.Byte\> | payload         |             |
| NetworkDelivery                    | networkDelivery |             |

##### Overrides

<div>

NetworkTransport.Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)

</div>

#### SetClientRelayData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

Set the relay server data for the host.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetClientRelayData(string ipAddress, ushort port, byte[] allocationId, byte[] key, byte[] connectionData, byte[] hostConnectionData, bool isSecure = false)
```

</div>

##### Parameters

| Type            | Name               | Description                                   |
|-----------------|--------------------|-----------------------------------------------|
| System.String   | ipAddress          | IP address of the relay server.               |
| System.UInt16   | port               | UDP port of the relay server.                 |
| System.Byte\[\] | allocationId       | Allocation ID as a byte array.                |
| System.Byte\[\] | key                | Allocation key as a byte array.               |
| System.Byte\[\] | connectionData     | Connection data as a byte array.              |
| System.Byte\[\] | hostConnectionData | Host's connection data as a byte array.       |
| System.Boolean  | isSecure           | Whether the connection is secure (uses DTLS). |

#### SetConnectionData(NetworkEndPoint, NetworkEndPoint)

<div class="markdown level1 summary">

Sets IP and Port information. This will be ignored if using the Unity
Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],
Byte\[\], Byte\[\], Byte\[\], Boolean)

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetConnectionData(NetworkEndPoint endPoint, NetworkEndPoint listenEndPoint = null)
```

</div>

##### Parameters

| Type            | Name           | Description |
|-----------------|----------------|-------------|
| NetworkEndPoint | endPoint       |             |
| NetworkEndPoint | listenEndPoint |             |

#### SetConnectionData(String, UInt16, String)

<div class="markdown level1 summary">

Sets IP and Port information. This will be ignored if using the Unity
Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],
Byte\[\], Byte\[\], Byte\[\], Boolean)

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetConnectionData(string ipv4Address, ushort port, string listenAddress = null)
```

</div>

##### Parameters

| Type          | Name          | Description |
|---------------|---------------|-------------|
| System.String | ipv4Address   |             |
| System.UInt16 | port          |             |
| System.String | listenAddress |             |

#### SetDebugSimulatorParameters(Int32, Int32, Int32)

<div class="markdown level1 summary">

Set the parameters for the debug simulator.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetDebugSimulatorParameters(int packetDelay, int packetJitter, int dropRate)
```

</div>

##### Parameters

| Type         | Name         | Description                    |
|--------------|--------------|--------------------------------|
| System.Int32 | packetDelay  | Packet delay in milliseconds.  |
| System.Int32 | packetJitter | Packet jitter in milliseconds. |
| System.Int32 | dropRate     | Packet drop percentage.        |

#### SetHostRelayData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

Set the relay server data for the host.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetHostRelayData(string ipAddress, ushort port, byte[] allocationId, byte[] key, byte[] connectionData, bool isSecure = false)
```

</div>

##### Parameters

| Type            | Name           | Description                                   |
|-----------------|----------------|-----------------------------------------------|
| System.String   | ipAddress      | IP address of the relay server.               |
| System.UInt16   | port           | UDP port of the relay server.                 |
| System.Byte\[\] | allocationId   | Allocation ID as a byte array.                |
| System.Byte\[\] | key            | Allocation key as a byte array.               |
| System.Byte\[\] | connectionData | Connection data as a byte array.              |
| System.Boolean  | isSecure       | Whether the connection is secure (uses DTLS). |

#### SetRelayServerData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetRelayServerData(string ipv4Address, ushort port, byte[] allocationIdBytes, byte[] keyBytes, byte[] connectionDataBytes, byte[] hostConnectionDataBytes = null, bool isSecure = false)
```

</div>

##### Parameters

| Type            | Name                    | Description |
|-----------------|-------------------------|-------------|
| System.String   | ipv4Address             |             |
| System.UInt16   | port                    |             |
| System.Byte\[\] | allocationIdBytes       |             |
| System.Byte\[\] | keyBytes                |             |
| System.Byte\[\] | connectionDataBytes     |             |
| System.Byte\[\] | hostConnectionDataBytes |             |
| System.Boolean  | isSecure                |             |

#### Shutdown()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void Shutdown()
```

</div>

##### Overrides

<div>

NetworkTransport.Shutdown()

</div>

#### StartClient()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool StartClient()
```

</div>

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

NetworkTransport.StartClient()

</div>

#### StartServer()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool StartServer()
```

</div>

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

NetworkTransport.StartServer()

</div>

### Implements

<div>

INetworkStreamDriverConstructor

</div>

 
