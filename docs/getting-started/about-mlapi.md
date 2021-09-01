---
id: about-mlapi
title: Getting Started with MLAPI
---

Unity MLAPI is a mid-level networking library built for the Unity game engine to abstract networking. This allows you, the developer to focus on your game rather than low-level protocols and networking frameworks.

After you complete **Getting Started**, use **Hello World** to test your installation, then follow the **GoldenPath** to learn common features and implementations of MLAPI. For additional hands-on learning, check out the samples, Boss Room tutorials, and community contributions (such as Dapper Dino's video series).

<div class="table-columns-plain">

| Getting Started | Hello World | Golden Path | Core Concepts | Debugging | Learn More |
| -- | -- | -- | -- | -- | -- |
| [Install Unity MLAPI](../migration/installation.md)<br/>[Migration from UNet to MLAPI](../migration/migratingtomlapi.md)<br/>[Upgrade to Unity MLAPI Package](../migration/migratingfrommlapi.md) | [Your First Networked Game](../tutorials/helloworld/helloworldintro)<br/>[Building on First Steps](../tutorials/helloworld/helloworldtwo) | [Foundation module](../tutorials/goldenpath_series/goldenpath_foundation_module.md) <br/> [Module One](../tutorials/goldenpath_series/gp_module_one.md)<br/>[Module Two](../tutorials/goldenpath_series/gp_module_two.md)<br/>| [Networking](../getting-started/connection-approval.md)<br/>[Components](../components/networkmanager.md)<br/>[Objects](../mlapi-basics/object-spawning.md)<br/>[Messaging System](../advanced-topics/messaging-system.md)<br/>[Serialization](../advanced-topics/serialization/serialization-intro.md)<br/>[Scenes](../mlapi-basics/scene-management.md) | [Logging](../mlapi-basics/logging.md)<br/>[Troublshooting](../troubleshooting/troubleshooting.md)<br/>[Error Messages](../troubleshooting/error-messages.md) | [References](../learn/index.md)<br/>[Boss Room](../learn/getting-started-boss-room.md)<br/>[Bite Size Samples](../learn/bitesize-introduction.md)<br/>[Dapper Dino Tutorials](../learn/dapper/dapper-video.md)<br/>[FAQs](../learn/faq.md) |

</div>







## Before you begin

MLAPI supports the following versions:
* Unity 2020.3, 2021.1, and 2021.2
* Mono and IL2CPP [Scripting Backends](https://docs.unity3d.com/Manual/scripting-backends.html)

MLAPI supports the following platforms:
* Windows, MacOS, and Linux
* iOS and Android
* XR platforms running on Windows, Android, and iOS operating systems
* Most [**closed platforms**](https://unity.com/platform-installation), such as consoles. Contact us for more information about specific closed platforms.

:::caution Using WebGL
Unity MLAPI does not support the WebGL platform because it does not allow access to IP Sockets.

There are third party transports provided by the community that may enable you to use MLAPI on WebGL platforms. A list of these transports are found [here](https://github.com/Unity-Technologies/multiplayer-community-contributions#transports).

Use with caution:
* You may encounter bugs and issues while using MLAPI on WebGL, and we will not prioritize fixing those issues.
* The server or host cannot be a WebGL client, but a Desktop or Mobile build.
* You may experience **increased** latency and jitter because of the TCP protocol used by WebSockets.
:::

:::unity Content Licenses
This is free under the permissive MIT [Licenses](/reference/license) by Unity and the MLAPI collaborators. MLAPI is open source with no attached costs or limitations, so you can develop features alongside Unity.
:::

:::important MLAPI Previous Versions and Docs
For those looking for the MLAPI releases and documentation v. 12.x and earlier, see the following:

* [Previous MLAPI Releases](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/releases)
* [MLAPI v12.1.7 documentation](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/blob/v12.1.7/docs/_docs/)
* [MLAPI blog posts](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/v12.1.7/docs/_posts)
:::

