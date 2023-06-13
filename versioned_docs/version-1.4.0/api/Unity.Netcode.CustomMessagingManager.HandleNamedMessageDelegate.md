---
id: Unity.Netcode.CustomMessagingManager.HandleNamedMessageDelegate
title: Unity.Netcode.CustomMessagingManager.HandleNamedMessageDelegate
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:26 pm
---

<div class="markdown level0 summary">

Delegate used to handle named messages

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void HandleNamedMessageDelegate(ulong senderClientId, FastBufferReader messagePayload);
```

## Parameters

| Type             | Name             | Description |
|------------------|------------------|-------------|
| System.UInt64    | \*senderClientId |             |
| FastBufferReader | \*messagePayload |             |
