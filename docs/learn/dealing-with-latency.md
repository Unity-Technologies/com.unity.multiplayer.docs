---
id: dealing-with-latency
title: Tricks and patterns to deal with latency
sidebar_label: Dealing with Latency
description: Tricks and patterns to hide latency, what's acceptable to manage client side with client authority before sending it to the server, prediction, server rewind, action anticipation, etc.
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';


## TLDR

<!-- :::info -->
Issue to solve | How to solve it
--- | ---
Security | Server authority
Responsiveness | Prediction, action casting, client authority
Accuracy/consistency | server rewind, server authority
<!-- ::: -->

---

We saw in our [latency](lagandpacketloss.md) and [tick](../reference/glossary/ticks-and-update-rates) pages how waiting for your server's response makes your game feel unresponsive.
Latency will destroy your gameplay experience and make your game frustrating. It doesn't take much to make a multiplayer game unplayable. Add 200ms between your inputs and what you see on your screen and you'll want to throw your computer through the window.
<!-- TODO NOW add jil drawing for latency frustrating -->

Trying to deal with lag naively can introduce security and consistency issues. This page will help you get started with these techniques.

:::info
## Security

Any code client side can be messed with. Players can forge false network messages sent to the server.
Even if you specify in your client logic that you can't kill an imp if it's more than 10 meters away, if the "kill imp" message is a server RPC and there's no range check server side, players can forge that network message to bypass your client side logic. How to forge that kind of message is beyond this page's scope, however you should always keep in mind you can't trust clients. Your server needs to have logic to validate player actions coming from clients. 
<!-- (TODO SAM: we have examples for this in Boss Room, should add link to article) -->

## Consistency
In addition to responsiveness, the accuracy of your simulation is important. Not only will it break your player's immersion, competitive games often have prize pools of multiple millions of dollars where you want to make sure when your user is targeting something on their screen, it actually hits.
With latency, what a client receives from the server is RTT/2 ms late. The information available isn't the "live" one, it's the one that was sent over the internet some time earlier (for example 200ms ago). This means if my local player collides with a server driven networked object, I'll see my collider overlap with it before the server reacts and tells it to move. 

<!-- (TODO LATER Jil drawing for server rewind. could do a gif of this, this kind of overlapping is pretty cool to visualize).  -->

This also means if I shoot a target's head, my shot will be targeting a head that's RTT/2 ms behind and will reach the server RTT/2 ms later (meaning you have a full RTT ms of desync between your shot and the actual hit)
This means any interactions I'm making on that object will see a delayed effect.
:::

:::info
In summary, you want: Accuracy, Security and Responsiveness
:::

## Authority
### Server authoritative games
The authority is who has the right to make final gameplay decisions over objects. A server authoritative game has all its final gameplay decisions executed by the server.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CharPos_ServerAuthority.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CharPos_ServerAuthority_Dark.png?text=DarkMode"/>
<figcaption>The server gets to make the final gameplay decisions</figcaption>
</figure>

<!-- TODO NOW improve this diagram, not clear what is sent where -->


#### Good for world consistency
An advantage of server authoritative games is your world's consistency. Since all gameplay decisions (ex: a player opens a door, a bot shoots the player) are made by the same node on the network (the server), you're sure these decisions are made at the same time. A client authoritative game would have decisions made on client A and other decisions on client B, with both being separated by RTT ms of internet lag. Player A killing player B while player B was already hiding behind cover would cause consistency issues. Having all this gameplay logic on one single node (the server) makes these kinds of considerations irrelevant, since everything happens in the same execution context.

<!-- TODO create more drawings for client vs server authority desync -->

#### Good for security
Critical data (like your character health or position for example) could be **server authoritative**, so cheaters can't mess with it. In that instance, the server will have the final say on that data's value. You wouldn't want players on their clients being able set their health (or even worst, other player's health) at will.

:::info
Games that use the **Host** model will still have this risk, since one of the clients act as a server too.
Pure servers hosted by you the game developer (dedicated servers) won't run into this issue.
:::

Netcode for GameObjects is server authoritative, which means all writes to NetworkVariables will only be allowed from the server. However, when accepting RPCs coming from clients, you need to make sure to add validation code, since those RPCs are coming from *never to be trusted* sources.

Note here an input from a client can be anything, from a user interacting with another player to revive them, to a player sending keys and clicks for position changes.

:::info
Let's assume our game is server authoritative for now 
:::

