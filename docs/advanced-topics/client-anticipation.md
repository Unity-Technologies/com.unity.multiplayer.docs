---
id: client-anticipation
title: Client anticipation
---

import ImageSwitcher from '@site/src/ImageSwitcher.js';

# Client Anticipation

While Netcode for GameObjects does not provide a full client-side prediction and reconciliation implementation, it does provide an implementation of client anticipation, which is a somewhat simplified model that lacks the full rollback-and-replay prediction loop, but still provides a mechanism for anticipating the server result of an action and then correcting if you anticipated incorrectly.

Client anticipation is done using `AnticipatedNetworkVariable<T>` and `AnticipatedNetworkTransform`, which both fundamentally work in the same way: By calling their various Anticipate methods, you can set a visual value that differs from the server value. You can then react to updates from the server in different ways depending on how you have configured the `StaleDataHandling` property. Additionally, both include a `Smooth` method to provide for interpolation, either when receiving updated values from the server that do not match the anticipated value, or when receiving updates from other clients' actions that you have not anticipated at all.

## Overview

Games with a server-authoritative architecture often face the problem of making the game feel responsive despite [latency](../learn/ladandpacketloss.md). For example, when a user wants to change the color of an object from green to blue they click a button in the UI, an RPC is sent to the server, and the server changes the object to blue. From the client's perspective, the object doesn't change to blue until the server responds to that message, resulting in a perceived delay for the user.

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/Anticipation/ServerAuthoritative.png?text=LightMode"
darkImageSrc="/sequence_diagrams/Anticipation/ServerAuthoritative_Dark.png?text=DarkMode"/>
</figure>

Client anticipation solves this problem by allowing a separation between the visual value and the authoritative value of an object. In this example, with anticipation, when the button is pressed, the client *anticipates* the result of the command by visually changing the object to green while it waits for an update from the server:

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/Anticipation/ClientAnticipation.png?text=LightMode"
darkImageSrc="/sequence_diagrams/Anticipation/ClientAnticipation_Dark.png?text=DarkMode"/>
</figure>

This creates a responsive feel to the gameplay, allowing the client player to feel as if things are responding immediately to their input when they are not.

## The Anticipated Value

Both `AnticipatedNetworkVariable<T>` and `AnticipatedNetworkTransform` separate their values into two concepts: the anticipated (or visual) value and the authoritative value. These are exposed slightly differently between the two:

- On `AnticipatedNetworkVariable<T>`, the anticipated value is stored as `variable.Value`, while the authoritative value is stored as `variable.AuthoritativeValue`. To change the anticipated value, call `variable.Anticipate(newValue)`, which will set the anticipated value to the newly provided value. On the server, calling `variable.Anticipate(newValue)` will change both the anticipated and authoritative values, enabling you to use the exact same code on the client and server; likewise, `variable.AuthoritativeValue = newValue` will also update both values on the server, while this value is **read-only** on the client.
- On `AnticipatedNetworkTransform`, the anticipated value is stored in both `gameObject.transform` and `anticipatedNetworkTransform.AnticipatedState`, both of which are **read-only** on the client, while the authoritative value is stored as `anticipatedNetworkTransform.AuthoritativeState`. If you simply update the transform's values on the client, they will be overwritten when the next server update comes in. To perform anticipation on the transform, you have to call `anticipatedNetworkTransform.AnticipateMove()`, `anticipatedNetworkTransform.AnticipateRotate()`,  `anticipatedNetworkTransform.AnticipateScale()`, or `anticipatedNetworkTransform.AnticipateState()` to update all three at once. As with `AnticipatedNetworkVariable<T>`, calling any of these on the server will update both the anticipated and authoritative values.

## StaleDataHandling

One problem that an anticipation system needs to be able to solve is the problem of **stale data**. Stale data refers to updates from the server that represent actions that happened before your last request, and are actually going to be overwritten by that request.

Let's return to the example from above of an object whose color gets changed, but let's expand it to include a second client who's also trying to change the color of the same object. If client 1 tries to change the object to blue, and then client 2 tries to change it to red, client 1 will see a delayed switch to blue, followed by a switch to red (which is fine because this is actually what happened). Client 2, however, will click the button to change it to red, then see it change to blue, followed by a change to red.

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/Anticipation/ServerAuthoritativeMultiClient.png?text=LightMode"
darkImageSrc="/sequence_diagrams/Anticipation/ServerAuthoritativeMultiClient_Dark.png?text=DarkMode"/>
</figure>

With client anticipation, we change the way this works: client 1 anticipates the change to blue so it happens immediately, and then later sees the object change to red, which, again, is fine. Client 2 also sees the object change to red immediately, but because a change to blue is already in progress, that overwrites client 2's anticipated value, causing it to flicker briefly to blue from client 1's request before changing back to red again from client 2's request.

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/Anticipation/StaleDataNoPolicy.png?text=LightMode"
darkImageSrc="/sequence_diagrams/Anticipation/StaleDataNoPolicy_Dark.png?text=DarkMode"/>
</figure>

To address this, Netcode for GameObjects's client anticipation includes a feature called `StaleDataHandling`. Stale data is determined based on assumptions about causation - it assumes that when you make an anticipation on the client side based on player input, that at the same time, you will be sending an RPC to the server requesting it to make the same change. It uses a continuously incrementing `AnticipationCounter` to track when the server has received and responded to the batch of requests that was sent on the same frame as the variable was anticipated. If an update for a variable arrives before the server has processed that message, the anticipation system regards that data as being "stale".

There are two ways you can respond to stale data, which are determined by the `StaleDataHandling` value on each `AnticipatedNetworkVariable` and `AnticipatedNetworkTransform`:

