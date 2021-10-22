---  
id: Unity.Netcode.UnityTransport  
title: Unity.Netcode.UnityTransport  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkStreamDriverConstructor

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class UnityTransport : NetworkTransport, INetworkStreamDriverConstructor
```

## 

### ConnectionData

<div class="markdown level1 summary">

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

### InitialBatchQueueSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int InitialBatchQueueSize = 6144
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### InitialMaxPacketSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int InitialMaxPacketSize = default(int)
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### s_DriverConstructor

<div class="markdown level1 summary">

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

## 

### DriverConstructor

<div class="markdown level1 summary">

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

### Protocol

<div class="markdown level1 summary">

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

## 

### CreateDriver(UnityTransport, out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableSequencedPipeline, out NetworkPipeline reliableSequencedPipeline, out NetworkPipeline reliableSequencedFragmentedPipeline)
```

#### Parameters

| Type            | Name                                | Description |
|-----------------|-------------------------------------|-------------|
| UnityTransport  | transport                           |             |
| NetworkDriver   | driver                              |             |
| NetworkPipeline | unreliableSequencedPipeline         |             |
| NetworkPipeline | reliableSequencedPipeline           |             |
| NetworkPipeline | reliableSequencedFragmentedPipeline |             |

### DisconnectLocalClient()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void DisconnectLocalClient()
```

### DisconnectRemoteClient(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void DisconnectRemoteClient(ulong clientId)
```

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

### GetCurrentRtt(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override ulong GetCurrentRtt(ulong clientId)
```

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Initialize()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Initialize()
```

### PollEvent(out UInt64, out ArraySegment\&lt;Byte&gt;, out Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override NetworkEvent PollEvent(out ulong clientId, out ArraySegment<byte> payload, out float receiveTime)
```

#### Parameters

| Type                               | Name        | Description |
|------------------------------------|-------------|-------------|
| System.UInt64                      | clientId    |             |
| System.ArraySegment\&lt;System.Byte&gt; | payload     |             |
| System.Single                      | receiveTime |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| NetworkEvent |             |

### Send(UInt64, ArraySegment\&lt;Byte&gt;, NetworkDelivery)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Send(ulong clientId, ArraySegment<byte> payload, NetworkDelivery networkDelivery)
```

#### Parameters

| Type                               | Name            | Description |
|------------------------------------|-----------------|-------------|
| System.UInt64                      | clientId        |             |
| System.ArraySegment\&lt;System.Byte&gt; | payload         |             |
| NetworkDelivery                    | networkDelivery |             |

### SetConnectionData(NetworkEndPoint)

<div class="markdown level1 summary">

Sets IP and Port information. This will be ignored if using the Unity
Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],
Byte\[\], Byte\[\], Byte\[\], Boolean)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetConnectionData(NetworkEndPoint endPoint)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkEndPoint | endPoint |             |

### SetConnectionData(String, UInt16)

<div class="markdown level1 summary">

Sets IP and Port information. This will be ignored if using the Unity
Relay and you should call SetRelayServerData(String, UInt16, Byte\[\],
Byte\[\], Byte\[\], Byte\[\], Boolean)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetConnectionData(string ipv4Address, ushort port)
```

#### Parameters

| Type          | Name        | Description |
|---------------|-------------|-------------|
| System.String | ipv4Address |             |
| System.UInt16 | port        |             |

### SetRelayServerData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetRelayServerData(string ipv4Address, ushort port, byte[] allocationIdBytes, byte[] keyBytes, byte[] connectionDataBytes, byte[] hostConnectionDataBytes = null, bool isSecure = false)
```

#### Parameters

| Type            | Name                    | Description |
|-----------------|-------------------------|-------------|
| System.String   | ipv4Address             |             |
| System.UInt16   | port                    |             |
| System.Byte\[\] | allocationIdBytes       |             |
| System.Byte\[\] | keyBytes                |             |
| System.Byte\[\] | connectionDataBytes     |             |
| System.Byte\[\] | hostConnectionDataBytes |             |
| System.Boolean  | isSecure                |             |

### Shutdown()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Shutdown()
```

### StartClient()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool StartClient()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### StartServer()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool StartServer()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

INetworkStreamDriverConstructor

</div>