#### Issue: reactivity
An issue with server authority is you're waiting for your server to tell you to update your world. This means that if you send an input to the server and wait for the server to tell you your position change, you'll need to wait for a full **RTT** before you see the effect. There are [patterns](#patterns-to-solve-these-issues) you can use to solve this issue while still remaining server authoritative.

### Client authority
In a **client authoritative** (or **client driven**) game using Netcode for GameObjects, you still have a server that's used to share world state, but clients will own and impose their reality.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CharPos_ClientAuthority.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CharPos_ClientAuthority_Dark.png?text=DarkMode"/>
<figcaption>The client gets to make the final gameplay decisions</figcaption>
</figure>

<!-- TODO NOW improve this diagram, not clear what is sent where -->

#### Good for reactivity
This can often be used when you trust your users or their devices. For example, you could have a client tell the server "I killed player x" instead of *"I clicked in that direction" and have the server simulate that action to return the result*. This way, your client could show the death animation for your ennemy as soon as you clicked, since the death would already be confirmed and owned by your client. The server would only relay that information back to other users.

#### Issue: world consistency
There's possible sync issues with client authoritative games. If your character moves client side thinking everything is ok and an enemy has stunned it in the meantime, that enemy will have stunned you earlier on a different version of the world as the one you're seeing. Let's remember what we saw in our [latency page](lagandpacketloss.md). If I let my client make an authoritative decision using outdated information, you'll run into desyncs, overlapping physics objects, and the such.

:::info
#### Owner authority vs All clients authority
Having multiple clients having the ability to affect the same shared object can become a mess real fast.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CaptureFlagPart1_ClientAuthorityIssue.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CaptureFlagPart1_ClientAuthorityIssue_Dark.png?text=DarkMode"/>
<figcaption>Multiple clients trying to impose their reality on a shared object.</figcaption>
</figure>


To avoid this, it's recommended to use client **owner** authority, which would allow only the owner of an object to interact with it. Since ownership is controlled server side in Netcode, there's no possibility of two clients running into a [race condition](https://en.wikipedia.org/wiki/Race_condition#In_software). To allow two clients to affect the same object, you'd need to ask the server for ownership, wait for it, then execute the client authoritative logic you want.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CaptureFlagPart2_ServerAuthorityFix.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/dealing_with_latency/Example_CaptureFlagPart2_ServerAuthorityFix_Dark.png?text=DarkMode"/>
<figcaption>Multiple clients ASKING to interact with a shared object.</figcaption>
</figure>
:::

#### Issue: Security
Client authority is a pretty dangerous door to leave open on your server, since any malicious player could forge messages to say "kill player a, b, c, d, e, f, g" and win the game. It is pretty useful though for reactivity. Since the client is taking all the important gameplay decisions, it can display the result of user inputs as soon as they happen instead of waiting a few hundred milliseconds.
When you don't think there's any reason for your players to cheat, client authority can be a great way to have reactivity without some of the complexity added with techniques like [input prediction](#prediction). 
<!-- (NOTE sam: I'll write on client prediction, even though it's tech that's not available in Netcode. This has the potential to confuse users, but at least they'll know it's there). -->
Another way of solving this issue in a client authoritative game is using soft validation server side. Instead of completely doing a simulation server side, the server will only do basic validation. It could for example do range checks to make sure a player isn't teleporting to places it shouldn't. This would usually be acceptable in a [PvE](https://en.wikipedia.org/wiki/Player_versus_environment) game. However any [PvP](https://en.wikipedia.org/wiki/Player_versus_player) will usually require server authority.
<!-- (Note sam: there's way more stuff to write about this with MMOs and the such. Should talk about how client authority allows to reduce load on server and spread load on clients) -->

 Summary | -
 --- | ---
 Server authority | More secure. Less reactive. No sync issues.
 Client authority | Less secure. More reactive. Possible sync issues.

### Boss Room's authority
<!-- TODO NOW jil drawings for different actions when it's merged -->

Boss Room's [actions](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/tree/main/Assets/BossRoom/Scripts/Server/Game/Action) uses a server authoritative model. The client sends inputs (mouse clicks for the character's destination) and the server sends back positions. This way, every features in the world are on the same world time. If the Boss charges and bumps you, you'll see your character fly away as soon as the boss touches you, not pass through you and then see you fly away. 
<!-- (TODO we don't have an example of client authoritative character where we could show the overlap effect of this, but that's coming https://jira.unity3d.com/browse/MTT-985) -->



:::info
Our thinking process was "server authoritative by default"
:::

While developing Boss Room, we knew by default everything would be synced together and secure. It was making designing our gameplay pretty simple. We then, in our design, added exceptions for when we wanted reactive gameplay (see the following sections on [patterns to solve latency issues](#patterns-to-solve-latency-issues-in-a-server-authoritative-game).
Having only one source of truth makes debugging your game so much easier and so much less of a headache. You know you can trust the information you're seeing server side is the "truth" and that the information relayed to clients is also the "truth" since it comes from the server.

<!-- TODO talk about which elements from Boss Room are server authoritative
- position
- health
- action effects and triggers
- door and switch
- name (should be, but isn't right now)
    - Use custom name generation.
    - A more advanced example could have the name taken from a 3rd party service like steam or facebook (with advanced sanitization checks) -->
   
Boss Room being a coop game, it could have been implemented with Client authority. However, players would have seen issues with syncing with the Boss charge for example. The server driven Boss would charge your client driven client. Mixing authority with server driven AIs and client driven players could easily have become a mess.

:::info
Rule of thumb: A good way to think about your game architecture at first is to have your game server authoritative by default and make exceptions for reactivity when security and consistency allows it.
:::

:::info
A pattern we've seen that helped when not sure about using client or server authority is to implement your game behaviour not by server/client, but authoritative/non-authoritative. By abstracting this to authority instead of isServer/isClient, your code can easily be swapped to client or server authority without too many refactors.

```cs
// before
if (isServer)
{ 
    // take an authoritative decision
    // ...
}
if (isClient) // each of these need to be swapped if switching authority
{ 
    // ... 
}

// after
bool HasAuthority => isServer; // can be set for your whole class or even project
// ...
if (HasAuthority)
{ 
    // take an authoritative decision
    // ...
}
if (!HasAuthority)
{
    // ...
}
```
:::

## Patterns to solve latency issues in a server authoritative game:

Summary | 
--- | ---
Client authority | Less secure. More reactive. Possible sync issues.
Action anticipation | More secure. Somewhat reactive. Possible visual sync issues.
Prediction | More secure. More reactive. Correction on sync issues. Complex and tentacular.
Server side rewind | More secure. More accurate by favoring the attacker. Shot behind a wall issue.

### Allow low impact client authority

When designing your feature, keep in mind using server authority as the default. Then identify which feature needs reactivity and doesn't have a big impact on security/world consistency.
User inputs are usually a good example. Since users already own their inputs (I own my key press, the server can't tell me "no you haven't pressed the w key") user input data can easily be client driven. In FPS games, your look direction can easily be client driven without much impact. The client will send to the server its look direction instead of mouse movements. Having a correction on where you look would feel weird and security for this has challenges anyway (how do you differentiate an aim bot vs someone flicking their mouse super fast).

<!-- *NOTE SAM: There's a task to refactor character select so it's client authoritative. While reviewing our code we realized char select should probably be client authoritative and it would be a good example for this here. https://unity3d.atlassian.net/browse/GOMPS-414
--The following will be true once we do that task:* -->

<!-- In Boss Room, when choosing a character, your current unconfirmed selection is synced to other clients. This selection is client driven. "I know I selected that character and the server can't tell me otherwise". However, since only one person can select the same character, the ready click and confirmation of selection will be server driven, since we don't want to have a race condition between two clients hitting ready at the same time on the same character.
TODO show example -->


If a player selects an imp, the selection circle will be client driven, it won't wait for the server to tell us we've selected the imp.

<!-- TODO AOE selection isn't really client authoritative, but should still be talked about -->
<!-- TODO NOW show jil drawing -->
[Click](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Character/ClientInputSender.cs) is client driven, [AOE selection](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionInput.cs) is client driven. AOE's distance check is client driven. However the distance check is done [server side too](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Server/Game/Action/AOEAction.cs). This way if there's too much latency between a client click and the server side position, the server will do a sanity check to make sure that for its own state, the click is within the allowed range.
        
<!-- TODO NOW talk about rogue stealth? how it can be super simple client side logic to hide? could also not be part of this section. -->

:::note
The above examples are atomic actions. They happen on click.
To do continuous client driven actions, there's a few more considerations to take.
- You need to keep a local variable to keep track of your client authoritative data. 
- You then need to make sure you don't send ServerRpcs (containing your authoritative state) when no data has changed and do dirty checks. 
- You'd need to send it on tick or at worst on FixedUpdate. Sending on Update() would spam your connection.


A sample for a [ClientNetworkTransform](../components/networktransform.md#clientnetworktransform) has been created, so you don't have to reimplement this yourself for transform updates. A [sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/ClientDriven) has been created on how to use it. See [movement script](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/main/Basic/ClientDriven/Assets/Scripts/ClientPlayerMove.cs).
:::

:::info
A rule of thumb here is to ask yourself: ```Could the server correct me on this?```. If it can, use server authority.
:::

### Client Side Prediction
Predicting what the server will send you.

Prediction is a very common way of making an educated "guess" as to what the server will send you. Your game can stay server authoritative, but instead of waiting a full RTT for your action results, your client can simulate and run gameplay code of what it thinks will happen as soon as your players trigger inputs. For example, instead of waiting a full RTT for the server to tell me where I moved, I can directly update my movements according to my inputs. This is very close to client authority, except with this technique you can be corrected:
The world (and especially the internet) is messy. A client could guess wrong. An event produced by another player could come and mess your own local guess or your physic simulation could be non-deterministic.
With the movement example, I could have an enemy come and stun me while I thought I could still move. 200 ms latency is enough time for a stun to happen and create a discrepancy between the move I "predicted" client side and what really happened server side.
This is where "reconciliation" (or "correction") comes in play. The client keeps a history of the positions it predicted. Being still server authoritative, the client still receives (outdated by x ms of latency) positions coming from the server. The client will validate whether the positions it predicted in the past fits with the old positions coming from the server. The client can then detect discrepancies and "correct" its position according to the server's authoritative position.
This way, clients can stay server authoritative while still be reactive.

:::info
#### Input Prediction vs World Prediction vs Extrapolation
Local input prediction will predict your state using your local player's inputs. 

You can also predict other objects in your world by predicting from the last server data your received.
Knowing an AI’s state at frame i, we can predict its state at time i+1 assuming it’s deterministic enough to run the same both client side and server side.

Extrapolation is an attempt to estimate a future game state, without taking into account latency. On receipt of a packet from the server, the position of an object is updated to the new position. Awaiting the next update, the next position is extrapolated based on the current position and the movement at the time of the update. 

The client will normally assume that a moving object will continue in the same direction. When a new packet is received, the position may be updated.

For Netcode for gameobjects (Netcode), a basic extrapolation implementation has been provided in [`NetworkTransform`](../../components/networktransform.md) and is estimated between the time a tick advances in server-side animation and the update of the frame on the client-side. The game object extrapolates the next frame's values based on the ratio. 
:::

<!-- TODO LATER -->
<!-- I'm not adding more info on this until we have discussed this further SDK side. -->
<!-- (NOTE SAM: this is a 1000 feet overview, this will need it's own page) -->
<!-- TODO Harder to implement, need to take this into account in most of your gameplay code 
Advanced games will have most of their world predicted, allowing the client and server to run simulations in parallel with the server correcting clients once in a while. -->
<!-- TODO prediction is not just for your movements, you can also predict other items like AIs, physics entities, other players by extrapolating their position from their state coming from the server. Another player's position could be extrapolated from their position and direction for example. -->
<!-- TODO players are hard to predict. -->
<!-- TODO correction can be teleport or interpolation. -->
<!-- TODO Need determinism, else lots of corrections -->
<!-- TODO Tentacular, if interract with other server driven elements, need these elements to be predicted as well -->
<!-- TODO add diagram examples (stun grenade for example) and flow of reconciliation -->

:::info
There's no prediction implementation right now in Netcode for GameObjects, but you can implement your own. See our [roadmap](https://unity.com/roadmap/unity-platform/multiplayer-networking) for more information.
:::

### Action Anticipation
There's multiple reasons for not having server authoritative gameplay code run both client side (with [prediction](#client-side-prediction)) and server side. For example, your simulation could be not deterministic enough to trust that the same action client side would happen the same server side. If I throw a grenade client side, I want to make sure the grenade's trajectory is the same server side. This often happens with world objects with a longer life duration, with greater chances of desyncing. In this case, the safest approach would be a server authoritative grenade, to make sure everyone has the same trajectory. But how do you make sure the throw feels responsive and that your client doesn't have to wait for a full RTT before seeing anything react to their input?
For a lot of games, when triggering an action, you'll see an animation/VFX/sound trigger before the action is actually executed. A trick often used for lag hiding is to trigger a non-gameplay impacting animation/sound/VFX on player input (immediately), but still wait for the server authoritative gameplay elements to drive the rest of the action. If the server has a different state (your action was cancelled server side for some reason), the worst that happens client side is you've played a useless quick animation. It's easy to just let the animation finish or cancel it.
This is referenced as action casting or action anticipation. You're "casting" your action client side while waiting for the server to send the gameplay information you need.
<!-- TODO NOW jil drawing for action anticipation -->
For your grenade, a client side "arm throw" animation could run, but the client would wait for the grenade to be spawned by the server. With normal latencies, this usually feels responsive. With higher abnormal latencies, you could run into the arm animating and no grenade appearing yet, but it would still feel responsive to users. It would feel strange, but at least it would feel responsive and less frustrating.
In Boss Room for example, our movements use a small "jump" animation as soon as you click somewhere to make your character move. 
The client then waits for the server to send position updates. The game still feels reactive, even though the character's movements are server driven.

:::info
For example, Boss Room plays an animation on [Melee action](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Action/MeleeActionFX.cs) client side while waiting for the server to confirm the swing. If the server doesn't confirm, worst comes to worst we've played an animation for nothing and nothing else is desynced. Your players will be none the wiser.
:::

This is also useful for any action that needs to interract with the world. An ability that makes you invulnerable would need to be on the same time as other server events. If I predict my invulnerability, but a sniper headshots me before my input has reached the server, I'll see my invulnerable animation, but will still get killed. This is pretty frustrating for users. Instead, I could play a "getting invulnerable" animation with the character playing an animation, wait for the server to tell me "you're invulnerable now" and then display my invulnerable status. This way, if a sniper shoots me, the client will receive both the sniper shot and the invulnerability messages on the same timeline, without any desync. 
<!-- TODO LATER do a sequence diagram for prediction vs action anticipation. TODO this should be explored more in FPS sample.  -->

:::info
Top: player with zero artificial latency, doing a jump and moving almost instantly.
Bottom: player with 1000ms RTT, doing the same. A jump (action anticipation) and moving when the server tells it too, a full RTT later.
<!-- TODO NOW Add side by side video for movement action anticipation, need to upload video -->

Players don't have to wait for their mouse movements to be synced for AOE. They are independant. The click will trigger a server RPC (you can see the added delay on the bottom video)
<!-- TODO NOW Add side by side video for AOE, need to upload video -->
:::

### Server Side Rewind (also called Lag Compensation)

Server rewind is a security check on a client driven feature to make sure we stay server authoritative. A common usecase is snipers.
If I aim at an enemy, I'm actually aiming at a ghost representation of that enemy that's RTT/2 ms late. If I click its head, the input sent to the server will take another RTT/2 ms to get to the server. That's a full RTT to miss my shot and is very frustrating.
The solution for this is to use server rewind by "favoring the attacker". Psychology 101: it's way more frustrating for an attacker to always miss their shots than for a target to get shot behind a wall once in a while. The client sends along with its input a message telling the server "I have hit my target at time t". The server when receiving this at time t+RTT/2 will rewind its simulation at time t-RTT, validate the shot and correct the world at the latest time (ie kill the target). This allows for the player to feel like the world is consistent (my shots are hitting what they are supposed to hit) while still remaining secure and server authoritative.
Note: the server rewind of the game's state is done all in the same frame, this is invisible to players.
This is a server side check that allows validating a client telling you what to do.
<!-- 
TODO LATER I'm not adding more info on this until we have discussed this further SDK side.
TODO shot behind a wall issue.  rewind limit to make it less bad
TODO talk about mixing this with extrapolation to help the "shot behind a wall" issue
TODO rocket league (https://www.youtube.com/watch?v=ueEmiDM94IE) uses this too, should see how that can change the teachings to be less FPS/sniper centric.
TODO Gif and diagrams to show flow for this.
This causes a "correction" for the target, since they predicted wrong that they survived.
TODO server rewind conflict resolution using buffering (see rocket league talk)
TODO server rewind not necessary with cloud gaming 
-->
:::info
There's no server side rewind implementation right now in Netcode for GameObjects, but you can implement your own. See our [roadmap](https://unity.com/roadmap/unity-platform/multiplayer-networking) for more information.
:::

**Other syncing techniques not relevant to Netcode for GameObjects**
Deterministic lockstep

A method of networking a system from one computer to another by sending only the inputs that control that system, rather than the state of that system. This allows for a big amount of entities to be synced (think RTS with hundreds of units)

Deterministic rollback

An enhancement of deterministic lockstep where clients forward-predict inputs while waiting for updates. This setup enables a more responsive game than lockstep. It’s relatively inexpensive.