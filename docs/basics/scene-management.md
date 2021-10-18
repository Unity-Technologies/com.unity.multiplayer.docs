---
id: scene-management
title: Scene Management
sidebar_label: Scene Management
---

Netcode for GameObjects (Netcode) provides two paths for scene management through the `NetworkManager.EnableSceneManagement` property. A [scene](https://docs.unity3d.com/2021.1/Documentation/Manual/CreatingScenes.html) consists of the assets for all or part of your game. While simple games may only consist of one scene, your game may contain many scenes that require synchronization for loading and unloading as users play.

You can either *enable* or *disable* Netcode's Scene Management process.
* When **enabled** (*recommended*): Netcode handles the scene management process
* When **disabled**: Scene management is 100% up to you. Only advanced user should consider this option, and it would be worth exploring what features already exist before starting this from scratch.

To enable or disable scene management, check the **Enable Scene Management** box from the **NetworkManager** component of a **GameObject**. By default, scene management is *enabled*.

## Netcode Scene Management

Netcode scene management is handled by the [`NetworkSceneManager`](../api/Unity.Netcode.NetworkSceneManager.md) class.

:::bestpractice Best Practice
NetworkObjects saved in a specific scene should not be:
* Moved into other scenes
* Used to parent under dynamically [spawned](object-spawning.md) NetworkObjects
:::

The `NetworkSceneManager` supports two types of loading modes:

### Single Scene Loading
Single scene loading is nearly self-explanatory: only a single scene is loaded at one time. When a new scene loads, all existing scenes unload.

For example, a dungeon crawler game has individual scenes for each room. The entire scene loads at entry, and once your character moves to the next room, the previous room completely disappears. Returning to the previous room would cause the current room to unload and the previous room your character enters reloads, but your character cannot exist between both rooms at once. Each scene has a defined transition.

### Additive Scene Loading

Additive scene loading adds new scenes without unloading existing scenes. The scenes build on each other and can be thought of as pieces to a larger environment. The same additive scene can load multiple times, if needed.

It may help to think of this mode as games that have expansive levels or an open-world feel. The entire level doesn’t load at once, but builds as the character explores. And since the previous scenes don’t unload, the character can return to previous scenes without reloading. A character is able to move from scene to scene with almost no transition.

<!-- Explore the [Netcode Scene Management Golden Path](link) for step-by-step examples of additive scene loading and management. -->

:::contribution Special Thanks
This article would not have been possible without the hard work and support of Noel Stephens, Unity.
:::
