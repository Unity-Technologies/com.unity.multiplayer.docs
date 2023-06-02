---
id: networktransform
title: NetworkTransform
---

import ImageSwitcher from '@site/src/ImageSwitcher.js';

## Introduction
The synchronization of an object's transform is one of the most common netcode tasks performed in multiplayer games today. The concept seems simple:
- Determine which transform axis you want to have synchronized
- Serialize the values
- Send the serialized values as messages to all other connected clients
- Process the messages and deserialize the values
- Apply the values to the appropriate axis

At first pass glance the high level outlined tasks seem relatively simple, but when you start to implement each line item almost any veteran netcode software engineer will agree: _It can become complicated very quickly_.

For example, the above itemized tasks don't take into consideration:
- Who controls the synchronization (i.e. each client or the server or perhaps both depending upon the object being synchronized)?
- How often do you synchronize the values and what logic should you use to determine when the values need to be synchronized?
- If you have a complex parenting hierarchy (parents with one or more child transforms), should you synchronize world or local space axis values?
- How can you optimize the bandwidth cost per transform update?

Fortunately, NGO provides you withNetworkTransform component implementation that handles some of the trickier aspects of transform synchronization and is easily configurable by properties accessible via the in-editor inspector view.

## Adding
When adding a NetworkTransform component to a GameObject, you should always make sure the GameObject has a NetworkObject component attached to it or that the GameObject's transform parent is assigned to a GameObject with a NetworkObject component attached to it like in the image below:

![image](./Images/NetworkTransformSimple.png)

You can also have a parent GameObject that has a NetworkObject component attached to it with a child GameObject that has a NetworkTransform component like in the image below:

![image](./Images/NetworkTransformSimpleParent.png)

As well, you can have "nested NetworkTransforms" that are all associated with a single NetworkObject like in the image below:

![image](./Images/NetworkTransformNestedParent.png)

With nested NetworkTransforms, you can (theoretically) have the (n) number of nested children each with NetworkTransform components.  _However, we recommend exercising caution with the amount of nested NetworkTransforms per network prefab instance if you plan on having many instances of that same network prefab per network session._


:::tip
**The general rule to follow is:**
 
 As long as there is at least one (1) NetworkObject at the same GameObject hierarchical level or above, you can attach a NetworkTransform component to a GameObject. 
 
 _You could have a single root-parent GameObject that has a NetworkObject component and under the root-parent several levels of nested child GameObjects that all have NetworkTransform components attached to them. Each child GameObject would not require a NetworkObject component in order for each respective NetworkTransform component to function/synchronize properly._
:::


## Configuring
When you select a NetworkTransform component, you will see the following properties in the inspector view:

![image](./Images/NetworkTransformProperties.png)

### Property Synchronization
Some of the `NetworkTransform` properties are automatically synchronized by the authoritative instance to all non-authoritative instances.  It is **important to note** that when any synchronized property changes the NetworkTransform is effectively "teleported" (i.e. all values re-synchronized and interpolation is reset) which can cause a single frame delta in position, rotation, and scale (depending upon what is being synchronized). _Always keep this in mind when making adjustments to NetworkTransform properties during runtime._

### Synchronizing ("Syncing")
You often don't need to synchronize all transform values of a GameObject over the network. For instance, if the scale of the GameObject never changes, you can deactivate it in the **syncing scale** row in the Inspector. Deactivating synchronization saves CPU costs and network bandwidth.

The term "synchronizing" refers to the synchronization of axis values over time. This is not to be confused with the initial synchronization of a transform's values. As an example:
 If you don't plan on changing the transform's scale after the initial first synchronization (i.e. upon joining a network session or when a network prefab instance is spawned for the first time), then un-checking/disabling the X, Y, and Z properties for Scale synchronization would remove the additional processing overhead per instance.

Since these values really only apply to the authoritative instance, changes can be made to these values during runtime and non-authoritative instances will only receive updates for the axis marked for synchronization on the authoritative side. 

### Thresholds

