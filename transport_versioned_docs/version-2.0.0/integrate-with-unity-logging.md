---
id: integrate-logging
title: Integrate with Unity Logging
---

Unity Transport integrates well with the Unity Logging package (`com.unity.logging`), an efficient alternative to the standard Unity logger. Normally, log messages go through `UnityEngine.Debug.Log`. However, if you include both packages in a project, Unity Transport automatically uses `Unity.Loggin`g with the default logger settings.

Check the [`Unity.Logging` documentation site](https://docs.unity3d.com/Packages/com.unity.logging@latest) for more information on how to adjust specific log settings.
