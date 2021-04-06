---
id: rpcvnetvar
title: RPC vs NetworkVariable
sidebar_label: RPC vs NetworkVariable
---

MLAPI has two main methods of syncing information between players. `RPC` (Remote Procedure Call) and replicated state (`NetworkVariable`). They both send messages over the network. The logic and your design considerations around how they send messages is what will make you choose one over the other. 

## RPCs

The concept of an `RPC` is common not only in video games but in the software industry in general. They are ways to call methods on objects that are not in the same executable. 

At a high level, when calling an `RPC` client side, the SDK will take a note of the object, component, method and any parameters for that `RPC` and send that information over the network. The server will receive that information, find the specified object, find the specified method and call it on the specified object with the received parameters. 

When calling an `RPC`, you call a method remotely on an object that could be anywhere in the world. They are "events" you can trigger when needed. 

If you call an `RPC` method on your side, it will execute on a different machine.

## NetworkVariables

At a high level, a `NetworkVariable` is a variable with its value tracked by the SDK. Its values are replicated to other nodes in your network regularly. When a client connects initially to a host, all relevant `NetworkVariable` latest values "state" will be replicated to that new client. Your state gets updated at regular intervals.

`NetworkVariable` can be referenced as "state" or as "Netvars" or as replicated vars.

If you change your variable's value on your side, others will see the latest value on their side.

## Choosing between NetworkVariables or RPCs

- Use `RPC`s for transient events, information only useful for a  moment when it's received.
- Use `NetworkVariable`s for persistent states, for information that will be around more than a moment.

A quick way to choose which to use is to ask yourself: "Should a player joining mid-game get that information?"

Using the Boss Room's door as an example. A player's client needs to receive the information that the door is open to play the right animations.

If we sent an `RPC` to all clients, then all players connecting mid game after that `RPC` are sent will miss that information and have the wrong visual on their clients.

In that case, it is preferable to use `NetworkVariable`s like shown here.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Shared/NetworkDoorState.cs
```

It uses a `BoolNetworkVariable` to represent the "IsOpen" state. If I open the door and a player connects after this, the host will replicate all the world's information to that new player, including the door's state.


## Why not use NetworkVariabless for everything?

`RPC`s are simpler.

If you have a temporary event like an explosion, you do not need a replicated state for this. It would not make sense. You would have an "unexploded" state that would need to be synced everytime a new player connected? From a design perspective, you might not want to represent these events as state.

An explosion could use an `RPC` for the event, but the effect of the explosion should be using `NetworkVariable`s ( for example player's knockback and health decrease). A newly connected player doesn't care about an explosion that happened 5 seconds ago. They do care about the current health of the players around that explosion though.
  
Actions in Boss Room are a great example for this. The area of effect action (`AoeAction`) triggers an `RPC` when the action is activated (showing a VFX around the affected area). The imp's health (`NetworkVariable`s) is updated. If a new player connects, they will see the damaged imps. We would not care about the area of effect ability's VFX, which works great with a transient `RPC`.
   
`AoeActionInput.cs` Shows the input being updated client side and not waiting for the server. It then calls an `RPC` when clicking on the area to affect.

```csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionInput.cs

```

`AOEAction.cs` Server side logic detecting enemies inside the area and applying damage. It then broadcasts an `RPC` to tell all clients to play the VFX at the appropriate position. Character's state will automatically update with their respective `NetworkVariable`s update (health and alive status for example).


```csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Server/Game/Action/AOEAction.cs
```

`AoeActionFX.cs` is triggered by an `RPC` coming from the server

```csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionFX.cs
```

:::tip
If you want to make sure two variables are received at the same time, `RPC`s are great for that. 

If you change `NetworkVariable` "a" and "b", there's no guarantee they'll both be received client side at the same time. Sending them as two parameters in the same `RPC` allows to make sure they'll be received at the same time client side.
:::

`NetworkVariable`s are great when you only care about the latest value.


## Summary

`NetworkVariable`s are great for managing state, to make sure everyone has the latest value. Use them when you want to make sure newly connected players get an up to date world state.

`RPC`s are great for sending transient events. Use them when transmiting short lived events.



