---
id: networktransform
title: NetworkTransform
---

import ImageSwitcher from '@site/src/ImageSwitcher.js';

The position, rotation, and scale of a [`NetworkObject`](../basics/networkobject.md) is normally only synchronized once (when that object spawns). To synchronize position, rotation, and scale at real-time during the game, you must use a `NetworkTransform` component. `NetworkTransform` synchronizes the transform from server object to the clients.

`NetworkTransform` covers most use cases for synchronizing transforms. For some special cases, such as fast paced games, a custom implementation with a different interpolation algorithm might be better.

:::tip

You can have more than one `NetworkTransform` components on child objects of your network object to synchronize individual positions of child objects.

:::

# Restricting synchronization

You often don't need to synchronize all transform values of a GameObject over the network. For instance, if the scale of the GameObject never changes, you can deactivate it in the **syncing scale** row in the Inspector. Deactivating synchronization saves CPU costs and network bandwidth.

# Thresholds

You can use the threshold values to set a minimum threshold value. Whether to scale to your project's world unit scale or to reduce the frequency of synchronization updates, changes below threshold values won't synchronize. For example, if your `NetworkTransform` has `Interpolate` enabled, you might find that you can lower your position threshold resolution (position threshold value increased) without impacting the "smoothness" of an object's motion. Increasing the threshold value (lowering the resolution of synchronization updates) reduces the frequency of when the object's position synchronize (which translates to reducing bandwidth consumption).

:::note

The small changes below the threshold still result in a synchronization of the values as soon as all the accumulative changes cross the threshold.

:::

# Local space

By default, `NetworkTransform` synchronizes the transform of an object in world space. The **In Local Space** configuration option allows you to change to synchronizing the transform in local space instead.

Using **local space** can improve the synchronization of the transform when the object gets re-parented because the re-parenting won't change the **local space** transform of the object but does change the **global space** position.

# Interpolation

Check the `Interpolate` setting to enable interpolation. Interpolation is enabled by default and is highly recommended. With interpolation enabled, the `NetworkTransform` interpolates incoming changes to position, rotation, and scale. Interpolation also buffers the incoming data with a slight delay and applies extra smoothing to the values. All these factors combined result in a much smoother transform synchronization.

When you have `Interpolate` disabled, changes to the transform immediately apply, resulting in a less smooth position and more jitter.

:::note

The `NetworkTransform` component only interpolates client-side. For smoother movement on the host or server, users might want to implement interpolation server-side as well. While the server won't have the jitter caused by the network, some stutter can still happen locally (for example, movement done in `FixedUpdate` with a low physics update rate).

:::

<figure>
<ImageSwitcher
lightImageSrc="/img/BufferedTick.png?text=LightMode"
darkImageSrc="/img/BufferedTick_Dark.png?text=DarkMode"/>
  <figcaption>Graphic of a buffered tick between the server and a client (that is, interpolation)</figcaption>
</figure>

## ClientNetworkTransform

`NetworkTransform` always synchronizes positions from the server to the clients and position changes on the clients aren't allowed. Netcode for GameObjects comes with a sample containing a `ClientNetworkTransform`. This transform synchronizes the position of the owner client to the server and all other client allowing for client authoritative gameplay.

You can use the existing `ClientNetworkTransform` in the Multiplayer Samples Utilities package.<br />

To add the Multiplayer Samples Utilities package:

* Open the Package Manager by selecting **Window** > **Package Manager**.
* Select **Add** (+) > **Add from git URL…**.
* Copy and paste the following Git URL: `https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop#main`
* Select **Add**.

Optionally, you can directly add this line to your `manifest.json` file:

`"com.unity.multiplayer.samples.coop": "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop#main"`

You can also create your own `ClientNetworkTransform` by deriving from `NetworkTransform`, overriding the `OnIsServerAuthoritative` virtual method, and returning false:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Packages/com.unity.multiplayer.samples.coop/Utilities/Net/ClientAuthority/ClientNetworkTransform.cs
```
