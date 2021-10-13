---  
id: MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate  
title: MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate  
---

<div class="markdown level0 summary">

Delegate for when the clients get notified by the server that all
clients have completed their scene transitions.
OnNotifyClientAllClientsLoadedScene

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate void NotifyClientAllClientsLoadedSceneDelegate(ulong[] clientIds, ulong[] timedOutClientIds);

##### Parameters

| Type              | Name                | Description |
|-------------------|---------------------|-------------|
| System.UInt64\[\] | \*clientIds         |             |
| System.UInt64\[\] | \*timedOutClientIds |             |
