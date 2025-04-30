---
id: networktransform
title: NetworkTransform
---

import ImageSwitcher from '@site/src/ImageSwitcher.js';

## Introduction

The synchronization of an object's transform is one of the core netcode tasks. The outline of operations is simple:
- Determine which transform axis you want to have synchronized
- Serialize the values
- Send the serialized values as messages to all other connected clients
- Process the messages and deserialize the values
- Apply the values to the appropriate axis

Except the implementation is far more complicated than one might expect. For example, we need to take into consideration:
- Who controls the synchronization (i.e. each client or the server or perhaps both depending upon the object being synchronized)?
- How often do you synchronize the values?
- What logic should you use to determine when and which values need to be synchronized?
- For objects with one or more child objects, should you synchronize world or local space axis values?
- How can you optimize the bandwidth for a transform update?

Fortunately, Netcode for GameObjects provides you with the NetworkTransform component. It handles many of the tricky aspects of transform synchronization and can be configured via Inspector properties.

## Adding the component

Because a NetworkTransform component is derived from the NetworkBehaviour class, it follows many of the same fundamental requirements for it to function correctly. As an example, when adding a NetworkTransform component to a GameObject it should be added to the same or any parent generation of the   GameObject. 

In this image both NetworkTransform and NetworkObject components are on the same GameObject:

![image](/img/networktransform/SingleGeneration.png)

Alternatively, the parent GameObject can have multiple children where any child can have a NetworkTransform:

![image](/img/networktransform/MultiGeneration.png)

Theoretically, you can have a NetworkTransform on every child object of a 100 leaf deep hierarchy. _However, we recommend exercising caution with the amount of nested NetworkTransforms in a network prefab. Particularly if there will be many instances of this network prefab._

:::tip
**The general rule to follow is:**

 As long as there is at least one (1) NetworkObject at the same GameObject hierarchical level or above, you can attach a NetworkTransform component to a GameObject.

 _You could have a single root-parent GameObject that has a NetworkObject component and under the root-parent several levels of nested child GameObjects that all have NetworkTransform components attached to them. Each child GameObject would not require a NetworkObject component in order for each respective NetworkTransform component to function/synchronize properly._
:::

### When to nest NetworkTransforms

If you plan on having unique motion relative to a parent NetworkTransform should you consider nesting NetworkTransforms. As an example, if you are using a NetworkAnimator component to synchronize animations then you need not worry about synchronizing each child node of the model animating as the animation system and NetworkAnimator are handling this for you. 

Really, if you can get away with allowing the parent to synchronize its transform then all child transforms will move, rotate, and scale with the parent automatically. As an example, if you wanted some object to orbit another object and used the server time (i.e. NetworkManager.ServerTime) to feed into something like a sine or cosine based calculation and used that on all instances (local and remote) then you would have no reason to synchronize the motion of the child orbiting the parent since you are feeding the algorithm a value already being synchronized with all clients (i.e. the server time).

:::tip
**The general rule to follow is:**

Unless you have some unique motion that needs to be applied to a child object and it can't be synchronized through an animation or an algorithm based on the synchronized time, then you should nest NetworkTransforms.

However, nesting NetworkTransforms is a more optimal path then creating a bunch of individual single node network prefabs with NetworkTransforms and parenting those once they are spawned.
:::

## Configuring

When you select a NetworkTransform component, you will see the following properties in the inspector view:

![image](/img/networktransform/NetworkTransformProperties.png)

### Property synchronization

Some of the `NetworkTransform` properties are automatically synchronized by the authoritative instance to all non-authoritative instances.  It is **important to note** that when any synchronized property changes the NetworkTransform is effectively "teleported" (i.e. all values re-synchronized and interpolation is reset) which can cause a single frame delta in position, rotation, and scale (depending upon what is being synchronized). _Always keep this in mind when making adjustments to NetworkTransform properties during runtime._

