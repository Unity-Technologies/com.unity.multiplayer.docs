---
id: rpcvnetvar
title: RPCs vs NetVars
sidebar_label: RPCs vs NetVars
---

MLAPI has two main methods of syncing information between players. RPCs (Remote Procedure Calls) and replicated state (NetworkedVar). They both send messages over the network. The logic and your design considerations around how they send messages is what will make you choose one over the other. 

## RPCs

The concept of RPCs is common not only in video games but in the software industry in general. They are ways to call methods on objects that are not in the same executable. 

At a high level, when calling an RPC client side, the SDK will take a note of the object, component, method and any parameters for that RPC and send that information over the network. The server will receive that information, find the specified object, find the specified method and call it on the specified object with the received parameters. 

When calling an RPC, you're calling a method remotely on an object that could be anywhere in the world. They are "events" you can trigger when needed. 

If you call an RPC method on your side, it will execute on a different machine.

## NetworkedVars

At a high level, NetworkedVars are variables with their values tracked by the SDK. Their values are replicated to other nodes in your network regularly. When a client connects initialy to a host, all relevant NetworkedVars’ latest values "state'  will be replicated to that new client. Your state  gets updated at regular intervals.

NetworkedVars can be referenced as "state" or as "Netvars" or as replicated vars.

If I change my variable's value on my side, you'll see the latest value on your side.


## How to choose between NetworkedVars vs RPCs

- Use RPCs for transient events, information only useful for a  moment when it's received.
- Use NetVars for persistent states, for information that will be around more than a moment.

A quick way to choose which to use is to ask yourself: "Should a player joining mid-game get that information?"

Using the  Boss Room's door as an example. Players's client need to receive the information that the door is open, so they can play the right animations.
If we sent an RPC to all clients, then all players connecting mid game after that RPC is sent will miss that information and have the wrong visual on their clients.


*** --> Could create sequence diagram for this, showing the steps
    player1 opens the door, "door open" RPC is sent to all clients, player 2 connects and doesn't see the door is open. *** 

In that case, it's preferable to use NetworkedVars like shown here.

```csharp reference

https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Shared/NetworkDoorState.cs

```

It uses a BoolNetworkedVar to represent the "IsOpen" state. If I open the door and a player connects after this, the host will replicate all the world's information to that new player, including the door's state.


## Why couldn't I just use NetworkedVars for everything then?

RPCs are simpler.

If you have a temporary event like an explosion, you don't need a replicated state for this. It wouldn't make sense. You'd have an "unexploded" state that would need to be synced everytime a new player connected? From a design perspective, you might not want to represent these events as state.

An explosion could use an RPC for the event, but the effect of the explosion should be using NetVars (player's knockback, health decrease, etc). A newly connected player doesn't care about an explosion that happened 5 seconds ago. They do care about the current health of the players around that explosion though.

*** TODO this is the current design, but there was conversations to change this: NetworkedVars will only send the latest values with no guarantee to send all values changes. This means it would be possible to completely miss the explosion. Using reliable RPCs would be better in that case, making sure the explosion message gets resent if it's message get lost over the internet.***
    
Actions in Boss Room are a great example for this. The area of effect action (AoeAction) triggers an RPC when the action is activated (showing a VFX around the affected area). The imp's health (NetVars) is updated. If a new player connects, they'll see the damaged imps. We wouldn't care about the area of effect ability's VFX, which works great with a transient RPC.
   
`AoeActionInput.cs` Shows the input being updated client side and not waiting for the server. It then calls an RPC when clicking on the area to affect.

``` csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionInput.cs
```

`AOEAction.cs` Server side logic detecting enemies inside the area and applying damage. It then broadcasts an RPC to tell all clients to play the VFX at the appropriate position. Character's state will be automatically updated with their respective NetworkedVars' update (health and alive status for example).

``` csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Server/Game/Action/AOEAction.cs
```
`AoeActionFX.cs` is triggered by an RPC coming from the server

``` csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionFX.cs
```

:::tip
If you want to make sure two variables are received at the same time, RPCs are great for that. 

If you change NetworkedVar "a" and "b", there's no guarantee they'll both be received client side at the same time. Sending them as 2 parameters in the same RPC allows to make sure they'll be received at the same time client side.

***TODO Should produce some sample code for this. https://unity3d.atlassian.net/browse/GOMPS-234***

:::

NetworkedVars are great when you only care about the latest value.

If you want to get all the state changes, RPCs would be better. (TODO this is not in yet)

***TODO have control over reliable vs unreliable? not for NetworkedVars? 
(note: that's still being designed. No conclusion has come from that yet)***

***TODO state.OnValueChanged vs RPC
Sometimes need the two at the same time? One to represent the value, one to represent the actual event that triggered this? There's considerations to have when designing. You could deduce your event changes client side with a simple state change, but that would mean more logic client side to reproduce and predict that state change. It's network bandwidth vs deduction logic. (Note: should wait for decision SDK side on if there's going to be reliable NetworkedVars)***

## Summary:

NetworkedVars are great for managing state, to make sure everyone has the latest value. Use them when you want to make sure newly connected players get an up to date world state.
RPCs are great for sending transient events. Use them when transmiting short lived events.




