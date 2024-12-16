---
id: play-mode-scenario-req
title: Play Mode Scenarios requirements and limitations
description: Learn how to use the Play Mode Scenarios window to test a multiplayer project
---

To use the Play Mode Scenarios window, install the following packages: 
* [Multiplayer Play Mode](https://docs-multiplayer.unity3d.com/tools/current/about/)
* [Dedicated server](https://docs.unity3d.com/Packages/com.unity.dedicated-server@1.3/manual/index.html)

A Play Mode Scenario that contains a local or remote instance requires a Build Profile that matches the platform your project exists on. To learn how to assign a Build Profile, refer to [Create a Play Mode scenario](play-mode-scenario-create.md). Use a [Build Profile](https://docs.unity3d.com/6000.0/Documentation/Manual/build-profiles.html) to configure the type of build this scenario uses. To learn what each property in a Build Profile controls, refer to the [Build Profiles reference](https://docs.unity3d.com/6000.0/Documentation/Manual/build-profiles-reference.html).

Remote instances use [Unity Gaming Services (UGS) Multiplay Hosting](https://docs.unity.com/ugs/en-us/manual/game-server-hosting/manual/welcome-to-multiplay). You can get started with a Unity Gaming service for free. To learn how billing works for each Unity Gaming service, refer to [UGS pricing](https://unity.com/products/gaming-services/pricing).

## Compatibility
Play Mode Scenarios is compatible with the following Unity features:
* Unity version 6000.0.3f01 and later
* [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/1.6.0/about/)
* [Netcode for Entities](https://docs.unity3d.com/Packages/com.unity.netcode@1.0/manual/index.html)
* [Multiplayer Tools](https://docs-multiplayer.unity3d.com/tools/current/about/)

## Limitations
The Play Mode Scenario window has the following limitations: 

* The Pause and Step icons in the Game view window aren't supported for local and remote targets.
* You can only run a remote instance on the Linux platform.
* You can only run a local instance on MacOS, Linux, Windows, or Android platforms.
* Play Mode Scenarios doesn’t support [Play Mode shortcuts](https://docs.unity3d.com/6000.0/Documentation/Manual/UnityHotkeys.html).

## Additional resources
* [Netcode for Entities Project Setup](https://docs.unity3d.com/Packages/com.unity.netcode@1.0/manual/installation.html)
* [Multiplayer Play Mode System requirements and compatibility](sys-req.md)
* [Play Mode scenario window reference](mppm-reference/play-mode-scenario-window-reference.md)
* [Create a Play Mode scenario](play-mode-scenario-create.md)
