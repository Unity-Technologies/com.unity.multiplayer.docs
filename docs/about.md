---
id: about
title: About Netcode for GameObjects
description: Learn more about the available APIs for Unity Multiplayer Networking, including Netcode for GameObjects and Transport.
---

Netcode is a mid-level networking library built for the Unity game engine to abstract networking. This allows you, the developer to focus on your game rather than low-level protocols and networking frameworks.

:::important Current Documentation Work
We are at the tail-end of a full audit on the Multiplayer doc site. This has involved many pages being rewritten, additional content, content reorganization, and more with developer reviews on each page. Most links should still work and were updated as pages have been reviewed.

However, this **About** page is one that has many link errors at the moment, and will continue to have broken links through the end of this week as the final doc PRs are commited to the live docs. Please be patient as we finish up this last bit of work this week.

Aside from the minimal article updates remaining, you will notice by the end of the week:
* A new Tools section in the top navigation bar for this growing section of content.
* Updated API references for Netcode, Transport, and the new Tools sections.
* A link crawler will ensure linking across the doc site is up-to-date.
* The documentation GitHub will be cleaned up with the GH issues that were addressed by the audit closed, and new GH issues reviewed, tagged, and addressed ASAP.
:::

<div class="table-columns-plain" >

| Getting Started | Hello World | Golden Path |
| -- | -- | -- |
| [Install Unity Netcode](migration/installation.md)<br/>[Migration from UNet to Netcode](migration/migratingtonetcode.md)<br/>[Upgrade to Unity Netcode Package](migration/migratingfrommlapi.md) | [Your First Networked Game](tutorials/helloworld/helloworldintro)<br/>[Building on "Hello World"](tutorials/helloworld/helloworldtwo) | [Foundation module](tutorials/goldenpath_series/goldenpath_foundation_module.md) <br/> [Module One](tutorials/goldenpath_series/gp_module_one.md)<br/>[Module Two](tutorials/goldenpath_series/gp_module_two.md)<br/>|

</div>

<div class="table-columns-plain" >

| Core Concepts | Debugging | Learn More |
| -- | -- | -- |
| [Networking](getting-started/connection-approval.md)<br/>[Components](components/networkmanager.md)<br/>[Objects](basics/object-spawning.md)<br/>[Messaging System](advanced-topics/messaging-system.md)<br/>[Serialization](advanced-topics/serialization/serialization-intro.md)<br/>[Scenes](basics/scene-management.md) | [Logging](basics/logging.md)<br/>[Troubleshooting](troubleshooting/troubleshooting.md)<br/>[Error Messages](troubleshooting/error-messages.md) | [References](learn/index.md)<br/>[Boss Room](learn/getting-started-boss-room.md)<br/>[Bite Size Samples](learn/bitesize-introduction.md)<br/>[Dilmer's Tutorials](learn/dilmer/dilmer-video.md)<br/>[FAQs](learn/faq.md) |

</div>


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

:::important MLAPI Previous Versions and Docs
For those looking for the MLAPI releases and documentation v. 12.x and earlier, see the following:

* [Previous MLAPI Releases](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/releases)
* [MLAPI v12.1.7 documentation](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/blob/v12.1.7/docs/_docs/)
* [MLAPI blog posts](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/v12.1.7/docs/_posts)
:::
