---
id: netscenevis
title: Network Scene Visualization
---

Network Scene Visualization (NetSceneVis) is a powerful, user-friendly tool included in the Multiplayer Tools package to help you visualize and debug network communication on a per-object basis in the Unity Editor Scene View of your project with visualizations such as mesh shading and text overlay.

The NetSceneVis tool listens to network messages about the game state to visually display bandwidth and ownership on a per-object basis in the Unity Editor. The visualizations are updated in real-time as the network messages are sent and received, showing the game state synchronization across the network.

This tool can help you optimize and debug your network code to ensure that your game runs smoothly for all players.

## Requirements

- Unity 2023.2.0a11 or higher
- Multiplayer Tools package 2.0.0-pre.2 or higher, see [Install the Multiplayer Tools Package](./install-tools.md)

## Using Network Scene Visualization

After [installing the Multiplayer Tools package](#requirements), the Network Visualization toolbar is available in the scene view of the Unity Editor. This toolbar includes the options to visualize networking information per-object of your game.

![Screenshot of the Network Scene Visualization toolbar in the scene view of the Unity Editor](/img/tools/netscenevis-1.png)

Hovering over each option under **Bandwidth**, **Ownership**, and **Settings** reveals detailed tooltips for each option.

### Bandwidth

Selecting **Bandwidth Mode** displays the bandwidth usage of each object.

| Option | Description |
|---|---|
| *Type* | Filter the bandwidth by type: network variables (**NetVars**), **RPCs**, or **All**. **All** includes spawn, despawn, ownership change, network variables, and RPCs. |
| *Direction* | Filter bandwith by direction: **Sent**, **Received**, or **Sent and Received**. |
| *Smoothing* | Smooth the bandwidth data over time. Higher values improve readability by filtering out sudden data changes. This option is disabled when paused. |
| *Text Overlay* | Visualize the per-object bandwith with text labels. |
| *Shading* > *Auto Scale* | Automatically scales the mesh shading visualization to the current maximum per-object bandwidth of any object in the scene. The minimum bandwidth will always be 0. |
| *Shading* > *Min/Max Bandwidth Bar* | When **Auto Scale** is unchecked, you can manually choose the min and max bandwidth values. The color bar can be changed between 4 options. The color bar can be changed when **Auto Scale** is checked or unchecked. |

### Ownership

Selecting **Ownership Mode** displays the ownership of each object, either by the server, host, or by a specific client.

| Option | Description |
|---|---|
| *Text Overlay* | Visualize the per-object ownership with text labels. |
| *Shading* | Visualize the per-object ownership with a colored overlay. |

### **MeshShading** settings

These settings are only available when **MeshShading** is enabled.

You can toggle the **Outline** option to display a black outline around networked objects to improve visibility in the scene and distinguish between overlapping networked objects.

The **Saturation (%)** controls the saturation of non-networked objects so networked objects can stand out more. The scale goes from 0 as grayscale to 100 for full color.

### Custom colors

You can assign custom colors to servers or clients in your visualization by clicking on the color field you want to change. Any custom colors you assign are saved with your project and can be reset using the right-click context menu.

Custom colors also synchronize across [Multiplayer Play Mode](https://docs-multiplayer.unity3d.com/mppm/current/about/) players when in Play mode.
