---  
id: MLAPI.SceneManagement.NetworkSceneManager  
title: MLAPI.SceneManagement.NetworkSceneManager  
---

<div class="markdown level0 summary" markdown="1">

Main class for managing network scenes

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_SceneManagement_NetworkSceneManager_syntax]

    public static class NetworkSceneManager

## Methods 

### AddRuntimeSceneName(String, UInt32) [MLAPI_SceneManagement_NetworkSceneManager_AddRuntimeSceneName_System_String_System_UInt32_]

<div class="markdown level1 summary" markdown="1">

Adds a scene during runtime. The index is REQUIRED to be unique AND the
same across all instances.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static void AddRuntimeSceneName(string sceneName, uint index)

#### Parameters [parameters]

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | sceneName | Scene name. |
| System.UInt32 | index     | Index.      |

### SwitchScene(String) [MLAPI_SceneManagement_NetworkSceneManager_SwitchScene_System_String_]

<div class="markdown level1 summary" markdown="1">

Switches to a scene with a given name. Can only be called from Server

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static SceneSwitchProgress SwitchScene(string sceneName)

#### Parameters [parameters-1]

| Type          | Name      | Description                        |
|---------------|-----------|------------------------------------|
| System.String | sceneName | The name of the scene to switch to |

#### Returns [returns]

| Type                | Description |
|---------------------|-------------|
| SceneSwitchProgress |             |

## Events

### OnSceneSwitched [MLAPI_SceneManagement_NetworkSceneManager_OnSceneSwitched]

<div class="markdown level1 summary" markdown="1">

Event that is invoked when the scene is switched

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static event NetworkSceneManager.SceneSwitchedDelegate OnSceneSwitched

#### Event Type [event-type]

| Type                                      | Description |
|-------------------------------------------|-------------|
| NetworkSceneManager.SceneSwitchedDelegate |             |

### OnSceneSwitchStarted [MLAPI_SceneManagement_NetworkSceneManager_OnSceneSwitchStarted]

<div class="markdown level1 summary" markdown="1">

Event that is invoked when a local scene switch has started

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static event NetworkSceneManager.SceneSwitchStartedDelegate OnSceneSwitchStarted

#### Event Type [event-type-1]

| Type                                           | Description |
|------------------------------------------------|-------------|
| NetworkSceneManager.SceneSwitchStartedDelegate |             |
