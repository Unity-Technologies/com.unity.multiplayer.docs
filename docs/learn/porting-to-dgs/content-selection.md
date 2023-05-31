---
id: content-selection
title: Content Selection
---

When building a [Dedicated Games Server](https://docs.unity3d.com/Manual/dedicated-server.html), content of a scene may differ between the client and server versions. For example, the cameras, rendering, and UI components may not be required on the server side, and server-related managers should not be included client side.

To optimize your builds, you can select what [game objects](#game-object-selection), [components](#component-selection), and [prefab assets](#prefab-assets-and-instances) are present in different server build targets: **Standalone** or **Dedicated Server**. You can select each part of a scene to be stripped individually, by [search criteria](#selection-by-search), or [automatically](#automatic-selection) from the build target.

## Game Object Selection

Allows to select which Game Objects should be present/removed in the different multiplayer targets. When building or entering play mode, Unity will automatically strip the corresponding Game Objects (and all its children).

## Component Selection

Allows to select which specific Components should be present/removed from its Game Object in the different multiplayer targets. When building or entering play mode, Unity will automatically strip the corresponding Components.

## Selection by Search

Allows to select multiple GameObjects of Components given a search criteria.

### Prefab Assets and Instances

Similar to Game Objects above, with one difference:

## Automatic Selection

You can choose the specific Components and subclasses that Unity automatically strips when building or entering play mode.

1. Go to **Edit** and select **Project Settings**.
2. Under the **Multiplayer** dropdown in the **Project Settings** window, select **Content Selection**.
3. From the **Server** tab, you can select to strip *Rendering*, *UI*, or *Audio* components.
4. Use the **Add** and **Remove** buttons to choose custom components to strip by name. You can also strip custom components on the **Client** tab.
5. Click on **Apply** after making your selections to save your changes.

When selecting the following preset options, Unity removes the corresponding components:

| Component Type | Corresponding Stripped Components |
|---|---|
| Rendering Components | **Camera** </ br> **Light** </ br> All components inheriting from **Render** |
| UI Components | All components in the `UnityEngine.UI` namespace </ br> All components in the `UnityEngine.EventSystems` namespace </ br> `UnityEngine.UIElements.PanelEventHandler` </ br> `UnityEngine.UIElements.PanelRaycaster` |
| Audio Components | `UnityEngine.AudioSource` </ br> `UnityEngine.AudioLowPassFilter` </ br> `UnityEngine.AudioHighPassFilter` </ br> `UnityEngine.AudioReverbFilter` </ br> `UnityEngine.AudioListener` </ br> `UnityEngine.AudioReverbZone` </ br> `UnityEngine.AudioDistortionFilter` </ br> `UnityEngine.AudioEchoFilter` </ br> `UnityEngine.AudioChorusFilter` |