---  
id: Unity.Netcode.Transports.UNET.UNetTransport  
title: Unity.Netcode.Transports.UNET.UNetTransport  
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

<div class="level2">

System.Dynamic.ExpandoObject

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
ArraySegment\&lt;Byte&gt;, Single)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class UNetTransport : NetworkTransport
```

## 

### ConnectAddress

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ConnectAddress
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### ConnectPort

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ConnectPort
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxConnections

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxConnections
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxSentMessageQueueSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxSentMessageQueueSize
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MessageBufferSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MessageBufferSize
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MessageSendMode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public UNetTransport.SendMode MessageSendMode
```

#### Field Value

| Type                   | Description |
|------------------------|-------------|
| UNetTransport.SendMode |             |

### ServerListenPort

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ServerListenPort
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

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

#### Overrides

<div>

NetworkTransport.ServerClientId

</div>

## 

### DisconnectLocalClient()

<div class="markdown level1 summary">

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

#### Overrides

<div>

NetworkTransport.DisconnectRemoteClient(UInt64)

</div>

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

#### Overrides

<div>

NetworkTransport.GetCurrentRtt(UInt64)

</div>

### Initialize()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Initialize()
```

#### Overrides

<div>

NetworkTransport.Initialize()

</div>

### LateUpdate()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected void LateUpdate()
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

#### Overrides

<div>

NetworkTransport.PollEvent(out UInt64, out ArraySegment\&lt;Byte&gt;, out
Single)

</div>

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

#### Overrides

<div>

NetworkTransport.Send(UInt64, ArraySegment\&lt;Byte&gt;, NetworkDelivery)

</div>

### Shutdown()

<div class="markdown level1 summary">

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

#### Overrides

<div>

NetworkTransport.StartClient()

</div>

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

#### Overrides

<div>

NetworkTransport.StartServer()

</div>
