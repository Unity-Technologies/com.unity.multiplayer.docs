---
id: Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler
---

# Delegate NetworkSceneManager.OnUnloadCompleteDelegateHandler


Delegate declaration for the OnUnloadComplete event.  
See also:  
UnloadComplete for more information






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void OnUnloadCompleteDelegateHandler(ulong clientId, string sceneName);
```



##### Parameters

| Type          | Name      | Description                                                                                                        |
|---------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | clientId  | the client that is processing this event (the server will receive all of these events for every client and itself) |
| System.String | sceneName | the scene name pertaining to this event                                                                            |



