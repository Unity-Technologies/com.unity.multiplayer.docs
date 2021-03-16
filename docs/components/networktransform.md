---
id: networktransform
title: NetworkTransform
---
The  position and rotation of a `NetworkObject` is normally only synchronized when that object is spawned. To synchronize position and rotation at realtime during the game, a `NetworkTransform` component is needed. `NetworkTransform` synchronizes the transform of the owner of the network object to all other clients.

:::note
`NetworkTansform` does not sync the scale of the object.
:::

While `NetworkTransform` works out of the box for simple position synchronization, it is not a one size fits all solution. In case you experience stuttering with `NetworkTransform`, you can try increasing `Fixed Sends Per Second` and decreasing `Min Meters` values.

:::tip
You can have multiple `NetworkTransform` components on child objects of your network object to synchronize individual positions of child objects.
:::
