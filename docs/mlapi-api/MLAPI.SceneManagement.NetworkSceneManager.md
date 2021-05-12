---  
id: MLAPI.SceneManagement.NetworkSceneManager  
title: MLAPI.SceneManagement.NetworkSceneManager  
---

<div class="markdown level0 summary">

Main class for managing network scenes

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public class NetworkSceneManager

## Methods 

### AddRuntimeSceneName(String, UInt32)

<div class="markdown level1 summary">

Adds a scene during runtime. The index is REQUIRED to be unique AND the
same across all instances.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void AddRuntimeSceneName(string sceneName, uint index)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | sceneName | Scene name. |
| System.UInt32 | index     | Index.      |

### SwitchScene(String, LoadSceneMode)

<div class="markdown level1 summary">

Switches to a scene with a given name. Can only be called from Server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public SceneSwitchProgress SwitchScene(string sceneName, LoadSceneMode loadSceneMode = LoadSceneMode.Single)

#### Parameters

| Type                                      | Name          | Description                                     |
|-------------------------------------------|---------------|-------------------------------------------------|
| System.String                             | sceneName     | The name of the scene to switch to              |
| UnityEngine.SceneManagement.LoadSceneMode | loadSceneMode | The mode to load the scene (Additive vs Single) |

#### Returns

| Type                | Description         |
|---------------------|---------------------|
| SceneSwitchProgress | SceneSwitchProgress |

## Events

### OnNotifyClientAllClientsLoadedScene

<div class="markdown level1 summary">

Event that is invoked on the clients after all clients have successfully
completed scene transition or timed out. This event happens after
OnNotifyServerAllClientsLoadedScene fires on the server and the
MLAPI.Configuration.NetworkConstants.ALL\_CLIENTS\_LOADED\_SCENE message
is sent to the clients. It relies on MessageSender, which doesn't send
events from the server to itself (which is the case for a Host client).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate OnNotifyClientAllClientsLoadedScene

#### Event Type

| Type                                                          | Description |
|---------------------------------------------------------------|-------------|
| NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate |             |

### OnNotifyServerAllClientsLoadedScene

<div class="markdown level1 summary">

Event that is invoked on the server when all clients have reported that
they have completed scene transition

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate OnNotifyServerAllClientsLoadedScene

#### Event Type

| Type                                                          | Description |
|---------------------------------------------------------------|-------------|
| NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate |             |

### OnNotifyServerClientLoadedScene

<div class="markdown level1 summary">

Event that is invoked on the server when a client completes scene
transition

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkSceneManager.NotifyServerClientLoadedSceneDelegate OnNotifyServerClientLoadedScene

#### Event Type

| Type                                                      | Description |
|-----------------------------------------------------------|-------------|
| NetworkSceneManager.NotifyServerClientLoadedSceneDelegate |             |

### OnSceneSwitched

<div class="markdown level1 summary">

Event that is invoked when the scene is switched

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkSceneManager.SceneSwitchedDelegate OnSceneSwitched

#### Event Type

| Type                                      | Description |
|-------------------------------------------|-------------|
| NetworkSceneManager.SceneSwitchedDelegate |             |

### OnSceneSwitchStarted

<div class="markdown level1 summary">

Event that is invoked when a local scene switch has started

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkSceneManager.SceneSwitchStartedDelegate OnSceneSwitchStarted

#### Event Type

| Type                                           | Description |
|------------------------------------------------|-------------|
| NetworkSceneManager.SceneSwitchStartedDelegate |             |
