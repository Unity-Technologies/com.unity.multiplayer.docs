---
id: introduction
title: Unity Multiplayer Release Notes
sidebar_label: Release Notes
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
* Network [object parenting](link) support

[Netcode install guide](../migration/installation.md)

#### Tools

Profiler support for Netcode. The new [network profiler modules](../basics/profiling.md) enable you to inspect detailed information about the network activity performed on a given frame.

[Tools install guide](link)

#### UTP

* Enabled Relay Service
* Includes DTLS encryption (required for console support)
* OSS UTP Adapter for Netcode

[UTP Transport install guide](../transport-utp/install.md)

#### Boss room

[Boss Room install guide](../learn/getting-started-boss-room.md)

#### BiteSize

[BiteSize install guide](../learn/bitesize-introduction.md)



This section includes release notes, hotfixes, and updates for all Unity Multiplayer releases. This information includes Unity Netcode for GameObjects (Netcode), tools, samples co-op code (Boss Room), and this documentation site. Learn more about new features, updates, bug fixes, known issues, and upgrades by version.

## Unity Netcode

See the following release notes for  Netcode.

| Release | Status | Date | Supported Unity Versions |
| -- | -- | -- | -- |
| [In Development](multiplayer/develop.md) | Not Released | N/A | 2020.3 and later |
| [v1.0.0](multiplayer/release-1-0-0.md) | Pre Release | October 21, 2021 | 2020.3 and later |
| [v0.1.0](multiplayer/release-0-1-0.md) | Experimental | March 23, 2021 | 2019.4 and later |

:::unity About Experimental
For Unity experimental releases:

* Expect breaking API changes - using this early has risks! See release notes for extensive information and links to additional content.
* Expect no SLA on timeline to ship patches and fixes to releases, as we are still establishing our test and release cadence.
* Expect these releases to move towards a fuller Release.
* Expect us to answer questions for early adopters on [Discord](https://discord.gg/buMxnnPvTb) and [Forums](https://forum.unity.com/forums/multiplayer.26/). We welcome all feedback and issues logged! 
:::

## Boss Room: Small Scale Co-op Sample

See the following project releases for Boss Room.

| Release | Status | Date | Supported Netcode | Supported Unity |
| -- | -- | -- | -- |
| [v0.2.0](samples/release-0-2-0.md) | Early Access | May 19, 2021 | [0.1.0](multiplayer/release-0-1-0.md) | v2020.3.8f1 LTS |
| [v0.1.0](samples/release-0-1-0.md) | Early Access | April 7, 2021 | [0.1.0](multiplayer/release-0-1-0.md) | 2020.3.0f1 LTS |

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Netcode.
:::

:::unity About Early Access
This project release is available for use. Support for this release is limited. We recommend asking questions and connecting with development through the #dev-samples channel on the Netcode[Discord](https://discord.gg/buMxnnPvTb).
:::

## Bitesize Samples

See the [Bitesize Samples changelog](bitesize/bitesize-changelog.md) for all release information on these projects.

## Unity Transport

See the [Transport changelog](transport/transport-changelog.md) for all release notes and information for Unity Transport. Transport specific Netcode implementations are documented in the Netcode release notes.

## Documentation

See the [Documentation changelog](doc-changelog.md) for major updates to content and site development.