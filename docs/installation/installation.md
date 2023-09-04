---
id: install
title: Install Netcode for GameObjects
description: How to install Unity Netcode for GameObjects (NGO). 
---

You can use this guide to help you set up Netcode for GameObjects (NGO) in your Unity project.

##  Prerequisites

Before you begin installing Netcode, make sure you have the following:

- An active Unity account with a valid license.
- A supported version of Unity. Check [Netcode's requirements](#netcode-installation-requirements) for the specific Unity version details.
- An existing Unity project. If you're new to Unity, you can refer to the [Get started with NGO](../tutorials/get-started-with-ngo.md) section for guidance.

### Compatibility 

- Unity Editor version 2021.3 or later
- Mono and IL2CPP [Scripting Backends](https://docs.unity3d.com/Manual/scripting-backends.html)

### Supported platforms

- Windows, MacOS, and Linux
- iOS and Android
- XR platforms on Windows, Android, and iOS
- Most [**closed platforms**](https://unity.com/platform-installation), such as consoles. Contact the [NGO development team](https://discord.com/channels/449263083769036810/563033158480691211) for more information about specific closed platforms.
- WebGL (requires NGO 1.2.0+ and UTP 2.0.0+)

:::note
When working with closed platforms like consoles (PlayStation, Xbox, Nintendo Switch), there may be specific policies and considerations. Refer to your console's documentation for more information.
:::

## Install NGO with the Package Manager

1. From the Unity Editor, select **Window** > **Package Manager**.
2. From the Package Manager, click **Add** ![add symbol](/img/add.png) > **Add package by name…**
3. Type (or copy and paste) `com.unity.netcode.gameobjects` into the package name field, then select **Add**.

### For Unity Editor version 2020.3 LTS or earlier

1. From the Unity Editor, select **Window** > **Package Manager**.
2. From the Package Manager, click **Add** ![add symbol](/img/add.png) > **Add package by git URL…**
3. Type (or copy and paste) `https://github.com/Unity-Technologies/com.unity.netcode.gameobjects` into the git URL field, then select **Add**.

## Next Steps

After installing Netcode for GameObjects(NGO), see the following content to continue your journey:

* Use the [Get started with NGO tutorial](../tutorials/get-started-with-ngo.md) to create a project, test your Netcode install, and learn how to use the basic features of Netcode for GameObjects.
* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../learn/bitesize/bitesize-clientdriven.md)
