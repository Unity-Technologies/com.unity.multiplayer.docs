---
id: mlapi-1-0-0-pre
title: MLAPI 1.0.0 In Development
description: Release notes for Multiplayer v1.0.0 Pre-release, including new features, updates, bug fixes, known issues, and information to help you upgrade.
label: 
---

The Multiplayer v1.0.0 Pre-release contains features, updates, bug fixes, and refactoring for the first release of MLAPI for Unity.

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| MLAPI | 1.0.0 | to be announced | to be announced | 2019.4 and later |

:::note
Unity MLAPI supports Windows and MacOS versions of Unity Editor and Player.
:::

## New features

This release provides the following new features and APIs:

* To be announced

The following APIs have been added:

* MLAPI.Profiling.ProfilerNotifier
* MLAPI.Profiling.ProfilerNotifier.NoTickDataHandler
* MLAPI.Profiling.ProfilerNotifier.PerformanceDataEventHandler
* MLAPI.SceneManagement.NetworkSceneManager.NotifyClientAllClientsLoadedSceneDelegate
* MLAPI.SceneManagement.NetworkSceneManager.NotifyServerAllClientsLoadedSceneDelegate
* MLAPI.SceneManagement.NetworkSceneManager.NotifyServerClientLoadedSceneDelegate
* MLAPI.SnapshotSystem
* MLAPI.Spawning.INetworkPrefabInstanceHandler
* MLAPI.Spawning.NetworkPrefabHandler

## Changes

The following APIs have been removed:

| Removed | Replacement |
| -- | -- |
| `MLAPI.Configuration.NetworkPrefab` |  |
| `MLAPI.NetworkManager.PerformanceDataEventHandler` |  |
| `MLAPI.Profiling.Sample` |  |
| `MLAPI.Spawning.NetworkSpawnManager.DestroyHandlerDelegate` |  |
| `MLAPI.Spawning.NetworkSpawnManager.SpawnHandlerDelegate` |  |