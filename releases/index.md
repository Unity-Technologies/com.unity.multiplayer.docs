---
id: introduction
title: Unity Multiplayer What's New
sidebar_label: What's New
---

Here are the new high-level features and changes for each release. For a detailed change list, see the release notes for each section.

<!-- Release Template
## {Year - Month}

For our {Month Year} release, the following major features were released:

### Netcode for GameObjects

{Content}

### Tools

{Content}

### UTP

{Content}

### Boss Room

{Content}

### BiteSize

{Content}
-->

## 2021 - October

For our October 2021 release, the following major features were released:

### Netcode for GameObjects (Netcode)

[v1.0.0 Netcode pre-release](/releases/multiplayer/1.0.0) supports Unity versions 2020.3 and later
The `develop` branch is considered experimental and supports Unity versions 2020.3 and later

* Streamlined RPC layer with support for [serialization of custom data types](/docs/advanced-topics/custom-serialization)
* Improved [scene management](/docs/basics/scene-management) which includes additive scene workflows support
* Support for [network animations](/docs/components/networkanimator)
* Improved [network transforms](/docs/components/networktransform) with interpolation support
* Network [object parenting](/docs/advanced-topics/networkobject-parenting) support

Use the [Netcode install guide](/docs/migration/install) for your first installation of Netcode and follow the [upgrade guide](/docs/migration/upgrade-guide) if you are transitioning from MLAPI 0.1.0 to Netcode 1.0.0.

:::unity About Experimental Releases
For Unity experimental releases:

* Expect breaking API changes - using this early has risks! See release notes for extensive information and links to additional content.
* Expect no SLA on timeline to ship patches and fixes to releases, as we are still establishing our test and release cadence.
* Expect these releases to move towards a fuller Release.
* Expect us to answer questions for early adopters on [Discord](https://discord.gg/buMxnnPvTb) and [Forums](https://forum.unity.com/forums/multiplayer.26/). We welcome all feedback and issues logged! 
:::

### Known Issues for this Release

* The first time you install Netcode and UTP together, you may get an error. UTP has Burst as a dependency that requires you to restart your editor to properly enable.
* To implement `NetworkSerialize` functionality, you may need to override `WriteField/WriteDelta/ReadField/ReadDelta` as a current workaround.

### Tools

We added profiler support for Netcode. The new [network profiler modules](/docs/basics/profiling) enables you to inspect detailed information about the network activity performed on a given frame.

To install the tools package in your project, see the [install tools](/docs/tools/install-tools) guide.

### Unity Transport (UTP)

* Enabled [Relay Service](https://docs.unity.com/relay/Content/introduction.htm)
* Includes DTLS encryption (required for console support)
* OSS UTP Adapter for Netcode

See the [UTP Transport install guide](/docs/transport-utp/install) to install Unity transport with your project.

See the [Transport changelog](transport/transport-changelog.md) for all release notes and information for Unity Transport. Transport specific Netcode implementations are documented in the Netcode release notes.

### Boss room

The Boss Room Co-Op Sample is now in [pre-release](/releases/samples/samples-1-0-0-pre) and requires Unity 2020.3 LTS and Netcode 1.0.0-pre.

#### New Features
* Player persistence hierarchical modifications to Netcode's Player Prefab
* Archer's base attack & charged shot 1-3 replicated via NetworkTransform
* NetworkTransform handles players' movement syncing
* Adding ParrelSync
* NetworkAnimator added to boss door & floor switch with server-authority
* Integrating Unity Transport and Relay into Boss Room
* NetworkObject pool (arrows are pooled)
* Server-authoritative character NetworkAnimator

Use the [Boss Room install guide](/docs/learn/bossroom) to start using Boss Room today!

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Netcode.
:::

:::unity About Pre-release
This project release is available for use. Support for this release is limited. We recommend asking questions and connecting with development through the #dev-samples channel on the Netcode [Discord](https://discord.gg/buMxnnPvTb).
:::

### BiteSize

See the [Bitesize Samples changelog](bitesize/bitesize-changelog.md) for all release information on these projects.

Use the [BiteSize install guide](/docs/learn/bitesize-introduction) to begin using the different BiteSize sample projects.

### Documentation

See the [Documentation changelog](doc-changelog.md) for major updates to content and site development.