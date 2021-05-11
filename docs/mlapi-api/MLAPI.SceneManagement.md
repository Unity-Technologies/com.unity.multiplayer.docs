---  
id: MLAPI.SceneManagement  
title: MLAPI.SceneManagement  
---

## Namespace MLAPI.SceneManagement

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### MLAPI.SceneManagement.NetworkSceneManager

<div class="section">

Main class for managing network scenes

</div>

### MLAPI.SceneManagement.SceneSwitchProgress

<div class="section">

Class for tracking scene switching progress by server and clients.

</div>

## Delegates

### MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate

<div class="section">

Delegate for when the clients get notified by the server that all
clients have completed their scene transitions.
OnNotifyClientAllClientsLoadedScene

</div>

### MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate

<div class="section">

Delegate for when all clients have reported to the server that they have
completed scene transition or timed out
OnNotifyServerAllClientsLoadedScene

</div>

### MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate

<div class="section">

Delegate for when a client has reported to the server that it has
completed scene transition OnNotifyServerClientLoadedScene

</div>

### MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchedDelegate

<div class="section">

Delegate for when the scene has been switched

</div>

### MLAPI.SceneManagement.NetworkSceneManager.SceneSwitchStartedDelegate

<div class="section">

Delegate for when a scene switch has been initiated

</div>

### MLAPI.SceneManagement.SceneSwitchProgress.OnClientLoadedSceneDelegate

<div class="section">

Delegate type for when a client is done loading the scene.

</div>

### MLAPI.SceneManagement.SceneSwitchProgress.OnCompletedDelegate

<div class="section">

Delegate type for when the switch scene progress is completed. Either by
all clients done loading the scene or by time out.

</div>
