---
id: samples-0-2-0
title: Boss Room Small Scale Co-op Sample 0.2.0 - 2021-05-18
sidebar_label: Boss Room 0.2.x
description: Release notes for Boss Room Small Scale Co-op Sample v0.2.0, the first release of the Boss Room sample project for Unity MLAPI.
---

The Boss Room: Small Scale Co-op Sample v0.2.0 release provides new sample code, assets, and features for the Boss Room cooperative game sample project. THis project provides a learning experience for Unity MLAPI.

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Boss Room: Small Scale Co-op Sample | 0.2.0 | Early Access | May 18, 2021 | v2020.3.8f1 LTS |

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Unity MLAPI. See [Unity MLAPI](../index.md) for more information on those features, fixes, and known issues.
:::

## [0.2.0] - 2021-05-18

## New features

This release includes the following new features and additions

* Introduced static scene `NetworkObject`s to Boss Room including the following updates:<!-- GOMPS-381 PR 292-->

    * Added two separator `GameObject`s for scene readability: runtime `NetworkObject`s and `NetworkObject`s already placed in the scene.
    * Added `GameEvent` (ScriptableObject) and `GameEventListener` (MonoBehaviour) to encapsulate events inside assets, located in the `ServerBossRoomState` prefab which now has a `GameEventListener` component. The event associated to this listener is `BossDefeated`, which the Boss raises when the `LifeState` is Dead in the `RaiseEventOnLifeChange` component. This feature can be expanded for other events, such as characters deaths.
    * Added a custom editor for GameEvents to fire in the editor (greatly enhances testing).
    * The `LifeState` NetworkVariable was moved from `NetworkCharacterState` into its own component, `NetworkLifeState`.
    * Cleaned up and removed old spawn prefab collections and spawner scripts (NetSpawnPoint).

* 
* Updated the user interface including the following:

  * When joining a game, a "Connecting..." UI loads. When disconnecting from a game, you are returned to the MainMenuScene with a "Connection to Host lost" message. If the game fails to connect, a general message "Connection to Host failed" loads. <!-- GOMPS-5, GOMPS-114 -->
  * Added an option to leave the lobby after joining it. You no longer have to restart the game to leave the lobby. <!-- GOMPS-375 -->
  * Added option to cancel the game after clicking **Ready**. <!-- GOMPS-293 -->
  * Added a gear icon for accessing and modifying app settings. <!-- GOMPS-421 -->
  * The UI now tracks and displays player has arrived, number of connected players in the lobby, and player status. <!-- GOMPS-292 GOMPS-351 -->

* Added F/X and animation assets for the game including:

  * Audio files for boss sound effects <!--  GOMPS-110 -->
  * Ramp-up animation for hero movement and actions <!-- GOMPS-122 GOMPS-472-->
  * Visual effects and particles for Tank charge skill <!-- GOMPS-237 GOMPS-238 -->
  * Art assets to wave spawner, including animations for ReceiveDamage, Broken (died), and Revive <!-- GOMPS-123 -->
  * Game music <!-- GOMPS-128 -->

* Added audiomixer to Boss Room for separate audio channels and a master mixer. <!-- GOMPS-352 -->

* Updated and added various hero abilities:

  * Added a cooldown to Archer's PowerShot. <!-- GOMPS-483 -->
  * Added the Rogue's Dagger and Dash skills. <!--  GOMPS-16 GOMPS-65 -->
  * Added the Rogue's Sneak skill using local stealth, applying a graphical effect to the stealthy character while still sending all network events normally. <!--  GOMPS-64 -->
  * Properly display Heal abilities when targeting a fallen ally character. <!-- GOMPS-454 -->
  * Character attack actions properly support Hold to charge options. <!-- GOMPS-455 -->

