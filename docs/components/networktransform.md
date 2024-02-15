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

![image](/img/NetworkTransformSimple.png)

You can also have a parent GameObject that has a NetworkObject component attached to it with a child GameObject that has a NetworkTransform component like in the image below:

![image](/img/NetworkTransformSimpleParent.png)

As well, you can have "nested NetworkTransforms" that are all associated with a single NetworkObject like in the image below:

![image](/img/NetworkTransformNestedParent.png)

With nested NetworkTransforms, you can (theoretically) have the (n) number of nested children each with NetworkTransform components.  _However, we recommend exercising caution with the amount of nested NetworkTransforms per network prefab instance if you plan on having many instances of that same network prefab per network session._


:::tip
**The general rule to follow is:**

 As long as there is at least one (1) NetworkObject at the same GameObject hierarchical level or above, you can attach a NetworkTransform component to a GameObject. 

 _You could have a single root-parent GameObject that has a NetworkObject component and under the root-parent several levels of nested child GameObjects that all have NetworkTransform components attached to them. Each child GameObject would not require a NetworkObject component in order for each respective NetworkTransform component to function/synchronize properly._
:::


## Configuring
When you select a NetworkTransform component, you will see the following properties in the inspector view:

![image](/img/NetworkTransformProperties.png)

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

![image](/img/NetworkTransformQuaternionSynch.png)

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
**(a.k.a. ClientNetworkTransform)**

 Server-side authority NetworkTransforms provide a balance between synchronized transforms and the latency between applying the updates on all connected clients. However, there are times when you want the position to update immediately for a specific NetworkObject (common the player) on the client-side. Owner authority of a NetworkTransform is dictated by the `NetworkTransform.OnIsServerAuthoritative` method when a NetworkTransform component is first initialized. If it returns `true` (the default) then it initializes as a server authoritative `NetworkTransform`. If it returns `false` then it initializes as an owner authoritative `NetworkTransform` (a.k.a. `ClientNetworkTransform`). This can be achieved by deriving from `NetworkTransform`, overriding the `OnIsServerAuthoritative` virtual method, and returning false like in the code example below:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/v2.2.0/Packages/com.unity.multiplayer.samples.coop/Utilities/Net/ClientAuthority/ClientNetworkTransform.cs
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

### Client Anticipation Mode

**(a.k.a. AnticipatedNetworkTransform)**

Client Anticipation Mode gets the benefits of server authority (consistency of state between clients and resistance to cheating) and client authority (immediate response to player input), but requires a little bit more effort to implement. There are a few ways to use AnticipatedNetworkTransform, but the three most common ways are:

- **Local Simulation and Reconciliation** - the most common way of using `AnticipatedNetworkTransform` for the player's own controlled character is by duplicating the input handling on the client and server. Implementing this requires a few basic components:

  - **Duplicated Simulation:** When input is received on the client, the input itself should be passed to the server via an RPC so that the server can process that input, but the client should also process that input, using `AnticipateMove()`, `AnticipateRotate()`, and `AnticipateScale()` to apply the results of that simulation. On the server, these methods not only update the anticipated (visible) state, but also update the authoritative state, so the server can actually run the exact same code as the clients without having to change how it assigns values.

  - **Consistent Timing:** Timing of input processing (meaning, the delta time used in the computation) needs to be consistent on the client and server to ensure they are performing the same calculations so that the anticipation calculation can be as accurate as possible. This generally means input should be processed either in `FixedUpdate` or in a method that has been registered as a network tick callback with the `NetworkManager.NetworkTickSystem.Tick` event. This also has important implications to how input is handled, because these calls will not necessarily be called every frame, so events like `GetKeyPressed()` will potentially be missed, which means some method (such as input buffering) needs to be used to implement your own detection of key press and release events.

  - **Historical Input:** In order to perform local simulation and reconciliation, player input must be recorded over time to create a historical list of inputs associated with local timestamps taken from `NetworkManager.LocalTime.Time`. (It is important to use this value and not any other time source.)

  - **The OnReanticipate Delegate:** An `AnticipatedNetworkTransform` without an `OnReanticipate` delegate is not very useful, as whatever anticipation you do on the client side will be overwritten the moment a new server update comes in. In order to implement the Local Simulation and Reconciliation paradigm, this delegate (which can be registered in the `Awake()` or `OnNetworkSpawn()` events  for an attached `NetworkBehaviour`) has to be used to re-perform anticipation to get an updated current position that compensates for latency. The historical input mentioned above is used for that purpose by reapplying any inputs that have timestamps more recent than the `authorityTime` passed into the delegate. This uses the new server authority value as a base, and then compensates for the latency in receiving that update by re-applying the frames of input in between then and the present time to compensate for a new value. In the event that the newly calculated value differs from the previous anticipated value, it is then common to call something like `networkTransform.Smooth(anticipatedValue, newValue, 0.1f)`, which will smoothly interpolate from the previous anticipated value (passed into the delegate as the `anticipatedValue` parameter) and the newly calculated value.

    After doing this process, the input history then needs to be trimmed to keep it from growing forever. the `authorityTime` passed to the delegate is guaranteed to always be greater than the previous one, so it is safe to remove every input in the history list whose time value is less than or equal to `authorityTime`.

