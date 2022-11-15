---
id: Unity.Netcode.Transports.UTP.UnityTransport
title: Unity.Netcode.Transports.UTP.UnityTransport
---

# Class UnityTransport


The Netcode for GameObjects NetworkTransport for UnityTransport. Note:
This is highly recommended to use over UNet.







##### Inheritance


System.Object




NetworkTransport




UnityTransport






##### Implements



INetworkStreamDriverConstructor






##### Inherited Members



NetworkTransport.IsSupported





NetworkTransport.OnTransportEvent





NetworkTransport.InvokeOnTransportEvent(NetworkEvent, UInt64,
ArraySegment\<Byte\>, Single)





###### **Namespace**: Unity.Netcode.Transports.UTP

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class UnityTransport : NetworkTransport, INetworkStreamDriverConstructor
```



### Fields

#### ConnectionData


The connection (address) data for this UnityTransport instance. This is
where you can change IP Address, Port, or server's listen address.
UnityTransport.ConnectionAddressData






##### Declaration


``` lang-csharp
public UnityTransport.ConnectionAddressData ConnectionData
```



##### Field Value

| Type                                 | Description |
|--------------------------------------|-------------|
| UnityTransport.ConnectionAddressData |             |

#### DebugSimulator


Can be used to simulate poor network conditions such as:

-   packet delay/latency
-   packet jitter (variances in latency, see:
    https://en.wikipedia.org/wiki/Jitter)
-   packet drop rate (packet loss)






##### Declaration


``` lang-csharp
public UnityTransport.SimulatorParameters DebugSimulator
```



##### Field Value

| Type                               | Description |
|------------------------------------|-------------|
| UnityTransport.SimulatorParameters |             |

#### InitialMaxPacketQueueSize


The default maximum (receive) packet queue size






##### Declaration


``` lang-csharp
public const int InitialMaxPacketQueueSize = 128
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitialMaxPayloadSize


The default maximum payload size






##### Declaration


``` lang-csharp
public const int InitialMaxPayloadSize = 6144
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitialMaxSendQueueSize


The default maximum send queue size






##### Declaration


``` lang-csharp
public const int InitialMaxSendQueueSize = 98304
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### s_DriverConstructor


The global INetworkStreamDriverConstructor implementation






##### Declaration


``` lang-csharp
public static INetworkStreamDriverConstructor s_DriverConstructor
```



##### Field Value

| Type                            | Description |
|---------------------------------|-------------|
| INetworkStreamDriverConstructor |             |

### Properties

#### ConnectTimeoutMS


Timeout in milliseconds indicating how long we will wait until we send a
new connection attempt.






##### Declaration


