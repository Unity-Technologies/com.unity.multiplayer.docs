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

    public static class NetworkSceneManager

## Methods 

### AddRuntimeSceneName(String, UInt32)

<div class="markdown level1 summary">

Adds a scene during runtime. The index is REQUIRED to be unique AND the
same across all instances.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void AddRuntimeSceneName(string sceneName, uint index)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | sceneName | Scene name. |
| System.UInt32 | index     | Index.      |

### SwitchScene(String)

<div class="markdown level1 summary">

Switches to a scene with a given name. Can only be called from Server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static SceneSwitchProgress SwitchScene(string sceneName)

#### Parameters

| Type          | Name      | Description                        |
|---------------|-----------|------------------------------------|
| System.String | sceneName | The name of the scene to switch to |

#### Returns

| Type                | Description |
|---------------------|-------------|
| SceneSwitchProgress |             |

## Events

### OnSceneSwitched

<div class="markdown level1 summary">

Event that is invoked when the scene is switched

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static event NetworkSceneManager.SceneSwitchedDelegate OnSceneSwitched

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

    public static event NetworkSceneManager.SceneSwitchStartedDelegate OnSceneSwitchStarted

#### Event Type

| Type                                           | Description |
|------------------------------------------------|-------------|
| NetworkSceneManager.SceneSwitchStartedDelegate |             |
