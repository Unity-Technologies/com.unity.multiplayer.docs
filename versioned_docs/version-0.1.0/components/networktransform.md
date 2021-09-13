---
id: networktransform
title: NetworkTransform
---
The  position and rotation of a [`NetworkObject`](../mlapi-basics/networkobject.md) is normally only synchronized when that object is spawned. To synchronize position and rotation at realtime during the game, a `NetworkTransform` component is needed. `NetworkTransform` synchronizes the transform of the owner of the network object to all other clients.

:::note
`NetworkTransform` does not sync the scale of the object.
:::

While `NetworkTransform` works out of the box for simple position synchronization, it is not a one size fits all solution. In case you experience stuttering with `NetworkTransform`, you can try increasing `Fixed Sends Per Second` and decreasing `Min Meters` values.

:::tip
You can have multiple `NetworkTransform` components on child objects of your network object to synchronize individual positions of child objects.
:::

## Extrapolation

When enabled, extrapolation estimates the time between when a tick advances in server-side animation and the update of the frame completes on the client-side. The game object extrapolates the next frame's values based on the ratio. 

## Interpolation

When enabled, indicates the calculated interval between receiving and updating the position between two positions. It smoothes positions through calculations, for example EnableRange allows the position to update and return without causing snapping.
