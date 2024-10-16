---
id: hierarchy-network-debug
title: Hierarchy Network Debug View
---

The Hierarchy Network Debug View allows you to visually identify ownership of networked objects in your Unity project.

## Requirements

* Unity Editor version 6 or later.
* Multiplayer Tools package version 2.2.1 or later.

## Using the Hierarchy Network Debug View

You can enable the Hierarchy Network Debug View by navigating to **Window** > **Multiplayer Tools** and selecting **Enable** next to it in the list of tools.

When enabled, it provides an overlay on the right-hand side of your **Hierarchy** window that identifies which objects are networked (with a small network cube logo).

When you enter Play mode it also shows who owns the object (client ID), and whether the current client has ownership of this object (purple crown over network logo). This overlay can be particularly useful when working on [distributed authority](https://docs-multiplayer.unity3d.com/netcode/current/terms-concepts/distributed-authority/) multiplayer projects.

![Screenshot of the Hierarchy Network Debug View enabled](/img/tools/HierarchyOverlayOn.png)

You can also use the Hierarchy Network Debug View in conjunction with the [Network Scene Visualization tool](network-scene-viz.md).

![Screenshot of the Hierarchy Network Debug View enabled with Network Scene Visualization tool](/img/tools/HierarchyOverlayAndNetSceneVis.png)
