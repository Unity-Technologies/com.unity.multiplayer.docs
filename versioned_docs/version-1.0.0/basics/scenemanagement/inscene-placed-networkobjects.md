---
id: inscene-placed-networkobjects
title: In-Scene (Placed) NetworkObjects
sidebar_label: In-Scene NetworkObjects
---
:::caution
If you haven't already read the [Using NetworkSceneManager](using-networkscenemanager.md) section, it's highly recommended to do so before proceeding.
:::

## Introduction
At this point, you have most likely run across the term "in-scene placed NetworkObject" or "in-scene NetworkObject" several times.  An in-scene placed `NetworkObject` means a `GameObject` with a `NetworkObject` component was added to a scene from within the editor. There are many uses for in-scene placed `NetworkObjects`, which includes but isn't limited to:
- Management systems
  - An example would be a `NetworkObject` pool managent system that dynamically spawns Network Prefabs.
- Interactive "world objects" that are typically easier to place in-scene than spawn
  - An example of this would be a door that can only be unlocked by a key (or the like), if a player unlocks it you want other players to know about it being unlocked and making it an in-scene placed `NetworkObject` simplifies the positioning of the door relative to the other surrounding world geometry.
 - "Scene Static" visual elements
   - An example of this might be a heads up display (HUD) that includes information about other items or players (that is, radar or the like)
   - Another example might be some form of platform or teleporter that moves a player from one location to the next when a player enters a trigger or uses an object.

:::tip
Items that can be picked up are typically better to implement as a "hybrid" approach where you use both an in-scene placed and a dynamically spawned `NetworkObject`.  The in-scene placed `NetworkObject` is commonly used to configure additional information about the item (what kind, does another one respawn after the other one is picked up and if so how much time should it wait before spawning a new item, etc.) while the dynamically spawned object is the item itself.  The hybrid approach is explained in more detail below in this section.
:::

### In-Scene Placed vs. Dynamically Spawned `NetworkObjects` (Order of Operations)
Because in-scene placed `NetworkObject`s are instantiated when a scene loads, they have a different order of operations to that of dynamically spawned `NetworkObject`s when it comes to spawning:

Dynamically Spawned | In-Scene Placed
------------------- | ---------------
Awake               | Awake
OnNetworkSpawn      | Start
Start               | OnNetworkSpawn

Looking at the above table, we can quickly see that "spawning" occurs after `Awake` but before `Start` for dynamically spawned `NetworkObject`s, but for in-scene placed `NetworkObject`s it occurs afterboth Awake and Start are invoked.  As mentioned before, in-scene placed `NetworkObject`s are instantiated when the scene is loaded which means both the `Awake` and the `Start` methods are invoked before an in-scene placed `NetworkObject` being spawned. This distinct difference is important to keep in mind when doing any form of dependency related initializations that might require an active network session.  This is especially important to consider when you are using the same `NetworkBehaviour` component with both dynamically and in-scene placed `NetworkObjects`.

### In-Scene Placed Network Prefab Instances
A common "usage" design pattern for often used in-scene placed `NetworkObject`s is to make it a Network Prefab to simplify the replication process to achieve the functionality. With network prefabs, you can easily use the "drag & drop" approach when editing a scene.  Another benefit of in-scene placed `NetworkObject`s is that they don't required you to register them with the NetworkManager. In-scene placed `NetworkObjects` are registered internally, when scene management is enabled, for tracking and identification purposes.

### Creating In-Scene Placed Network Prefab Instances
In order to create a Network Prefab that can be used as an in-scene placed `NetworkObject` you must do the following:
1. In the scene you wish to create the instance (or any open scene) create an empty GameObject and add a `NetworkObject` component to it.
2. Add any other `NetworkBehaviour`s required by your in-scene placed `NetworkObject`.
3. Drag and drop the newly created GameObject into your Prefab (or associated) folder.
4. Delete the GameObject instance in your scene (this is *required* to get a proper GlobalObjectIdHash value assigned)
5. Finally, drag and drop an instance of your newly created Network Prefab into the scene you wish to have an instance of your in-scene placed `NetworkObject`.

## Using In-Scene Placed NetworkObjects
Since there are additional complexities involved with in-scene placed `NetworkObject`s, some use cases are more easily achieved through dynamically spawned `NetworkObjects` or through a combination of both types. While Netcode for GameObjects has made many improvements with in-scene placed `NetworkObjects`, there are still special edge case scenarios that you have to take into consideration.