* To show how UI elements and game objects can be networked, added networked functionality using `INetworkSerializable` in the `CharSelect` screen to network player's selected character on the Character Selection screen. <!-- GOMPS-174 -->
* Added a Photon filter to remove any invisible characters introduced by Zoom when copy-pasting room names. <!-- GOMPS-433 -->
* Boss Room now uses the [UnityToonShader](https://github.com/IronWarrior/UnityToonShader) for rendering the 3D surfaces to emulate 2D, flat surfaces. <!-- GOMPS-442 -->
* Added disconnection error message to load when a player or host disconnects due to limited or no network connectivity. Client logic was also updated to detect Host disconnection scenarios, such as losting connectivity. <!-- GOMPS-448 GOMPS-470 -->
* Balanced hero and enemy stats, spawners, trigger areas, and enemy detetction areas. <!-- GOMPS-249, 251 -->
* Added healthbars to display when damaged and properly track imp health locally and across clients. <!-- GOMPS-450 -->

## Changes

This release includes the following updates:

* Refactored and updated Boss Room code and architecture for increased performance and better resource management: <!-- GOMPS-539-->

  * Disabled GPU Skinning to optimize GPU usage and FPS.
  * Lowered quality of ambient occlusion from high to medium.
  * Switched SMAA High to FXAA (fast mode) reducing GPU cost.
  * Modified GPU Instancing on imps, heroes, and the boss to significantly reduce the number of draw calls.
  * Turned off Cast Shadows on Imp and Imp Boss.
  * Disabled mesh colliders of lava, which is more decorative than interactive.
  * Removed the S_SimpleDissolve shader which consumed most import time.

* Updated the Photon Setup Guide, indicating you need only app ID when playing with friends. For users connecting across regions, you may need to hard code a region in your app settings by using the room code and region instead of just the room code sharing in game. <!-- GOMPS-88 --> 
* Removed a duplicated `GameObject` from the MainMenu scene. <!-- GOMPS-474 -->
* Reviewed and revised code to better following quality standards. <!-- GOMPS-203, GOMPS-218, GOMPS-223 -->
* Updated the mage character base attack to better support the new enqueuing ability and handle game behaviors. Updates include:<!-- https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/pull/60 GOMPS-228 GOMPS-379 GOMPS-417 -->

  * Actions being non-blocking now allow other actions while a mage-bolt is in flight
  * Actions send in `ActionSequence` groups to better handle actions when players spam click enemies
  * Timing issues with animations, actions, and character location
  * Bolt animation for legitimate hits
  * Updated attacks not to knock rogues out of stealth <!-- GOMPS-423 -->

* Updated character attacks to not cause friendly-fire damage between players. <!-- GOMPS-299 -->
* Updated and resolved issues with 3D models including polygon count of coins and chest, artifacts where level graphics are stitched together or overlapping characters, and asset map consistency used by objects (color + normal map + emission). <!-- GOMPS-342 GOMPS-462 GOMPS-524 -->
* Merged `ConnectStatus` and `DisconnectReason` into a single `ConnectStatus`. <!-- GOMPS-470 -->
* Updated `ServerGameNetPortal` to properly handle the following:<!-- GOMPS-470 -->

  * Per-connection state on client disconnect
  * Additional errors including a full server and player ID (GUID) already playing
  * Player connection if they experience a game-level connection failure

* Updated code to allow hosts to specify a port to listen to,removing the hard-coded port. <!-- GOMPS-270 -->
* Refactored Action Bar code including the following: <!-- commits https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/commit/579c710fb64c2fc51e6b52c0483f0fe81b9d65f8-->

  * Removed the `ButtonID` from `UIHudButton`.
  * Removed hard-coded values from `HeroActionBar`.
  * Removed switch statements.
  * Completed minor code cleanup.
  * Added verification to only show skill and ability buttons for available character abilities. Empty buttons no longer load for characters. <!-- GOMPS-356 -->

* Added a call to warm up shaders when the project starts to ensure animations issues do not occur. <!-- GOMPS-367 -->
* Removed collision from objects that have a Broken (dead) state. <!-- GOMPS-461 -->
* Implemented a better cooldown solution and calculations for tracking and managing character, imp, and boss actions. <!-- GOMPS-468 PR 309-->
* Fixed the ignored health amount (HP parameter) for revived characters. The correct value correctly sets the revived character to a lower amount than maximum. <!-- GOMPS-498 GOMPS-485 PR 267-->

## Fixes

This release includes the following issue fixes:

* Fixed an issue where any player that plays the game and then returns to the Main Menu may be unable to Start or Join properly again, requiring you to restart the client. <!-- GOMPS-355 -->
* Updates and refinements in Boss Room resolved an issue that occurred in some degraded network conditions that caused a replicated entity on a client to vanish from that client, creating the effect of being assailed by an invisible enemy. <!-- GOMPS-380-->
* Fixed displayed graphical affects for casting and blocking a Bolt to correctly match the caster and target, and properly stops animations for cancelled actions across clients.  <!-- GOMPS-417 GOMPS-467 PR #223-->
* Fixed a rare exception when the Tank character uses her Shield Aura ability to intercept the Boss charge attack. <!-- GOMPS-435 -->
* Fixed an issue returning all clients to the Main Menu when the host leaves the Boss Room. <!-- GOMPS-439-->
* Green quads no longer show on impact when the Archer arrow strikes enemies. <!-- GOMPS-460 -->
* Fixed issue to correctly allow one player to receive a character when two players in the Character Select click **Ready** for the same hero at the same time. Character Select is no longer blocked.  <!-- GOMPS-390 -->
* Fixed an issue with boss collisions with a Pillar correctly applying a stun effect and shattering the pillar when using the Trample attack. <!-- PR #206 gomps-330 -->
* Fixed the lobby welcome messages to correctly list the player names, including a previous issues for P1 and P2. <!-- GOMPS-428 --> 
* On Windows, investigated and fixed issues with visible effects for character actions including mage freeze attack.<!-- GOMPS-347-->
* On Windows, fixed issue with imp spawners not respawning new imps after exploring the room. <!-- GOMPS-353-->
* Fixed an issue where the door state does not reflect the existing state when players connect late to a game, for example if other players open the door and a player joins late the door displays as closed. <!-- GOMPS-409 -->
* Removed a previous work-around for character selections when host replays a completed game. The issue was resolved, allowing players to see character selections during replay. <!-- GOMPS-444 -->
* Fixed collision wall settings, fixing an issues where the boss knock-back ability sent players through walls. <!-- GOMPS-289 -->
* Resolved an issue where any players leaving the lobby sent all players to the lobby. <!-- GOMPS-431 -->
* Fixed animations for enemies including the smoke animation for destroyed imps and the boss helmet when crying. <!-- GOMPS-500, 463 -->

## Known issues

The following issues may occur for access and games:

* An MLAPI soft sync error on cleanup between scene transitions may break the game, for example imps do not spawn and pots are intangible.  <!-- GOMPS-535, MTT-772-->
* The game can be initiated while a second player is connecting to the host in `CharSelect`. Players may join without selected characters spawning and in an unresponsive state.<!-- GOMPS-534 -->
* Sometimes after completing a match and the host starts a new match from the Victory or Loss screen, connected players may have no visible interactions to join or select characters. A work-around is implemented to not block entry into the game. <!-- GOMPS-464 GOMPS-506 still an issue -->

## Learn more

See [Getting Started with Boss Room](/docs/learn/bossroom) to install and get started with Boss Room.

To provide feedback and content on documentation, see the links at the bottom of each page.