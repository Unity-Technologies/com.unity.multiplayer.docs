---  
id: Unity.Netcode.NetworkTransport  
title: Unity.Netcode.NetworkTransport  
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

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public abstract class NetworkTransport : MonoBehaviour
```

## 

### IsSupported

<div class="markdown level1 summary">

Gets a value indicating whether this NetworkTransport is supported in
the current runtime context This is used by multiplex adapters

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual bool IsSupported { get; }
```

#### Property Value

| Type           | Description                                 |
|----------------|---------------------------------------------|
| System.Boolean | `true` if is supported; otherwise, `false`. |

### ServerClientId

<div class="markdown level1 summary">

A constant `clientId` that represents the server When this value is
found in methods such as `Send`, it should be treated as a placeholder
that means "the server"

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract ulong ServerClientId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

## 

### DisconnectLocalClient()

<div class="markdown level1 summary">

Disconnects the local client from the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void DisconnectLocalClient()
```

### DisconnectRemoteClient(UInt64)

<div class="markdown level1 summary">

Disconnects a client from the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void DisconnectRemoteClient(ulong clientId)
```

#### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The clientId to disconnect |

### GetCurrentRtt(UInt64)

<div class="markdown level1 summary">

Gets the round trip time for a specific client. This method is optional

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract ulong GetCurrentRtt(ulong clientId)
```

#### Parameters

| Type          | Name     | Description                      |
|---------------|----------|----------------------------------|
| System.UInt64 | clientId | The clientId to get the RTT from |

#### Returns

| Type          | Description                                 |
|---------------|---------------------------------------------|
| System.UInt64 | Returns the round trip time in milliseconds |

### Initialize()

<div class="markdown level1 summary">

Initializes the transport

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void Initialize()
```

### InvokeOnTransportEvent(NetworkEvent, UInt64, ArraySegment\&lt;Byte&gt; Single)

<div class="markdown level1 summary">

Invokes the OnTransportEvent. Invokation has to occur on the Unity
thread in the Update loop.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected void InvokeOnTransportEvent(NetworkEvent eventType, ulong clientId, ArraySegment<byte> payload, float receiveTime)
```

#### Parameters

| Type                               | Name        | Description                                                                |
|------------------------------------|-------------|----------------------------------------------------------------------------|
| NetworkEvent                       | eventType   | The event type                                                             |
| System.UInt64                      | clientId    | The clientId this event is for                                             |
| System.ArraySegment\\&lt;System.Byte&gt;| payload     | The incoming data payload                                                  |
| System.Single                      | receiveTime | The time the event was received, as reported by Time.realtimeSinceStartup. |

### PollEvent(out UInt64, out ArraySegment\&lt;Byte&gt;, out Single)

<div class="markdown level1 summary">

Polls for incoming events, with an extra output parameter to report the
precise time the event was received.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract NetworkEvent PollEvent(out ulong clientId, out ArraySegment<byte> payload, out float receiveTime)
```

#### Parameters

| Type                               | Name        | Description                                                                |
|------------------------------------|-------------|----------------------------------------------------------------------------|
| System.UInt64                      | clientId    | The clientId this event is for                                             |
| System.ArraySegment\&lt;System.Byte&gt;  | payload     | The incoming data payload                                                  |
| System.Single                      | receiveTime | The time the event was received, as reported by Time.realtimeSinceStartup. |

#### Returns

| Type         | Description            |
|--------------|------------------------|
| NetworkEvent | Returns the event type |

### Send(UInt64, ArraySegment\&lt;Byte&gt;, NetworkDelivery)

<div class="markdown level1 summary">

Send a payload to the specified clientId, data and channelName.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void Send(ulong clientId, ArraySegment<byte> payload, NetworkDelivery networkDelivery)
```

#### Parameters

| Type                               | Name            | Description                               |
|------------------------------------|-----------------|-------------------------------------------|
| System.UInt64                      | clientId        | The clientId to send to                   |
| System.ArraySegment\&lt;System.Byte&gt; | payload         | The data to send                          |
| NetworkDelivery                    | networkDelivery | The delivery type (QoS) to send data with |

### Shutdown()

<div class="markdown level1 summary">

Shuts down the transport

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void Shutdown()
```

### StartClient()

<div class="markdown level1 summary">

Connects client to the server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract bool StartClient()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### StartServer()

<div class="markdown level1 summary">

Starts to listening for incoming clients

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract bool StartServer()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### OnTransportEvent

<div class="markdown level1 summary">

Occurs when the transport has a new transport network event. Can be used
to make an event based transport instead of a poll based. Invocation has
to occur on the Unity thread in the Update loop.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkTransport.TransportEventDelegate OnTransportEvent
```

#### Event Type

| Type                                    | Description |
|-----------------------------------------|-------------|
| NetworkTransport.TransportEventDelegate |             |
