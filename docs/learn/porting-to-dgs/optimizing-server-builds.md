---
id: optimizing-server-builds
title: Porting from client-hosted to DGS - Optimizing server builds
sidebar_label: Optimizing server builds
---
:::note
This is part four of the [Porting from client-hosted to dedicated server-hosted series](../porting-to-dgs).

See the other pages in this series:

- [Part 1 - Introduction](../porting-to-dgs)
- [Part 2 - Client-hosted versus DGS-hosted](./client-vs-dgs)
- [Part 3 - Game changes](./porting-to-dgs-game-changes)
- **Part 4** - Current
- [Part 5 - Hosting considerations](./hosting-considerations)

:::

Unlike client builds, server builds have no need for visuals, sounds, inputs, or anything related to a user's device like mobile notifications. You can reduce the size of server builds and, as a result, save a lot of hardware resources by removing client-specific scripts and assets.

You can do this by stripping the unnecessary assets from the server build at build time; this way, the client-side assets aren’t included in memory when loading the executable. Server build stripping allows you to pack as many server instances as possible on your dedicated hosting, saving you money.

## Server build stripping

In Unity Editor version 2021 and later, you can use the Dedicated Server build target option. The Dedicated Server build target automatically strips content the server doesn’t need at build time in addition to starting headless automatically. See the [Unity Build Settings documentation](https://docs.unity3d.com/2019.1/Documentation/Manual/BuildSettings.html).

You should see a reduction in memory and CPU usage with the Dedicated Server build (compared to a build that includes client-side assets).

## Script stripping

Script stripping involves removing client-only scripts from a server build. You can strip scripts from a server build using the [UNITY_SERVER scripting symbol](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html). You can use the UNITY_SERVER option per script or per assembly to strip whole client-only assemblies.

For example, you might want to set all audio-specific code in an Audio assembly, then strip the Audio assembly from server build targets. This would ensure you have no audio code running on your server. Because Unity performs stripping operations at compile time, it’s easier to find compiler errors than runtime errors.

:::warning
There are some indexing issues that arise when using Netcode for GameObjects (NGO) with asset stripping. See [NGO and script stripping](#ngo-and-script-stripping).
:::

### NGO and script stripping

Netcode for GameObjects (NGO) relies on [`NetworkBehaviour`](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkbehavior)’s index position on a GameObject to know to which `NetworkBehaviour` it needs to route network messages. By stripping a script, you can unintentionally create holes in the GameObject’s list of components, interfering with NGO’s indexing. In general, you shouldn’t strip `NetworkBehaviours`; in fact, `NetworkBehaviours` should always be the same between the client and server. To avoid indexing issues with NGO, use script stripping with caution (and only strip as necessary).

Your server build can have a few `NetworkBehaviours` scripts to allow callbacks like [`OnNetworkSpawn`](../../api/Unity.Netcode.NetworkBehaviour#onnetworkspawn). These callbacks should use the `NetcodeHook` class (see [Boss Room’s Utilities package](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/tree/v2.1.0/Packages/com.unity.multiplayer.samples.coop/Utilities)).

## Content Selection

You can use [content selection](content-selection.md) methods to selectively strip GameObjects, components, and prefab assets depending on your build target.

## Other stripping opportunities

You can also strip other client-specific data to improve the performance of your build. Some examples include:

- [Animations](#animations)
- [Animation-only bones](#animation-only-bones)
- [`Rigidbody` physics](#rigidbody-physics)

### Animations

Because server builds are headless, you might be able to exclude some animation-related code, such as character animation and bones that aren’t linked to gameplay, further reducing the resource requirements. Animations often increase the performance demands of a build; as a result, removing unnecessary animations server-side can improve performance a great deal.

### Animation-only bones

It’s usually safe to do per-bone stripping on server builds, where you delete bones that aren’t linked to gameplay. For example, you might keep a character’s right arm for weapons, but you strip the left arm because it’s only used for animation.

:::warning
Don’t remove bones if you have hitboxes or gameplay attached to those bones.
:::

### `Rigidbody` physics

You can also improve server build performance by disabling server-side interpolation of [`Rigidbody` physics](https://docs.unity3d.com/Manual/RigidbodiesOverview.html). For example, you might add a post-process step to your scene that disables server-side `Rigidbody` interpolation.
