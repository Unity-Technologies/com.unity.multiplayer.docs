---
id: bitesize-changelog
title: Multiplayer Bitesize Samples
description: Release notes for Boss Room Small Scale Co-op Sample v0.1.0, the first release of the Boss Room sample project for Unity MLAPI.
---

The [Multiplayer Bitesize Samples](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize) respository provides modular samples code to use in your game projects. 

| Product | Version |  Release Date | Supported Netcode for GameObject Versions | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Boss Room: Small Scale Co-op Sample | 0.1.0 | Early Access | April 7, 2021 | 0.1.0 Experimental | 2020.3 and later |


## [0.2.0] - 2021-07-21

### Invaders

#### New Changes

- Game - rename all our alien prefabs to have a more generic name, the same principle was applied to our codebase, renamed variables/fields/classes to something more generic
- Game: Fix a crash in shipping build
- Enemies: Rename our main enemy class to EnemyAgent + minor clean-ups + implement a grace shoot timer period
- InvadersGame: Some big refactories here, the UpdateEnemies function not outputs a set of flags (bitmask) rather than having separated booleans to keep track off
- InvadersGame: Fix an edge case of the game loop where if the enemies would reach the bottom they would never respawn, now when they do reach that bottom boundary it will be game over
- InvadersGame: Introduce additional game over reasons
- LobbyControl: Introduce a minimum player count variable that could be tweaked in the inspector so that the users can start playing in the editor with just the host in the lobby
- PlayerControl: Unified the NotifyGameOver function with the InvadersGame one + added different texts for all the possible game over reasons to be displayed
- PlayerControl: Fix a minor issue where the Player graphics are not hidden on all connected instances upon "death".

#### Known Issues

- Upon import a MissingReferenceException is triggered from within MLAPI: **"MissingReferenceException: The object of type ‘GameObject’ has been destroyed but you are still trying to access it.
  Your script should either check if it is null or you should not destroy the object."** in:
  - UnityEngine.GameObject.GetComponent[T] () (at /Users/bokken/buildslave/unity/build/Runtime/Export/Scripting/GameObject.bindings.cs:28)

### 2DSpaceShooter

#### New Changes
- Cleaned up project structure, removed duplicate art assets and moved remaining asset into sub folders.
- Removed empty MonoBehaviours which were used as tags and using the Unity tag system instead.
- Removed the dependency to the community contributions repository and copied `NetworkManagerHud` and `NetworkObjectPool` into the sample.
- Small QoL improvements to scripting. Using `TryGetComponent` and `CompareTag`.
- Fix audio issues by moving the audio listener onto the player ship object.

#### Known Issues

- Missing Reference Exception thrown when leaving playmode, can be ignored:
*MissingReferenceException: The object of type 'NetworkObjectPool' has been destroyed but you are still trying to access it.
Your script should either check if it is null or you should not destroy the object.
MLAPI.Extensions.NetworkObjectPool.ReturnNetworkObject*

## [0.1.0] - 2021-04-07

## New features

* Added Invaders sample.
* Added 2D Space Shooter sample.
