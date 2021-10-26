---
id: networktransform
title: NetworkTransform
---
The  position and rotation of a [`NetworkObject`](../mlapi-basics/networkobject.md) is normally only synchronized when that object is spawned. To synchronize position, rotation, and scale at realtime during the game, a `NetworkTransform` component is needed. `NetworkTransform` synchronizes the transform of the GameObject it's attached to. This replicates that data to all other players.

While `NetworkTransform` works out of the box for simple position synchronization, it is not a one size fits all solution. In case you experience stuttering with `NetworkTransform`, you can try enabling interpolation, increasing `Fixed Sends Per Second`, and decreasing `Thresholds` values.

:::tip
You can have multiple `NetworkTransform` components on child objects of your network object to synchronize individual positions of child objects.
:::

## Extrapolation

When enabled, extrapolation estimates the time between when a tick advances in server-side animation and the update of the frame completes on the client-side. The game object extrapolates the next frame's values based on the ratio. 

## Interpolation

Interpolation creates a smooth object transition by using two known, historical positions to predict an object's path during the interval between receiving and updating positional data for that object. This is a buffer for the network to sync between object input and rendering, and reduces object jitter or position snapping.