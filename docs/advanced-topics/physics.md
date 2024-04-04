---
id: physics
title: Physics
Description: Brief explanation on using Physics in Netcode for GameObjects
---

There are many different ways to do physics in multiplayer games. Netcode for GameObjects (Netcode) has a built in approach which allows for server-authoritative physics where the physics simulation only runs on the server. To enable network physics, add a `NetworkRigidbody` component to your object.

## NetworkRigidbody

NetworkRigidbody is a component that sets the Rigidbody of the GameObject into kinematic mode on all non-authoritative instances (except the instance that has authority). Authority is determined by the NetworkTransform component (required) attached to the same GameObject as the NetworkRigidbody. Whether the NetworkTransform is server authoritative (default) or owner authoritative, the NetworkRigidBody authority model will mirror it. That way, the physics simulation runs on the authoritative instance, and the resulting positions synchronize on the non-authoritative instances, each with their RigidBody being Kinematic, without any interference.

To use NetworkRigidbody, add a Rigidbody, NetworkTransform, and NetworkRigidbody component to your NetworkObject.

Some collision events aren't fired when using `NetworkRigidbody`.
- On the `server`, all collision and trigger events (such as `OnCollisionEnter`) fire as expected and you can access (and change) values of the `Rigidbody` (such as velocity).
- On the `clients`, the `Rigidbody` is kinematic. Trigger events still fire but collision events won't fire when colliding with other networked `Rigidbody` instances.

:::tip

If there is a need for a gameplay event to happen on a collision, you can listen to `OnCollisionEnter` function on the server and synchronize the event via `Rpc(SendTo.ClientsAndHost)` to all clients.

:::

## NetworkRigidbody2D

`NetworkRigidbody2D` works in the same way as NetworkRigidbody but for 2D physics (`Rigidbody2D`) instead.

## NetworkRigidbody & ClientNetworkTransform

You can use NetworkRigidbody with the [`ClientNetworkTransform`](../components/networktransform.md#clientnetworktransform) package sample to allow the owner client of a NetworkObject to move it authoritatively. In this mode, collisions only result in realistic dynamic collisions if the object is colliding with other NetworkObjects (owned by the same client).

:::note

Add the ClientNetworkTransform component to your GameObject first. Otherwise the NetworkRigidbody automatically adds a regular NetworkTransform.

:::

## Physics and latency

A common issue with physics in multiplayer games is lag and how objects update on basically different timelines. For example, a player would be on a timeline that’s offset by the network latency relative to your server’s objects. One way to prepare for this is to test your game with artificial lag. You might catch some weird delayed collisions that would otherwise make it into production.

The ClientDriven [bitesize sample](../learn/bitesize/bitesize-clientdriven.md) addresses this by manually adding forces server-side to offer a buffer before an actual collision, but it still feels wobbly at times. However, this isn't really a solution. 

The best way to address the issue of physics latency is to create a custom `NetworkTransform` with a custom physics-based interpolator. You can also use the [Network Simulator tool](../../tools/network-simulator.md) to spot issues with latency.