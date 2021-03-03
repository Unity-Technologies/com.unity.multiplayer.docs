---  
id: MLAPI.Transports.Transport.TransportEventDelegate  
title: MLAPI.Transports.Transport.TransportEventDelegate  
---

<div class="markdown level0 summary">

Delegate for transport events.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate void TransportEventDelegate(NetEventType type, ulong clientId, string channelName, ArraySegment<byte> payload, float receiveTime);

##### Parameters

| Type                                   | Name          | Description |
|----------------------------------------|---------------|-------------|
| NetEventType                           | \*type        |             |
| System.UInt64                          | \*clientId    |             |
| System.String                          | \*channelName |             |
| System.ArraySegment&lt;System.Byte&gt; | \*payload     |             |
| System.Single                          | \*receiveTime |             |
