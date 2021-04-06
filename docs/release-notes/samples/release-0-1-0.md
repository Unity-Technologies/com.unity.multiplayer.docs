---
id: samples-0-1-0
title: Multiplayer Samples Co-op 0.1.0 - 2021-04-07
description: Release notes for Multiplayer Samples Co-op v0.1.0, the first release of the Boss Room sample project for Unity MLAPI.
---

The Multiplayer Samples Co-op v0.1.0 release provides new sample code, assets, and features for the Boss Room cooperative game sample project. 

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Multiplayer Samples Co-op | 0.1.0 | Early Access | April 7, 2021 | 2020LTS |

:::important
Multiplayer Samples Co-op always requires the latest version of [Unity MLAPI](../index.md).
:::

## [0.1.0] - 2021-04-07

## New features

[Boss Room](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop) is a small-scale cooperative game sample project – built on top of the new experimental netcode library – designed as an educational sample that showcases typical gameplay patterns that are frequently featured in similar games. Use this project to explore the concepts and patterns behind a multiplayer game flow. It supports up to 8 players for testing multiplayer functionality.

* Access Boss Room by downloading the project and adding it using Package Manager.
* Learn with Unity using the Boss Room source code, project files, and assets which include: 1 populated dungeon level, 4 character classes with 2 genders, combatant imps and boss, and a simple collaborative puzzle.
* Test co-op games by running multiple instances of the game locally or connecting to a friend over the internet.

## Known issues

Review the following known issues with this release:

* After a round of Boss Room completes and a party member returns to the menu, it pulls all players and leader to menu. <!-- GOMPS-431 -->
* The welcome player message in the lobby indicates P2 (player 2) regardless of your player number. <!-- GOMPS-428 -->
* When multiple players select the same character and click **Ready** at the same time, it defaults to host and prevents the game from starting. This may be due to Unity MLAPI exceptions, requiring additional messaging to expose the information to the user and developer.<!-- GOMPS-390 important issue, regardless of closed GH issue-->

## Learn more

See the [Unity Multiplayer MLAPI] to install and get started with Boss Room.

To provide feedback and content on documentation, see the links at the bottom of each page.