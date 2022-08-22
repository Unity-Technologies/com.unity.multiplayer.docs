---
id: Unity.Netcode.NetworkSceneManager.OnLoadDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnLoadDelegateHandler
---

# Delegate NetworkSceneManager.OnLoadDelegateHandler


Delegate declaration for the OnLoad event.  
See also:  
Loadfor more information






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void OnLoadDelegateHandler(ulong clientId, string sceneName, LoadSceneMode loadSceneMode, AsyncOperation asyncOperation);
```



##### Parameters

| Type           | Name           | Description                                                                                                        |
|----------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64  | clientId       | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String  | sceneName      | name of the scene being processed                                                                                  |
| LoadSceneMode  | loadSceneMode  | the LoadSceneMode mode for the scene being loaded                                                                  |
| AsyncOperation | asyncOperation | the associated that can be used for scene loading progress                                                         |



