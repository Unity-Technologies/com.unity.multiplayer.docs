---  
id: MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate  
title: MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate  
---

<div class="markdown level0 summary">

Delegate for when a client has reported to the server that it has
completed scene transition OnNotifyServerClientLoadedScene

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate void NotifyServerClientLoadedSceneDelegate(SceneSwitchProgress progress, ulong clientId);

##### Parameters

| Type                | Name       | Description |
|---------------------|------------|-------------|
| SceneSwitchProgress | \*progress |             |
| System.UInt64       | \*clientId |             |
