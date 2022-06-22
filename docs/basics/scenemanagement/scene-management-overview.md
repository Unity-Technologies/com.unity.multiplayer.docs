---
id: scene-management-overview
title: Scene Management Overview
sidebar_label: Scene Management Overview
---

When thinking about Scene Management from a netcode perspective, there are several things one might want to take into consideration:
- How do you determine which scenes should be synchronized between the server and connected client(s)?
  - When a client joins a game session late, how do you make sure the connecting client is properly synchronized with all spawned and despawnd `NetworkObjects`?
- What kind of scene loading model do you plan to use?
  - The bootstrap usage pattern where additive scene loading is predominantly used?
    - Typically the bootstrap scene is always the very first scene loaded and all subsequent scenes are additively loaded and unloaded 
  - The more linear scene transitioning ("scene switching") usage pattern where migrating between regions of your netcode game session "world" will typically unload all additively loaded scenes prior to loading the new scene
    - Once the new scene is loaded (using `LoadSceneMode.Single`), you might still need to load additional scenes additively.
- How do you know when all of the clients have loaded a scene, sycnrhoized all newly instantiated netcode related objects, and are considered "ready"?
  - How do you handle situations where a client might disconnect while a scene transition ("Scene Switching Pattern") was in progress?
- (_and many more depending upon your project's goals and/or requirements_)

Generally speaking, scene management complexity can vary from being very complicated to not so complicated depending upon your project's needs and goals. Netcode for GameObjects (Netcode) provides you with two potential paths:
- Use the Netcode for GameObjects scene management solution by enabling scene management in the `NetworkManager` 
  - this is enabled by default
- Use your own scene management solution by disabling scene management in the `NetworkManager`
  - _Recommended only for advanced users that are already familiar with Netcode for GameObjects use this path_



