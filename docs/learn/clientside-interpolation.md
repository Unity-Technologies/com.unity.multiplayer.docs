---
id: clientside_interpolation
title:  Clientside Interpolation
description: Guide covering the basics of lag mitigation and a way to produce smooth gameplay.
---

As we discussed in [Lag and Packet Loss](lagandpacketloss.md) - latency is our enemy, with [Jitter](lagandpacketloss#jitter) being the chaotic element that adds complexity to our task of producing "smooth" gameplay experience.

If we just accept the fact that latency exists, but chose not to do anything about it - we would implement what is known as "dumb terminal". Dumb Terminals do not need to understand anything about the simulation they are visualizing for the client - all they do is:

 - send inputs from Clients to the Server
 - receive the resulting state from the Server and render it appropritely

This is a conservative approach that makes no attempt to mitigate delay, but also never shows an incorrect user state. The problems with this approach is that not only will the user feel the latency, the frequency of updates from the server would dictate how choppy our gameplay experience is for the clients. In effect, regardless of the potential framerate that the client could achieve, the game would only run at the cadence the server (with its limiting networking factors) is capable of. This could reduce a good 60 FPS experience into a  bad 15 FPS experience with perceivable input lag.

Not only does this approach cause some unresponsiveness (which may be acceptable in certain game genres), it also makes it more difficult to aim at other players. The non-up-to-date rendering of the world forces the player to aim ahead of their target to compensate for lag. As a worst case scenario, the player could be legitimately aiming at the enemy player, but due to the fact that the enemy was actually a 100-150ms "ahead" (as in forward in time, not necessarily ahead in a positional sense) of what is being rendered, they may be unable to hit the enemy unless he runs predictably in a straight line. 

Now throw in some chaos by means of [RTT fluctuations](lagandpacketloss#round-trip-time-rtt) and [Jitter](lagandpacketloss#jitter), and we are getting into an unacceptable gameplay experience.

Fortunately we can mitigate the effects of latency and jitter.

## Client Side Interpolation

Visual choppiness is caused by infrequent (in comparison to the speed at which clients are rendering their screens) updates from the server and it could also be exasperated by bad network conditions causing jitter. We can employ **Client Side Interpolation** to reduce this effect. 

In client side Interpolation instead of just snapping objects to their positions that are transmitted from the server the client smoothly interpolates to this state over time. This approach is still conservative - the client just smoothens out the transition between valid states that were sent from the server. 

Normally a client in a server-authoritative topology, barring any additional tricks and techniques, would be able to render state that is approximately half the Round Trip Time (RTT) behind the actual state of simulation on the server. In order for client-side interpolation to be able to work it needs to be somewhat behind (catching up to) the most recent state passed to us from the server. In effect, our latency would increase by our [Interpolation Period](../reference/glossary/network-latency-management#interpolation-period).  In order to avoid stutter, we want that period to be less than the [Packet Sending Period](../reference/glossary/network-latency-management#packet-sending-period).  When the client is done interpolating to the previous state, it would always have received a new state to repeat the process. 


:::unity Future MLAPI Feature
This implementation of Client-side Interpolation provides some improvement to the choppiness problem, but it does not completely solve the issues caused by jitter.

An improvement that produces even smoother gameplay at the cost of even more added latency is Snapshot Interpolation, where instead of interpolating towards the most up-to-date state, we introduce a buffer that keeps several snapshots of incoming state and interpolates through them. This technique provides better handling of Jitter, but, again, it introduces slight additional latency on top of what we had in Clientside Interpolation.

Snapshot Interpolation is not implemented in MLAPI at this time.
:::


# Boss Room Example 

:::unity
This technique is implemented in the [BossRoom sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/). A brief implementation description is as follows (with further documentation available on the Boss Room GitHub page):
:::

Before we dive into code, let's define the `GameObject` composition model for player characers, and similarly AI characters, inside BossRoom:
- the first, a non-visual, `NetworkObject`. This `NetworkObject` contains both server and client `NetworkBehaviour` components, namely `ServerCharacterMovement.cs` and `ClientGenericMovement.cs.`
(We'll refer to this `GameObject` as "PC")
- the second, a visual `GameObject`. This `GameObject` will display the character's model & play animations. This is the `GameObject` which performs client-side interpolation (We'll refer to this as "Graphics").
- 
We first take a look at `NetworkCharacterState.cs`, a `NetworkBehaviour` component attached to a "PC":

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Shared/Game/Entity/NetworkCharacterState.cs#L28-L36
```


`NetworkCharacterState`, a `NetworkBehaviour`, defines two `NetworkVariables`, `NetworkPosition` and `NetworkRotationY`.
These two `NetworkVariables` are defined with default permissions, meaning that only the server is able to modify the values of these `NetworkVariables`.
You'll also notice that they're also initialized with a particular `SendChannel`, namely `MLAPI.Transports.NetworkChannel.PositionUpdate`.

We'll now look at the place in code where these `NetworkVariables` are modified on the server. This is done inside `ServerCharacterMovement.cs`:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Server/Game/Character/ServerCharacterMovement.cs#L131-L141
```

The first thing to point out is that this is done inside `FixedUpdate()`, with Boss Room's `FixedTimestep` (found under **ProjectSettings->Time**) set to 0.02s.
This is the maximum possible frequency of updates of position and rotation. We highlight this because a server will not send a `NetworkVariable` update if the value is unchanged.

We'll next take a look at client-side code, which interprets what to do with this `NetworkVariable` data.
A PC's position and rotation are modified inside the *Update()* method of `ClientGenericMovement.cs`:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Character/ClientGenericMovement.cs#L35-L48
```

This is what we refered to as a "dumb terminal". Position and rotation data are applied as quickly as the client can render them.
Let's see how "Graphics" smoothes  the transition of valid position & rotation data. The `ClientCharacterVisualizaton.cs`component is attached to the "Graphics" `GameObject`. The  "Graphics"' transform is modified inside the *Update()* method of `ClientCharacterVisualizaton.cs`:


```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Character/ClientCharacterVisualization.cs#L276-L299
```

Lastly, we will examine what `VisualUtils.SmoothMove(...)`  actually does

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/BossRoom/Scripts/Client/Game/Utils/VisualUtils.cs#L22-L64
```

- For position syncing, the Graphics transform is moved in the direction of the PC transform by an amount that is proportional to the distance between the two transforms, until the positions are identical.
- For rotation syncing, the Graphics transform is rotated towards the PC transform by a minimum amount every frame, until the rotations are identical.

As mentioned, these calculations introduce additional latency. However, interpolation is what effectively masks jitter and makes the player movement "feel" smooth
