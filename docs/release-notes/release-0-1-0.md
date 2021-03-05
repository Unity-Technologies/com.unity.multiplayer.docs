---
id: release
title: Multiplayer 0.1.0 - 2021-03-23
description: Release notes for Multiplayer v0.1.0, including new features, updates, bug fixes, known issues, and information to help you upgrade.
---

The Multiplayer v0.1.0 release contains features, updates, bug fixes, and refactoring for the first release of MLAPI for Unity.

(this is experimental, for march MLAPI, for May rebranding Netcode Core)
(pr changelog into release0.1.0 - one in place)

## New features

This release provides the following new features and APIs:

* Refactored a new standard for Remote Procedure Call (RPC) in MLAPI which provides increased performance, significantly reduced boilerplate code, and extensibility for future-proofed code. MLAPI RPC includes `ServerRPC` and `ClientRPC` to execute login on the server and client-side. <!-- See RPC (link TBD) for details. add link to doc when ready --><!-- MTT-233-->
* Added a new `NetworkTickSystem` to track time through network interactions and enable better client-side interpolation, lag compensation, replay and rollback, and in the future provide the required flexibility for new systems. The system evaluates and incrementally updates local and remote tick values through synced `NetworkVariable`s. <!-- See Network Tick System (link TBD) for more information. add link to doc when ready --><!-- MTT-241, RFC #12-->
<!--IN RFC - MAY COME BACK * Extended `Transport` to expose `NetworkAddress` and `NetworkPort` properties, used to change the address and port which an MLAPI client connects to at runtime or change the port on which a server gets hosted. This change promotes cleaner code and implementations, and makes it more interchangeable in both user code and library extensions.  -->
* Added Batching - notes from Jeffrey - ask Noel Stephens <!-- MTT-193 -->
* Profiler - Beck
* Integrated MLAPI with the Unity Profiler for versions 2020.2 and later.

(test project - one in the mlapi repo, could be called out as note or hey you)
(release notes based on released packages)
(samples in its own file)
(changelog package link out to test project, it's not in the package - in release0.1.0, com...mlapi folder, changelog file)

[MLAPI Community Contributions](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/com.mlapi.contrib.extensions) is a new GitHub repository open to the MLAPI community for extensions. Current extensions include moved MLAPI features for lag compensation (useful for Server Authoritative actions) and `TrackedObject`.

## Changes

This release includes the following updates to existing features:

* MLAPI now uses the Unity Package Manager for installation management. <!-- PR 520-->
* Added functionality and usability to [`NetworkVariable`](../mlapi-basics/networkedvar.md), previously called `NetworkVar`. Updates enhance options and fully replace the need for `SyncedVar`s. 

### Refactored API names

For users of previous versions of MLAPI, this release renames APIs due to refactoring. All obsolete marked APIs have been removed.

(grabbed from 513, more coming from Fatih)

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
* (formerly convienence vs rpc mode, now standard rpc)

## Fixes

This release includes the following issue fixes:

* [GitHub 460](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/pull/460): Resolved an issue for RPC where the host-server was not receiving RPCs from the host-client and vice versa without the loopback flag set in NetworkingManager.  <!-- MTT466 -->

## Known issues
You may need to include this section if you have known issues with the release that may affect integrations and usage.

## Upgrade guide
Provide steps and information to upgrade to this release version. Provide numbered instructions or bullets as needed, code in blocks using ticket (```).

## Learn more

See the [Unity Multiplayer MLAPI](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi) repository to learn more about contributing, open issues, and in-progress development.

To provide feedback and content on documentation, see the links at the bottom of each page.