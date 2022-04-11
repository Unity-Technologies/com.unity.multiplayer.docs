---
id: samples-0-1-0
title: Boss Room Small Scale Co-op Sample 0.1.0 - 2021-04-07
sidebar_label: Boss Room 0.1.x
description: Release notes for Boss Room Small Scale Co-op Sample v0.1.0, the first release of the Boss Room sample project for Unity MLAPI.
---

The Boss Room: Small Scale Co-op Sample v0.1.0 release provides new sample code, assets, and features for the Boss Room cooperative game sample project. 

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Boss Room: Small Scale Co-op Sample | 0.1.0 | Early Access | April 7, 2021 | 2020.3.0f1 |

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Unity MLAPI. See [Unity MLAPI](../index.md) for more information on those features, fixes, and known issues.
:::

## [0.1.2] - 2021-04-23

v0.1.2 is a hotfix for an Early Access release for Boss Room: Small Scale Co-op Sample.

### Updates

* License updated to [Unity Companion License (UCL)](https://unity3d.com/legal/licenses/unity_companion_license) for Unity-dependent projects. See LICENSE in package for details.
* The GitHub repository `master` branch has been renamed to `main`. If you have local clones of the repository, you may need to perform the following steps or reclone the repo:

```
# Switch to the "master" branch:
$ git checkout master

# Rename it to "main":
$ git branch -m master main

# Get the latest commits (and branches!) from the remote:
$ git fetch

# Remove the existing tracking connection with "origin/master":
$ git branch --unset-upstream

# Create a new tracking connection with the new "origin/main" branch:
$ git branch -u origin/main
```

## [0.1.1] - 2021-04-09

v0.1.1 is a hotfix for an Early Access release for Boss Room: Small Scale Co-op Sample.

### Updates

* Added [Third Party Contributors](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/master/third-party%20contributors.md) file listing external partner contributors.
* Refactored `IsStealthy` from `NetworkVariableByte` to `NetworkVariableBool` to indicate state.

## [0.1.0] - 2021-04-07

## New features

[Boss Room](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop) is a small-scale cooperative game sample project – built on top of the new experimental netcode library – designed as an educational sample that showcases typical gameplay patterns that are frequently featured in similar games. Use this project to explore the concepts and patterns behind a multiplayer game flow. It supports up to 8 players for testing multiplayer functionality.

* Access Boss Room by downloading the project and adding it using Package Manager.
* Learn with Unity using the Boss Room source code, project files, and assets which include: 1 populated dungeon level, 4 character classes with 2 genders, combatant imps and boss, and a simple collaborative puzzle.
* Test co-op games by running multiple instances of the game locally or connecting to a friend over the internet.

## Known issues

The following issues may occur for access and games:

* Sometimes when the host leaves the Boss Room, not all clients will return to the Main Menu, but will remain stuck in the Boss Room scene. <!-- GOMPS-439-->
* Sometimes after completing a match and the host starts a new match from the Victory or Loss screen, connected players may have no visible interactions to join or select characters. <!-- GOMPS-464 GOMPS-506 -->
* A player may encounter a rare exception when the Tank character uses her Shield Aura ability. This issue may be due to intercepting the Boss charge attack. <!-- GOMPS-435 -->
* If two players in the Character Select **Ready** for the same hero at the same time, the UI will update to *Readied* on both clients, but only one will have actually selected the hero on the Host. This issue blocks Character Select from proceeding.  <!-- GOMPS-390 -->
* Any player that plays the game and then returns to the Main Menu may be unable to Start or Join properly again, requiring you to restart the client. <!-- GOMPS-355 -->
* Green quads may show on impact when the Archer arrow strikes enemies. This issue may only occur in the editor. <!-- GOMPS-460 -->
* The Photon Transport currently generates some errors in the Player log related to the `PhotonCryptoPlugin`. <!-- GOMPS-453 -->
* The welcome player message in the lobby indicates P2 (player 2) regardless of your generated name. Currently the Character Select scene displays “Player1” and “P1” in two locations, where it is intended that the user’s name be displayed.  <!-- GOMPS-428 --> 
* The spawner portal does not work in this release. <!-- PR #172 -->
* Players may not reliably play another match when selecting **Return to Main Menu** during the post-game scene. This may be due to states not properly clearing. <!-- PR #246-->
* Some actions may feel unresponsive and require action anticipation animations.
* In some degraded network conditions, a replicated entity on a client can vanish from that client, creating the effect of being assailed by an invisible enemy. <!-- GOMPS-380-->
* Boss collisions with a Pillar may not correctly apply a stun effect and shatter the pillar when using the Trample attack. <!-- PR #206 gomps-330 -->
* The displayed graphical affects for casting and blocking a Bolt do not correctly match the caster and target.  <!-- gomps-417 PR #223-->
* Some areas of the Boss Room require updates to geometry seams and collisions, for short walls and lava pits. <!-- GOMPS-289-->

## Learn more

See [Getting Started with Boss Room](../../netcode/current/learn/bossroom) to install and get started with Boss Room.