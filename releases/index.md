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

## 2022 - March

For our March 2022 UTP 1.0.0 release, the following major features were released:

### UTP

* Multi-platform, custom-wrapped UDP based transport
* Event-driven design
* Network Pipelines Framework including pipelines for:
  * Reliability
  * Sequencing
  * Fragmentation
  * Network Condition Simulation
* Scheduled Jobs support for multi-threading
* End-to-end encryption support via DTLS
* Unity Relay support 
* Huffman encoded datastreams
* Support for raw, bit-level read and writes from the datastream
* Keep-alive heartbeat message support


See the [UTP Transport install guide](../../transport/current/install) to install Unity transport with your project.

See the [Transport changelog](transport/transport-1-0-0) for all release notes and information for Unity Transport. Transport specific Netcode implementations are documented in the Netcode release notes.

## 2021 - October

For our October 2021 release, the following major features were released:

### Netcode for GameObjects (Netcode)

[v1.0.0 Netcode pre-release](netcode/1.0.0) supports Unity versions 2020.3 and later

The `develop` branch is considered experimental and supports Unity versions 2020.3 and later

* Streamlined RPC layer with support for [serialization of custom data types](../../netcode/current/advanced-topics/custom-serialization)
* Improved [scene management](../../netcode/current/basics/scene-management) which includes additive scene workflows support
* Support for [network animations](../../netcode/current/components/networkanimator)
* Improved [network transforms](../../netcode/current/components/networktransform) with interpolation support
* Network [object parenting](../../netcode/current/advanced-topics/networkobject-parenting) support

Use the [Netcode install guide](../../netcode/current/migration/install) for your first installation of Netcode and follow the [upgrade guide](../../netcode/current/migration/upgrade-guide) if you are transitioning from MLAPI 0.1.0 to Netcode 1.0.0.

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

We added profiler support for Netcode. The new [network profiler modules](../../netcode/current/basics/profiling) enables you to inspect detailed information about the network activity performed on a given frame.

To install the tools package in your project, see the [install tools](../../netcode/current/tools/install-tools) guide.

### Boss room

The Boss Room Co-Op Sample is now in [pre-release](samples/samples-1-0-0-pre) and requires Unity 2020.3 LTS and Netcode 1.0.0-pre.

#### New Features
* Player persistence hierarchical modifications to Netcode's Player Prefab
* Archer's base attack & charged shot 1-3 replicated via NetworkTransform
* NetworkTransform handles players' movement syncing
* Adding ParrelSync
* NetworkAnimator added to boss door & floor switch with server-authority
* Integrating Unity Transport and Relay into Boss Room
* NetworkObject pool (arrows are pooled)
* Server-authoritative character NetworkAnimator

Use the [Boss Room install guide](../../netcode/current/learn/bossroom) to start using Boss Room today!

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Netcode.
:::

:::unity About Pre-release
This project release is available for use. Support for this release is limited. We recommend asking questions and connecting with development through the #dev-samples channel on the Netcode [Discord](https://discord.gg/buMxnnPvTb).
:::

### BiteSize

See the [Bitesize Samples changelog](bitesize/bitesize-changelog) for all release information on these projects.

Use the [BiteSize install guide](../../netcode/current/learn/bitesize-introduction) to begin using the different BiteSize sample projects.

### Documentation

See the [Documentation changelog](doc-changelog) for major updates to content and site development.