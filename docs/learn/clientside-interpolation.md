---
id: clientside_interpolation
title:  Client-side Interpolation
description: Guide covering the basics of lag mitigation and a way to produce smooth gameplay.
---

As we discussed in [Lag and Packet Loss](lagandpacketloss.md) - latency is our enemy, with [Jitter](lagandpacketloss#jitter) being the chaotic element that adds complexity to our task of producing "smooth" gameplay experience.

If we just accept the fact that latency exists, but chose not to do anything about it - we would implement what is known as "dumb terminal". Dumb Terminals do not need to understand anything about the simulation they are visualizing for the client - all they do is:

* Send inputs from Clients to the Server
* Receive the resulting state from the Server and render it appropritely

This is a conservative approach that makes no attempt to mitigate delay, but also never shows an incorrect user state. The problems with this approach is that not only will the user feel the latency, the frequency of updates from the server would dictate how choppy our gameplay experience is for the clients. In effect, regardless of the potential framerate that the client could achieve, the game would only run at the cadence the server (with its limiting networking factors) is capable of. This could reduce a good 60 FPS experience into a  bad 15 FPS experience with perceivable input lag.

Not only does this approach cause some unresponsiveness (which may be acceptable in certain game genres), it also makes it more difficult to aim at other players. The non-up-to-date rendering of the world forces the player to aim ahead of their target to compensate for lag. As a worst case scenario, the player could be legitimately aiming at the enemy player, but due to the fact that the enemy was actually a 100-150ms "ahead" (as in forward in time, not necessarily ahead in a positional sense) of what is being rendered, they may be unable to hit the enemy unless he runs predictably in a straight line. 

Now throw in some chaos by means of [RTT fluctuations](lagandpacketloss#round-trip-time-rtt) and [Jitter](lagandpacketloss#jitter), and we are getting into an unacceptable gameplay experience.

Fortunately we can mitigate the effects of latency and jitter.

## Client-Side Interpolation

Visual choppiness is caused by infrequent (in comparison to the speed at which clients are rendering their screens) updates from the server and it could also be exasperated by bad network conditions causing jitter. We can employ **Client-Side Interpolation** to reduce this effect. 

In client-side Interpolation instead of just snapping objects to their positions that are transmitted from the server the client smoothly interpolates to this state over time. This approach is still conservative - the client just smoothens out the transition between valid states that were sent from the server. 

Normally a client in a server-authoritative topology, barring any additional tricks and techniques, would be able to render state that is approximately half the Round Trip Time (RTT) behind the actual state of simulation on the server. In order for client-side interpolation to be able to work it needs to be somewhat behind (catching up to) the most recent state passed to us from the server. In effect, our latency would increase by our [Interpolation Period](../reference/glossary/ticks-and-update-rates#interpolation-period). In order to avoid stutter, we want that period to be less than the [Packet Sending Period](../reference/glossary/ticks-and-update-rates#packet-sending-period). When the client is done interpolating to the previous state, it would always have received a new state to repeat the process. 

Client-side interpolation is implemented in Netcode for GameObjects (Netcode) in the [NetworkTransform](../components/networktransform.md) component.

:::unity Future  Netcode Feature
This implementation of Client-side Interpolation provides some improvement to the choppiness problem, but it does not completely solve the issues caused by jitter.

An improvement that produces even smoother gameplay at the cost of even more added latency is Snapshot Interpolation, where instead of interpolating towards the most up-to-date state, we introduce a buffer that keeps several snapshots of incoming state and interpolates through them. This technique provides better handling of Jitter, but, again, it introduces slight additional latency on top of what we had in Clientside Interpolation.

Snapshot Interpolation is not implemented in Netcode at this time.
:::

## Boss Room Example

In the [Boss Room sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/), NetworkTransform components are used for client-side interpolation. Since transforms are updated in FixedUpdate, however, there is also some server-side interpolation that is needed on the host to smooth out movement. See [ClientProjectileVisualization](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/GameplayObjects/ClientProjectileVisualization.cs) and [PositionLerper](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Utils/PositionLerper.cs) for an example of how it is done.
