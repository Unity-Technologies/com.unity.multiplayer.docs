---  
id: Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler  
title: Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler  
---

<div class="markdown level0 summary">

Delegate declaration for the OnUnloadComplete event.  
See also:  
UnloadComplete for more information

</div>

<div class="markdown level0 conceptual">

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public delegate void OnUnloadCompleteDelegateHandler(ulong clientId, string sceneName);
```

</div>

##### Parameters

| Type          | Name      | Description                                                                                                        |
|---------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | clientId  | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String | sceneName | the scene name pertaining to this event                                                                            |

 
