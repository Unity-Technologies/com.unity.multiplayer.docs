---
id: physics
title: Physics
Description: Brief explanation on using Physics in Netcode for GameObjects
---

There are many different ways to do physics in multiplayer games. Netcode for GameObjects (Netcode) has a built in approach which allows for server authoritative physics where the physics simulation is only run on the server. To enable network physics add a `NetworkRigidbody` component to your object.

## NetworkRigidbody

NetworkRigidbody is a component that sets the Rigidbody of the GameObject into kinematic mode on every peer (except the server). That way, a realistic physics simulation runs on the server and the resulting positions synchronize to the clients without any interference.

To use NetworkRigidbody, add a **Rigidbody**, **NetworkTransform**, and **NetworkRigidbody** component to your NetworkObject.

Some collision events aren't fired when using NetworkRigidbody.
- On the server, all collision and trigger events (such as `OnCollisionEnter`) fire as expected and you can access (and change) values of the Rigidbody (such as velocity).
- On the clients, the Rigidbody is kinematic. Trigger events fire, but collision events won't fire when colliding with other networked Rigidbody instances.

:::tip
You need a gameplay event to happen on a collision, you can listen to `OnCollisionEnter` function on the server and synchronize the event via [ClientRpc](../advanced-topics/message-system/clientrpc.md) to all clients.
:::

## NetworkRigidbody2D

NetworkRigidbody2D works in the same way as NetworkRigidbody but for 2D physics (Rigidbody2D) instead.

## NetworkRigidbody & ClientNetworkTransform

You can use NetworkRigidbody` in combination with the [ClientNetworkTransform](../components/networktransform.md#clientnetworktransform) package sample to allow the owner client of a NetworkObject to move it authoritatively. In this mode, collisions only result in realistic dynamic collisions if the object is colliding with other NetworkObjects owned by the same client.

:::note
Add the ClientNetworkTransform component to your GameObject first. Otherwise, the NetworkRigidbody automatically adds a regular NetworkTransform.
:::
