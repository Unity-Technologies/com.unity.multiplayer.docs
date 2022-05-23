---
id: samples-1-2-0-pre
title: Boss Room Small Scale Co-op Sample 1.2.0-pre+
sidebar_label: Boss Room 1.2.0-pre+
description: Release notes for Boss Room Small Scale Co-op Sample v1.2.0-pre+
---

The Boss Room: Small Scale Co-op Sample v1.2.0-pre is a pre-release release for Multiplayer Samples Co-op.

It requires and supports Unity v2020.3 LTS and Netcode for GameObjects (Netcode) v1.2.0-pre. For additional information on Netcode, see the changelog and release notes for the Unity Netcode package.

| Product | Version | Status | Release Date | Supported Unity Versions |
| -- | -- | -- | -- | -- |
| Boss Room: Small Scale Co-op Sample | 1.2.0-pre | Pre-Release |  April 28, 2022 | v2020.3 LTS |

:::important
Boss Room: Small Scale Co-op Sample always requires the latest version of Unity Netcode. See [Unity Netcode](../index.md) for more information on those features, fixes, and known issues.
:::

## [1.2.0-pre] - 2022-04-28

### Changes

* Bump to pre.8 and fix compile issues [MTT-3413] (#631) --> Custom message structs now need new interfaces
* Client network transform move to samples [MTT-3406] (#629) --> You can now use Boss Room's Utilities package to import ClientNetworkTransform using this line in your manifest file     
`"com.unity.multiplayer.samples.coop": "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop.git?path=/Packages/com.unity.multiplayer.samples.coop",`
* In-game message feed [MTT-2678] [MTT-2318] (#601) --> Displays in-game events, including networked events
* Networked message channel (#605) --> To support message feed

### Dependencies

* "com.unity.netcode.gameobjects": "1.0.0-pre.8",
* "com.unity.services.authentication": "1.0.0-pre.4",
* "com.unity.multiplayer.tools": "1.0.0-pre.6",
* "com.unity.services.lobby": "1.0.0-pre.6",
* "com.unity.services.relay": "1.0.1-pre.5",
* "com.veriorpies.parrelsync": "https://github.com/VeriorPies/ParrelSync.git?path=/ParrelSync#bb3d5067e49e403d8b8ba15c036d313b4dd2c696",
* Editor is 2020.3.33f1

### Fixes

* Fixed Z Fighting of Floor Tiles Near Edge of Main Boss Room (#616)
* SceneBootstrapper detects and allows TestRunner launches (#483)
* Removed feature to set all players unready in char select when a player leaves or joins (#625)
* Removed setting disconnect reason to UserRequested on clients entering post-game (#626)
* Disallowing portait orientation for auto rotation (#627)
* Chore: removing QoS (#623) --> waiting for official release