### Static Objects
There are many scenarios where you might just need to use the in-scene placed `NetworkObject` to keep track of when a door is opened, a button pushed, a lever pulled, and any other "toggle oriented" type of state.  This is what we consider "static objects":
 - They're "statically" spawned while its originating scene is loaded and only de-spawned when its originating scene is unloaded.
    - The originating scene is the scene that the in-scene `NetworkObject` was placed.
 - They're typically associated with some world object that is visible to the players (that is, door, switch, etc.)
 - They'ren't migrated into other scenes or parented under another `NetworkObject`
    - _Think of a draw bridge that comes down when a certain game state is reached, the draw bridge is most likely connected to some castle or perhaps a section of the castle and would never need to be migrated to another scene._
 This usage pattern is possibly the least complex ways to use an in-scene placed `NetworkObject`.

### Netcode Managers
An in-scene placed `NetworkObject` used as a netcode manager can range from handling game states (that is, player scores) to a `NetworkObject` spawn manager (pooled or not). Typically, a manager will stay instantiated and spawned as long as the scene it was placed in remains loaded.  For scenarios where you want to keep a global game state, the recommended solution is to place the in-scene `NetworkObject` in an additively loaded scene that remains loaded for the duration of your network game session.  

If you are using "Scene Switching" (that is, loading a scene in LoadSceneMode.Single), then you can migrate the in-scene placed `NetworkObject` (used for management purposes) into the DDoL by sending its `GameObject` to the DDoL:

```csharp
private void Start()
{
    // Don't use this for Dynamically spawned NetworkObjects
    DontDestroyOnLoad(gameObject);
}
```

:::warning
Once migrated into the DDoL, migrating the in-scene placed `NetworkObject` back into a different scene after it has already been spawned will cause soft synchronization errors with late joining clients.  Once in the DDoL it should stay in the DDoL.  This is only for scene switching, if you aren't using scene switching then it's recommended to use an additively loaded scene and keep that scene loaded for as long as you wish to persist the in-scene placed `NetworkObject`(s) being used for state management purposes.
:::

### Complex In-Scene NetworkObjects:
The most common mistake when using an in-scene placed `NetworkObject` is to try and use it like a dynamically spawned `NetworkObject`. When trying to decide if you should use an in-scene placed or dynamically spawned `NetworkObject`, you should ask yourself the following questions:
- Do you plan on de-spawning and destroying the `NetworkObject`? _(highly recommended to use dynamically spawned)_
- Can it be parented, at runtime, under another `NetworkObject`?
- Excluding any special case DDoL scenarios, will it be moved into another scene other than the originating scene?
- Do you plan on having full scene-migrations (that is, LoadSceneMode.Single or "scene switching") during a network session?

If you answered yes to any of the above questions, then using only an in-scene placed `NetworkObject` to implement your feature might not be the right choice.  However, just because you did answer yes to one or more of the above questions doesn't mean you shouldn't use an in-scene placed `NetworkObject` either.  While the previous two sentences might seem puzzling, there are scenarios where the "best choice" (regarding simplicity and modularity) is to use a hybrid approach by using a combination of both in-scene placed and dynamically spawned `NetworkObject`s!  

#### A Hybrid Approach Example
Perhaps your project's design includes making some world items that can either be consumed (that is, health) or picked up (weapons, items, etc) by players. Initially, using a single in-scene placed `NetworkObject` might seem like the best approach for this world item feature.  

However, there is another way to accomplish the same thing while keeping a clear defining line between dynamically spawned and in-scene placed `NetworkObject`s. As opposed to lumping everything into a single NetworkPrefab and handling the additional complexities involved with in-scene placed `NetworkObject`s, you can create two Network Prefabs:

1. World item Network Prefab: since this will be dynamically spawned, you can re-use this Network Prefab with any spawn manager (pooled or single).
2. A "single spawn manger" (non-pooled): this will spawn the world item Network Prefab.  The single-spawn manager can spawn the dynamically spawned `NetworkObject` at its exact location with an option to use the same rotation and scale.
:::tip
 Your "single spawn manager" can also have a list of GameObjects used as spawn points in the event you wish to spawn world items in various locations randomly and/or based on game state.
:::

Using this approach allows you to:
1. Re-use the same single spawn manager with any other Network Prefab registered with the `NetworkManager`
2. Not worry about the complexities involved with treating an in-scene placed `NetworkObject` like a dynamically spawned one.

