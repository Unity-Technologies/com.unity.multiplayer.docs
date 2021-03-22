---  
id: MLAPI.Transports.NetworkTransport.TransportEventDelegate  
title: MLAPI.Transports.NetworkTransport.TransportEventDelegate  
---

<div class="markdown level0 summary">

Delegate for transport events.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate void TransportEventDelegate(NetworkEvent type, ulong clientId, NetworkChannel networkChannel, ArraySegment<byte> payload, float receiveTime);

##### Parameters

| Type                                   | Name             | Description |
|----------------------------------------|------------------|-------------|
| NetworkEvent                           | \*type           |             |
| System.UInt64                          | \*clientId       |             |
| NetworkChannel                         | \*networkChannel |             |
| System.ArraySegment&lt;System.Byte&gt; | \*payload        |             |
| System.Single                          | \*receiveTime    |             |
