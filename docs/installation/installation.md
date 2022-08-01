---
id: install
title: Install Netcode for GameObjects
description: How to install Unity Netcode for GameObjects (Netcode). 
---

Use this guide to install Unity Netcode for GameObjects (Netcode) 1.0.0 and later.

## Prerequisites

Before installing Netcode, you should ensure you have:
  * An active Unity account with a valid license.
  * A Netcode-supported installation of Unity. See [Netcode's requirements](#netcode-installation-requirements) for full details.
  * An existing Unity project. If you do not have a project yet, we recommend using the [Hello World](../tutorials/helloworld.md) example to test the Netcode installation process and learn some of the basic features of Netcode.

### Netcode Installation Requirements

Netcode supports the following Unity versions:
* Unity 2020.3, 2021.1, 2021.2, and 2021.3 LTS <!--Confirm versions-->
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

## Installing with the Package Manager

1. Open your **Unity Hub** and select the **Project** you are presently working on or create a **New Project**.
1. From the menu bar, navigate to **Window** > **Package Manager**.
1. Click the plus sign ![Add](/img/add.png) in the **Package Manager** status bar and select **Add package by name..**.

 ![Package Installed](/img/install/addbyname.png)

1. Copy and paste the following in the pop-up window:
```
com.unity.netcode.gameobjects
```

1. Click **Add**. The package installs and appears as **Netcode for GameObjects** under **Packages** in the **Package Manager** window.

## Next Steps

See the following content to continue your journey using Netcode:

* Use the [Hello World project](../tutorials/helloworld.md) to create a project, test your Netcode install, and learn basic features of Netcode for GameObjects.
* Build on the Hello World project to continue learning about different features of Netcode with the [Golden Path series](../tutorials/goldenpath_series/gp_intro.md).
* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../learn/bitesize/bitesize-clientdriven.md)