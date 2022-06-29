---
id: inscene-placed-networkobjects
title: In-Scene (Placed) NetworkObjects
sidebar_label: In-Scene NetworkObjects
---

## Introduction
At this point, you have most likely run across the term "in-scene placed NetworkObject" or "in-scene NetworkObject" several times.  An in-scene placed `NetworkObject` means a `GameObject` with a `NetworkObject` component was added to a scene from within the editor. 


### In-Scene Placed vs Dynamically Spawned
The instantiation of an in-scene placed `NetworkObject` is handled during the loading of the scene.  Once the scene is loaded, an in-scene `NetworkObject` will be automatically spawned.  Prior to being spawned, during the scene loading process, both the `Awake` and `Start` methods are invoked.

:::important
In comparison, a "dynamically spawned" `NetworkObject` is when a "Network(ed) Prefab" is instantiated and spawned during runtime by code specific to your project.  `NetworkBehaviour.OnNetworkSpawn` is invoked first then `Awake` and then `Start`.  The order in which `NetworkBehaviour.OnNetworkSpawn` is invoked relative to these two methods is important to remember if you are initializing any form of Netcode related properties within `Awake` or `Start` when using the same Network Prefab for both in-scene placed and dynamically spawned `NetworkObject`s.  
:::

## Using In-Scene Placed `NetworkObject`s
Since there are additional complexities involved with in-scene placed `NetworkObject`s, some use cases are more easily achieved through dynamically spawned `NetworkObjects` or through a combination of both types. While Netcode for GameObjects has made many improvements with in-scene placed `NetworkObjects`, there are still special edge case scenarios that you have to take into consideration.

Using In-scene placed `NetworkObject`s for netcode management oriented  tasks that typically don't involve despawning and respawning the in-scene placed `NetworkObject` or parenting it under a dynamically spawned `NetworkObject`, is recommended and the least complex way to use in-scene placed `NetworkObjects`.  

### Static Objects
There are many scenarios where you might just need to use the in-scene placed `NetworkObject` to keep track of when a door is opened, a button pushed, a lever pulled, and any other "toggle oriented" type of state.  This is what we consider "static objects".  They are only "despawned" when the associated scene is unloaded (i.e. statically spawned while the scene is loaded) and would never be migrated to another scene or parented under another `NetworkObject`.  This usage pattern is possibly the least complex ways to use an in-scene placed `NetworkObject`.

### Netcode Managers
An in-scene placed `NetworkObject` used as a manager could range from handling game states to a `NetworkObject` spawn manager (pooled or not). Typically, a manager will stay instantiated and spawned as long as the scene it was placed within remains loaded.  For scenarios where you want to keep a global game state, the recommended solution is to place the in-scene `NetworkObject` in an additively loaded scene that remains loaded for the duration of your network game session.  

If you are using "Scene Switching" (i.e. loading a scene in LoadSceneMode.Single), then you can migrate the in-scene placed `NetworkObject` into the DDoL by sending its `GameObject` to the DDoL like in the code snippet provided below:

```csharp
private void Start()
{
    // Do not use this for Dynamically spawned NetworkObjects
    DontDestroyOnLoad(gameObject);
}
```
:::warning
Once migrated into the DDoL, migrating the in-scene placed `NetworkObject` back into a different scene after it has already been spawned will cause soft synchronization errors with late joining clients.  Once in the DDoL it should stay in the DDoL.  This is only for scene switching, if you are not using scene switching then it is recommended to use an additively loaded scene and keep that scene loaded for as long as you wish to persist the in-scene placed `NetworkObject`(s) in question.
:::

While using an in-scene placed `NetworkObject` as a manager does have some complexities involved when you wish to persist it while also using "Scene Switching", this is still considered one of the least complex ways to use an in-scene placed `NetworkObject`.

### Complex In-Scene NetworkObject Managers
The most common mistake when using an in-scene placed `NetworkObject` is when you start trying to use it as if it was a dynamically spawned `NetworkObject`. When trying to decide if you should use an in-scene place or dynamically spawned `NetworkObject`, you should ask yourself the following questions:
- Will it be spawned and despawned more than once?
- Could it be parented, at runtime, under another `NetworkObject`?
    - Does the parent exist in a different scene than the originating scene of the in-scene placed `NetworkObject'?
- Excluding any special case DDoL scenarios, will it be moved into another scene other than the originating scene?

If you answered yes to any of the above questions, then perhaps an in-scene placed `NetworkObject` is not the right choice for the feature you are trying to implement.  However, now you need to decide whether your feature requires a companion in-scene placed `NetworkObject` or not...right?  

Actually, sometimes the best answer is to pick both!

**A Hybrid Use Case Scenario**
Imagine your project requires you to create some form of object that could be either consumed by players (i.e. health) or picked up (weapons, items, etc). The most common tendency is to just make a Network Prefab and then create an in-scene placed instance of that Network Prefab in your scene. Of course, if you want to change what is being consumed or picked up then you will most likely need to create a new Network Prefab with the different art assets for your new consumable or item.  Additionally, you most likely won't be able to just "plug in" the unique item or consumable Network Prefab into say a pooled spawn manager because it is designed with the in-scene placed instantiation flow (i.e. Start and Awake are invoked prior to it being spawned) which can sometimes become problematic.

However, there is another way to accomplish the very same thing while keeping a clear defining line between dynamically spawned and in-scene placed `NetworkObject`s. As opposed to lumping everything into a single NetworkPrefab and handling the additional complexities involved with in-scene placed `NetworkObject`s, you could create two Network Prefabs:

1. A consumable or item Network Prefab: this will be dynamically spawned and so you can re-use this Network Prefab with any spawn manager (pooled or single).
2. A "single spawn manger": this will spawn the consumable or item Network Prefab.  The single-spawn manager could spawn the dynamically spawned `NetworkObject` at its exact location with an option to use the same rotation and scale or could have a list of GameObjects that are used only as spawn points.

Using this approach allows you to:
1. Re-use the same single spawn manager with any other Network Prefab registered with the `NetworkManager`
2. Not worry about the complexities involved with treating an in-scene placed `NetworkObject` like a dynamically spawned one.



(Reference Object Spawning-->Pooled Dynamic Spawning example)



