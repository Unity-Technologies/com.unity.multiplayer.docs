---  
id: MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate  
title: MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate  
---

<div class="markdown level0 summary">

Delegate for when all clients have reported to the server that they have
completed scene transition or timed out
OnNotifyServerAllClientsLoadedScene

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate void NotifyServerAllClientsLoadedSceneDelegate(SceneSwitchProgress progress, bool timedOut);

##### Parameters

| Type                | Name       | Description |
|---------------------|------------|-------------|
| SceneSwitchProgress | \*progress |             |
| System.Boolean      | \*timedOut |             |
