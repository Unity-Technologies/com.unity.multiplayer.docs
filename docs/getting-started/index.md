---
id: about-mlapi
title: About MLAPI
---

The MLAPI is a high level networking library built for the Unity game engine to abstract networking. This allows developers to focus on the game rather than low level protocols and networking frameworks. All this is provided for free under the permissive MIT Licence by Unity and the MLAPI collaborators. The MLAPI is open source with no attached costs or limitations.

The MLAPI is one of the oldest and most actively developed game networking library out there. As a direct result of this, it offers many more features than other libraries. The MLAPI's focus is to make networking simple and let you focus on what matters most for your game.

[![GitHub Release](https://img.shields.io/github/release/MidLevel/MLAPI.svg?logo=github)](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/releases/latest)
[![NuGet Release](https://img.shields.io/nuget/v/MLAPI.svg?logo=nuget)](https://www.nuget.org/packages/MLAPI/)
[![Github All Releases](https://img.shields.io/github/downloads/MidLevel/MLAPI/total.svg?logo=github&color=informational)](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/releases)
[![Forums](https://img.shields.io/badge/unity--forums-multiplayer-blue)](https://forum.unity.com/forums/multiplayer.26/)
[![Discord](https://img.shields.io/discord/449263083769036810.svg?label=discord&logo=discord&color=informational)](https://discord.gg/FM8SE9E)

## Features

This table compares MLAPI and the deprecated UNET library features.

<div class="table-rows">

| Feature | MLAPI | HLAPI |
| -- | -- | -- |
| Host Support | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Spawn Management | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Messaging System | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Custom Transport | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Multiplex Transport | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Scene Management | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Behaviour Based Messaging | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Network Time | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Send Channels | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Custom RPC Parameter Types | <i class="fp-check"></i> | <i class="fp-x"></i> |
| RPC Overloads | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Incremental Update Loop | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Custom Messaging System (Unnamed) | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Custom Messages (Named) | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Per Client RPC | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Bulk Client RPC | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Connection Approval | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Message Authentication | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Custom Tickrate | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Synced / Networked Vars | <i class="fp-check"></i> | <i class="fp-check"></i> |
| Custom Sync Structures | <i class="fp-check"></i> | <i class="fp-x"></i> |
| SyncedList | <i class="fp-check"></i> | <i class="fp-check"></i> |
| SyncedSet | <i class="fp-check"></i> | <i class="fp-x"></i> |
| SyncedDictionary | <i class="fp-check"></i> | <i class="fp-x"></i> |
| SyncedEvent | <i class="fp-x"></i> | <i class="fp-check"></i> |
| Unlimited Networked Vars | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Duplex Networked Vars | <i class="fp-check"></i> | <i class="fp-x"></i> |
| NetworkedVar SyncToOwner | <i class="fp-check"></i> | <i class="fp-x"></i> |
| NetworkedVar Custom Write Targets | <i class="fp-check"></i> | <i class="fp-x"></i> |
| NetworkedVar Custom Read Targets | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Multi-project Support | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Built-in Lag Compensation | <i class="fp-check"></i> | <i class="fp-x"></i> |
| BitStream | <i class="fp-check"></i> | <i class="fp-x"></i> |
| BitWriter/BitReader (or similar packer) | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Network Profiler | <i class="fp-check"></i> | <i class="fp-x"></i> |
| Relay | <i class="fp-check"></i> |  <i class="fp-check"></i>|
| Pooled Memory Management (Internal) | <i class="fp-check"></i> | <i class="fp-x"></i> |
| P2P | <i class="fp-x"></i> | <i class="fp-x"></i> |
| Area Of Interest | <i class="fp-check"></i> | <i class="fp-check"></i> |
</div>

## Licence
Documentation on the wiki is licenced under the following licence.

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to http://unlicense.org.
