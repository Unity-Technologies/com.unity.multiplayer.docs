---
title: Multiplayer v1.0.0
id: release1-0-0
description: Release notes for Multiplayer v1.0.0, including new features, updates, bug fixes, known issues, and information to help you upgrade.
---

The Multiplayer v1.0.0 release contains features, updates, bug fixes, and refactoring for the first release of MLAPI for Unity.

## 1.0.0 - 2021-03-23

## New features

[MLAPI Community Contributions](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/com.mlapi.contrib.extensions) is a new GitHub repository open to the MLAPI community for extensions. Current extensions include moved MLAPI features for lag compensation (useful for Server Authoritative actions) and `TrackedObject`.

This release provides the following new features and APIs:

* Added a new `NetworkTickSystem` to track time through network interactions and enable better client-side interpolation, lag compensation, replay and rollback, and in the future provide the required flexibility for new systems. The system evaluates and incrementally updates local and remote tick values through synced `NetworkVariable`s. See [Network Tick System](LINK) for more information.<!-- add link to doc when ready --><!-- MTT-241, RFC #12-->
* 

## Changes

For users of previous versions of MLAPI, this release renames APIs due to refactoring. All obsolete marked APIs have been removed. See the following:

| Previous MLAPI Versions | V 1.0.0 Name |
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

This release includes the following updates to existing features:

* Added functionality and usability to [`NetworkVariable`](../../mlapi-basics/networkedvar.md), previously called `NetworkVar`. Updates enhance options and fully replace the need for `SyncedVar`s. 
* Refactored a new standard for Remote Procedure Call (RPC) in MLAPI which provides increased performance, significantly reduced boilerplate code, and extensibility for future-proofed code. MLAPI RPC includes `ServerRPC` and `ClientRPC` to execute login on the server and client-side. See [RPC](LINK) for details. <!-- add link to doc when ready --><!-- MTT-233-->

With a new release of MLAPI in Unity, some features have been removed, moved, or deprecated. See the following list of affected features:

* MTT-54: SyncVars have been removed from MLAPI. Use `NetworkVariable`s in place of this functionality.
* Lag compensation systems and `TrackedObject` have moved to the new [MLAPI Community Contributions](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/com.mlapi.contrib.extensions) repo.
* MTT516: Encryption has been removed from MLAPI. The `Encryption` option in `NetworkConfig` on the `NetworkingManager` is not available in this release. This change will not block game creation or running. A current replacement for this functionality is not available, and may be developed in future releases.

## Fixes
* Add a bullet per issue/bug fix. You do not require an issue number for the changelog. <!-- If you want to include issue numbers without building, you can include mtt-### in comments. -->

## Known issues
You may need to include this section if you have known issues with the release that may affect integrations and usage.

## Upgrade guide
Provide steps and information to upgrade to this release version. Provide numbered instructions or bullets as needed, code in blocks using ticket (```).

## Learn more

See the [Unity Multiplayer MLAPI](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi) repository to learn more about contributing, open issues, and in-progress development.

To provide feedback and content on documentation, see the links at the bottom of each page.