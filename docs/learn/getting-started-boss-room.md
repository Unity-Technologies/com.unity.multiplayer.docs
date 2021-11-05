---
id: bossroom
title: Getting Started with Boss Room
description: Learn more about installing and running the Boss Room game sample.
---

![Boss Room banner](/img/banner.png)

:::important
This project is currently in early-access.
:::

Boss Room is a fully functional Multiplayer Co-op Sample game made with Unity and  Netcode for GameObjects (Netcode). We are building the sample to serve as an educational showcase of specific typical gameplay patterns frequently featured in similar games.

You can use everything in this project as a starting point or as bits and pieces in your own Unity games.


## Download the project files

1. Go to the Multiplayer Samples Co-Op [Latest Release](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases/latest) on GitHub.
1. Click on `Project.zip` to automatically start downloading the folder.
1. Unzip the Project zip file. It unzips a folder named `com.unity.multiplayer.samples.coop-<version>`.
:::note Windows users
Using Windows' built-in extracting tool may generate an "Error 0x80010135: Path too long" error window which can invalidate the extraction process. As a workaround, shorten the zip file to a single character (for example *c.zip*) and move it to the shortest path on your computer (such as in root C:\) and retry. If that solution fails, another workaround is to extract the downloaded zip file using an application like 7zip.
:::
1. You may choose to move your unzipped folder to a new location. My default location is my `Downloads` folder that I regularly clean out, so I moved the folder to my desktop.
1. You can now add the Boss Room project to your Unity Hub.

:::important Compatibility
- Boss Room supports those platforms supported by Netcode.
- Boss Room is compatible with Unity 2020.3 and later.
- Ensure your Unity installation includes the build support [module components](https://docs.unity3d.com/Manual/GettingStartedInstallingHub.html) for your OS.
:::

## Add the project with Unity Hub

1. Open your Unity Hub.
1. Click the dropdown arrow next to **Open**, then select **Add project from disk**.
1. Select the root folder of the downloaded project. For example, `com.unity.multiplayer.samples.coop-0.2.1`.

<iframe src="https://www.youtube.com/embed/PwPUcj3qwtI?playlist=PwPUcj3qwtI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

:::note
The first time you open the project, Unity will import all assets, which will take longer than usual - this is normal. The Unity Netcode For GameObjects v1.0.0 Netcodepackage will also be installed with Boss Room.

**Issues with importing due to parental control software**: If you have issues with importing you may want to check your DNS settings as some ISP parental controls  may block GitHub access. For example, see this information on [WebSafe](https://community.virginmedia.com/t5/Networking-and-WiFi/Web-Safe-Breaks-GitHub/td-p/4279652).
:::

## Open the project

To open the project for the first time:

1. In your Unity Hub, double-click the project.
1. Navigate to the Editor window.
2. Then under the **Project** tab, go to **Assets** > **Boss Room** > **Scenes** and double-click on the **Startup** scene.
3. Click **Play**. The Boss Room menu scene loads.


<iframe src="https://www.youtube.com/embed/OSSBWOJq6gI?playlist=OSSBWOJq6gI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Test multiplayer

To see the multiplayer functionality in action, you can either run multiple instances of the game [locally on your computer](#local-multiplayer-setup) or choose to [connect through the internet](#multiplayer-over-internet).

### Local multiplayer setup

For a local multiplayer setup, you must build an executable and launch several instances of this executable to both host and join a game.

1. With the Boss Room project open in your Unity editor, click **File** > **Build Settings** > **Build**.
2. Save the binary as `Boss Room`.

<iframe src="https://www.youtube.com/embed/eZGofxiuAgA?playlist=eZGofxiuAgA&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

After the build has completed, you can launch several instances of the built executable to both host and join a game.

:::important Mac Users
To run multiple instances of the same app, you need to use the command line:
1.  First, change your directory to the folder where you saved the Boss Room executable. For example, `cd Desktop/com.unity.multiplayer.samples.coop-0.2.1`.
2.  Run the command `Open -n YourAppName.app`. If you saved the app as `BossRoom`, your command is `Open -n BossRoom.app`. However, if you saved your app as `Boss Room` with a space, your command needs to include quotation marks ("") around the executable name: `Open -n "BossRoom.app"`.
:::

<iframe src="https://www.youtube.com/embed/27Ikr0t7vzg?playlist=27Ikr0t7vzg&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

### Multiplayer over internet

In contrast to running a local setup, when playing over internet we do not necessarily need a built executable. You can run the game in editor.

Running the game over internet currently requires either setting up a [Photon Transport for Netcode](#photon-transport) or using [Port Forwarding](#port-forwarding).

#### Photon Transport

[Photon Transport for Netcode for GameObjects](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/Transports/com.mlapi.contrib.transport.photon-realtime) uses Photon relay server to facilitate communication between clients and server living on different networks.

:::unity Learn More
See the [Boss Room Photon Setup Guide](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Documentation/Photon-Realtime/Readme.md) for details.
:::

#### Port Forwarding

The [Portforward Site](https://portforward.com/) has guides on how to enable port forwarding on a huge number of routers. Boss Room uses UDP and needs a 9998 external port to be open.

import Iframe from 'react-iframe'

## Troubleshooting

**Errors finding Git installation**

If you receive an OS or Unity error trying to locate Git after updating or installing Git, you need to fully restart your computer. Restarting only Unity may not fully update system information to correctly locate the install.

**Windows Error 0x80010135: Path too long**

Using Windows' built-in extracting tool may generate an "Error 0x80010135: Path too long" error window which can invalidate the extraction process. As a workaround, shorten the zip file to a single character (for example *c.zip*) and move it to the shortest path on your computer (such as in root C:\) and retry. If that solution fails, another workaround is to extract the downloaded zip file using an application like 7zip.

**Run builds on Mac OSX gives "unidentified developer"**

If you attempt to run a build on OSX and receive a warning dialog mentioning an "unidentified developer", you may need to override your security settings for this application:

1. In the Finder on your Mac, locate the application you want to open.

  :::note
  Do not use Launchpad, it does not allow you to access the shortcut menu.
  :::

1. Control-click the app icon, then choose **Open** from the shortcut menu.
1. Click **Open**.
1. The app is saved as an exception to your security settings. You can open it in the future by double-clicking it just as you can any registered app.

See [Apple Support](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac) for details.
