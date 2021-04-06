---
id: bossroom
title: Getting Started with Boss Room
---

![Banner](/img/banner.png)
# Boss Room - Multiplayer Samples Co-op built with Unity MLAPI

:::important
This project is currently in early-access.
:::

Boss Room is a fully functional Multiplayer Co-op Sample game made with Unity and MLAPI. We are building the sample to serve as an educational showcase of specific typical gameplay patterns frequently featured in similar games.

The intention is that you can use everything in this project as a starting point or as bits and pieces in your own Unity games. 

## To get the project
 - A release version can be downloaded from the [Releases](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases) page. 
 - Unzip the archive file.
 - You are now ready to add the project to Unity Hub.

:::important Compatibility
- The MLAPI supports all major Unity platforms. To use the WebGL platform a custom WebGL transport based on web sockets is needed.
- MLAPI is compatible with Unity 2020.3.0f1.
- Make sure to include standalone support for Windows/Mac in your installation. 
:::

## To add the project with Unity Hub
1. Open Unity Hub.
1. Click **Add**.
1. Select the root folder of the downloaded project.

  ![adding project to unity](/img/addbossroom.gif)

:::note
The first time you open the project Unity will import all assets, which will take longer than usual - it is normal.
The MLAPI v0.1.0 package will be installed with Boss Room.

**Issues with importing due to parental control software**

If you have issues with importing you may want to check your DNS settigns as some ISP parental controls  may block GitHub access.

https://community.virginmedia.com/t5/Networking-and-WiFi/Web-Safe-Breaks-GitHub/td-p/4279652

:::

## To open the project for the first time

1. In Unity Hub double click the project.
1. Navigate to the Project window. 
1. Open the *Assets* folder
1. Open the *Scene* Folder
1. Click the *Startup* scene.
1. Click  **Play**


<iframe src="https://www.youtube.com/embed/OSSBWOJq6gI?playlist=OSSBWOJq6gI&loop=1&&autoplay=1&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



## Testing multiplayer

In order to see the multiplayer functionality in action we can either run multiple instances of the game locally on our computer or choose to connect ver the internet.

---------------
### Local multiplayer setup

#### Build an Executable.

1. Click File.
2. Click Build Settings.
2. Click **Build**.

![building the project](/img/buildbossroom.gif)

After the build has completed you can launch several instances of the built executable to be able to both host and join a game.

:::important Mac Users
To run multiple instances of the same app, you need to use the command line.
> Run `open -n BossRoom.app`
:::


<iframe src="https://www.youtube.com/embed/27Ikr0t7vzg?playlist=27Ikr0t7vzg&loop=1&&autoplay=1&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

### Multiplayer over internet

:::tip
In contrast to running a local setup, when playing over internet we don't neccessarily need a built executable. We can just run the game in editor.
:::


Running the game over internet currently requires setting up a Photon Transport for MLAPI or Alternatively you can use Port Forwarding

#### Photon Transport

Photon Transport uses Photon relay server to facilitate communication between clients and server living on different networks.

:::unity Learn More
[Boss Room Photon Setup Guide](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/release/v0.1.0-experimental/Documentation/Photon-Realtime/Readme.md)
:::

#### Port Forwarding

The [Portforward Site](https://portforward.com/) has guides on how to enable port forwarding on a huge number of routers. Boss Room uses UDP and needs a 9998 external port to be open.



import Iframe from 'react-iframe'
