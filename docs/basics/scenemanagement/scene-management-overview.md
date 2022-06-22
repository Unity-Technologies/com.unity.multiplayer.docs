---
id: scene-management-overview
title: Scene Management Overview
sidebar_label: Scene Management Overview
---
## Netcode Scene Management
Netcode scene management adds additional scenarios that increase the complexity when compared to single player scene management.  Below are a few questions that may have already come to mind:
- How do you determine which scenes should be synchronized between the server and connected clients?
  - When a client joins a game session late, how do you make sure the connecting client is properly synchronized with all spawned and despawned `NetworkObjects`?
- What kind of scene loading model do you plan to use?
  - The bootstrap usage pattern where additive scene loading is predominantly used?
    - Typically the bootstrap scene is always the very first scene loaded and all subsequent scenes are additively loaded and unloaded 
  - The more linear scene transitioning ("scene switching") usage pattern where migrating between regions of your netcode game session "world" will typically unload all additively loaded scenes prior to loading the new scene
    - Once the new scene is loaded (using `LoadSceneMode.Single`), you might still need to load additional scenes additively.
- How do you know when all of the clients have loaded a scene, synchronized all newly instantiated netcode related objects, and are considered "ready"?
  - How do you handle situations where a client might disconnect while a scene transition ("Scene Switching Pattern") was in progress?
- (_and many more depending upon your project's goals and/or requirements_)

Generally speaking, scene management complexity can vary from being very complicated to not so complicated depending upon your project's needs and goals. Netcode for GameObjects (Netcode) provides you with two potential paths:

### Integrated Scene Management:  
- The scene management solution that comes with Netcode for GameObjects.
  - This is enabled by default and provides you with a fully functional netcode scene management solution.
  - ([Start Learning About Integrated Scene Management](using-networkscenemanager.md))

### Custom Scene Management: 
  - We highly recommend giving the integrated scene management a try before diving into writing your own scene management solution, but if your project has needs that go beyond the scope of the integrated scene management solution you can disable scene management in the `NetworkManager`'s properties.
    - _Recommended only for advanced users that are already familiar with Netcode for GameObjects_
    - ([Start Learning About Custom Scene Management](custom-management.md))