If `StaleDataHandling` is set to `StaleDataHandling.Ignore`, stale data will not roll back the value of the variable or transform to the server value and will not trigger the `OnReanticipate` event. `ShouldReanticipate` will remain false in the event something else triggers the callback. The authoritative value will still be updated, however, and for `AnticipatedNetworkVariable`, the `OnAuthoritativeValueUpdated` callback will still be called. The result here is that, for client 2, the change to blue is recognized as being sequenced before its change to red, and is thus ignored, eliminating the flickering. This is the default behavior for `AnticipatedNetworkVariable<T>`.

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/Anticipation/StaleDataIgnore.png?text=LightMode"
darkImageSrc="/sequence_diagrams/Anticipation/StaleDataIgnore_Dark.png?text=DarkMode"/>
</figure>

If `StaleDataHandling` is set to `StaleDataHandling.Reanticipate`, stale data will be treated the same way as any other server data updates. The value will be rolled back, `ShouldReanticipate` will be set to true, and the `OnReanticipate` event will be fired (see below). In typical client prediction systems, and generally involves replaying the player's input from the time of the incoming data to now, which results in re-performing the switch to red.

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/Anticipation/StaleDataReanticipate.png?text=LightMode"
darkImageSrc="/sequence_diagrams/Anticipation/StaleDataReanticipate_Dark.png?text=DarkMode"/>
</figure>

However, the `OnReanticipate` event can also be used for other purposes, such as "forward simulation" of an AI to anticipate a new position for it based on the latency. While we provide this functionality for advanced users, the implementations of these use cases are largely left as an exercise to the reader.

## The OnReanticipate Event

`NetworkBehaviour` has a virtual method called `OnReanticipate`. When server data is received for an `AnticipatedNetworkVariable` or `AnticipatedNetworkTransform`, it will be rolled back immediately, setting its anticipated state. Each frame during which a server update for any `AnticipatedNetworkVariable` or `AnticipatedNetworkTransform` is received, after **all** such operations have been performed and **all** objects are rolled back to their server state, each `NetworkObject` that had any rollbacks will call the `OnReanticipate` method on **all** of its `NetworkBehaviour`s.

If you need to do any sort of reanticipation to update the anticipated state of any of these variables or transforms, this method is where you will do it. This method takes as its only parameter a `double` providing the amount of time, in seconds, that the object has been rolled back (which corresponds to the round-trip time of the current batch of responses received from the server). This value can be used to calculate the difference between what the server value is, and what the anticipated client value should be, and apply that change.

However, note that not all variables and transforms on that object will necessarily have received any updates, so not all of them will have necessarily been rolled back to a previous state. Before doing any reanticipation on any given variable or transform, you should check that variable/transform's `ShouldReanticipate` property. If this is `false`, then it still contains the most recent client anticipated value and no work is needed.

### Global OnReanticipate

In addition to the `NetworkBehaviour`'s `OnReanticipate` method, `NetworkManager` also has a callback that can be subscribed to for global reanticipation. This is useful if you need to run your reanticipation in a more global way, such as if you need to run it step-wise (say, anticipating one frame at a time) and need all objects to complete one step before any of them begin the second one. This callback receives the same `lastRoundTripTime` value as the `NetworkBehaviour` method, and is called **after** all of the `NetworkBehaviour` methods have been called.

:::note

If you want to implement a full client-side prediction model in your game, the global OnReanticipate callback is likely the ideal place to incorporate your rollback and replay logic. The details of implementing this, however, are left as an exercise for the user; implementing a full, production-ready prediction loop is a complex topic and recommended for advanced users only.

:::

## Smoothing for Corrections

Much of the time, when you perform an anticipation action, your anticipation will be correct and the server will update the state to the same value as you did. Occasionally, though, the server will have a different result, since latency can result in the server state changing before it receives your command in ways that affect the result. When this happens, by default, the value will be snapped to the new server value.

In some cases, this may result in an undesirable player experience, causing things that normally move smoothly to become choppy. When this happens, you can smooth out the result by using the `Smooth()` function on both `AnticipatedNetworkVariable` and `AnticipatedNetworkTransform`.

`Smooth()` takes a starting position and an ending position (which would usually be the previous anticipated value and either the new anticipated value or the current authoritative value) and a duration over which to perform the smoothing. For `AnticipatedNetworkVariable`, because the type is generic, it also requires a delegate to use to perform the smoothing operation (which takes a from value, a to value, and a percent value, and in many cases may just be `Mathf.Lerp`).

For convenience, you can use `PreviousAnticipatedValue` and `PreviousAnticipatedState` to access the value most recently passed into `Anticipate()` for `AnticipatedNetworkVariable` and `AnticipatedNetworkTransform` respectively.  Note, however, that if you call `Anticipate()` or its related transform methods prior to doing the smoothing, they will update the previous anticipated value, so you may need to store the previous anticipated value in a local variable before doing your reanticipation.

### Server-Side Smoothing

Even though these concepts are mostly for client-side use, there are cases where you might want to perform server-side smoothing as well. For example, when running in host mode, the host player will see the movement of other players. Due to latency and jitter, input updates from remote clients may not arrive every frame, which may result in choppy movement of an AnticipatedNetworkTransform, for example.

To address this, you can also use the `Smooth()` function at any time on the server side. The server does not do anticipation, so it will not get any `OnReanticipate()` events, but you can, for example, call `Smooth()` each time you receive an input from the client in order to smooth the motion between the previous position and the new one.

One important distinction between client-side smoothing and server-side smoothing for `AnticipatedNetworkTransform`, though, is that client-side smoothing smooths the actual motion of the transform, while server-side smoothing only smooths the visual depiction of the motion. Which is to say, `AnticipatedState` is updated, but `transform` is not, so all game logic and collision detection will be done based on the actual position, and the rendering of the object will be slightly behind the actual position of the object.