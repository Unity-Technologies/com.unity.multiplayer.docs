---
id: Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler
---

# Delegate NetworkSceneManager.OnSynchronizeDelegateHandler


Delegate declaration for the OnSynchronize event.  
See also:  
Synchronize for more information






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void OnSynchronizeDelegateHandler(ulong clientId);
```



##### Parameters

| Type          | Name     | Description                                                                                                        |
|---------------|----------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | clientId | the client that is processing this event (the server will receive all of these events for every client and itself) |



