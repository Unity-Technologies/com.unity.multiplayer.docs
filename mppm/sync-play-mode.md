---
id: synchronize
title: Synchronize with Play mode
description: Understand how Multiplayer Play Mode synchronizes with Play mode for multiplayer testing.
---

Multiplayer Play Mode syncs the Main Editor and [Virtual Players](../virtual-players) when you enter [Play Mode](https://docs.unity3d.com/Manual/GameView.html) in the Unity Editor. You control Multiplayer Play Mode the same way you control Play Mode with the Toolbar buttons.

| Toolbar Button | Function |
| --- | --- |
| **Play** | Runs all activated Players (Main Editor and Virtual Players) |
| **Pause** | Pauses all activated Players (Main Editor and Virtual Players) |
| **Step** | Performs a single-frame step for all activated Players (Main Editor and Virtual Players) |

In the toolbar of the **Play Mode** window, you can adjust the layout with the **Layout** dropdown. You can select and deselect the **Console**, **Game**, **Hierarchy**, **Inspector**, and **Scene**. Select **Apply** to implement your changes to the layout.

:::note
If you enable Error Pause in the [Console](https://docs.unity3d.com/Manual/Console.html) toolbar of any Player, all Virtual Players pause when you call `Debug.LogError` from a script.
:::
