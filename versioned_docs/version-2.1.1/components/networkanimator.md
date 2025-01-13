---
id: networkanimator
title: NetworkAnimator
---
The `NetworkAnimator` component provides a fundamental example of how to synchronize animations during a network session. You can also use [RPCs](../advanced-topics/messaging-system.md), [NetworkVariables](../basics/networkvariable.md), and [custom messages](../advanced-topics/message-system/custom-messages.md) to create a custom animation synchronization system, if it suits the needs of your project better.

Using `NetworkAnimator`, animation states are synchronized with players joining an existing network session and any client already connected before the animation state changes.

* Players joining an existing network session are synchronized with:
    * All the `Animator`'s current properties and states.
        * *With the exception of [`Animator` trigger properties](#animator-trigger-property). These are only synchronized with already-connected clients.*
    * Any in progress transition.
* Players already connected are synchronized with changes to `Animator`:
    * States
    * Transitions
    * Properties
        * `NetworkAnimator` only synchronizes properties that have changed since the earlier frame property values.
        * Since triggers are similar to an event, when an `Animator` property is set to `true` it will always be synchronized.

`NetworkAnimator` can operate in two authoritative modes:

* [Server authoritative](#server-authoritative-mode): The server initiates animation state changes. This is the default in [client-server topologies](../terms-concepts/client-server.md).
    * Owners can still invoke `NetworkAnimator.SetTrigger`.
* [Client authoritative](#owner-authoritative-mode): Client owners start animation state changes. This is the default in [distributed authority topologies](../terms-concepts/distributed-authority.md).


:::note

You need to use `Unity.Netcode.Components` to reference components such as `NetworkAnimator`.

:::

## `Animator` trigger property

The `Animator` trigger property type is a Boolean value that, when set to `true`, is automatically reset back to `false` after the `Animator` component has processed the trigger. Usually, a trigger is used to start a transition between `Animator` layer states. You can use the trigger as a way to signal the beginning of an event. Because trigger properties have this unique behavior, you must set the trigger value via the `NetworkAnimator.SetTrigger` method.

:::caution

If you set a trigger property using `Animator.SetTrigger` then this won't be synchronized with non-owner clients.

:::

## Server authoritative mode

In [client-server contexts](../terms-concepts/client-server.md), the default setting for `NetworkAnimator` is server authoritative mode. When operating in server authoritative mode, any animation state changes that are set (triggers) or detected (change in layer, state, or any `Animator` properties excluding triggers) on the server side will be synchronized with all clients. Because the server initiates any synchronization of changes to an `Animator`'s state, a client that's the owner of the NetworkObject associated with the `NetworkAnimator` can lag by roughly the full round trip time (RTT). Below is a timing diagram to show this:

![ServerAuthMode](/img/NetworkAnimatorServerAuthTiming.png)

In the above diagram, a client might be sending the server an RPC to tell the server that the player is performing some kind of action that can change the player's animations (including setting a trigger). In this scenario, the client sends an RPC to the server (half RTT), the server processes the RPC, the associated `Animator` state changes are detected by the `NetworkAnimator` (server-side), and then all clients (including the owner client) are synchronized with the change.

**Server authoritative model benefits:**

* If running a non-host server, this model reduces the synchronization latency between all client animations.

**Server authoritative model drawbacks:**

* Hosts are always slightly ahead of all other clients, which may or may not be an issue for your project.
* Client owners will experience latency between performing an action (moving, picking something up, anything that causes an `Animator` state change).

## Owner authoritative mode

Your project's design (or personal preference) might require that owners are immediately updated with any `Animator` state changes, typically to give the local player instantaneous visual (animation) feedback. In [distributed authority contexts](../terms-concepts/distributed-authority.md), the default setting for `NetworkAnimator` is owner authoritative mode.

To create an owner authoritative `NetworkAnimator` in a client-server context, you need to create a new class that's derived from `NetworkAnimator`, override the `NetworkAnimator.OnIsServerAuthoritative` method, and within the overridden `OnIsServerAuthoritative` method you should return false like in the example provided below:

```csharp
    public class OwnerNetworkAnimator : NetworkAnimator
    {
        protected override bool OnIsServerAuthoritative()
        {
            return false;
        }
    }
```

The diagram below illustrates that with an owner authoritative `NetworkAnimator`, the owner client gets an immediate visual animation response, while non-owner clients end up being roughly one full RTT behind the owner client and a host would be half RTT behind the owner client.

![ServerAuthMode](/img/NetworkAnimatorOwnerAuthTiming.png)

The diagram above shows that the owner client has an `Animator` state change that's detected by the `NetworkAnimator` ( `OwnerNetworkAnimator`) which automatically synchronizes the server with the changed state. The server applies the change(s) locally and then broadcasts this state change to all non-owner clients.

**Owner authoritative model benefits:**

* The owner is provided instant visual feedback of `Animator` state changes, which provides a smoother experience for the local player.

**Owner authoritative model drawbacks:**

* Non-owner clients lag behind the owner client's animation by roughly one full RTT.
* A host lags behind the owner client's animation by roughly half RTT.

:::caution

The same rule for setting trigger properties still applies to owner clients. As such, if you want to programmatically set a trigger then you still need to use `NetworkAnimator.SetTrigger`.

:::

## Using NetworkAnimator

Using `NetworkAnimator` is relatively straightforward, with the only difference being whether you implement a server or owner authoritative model.

:::important

`NetworkAnimator` is one of several possible ways to synchronize animations during a network session. Netcode for GameObjects provides you with the building blocks ([RPCs](../advanced-topics/messaging-system.md), [NetworkVariables](../basics/networkvariable.md), and [custom messages](../advanced-topics/message-system/custom-messages.md)) needed to create an alternative animation synchronization system that has a completely different and potentially more optimized approach. `NetworkAnimator` is a basic approach provided for users already familiar with the `Animator` component and, depending upon your project's design requirements, might be all that you need.

:::

### Server authoritative

If you want to use a server authoritative model, then you can add a `NetworkAnimator` component to either the same GameObject that has the NetworkObject component attached to it, or any child `GameObject`. In the screenshot below, you can see a network prefab that contains two authoritative models. The `NetworkAnimatorCube-Server` `GameObject` has an `Animator` component, an `AnimatedCubeController` component (used for manual testing), and the `NetworkAnimator` component that has a reference to the `Animator` component.

![Usage-1](/img/NetworkAnimatorUsage-1.png)

### Owner authoritative

If you want to use an owner authoritative model, then (for example purposes) you can use your derived `OwnerNetworkAnimator` component instead of the default `NetworkAnimator` component like in the screenshot below:

![Usage-1](/img/NetworkAnimatorUsage-2.png)

:::info

While it isn't recommended to have different `NetworkAnimator` authoritative models under the same root network prefab `GameObject`, you can have multiple children that each have their own `Animator` and `NetworkAnimator`, all contained under a single NetworkObject and all using the same authoritative model. However, you should always consider the balance between performance (CPU or bandwidth consumption) and convenience/modularity.

:::

### Changing animator properties

For all `Animator` properties (except for triggers), you can set them directly via the `Animator` class. For example, you might use the player's normalized velocity as a way to control the walking or running animation of a player. You might have an `Animator` `float` property called `"AppliedMotion"` that you set on the authoritative instance (server or owner) like so:

```csharp
public void ApplyMotion(Vector3 playerVelocity)
{
    m_Animator.SetFloat("AppliedMotion", playerVelocity.normalized.magnitude);
}
```

For triggers, you always want to use `NetworkAnimator`. One example might be that you use a trigger, called " `IsJumping`, " to start a blended transition between the player's walking/running animation and the jumping animation:

```csharp
public void SetPlayerJumping(bool isJumping)
{
    m_NetworkAnimator.SetTrigger("IsJumping");
}
```

:::tip Changing meshes

When swapping a skinned mesh with another reparented skinned mesh, you can invoke the `Rebind ` method on the `Animator` components: `Animator.Rebind()`.

:::
