---
id: install
title: Install MLAPI
description: Learn how to install the MLAPI package on Unity, including instructions for 2019.4+, 2020.x, and 2021.x. The package installs as MLAPI Networking Library.
---

To install the MLAPI Networking Library package, you can use a variety of methods. The following instructions explain how to install on Unity 2021.x, 2020.x, and 2019.4+.

## Prerequisites

Each of these instructions assume that you already have:
  * Git installed on your PC. If you don't already have it, download [Git](https://git-scm.com/) and restart your system. A full restart is required to update Git or you may receive an error adding packages.
  * An active Unity account with a valid license.
  * A current installation of Unity.
  * An existing Unity project. If you haven't created a project yet, we recommend using the [Hello World](../tutorials/helloworld/helloworldintro.md)  example to begin.

## Installation

To install MLAPI on Unity 2021.x, 2020.x, or 2019.4+, use the **Unity Package Manager** and add the package by name:

1. Open your **Unity Hub** and select the **Project** you are presently working on.
1. From the menu bar, navigate to **Window** > **Package Manager**.
1. Click the plus sign (![Add](/img/add.png)) in the **Package Manager** status bar and select **Add pack from git URL...**.
1. Copy and paste the following Git URL to the MLAPI release package in the pop-up window:
```
https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi.git?path=/com.unity.multiplayer.mlapi#release/0.1.0
```

:::info How to Copy
We recommend that you use the **Copy** function in our code blocks to reduce errors when copying and pasting content. Hover over the block and select the **Copy** button that appears in the upper-right corner of the code block.
:::
1. Click **Add**. The package installs and shows MLAPI Networking Library 0.1.0 under **Other** in the **Package Manager**.

## Next Steps

See the following content to continue your journey using MLAPI:

* [Migrating From UNet to MLAPI](migratingtomlapi.md) for UNet users
* [Updating to the Unity Package](migratingfrommlapi.md) for migrating from previous MLAPI versions to Unity MLAPI
* [Building Golden Path](../tutorials/goldenpath_series/mlapi_starting-out.md) to get started from install to project creation
* [Your First Networked Game "Hello World"](../tutorials/helloworld/helloworldintro.md) to get started from install to project creation

## Troubleshooting

You may come across different errors when installing MLAPI. The following troubleshooting tips should help you with the most common issues.

### Preview Packages
To include preview packages in the Package Manager, select the ![Gear Icon](/img/gear.png) then Advanced Project Settings. Select the **Enable Preview Packages** option and approve the message that displays.

![Enable Preview Packages](/img/install/install-preview-pkg.png)

### Errors with incorrect package loading

If you receive a different package than Unity MLAPI when adding the URL to Unity Hub, you may have not correctly copied the GitHub URL. 

Hover over the URL to copy, click the **Copy** function in the code block, and use this when adding the package from a Git URL in Unity Hub.

### Errors adding package

MacOS users may receive the following errors:

* `Cannot perform upm operation: Unable to add package... Error when executing git command. xcrun: error: invalid active developer path`
* `Error adding package...`

These are common errors for MacOS users that have not installed or updated Xcode or Xcode developer tools. You may need to upgrade your Xcode installation. In a terminal, use this command: `xcode-select --install`.

If you newly installed or updated Git, you may also need to restart your system. Restarting Unity may not be enough if you added Git and could receive a package loading error.

### Errors finding Git installation

If you receive an OS or Unity error trying to locate Git after updating or installing Git, you need to fully restart your computer. Restarting only Unity may not fully update system information to correctly locate the install.

### VPN or Proxy Errors

If you use VPN or proxy software from international locations, you may encounter access issues. Use the registry option for installing MLAPI. Also consider turning off your VPN service or selecting a different location.

### Package Resolution Error when using a Git Dependency referencing an Annotated Tag in its Git URL

For more information on this error please refer to [Unity Issue Tracker.](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url)