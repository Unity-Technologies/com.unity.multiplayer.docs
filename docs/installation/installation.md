---
id: install
title: Install Netcode for GameObjects
description: How to install Unity Netcode for GameObjects (NGO). 
---

# Installation

Use this guide to install Unity Netcode for GameObjects (NGO).

## Prerequisites

Before installing Netcode, you should ensure you have:

* An active Unity account with a valid license.
* A Netcode-supported installation of Unity. See [Netcode's requirements](#netcode-installation-requirements) for full details.
* An existing Unity project. If you don't have a project yet, see [Get started with NGO](../tutorials/get-started-with-ngo.md).

## Netcode Installation Requirements

Netcode supports the following Unity versions:


* Unity Editor version 2021.3 or later
* Mono and IL2CPP [Scripting Backends](https://docs.unity3d.com/Manual/scripting-backends.html)


Netcode supports the following platforms:

* Windows, MacOS, and Linux
* iOS and Android
* XR platforms running on Windows, Android, and iOS operating systems
* Most [**closed platforms**](https://unity.com/platform-installation), such as consoles. Contact the [NGO development team](https://discord.com/channels/449263083769036810/563033158480691211) for more information about specific closed platforms.
  * When working with consoles (such as PlayStation, Xbox, or Nintendo Switch), there might be Netcode-specific policies you should be aware of while testing and before launching your game live. Refer to the console's internal documentation for more information. This content is typically protected by NDA.
* WebGL (requires NGO 1.2.0+ and UTP 2.0.0+). **Note**: Although NGO 1.2.0 introduces WebGL support, there's a bug in NGO 1.2.0 that impacts WebGL compatibility, so it's recommended to use NGO 1.3.0+.

## Installing with the Package Manager

Install the Netcode for GameObjects package:

1. From the Unity Editor, select **Window** > **Package Manager**.
2. From the Package Manager, select **Add (+)** > **Add package by name…**
3. Type (or copy and paste) `com.unity.netcode.gameobjects` into the package name field, then select **Add**.

:::note

If you're using Unity Editor version 2020.3 LTS or earlier, there's no option to add a package by name. In this case, use **Add package from git URL** instead:

1. From the Unity Editor, select **Window** > **Package Manager**.
2. From the Package Manager, select **Add (+)** > **Add package by git URL…**
3. Type (or copy and paste) `https://github.com/Unity-Technologies/com.unity.netcode.gameobjects` into the git URL field, then select **Add**.

:::

## Next Steps

See the following content to continue your journey using Netcode:

* Use the [Get started with NGO tutorial](../tutorials/get-started-with-ngo.md) to create a project, test your Netcode install, and learn how to use the basic features of Netcode for GameObjects.
* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../learn/bitesize/bitesize-clientdriven.md)
