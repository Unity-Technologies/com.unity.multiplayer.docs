---
id: using-networkscenemanager
title: Using NetworkSceneManager
sidebar_label: Using NetworkSceneManager
---

## Netcode for GameObjects Scene Management

Netcode scene management provides you with:
- an existing framework that generically suppots both the bootstrap and scene transitioning scene management usage patterns
- automatic client synchronization that occurs when a client is connected and approved  
  - all scenes loaded via `NetworkSceneManager` will be considered during client synchronization
    - Later in this document, you will learn more about using scene validation to control this on either the client or server side
  - All spawned netcode objects are synchronized
- scene event notifications   
  - scene event progress tracking
    - the server keeps track of the clients that have finished processing a scene event
  - this is covered in detail under the scene event notification section of this document
 - in-scene placed `NetworkObject` soft synchronization
  
In order to start using the built-in Netcode scene management, there are a few concepts one must be aware of before using it.  

### Accessing `NetworkSceneManager`
The first place to start is understanding how to access the [`NetworkSceneManager`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkSceneManager).  `NetworkSceneManage` can be accessed in the following ways:
-  From within a `NetworkBehaviour` derived component, you can access it by using `NetworkManager.SceneManager`
-  From anything else that does not already have a reference to `NetworkManager`, you can access it using `NetworkManager.Singleton.SceneManager.

Here are some genral rules about accessing and using `NetworkSceneManager`:
- Do not try to access the `NetworkSceneManager` when the `NetworkManager` is shutdown (it won't exist).
  - The `NetworkSceneManager` is only instantiated when a `NetworkManager` is started.
- As a server:
  -  Any scene you want clients to synchronize (i.e. load and spawn any netcode objects), you **must** use the `NetworkSceneManager`
    - If you use the `UnityEngine.SceneManagement.SceneManager` during a netcode enabled game session, then those scenes will not be synchronized with clients (currently connected or late joining)
  -  you don't need to wait for a client to connect before you start loading scenes using the `NetworkSceneManager`
    - any scene loaded via `NetworkSceneManager` will always default to being synchronized with clients
      - _there are ways to control this explained later in this document_

:::warning
Do not try to access the `NetworkSceneManager` when the `NetworkManager` is shutdown.  The `NetworkSceneManager` is only instantiated when a `NetworkManager` is started.  As a server you don't need to wait for a client to connet to start loading scenes
:::

### Loading a Scene

- 

`NetworkManager.EnableSceneManagement` property. A [scene](https://docs.unity3d.com/2021.1/Documentation/Manual/CreatingScenes.html) consists of the assets for all or part of your game. While simple games may only consist of one scene, your game may contain many scenes that require synchronization for loading and unloading as users play.

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