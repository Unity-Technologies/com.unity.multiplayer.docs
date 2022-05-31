---  
id: Unity.Netcode.NetworkSceneManager.OnLoadCompleteDelegateHandler  
title: Unity.Netcode.NetworkSceneManager.OnLoadCompleteDelegateHandler  
---

<div class="markdown level0 summary">

Delegate declaration for the OnLoadComplete event.  
See also:  
LoadComplete for more information

</div>

<div class="markdown level0 conceptual">

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public delegate void OnLoadCompleteDelegateHandler(ulong clientId, string sceneName, LoadSceneMode loadSceneMode);
```

</div>

##### Parameters

| Type          | Name          | Description                                                                                                        |
|---------------|---------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | clientId      | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String | sceneName     | the scene name pertaining to this event                                                                            |
| LoadSceneMode | loadSceneMode | the mode the scene was loaded in                                                                                   |

 
