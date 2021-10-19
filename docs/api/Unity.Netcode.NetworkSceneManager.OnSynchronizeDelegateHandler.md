---  
id: Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler  
title: Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler  
---

<div class="markdown level0 summary">

Delegate declaration for the OnSynchronize event View Synchronize for
more information

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public delegate void OnSynchronizeDelegateHandler(ulong clientId);
```

##### Parameters

| Type          | Name       | Description                                                                                                        |
|---------------|------------|--------------------------------------------------------------------------------------------------------------------|
| System.UInt64 | \*clientId | the client that is processing this event (the server will receive all of these events for every client and itself) |
