---
id: Unity.Netcode.NetworkSceneManager.OnEventCompletedDelegateHandler
title: Unity.Netcode.NetworkSceneManager.OnEventCompletedDelegateHandler
---

# Delegate NetworkSceneManager.OnEventCompletedDelegateHandler


Delegate declaration for the OnLoadEventCompleted and
OnUnloadEventCompleted events.  
See also:  
LoadEventCompleted  
UnloadEventCompleted






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void OnEventCompletedDelegateHandler(string sceneName, LoadSceneMode loadSceneMode, List<ulong> clientsCompleted, List<ulong> clientsTimedOut);
```



##### Parameters

| Type                                             | Name             | Description                                                  |
|--------------------------------------------------|------------------|--------------------------------------------------------------|
| System.String                                    | sceneName        | scene pertaining to this event                               |
| LoadSceneMode                                    | loadSceneMode    | of the associated event completed                            |
| System.Collections.Generic.List\<System.UInt64\> | clientsCompleted | the clients that completed the loading event                 |
| System.Collections.Generic.List\<System.UInt64\> | clientsTimedOut  | the clients (if any) that timed out during the loading event |



