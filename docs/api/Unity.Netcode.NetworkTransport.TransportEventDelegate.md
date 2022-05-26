---  
id: Unity.Netcode.NetworkTransport.TransportEventDelegate  
title: Unity.Netcode.NetworkTransport.TransportEventDelegate  
---

<div class="markdown level0 summary">

Delegate for transport network events

</div>

<div class="markdown level0 conceptual">

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public delegate void TransportEventDelegate(NetworkEvent eventType, ulong clientId, ArraySegment<byte> payload, float receiveTime);
```

</div>

##### Parameters

| Type                               | Name        | Description |
|------------------------------------|-------------|-------------|
| NetworkEvent                       | eventType   |             |
| System.UInt64                      | clientId    |             |
| System.ArraySegment\<System.Byte\> | payload     |             |
| System.Single                      | receiveTime |             |

 
