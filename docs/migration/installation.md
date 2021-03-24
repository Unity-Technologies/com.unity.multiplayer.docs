---
id: install
title: Install MLAPI
---

Multiple methods are available to install the MLAPI package.

To install MLAPI, use the Unity Package Manager passing a git URL to the MLAPI release:

1. Open the Unity Package Manager by navigating to **Window** > **Package Manager** on Unity’s main menu.
1. Click ![Add](/img/add.png) in the status bar.

  You have the following options:

   - Add package from disk...
   - Add package from tarball...
   - Add package from git URL...

1. Select **Add package from git URL...**
1. Enter the Git URL to the MLAPI release package. For example, for version 0.1.0, use this link:


  ```html
  https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi.git?path=/com.unity.multiplayer.mlapi#0.1.0
  ```

1. Click **Add**.

   The following example walks through the Package Manager. Provide the correct release branch URL.
    ![installing MLAPI from Git URL](/img/installingmlapiurl.gif)

You have now installed MLAPI.

## Next Steps

See the following content to continue your journey using MLAPI:

* [Migrating From UNet to MLAPI](migratingtomlapi.md) for UNet users
* [Updating to the Unity Package](migratingfrommlapi.md) for migrating from previous MLAPI versions to Unity MLAPI
* [Your First Networked Game "Hello World"](../tutorials/helloworldintro.md) to get started from install to project creation
