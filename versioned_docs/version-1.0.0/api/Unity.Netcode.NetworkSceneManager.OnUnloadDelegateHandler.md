---  
id: Unity.Netcode.NetworkSceneManager.OnUnloadDelegateHandler  
title: Unity.Netcode.NetworkSceneManager.OnUnloadDelegateHandler  
---

<div class="markdown level0 summary">

Delegate declaration for the OnUnload event View Unload for more
information

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public delegate void OnUnloadDelegateHandler(ulong clientId, string sceneName, AsyncOperation asyncOperation);
```

##### Parameters

| Type           | Name             | Description                                                                                                        |
|----------------|------------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64  | \*clientId       | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String  | \*sceneName      | name of the scene being processed                                                                                  |
| AsyncOperation | \*asyncOperation | the associated that can be used for scene unloading progress                                                       |
