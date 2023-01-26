---
id: Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:12 pm
---

<div class="markdown level0 summary">

Delegate declaration for the OnSynchronize event.
See also:
Synchronize for more information

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void OnSynchronizeDelegateHandler(ulong clientId);
```

## Parameters

| Type          | Name       | Description                                                                                                        |
|---------------|------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | \*clientId | the client that is processing this event (the server will receive all of these events for every client and itself) |
