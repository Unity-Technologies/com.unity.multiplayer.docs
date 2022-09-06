---
id: Unity.Netcode.NetworkTransport
title: Unity.Netcode.NetworkTransport
---

# Class NetworkTransport


The generic transport class all Netcode for GameObjects network
transport implementations derive from. Use this class to add a custom
transport. for an example of how a transport is integrated







##### Inheritance


System.Object




NetworkTransport




UnityTransport





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public abstract class NetworkTransport : MonoBehaviour
```



### Properties

#### IsSupported


Gets a value indicating whether this NetworkTransport is supported in
the current runtime context This is used by multiplex adapters






##### Declaration


``` lang-csharp
public virtual bool IsSupported { get; }
```



##### Property Value

| Type           | Description                                 |
|----------------|---------------------------------------------|
| System.Boolean | `true` if is supported; otherwise, `false`. |

#### ServerClientId


A constant `clientId` that represents the server When this value is
found in methods such as `Send`, it should be treated as a placeholder
that means "the server"






##### Declaration


``` lang-csharp
public abstract ulong ServerClientId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Methods

#### DisconnectLocalClient()


Disconnects the local client from the server






##### Declaration


``` lang-csharp
public abstract void DisconnectLocalClient()
```



#### DisconnectRemoteClient(UInt64)


Disconnects a client from the server






##### Declaration


``` lang-csharp
public abstract void DisconnectRemoteClient(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The clientId to disconnect |

#### GetCurrentRtt(UInt64)


Gets the round trip time for a specific client. This method is optional






##### Declaration


``` lang-csharp
public abstract ulong GetCurrentRtt(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                      |
|---------------|----------|----------------------------------|
| System.UInt64 | clientId | The clientId to get the RTT from |

##### Returns

| Type          | Description                                 |
|---------------|---------------------------------------------|
| System.UInt64 | Returns the round trip time in milliseconds |

#### Initialize(NetworkManager)


Initializes the transport






##### Declaration


``` lang-csharp
public abstract void Initialize(NetworkManager networkManager = null)
```



##### Parameters

| Type           | Name           | Description                       |
|----------------|----------------|-----------------------------------|
| NetworkManager | networkManager | optionally pass in NetworkManager |

#### InvokeOnTransportEvent(NetworkEvent, UInt64, ArraySegment\<Byte\>, Single)


Invokes the OnTransportEvent. Invokation has to occur on the Unity
thread in the Update loop.






##### Declaration


``` lang-csharp
protected void InvokeOnTransportEvent(NetworkEvent eventType, ulong clientId, ArraySegment<byte> payload, float receiveTime)
```



##### Parameters

| Type                               | Name        | Description                                                                |
|------------------------------------|-------------|----------------------------------------------------------------------------|
| NetworkEvent                       | eventType   | The event type                                                             |
| System.UInt64                      | clientId    | The clientId this event is for                                             |
| System.ArraySegment\<System.Byte\> | payload     | The incoming data payload                                                  |
| System.Single                      | receiveTime | The time the event was received, as reported by Time.realtimeSinceStartup. |

#### PollEvent(out UInt64, out ArraySegment\<Byte\>, out Single)


Polls for incoming events, with an extra output parameter to report the
precise time the event was received.






##### Declaration


``` lang-csharp
public abstract NetworkEvent PollEvent(out ulong clientId, out ArraySegment<byte> payload, out float receiveTime)
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

#### Send(UInt64, ArraySegment\<Byte\>, NetworkDelivery)


Send a payload to the specified clientId, data and networkDelivery.






##### Declaration


``` lang-csharp
public abstract void Send(ulong clientId, ArraySegment<byte> payload, NetworkDelivery networkDelivery)
```



##### Parameters

| Type                               | Name            | Description                               |
|------------------------------------|-----------------|-------------------------------------------|
| System.UInt64                      | clientId        | The clientId to send to                   |
| System.ArraySegment\<System.Byte\> | payload         | The data to send                          |
| NetworkDelivery                    | networkDelivery | The delivery type (QoS) to send data with |

#### Shutdown()


Shuts down the transport






##### Declaration


``` lang-csharp
public abstract void Shutdown()
```



#### StartClient()


Connects client to the server






##### Declaration


``` lang-csharp
public abstract bool StartClient()
```



##### Returns

| Type           | Description                |
|----------------|----------------------------|
| System.Boolean | Returns success or failure |

#### StartServer()


Starts to listening for incoming clients






##### Declaration


``` lang-csharp
public abstract bool StartServer()
```



##### Returns

| Type           | Description                |
|----------------|----------------------------|
| System.Boolean | Returns success or failure |

### Events

#### OnTransportEvent


Occurs when the transport has a new transport network event. Can be used
to make an event based transport instead of a poll based. Invocation has
to occur on the Unity thread in the Update loop.






##### Declaration


``` lang-csharp
public event NetworkTransport.TransportEventDelegate OnTransportEvent
```



##### Event Type

| Type                                    | Description |
|-----------------------------------------|-------------|
| NetworkTransport.TransportEventDelegate |             |



