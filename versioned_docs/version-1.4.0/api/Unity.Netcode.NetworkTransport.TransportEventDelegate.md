---
id: Unity.Netcode.NetworkTransport.TransportEventDelegate
title: Unity.Netcode.NetworkTransport.TransportEventDelegate
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:33 pm
---

<div class="markdown level0 summary">

Delegate for transport network events

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void TransportEventDelegate(NetworkEvent eventType, ulong clientId, ArraySegment<byte> payload, float receiveTime);
```

## Parameters

| Type                               | Name          | Description |
|------------------------------------|---------------|-------------|
| NetworkEvent                       | \*eventType   |             |
| System.UInt64                      | \*clientId    |             |
| System.ArraySegment\<System.Byte\> | \*payload     |             |
| System.Single                      | \*receiveTime |             |
