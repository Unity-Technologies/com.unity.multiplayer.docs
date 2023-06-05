---
id: Unity.Netcode.SceneEventProgressStatus
title: Unity.Netcode.SceneEventProgressStatus
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:37:50 pm
---

<div>

Used by NetworkSceneManager to determine if a server invoked scene event has started. The returned status is stored in the Unity.Netcode.SceneEventProgress.Status property. *Note: This was formally known as SwitchSceneProgress which contained the . All s are now delivered by the OnSceneEvent event handler via the SceneEvent parameter.*

</div>

<div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

```csharp
public enum SceneEventProgressStatus
```

## Fields

<table>
<colgroup>
<col />
<col />
</colgroup>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td
id="Unity_Netcode_SceneEventProgressStatus_InternalNetcodeError">InternalNetcodeError</td>
<td><p>This is used for internal error notifications.<br />
If you receive this event then it is most likely due to a bug
(<em>please open a GitHub issue with steps to replicate</em>).<br />
</p></td>
</tr>
<tr>
<td
id="Unity_Netcode_SceneEventProgressStatus_InvalidSceneName">InvalidSceneName</td>
<td><p>Returned if the scene name used with LoadScene(String,
LoadSceneMode) or UnloadScene(Scene)is invalid.</p></td>
</tr>
<tr>
<td id="Unity_Netcode_SceneEventProgressStatus_None">None</td>
<td><p>No scene event progress status can be used to initialize a
variable that will be checked over time.</p></td>
</tr>
<tr>
<td
id="Unity_Netcode_SceneEventProgressStatus_SceneEventInProgress">SceneEventInProgress</td>
<td><p>Returned if you try to start a new scene event before a previous
one is finished.</p></td>
</tr>
<tr>
<td
id="Unity_Netcode_SceneEventProgressStatus_SceneFailedVerification">SceneFailedVerification</td>
<td><p>Server side: Returned if the VerifySceneBeforeLoading delegate
handler returns false (<em>i.e. scene is considered not valid/safe to
load</em>).</p></td>
</tr>
<tr>
<td
id="Unity_Netcode_SceneEventProgressStatus_SceneNotLoaded">SceneNotLoaded</td>
<td><p>Returned if you try to unload a scene that was not yet
loaded.</p></td>
</tr>
<tr>
<td id="Unity_Netcode_SceneEventProgressStatus_Started">Started</td>
<td><p>The scene event was successfully started.</p></td>
</tr>
</tbody>
</table>
