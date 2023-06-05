---
id: Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate
title: Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:31 pm
---

<div class="markdown level0 summary">

Delegate used for incoming unnamed messages

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void UnnamedMessageDelegate(ulong clientId, FastBufferReader reader);
```

## Parameters

| Type             | Name       | Description                            |
|------------------|------------|----------------------------------------|
| System.UInt64    | \*clientId | The clientId that sent the message     |
| FastBufferReader | \*reader   | The stream containing the message data |
