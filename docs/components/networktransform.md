---
id: networktransform
title: NetworkTransform
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

The position, rotation, and scale of a [`NetworkObject`](../basics/networkobject.md) is normally only synchronized once when that object is spawned. To synchronize position, rotation, and scale at realtime during the game, a `NetworkTransform` component is needed. `NetworkTransform` synchronizes the transform from server object to the clients.

`NetworkTransform` covers most use cases for synchronizing transforms. For some special cases such as really fast paced games a custom implementation with a different interpolation algorithm might be better.

:::tip
You can have multiple `NetworkTransform` components on child objects of your network object to synchronize individual positions of child objects.
:::

## Restricting Synchronization

Quite often not all transform values of a GameObject need to be synchronized over the network. For instance if the scale of the GameObject never changes it can be deactivated in the `syncing scale` row in the inspector. Currently deactivating synchronization only saves on CPU costs but in the future it will also reduce the bandwidth used by NetworkTransform`.

## Thresholds

The threshold values can be used to set a minimum threshold value. Whether to properly scale to your project's world unit scale or to reduce the frequency of synchronization updates, changes below threshold values will not be synchronized. For example, if your NetworkTransform has Interpolate enabled you might find that you can lower your position threshold resolution (i.e. position threshold value increased) without impacting the "smoothness" of an object's motion. Increasing the threshold value (lowering the resolution of synchronization updates) will reduce the frequency of when the object's position is synchronized which translates to reducing bandwidth consumption.

:::note
Many small changes below the threshold will still result in a synchronization of the values as soon as all the accumulative changes cross the threshold.
:::

## Local Space

By default `NetworkTransform` synchronizes the transform of an object in world space. The `In Local Space` configuration option allows to switch to synchronizing the transform in local space instead.

Using `local space` can improve the synchronization of the transform when the object gets re-parented because the re-parenting will not change the `local space` transform of the object but would modify the `global space` position.

## Interpolation

Check the `Interpolate` setting to enabled interpolation. Interpolation is enabled by default and is highly recommended. With interpolation enabled the `NetworkTransform` smoothly interpolates incoming changes to position, rotation and scale. In addition interpolation buffers the incoming data with a slight delay and applies additional smoothing to the values. All these factors combined result in a much smoother transform synchronization.

When `Interpolate` is disabled changes to the transform are applied immediately resulting in a less smooth position and more jitter.


<figure>
<ImageSwitcher 
lightImageSrc="/img/BufferedTick.png?text=LightMode"
darkImageSrc="/img/BufferedTick_Dark.png?text=DarkMode"/>
  <figcaption>Graphic of a buffered tick between the server and a client (i.e. interpolation)</figcaption>
</figure>

### ClientNetworkTransform

`NetworkTransform` always synchronizes positions from the server to the clients and position changes on the clients are not allowed. Netcode for GameObjects comes with a sample containing a `ClientNetworkTransform`. This transform synchronizes the position of the owner client to the server and all other client allowing for client authoritative gameplay.

The `ClientNetworkTransform` lives inside the Multiplayer Samples Utilities package. You can add this package via the `Package Manager` window in the Unity Editor by selecting `add from Git URL` and adding the following URL: `https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop#main`

Or you can directly add this line to your `manifest.json` file:

`"com.unity.multiplayer.samples.coop": "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop#main"`
