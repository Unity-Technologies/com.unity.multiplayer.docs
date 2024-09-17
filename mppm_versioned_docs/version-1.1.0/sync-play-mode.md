---
id: synchronize
title: Synchronize with Play mode
description: Understand how Multiplayer Play Mode synchronizes with Play mode for multiplayer testing.
---

Multiplayer Play Mode syncs the main Editor Player and [Virtual Players](../virtual-players) when you enter [Play Mode](https://docs.unity3d.com/Manual/GameView.html) in the Unity Editor. You control Multiplayer Play Mode the same way you control Play Mode with the Toolbar buttons.

| Toolbar Button | Function |
| --- | --- |
| **Play** | Runs all activated Players (main Editor Player and Virtual Players) |
| **Pause** | Pauses all activated Players (main Editor Player and Virtual Players) |
| **Step** | Performs a single-frame step for all activated Players (main Editor Player and Virtual Players) |


You can change the layout of the **Multiplayer Play Mode** window with the **Layout** dropdown. To learn more, refer to [Change the layout of a Virtual Player](virtual-players-layout).

:::note
If you enable Error Pause in the [Console](https://docs.unity3d.com/Manual/Console.html) toolbar of any Player, all Virtual Players pause when you call `Debug.LogError` from a script.
:::
