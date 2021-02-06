---

id: MLAPI.Transports.Transport.TransportEventDelegate

title: MLAPI.Transports.Transport.TransportEventDelegate

---

Delegate Transport.TransportEventDelegate

<div class="markdown level0 summary" markdown="1">

Delegate for transport events.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Transports_Transport_TransportEventDelegate_syntax]

    public delegate void TransportEventDelegate(NetEventType type, ulong clientId, string channelName, ArraySegment<byte> payload, float receiveTime);

##### Parameters [parameters]

| Type                                                                                   | Name          | Description |
|----------------------------------------------------------------------------------------|---------------|-------------|
| NetEventType                                                                           | \*type        |             |
| <span class="xref">System.UInt64</span>                                                | \*clientId    |             |
| <span class="xref">System.String</span>                                                | \*channelName |             |
| <span class="xref">System.ArraySegment</span>\<<span class="xref">System.Byte</span>\> | \*payload     |             |
| <span class="xref">System.Single</span>                                                | \*receiveTime |             |
