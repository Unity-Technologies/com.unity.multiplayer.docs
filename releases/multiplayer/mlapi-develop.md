---
id: mlapi-develop
title: MLAPI In-Development Release Notes
description: In-progress release notes for the next release of Unity MLAPI including new features, updates, bug fixes, known issues, and information to help you upgrade.
---

The following in-progress content tracks features, updates, bug fixes, and refactoring for the next release of Unity MLAPI. Specific release information including supported Unity versions, release date, and release version is to be announced. All content and development information is subject to change.

:::caution In-Development Information
The following release notes document in-progress features, changes, bug fixes, and more for MLAPI. This content tracks on-going work in the [develop branch](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/develop) of MLAPI. Finalized release notes will be built from this content for a future release of Unity MLAPI.
:::

<!--
| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| MLAPI | to be announced | to be announced | to be announced | 2019.4 and later |
-->

:::note
Unity MLAPI supports Windows, MacOS, Ubuntu 20.4 LTS, Ubuntu 18.04 LTS and CentOS 7 versions of Unity Editor and Player.
:::

## New features

This release provides the following new features and APIs:

* Snapshot features are in-progress for Unity MLAPI. Additional information will be provided during development. <!-- MTT-591 -->
* Additional Profiler features are in-progress for performance network profiling. Additional information will be provided during development. <!-- MTT-716 -->

### New APIs

The following APIs have been added:

* The following APIs support Profiler features:

  * `MLAPI.Profiling.ProfilerNotifier`
  * `MLAPI.Profiling.ProfilerNotifier.NoTickDataHandler`
  * `MLAPI.Profiling.ProfilerNotifier.PerformanceDataEventHandler`

* The following APIs provide a simplified method of notifying when all clients have loaded to a new scene and are ready. The `NetworkSceneManager` captures events and provides that data without needing to re-subscribe. <!-- MTT-588 PR 755 -->

  * `MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate`
  * `MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate`
  * `MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate`

* `MLAPI.SnapshotSystem` added for snapshot features.
* The following APIs were created in refactoring custom spawn and destroy handlers for `NetworkSpawnManager` and usage of `UnityEditor.GlobalObjectID`. Custom spawn and destroy functionality is not affected, a server can still spawn a specific prefab and a different, predetermined prefab in its place on a client.  <!-- MTT-622 -->

  * `MLAPI.Spawning.INetworkPrefabInstanceHandler`
  * `MLAPI.Spawning.NetworkPrefabHandler`

## Changes

This release includes the following updates:

* NetworkPrefabs updated to use `GlobalObjectIdHash` (internal Unity value) to best identify and link NetworkPrefabs  in the project attached to `NetworkManager` between server and clients. The usage of `GlobalObjectId` including the following changes: <!-- MTT-611 MTT-610 MTT-612 -->

  * `NetworkInstanceId` was removed in favor of `GlobalObjectIdHash`, which is not exposed to public APIs. `GlobalObjectIdHash` is meant for MLAPI framework internals (specifically NetworkObject and NetworkPrefab linking layer) and is not intended for users.
  * When a NetworkPrefab is registered with `NetworkManager`, it can be spawned dynamically on the network at runtime. The server assigns a unique ID, and replicates it to connected clients for synchronization. This removes the need for `UsePrefabSync` (removed).
  * Custom spawn and destroy APIs were refactored without affecting functionality.

* Completed code maintenance and updates to better support testing. <!-- MTT-601 determine how much should be documented in this ticket "internal work" -->

### Removed APIs

The following APIs have been removed due to refactoring:

* `MLAPI.Configuration.NetworkPrefab`
* `MLAPI.NetworkManager.PerformanceDataEventHandler`
* `MLAPI.Profiling.Sample` 
* `MLAPI.Spawning.NetworkSpawnManager.DestroyHandlerDelegate`
* `MLAPI.Spawning.NetworkSpawnManager.SpawnHandlerDelegate`
* `UsePrefabSync`, `PrefabHash`, and `PrefabHashGenerator`
* `NetworkInstanceId` and `NetworkScenePostProcessor`

## Fixes

This release includes the following issue fixes:

* [GitHub 367](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/pull/367): `OnClientConnectedCallback` is now properly called when `StartHost` is called. This affects `NetworkManager` `OnClientConnectedCallback` and `ConnectionApproval` `ConnectionApprovalCallback`. <!-- MTT-566 -->
* [GitHub 664](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/issues/664): Updates the `drawElementCallback` to assure there is only one default player prefab. This resolves an issue where adding a new Prefab in **NetworkPrefabs** automatically marked it as default. <!-- MTT-537 -->
* [GitHub 803](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/pull/803) : Switched from `ModuleDefinition.Types` to `ModuleDefinition.GetTypes()` API. `NetworkBehaviourILPP` now iterates over all types and filters for `NetworkBehaviour` derived types and leaving no one outside from ILPP.