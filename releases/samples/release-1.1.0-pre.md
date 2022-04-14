---
id: samples-1-1-0-pre
title: Boss Room Small Scale Co-op Sample 1.1.0-pre+
sidebar_label: Boss Room 1.1.0-pre+
description: Release notes for Boss Room Small Scale Co-op Sample v1.1.0-pre+
---

The Boss Room: Small Scale Co-op Sample v1.1.0-pre is a pre-release release for Multiplayer Samples Co-op.

It requires and supports Unity v2020.3 LTS and Netcode for GameObjects (Netcode) v1.1.0-pre. For additional information on Netcode, see the changelog and release notes for the Unity Netcode package.

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Boss Room: Small Scale Co-op Sample | 1.1.0-pre | Pre-Release |  April 7, 2022 | v2020.3 LTS |

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Unity Netcode. See [Unity Netcode](../index.md) for more information on those features, fixes, and known issues.
:::

## [1.1.1-pre] - 2022-04-13
### Changes
* Adding relay auto region selection using the QoS package #617 (This should reduce ping times for people not in US-Central)
* Loading screen (#427)
* Added popup that tells users to set up project id if it's not set up [MTT-3265][MTT-3237] (#607)
* Message to clients when host ends game session intentionally [MTT-3202] (#594)

### Dependencies
* "com.unity.netcode.gameobjects": "1.0.0-pre.7",
* "com.unity.services.authentication": "1.0.0-pre.4",
* "com.unity.multiplayer.tools": "1.0.0-pre.6",
* "com.unity.services.lobby": "1.0.0-pre.6",
* "com.unity.services.relay": "1.0.1-pre.5",
* "com.veriorpies.parrelsync": "https://github.com/VeriorPies/ParrelSync.git?path=/ParrelSync#bb3d5067e49e403d8b8ba15c036d313b4dd2c696",
* Editor is 2020.3.33f1

### Fixes:
* Alpha4 input press opens emote drawer (#599)
* Add Unity Gaming Services info to readmes [MTT-3263] (#608)
* General Project Clean Up, Reduction of Import Times, Minor Material Bug MTT-2737] [MTT-3116] (#606)
* Only server finds navigation object, asserts refactored [MTT-3248] (#602)
* Relogin when auth token is stale [MTT-3253] (#604)
* Scene loading issue when shutting down [MTT-2828] (#610)
* Silencing errors that are not errors [MTT-2930] [MTT-3249] (#597)
* Chore: bump to latest tools version, so we get the awesome new perf improvements (#614)
* Chore: bumping package version and cleaning up dependencies for boss room package (#600)
* Chore: upgrade to 2020.3.33f1 (#615)

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

## Learn more

See [Getting Started with Boss Room](../../netcode/current/learn/bossroom) to install and get started with Boss Room.