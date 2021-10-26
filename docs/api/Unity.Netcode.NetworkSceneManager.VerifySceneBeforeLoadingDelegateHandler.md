---  
id: Unity.Netcode.NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler  
title: Unity.Netcode.NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler  
---

<div class="markdown level0 summary">

Delegate declaration for the VerifySceneBeforeLoading handler that
provides an additional level of scene loading security and/or validation
to assure the scene being loaded is valid scene to be loaded in the
LoadSceneMode specified.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public delegate bool VerifySceneBeforeLoadingDelegateHandler(int sceneIndex, string sceneName, LoadSceneMode loadSceneMode);
```

##### Parameters

| Type          | Name            | Description                                            |
|---------------|-----------------|--------------------------------------------------------|
| System.Int32  | \*sceneIndex    | Build Settings Scenes in Build List index of the scene |
| System.String | \*sceneName     | Name of the scene                                      |
| LoadSceneMode | \*loadSceneMode | LoadSceneMode the scene is going to be loaded          |

##### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (valid) or false (not valid) |
