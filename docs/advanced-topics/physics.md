---
id: physics
title: Physics
Description: Brief explanation on using Physics in Netcode for GameObjects
---

There are many different ways to do physics in multiplayer games. Netcode for GameObjects (Netcode) has a built in approach which allows for server authoritative physics where the physics simulation is only run on the server. To enable network physics add a `NetworkRigidbody` component to your object.

## NetworkRigidbody

`NetworkRigidbody` is a component which sets the `Rigidbody` of the `GameObject` into kinematic mode on every peer except the server. That way a realistic physics simulation can be run on the server and the resulting positions can be synchronized to the clients without any interference.

To use `NetworkRigidbody` add a `Rigidbody`, `NetworkTransform` and `NetworkRigidbody` component to your `NetworkObject`.

Some collision events are not fired when using `NetworkRigidbody`.
- On the `server` all collision and trigger events (such as OnCollisionEnter) will fire as expected and you can access / modify values of the `Rigidbody` such as velocity.
- On the `clients` the rigidbody will be kinematic. Trigger events will still be fired but collision events will not be fired when colliding with other networked rigidbodies.

:::tip
If there is a need for a gameplay event to happen on a collision you can listen to `OnCollisionEnter` function on the server and synchronize the event via ClientRpc to all clients.
:::

## NetworkRigidbody2D

`NetworkRigidbody2D` works in the same way as `NetworkRigidbody` but for 2d physics (`Rigidbody2D`) instead.

## NetworkRigidbody & ClientNetworkTransform

`NetworkRigidbody` can be used in combination with the [ClientNetworkTransform](../components/networktransform.md#clientnetworktransform) package sample to allow the owner client of a `NetworkObject` to move it authoritatively. In this mode collisions will only result in realistic dynamic collisions if the object is colliding with other `NetworkObjects` which are owned by the same client.

:::note
Add the `ClientNetworkTransform` component first to your `GameObject` else the `NetworkRigidbody` will automatically add a regular `NetworkTransform`.
:::