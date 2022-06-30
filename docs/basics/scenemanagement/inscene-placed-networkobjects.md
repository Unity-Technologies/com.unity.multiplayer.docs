---
id: inscene-placed-networkobjects
title: In-Scene (Placed) NetworkObjects
sidebar_label: In-Scene NetworkObjects
---

## Introduction
At this point, you have most likely run across the term "in-scene placed NetworkObject" or "in-scene NetworkObject" several times.  An in-scene placed `NetworkObject` means a `GameObject` with a `NetworkObject` component was added to a scene from within the editor. 

### In-Scene Placed Network Prefab Instances
A common design pattern for commonly used in-scene placed `NetworkObject`s is to make it a Network Prefab so all you have to do to replicate the same functionality is drop a Network Prefab instance into a scene you are editing.  Additionally, you are not required to register the Network Prefab with the NetworkManager as in-scene placed `NetworkObjects` are registered internally, when scene management is enabled, for tracking and identification purposes.

### In-Scene Placed vs Dynamically Spawned
The instantiation of an in-scene placed `NetworkObject` is handled during the loading of the scene.  Once the scene is loaded, an in-scene `NetworkObject` will be automatically spawned.  Prior to being spawned, during the scene loading process, both the `Awake` and `Start` methods are invoked.

:::important
In comparison, a "dynamically spawned" `NetworkObject` is when a "Network(ed) Prefab" is instantiated and spawned during runtime by code specific to your project.  `NetworkBehaviour.OnNetworkSpawn` is invoked first then `Awake` and then `Start`.  The order in which `NetworkBehaviour.OnNetworkSpawn` is invoked relative to these two methods is important to remember if you are initializing any form of Netcode related properties within `Awake` or `Start` when using the same Network Prefab for both in-scene placed and dynamically spawned `NetworkObject`s.  
:::

## Using In-Scene Placed NetworkObjects
Since there are additional complexities involved with in-scene placed `NetworkObject`s, some use cases are more easily achieved through dynamically spawned `NetworkObjects` or through a combination of both types. While Netcode for GameObjects has made many improvements with in-scene placed `NetworkObjects`, there are still special edge case scenarios that you have to take into consideration.

### Static Objects
There are many scenarios where you might just need to use the in-scene placed `NetworkObject` to keep track of when a door is opened, a button pushed, a lever pulled, and any other "toggle oriented" type of state.  This is what we consider "static objects":
 - They are "statically" spawned while its originating scene is loaded and only despawned when its originating scene is unloaded.
    - The originating scene is the scene that the in-scene `NetworkObject` was placed.
 - They are typically associated with some world object that is visible to the players.
 - They aren't migrated into other scenes or parented under another `NetworkObject`
    - _Think of a draw bridge that comes down when a certain game state is reached, the draw bridge is most likely connected to some castle or perhaps a section of the castle and would never need to be migrated to another scene._
 This usage pattern is possibly the least complex ways to use an in-scene placed `NetworkObject`.

### Netcode Managers
An in-scene placed `NetworkObject` used as a netcode manager could range from handling game states to a `NetworkObject` spawn manager (pooled or not). Typically, a manager will stay instantiated and spawned as long as the scene it was placed within remains loaded.  For scenarios where you want to keep a global game state, the recommended solution is to place the in-scene `NetworkObject` in an additively loaded scene that remains loaded for the duration of your network game session.  

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
The most common mistake when using an in-scene placed `NetworkObject` is to try and use it like a dynamically spawned `NetworkObject`. When trying to decide if you should use an in-scene place or dynamically spawned `NetworkObject`, you should ask yourself the following questions:
- Will it be spawned and despawned more than once?
- Could it be parented, at runtime, under another `NetworkObject`?
    - Does the parent exist in a different scene than the originating scene of the in-scene placed `NetworkObject'?
- Excluding any special case DDoL scenarios, will it be moved into another scene other than the originating scene?
- Does it dynamically spawn NetworkObjects and then immediately parent the instances under itself?

If you answered yes to any of the above questions, then using only and in-scene placed `NetworkObject` to implement your feature is most likely not the right choice.  However, just because you did answer yes to one or more of the above questions doesn't mean you shouldn't use an in-scene placed `NetworkObject` either.  While the previous two sentences might seem puzzling, there are scenarios where the "best choice" (regarding simplicity and modularity) is to use a hybrid approach by using a combination of both!  

**A Hybrid Approach Example** <br/>
Perhaps your project's design includes making some world items that can either be consumed (i.e. health) or picked up (weapons, items, etc) by players. Initially, using an in-scene placed `NetworkObject` might seem like the best approach for this world item feature.  

:::info
Using a single in-scene placed Network Prefab instance  if you want to change the world item art assets and logic you could most likely need to create a new Network Prefab for each unique world item or have some semi-complex set of properties that   the different art assets for your new consumable or item.  Additionally, you most likely won't be able to just "plug in" the unique item or consumable Network Prefab into say a pooled spawn manager because it is designed with the in-scene placed instantiation flow (i.e. Start and Awake are invoked prior to it being spawned) which can sometimes become problematic.
:::

However, there is another way to accomplish the very same thing while keeping a clear defining line between dynamically spawned and in-scene placed `NetworkObject`s. As opposed to lumping everything into a single NetworkPrefab and handling the additional complexities involved with in-scene placed `NetworkObject`s, you could create two Network Prefabs:

1. A consumable or item Network Prefab: this will be dynamically spawned and so you can re-use this Network Prefab with any spawn manager (pooled or single).
2. A "single spawn manger": this will spawn the consumable or item Network Prefab.  The single-spawn manager could spawn the dynamically spawned `NetworkObject` at its exact location with an option to use the same rotation and scale or could have a list of GameObjects that are used only as spawn points.

Using this approach allows you to:
1. Re-use the same single spawn manager with any other Network Prefab registered with the `NetworkManager`
2. Not worry about the complexities involved with treating an in-scene placed `NetworkObject` like a dynamically spawned one.



(Reference Object Spawning-->Pooled Dynamic Spawning example)



