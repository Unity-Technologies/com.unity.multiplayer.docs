---
id: Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:40:34 pm
---

<div class="markdown level0 summary">

Delegate declaration for the OnUnloadComplete event.

See also:

UnloadComplete for more information

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void OnUnloadCompleteDelegateHandler(ulong clientId, string sceneName);
```

## Parameters

| Type          | Name        | Description                                                                                                        |
|---------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | \*clientId  | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String | \*sceneName | the scene name pertaining to this event                                                                            |
