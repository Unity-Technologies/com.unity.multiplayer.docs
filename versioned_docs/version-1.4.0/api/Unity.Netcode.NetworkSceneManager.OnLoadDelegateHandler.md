---
id: Unity.Netcode.NetworkSceneManager.OnLoadDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnLoadDelegateHandler
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:08 pm
---

<div class="markdown level0 summary">

Delegate declaration for the OnLoad event.
See also:
Loadfor more information

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void OnLoadDelegateHandler(ulong clientId, string sceneName, LoadSceneMode loadSceneMode, AsyncOperation asyncOperation);
```

## Parameters

| Type           | Name             | Description                                                                                                        |
|----------------|------------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64  | \*clientId       | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String  | \*sceneName      | name of the scene being processed                                                                                  |
| LoadSceneMode  | \*loadSceneMode  | the LoadSceneMode mode for the scene being loaded                                                                  |
| AsyncOperation | \*asyncOperation | the associated that can be used for scene loading progress                                                         |
