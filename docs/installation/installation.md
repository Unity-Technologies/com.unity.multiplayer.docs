---
id: install
title: Install Netcode for GameObjects
description: How to install Unity Netcode for GameObjects (NGO). 
---

# 1. Installation

Welcome to the installation guide for Unity Netcode for GameObjects (NGO). This guide will help you set up Netcode in your Unity project and get started with networking your game objects.

##  **Prerequisites**

Before you begin installing Netcode, make sure you have the following:

1. An active Unity account with a valid license.
2. A supported version of Unity. Check [Netcode's requirements](#netcode-installation-requirements)  for the specific Unity version details.
3. An existing Unity project. If you're new to Unity, you can refer to the [Get started with NGO](../tutorials/get-started-with-ngo.md) section for guidance.

## Netcode Installation Requirements

Netcode supports the following Unity versions:

* Unity Editor version 2021.3 or later
* Mono and IL2CPP 


## **Netcode Installation Requirements**

Netcode is compatible with the following:

### **Unity Versions**

- Unity Editor version 2021.3 or later
**[Download Unity Editor](https://unity.com/releases/editor/archive)**

### **Scripting Backends**

- Mono and IL2CPP [Scripting Backends](https://docs.unity3d.com/Manual/scripting-backends.html)
<img src="https://github.com/Unity-Technologies/com.unity.multiplayer.docs/assets/84278213/cd51ad69-ad43-4ce7-b1c2-3c46510dd647" alt="Backends Image" width="500" height="300">

### **Supported Platforms**

- Windows, MacOS, and Linux
- iOS and Android
- XR platforms on Windows, Android, and iOS
- * Most [**closed platforms**](https://unity.com/platform-installation), such as consoles. Contact the [NGO development team](https://discord.com/channels/449263083769036810/563033158480691211) for more information about specific closed platforms.
- WebGL (requires NGO 1.2.0+ and UTP 2.0.0+)

**Note**: When working with closed platforms like consoles (PlayStation, Xbox, Nintendo Switch), there may be specific policies and considerations. Refer to your console's documentation for more information.


## **Installation Steps with the Package Manager**

### **1. Installing via Unity Package Manager**

1. Open Unity Editor.
2. Go to **`Window > Package Manager`**.
3. Click on the **`+`** button and select **`Add package by name...`**.
4. Enter **`com.unity.netcode.gameobjects`** and click **`Add`**.

**Note**: If you are using Unity Editor version 2020.3 LTS or earlier, follow these steps instead:

1. Open Unity Editor.
2. Go to **`Window > Package Manager`**.
3. Click on the **`+`** button and select **`Add package by git URL...`**.
4. Enter **`https://github.com/Unity-Technologies/com.unity.netcode.gameobjects`** and click **`Add`**.


:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



# 2. **Next Steps**

After installing Netcode, you're ready to dive into networking your game objects:

* Use the [Get started with NGO tutorial](../tutorials/get-started-with-ngo.md) to create a project, test your Netcode install, and learn how to use the basic features of Netcode for GameObjects.
* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../learn/bitesize/bitesize-clientdriven.md)
