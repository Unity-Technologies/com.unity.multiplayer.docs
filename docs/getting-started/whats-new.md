---
id: whats-new
title: What's New in Netcode for GameObjects (Netcode)
sidebar_label: What's New
---

The following are the high-level features and changes for each release. For a detailed change list, see the lastest changelog [here](link).

## 2021

<!-- Release Template
### {Month}

For our {Month Year} release, the following major features were released:

#### Netcode for GameObjects

{Content}

#### Tools

{Content}

#### UTP

{Content}

#### Boss Room

{Content}

#### BiteSize

{Content}
-->

### October

For our October 2021 release, the following major features were released:

#### Netcode for GameObjects (Netcode)

* Streamlined RPC layer with support for [serialization of custom data types](../advanced-topics/custom-serialization.md)
* Improved [scene management](../basics/scene-management.md) which includes additive scene workflows support
* Support for [network animations](../components/networkanimator.md)
* Improved [network transforms](../components/networktransform.md) with interpolation support
* Network [object parenting]() support

[Netcode install guide](../migration/installation.md)

#### Tools

Profiler support for Netcode. The new [network profiler modules](../basics/profiling.md) enable you to inspect detailed information about the network activity performed on a given frame.

[Tools install guide](link)

#### UTP

* Enabled [Relay Service](link)
* Includes [DTLS encryption](link) (required for console support)
* [OSS UTP Adapter](link) for Netcode

[UTP Transport install guide](../transport-utp/install.md)

#### Boss room

[Boss Room install guide](../learn/getting-started-boss-room.md)

#### BiteSize

[BiteSize install guide](../learn/bitesize-introduction.md)
