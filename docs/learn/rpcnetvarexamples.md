---
id: rpcnetvarexamples
title: RPCs vs NetworkVariables Examples
sidebar_label: RPCs vs NetworkVariables Examples
---
This page contains examples of how `RPC`s or `NetworkVariable`s have been used in the Small Coop Sample (Boss Room Project). It should provide some guidance on when to use `RPC`s or `NetworkVariable`s in your own projects.

See the [RPC vs NetworkVariable](rpcvnetvar.md) tutorial for more information.

## RPCs for movement

Boss Room uses RPCs to send movement inputs.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/Input/ClientInputSender.cs
```

We want the full history of inputs sent, not just the latest value. There is no need for `NetworkVariable`s, you just want to blast your inputs to the server. Since Boss Room is not a twitch shooter, we send inputs as reliable `RPC`s without worrying about the additional latency an input loss would add. 
   

## Sending action inputs RPCs

The following `RecvPerformHitReactionClient`  call sends actions from server to client:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Shared/Game/Entity/NetworkCharacterState.cs#L263-L267
```

For example, the Boss Room project "ouch" action `RPC` mentioned for `NetworkCharacterState` is interesting for optimization purposes. You would normally want to have only one `RPC` for an action and let the client decide who should play the associated animation. Due to "ouch" being a long running action over multiple frames, you do not know yet when sending the initial `RPC` which characters will be affected by that action. You want this to be dynamic as the boss is hitting targets. As a result, multiple `RPC`s will be sent for each hit character.

## Arrow's GameObject vs Fireball's VFX

The archer's arrows uses a standalone `GameObject` that is replicated over time. Since this object's movements are slow, we made the choice to use state (via the NetworkTransform) to replicate this ability's status, in case a client connected while the arrow was flying. 

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/GameplayObjects/ServerProjectileLogic.cs
```

We could have used an `RPC` instead, for example the Mage's projectile attack. Since it is expected for that projectile to be quick, we are not affected by the few milliseconds where a newly connected client could miss the projectile and we save on bandwidth having to manage a replicated object. Instead a single RPC is sent to trigger the FX client side.


```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/Action/FXProjectileTargetedAction.cs
```

## Breakable state

We could have used a "break" `RPC` to set a breakable object as broken and play the appropriate visual effects. Applying our "should that information be replicated when a player joins the game mid-game" rule of thumb, we used `NetworkVariable`s instead. We used the `OnValueChanged` callback on those values to play our visual effects, as well as an initial check when spawning the NetworkBehaviour.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/GameplayObjects/NetworkBreakableState.cs
```

The visual changes:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/GameplayObjects/ClientBreakableVisualization.cs#L49-L59
```
        
:::tip Lesson Learned

**Error when connecting after imps have died**: The following is a small gotcha we encountered while developing Boss Room. Using `NetworkVariable`s is not magical. If you use `OnValueChanged`, you still need to make sure you initialize your values when spawning for the first time. `OnValueChanged` will not be called when connecting for the first time, only for the subsequent value changes.

![imp not appearing dead](/img/01_imp_not_appearing_dead.png) 

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/GameplayObjects/ClientBreakableVisualization.cs#L31-L47
```

:::

## Hit points
        
All of our characters and objects' hit points are synced through `NetworkVariable`s, easily collecting and providing data.

If this was done through `RPC`s, we would need to keep a list of `RPC`s to send to connecting players to ensure they get the latest hit point values for each object. Keeping a list of `RPC`s for each object to send to those `RPC`s on connecting would be a maintainability nightmare. By using `NetworkVariable`s, we let the SDK do the work for us.
