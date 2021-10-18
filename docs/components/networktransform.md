---
id: networktransform
title: NetworkTransform
---
The  position and rotation of a [`NetworkObject`](../basics/networkobject.md) is normally only synchronized when that object is spawned. To synchronize position, rotation, and scale at realtime during the game, a `NetworkTransform` component is needed. `NetworkTransform` synchronizes the transform of the GameObject it's attached to. This replicates that data to all other players.

While `NetworkTransform` works out of the box for simple position synchronization, it is not a one size fits all solution. In case you experience stuttering with `NetworkTransform`, you can try enabling interpolation, increasing `Fixed Sends Per Second`, and decreasing `Thresholds` values.

:::tip
You can have multiple `NetworkTransform` components on child objects of your network object to synchronize individual positions of child objects.
:::

## Extrapolation

When enabled, extrapolation estimates the time between when a tick advances in server-side animation and the update of the frame completes on the client-side. The game object extrapolates the next frame's values based on the ratio.

## Interpolation

Interpolation creates a smooth object transition by using two known, historical positions to predict an object's path during the interval between receiving and updating positional data for that object. This is a buffer for the network to sync between object input and rendering, and reduces object jitter or position snapping.

You can select the best interpolation algorithm for the `GameObject` you want to sync. However, you still need to [interpolate your authoritative objects](../learn/clientside-interpolation.md).

Our default interpolation algorithm is `BufferedLinearInterpolator`. This buffers values before making them available to the `NetworkTransform` value to update. `NetworkTransform` is able to accumulate jittered network values without affecting the transform state and then consume them at regular intervals.

You can set global buffering by using:

```csharp
NetworkManager.Singleton.NetworkTimeSystem.ServerBufferSec = 0.2f;
```

:::note
Use `BufferedLinearInterpolator` carefully to avoid excessive latency in your game! Although it will smooth transforms on jittery connections, it adds more latency to your transform updates.

When targeting mobile platforms, you’ll want to use bigger buffer values while keeping interpolation times lower for platforms with more stable connections by keeping buffer time low.
:::

### Implementing Interpolation for NetworkTransform

Use the `IInterpolator` interface to create your own custom interpolator and override the different interpolators in the `NetworkTransform` interpolator. The interpolator you implement must keep its own state and is given new values every time there are new values available to `NetworkTransform`'s `OnValueChanged`.

### Best Practices

To ensure all your objects are in sync, use the same interpolator with the same configuration for the same types of `NetworkTransform`.

For example, a car would be interpolated differently than a character. So your interpolator configuration should be the same for all cars, but you could use a different interpolator configuration for your characters walking around. Therefore, a car with 300ms of added latency (due to buffering) bumps with other cars at their same synced time, but another car at 100ms of buffering would be desynced.