You can use the threshold values to set a minimum threshold value. This can be used to help reduce the frequency of synchronization updates by only synchronizing changes above or equal to the threshold values (changes below won't be synchronized). As an example:

If your `NetworkTransform` has `Interpolate` enabled, you might find that you can lower your position threshold resolution (i.e. by increasing the position threshold value) without impacting the "smoothness" of an object's motion while also reducing the frequency of position updates (i.e. reduces the bandwidth cost per instance). Increasing the threshold resolution (i.e. by lowering the position threshold value) will increase the potential frequency of when the object's position will be synchronize (i.e. can increase the bandwidth cost per instance).

:::info
Threshold values are not synchronized, but they can be updated on the [authoritative instance](networktransform#authority-modes). You should keep this in mind when using [owner authoritative mode](networktransform#owner-authoritative-mode) instances since changing ownership will use whatever values are currently set on the new owner instance. If you plan on changing the threshold value during runtime and plan on changing ownership, then you might need to synchronize the threshold values as well.
:::


### Local space

By default, `NetworkTransform` synchronizes the transform of an object in world space. The **In Local Space** configuration option allows you to change to synchronizing the transform in local space instead. A child's local space axis values (position and rotation primarily) are always relative offsets from the parent transform. Where a child's world space axis values include the parent's axis values.

Using **local space** on a parented NetworkTransform can improve the synchronization of the transform when the object gets re-parented because the re-parenting won't change the **local space** transform of the object but does change the **world space** position.

:::info
The authority instance does synchronize changes to the LocalSpace property. As such,you can make adjustments to this property on the authoritative side during runtime and the non-authoritative instances will automatically be updated.
:::

### Interpolation

Interpolation is enabled by default and is recommended if you desire smooth transitions between transform updates on non-authoritative instances.Interpolation will buffer incoming state updates that can introduce a slight delay between the authority and non-authority instances. When the **Interpolate** property is disabled, changes to the transform are immediately applied on non-authoritative instances which can result in a visual "jitter" and/or seemingly "jumping" to newly applied state updates when latency is high.

Changes to the **Interpolation** property during runtime on the authoritative instance will be synchronized with all non-authoritative instances.

:::note
The `NetworkTransform` component only interpolates client-side. For smoother movement on the host or server, users might want to implement interpolation server-side as well. While the server won't have the jitter caused by the network, some stutter can still happen locally (for example, movement done in `FixedUpdate` with a low physics update rate).
:::

<figure>
<ImageSwitcher
lightImageSrc="/BufferedTick.png?text=LightMode"
darkImageSrc="/BufferedTick_Dark.png?text=DarkMode"/>
  <figcaption>Graphic of a buffered tick between the server and a client (that is, interpolation)</figcaption>
</figure>

### Slerp Position
When this property and **Interpolation** are both set, non-authoritative instances will [Slerp](https://docs.unity3d.com/ScriptReference/Vector3.Slerp.html) towards their destination position as opposed to [Lerp](https://docs.unity3d.com/ScriptReference/Vector3.Lerp.html). Typically this can be used when your object is following a circular and/or spline based motion path and you want to preserve the curvature of that path. Since "lerping" between two points yields a linear progression over a line between two points, there can be scenarios where the frequency of delta position state updates could yield a loss in the curvature of an object's motion.  

### Use Quaternion Synchronization
By default, rotation deltas are synchronized using Euler values. For many scenarios, using Euler values might be all that is needed. However, there are scenarios where synchronizing Euler deltas will yield undesirable results. One scenario is when you have complex nested NetworkTransforms where there are varying rotations between the parents and children transforms. When you add interpolation into the mix (_remember interpolation is buffered and has an inherent delay between the non-authoritative's current rotation and the target rotation_), there are adjustments that occur immediately within a Quaternion that handle more complex transform related issues (i.e. Gimbal Lock, etc).

With Quaternion synchronization enabled, the authoritative instance still compares threshold values against the Euler axis values to determine if an update in a transform's rotation is needed but the entire Quaternion itself is updated as opposed to just the Euler axis where the change(s) is/are detected. This means that you are guaranteed the proper rotation for an object will be applied to non-authoritative instances and the changes will have already accounted for more complex issues that can arise with Euler angles.

Quaternion synchronization comes with a price. It will increase the bandwidth cost, 16 bytes per instance, in exchange for handling the more complex rotation issues that more often occur when using nested NetworkTransform (one or more parent transforms with one or more child transforms). However, when you enable the **Use Quaternion Synchronization** property you will notice a change in both the **Syncing** axis selection check boxes and a new **Use Quaternion Compression** property will appear:

![image](./Images/NetworkTransformQuaternionSynch.png)

:::note

The rotation synchronization axis checkboxes are no longer available when **Use Quaternion Synchronization** is enabled (_since synchronizing the quaternion of a transform will always update all rotation axis_) and **Use Quaternion Compression** becomes a visible option.

:::

### Use Quaternion Compression
Since synchronizing a quaternion can increase the bandwidth cost per update of a `NetworkTransform`'s rotation state, there are two ways to reduce the over-all bandwidth cost of quaternion synchronization:
- **Quaternion Compression:** This provides the highest compression (16 bytes reduced down to 4 bytes per update) with a slightly higher precision loss than half float precision.
- **Half Float Precision:** When enabled and **Use Quaternion Compression** is disabled, this provides an alternate mid-level compression (16 bytes reduced down to 8 bytes per update) with less precision than full float values but higher precision than quaternion compression.

Quaternion compression is based on a smallest three algorithm that can be used when rotation precision is less of a concern than the bandwidth cost. You might have ancillary objects/projectiles that require some form of rotation synchronization, but in the over-all scheme of your project do not require perfect alignment. If bandwidth cost and precision are both a concern, then the alternate recommended compression is half float precision. It is also recommended to try out the different compression options, you might find that the fractional loss in precision is perfectly acceptable for your project's needs (_with the bonus of being able to reduce the over-all bandwidth cost by up to 50% for all instances than when using full precision_).

This property value can be updated on the authority during runtime and will be synchronized on all non-authority instances. _Reminder: Updating this value during runtime on the authoritative instance will result in a full synchronization of the NetworkTransform and all non-authority instances will have their interpolators reset._

### Use Half Float Precision
Enabling this property does exactly what it sounds like, it converts any transform axial value from a 4 byte float to a 2 byte half-float at the expense of a loss in precision. When this option is enabled, half float precision is used for all transform axis marked for synchronization. However, there are some unique aspects of half float precision when it comes to position and rotation.

Since there is a loss in precision, position state updates only provide the delta in position relative to the last known full position. The `NetworkDeltaPosition` serializable structure keeps track of the current delta between the last known full position and the current delta offset from the last known full position. Additionally, `NetworkDeltaPosition` auto-corrects precision loss by determining any loss of precision on the authoritative side when sending an update. Any precision delta from the previous update will be included in the next position update. _In other words, non-authoritative instances can potentially have a fractional delta (per applied update) from the authoritative instance for the duration of 1 network tick period or until the next transform state update is received._ Additionally, `NetworkDeltaPosition` bridges the gap between the [maximum half float value](https://github.com/Unity-Technologies/Unity.Mathematics/blob/701d58fde76f3b93e40d0a792cd8fa4c130f1450/src/Unity.Mathematics/half.cs#L25) and the maximum boundaries of the Unity World space (global/project scale relative). 

:::info

**Recommended Unity World Space Units Per Second:**

The maximum delta per update should not exceed 64 Unity world space units. If you are using the default network tick (30) then an object should not move at speeds that are equal to or exceed 1,920 Unity world space units per second (i.e. 30 x 64). To give you a frame of reference, the default camera far clipping plane is 1,000 Unity world space units which means something moving at 1,920 Unity world space units would most likely not be visually detectable or appear as a brief "blip" in the render view frustum. 

:::

When **Use Quaternion Synchronization** and **Use Half Float Precision** are both enabled and **Use Quaternion Compression** is disabled, the quaternion values are synchronized via the `HalfVector4` serializable structure where each axial value (x, y, z, and w) are stored as [half values](https://docs.unity3d.com/Packages/com.unity.mathematics@1.2/api/Unity.Mathematics.half.html). This means that each rotation update is reduced from a full precision 16 bytes per update down to 8 bytes per update. Using half float precision for rotation provides a better precision than quaternion compression at 2x the bandwidth cost but half the cost of full precision. 

When **Use Quaternion Synchronization**, **Use Half Float Precision**, and **Use Quaternion Compression** are enabled, quaternion compression is used in place of half float precision for rotation.

All of these properties are synchronized to non-authoritative instances when updated on the authoritative instance.


## Authority modes

### Server Authoritative Mode
By default, `NetworkTransform` operates in server authoritative mode. This means that changes to transform axis (marked to be synchronized) are detected on the server-side and pushed to connected clients. This also means any changes to the transform axis values will be overridden by the authoritative state (in this case the server-side transform state). 

There is another concept to keep in mind about axis synchronization vs the initial synchronized transform values. Any axis not marked to be synchronized will still be updated with the authority's initial state when a NetworkObject is spawned or when a client is synchronized for the first time.

:::info
**As an example:** <br />
Say you have marked only the position and rotation axis to be synchronized but exclude all scale axis on a NetworkTransform component for a network prefab. When you spawn an instance of the network prefab the initial authoritative side scale values are synchronized upon spawning. From that point forward, the non-authoritative instances (in this case the client-side instances) will maintain those same scale axis values even though they are never updated again.
:::


### Owner Authoritative Mode
**(a.k.a ClientNetworkTransform)**

 Server-side authority NetworkTransforms provide a balance between synchronized transforms and the latency between applying the updates on all connected clients. However, there are times when you want the position to update immediately for a specific NetworkObject (common the player) on the client-side. Owner authority of a NetworkTransform is dictated by the `NetworkTransform.OnIsServerAuthoritative` method when a NetworkTransform component is first initialized. If it returns `true` (the default) then it initializes as a server authoritative `NetworkTransform`. If it returns `false` then it initializes as an owner authoritative `NetworkTransform` (a.k.a. `ClientNetworkTransform`). This can be achieved by deriving from `NetworkTransform`, overriding the `OnIsServerAuthoritative` virtual method, and returning false like in the code example below:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/v2.1.0/Packages/com.unity.multiplayer.samples.coop/Utilities/Net/ClientAuthority/ClientNetworkTransform.cs
```

Netcode for GameObjects also comes with a sample containing a `ClientNetworkTransform`. This transform synchronizes the position of the owner client to the server and all other client allowing for client authoritative gameplay.

You can use the existing `ClientNetworkTransform` in the Multiplayer Samples Utilities package.<br />

To add the Multiplayer Samples Utilities package:

* Open the Package Manager by selecting **Window** > **Package Manager**.
* Select **Add** (+) > **Add from git URL…**.
* Copy and paste the following Git URL: `https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop#main`
* Select **Add**.

Optionally, you can directly add this line to your `manifest.json` file:

`"com.unity.multiplayer.samples.coop": "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop#main"`

## Additional Virtual Methods of Interest

`NetworkTransform.OnAuthorityPushTransformState`: This virtual method is invoked when the authoritative instance is pushing a new `NetworkTransformState` to non-authoritative instances. This can be used to better determine the precise values updated to non-authoritative instances for prediction related tasks.

`NetworkTransform.OnNetworkTransformStateUpdated`: This virtual method is invoked when the non-authoritative instance is receiving a pushed `NetworkTransformState` update from the authoritative instance. This can be used to better determine the precise values updated to non-authoritative instances for prediction related tasks.

`NetworkTransform.Awake`: This method has been made virtual in order to provide you with the ability to do any custom initialization. If you override this method, you are required to invoke `base.Awake()` (recommended invoking it first).

`NetworkTransform.OnInitialize`: This virtual method is invoked when the associated `NetworkObject` is first spawned and when ownership changes.

`NetworkTransform.Update`: This method has been made virtual in order to provide you with the ability to handle any customizations to a derived `NetworkTransform` class. If you override this method, it is required that all non-authoritative instances invoke `base.Update()` but not required for authoritative instances.


