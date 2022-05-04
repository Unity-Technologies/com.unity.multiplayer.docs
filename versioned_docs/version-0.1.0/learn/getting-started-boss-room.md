---
id: bossroom
title: Getting Started with Boss Room
description: Learn more about installing and running the Boss Room game sample.
---

![Banner](/img/banner.png)

:::important
This project is currently in early-access.
:::

Boss Room is a fully functional Multiplayer Co-op Sample game made with Unity and MLAPI. We are building the sample to serve as an educational showcase of specific typical gameplay patterns frequently featured in similar games.

The intention is that you can use everything in this project as a starting point or as bits and pieces in your own Unity games. 



## Get the project files

- A release version can be downloaded from the [Latest Releases](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases/latest) at GitHub. 
- Unzip the archive file.
:::note Windows users
Using Windows' built-in extracting tool may generate an "Error 0x80010135: Path too long" error window which can invalidate the extraction process. As a workaround, shorten the zip file to a single character (for example *c.zip*) and move it to the shortest path on your computer (such as in root C:\) and retry. If that solution fails, another workaround is to extract the downloaded zip file using an application like 7zip.
:::
- You are now ready to add the project to Unity Hub.

:::important Compatibility
- Boss Room supports those platforms supported by MLAPI.
- Boss Room is compatible with Unity 2020.3 and later.
- Make sure to include standalone support for Windows/Mac/Linux in your installation. 
:::

## Add the project with Unity Hub

1. Open Unity Hub.
1. Click **Add**.
1. Select the root folder of the downloaded project.

<iframe src="https://www.youtube.com/embed/PwPUcj3qwtI?playlist=PwPUcj3qwtI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

:::note
The first time you open the project, Unity will import all assets, which will take longer than usual - this is normal. The Unity MLAPI v0.1.0 package will also be installed with Boss Room.

**Issues with importing due to parental control software**: If you have issues with importing you may want to check your DNS settings as some ISP parental controls  may block GitHub access. For example, see this information on [WebSafe](https://community.virginmedia.com/t5/Networking-and-WiFi/Web-Safe-Breaks-GitHub/td-p/4279652).
:::

## Open the project

To open the project for the first time:

1. In Unity Hub, double-click the project.
1. Navigate to the Project window. 
1. Open the *Assets* folder.
1. Open the *Scene* folder.
1. Click the *Startup* scene.
1. Click **Play**.


<iframe src="https://www.youtube.com/embed/OSSBWOJq6gI?playlist=OSSBWOJq6gI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Test multiplayer

In order to see the multiplayer functionality in action, you can either run multiple instances of the game locally on your computer or choose to connect through the internet.

### Local multiplayer setup

#### Build an Executable

1. Click File.
2. Click Build Settings.
2. Click **Build**.
1. Name the binary Boss Room.

<iframe src="https://www.youtube.com/embed/eZGofxiuAgA?playlist=eZGofxiuAgA&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

After the build has completed you can launch several instances of the built executable to be able to both host and join a game.

:::important Mac Users
To run multiple instances of the same app, you need to use the command line: 
`> Run open -n BossRoom.app`
:::

<iframe src="https://www.youtube.com/embed/27Ikr0t7vzg?playlist=27Ikr0t7vzg&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

### Multiplayer over internet

:::tip
In contrast to running a local setup, when playing over internet we do not necessarily need a built executable. You can run the game in editor.
:::

Running the game over internet currently requires either setting up a [Photon Transport for MLAPI](#photon-transport) or using [Port Forwarding](#port-forwarding).

#### Photon Transport

[Photon Transport for MLAPI](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/Transports/com.mlapi.contrib.transport.photon-realtime) uses Photon relay server to facilitate communication between clients and server living on different networks.

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
