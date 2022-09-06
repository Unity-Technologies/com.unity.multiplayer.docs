---
id: samples-1-0-0-pre
title: Boss Room Small Scale Co-op Sample 1.0.0-pre+
sidebar_label: Boss Room 1.0.0-pre+
description: Release notes for Boss Room Small Scale Co-op Sample v1.0.0-pre.
---

The Boss Room: Small Scale Co-op Sample v1.0.0-pre is a pre-release release for Multiplayer Samples Co-op.

It requires and supports Unity v2020.3 LTS and Netcode for GameObjects (Netcode) v1.0.0-pre. For additional information on Netcode, see the changelog and release notes for the Unity Netcode package.

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Boss Room: Small Scale Co-op Sample | 1.0.0-pre | Pre-Release | October 21, 2021 | v2020.3 LTS |

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Unity Netcode. See [Unity Netcode](../index.md) for more information on those features, fixes, and known issues.
:::

## [1.0.2-pre] - 2022-02-09

### Changes
* New session manager to allow reconnection (#361)
* Adding utilities asmdef, accessible as reusable Unity Package (#404)
* Min spec Android setup for Boss Room (#429)
* Additive scene loading (#425)
* Cancel during join or host (#428)
* Disconnect/quit button (#432)
* Boss Room actions are all now faster with game design tweaks (#436)
* Update to NGO 1.0.0-pre.5 (#456)
* Adding on screen warning when using simulated latency (#412)
* Port to URP (#371)
* Button to copy room name to clipboard (#431)
* Character run smoke particle optimization (#426)
* Cheat window (#444)
* Player hierarchy QoL updates, anim event listener added for player anim events (#411)

### Fixes
* Added transition between “Action - Boss Trample” and “(Trample Stop)” (#437)
* Changed ready button text to UNREADY when player is locked in (#413)
* Arrows despawning error while switching scenes (#406)
* Arrows not spawning on second play-through on client side (#394)
* Cheat window toggling on mobile
* Hitpoint depletion inconsistency with clamped values (#454)
* Host name not showing (#442)
* Improving UI during connection flow (#415)
* Join code not displayed for clients using Unity Relay (#433)
* NGO-pre.3 asset fixes for NetworkAnimator (#400)
* Pathfinding issues with doors (#407)
* Re-enabling positional smoothing on graphics GameObject (#417)
* Removing workaround for NGO issue 745 (#419)
* Replace MLAPI references with NGO (#410)
* Smooth host movement cleanup (#439)
* Fixed a bug involving the NetworkObjectPool’s GlobalObjectIdHash (#405)
* Fixed missing Boss Room title in the main menu screen for Mac builds (same fix as before, but this time for the URP version of the main menu) (#403)
* Visual Adjustments for Boss Room (#408)
* Invincibility counter reset on cancel, animator invincibility parameter reset (#409)
* Reduced default master volume value (#445)
* Removed room name textbox when using IP-based connection (#418)
* Removed the !IsConnectedClient condition for handling client disconnect (#435)
* Replaced instance of PostGameState prefab inside PostGame scene to fix malformed GlobalObjectIdHash (#443)
* Updating Toon Shader to Shader Graph (#414)
* Fix/randomly rotate breakable pots #472
* Deleted an overlapping object #471
* Fix: Background missing in Post Game scene #470
* Fixed a broken material ref on boss pillars #469

### Chore
* Updated Relay to latest (#474)
* Updated IET package version to 2.1.1 (#422)
* Bumped Unity LTS version (#396)
* Updating photon to latest (#402)
* Updated char select background prefab (#416)

### Known Issues
* NetworkTransform overflow exception
* Successive game sessions may cause a duplication of in-scene placed NetworkObjects
* Photon get increasing RTT when too much bandwidth
* When joining w/ photon relay, text should display “”Join code”" and not “”IP host”"
* Client needs a reboot to join a match after a previous game using photon
* Have better error message when getting rate limited by Relay
* Possible to get phantom players in Boss Room, we were 6 players, but got 8 players in the char select (hard to repro)
* In-scene placed imps not spawning on clients when late-joining with multiple additive scenes loaded
* Additive scene loading produces a CPU spike
* Rare client can’t write to NetVar error with additive scene loading and late join
* High latency (1 sec RTT) will produce null ref after char select
* When start host fails, we shouldn’t go to char select screen
* Dead imps spawn as if still alive for clients who join late
* When reconnecting, the player has a big teleport to it’s old position
* Rogue can teleport to top of column
* Bringing up cheats screen on touchscreens should not invoke any game-side actions
* Join with Unity Relay with empty join code throws exception
* heal not consistent, sometimes will not see health bar move
* Null ref in UnityEngine.Camera.WorldToScreenPoint (and other?)
* Wrong anticipation animations played on client
* With high lag, camera jitter was observed when rotating
* While running, character plays hit react animation but doesn’t get HP decrease
* Game can be initiated while a second player is connecting to host in CharSelect
* Rogue looks like it’s still dashing after teleport
* Top of door shouldn’t be clickable/traversable

## [1.0.1-pre] - 2021-11-18

### Changes

* Updated Photon version 
* Ported the game to URP 
* Updated to Unity 2020.3.21f1 
* Updated Boss Room banner image 
* Small update to platform support on the readme 
* Replace MLAPI references with NGO 
* Adding utilities asmdef. 
* Visual improvements:
    * Touched up the character select background prefab 
    * A matte around the border of the map to block the camera from seeing lava, edges of meshes, particles, etc
    * Lighting changes and optimizations
    * Reduced number of realtime lights to 4 (from 27)
    * Baked 3x1024 and 1x128 lightmaps (about 4MB), these are for area lights to make the lava glow more convincing
    * Added little blob shadows to characters (a plane with a transparent soft black circle attached to the physics object in the character prefab)
    * Changed the lights for the enemy spawners from point lights to spot lights (still not shadow casting)
    * Rotated all of the little pots to be in different directions so they don't look so copy-pasted
    * Tightened radii of the torch lights and reduced the amount of realtime lights for each torch from 2 to 1
    * Also added a couple of extra torches
    * Upped the contrast and adjusted the ambient lighting of the scene to be a more saturated blue

### Fixes

* Fixed pathfinding issues with doors 
* Invincibility counter reset on cancel, animator invincibility parameter reset 
* Changed ready button text to UNREADY when player is locked in 
* Fixed arrows despawning error while switching scenes 
* Fixed a bug involving the NetworkObjectPool's GlobalObjectIdHash
* Fixed missing Boss Room title in the main menu screen for mac builds (same fix as before, but this time for the URP version of the main menu)
* NGO-pre.3 asset fixes for NetworkAnimator
* Fixed arrows not spawning on second playthrough on client side

[1.0.0-pre] - 2021-10-21

## New features and changes

This release includes the following new features:

* Player persistence hierarchical modifications to Netcode's Player Prefab
* Radio button introduced for main menu UX improvements (default is still IP)
* Archer's base attack & charged shot 1-3 replicated via NetworkTransform
* NetworkTransform handles players' movement syncing
* Adding ParrelSync and updating third party notice.md
* NetworkAnimator added to boss door & floor switch with server-authority
* Integrating Unity Transport and Relay into Boss Room
* Updated image in the UnityLogo prefab with the new Unity logo
* NetworkObject pool (arrows are pooled)
* Server-authoritative character NetworkAnimator

And the following changes:

* Collider and Layer cleanup & optimizations
* Photon Transport send queue batch size incremented to 8192
* OnNetworkSpawn() refactoring, player prefab removed from NetworkManager prefab list
* Netcode rebranding
* Added link to bitesize samples
* Update compatible Unity version in Readme
* Renaming connection methods in main menu
* Updated Animations to use an additional anticipation animation, to properly work with NetworkAnimator
* Updated actions to latest NetworkAnimator APIs

## Fixes

This release includes the following fixes:

* A Netcode soft sync error on cleanup between scene transitions previously broke the game. For example imps did not spawn and pots were intangible.
* Sometimes after completing a match and the host starts a new match from the Victory or Loss screen, connected players had no visible interactions to join or select characters.
* Sometimes the client may have been disconnected from Photon which caused a timeout and PhotonRealtimeTransport to be in a bad state after the shutdown. An exception developed that fired every frame.

## Known issues
* The game can be initiated while a second player is connecting to the host in CharSelect. Players may join without selected characters spawning and in an unresponsive state.
* The game may not transition completely into the game scene past the character select screen on lower-end Android devices.
* This version currently includes a patched NetworkAnimator. This will be reverted back once this patch goes live in Netcode for GameObjects

## Learn more

See [Getting Started with Boss Room](../../netcode/current/learn/bossroom/bossroom) to install and get started with Boss Room.