- **Interpolation** - The most common way of using `AnticipatedNetworkTransform` for other player characters is interpolation, which will be similar to using the normal `NetworkTransform` with the `Interpolate` option enabled. Generally speaking, the only difference between `AnticipatedNetworkTransform` and `NetworkTransform` for this use case is that `AnticipatedNetworkTransform` gives you greater control over the interpolation, as you can control the duration of the interpolation (balancing between smoothness, accurate reproduction of motion, and latency, as interpolation itself adds to the latency by adding "smoothing" time before reaching the new authoritative position). Additionally, `AnticipatedNetworkTransform` gives you the ability to react to different situations in different ways - for example, if you know a certain update represents a teleport in some way, or if the distance traveled exceeds a certain threshold, you can skip the interpolation for that update; or, you can decide the duration of the interpolation based on the distance the character needs to travel to reach the new authoritative position.

  For interpolation, all you need is to register an `OnReanticipate` delegate with the `AnticipatedNetworkTransform` that calls `networkVariable.Smooth()`, which, as mentioned above, can be registered in the `Awake()` or `OnNetworkSpawn()` events  for an attached `NetworkBehaviour`.

- **Extrapolation** - Whereas interpolation is mostly concerned with reducing the visual jitter associated with network updates of a character's position, and accomplishes this by *adding* a small amount of latency to the simulation, *extrapolation* is the opposite; rather than adding latency, extrapolation attempts to eliminate it. This is not frequently used with player-controlled objects, as it is almost impossible to reliably predict what the inputs you haven't received yet will contain in order to calculate a new position, but for AI-controlled characters, extrapolation can be used in a similar fashion to local simulation and reconciliation. At a basic level, this requires the same set of components as the re-simulation described above; the only difference is that the list of historical inputs is not required for extrapolation. Instead, after the server updates the state, the AI logic simply runs from the new state.

  Because extrapolation, more than other forms of anticipation, may rely on more complex state (for example, the movement of an AI may depend on the value of one or more NetworkVariables) it is worth noting that all `AnticipatedNetworkVariable<T>` fields (as well as all other `NetworkVariableBase` fields) and all `AnticipatedNetworkTransform` components will be updated with their new authoritative values before any of their `OnReanticipate` callbacks are called, and that those callbacks will be called in the order of `AnticipatedNetworkVariable<T>` first, then `AnticipatedNetworkTransform`, though the order of individual variables and transforms relative to each other is undefined. After all `OnReanticipate` callbacks are called, a global `NetworkManager.OnReanticipate` callback is called so that you can perform a global reanticipation pass if you need a more defined order of anticipation. This callback accepts two parameters of types `HashSet<NetworkVariableBase>` and `HashSet<NetworkBehaviour>`, containing all updated `AnticipatedNetworkVariable<T>` and `AnticipatedNetworkTransform` objects, respectively, so that if you need to limit your logic to only those things that have changed, you can check if they are present in those sets before running the logic.

  Standard `NetworkTransform`, however, operates differently than `AnticipatedNetworkTransform`, and will be updated at an undefined point during the Unity engine's `Update` stage, so if your `AnticipatedNetworkTransform`'s reanticipation logic relies on other network transforms, make sure they are all `AnticipatedNetworkTransform` as well so that you can get the most current information.

  One note about calculations performed for extrapolation: With local simulation and reanticipation, inputs from the entire round trip time between the client and the server are used to recalculate the new position of the object. With extrapolation, however, because you are not sending anything to the server to cause an action, but simply reacting to its result and anticipating what will come next, you should only use the **half**-round-trip time to perform your calculations. This can be estimated as `(NetworkManager.LocalTime.Time - authorityTime) * 0.5f`, which is slightly less precise than the full round trip time calculation as the time may have been different in one direction compared to the other, but is the most precise measurement we can make in practice and is generally "good enough" for accurate anticipation.

