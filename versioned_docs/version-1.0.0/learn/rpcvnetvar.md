---
id: rpcvnetvar
title: RPC vs NetworkVariable
sidebar_label: RPC vs NetworkVariable
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

Choosing the wrong data syncing mecanism can create bugs, generate too much bandwidth and add too much complexity to your code.
Netcode for GameObjects (Netcode) has two main ways of syncing information between players. `RPC` ([Remote Procedure Call](../advanced-topics/messaging-system)) and replicated state [(NetworkVariable)](../basics/networkvariable). They both send messages over the network. The logic and your design around how they send messages is what will make you choose one over the other. 

## Choosing between NetworkVariables or RPCs

- Use `RPC`s for transient events, information only useful for a  moment when it's received.
- Use `NetworkVariable`s for persistent states, for information that will be around more than a moment.

A quick way to choose which to use is to ask yourself: "Should a player joining mid-game get that information?"

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/NetworkVariable/NetworkVariables_LateJoinClient.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/NetworkVariable/NetworkVariables_LateJoinClient_Dark.png?text=DarkMode"/>
<figcaption>Network Variables allow to seamlessly catch up late joining clients by sending the current state as soon as the tick happens.</figcaption>
</figure>

Using the Boss Room's door as an example. A player's client needs to receive the information that the door is open to play the right animations.

If we sent an `RPC` to all clients, then all players connecting mid game after that `RPC` are sent will miss that information and have the wrong visual on their clients.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/NetworkVariableVSRPCs/RPCsLateJoin.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/NetworkVariableVSRPCs/RPCsLateJoin_Dark.png?text=DarkMode"/>
<figcaption>Sending state with RPCs will not be transmitted to late joining clients.</figcaption>
</figure>


In that case, it is preferable to use `NetworkVariable`s like shown here.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/GameplayObjects/NetworkDoorState.cs
```

It uses a `BoolNetworkVariable` to represent the "IsOpen" state. If I open the door and a player connects after this, the host will replicate all the world's information to that new player, including the door's state.

NetworkVariables are eventually consistent. This means not all value changes will be synced, contrary to RPCs, where 5 calls to an RPC will produce 5 RPC sends on the network.
<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/NetworkVariable/NetworkVariables.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/NetworkVariable/NetworkVariables_Dark.png?text=DarkMode"/>
<figcaption>Network Variables can be updated multiple times between ticks, but only the latest will be synced to other peers.</figcaption>
</figure>

NetworkVariables will save on bandwidth for you, making sure to only send values when the data has changed. However, if you want all value changes, RPCs might be best.


## Why not use NetworkVariables for everything?

`RPC`s are simpler.

If you have a temporary event like an explosion, you do not need a replicated state for this. It would not make sense. You would have an "unexploded" state that would need to be synced everytime a new player connected? From a design perspective, you might not want to represent these events as state.

An explosion could use an `RPC` for the event, but the effect of the explosion should be using `NetworkVariable`s ( for example player's knockback and health decrease). A newly connected player doesn't care about an explosion that happened 5 seconds ago. They do care about the current health of the players around that explosion though.
  
Actions in Boss Room are a great example for this. The area of effect action (`AoeAction`) triggers an `RPC` when the action is activated (showing a VFX around the affected area). The imp's health (`NetworkVariable`s) is updated. If a new player connects, they will see the damaged imps. We would not care about the area of effect ability's VFX, which works great with a transient `RPC`.
   
`AoeActionInput.cs` Shows the input being updated client side and not waiting for the server. It then calls an `RPC` when clicking on the area to affect.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/Action/AoeActionInput.cs
```

`AOEAction.cs` Server side logic detecting enemies inside the area and applying damage. It then broadcasts an `RPC` to tell all clients to play the VFX at the appropriate position. Character's state will automatically update with their respective `NetworkVariable`s update (health and alive status for example).


```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/Action/AOEAction.cs
```

`AoeActionFX.cs` is triggered by an `RPC` coming from the server

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/Action/AoeActionFX.cs
```

:::tip
If you want to make sure two variables are received at the same time, `RPC`s are great for this. 

If you change `NetworkVariables` "a" and "b", there is no guarantee they will both be received client side at the same time. 

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/NetworkVariable/NetVarDataUpdates.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/NetworkVariable/NetVarDataUpdates_Dark.png?text=DarkMode"/>
 <figcaption>Different Network Variables updated within the same tick are not guranteed to be delivered to the clients at the same time. </figcaption>
</figure>

Sending them as two parameters in the same `RPC` allows to make sure they will be received at the same time client side.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/NetworkVariableVSRPCs/ManagingNetVarData_RPCs.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/NetworkVariableVSRPCs/ManagingNetVarData_RPCs_Dark.png?text=DarkMode"/>
 <figcaption>To ensure that several different Network Variables are all synchronized at the same exact time we can use client RPC to join these value changes together.</figcaption>
</figure>

`NetworkVariable`s are great when you only care about the latest value.

:::


## Summary

`NetworkVariable`s are great for managing state, to make sure everyone has the latest value. Use them when you want to make sure newly connected players get an up to date world state.

`RPC`s are great for sending transient events. Use them when transmiting short lived events.

