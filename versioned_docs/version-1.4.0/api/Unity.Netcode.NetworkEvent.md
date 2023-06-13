---
id: Unity.Netcode.NetworkEvent
title: Unity.Netcode.NetworkEvent
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:24 pm
---

<div class="markdown level0 summary">

Represents a netEvent when polling

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public enum NetworkEvent
```

## Fields

| Name             | Description                                               |
|------------------|-----------------------------------------------------------|
| Connect          | A client is connected, or client connected to server      |
| Data             | New data is received                                      |
| Disconnect       | A client disconnected, or client disconnected from server |
| Nothing          | No new event                                              |
| TransportFailure | Transport has encountered an unrecoverable failure        |