There is also a fourth paradigm that is less commonly used with transforms, which is an "anticipate once" paradigm. In this paradigm, you anticipate a particular result from an action, and thereafter, ignore all new updates from the server until the server has processed your request, as opposed to recalculating a new anticipated value on each update as in the above three paradigms. Due to the nature of transforms (in that they tend to represent more analog movement patterns rather than simple state values), it's very rare to use this paradigm for transforms, but if you do need this paradigm, you can use it by setting the transform's `StaleDataHandling` value to `StaleDataHandling.Ignore`. In this mode, the transform will track the next round trip to the server, ignoring any updates that arrive before one round trip is completed (updates that are considered "stale"). The general assumption is that operating in this mode will be accompanied by a message to the server (most likely an RPC) that will update the value on the server-side, and the anticipated value on the client will be left unchanged until that RPC has been processed by the server. This is done deterministically (which is to say, the anticipation system sends a message to the server and waits for a response to that specific message, as opposed to guessing based on current round trip time values).

A sample showing both the **local simulation and reanticipation** and **interpolation** paradigms is available in our bitesize samples repository. The sample is intended to be run locally in three windows (one server and two clients) and shows local simulation and reanticipation for the client who is providing input for the character, and interpolation for the other client. (Technically both are running the local simulation and reanticipation code, but as the other client's input history is blank, the reanticipation does nothing, which results in it running as simple interpolation.)

### Client Anticipation Example

**Client Simulation and Reanticipation:**

```csharp
public class PlayerMovableObject : NetworkBehaviour
{
    // This object's own AnticipatedNetworkTransform, linked in the editor for easy access
    public AnticipatedNetworkTransform MyTransform;
    // An input manager - this is a class that can return the current frame's input,
    // as well as input from previous frames. It also provides its own detection of key
    // press and release events, since it is used in FixedUpdate instead of Update,
    // and the Unity implementations of those events can result in missed inputs.
    public InputManager InputManager;
    public float SmoothDistance = 3;
    
    // InputList is a [Flags] enum that just records which buttons were pressed
    // as one bit per input.
    public void Move(InputList inputs)
    {
        if ((inputs & InputList.Up) != 0)
        {
            var newPosition = transform.position + transform.right * (Time.fixedDeltaTime * 4);
            MyTransform.AnticipateMove(newPosition);
        }

        if ((inputs & InputList.Down) != 0)
        {
            var newPosition = transform.position - transform.right * (Time.fixedDeltaTime * 4);
            MyTransform.AnticipateMove(newPosition);
        }

        if ((inputs & InputList.Left) != 0)
        {
            transform.Rotate(Vector3.up, -180f * Time.fixedDeltaTime);
            MyTransform.AnticipateRotate(transform.rotation);
        }

        if ((inputs & InputList.Right) != 0)
        {
            transform.Rotate(Vector3.up, 180f * Time.fixedDeltaTime);
            MyTransform.AnticipateRotate(transform.rotation);
        }
    }
    
    // Raw inputs are passed to the server for the server to process.
    // The server performs the exact same logic as the client did in its anticipation.
    [Rpc(SendTo.Server)]
    private void ServerMoveRpc(InputList inputs)
    {
        // Calling Anticipate functions on the authority sets the authority value, too, so we can
        // just reuse the same method here with no problem.
        Move(inputs);
    }
    
    // Input processing happens in FixedUpdate rather than Update because the frame rate 
    // of server and client may not exactly match, and if that is the case, doing movement
    // in Update based on Time.deltaTime could result in significantly different calculations
    // between the server and client, meaning greater opportunities for desync. Performing 
    // updates in FixedUpdate does not guarantee no desync, but it makes the calculations
    // more consistent between the two. It also means that we don't have to worry about 
    // delta times when replaying inputs when we get updates - we can assume a fixed amount 
    // of time for each input. Otherwise, we would have to store the delta time of each 
    // input and replay using those delta times to get consistent results.
    public void FixedUpdate()
    {
        if (!NetworkManager.IsConnectedClient)
        {
            return;
        }
        if (!IsServer)
        {
            // Retrieve the inputs for the current frame
            var inputs = InputManager.GetInput();
            // Apply them locally
            Move(inputs);
            // Then replicate them to the server to be applied there as well
            ServerMoveRpc(inputs);
        }
    }
    
    public override void OnNetworkSpawn()
    {
        MyTransform.OnReanticipate = (networkTransform, anticipatedValue, anticipationTime, authorityValue, authorityTime) =>
        {
            // Here we re-anticipate the new position of the player based on the updated
            // server position. We do this by taking the current authoritative position 
            // and replaying every input we have received since the reported authority time, 
            // re-applying all the movement we have applied since then to arrive at a new
            // anticipated player location.
            foreach (var item in InputManager.GetHistory())
            {
                if (item.Time <= authorityTime)
                {
                    continue;
                }

                Move(item.Item, true);
            }
            // Clear out all the input history before the given authority time. 
            // We don't need anything before that anymore as we won't get any more updates 
            // from the server from before this one. We keep the current
            // authority time because theoretically another system may need that.
            InputManager.RemoveBefore(authorityTime);
            // It's not always desirable to smooth the transform. 
            // In cases of very large discrepencies in state, it can sometimes be desirable
            // to simply teleport to the new position. We use the SmoothDistance value (and 
            // use SqrMagnitude instead of Distance for efficiency) as a threshold for
            // teleportation. This could also use other mechanisms of detection: 
            // For example, when a Telport input is included in the replay set, we could 
            // set a flag to disable smoothing because we know we are teleporting.
            if (Vector3.SqrMagnitude(anticipatedValue.Position - networkTransform.AnticipatedState.Position) < SmoothDistance * SmoothDistance)
            {
                // Server updates are not necessarily smooth, so applying reanticipation 
                // can also result in hitchy, unsmooth animations. To compensate for that,
                // we call this to smooth from the previous anticipated state (stored in 
                // "anticipatedValue") to the new state (which, because we have used
                // the "Move" method that updates the anticipated state of the transform, 
                // is now the current transform anticipated state)
                networkTransform.Smooth(anticipatedValue, networkTransform.AnticipatedState, 0.1f);
            }
        };
        base.OnNetworkSpawn();
    }
}
```

**Interpolation:**

```csharp
public class OtherPlayerObject : NetworkBehaviour
{
    // This object's own AnticipatedNetworkTransform, linked in the editor for easy access
    public AnticipatedNetworkTransform MyTransform;
    
    public override void OnNetworkSpawn()
    {
        MyTransform.OnReanticipate = (networkTransform, anticipatedValue, anticipationTime, authorityValue, authorityTime) =>
        {
            // See above example for comments here: This section is the same as the above.
            if (Vector3.SqrMagnitude(anticipatedValue.Position - networkTransform.AnticipatedState.Position) < SmoothDistance * SmoothDistance)
            {
                networkTransform.Smooth(anticipatedValue, networkTransform.AnticipatedState, 0.1f);
            }
            // That's it for interpolation!
        };
        base.OnNetworkSpawn();
    }
}
```

**Extrapolation:**

```csharp
public class EnemyObject : NetworkBehaviour
{
    // This object's own AnticipatedNetworkTransform, linked in the editor for easy access
    public AnticipatedNetworkTransform MyTransform;
    
    public override void OnNetworkSpawn()
    {
        // For a simple extrapolation example, we assume that this object is moving in a straight
        // line at a constant velocity of (1, 1, 0) units per second. This is obviously a VERY
        // simplified example of extrapolation, but should give you a good idea of how to approach
        // it.
        MyTransform.OnReanticipate = (networkTransform, anticipatedValue, anticipationTime, authorityValue, authorityTime) =>
        {
            var smoothTime = 0.1f;
            
            // Calculate the amount of time in the past we currently are using the
            // half-round-trip time combined with our smoothing time of 0.1f
            var secondsBehind = (NetworkManager.LocalTime.Time - authoritativeTime) * 0.5f + smoothTime;

            // Move the position of the authoritative value according to our constant velocity of (1, 1, 0).
            var newAnticipatedValue = new AnticipatedNetworkTransform.TransformState
            {
                Position = authoritativeValue.Position + new Vector3(1, 1, 0) * secondsBehind,
                Rotation = authoritativeValue.Rotation,
                Scale = authoritativeValue.Scale
            };
            
            // Smooth to hide jitter
            networkTransform.Smooth(anticipatedValue, newAnticipatedValue, smoothTime);
        };
        base.OnNetworkSpawn();
    }
}
```



## Additional Virtual Methods of Interest

`NetworkTransform.OnAuthorityPushTransformState`: This virtual method is invoked when the authoritative instance is pushing a new `NetworkTransformState` to non-authoritative instances. This can be used to better determine the precise values updated to non-authoritative instances for prediction related tasks.

`NetworkTransform.OnNetworkTransformStateUpdated`: This virtual method is invoked when the non-authoritative instance is receiving a pushed `NetworkTransformState` update from the authoritative instance. This can be used to better determine the precise values updated to non-authoritative instances for prediction related tasks.

`NetworkTransform.Awake`: This method has been made virtual in order to provide you with the ability to do any custom initialization. If you override this method, you are required to invoke `base.Awake()` (recommended invoking it first).

`NetworkTransform.OnInitialize`: This virtual method is invoked when the associated `NetworkObject` is first spawned and when ownership changes.

`NetworkTransform.Update`: This method has been made virtual in order to provide you with the ability to handle any customizations to a derived `NetworkTransform` class. If you override this method, it is required that all non-authoritative instances invoke `base.Update()` but not required for authoritative instances.

