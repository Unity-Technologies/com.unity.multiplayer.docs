---
id: play-mode-scenario-configure-build
title: Configure and build local and remote instances
description: Learn how to set up and run instances in the Play Mode Scenario window.
---

When you set up a Play Mode scenario, you can create the following type of instances: 

* Additional Editor
* Local
* Remote

## Configure and build a remote instance

A remote instance exists in the [Unity Cloud](https://docs.unity.com/cloud/en-us) and uses [Unity Gaming Services (UGS) Multiplay Hosting](https://docs.unity.com/ugs/en-us/manual/game-server-hosting/manual/welcome-to-multiplay). You can start using Multiplay Hosting for free, but server use can incur a cost even when it's not running a process or hosting any users. To reduce cost in a project that uses Multiplay Hosting, open the [Unity Cloud Dashboard](http://cloud.unity.com/) and reduce the **Minimum Available Scaling** property value to 0. To learn more about Multiplay Hosting costs, refer to [UGS pricing](https://unity.com/products/gaming-services/pricing).

You can only have one remote instance in a Play Mode Scenario and it can only run on a Linux platform.

To learn more about the properties that you can use to configure a remote instance, refer to [Play Mode Scenarios window reference](play-mode-scenario-window-reference.md).

## Configure and build a local instance
A local instance exists on the same platform as the Unity Editor. To build a local instance that you have configured in the Play Mode Scenarios window, [enter Play Mode](https://docs.unity3d.com/Manual/GameView.html). All configured Play Mode Scenarios build automatically when you enter Play Mode.

To learn more about the properties that you can use to configure a local instance, refer to [Play Mode Scenarios window reference](play-mode-scenario-window-reference.md).

## Check the status of all instances
The Play Mode status window displays the following information for each Play Mode scenario:
* Status
* Port
* Address
* Errors

To open the Play Mode status window: 

1. Enter Play Mode.
2. Expand the Play Mode status dropdown.
3. Select the status window icon.

## Additional resources
* [Play Mode Scenarios requirements and limitations](play-mode-scenario-req)
* [Create a Play Mode Scenario](play-mode-scenario-create.md)
* [Unity Gaming Services (UGS) Multiplay Hosting](https://docs.unity.com/ugs/en-us/manual/game-server-hosting/manual/welcome-to-multiplay)
* [Troubleshoot a test build](play-mode-scenario-troubleshoot.md)