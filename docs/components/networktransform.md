---
id: networktransform
title: NetworkTransform
---
A `NetworkObjects` position and rotation is normally only synchronized when that object get spawned. To sychronize position and rotation at realtime during the game a `NetworkTransform` component is needed.

While `NetworkTransform` works out of the box for simple position synchronization, it is not a one size fits all solution. In case you experience stuttering with `NetworkTransform`, you can try increasing `Fixed Sends Per Second` and decreasing `Min Meters`. 


:::tip
You can have multiple `NetworkTransform` components of child objects of your network object to synchronize individual positions of child objects.
:::

:::note
`NetworkTansform` does not sync the scale of the object.
:::