[See a Dynamic Spawning (non-pooled) "Hybrid Approach" Example Here](../object-spawning#dynamic-spawning-non-pooled)

### Spawning and De-spawning 
By default, an in-scene placed `NetworkObject` will always get spawned when the scene it was placed within is loaded and a network session is in progress.  However, in-scene placed `NetworkObject`s are unique from dynamically spawned `NetworkObject`s when it comes to spawning and de-spawning.  Functionally speaking, when de-spawning a dynamically spawned NetworkObject you can always spawn a new instance of the `NetworkObject`'s associated network prefab. So, whether you decide to destroy a dynamically spawned `NetworkObject` or not, you can always make another clone of the same network Prefab unless you want to preserve the current state of the instance being de-spawned. <br />
With in-scene placed NetworkObjects, the scene it's placed within is similar to the network Prefab used to dynamically spawn a `NetworkObject` in that both are used to uniquely identify the spawned `NetworkObject`.  The primary difference is that you use a network Prefab to create a new dynamically spawned instance where you a required to additively load the same scene to create another in-scene placed `NetworkObject` instance.<br />

**How the two types of spawned `NetworkObject`s are uniquely identified**

Dynamically Spawned | In-Scene Placed
------------------- | ---------------
NetworkPrefab       | Scene 
GlobalObjectIdHash  | Scene Handle (_When Loaded_) & GlobalObjectIdHash

Once the `NetworkObject` is spawned, Netcode for GameObjects uses the `NetworkObjectId` to uniquely identify it for both types.  An in-scene placed `NetworkObject` will still continue to be uniquely identified by the scene handle that it originated from and the GlobalObjectIdHash even if the in-scene placed `NetworkObject` is migrated to another additively loaded scene and originating scene is unloaded.

<br />

**_What if you wanted to de-spawn and re-spawn the same in-scene placed NetworkObject?_**

When invoking the `Despawn` method of a `NetworkObject` with no parameters, it will always default to destroying the `NetworkObject`:

```csharp
NetworkObject.Despawn();  // Will de-spawn and destroy (!!! not recommended !!!) 
```

If you want an in-scene placed NetworkObject to persist after it has been de-spawned, it's recommended to always set the first parameter of the `Despawn` method to `false`:

```csharp
NetworkObject.Despawn(false); // Will only de-spawn (recommended usage for in-scene placed NetworkObjects)
```

Now that you have a de-spawned `NetworkObject`, you might notice that the associated `GameObject` and all of its components are still active and possibly visible to all players (that is, like a `MeshRenderer` component). Unless you have a specific reason to keep the associated `GameObject` active in the hierarchy, you can override the virtual `OnNetworkDespawn` method in a `NetworkBehaviour` derived component and set the `GameObject` to in-active:

```csharp
using UnityEngine;
using Unity.Netcode;

public class MyInSceneNetworkObjectBehaviour : NetworkBehaviour
{
    public override void OnNetworkDespawn()
    {
        gameObject.SetActive(false);
        base.OnNetworkDespawn();
    }
}
``` 

This will assure that when your in-scene placed `NetworkObject` is de-spawned it won't consume precious processing or rendering cycles and it will become "invisible" to all players (connected or that join the session later).  Once the `NetworkObject` has been de-spawned and disabled, you might want to re-spawn it at some later time.  To do this, you would want to set the server-side instance's `GameObject` back to being active and spawn it:

```csharp
using UnityEngine;
using Unity.Netcode;

public class MyInSceneNetworkObjectBehaviour : NetworkBehaviour
{
    public override void OnNetworkDespawn()
    {
        gameObject.SetActive(false);
        base.OnNetworkDespawn();
    }

    public void Spawn(bool destroyWithScene)
    {
        if (IsServer && !IsSpawned)
        {
            gameObject.SetActive(true);
            NetworkObject.Spawn(destroyWithScene);
        }
    }
}
```

:::info 
You only need to enable the `NetworkObject` on the server-side to be able to re-spawn it. Netcode for GameObjects will only enable a disabled in-scene placed `NetworkObject` on the client-side if the server-side spawns it. <br />
_This **does not** apply to dynamically spawned `NetworkObjects`. <br />(see [Object Pooling](../../advanced-topics/object-pooling.md) for an example of recycling dynamically spawned `NetworkObject`s_)
:::


**_How can you start an in-scene placed `NetworkObject` as de-spawned when the scene is first loaded (that is, its first spawn)?_**

Since in-scene placed `NetworkObject`s are automatically spawned when their respective scene has finished loading during a network session, you might run into the scenario where you want it to start disabled until a certain condition has been met specific to your project.  To do this, it only requires adding some additional code in the `OnNetworkSpawn` part of your `NetworkBehaviour` component:

```csharp
using UnityEngine;
using Unity.Netcode;

    public class MyInSceneNetworkObjectBehaviour : NetworkBehaviour
    {
        public bool StartDespawned;

        private bool m_HasStartedDespawned;
        public override void OnNetworkSpawn()
        {
            if (IsServer && StartDespawned && !m_HasStartedDespawned)
            {
                m_HasStartedDespawned = true;
                NetworkObject.Despawn(false);
            }
            base.OnNetworkSpawn();
        }

        public override void OnNetworkDespawn()
        {
            gameObject.SetActive(false);
            base.OnNetworkDespawn();
        }

        public void Spawn(bool destroyWithScene)
        {
            if (IsServer && !IsSpawned)
            {
                gameObject.SetActive(true);
                NetworkObject.Spawn(destroyWithScene);
            }
        }
    }
```

You won'tice the above example keeps track of whether the in-scene placed `NetworkObject` has started as being de-spawned (to avoid de-spawning after its first time being spawned), and it only allows the server to execute that block of code in the overridden `OnNetworkSpawn` method. The above `MyInSceneNetworkObjectBehaviour` example also declares a public `bool` property `StartDespawned` to provide control over this through the inspector view in the editor. 

**_How do I synchronize late joining clients when an in-scene placed `NetworkObject` has been de-spawned and destroyed?_**

Referring back to the [Complex In-Scene NetworkObject Managers](inscene-placed-networkobjects#complex-in-scene-networkobjects), it's recommended to use dynamically spawned `NetworkObject`s if you are planning on destroying the object when it's de-spawned.  However, if either de-spawning but not destroying or using the hybrid approach ([discussed earlier on this page](inscene-placed-networkobjects#a-hybrid-approach-example)) (dynamically spawned) don't appear to be options for your project's needs, then there are only two other possible (but not recommended) alternatives:
- Have another in-scene placed `NetworkObject` track which in-scene placed `NetworkObject`s have been destroyed and upon a player late-joining (that is, OnClientConnected) you would need to send the newly joined client the list of in-scene placed NetworkObjects that it should destroy.  This adds an additional in-scene placed `NetworkObject` to your scene hierarchy and will consume memory keeping track of what was destroyed.
- Disable the visual and physics related components (in editor as a default) of the in-scene placed `NetworkObject`(s) in question and only enable them in OnNetworkSpawn. This does not delete/remove the in-scene placed `NetworkObject`(s) for the late joining client and can be tricky to implement without running into edge case scenario bugs.

These two "alternatives" *aren't recommended* but worth briefly exploring to better understand why we recommend using a [non-pooled hybrid approach](../object-spawning#dynamic-spawning-non-pooled) or just not destroying the in-scene placed `NetworkObject` when de-spawning it. _The time spent implementing and possibly debugging either of the two above not recommended approaches will far exceed the time spent implementing one of the recommended approaches._

### Parenting
In-scene placed `NetworkObject`s follow the same parenting rules as [dynamically spawned `NetworkObject`s](../../advanced-topics/networkobject-parenting.md) with only a few differences and recommendations:
- You can create complex nested `NetworkObject` hierarchies when they're in-scene placed.
- If you plan on using full scene-migration (that is, LoadSceneMode.Single or "scene switching") then parenting an in-scene placed `NetworkObject` that stays parented during the scene migration isn't recommended.
  - Under this scenario, you would want to use a hybrid approach where the in-scene placed `NetworkObject` dynamically spawns the item to be picked up.
- If you plan on using a bootstrap scene usage pattern where you use additive scene loading and unloading with no full scene-migration(s), then it's "OK" to parent in-scene placed NetworkObjects.

:::warning
Parenting in-scene placed `NetworkObject`s under `GameObject`s with no `NetworkObject` component will currently synchronize the child `NetworkObject` as if it's in world space on the client side. To work around this particular issue you should add a `NetworkTransform` to the child and enable local space synchronization.
:::