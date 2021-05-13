---
id: clientsideinterpolationbuffering
title:  Clientside interpolation and buffering
description: Tutorial that covers the basics of lag mitigation and a way to produce smooth gameplay.
---

As we discussed in [Lag and Packet Loss](lagandpacketloss.md) - latency is our enemy, with [Jitter](lagandpacketloss#jitter) being the chaotic element that adds complexity to our task of producing "smooth" gameplay experience.

If we just accept the fact that latency exists, but chose not to do anything about it - we would implement what is known as "dumb terminal". Dumb Terminals don't need to understand anything about the simulation they are visualizing for the client - all they do is:

 - send inputs from Clients to the Server
 - receive the resulting state from the Server and render it appropritely

This is a very conservative approach that makes no attempt to mitigate delay, but also never shows an incorrect user state. Teh problems with this approach is that not only will the user feel the latency, the frequency of updates from the server would dictate how choppy our gameplay experience is for the clients. In effect, regardless of the potential framerate that the client could achieve, the game would only run at the cadence the server (with its limiting networking factors) is capable of.  This could reduce a good 60 FPS experience into a  bad 15 FPS experience with percievable input lag.

Not only does this  approach cause some unresponsiveness (which may be acceptable in certain game genres,) it also makes it more difficult to aim at other players - the non-up-to-date rendering of the world forces the player to aim ahead of their target to compensate for lag. Worst case scenario - they could be legitimately aiming at the enemy player, but due to the fact that the enemy was actually a 100-150ms "ahead" (as in forward in time, not neccessarily ahead in a positional sense) of what is being rendered - they have no chance to hit the enemy unless he just runs predictably in a straight line. 

Now throw in some chaos by means of [RTT fluctuations](lagandpacketloss#round-trip-time-rtt) / [Jitter](lagandpacketloss#jitter) and we're getting into an unacceptable gameplay experience..

Fortunately we can mitigate the effects of latency and jitter.

## Client Side Interpolation

Visual choppiness is caused by infrequent (in comparison to the speed at which clients are rendering their screens) updates from the server and it could also be exasperated by bad network conditions causing jitter. We can employ **Client Side Interpolation** to reduce this effect. 

In client side Interpolation instead of just snapping objects to their positions that are transmitted from the server the client smoothly interpolates to this state over time. This approach is still conservative - the client just smoothens out the transition between valid states that were sent from the server. 

Normally a client in a server-authoritative topology, barring any additional tricks and techniques, would be able to render state that is approximately half the Round Trip Time (RTT) behind the actual state of simulation on the server. In order for clientside interpolation to be able to work it needs to be somewhat behind (catching up to) the most recent state passed to us from the server. In effect our latency would increase by our [Interpolation Period](../reference/glossary/network-latency-management#interpolation-period)  In order to avoid stutter we want that period to be less than the P[acket Sending Period](../reference/glossary/network-latency-management#packet-sending-period).  GThis will mean that when the client is done interpolating to the previous state - it would always have received new state to repeat the process. 


:::unity Future MLAPI Feature
This implementation of Clientside Interpolation provides some improvement to the choppiness problem, but it doesn't completely solve the issues caused by jitter.

An improvement that produces even smoother gameplay at the cost of even more added latency is Snapshot Interpolation, where instead of interpolating towards the most up-to-date state we introduce a buffer that keeps several snapshots of incoming state and interpolates through them. This technique provides better handling of Jitter, but, again, it introduces slight additional latency on top of what we had in Clientside Interpolation.

!!! Snapshot Interpolation - this is not implemented in MLAPI yet, but it's planned
:::


# Boss Room Example 


This technique is implemented in the (BossRoom sample)[https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/]. A brief implementation description is as follows (with further documentation available on the BossRoom GitHub page):

 - all players and Imps are comprised of two logically tied GameObjects:
    - the first one is updating it's position to match the one sent from the server as soon as we recieve new state
    - the second one smoothly follows the first GameObject


