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

## [1.1.0-pre] - 2022-04-07
### Changes
* Adding Lobby service integration and removing Photon (#480 (#567) (#486) (#547) (#585) (#525) (#566) (#511) (#494) (#506) (#510) (#526) (#595) (#551) (#556) (#515) (#553) (#544) (#522) (#524) (#539) (#565) (#550) (#592) (#505) (#518) (#596))
* Adding separate IP window button after lobby integration (#538) (#502)
* Bumping NGO to pre.7 and removing now redundant UTP version [MTT-3235] (#598)
* Flag to prevent dev and release builds to connect (#482)
* feat: replace guid with auth playerid for session management (#488)
* feat: use DTLS for relay (#485)
* Adding new cheats (#446): heal player (#448), kill enemies (#447), portals toggle (#452), speedhack toggle (#449), teleport mode (#450), toggle door (#451)
* Adding transport RTT to UI stats and using exponential moving average for calculations (#528)
* Boss and run VFX Optimizations (#514)
* Made a shared menu camera prefab for all of the menu scenes and swapped out the old cameras in the scenes for it (#473)
* feat: player architecture ARCHITECTURE.md addition (#476)

### Dependencies
* "com.unity.netcode.gameobjects": "1.0.0-pre.7",
* "com.unity.services.authentication": "1.0.0-pre.4",
* "com.unity.multiplayer.tools": "1.0.0-pre.2",
* "com.unity.services.lobby": "1.0.0-pre.6",
* "com.unity.services.relay": "1.0.1-pre.5",
* "com.veriorpies.parrelsync": "https://github.com/VeriorPies/ParrelSync.git?path=/ParrelSync#bb3d5067e49e403d8b8ba15c036d313b4dd2c696",
* Editor is 2020.3.27f1

### Fixes:
* Better flows for authentication, generate unique Profile ID on clone project (#577)
* Fixing imps self-destroying on clients when late-joining with multiple additive scenes loaded (#574)
* Fixing send queue error (#496)
* Fixing connecting while starting game (#481)
* Dead player not dead when reconnecting [MTT-2965] (#583)
* Null refs when quitting (#563) (#572)
* Better environment layer pathing [MTT-2412], [MTT-2830], [MTT-1990] (#576)
* Simpler quitting flow (#579)
* Adjusted layer collision matrix, removing collision with column pieces (#541)
* Arrow not sending a clientrpc when despawned, vfx get reset on spawn/despawn (#557) (#560)
* Client writing to netvar error (#468)
* Darker Eyebrows for Player Characters (#555)
* Decoupling SessionManager from NetworkManager [MTT-2603] (#581)
* Filled in some holes in the floor (#527)
* Leavebeforequit coroutine not starting (#589)
* Mage FX graphics not offset (#571) (#575)
* NetworkAnimator being called on clients (#512) (#529)
* NREs when trying to quit (#516) (#531)
* OnNetworkDespawn added to ServerProjectileLogic to prevent unspawned RPCs (#593)
* Refactor of click target feedback (#569)
* Same player number for multiple players in second playthrough (#490) (#498)
* Setting to 120hz refresh rate so it doesn't influence RTT too much, but still shaves off about 1/3 of CPU usage when running 2 builds on the same machine (#573)
* Simplified Floor Tiles (#507)
* Small CPU performance improvements (#590)
* Switched out the shadow mesh from a plane to a quad :) also turned off collision and shadow casting! (#586)
* Type and rtt text is now TextMeshPro and sized properly (#559) (#561)
* Unready button not clickable on wide screens (#552)
* Updating only navmesh generated (#542) (#546)
* Username changing before game (#499) (#530)
* VFX Optimization Pass (#584)
* Blocking pass (#578)
* React animation on trample attack while fainted (#478)

### Known issues:
* Dead imps spawn as if still alive for clients who join late
* Wrong anticipation animations played on client
* When reconnecting, the player has a big teleport to it's old position
* Proper-Fix: Retrieve Lobby list hit the rate limit. Will try again soon... error spam
* improve auth flow, it's not clear at the moment how to run two players locally
* Disconnecting wifi client side couldn’t reconnect
* "Service Error - Cannot resolve destination host" when attempting to reconnect
* Received "No client guid found mapped to the given client ID" when leaving game
* Remove workaround for wait to disconnect
* NotServerException: Destroy a spawned NetworkObject on a non-host client is not valid. Call Destroy or Despawn on the server/host instead - thrown when a host joins Lobby as a client
* When start host fails, we shouldn't go to char select screen
* heal not consistent, sometimes will not see health bar move
* additive scene loading produces some lag in editor
* Bringing up cheats screen on touchscreens should not invoke any game-side actions
* Idling in Lobby Join window causes a curl error from Lobby Services
* PlayerGraphics_Rogue_Boy(Clone) doesn't have enough AudioSources to loop all desired sound effects. (Have 2, need at least 1 more) spams console
* Android UI/Click issues
* Fix environment material on lowest setting for android
* [Connection] UI feedback on hosting and joining
* Emote drawer is not opened when 4 is pressed on keyboard
* Controls modal does not scale with the window
* Walk is triggered when trying to hit emotes on mobile
* Late join clients have green names

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

See [Getting Started with Boss Room](/docs/learn/bossroom) to install and get started with Boss Room.