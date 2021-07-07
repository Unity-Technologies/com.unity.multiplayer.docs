---
id: install
title: Install Transport UTP
description: Install the on-going development version of Unity Transport UTP wrapper for MLAPI from a cloned respository. 
---

Multiple methods are available to install the Unity Transport UTP wrapper for MLAPI package. This guide details how to install the [**develop** branch](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/develop) of Unity MLAPI. This branch and GitHub repo contains [`com.unity.transport.utp`](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/tree/develop/com.unity.multiplayer.transport.utp).

:::important In-Progress Development
All features and code available in the *develop* branch is in-progress and not final. All cloned code may change daily or weekly, depending on submitted pull requests. All documentation and release notes for the *develop* version are not final.
:::

## Clone the repo

You need to clone the code repo locally to work with in-development code.

First, install [Git](https://git-scm.com/) if you do not have it installed on your PC. After installing Git, restart your system. A full restart is required to update for Git or you may receive an error adding packages.

Next, decide on how you want to clone: command line or application.

### Git Commands
To clone with Git commands:

1. Open a command line terminal.
1. Change directory to a location on your local.
1. Enter a command to clone. Example commands:
  
    * Git CLI: `git clone https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi`
    * GitHub CLI: `gh repo clone Unity-Technologies/com.unity.multiplayer.mlapi`

1. All files clone locally.

### GitHub Desktop

To clone with GitHub Desktop:

1. Install [GitHub Desktop](https://desktop.github.com/).
1. Through the GitHub repository, select **Code** > **Open with GitHub Desktop** option.
1. Select a location to clone to and complete cloning.

To clone directory through GitHub Desktop:

1. Open the application. 
1. Click **File** > **Clone** Repository.
1. Select the URL tab, copy and paste the repository URL:

  ```html
  https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi
  ```
1. Click **Clone**.

## Open the develop branch

To run the develop branch of MLAPI:

1. Checkout the develop branch of MLAPI using Git commands or application like GitHub Desktop.
1. Open Unity Hub and click **Add**.
1. Navigate to the cloned GitHub repository and select the testproject folder.
1. When opened, click **File** > **Open Scene**.
1. Navigate to and select *testproject/Assets/MainMenu.unity*. All scenes load.

  ![Load Scene](/img/install/develop-scene.png)

  You should see **Custom** installed packages available in *develop*, such as MLAPI Networking Library and Unity Transport for MLAPI.

  ![Packages](/img/install/develop-packages.png)

:::tip Updated Local Code
We recommend updating your local clone often from the MLAPI repository. This branch is constantly updated with new and updated features, fixed issues, and more.
:::

:::note Branching
If you want to make changes to *develop* code and content, you may want to create a local branch off of develop. Keep your branch updated from the remote develop branch to access fixes and updated features. Do not attempt to merge commits to the develop branch back into the respository. If you want to contribute, see [MLAPI Contributing](https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/blob/master/CONTRIBUTING.md) guidelines.
:::

## Troubleshooting

**Errors with incorrect package loading**

If you receive a different package than Unity MLAPI when adding the URL to Unity Hub, you may have not correctly copied the GitHub URL. 

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

If you use VPN or proxy software from international locations, you may encounter access issues. Consider turning off your VPN service or selecting a different location.