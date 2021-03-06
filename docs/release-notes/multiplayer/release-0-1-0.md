---
id: mlapi-0-1-0
title: MLAPI 0.1.0 - 2021-03-23
description: Release notes for Multiplayer v0.1.0, including new features, updates, bug fixes, known issues, and information to help you upgrade.
label: 
---

The Multiplayer v0.1.0 Experimental release contains features, updates, bug fixes, and refactoring for the first release of MLAPI for Unity.

| Product | Version | Status | Release Date |
| -- | -- | -- | -- |
| MLAPI | 0.1.0 | Experimental | March 23, 2021 |

## New features

This release provides the following new features and APIs:

* Refactored a new standard for Remote Procedure Call (RPC) in MLAPI which provides increased performance, significantly reduced boilerplate code, and extensibility for future-proofed code. MLAPI RPC includes `ServerRPC` and `ClientRPC` to execute login on the server and client-side. <!-- See RPC (link TBD) for details. add link to doc when ready --><!-- MTT-233-->
* Added a new `NetworkTickSystem` to track time through network interactions and enable better client-side interpolation, lag compensation, replay and rollback, and in the future provide the required flexibility for new systems. The system evaluates and incrementally updates local and remote tick values through synced `NetworkVariable`s. <!-- See Network Tick System (link TBD) for more information. add link to doc when ready --><!-- MTT-241, RFC #12-->
<!--IN RFC - MAY COME BACK * Extended `Transport` to expose `NetworkAddress` and `NetworkPort` properties, used to change the address and port which an MLAPI client connects to at runtime or change the port on which a server gets hosted. This change promotes cleaner code and implementations, and makes it more interchangeable in both user code and library extensions.  -->
* Added message batching to handle consecutive RPC requests sent to the same client. `MessageBatcher` sends batches based on requests from the `RPCQueueProcessing`, by batch size threshold or immediately. <!-- add link to docs --> <!-- MTT-193 file:///Users/lori.krell/Downloads/rpc_batching.pdf -->
* Integrated MLAPI with the Unity Profiler for versions 2020.2 and later.
* Added a Network Update Loop infrastructure that aids Netcode system to update (such as RPC queue and transport) outside of the standard `MonoBehaviour` event cycle. <!-- add link to docs --> <!-- MTT-498 RFC #8 -->

:::tip
A test project is available for building and experimenting with MLAPI features. This project is located in the package `testproject` folder ([GitHub folder](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/release/0.1.0/testproject)). 

We also provide a new [Hello World example](../../tutorials/helloworldintro.md) to walk through installation to building your first networked game.
:::

[MLAPI Community Contributions](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/com.mlapi.contrib.extensions) is a new GitHub repository open to the MLAPI community for extensions. Current extensions include moved MLAPI features for lag compensation (useful for Server Authoritative actions) and `TrackedObject`.

## Changes

This release includes the following updates to existing features:

* MLAPI now uses the Unity Package Manager for installation management. <!-- PR 520-->
* Added functionality and usability to [`NetworkVariable`](../../mlapi-basics/networkvariable.md), previously called `NetworkVar`. Updates enhance options and fully replace the need for `SyncedVar`s. 
* Updated the [Unity MLAPI public repository](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi) with new issue templates to better receive feedback, feature requests, issues, other work and labels to clearly communicate the status of an issue and pull request.

### Refactored API names

For users of previous versions of MLAPI, this release renames APIs due to refactoring. All obsolete marked APIs have been removed. <!-- more coming from Fatih -->

| Previous MLAPI Versions | V 0.1.0 Name |
| -- | -- |
| `NetworkingManager` | `NetworkManager` |
| `NetworkedObject` | `NetworkObject` |
| `NetworkedBehaviour` | `NetworkBehaviour` |
| `NetworkedClient` | `NetworkClient` |
| `NetworkedPrefab` | `NetworkPrefab` |
| `NetworkedVar` | `NetworkVariable` |
| `NetworkedTransform` | `NetworkTransform` |
| `NetworkedAnimator` | `NetworkAnimator` |
| `NetworkedAnimatorEditor` | `NetworkAnimatorEditor` |
| `NetworkedNavMeshAgent` | `NetworkNavMeshAgent` |
| `SpawnManager` | `NetworkSpawnManager` |
| `BitStream/BitSerializer`... | `NetworkBuffer/NetworkSerializer`... |
| `NetEventType` | `NetworkEventType` |
| `ChannelType` | `NetworkDelivery` |
| `Channel` | `NetworkChannel` |
| `Transport` | `NetworkTransport` |
| `NetworkedDictionary` | `NetworkDictionary` |
| `NetworkedList` | `NetworkList` |
| `NetworkedSet` | `NetworkSet` |
| `MLAPIConstants` | `NetworkConstants` |

### Removed features

With a new release of MLAPI in Unity, some features have been removed:

* SyncVars have been removed from MLAPI. Use `NetworkVariable`s in place of this functionality. <!-- MTT54 -->
* Lag compensation systems and `TrackedObject` have moved to the new [MLAPI Community Contributions](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/com.mlapi.contrib.extensions) repo.
* Encryption has been removed from MLAPI. The `Encryption` option in `NetworkConfig` on the `NetworkingManager` is not available in this release. This change will not block game creation or running. A current replacement for this functionality is not available, and may be developed in future releases. <!-- MTT-516-->
* Removed the previous MLAPI Profiler editor window from Unity versions 2020.2 and later.
* Removed previous MLAPI Convenience and Performance RPCs with a new standrd for RPCs. <!-- RFC#1 -->

## Fixes

This release includes the following issue fixes:

* [GitHub 460](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/pull/460): Fixed an issue for RPC where the host-server was not receiving RPCs from the host-client and vice versa without the loopback flag set in NetworkingManager.  <!-- MTT466 -->
* Fixed an issue where data in the Profiler was incorrectly aggregated and drawn, which caused the profiler data to increment indefinitely instead of resetting each frame. <!-- MTT-526-->
* Fixed an issue the client soft-synced causing PlayMode client-only scene transition issues, caused when running the client in the editor and the host as a release build. Users may have encountered a soft sync of `NetworkedInstanceId` issues in the `SpawnManager.ClientCollectSoftSyncSceneObjectSweep` method. <!--MTT-505 -->

<!--## Known issues
You may need to include this section if you have known issues with the release that may affect integrations and usage.

## Upgrade guide
Provide steps and information to upgrade to this release version. Provide numbered instructions or bullets as needed, code in blocks using ticket (```).-->

## Learn more

See the [Unity Multiplayer MLAPI](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi) repository to learn more about contributing, open issues, and in-progress development.

To provide feedback and content on documentation, see the links at the bottom of each page.