#### Properties that can cause a full state update (i.e. teleport)
The following are a list of `NetworkTransform` properties that will cause a full state update (*i.e. effectively a teleport*) when changed during runtime by the authority instance: 
- [UseUnreliableDeltas](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_UseUnreliableDeltas)
- [InLocalSpace](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_InLocalSpace)
- [Interpolate](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_Interpolate)
- [SlerpPosition](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_SlerpPosition)
- [UseQuaternionSynchronization](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_UseQuaternionSynchronization)
- [UseQuaternionCompression](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_UseQuaternionCompression)
- [UseHalfFloatPrecision](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.3/api/Unity.Netcode.Components.NetworkTransform.html#Unity_Netcode_Components_NetworkTransform_UseHalfFloatPrecision)


### Axis to Synchronize

![image](/img/networktransform/AxisToSynchronize.png)

You often don't need to synchronize all transform values of a GameObject over the network. For instance, if the scale of the GameObject never changes, you can deactivate it in the **Scale** row of the **Axis to Synchronize** area within the Inspector. Deactivating synchronization saves some processing costs and reduces network bandwidth consumption.

The term "synchronizing" refers to the synchronization of axis values over time. This is not to be confused with the initial synchronization of a transform's values. 

**NetworkTransform vs NetworkObject transform synchronization**  
As shown earlier, you can have nested NetworkTransforms as long as they are on the same `GameObject` that a `NetworkObject` component is attached to or on a child `GameObject` nested under a `GameObject` that a `NetworkObject` is attached to. If you [review over](#adding-the-component) the `NetworkObject` component properties you will notice it has a "Synchronize Transform" property. When enabled, the NetworkObject will only synchronize the `NetworkObject` component's associated `GameObject` component's transform when first synchronized. This only applies to that `GameObject` instance's transform which means any nested `NetworkTransform` component's transform needs to be synchronized by the `NetworkTransform`. 

**Why is this important to understand?**  
If you don't plan on changing the transform's scale after the initial first synchronization (i.e. upon joining a network session or when a network prefab instance is spawned for the first time), then un-checking/disabling the X, Y, and Z properties for Scale synchronization would remove the additional processing overhead per instance. However, if you have a nested `NetworkTransform` and want to apply a unique scale (per instance) that is applied during to that nested `NetworkTransform` component's transform when it is first spawned then the adjusted scale will not be synchronized since all of the scale axis are disabled.

Fortunately, the authority of the `NetworkTransform` instance can make changes to any of the "Axis to Synchronize" properties during runtime and non-authoritative instances will receive updates for the axis marked for synchronization. 

** Performance Savings Note **  
*When disabling an axis to be synchronized for performance purposes, you should always consider that `NetworkTransform` will not send updates as long as the axis in question does not have a change that exceeds its threshold value. So, taking the scale example into consideration it might be simplest to leave those axis it enabled if you only ever plan on changing them once or twice as the CPU cost check for change is not as expensive as the serialization and state update sending process. The associated axis threshold values can make the biggest impact on frequency of sending state updates that, in turn, will reduce the number of state updates sent per second at the cost of losing some motion resolution.*

:::info
The **Axis to Synchronize** properties that determine which axis are synchronized do not get synchronized with other instances. If you change ownership and there have been any adjustments to these values that are different from the network prefab's original settings, then you will need to keep those values synchronized and apply them upon the notification that ownership has changed.
:::

### Authority

![image](/img/networktransform/AuthorityMode.png)

The authority mode of a `NetworkTransform` determines who is the authority over changes to the transform state. This setting is only really applies when using a client-server network topology because the when using a distributed authority network topology Netcode for GameObjects will automatically set this to owner authority for every `NetworkTransform`. While this might seem confusing, it can be useful if you plan on developing for both network topologies and would like to preserve this setting (whether server or owner) for the client-server network topology.

By default, `NetworkTransform` operates in server authoritative mode. This means that changes to transform axis (marked to be synchronized) are detected on the server-side and state updates are pushed to connected clients. This also means any changes to the transform axis values will be overridden by the authoritative state (in this case the server-side transform state).  
:::info
**As an example:** <br />
Say you have marked only the position and rotation axis to be synchronized but exclude all scale axis on a NetworkTransform component for a network prefab. When you spawn an instance of the network prefab the initial authoritative side scale values are synchronized upon spawning. From that point forward, the non-authoritative instances (in this case the client-side instances) will maintain those same scale axis values even though they are never updated again.
:::

#### Client vs Server Authority

When using a client-server network topology, you have the option of making the server or the owner (which would include clients) the authority over `NetworkTransform` state updates. This is referred to as the authority motion model. You can have an owner or server authority motion model per instance, but you can mix and match the right motion model based on the network prefab type being spawned.

- The most common use for an owner authority motion model is for player prefabs when you want the player to have a more immediate response to their inputs.
- The most common use for a server authority motion model is for things like AI, NPCs, items that can be picked up, and moving world objects (i.e. elevators, platforms, etc.).

:::info
When mixing authority motion models and using physics latency will impact how (and when) things collide and requires additional consideration and planning. 
:::

### Thresholds

![image](/img/networktransform/Thresholds.png)

You can use the threshold values to set a minimum threshold value. This can be used to help reduce the frequency of synchronization updates by only synchronizing changes above or equal to the threshold values (changes below won't be synchronized). As an example:

If your `NetworkTransform` has `Interpolate` enabled, you might find that you can lower your position threshold resolution (i.e. by increasing the position threshold value) without impacting the "smoothness" of an object's motion while also reducing the frequency of position updates (i.e. reduces the bandwidth cost per instance). Increasing the threshold resolution (i.e. by lowering the position threshold value) will increase the potential frequency of when the object's position will be synchronize (i.e. can increase the bandwidth cost per instance).

:::info
Threshold values are not synchronized, but they can be updated on the [authoritative instance](networktransform#authority-modes). You should keep this in mind when using [owner authoritative mode](networktransform#owner-authoritative-mode) instances since changing ownership will use whatever values are currently set on the new owner instance. If you plan on changing the threshold value during runtime and plan on changing ownership, then you might need to synchronize the threshold values as well.
:::

### Delivery

![image](/img/networktransform/Delivery.png)

#### Tick Synchronize Children

We recently discussed how thresholds determine when the authority of a `NetworkTransform` will detect a large enough change to send a state update. However, not all motion is identical and the rate that a child `NetworkTransform` is updated might not be perfectly in synch with its parent. When this happens, you could notice a slight "jitter" with children of a parent `NetworkTransform`. 

When you enable `Tick Sync Children` the top most parent `NetworkTransform` will automatically force any nested `NetworkTransform` components under it to synchronize at the same time the top most parent does. This assures that all nested `NetworkTransform` components are synchronized with the top most parent on the exact same network tick and that they are synchronized in order.

::: info
Tick Sync Children does not apply to parented NetworkObjects with NetworkTransforms.
:::

#### Network Conditions to Consider

Sometimes network conditions are not exactly "optimal" where packets can have both undesirable latency and even the dreaded packet loss. When NetworkTransform interpolation is enabled, packet loss can mean undesirable visual artifacts (_i.e. large visual motion gaps often referred to as "stutter"_). Originally, NetworkTransform sent every state update using reliable fragmented sequenced network delivery. For interpolation, with enough latency and packet loss this could cause a time gap between interpolation points which eventually would lead to the motion "stutter". 

Fortunately, NetworkTransform has been continually evolving and defaults to sending the more common delta state updates (_i.e. position, rotation, or scale changes_) as unreliable sequenced network delivered messages. If one state is dropped then the `BufferedLinearInterpolator` can recover easily as it doesn't have to wait precisely for the next state update and can just lose a small portion of the over-all interpolated path (_i.e. with a TickRate setting of 30 you could lose 5 to 10% of the over-all state updates over one second and still have a relatively similar interpolated path to that of a perfectly delivered 30 delta state updates generated path_). As such, the **UseUnreliableDeltas** NetworkTransform property, default to enabled, controls whether you send your delta state updates unreliably or reliably.

Of course, you might wonder what would happen if say 5% of a jumping motion, towards the end of the jumping motion, were dropped how NetworkTransform might recover since each state update sent is only based on axial deltas defined by each axis threshold settings. The answer is that there is a small bandwidth penalty for sending standard delta state updates unreliably: Axial Frame Synchronization.

::: info
When using a `NetworkRigidbody` or `NetworkRigidbody2D` component and you have enabled the **Use Rigidbody for Motion** property, you will most likely want to avoid using the **UseUnreliableDeltas** `NetworkTransform` property as it can impact the over-all interpolation result when you have multiple `Rigidbody` based objects that need to keep relatively synchronized with each other.
:::

#### Unreliable State Updates

When unreliable delta state updates is enabled (UseUnreliableDeltas is enabled), NetworkTransform instances are assigned a constantly rolling tick position relative to a 1 second period of time. So, if you are using the default `NetworkConfig.TickRate` value (30) there are 30 "tick slots" that each NetworkTransform instance is distributed amongst on the authoritative instance. This means that each instance will send 1 Axial Frame Synchronization update per second while the NetworkObject in question is moving, rotating, or scaling enough to trigger delta state updates. When a NetworkObject comes to rest (i.e. no longer sending delta state updates) the Axial Frame Synchronization stops. This assures that if a vital portion of a state update is dropped, within a 1 second period of time, all axis marked to be synchronized will be synchronized to provide an eventual consistency in axis synchronization between the authority and non-authority instances.

:::info
If bandwidth consumption becomes a concern and you have tested your project under normal network conditions with UseUnreliableDeltas disabled with no noticeable visual artifacts, then you can opt out of unreliable delta state updates to recover the minor penalty for being packet loss tolerant or you might opt to make that an in-game configuration setting that players can enable or disable. You just need to update the authoritative NetworkTransform instances with any change in the setting during runtime.
:::

### Configurations 

![image](/img/networktransform/Configurations.png)

#### Local space

By default, `NetworkTransform` synchronizes the transform of an object in world space. The **In Local Space** configuration option allows you to change to synchronizing the transform in local space instead. A child's local space axis values (position and rotation primarily) are always relative offsets from the parent transform. Where a child's world space axis values include the parent's axis values.

Using **local space** on a parented NetworkTransform can improve the synchronization of the transform when the object gets re-parented because the re-parenting won't change the **local space** transform of the object but does change the **world space** position.

:::info
The authority instance does synchronize changes to the LocalSpace property. As such,you can make adjustments to this property on the authoritative side during runtime and the non-authoritative instances will automatically be updated.
:::

#### Switch Transform Space When Parented

When changing from world space to local space and vice versa, `NetworkTransform` will change what values of a transform to use when detecting changes to each synchronized axis. While it seems simple enough to just change the **In Local Space** configuration when a `NetworkObject` is parented, it can become tricky trying to make sure the transition is smooth for all clients. This is especially the case when you have the **Interpolate** property enabled because non-authority instances are using the `BufferedLinearInterpolator` to interpolate from one state update to the next and doing this while several network ticks behind the authority instance. 

This means that non-authority instances could still have state updates pending to be processed when a `NetworkObject` is parented (or de-parented) and those buffered state values are still expressed as world (or local) space values. Since parenting is not network tick synchronized, the non-authority instances could still have the previous (world or local space) state updates remaining to be processed. This can create a visual "popping" result on the non-authority instance because it has been placed in a different transform space while processing the previous transform space state updates.

In order to resolve this issue, you can just enable the **Switch Transform Space When Parented** configuration property and the `NetworkTransform` will automatically detect when its `NetworkObject` has changed its parented status and convert the pending states within each respective axis's `BufferedLinearInterpolator` to the appropriate transform space values. The end result yields a seamless transition between world and local (and vice versa) when parenting.

### Interpolation

![image](/img/networktransform/Interpolation.png)

Interpolation is enabled by default and is recommended if you desire smooth transitions between transform updates on non-authoritative instances. Interpolation will buffer incoming state updates that can introduce a slight delay between the authority and non-authority instances. When the **Interpolate** property is disabled, changes to the transform are immediately applied on non-authoritative instances which can result in a visual "jitter" and/or seemingly "jumping" to newly applied state updates when latency is high. Changes to the **Interpolation** property during runtime on the authoritative instance will be synchronized with all non-authoritative instances.

There are three types of interpolation to chose from when the **Interpolate** property is enabled:

- **Legacy Lerp:** The original (_now legacy_) lerping approach.
- **Lerp:** An improved lerping approach that assures the interpolator gets much closer to its destination (_when compared to the legacy lerp_).
- **Smooth Dampening:** An alternate approach to interpolation where it smooth dampens towards the target value while taking value's rate of change into consideration.

#### Lerp Smoothing
All interpolation types provide you with the ability to enable or disable lerp smoothing. Lerp smoothing provides you with a finer smoothing pass at the end of an interpolator's update, but this can be at the expense of precision depending upon the value of the relative interplator's max interpolation time.  

##### Slerp position  
![image](/img/networktransform/PositionSlerp.png)

When this property and **Interpolation** are both set, non-authoritative instances will [Slerp](https://docs.unity3d.com/ScriptReference/Vector3.Slerp.html) towards their destination position as opposed to [Lerp](https://docs.unity3d.com/ScriptReference/Vector3.Lerp.html). Typically this can be used when your object is following a circular and/or spline based motion path and you want to preserve the curvature of that path. Since "lerping" between two points yields a linear progression over a line between two points, there can be scenarios where the frequency of delta position state updates could yield a loss in the curvature of an object's motion.  

:::note
The `NetworkTransform` component only interpolates client-side. For smoother movement on the host or server, users might want to implement interpolation server-side as well. While the server won't have the jitter caused by the network, some stutter can still happen locally (for example, movement done in `FixedUpdate` with a low physics update rate).
:::

<figure>
<ImageSwitcher
lightImageSrc="/BufferedTick.png?text=LightMode"
darkImageSrc="/BufferedTick_Dark.png?text=DarkMode"/>
  <figcaption>Graphic of a buffered tick between the server and a client (that is, interpolation)</figcaption>
</figure>


#### Legacy Lerp Interpolator Type
This uses the original linear interpolation approach where you can be assured any existing project tuned to this interpolator will yield the exact same results. This is the default interpolator selected. 

This interpolator can lose some of the precision when interpolating between two state updates. This typically is most noticeable with position when there is a rapid change in direction (i.e. like a bouncing ball colliding against a floor). When this happens you can end up with the non-authority instances never reaching their final destination before heading towards their new destination (i.e. the ball bounces a bit above the floor for non-authority instances).

:::info
**Legacy Lerp** handles lerp smoothing differently than the other two interpolator types. The associated maximum interpolation time is inversely proportional to the amount of lerp smoothing that will be applied and is impacted by frame time.

The formula to use is:  
t = delta time / max interpolation time  
*(Where t is the lerp "t" parameter)*

If you have a max interpolation time of 0.5 and a delta time of 0.0167777 (i.e. 60fps), then your "t" value would be 0.032 which depending upon how large your state delta value is (_i.e. what you are lerping towards_) it would take much longer than the typical tick rate (_30 or 0.033333ms_) to reach the current state's value. As such, the interpolator would have moved on to the next state update (_if one was pending and ready to be processed_) well before the current state update's value was reached. There are scenarios where you might want this type of behavior where you are adjusting the max interpolation time dynamically during runtime (_i.e. the slower something is moving the smoother you might want it to be_). 

However, if you are setting it within the editor (i.e. as a default value that never is updated again) then keeping with the range between 0.2 and 0.02 is recommended (_where 0.01 will almost always yield a value higher than 1 which using the clamped lerp will be the same as 1_).
:::


#### Lerp and Smooth Dampening Interpolator Types

When compared to the "Legacy Lerp" interpolator type:
- Both of these interpolator types use a different approach when consuming/processing state updates.
- Both interpolator types will interpolate closer to their final target values and handle buffer consumption differently.
  - Both use a tick latency value to adjust how far back in the pending states it should begin processing. This will automatically be adjusted based on a client's latency to a server or the distributed authority service.
- Both interpolator types are *FixedUpdate* friendly.
  - Their consumption time is adjusted based on the *FixedUpdate* time consumed. If *Fixed Update* is invoked multiple times in a single frame, they will both interpolate at that rate.
- The maximum interpolation time property for both interpolator types is not impacted by frame time.  

:::info
**Lerp and Smooth Dampening** maximum interpolation time for lerp smoothing can be calculated as such:  
_t = 1.0f - (max interpolation time)_

Where the value of "t" is clamped between 0.0f and 1.0f.

Both **Lerp and Smooth Dampening** use their axis relative Lerp methods (Vector3 or Quaternion).
:::

**Lerp**  
The Lerp interpolation type, like that of the Legacy Lerp, uses [Vector3.Lerp](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.Lerp.html) and [Quaternion.Lerp](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Quaternion.Lerp.html) interpolation approach. 

**Smooth Dampening**  
This interpolation type uses [Vector3.SmoothDamp](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Vector3.SmoothDamp.html) for position and scale while it uses [Mathf.SmoothDampAngle](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Mathf.SmoothDampAngle.html) based on a quaternion's euler angles.

**Both interpolator types will:**
- Interpolate towards the current state's target (using their respective methods provided above).
- If enabled, apply lerp smoothing where the current axis relative value is lerped towards the current interpolated value at a rate of 1.0f - (max interpolation time) each update.

#### Picking and configuring an interpolator type
If you haven't already balanced game play based on the (original) **Legacy Lerp** type, then it is recommended to start off with the **Lerp** interpolator type.

**Runtime maximum interpolation time**
You can adjust the maximum interpolation time for any axis of a `NetworkTransform` during runtime by adjusting any of the following properties on the *non-authoritative* instances: 
- `NetworkTransform.PositionMaxInterpolationTime`
- `NetworkTransform.RotationMaxInterpolationTime`
- `NetworkTransform.ScaleMaxInterpolationTime`

This can be useful for edge case scenarios where things like object collision, jumping, and other similar scenarios could benefit by having a brief moment in time where accuracy is preferred over smoothing =or= you would like to provide your players with the ability to make adjustments to suit their preferences.

**Lerp and Smooth Dampening**  
If you are not yet sure what kind of response you need from your interpolator, then setting the maximum interpolation time to 0.5 will provide you with a reasonably smooth end result while still reasonably preserving the precision of each state update. **Lerp** will start to have more "jitter" on non-authority instances the closer its maximum interpolation time reaches 0.0f (i.e. the same as no smoothing). **Smooth Dampening** can help preserve the "smooth" end result on non-authoritative instances as its maximum interpolation time approaches 0.0f.

**Physics**  
If you are wanting to get a more precise collisions between kinematic and non-kinematic bodies that can often be an issue when using `NetworkRigidbody` and you are using a client-server network topology with owner authoritative `NetworkTransform` instances or you are using a distributed authority network topology, then you always need to take into consideration what kind of interpolator type you are using,the maximum interpolation time value (if smooth lerp is enabled), and what your `Rigidbody` component's settings are. 

For the best results, at the expense of additional processing time, setting the `Rigidbody` "Interpolate" configuration to " "Extrapolate" and the "Collision Detection" to "Continuous Dynamic" can help improve your over-all end results when it comes to collision detection. However, you should always consider your maximum interpolation time value as being the first "go to" area to adjust first before seeking more advanced options.  

### Use quaternion synchronization

By default, rotation deltas are synchronized using Euler values. For many scenarios, using Euler values might be all that is needed. However, there are scenarios where synchronizing Euler deltas will yield undesirable results. One scenario is when you have complex nested NetworkTransforms where there are varying rotations between the parents and children transforms. When you add interpolation into the mix (_remember interpolation is buffered and has an inherent delay between the non-authoritative's current rotation and the target rotation_), there are adjustments that occur immediately within a Quaternion that handle more complex transform related issues (i.e. Gimbal Lock, etc).

With Quaternion synchronization enabled, the authoritative instance still compares threshold values against the Euler axis values to determine if an update in a transform's rotation is needed but the entire Quaternion itself is updated as opposed to just the Euler axis where the change(s) is/are detected. This means that you are guaranteed the proper rotation for an object will be applied to non-authoritative instances and the changes will have already accounted for more complex issues that can arise with Euler angles.

Quaternion synchronization comes with a price. It will increase the bandwidth cost, 16 bytes per instance, in exchange for handling the more complex rotation issues that more often occur when using nested NetworkTransform (one or more parent transforms with one or more child transforms). However, when you enable the **Use Quaternion Synchronization** property you will notice a change in both the **Syncing** axis selection check boxes and a new **Use Quaternion Compression** property will appear:

![image](/img/networktransform/NetworkTransformQuaternionSynch.png)

:::note  
The rotation synchronization axis checkboxes are no longer available when **Use Quaternion Synchronization** is enabled (_since synchronizing the quaternion of a transform will always update all rotation axis_) and **Use Quaternion Compression** becomes a visible option.  
:::

### Use quaternion compression

Since synchronizing a quaternion can increase the bandwidth cost per update of a `NetworkTransform`'s rotation state, there are two ways to reduce the over-all bandwidth cost of quaternion synchronization:
- **Quaternion Compression:** This provides the highest compression (16 bytes reduced down to 4 bytes per update) with a slightly higher precision loss than half float precision.
- **Half Float Precision:** When enabled and **Use Quaternion Compression** is disabled, this provides an alternate mid-level compression (16 bytes reduced down to 8 bytes per update) with less precision than full float values but higher precision than quaternion compression.

Quaternion compression is based on a smallest three algorithm that can be used when rotation precision is less of a concern than the bandwidth cost. You might have ancillary objects/projectiles that require some form of rotation synchronization, but in the over-all scheme of your project do not require perfect alignment. If bandwidth cost and precision are both a concern, then the alternate recommended compression is half float precision. It is also recommended to try out the different compression options, you might find that the fractional loss in precision is perfectly acceptable for your project's needs (_with the bonus of being able to reduce the over-all bandwidth cost by up to 50% for all instances than when using full precision_).

This property value can be updated on the authority during runtime and will be synchronized on all non-authority instances. _Reminder: Updating this value during runtime on the authoritative instance will result in a full synchronization of the NetworkTransform and all non-authority instances will have their interpolators reset._

### Use half float precision

Enabling this property does exactly what it sounds like, it converts any transform axial value from a 4 byte float to a 2 byte half-float at the expense of a loss in precision. When this option is enabled, half float precision is used for all transform axis marked for synchronization. However, there are some unique aspects of half float precision when it comes to position and rotation.

Since there is a loss in precision, position state updates only provide the delta in position relative to the last known full position. The `NetworkDeltaPosition` serializable structure keeps track of the current delta between the last known full position and the current delta offset from the last known full position. Additionally, `NetworkDeltaPosition` auto-corrects precision loss by determining any loss of precision on the authoritative side when sending an update. Any precision delta from the previous update will be included in the next position update. _In other words, non-authoritative instances can potentially have a fractional delta (per applied update) from the authoritative instance for the duration of 1 network tick period or until the next transform state update is received._ Additionally, `NetworkDeltaPosition` bridges the gap between the [maximum half float value](https://github.com/Unity-Technologies/Unity.Mathematics/blob/701d58fde76f3b93e40d0a792cd8fa4c130f1450/src/Unity.Mathematics/half.cs#L25) and the maximum boundaries of the Unity World space (global/project scale relative).

:::info  
**Recommended Unity World Space Units Per Second:**  
The maximum delta per update should not exceed 64 Unity world space units. If you are using the default network tick (30) then an object should not move at speeds that are equal to or exceed 1,920 Unity world space units per second (i.e. 30 x 64). To give you a frame of reference, the default camera far clipping plane is 1,000 Unity world space units which means something moving at 1,920 Unity world space units would most likely not be visually detectable or appear as a brief "blip" in the render view frustum.
:::

When **Use Quaternion Synchronization** and **Use Half Float Precision** are both enabled and **Use Quaternion Compression** is disabled, the quaternion values are synchronized via the `HalfVector4` serializable structure where each axial value (x, y, z, and w) are stored as [half values](https://docs.unity3d.com/Packages/com.unity.mathematics@1.2/api/Unity.Mathematics.half.html). This means that each rotation update is reduced from a full precision 16 bytes per update down to 8 bytes per update. Using half float precision for rotation provides a better precision than quaternion compression at 2x the bandwidth cost but half the cost of full precision.

When **Use Quaternion Synchronization**, **Use Half Float Precision**, and **Use Quaternion Compression** are enabled, quaternion compression is used in place of half float precision for rotation.

All of these properties are synchronized to non-authoritative instances when updated on the authoritative instance.

## Additional virtual methods of interest

`NetworkTransform.OnAuthorityPushTransformState`: This virtual method is invoked when the authoritative instance is pushing a new `NetworkTransformState` to non-authoritative instances. This can be used to better determine the precise values updated to non-authoritative instances for prediction related tasks.

`NetworkTransform.OnNetworkTransformStateUpdated`: This virtual method is invoked when the non-authoritative instance is receiving a pushed `NetworkTransformState` update from the authoritative instance. This can be used to better determine the precise values updated to non-authoritative instances for prediction related tasks.

`NetworkTransform.Awake`: This method has been made virtual in order to provide you with the ability to do any custom initialization. If you override this method, you are required to invoke `base.Awake()` (recommended invoking it first).

`NetworkTransform.OnInitialize`: This virtual method is invoked when the associated NetworkObject is first spawned and when ownership changes.

`NetworkTransform.Update`: This method has been made virtual in order to provide you with the ability to handle any customizations to a derived `NetworkTransform` class. If you override this method, it is required that all non-authoritative instances invoke `base.Update()` but not required for authoritative instances.
