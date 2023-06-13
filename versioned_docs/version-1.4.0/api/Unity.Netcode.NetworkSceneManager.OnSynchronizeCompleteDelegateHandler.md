---
id: Unity.Netcode.NetworkSceneManager.OnSynchronizeCompleteDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnSynchronizeCompleteDelegateHandler
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:40:26 pm
---

<div class="markdown level0 summary">

Delegate declaration for the OnSynchronizeComplete event.

See also:

SynchronizeComplete for more information

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void OnSynchronizeCompleteDelegateHandler(ulong clientId);
```

## Parameters

| Type          | Name       | Description                          |
|---------------|------------|--------------------------------------|
| System.UInt64 | \*clientId | the client that completed this event |
