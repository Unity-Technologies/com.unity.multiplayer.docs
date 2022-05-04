---
id: dedicated-server
title: Dedicated Game Server (DGS)
sidebar_label: Dedicated Game Server
description: NEW DESCRIPTION
---

## What is a dedicated server?

A dedicated server is a standalone, headless platform build optimized for running in the cloud as a game server application. They simulate game worlds without supporting direct input or output, except that required for their administration. Players must connect to the server with separate client programs to see and interact with the game.

![Dedicated Server](/img/ded_server.png)

Many multiplayer games rely on a client-host (a listen server setup) as both the client and server. Because it relies on the host machine's internet connection and hardware capabilities, its simplistic setup can cause performance issues such as lag, slow loading times, crashes, loss of save files, and dropped games. A dedicated server is often a more stable and enjoyable gaming experience.

A dedicated server manages all hosting duties, such as: player locations and activity, games rules, physics, weapons, and equipment. However, the dedicated server does not run the game engine or render anything. These functions (such as graphics, game controls, and sound) is responsible on the client's machine. The dedicated server _instructs_ the client machines on what to render and when.

## Advantages

* Greater processing, memory, and storage capabilities relative to other hosting solutions
* Facilitates a reliable, stable, and faster connection
* Often eliminates lag, crashes, or glitches
* Can handle high traffic
* Less prone to corrupt save files
* Higher levels of security based on admin login definitions and the server's sole purpose to run the game

## Disadvantages

* Setup is more complex than other network topologies
* Requires regular maintenance of both the hardware and software of the server device
* Higher expenses to invest in effective hardware and electricity draw

## Real life examples

* Minecraft
* Terraria
* Valheim
* Counter-Strike
* Left 4 Dead

## When to use

Popular to create a stable online environment for players

## Options/how to use

### Option A: Unity's Dedicated Server Module

You can install the Dedicated Server module from the Unity Hub to implement

~~~~~~~~ [Johann's original content that I'm going to finess here]
Some of these optimizations are automatically implemented as default while some additional ones are left for the user to specify as they are innately related to the game implementation.
Current default optimization

Removal of the Audio subsystem.
Lighting threads are removed. 
Some player loop callbacks are removed 
player update loop registration of SendMouseEvents is disabled.
player update loop registration of UpdateAllRenderers is disabled.
player update loop registration of PlayerUpdateCanvases is disabled.
GPU-only assets (textures and meshes) are removed by default while assets with CPU Read/Write enabled are not removed.Items located in the resource directory are protected from removal. 
User specific additional optimization

Usage of the #define UNITY_SERVER for an item to be present uniquely on the server.
Separate Player specific code vs Server specific through different class implementations.
API to remove some items from the player loop 
Creating a dedicated server 
From the upper menu of the editor, select File→ Build Settings 
Within the pop up window, select `Dedicated server (see pic)` 

To Build from a script use BuildPlayerOptions.subtarget
Additional settings
The additional server settings are found through `Player settings` 



Advanced functionalities and CLI
Creating a server from the build command line should be:
-buildTarget Linux64 -standaloneBuildSubtarget Server

Additional information
In case of build for Linux, users can find the toolchain package here.
~~~~~~~~

### Option B: A Dedicated Gaming Server Provider

### Option C: Custom Dedicated Server

## Netcode and dedicated servers