``` lang-csharp
public int ConnectTimeoutMS { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### DisconnectTimeoutMS


Inactivity timeout after which a connection will be disconnected.






##### Declaration


``` lang-csharp
public int DisconnectTimeoutMS { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


The connection needs to receive data from the connected endpoint within
this timeout. Note that with heartbeats enabled, simply not sending any
data will not be enough to trigger this timeout (since heartbeats count
as connection events).



#### DriverConstructor


Returns either the global INetworkStreamDriverConstructor implementation
or the current UnityTransport instance






##### Declaration


``` lang-csharp
public INetworkStreamDriverConstructor DriverConstructor { get; }
```



##### Property Value

| Type                            | Description |
|---------------------------------|-------------|
| INetworkStreamDriverConstructor |             |

#### HeartbeatTimeoutMS


Timeout in milliseconds after which a heartbeat is sent if there is no
activity.






##### Declaration


``` lang-csharp
public int HeartbeatTimeoutMS { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxConnectAttempts


The maximum amount of connection attempts we will try before
disconnecting.






##### Declaration


``` lang-csharp
public int MaxConnectAttempts { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxPacketQueueSize


The maximum amount of packets that can be in the internal send/receive
queues.






##### Declaration


``` lang-csharp
public int MaxPacketQueueSize { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


Basically this is how many packets can be sent/received in a single
update/frame.



#### MaxPayloadSize


The maximum size of a payload that can be handled by the transport.






##### Declaration


``` lang-csharp
public int MaxPayloadSize { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxSendQueueSize


The maximum size in bytes of the transport send queue.






##### Declaration


``` lang-csharp
public int MaxSendQueueSize { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


The send queue accumulates messages for batching and stores messages
when other internal send queues are full. If you routinely observe an
error about too many in-flight packets, try increasing this.



#### Protocol


The current ProtocolType used by the transport






##### Declaration


``` lang-csharp
public UnityTransport.ProtocolType Protocol { get; }
```



##### Property Value

| Type                        | Description |
|-----------------------------|-------------|
| UnityTransport.ProtocolType |             |

#### ServerClientId


The client id used to represent the server.






##### Declaration


``` lang-csharp
public override ulong ServerClientId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

##### Overrides



NetworkTransport.ServerClientId



### Methods

#### CreateDriver(UnityTransport, out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)


Creates the internal NetworkDriver






##### Declaration


``` lang-csharp
public void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableFragmentedPipeline, out NetworkPipeline unreliableSequencedFragmentedPipeline, out NetworkPipeline reliableSequencedPipeline)
```



##### Parameters

| Type            | Name                                  | Description                                       |
|-----------------|---------------------------------------|---------------------------------------------------|
| UnityTransport  | transport                             | The owner transport                               |
| NetworkDriver   | driver                                | The driver                                        |
| NetworkPipeline | unreliableFragmentedPipeline          | The UnreliableFragmented NetworkPipeline          |
| NetworkPipeline | unreliableSequencedFragmentedPipeline | The UnreliableSequencedFragmented NetworkPipeline |
| NetworkPipeline | reliableSequencedPipeline             | The ReliableSequenced NetworkPipeline             |

#### DisconnectLocalClient()


Disconnects the local client from the remote






##### Declaration


``` lang-csharp
public override void DisconnectLocalClient()
```



##### Overrides



NetworkTransport.DisconnectLocalClient()



#### DisconnectRemoteClient(UInt64)


Disconnects a remote client from the server






##### Declaration


``` lang-csharp
public override void DisconnectRemoteClient(ulong clientId)
```



##### Parameters

| Type          | Name     | Description              |
|---------------|----------|--------------------------|
| System.UInt64 | clientId | The client to disconnect |

##### Overrides



NetworkTransport.DisconnectRemoteClient(UInt64)



#### GetCurrentRtt(UInt64)


Gets the current RTT for a specific client






##### Declaration


``` lang-csharp
public override ulong GetCurrentRtt(ulong clientId)
```



##### Parameters

| Type          | Name     | Description           |
|---------------|----------|-----------------------|
| System.UInt64 | clientId | The client RTT to get |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 | The RTT     |

##### Overrides



NetworkTransport.GetCurrentRtt(UInt64)



#### Initialize(NetworkManager)


Initializes the transport






##### Declaration


``` lang-csharp
public override void Initialize(NetworkManager networkManager = null)
```



##### Parameters

| Type           | Name           | Description                                                |
|----------------|----------------|------------------------------------------------------------|
| NetworkManager | networkManager | The NetworkManager that initialized and owns the transport |

##### Overrides



NetworkTransport.Initialize(NetworkManager)



#### PollEvent(out UInt64, out ArraySegment\<Byte\>, out Single)


Polls for incoming events, with an extra output parameter to report the
precise time the event was received.






##### Declaration


``` lang-csharp
public override NetworkEvent PollEvent(out ulong clientId, out ArraySegment<byte> payload, out float receiveTime)
```



##### Parameters

| Type                               | Name        | Description                                                                |
|------------------------------------|-------------|----------------------------------------------------------------------------|
| System.UInt64                      | clientId    | The clientId this event is for                                             |
| System.ArraySegment\<System.Byte\> | payload     | The incoming data payload                                                  |
| System.Single                      | receiveTime | The time the event was received, as reported by Time.realtimeSinceStartup. |

##### Returns

| Type         | Description            |
|--------------|------------------------|
| NetworkEvent | Returns the event type |

##### Overrides



NetworkTransport.PollEvent(out UInt64, out ArraySegment\<Byte\>, out
Single)



#### Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)


Send a payload to the specified clientId, data and networkDelivery.






##### Declaration


``` lang-csharp
public override void Send(ulong clientId, ArraySegment<byte> payload, NetworkDelivery networkDelivery)
```



##### Parameters

| Type                               | Name            | Description                               |
|------------------------------------|-----------------|-------------------------------------------|
| System.UInt64                      | clientId        | The clientId to send to                   |
| System.ArraySegment\<System.Byte\> | payload         | The data to send                          |
| NetworkDelivery                    | networkDelivery | The delivery type (QoS) to send data with |

##### Overrides



NetworkTransport.Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)



#### SetClientRelayData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)


Set the relay server data for the host.






##### Declaration


``` lang-csharp
public void SetClientRelayData(string ipAddress, ushort port, byte[] allocationId, byte[] key, byte[] connectionData, byte[] hostConnectionData, bool isSecure = false)
```



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


Sets IP and Port information. This will be ignored if using the Unity
Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],
Byte\[\], Byte\[\], Byte\[\], Boolean)






