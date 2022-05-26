---  
id: Unity.Netcode.SceneEventProgressStatus  
title: Unity.Netcode.SceneEventProgressStatus  
---

<div class="markdown level0 summary">

Used by NetworkSceneManager to determine if a server invoked scene event
has started. The returned status is stored in the
Unity.Netcode.SceneEventProgress.Status property.  
*Note: This was formally known as SwitchSceneProgress which contained
the . All s are now delivered by the OnSceneEvent event handler via the
SceneEvent parameter.*

</div>


##### Syntax

<div class="codewrapper">

``` lang-csharp
public enum SceneEventProgressStatus
```

</div>

### Fields

Name

Description

InternalNetcodeError

This is used for internal error notifications.  
If you receive this event then it is most likely due to a bug (*please
open a GitHub issue with steps to replicate*).  

InvalidSceneName

Returned if the scene name used with LoadScene(String, LoadSceneMode) or
UnloadScene(Scene)is invalid.

None

No scene event progress status can be used to initialize a variable that
will be checked over time.

SceneEventInProgress

Returned if you try to start a new scene event before a previous one is
finished.

SceneFailedVerification

Server side: Returned if the VerifySceneBeforeLoading delegate handler
returns false (*i.e. scene is considered not valid/safe to load*).

SceneNotLoaded

Returned if you try to unload a scene that was not yet loaded.

Started

The scene event was successfully started.

