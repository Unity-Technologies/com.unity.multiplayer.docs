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
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Character/ClientInputSender.cs
```

We want the full history of inputs sent, not just the latest value. There is no need for `NetworkVariable`s, you just want to blast your inputs to the server. Since Boss Room is not a twitch shooter, we send inputs as reliable `RPC`s without worrying about the additional latency an input loss would add. 
   

## Sending action inputs RPCs

The following `RecvPerformHitReactionClient`  call sends actions from server to client:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Shared/Game/Entity/NetworkCharacterState.cs#L263-L267
```

For example, the Boss Room project "ouch" action `RPC` mentioned for `NetworkCharacterState` is interesting for optimization purposes. You would normally want to have only one `RPC` for an action and let the client decide who should play the associated animation. Due to "ouch" being a long running action over multiple frames, you do not know yet when sending the initial `RPC` which characters will be affected by that action. You want this to be dynamic as the boss is hitting targets. As a result, multiple `RPC`s will be sent for each hit character.

## Arrow's GameObject vs Fireball's VFX

The archer's arrows uses a standalone `GameObject` that is replicated over time. Since this object's movements are slow moving, we made the choice to use state to replicate this ability's status, in case a client connected while the arrow was flying. 

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Server/Game/Entity/ServerProjectileLogic.cs
```

We could have used an `RPC` instead, for example the Mage's projectile attack. Since it is expected for that projectile to be quick, we are not affected by the few milliseconds where a newly connected client could miss the projectile and we save on bandwidth having to manage a replicated object. Instead a single RPC is sent to trigger the FX client side.


```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Server/Game/Action/FXProjectileTargetedAction.cs
```

## Character life state

We could have used a "kill" `RPC` to set a character as dead and play the appropriate animations. Applying our "should that information be replicated when a player joins the game mid-game" rule of thumb, we used `NetworkVariable`s instead. We used the `OnValueChanged` callback on those values to play our state changes animation.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Shared/Game/Entity/NetworkCharacterState.cs#L109
```

The animation change:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Character/ClientCharacterVisualization.cs#L90
```
        
:::tip Lesson Learned

**Error when connecting after imps have died**: The following is a small gotcha we encountered while developing Boss Room. Using `NetworkVariable`s is not magical. If you use `OnValueChanged`, you still need to make sure you initialize your values when spawning for the first time. `OnValueChanged` will not be called when connecting for the first time, only for the subsequent value changes.

![imp not appearing dead](/img/01_imp_not_appearing_dead.png) 

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Character/ClientCharacterVisualization.cs
```

:::

## Position
        
All of our replicated object's position is synced through `NetworkVariable`s, easily collecting and providing data.

If this was done through `RPC`s, we would need to keep a list of `RPC`s to send to connecting players to ensure they get the latest position values for each object. Keeping a list of `RPC`s for each object to send to those `RPC`s on connecting would be a maintainability nightmare. By using `NetworkVariable`s, we let the SDK do the work for us.
