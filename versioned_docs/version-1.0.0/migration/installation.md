---
id: install
title: Install  Netcode for GameObjects
description: Install 1.0.0 version of Unity  Netcode for GameObjects. 
---

This guide details how to install Unity  Netcode for GameObjects (Netcode) via the Unity Hub.




This guide assumes that you already have:
  * An active Unity account with a valid license.
  * A current installation of Unity.
  * An existing Unity project. If you haven't created a project yet, we recommend using the [Hello World](../tutorials/helloworld/helloworldintro.md) example to begin.


## Unity 2021.x+

1. Open your **Unity Hub** and select the **Project** you are presently working on.
1. From the menu bar, navigate to **Window** > **Package Manager**.
1. Click the plus sign ![Add](/img/add.png) in the **Package Manager** status bar and select **Add package by name..**.

 ![Package Installed](/img/install/addbyname.png)

1. Copy and paste the following in the pop-up window:
```
com.unity.netcode.gameobjects
```
:::info How to Copy
We recommend that you use the **Copy** function in the code block above to copy the URL as other methods may result in errors. Just hover and click.
:::

5. Click **Add**. The package installs, shown as Netcode for GameObjects Version 1.0.0-pre.2.

  ![Package Installed](/img/install/2021-x-installed.png)


## Unity 2020.3.x

To install Netcode on Unity versions 2020.3.x, use the Unity Package Manager passing a git URL to the Netcode release:

1. Open your **Unity Hub** and select the **Project** you are presently working on.
1. From the menu bar, navigate to **Window** > **Package Manager**.
1. Open the Unity Package Manager by navigating to **Window** > **Package Manager** on Unity’s main menu.
1. Click ![Add](/img/add.png) in the status bar and select **Add package from git URL...** 

:::note
The **Add package by name..** option is integrated with the **Add package from git URL...** in Unity 2020.3.x versions. 
:::

  ![Select Git URL Option](/img/install/install-git.png)

1. Enter the Git URL to the Netcode release package (below). You can click the Copy option in that codeblock and paste it in the Package Manager.

  ```
  com.unity.netcode.gameobjects
  ```

  :::info How to Copy
  We recommend that you use the **Copy** function in the code block above to copy the URL as other methods may result in errors. Just hover and click.
  :::

1. Click **Add**. The package installs, shown as Netcode for GameObjects Version 1.0.0-pre.2.

  ![Package Installed](/img/install/1-0-0install.png)



## Next Steps

See the following content to continue your journey using Netcode:

* [Migrating From UNet to MLAPI](migratingtonetcode.md) for UNet users
* [Updating to the Unity Package](migratingfrommlapi.md) for migrating from previous MLAPI versions to Unity MLAPI
* [Building Golden Path](../tutorials/goldenpath_series/starting-out.md) to get started from install to project creation
* [Your First Networked Game "Hello World"](../tutorials/helloworld/helloworldintro.md) to get started from install to project creation

## Troubleshooting

You may come across different errors when installing Netcode. The following troubleshooting tips should help you with the most common issues.


### Errors with incorrect package loading


If you receive a different package than  Netcode for GameObjects Version 1.0.0-pre.2  when adding the URL to Unity Hub, you may have not correctly copied the GitHub URL. 

Hover over the URL to copy, click the **Copy** function in the code block, and use this when adding the package from a Git URL in Unity Hub.

**Errors adding package**

MacOS users may receive the following errors:

* `Cannot perform upm operation: Unable to add package... Error when executing git command. xcrun: error: invalid active developer path`
* `Error adding package...`

These are common errors for MacOS users that have not installed or updated Xcode or Xcode developer tools. You may need to upgrade your Xcode installation. In a terminal, use this command: `xcode-select --install`.

If you newly installed or updated Git, you may also need to restart your system. Restarting Unity may not be enough if you added Git and could receive a package loading error.

**Errors finding Git installation**

If you receive an OS or Unity error trying to locate Git after updating or installing Git, you need to fully restart your computer. Restarting only Unity may not fully update system information to correctly locate the install.

**VPN or Proxy Errors**

If you use VPN or proxy software from international locations, you may encounter access issues. Use the registry option for installing MLAPI. Also consider turning off your VPN service or selecting a different location.

**Package Resolution Error when using a Git Dependancy referencing an Annotated Tag in its Git URL**

For more information on this error please refer to [Unity Issue Tracker.](https://issuetracker.unity3d.com/issues/package-resolution-error-when-using-a-git-dependency-referencing-an-annotated-tag-in-its-git-url)
