---
id: synchronize
title: Synchronize with Play mode
description: Understand how Multiplayer Play Mode synchronizes with Play mode for multiplayer testing.
---

**Multiplayer Play Mode (MPPM)** syncs the **Main Editor** and [**Virtual Players**](../virtual-players) when you enter [**Play mode**](https://docs.unity3d.com/Manual/GameView.html) in the **Unity Editor**. You control **MPPM** the same way you control **Play mode** with the **Toolbar** buttons.

| Toolbar Button | Function |
| --- | --- |
| **Play** | Runs all activated **Players** (**Main Editor** and **Virtual Players**) |
| **Pause** | Pauses all activated **Players** (**Main Editor** and **Virtual Players**) |
| **Step** | Performs a single-frame step for all activated **Players** (**Main Editor** and **Virtual Players**) |

:::note
If you enable **Error Pause** in the [**Console**](https://docs.unity3d.com/Manual/Console.html) toolbar of any **Player**, all **Virtual Players** pause when you call `Debug.LogError` from a script.
:::