##### Declaration


``` lang-csharp
public void SetConnectionData(NetworkEndPoint endPoint, NetworkEndPoint listenEndPoint = null)
```



##### Parameters

| Type            | Name           | Description               |
|-----------------|----------------|---------------------------|
| NetworkEndPoint | endPoint       | The remote end point      |
| NetworkEndPoint | listenEndPoint | The local listen endpoint |

#### SetConnectionData(String, UInt16, String)


Sets IP and Port information. This will be ignored if using the Unity
Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],
Byte\[\], Byte\[\], Byte\[\], Boolean)






##### Declaration


``` lang-csharp
public void SetConnectionData(string ipv4Address, ushort port, string listenAddress = null)
```



##### Parameters

| Type          | Name          | Description              |
|---------------|---------------|--------------------------|
| System.String | ipv4Address   | The remote IP address    |
| System.UInt16 | port          | The remote port          |
| System.String | listenAddress | The local listen address |

#### SetDebugSimulatorParameters(Int32, Int32, Int32)


Set the parameters for the debug simulator.






##### Declaration


``` lang-csharp
public void SetDebugSimulatorParameters(int packetDelay, int packetJitter, int dropRate)
```



##### Parameters

| Type         | Name         | Description                    |
|--------------|--------------|--------------------------------|
| System.Int32 | packetDelay  | Packet delay in milliseconds.  |
| System.Int32 | packetJitter | Packet jitter in milliseconds. |
| System.Int32 | dropRate     | Packet drop percentage.        |

#### SetHostRelayData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Boolean)


Set the relay server data for the host.






##### Declaration


``` lang-csharp
public void SetHostRelayData(string ipAddress, ushort port, byte[] allocationId, byte[] key, byte[] connectionData, bool isSecure = false)
```



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


Set the relay server data for the server.






##### Declaration


``` lang-csharp
public void SetRelayServerData(string ipv4Address, ushort port, byte[] allocationIdBytes, byte[] keyBytes, byte[] connectionDataBytes, byte[] hostConnectionDataBytes = null, bool isSecure = false)
```



##### Parameters

| Type            | Name                    | Description                                   |
|-----------------|-------------------------|-----------------------------------------------|
| System.String   | ipv4Address             | IP address of the relay server.               |
| System.UInt16   | port                    | UDP port of the relay server.                 |
| System.Byte\[\] | allocationIdBytes       | Allocation ID as a byte array.                |
| System.Byte\[\] | keyBytes                | Allocation key as a byte array.               |
| System.Byte\[\] | connectionDataBytes     | Connection data as a byte array.              |
| System.Byte\[\] | hostConnectionDataBytes | The HostConnectionData as a byte array.       |
| System.Boolean  | isSecure                | Whether the connection is secure (uses DTLS). |

#### Shutdown()


Shuts down the transport






##### Declaration


``` lang-csharp
public override void Shutdown()
```



##### Overrides



NetworkTransport.Shutdown()



#### StartClient()


Connects client to the server Note: When this method returns false it
could mean:

-   You are trying to start a client that is already started
-   It failed during the initial port binding when attempting to begin
    to connect






##### Declaration


``` lang-csharp
public override bool StartClient()
```



##### Returns

| Type           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| System.Boolean | true if the client was started and false if it failed to start the client |

##### Overrides



NetworkTransport.StartClient()



#### StartServer()


Starts to listening for incoming clients Note: When this method returns
false it could mean:

-   You are trying to start a client that is already started
-   It failed during the initial port binding when attempting to begin
    to connect






##### Declaration


``` lang-csharp
public override bool StartServer()
```



##### Returns

| Type           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| System.Boolean | true if the server was started and false if it failed to start the server |

##### Overrides



NetworkTransport.StartServer()



### Implements



INetworkStreamDriverConstructor





