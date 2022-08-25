---
id: about
title: About Netcode for GameObjects
description: Learn more about the available APIs for Unity Multiplayer Networking, including Netcode for GameObjects and Transport.
---

Netcode for GameObjects (Netcode) is a high-level networking library built for Unity for you to abstract networking logic. It enables you to send GameObjects and world data across a networking session to multiplayer players at once. With Netcode, you can focus on building your game instead of low-level protocols and networking frameworks.

To learn more about Netcode for GameObjects functionality and capabilities, explore the content below:

<div class="table-columns-plain" >

| Getting Started | Hello World and Golden Paths | Education and Samples |
| -- | -- | -- |
| [Install Unity Netcode](installation/installation.md)<br/>[Migration from UNet to Netcode](installation/migratingfromUNet.md)<br/>[Upgrade to Unity Netcode Package](installation/migratingfrommlapi.md) | [Your First Networked Game](tutorials/helloworld.md)<br/>[Module One](tutorials/goldenpath_series/gp_module_one.md)<br/>[Module Two](tutorials/goldenpath_series/gp_module_two.md)<br/>| [Boss Room](learn/bossroom/getting-started-boss-room.md)<br/>[Bite Size Samples](learn/bitesize/bitesize-introduction.md)<br/>[Dilmer's Tutorials](learn/dilmer/dilmer-video.md) |

</div>

<div class="table-columns-plain" >

| Core Concepts | Debugging | Terminology and FAQs |
| -- | -- | -- |
| [Networking](basics/connection-approval.md)<br/>[Components](components/networkmanager.md)<br/>[Objects](basics/object-spawning.md)<br/>[Messaging System](advanced-topics/messaging-system.md)<br/>[Serialization](advanced-topics/serialization/serialization-intro.md)<br/>[Scenes](basics/scenemanagement/scene-management-overview.md) | [Logging](basics/logging.md)<br/>[Troubleshooting](troubleshooting/troubleshooting.md)<br/>[Error Messages](troubleshooting/error-messages.md) | [High Level Terminology](reference/glossary/high-level-terminology.md)<br/>[Multiplayer Game Architecture](learn/multiplayer_game_arch_intro.md)<br/>[FAQs](learn/faq.md) |

</div>

Don't forget to check out our [Release Notes](https://docs-multiplayer.unity3d.com/releases/introduction) and [APIs](api/introduction.md)!

## Before you begin

Netcode supports the following versions:
* Unity 2020.3, 2021.1, 2021.2, and 2021.3
* Mono and IL2CPP [Scripting Backends](https://docs.unity3d.com/Manual/scripting-backends.html)

Netcode supports the following platforms:
* Windows, MacOS, and Linux
* iOS and Android
* XR platforms running on Windows, Android, and iOS operating systems
* Most [**closed platforms**](https://unity.com/platform-installation), such as consoles. Contact us for more information about specific closed platforms.
  * When working with consoles (such as PlayStation, Xbox, or Nintendo Switch), there may be Netcode-specific policies you should be aware of while testing and before launching your game live. Refer to the console's internal documentation for more information. This content is typically protected by NDA.

:::caution Using WebGL
Netcode does not support the WebGL platform because it does not allow access to IP Sockets.

There are third party transports provided by the community that may enable you to use Netcode on WebGL platforms. A list of these transports are found [here](https://github.com/Unity-Technologies/multiplayer-community-contributions#transports).

Use with caution:
* You may encounter bugs and issues while using Netcode on WebGL, and we will not prioritize fixing those issues.
* The server or host cannot be a WebGL client, but a Desktop or Mobile build.
* You may experience **increased** latency and jitter because of the TCP protocol used by WebSockets.
:::

:::unity Content Licenses
This is free under the permissive MIT [Licenses](/reference/license) by Unity and the Netcode collaborators. Netcode is open source with no attached costs or limitations, so you can develop features alongside Unity.
:::
