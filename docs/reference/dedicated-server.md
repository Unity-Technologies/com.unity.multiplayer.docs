---
id: dedicated-server
title: Dedicated Game Server (DGS)
sidebar_label: Dedicated Game Server
description: Dedicated game servers creates a stable, more enjoyable gaming experience for your players.
---

<!-- Doc Note to self: Include content from Sam's DGS comments in Slack. See DM from him.-->

## What is a dedicated server?

A dedicated server is a standalone, headless platform build optimized for running in the cloud as a game server application. They simulate game worlds without supporting direct input or output, except that required for their administration. Players must connect to the server with separate client programs to see and interact with the game.

![Dedicated Server](/img/ded_server.png)

Many multiplayer games rely on a client-host (a [listen server setup](listenserver.md)) as both the client and server. Because it relies on the host machine's internet connection and hardware capabilities, its simplistic setup can cause performance issues such as lag, slow loading times, crashes, loss of save files, and dropped games. A dedicated server is often a more stable and enjoyable gaming experience. And it can reduce some cheating concerns and unfair advantages by separating the server from a host player.

A dedicated server manages all hosting duties, depending on your particular game: player locations and activity, games rules, physics, weapons, and equipment. However, the dedicated server does not run the game engine or render anything. These functions (such as graphics, game controls, and sound) is responsible on the client's machine. The dedicated server _instructs_ the client machines on what to render and when.

## Advantages

* Greater processing, memory, and storage capabilities relative to other hosting solutions
* Facilitates a reliable, stable, and faster connection
* Often eliminates lag, crashes, or glitches
* Reduces some cheating and unfair advantage concerns
* Can handle high traffic
* Less prone to corrupt save files
* Higher levels of security based on admin login definitions and the server's sole purpose to run the game

## Disadvantages

* Setup is more complex to manage the separate projects for the server and the client 
* Can require regular maintenance of both the hardware and software of the server device; although this disadvantage is not as problematic when hosting your server in the cloud
* Higher expenses to invest in effective hardware and electricity draw

## Real life examples

* Minecraft
* Terraria
* Valheim
* Counter-Strike
* Left 4 Dead

## When to use

Popular to create a stable online environment for players when a listen server setup provides a less enjoyable gaming experience

## How to use Unity's Dedicated Server Module

You can use the Dedicated Server module from the Unity Hub to implement your own dedicated game server.

The default optimization for the Unity Dedicated Server module makes the following adjustments:
* Removes the audio subsystem
* Removes lighting threads
* Removes some player loop callbacks
  * Disables player update loop registration of `SendMouseEvents`
  * Disables player update loop registration of `UpdateAllRenderers`
  * Disables player update loop registration of `PlayerUpdateCanvases`
* Removes GPU-only assets (such as textures and meshes), but not assets with CPU **Read/Write** enabled
* Does not remove items located in the resource directory

### Additional optimizations to consider

* Use `#define UNITY_SERVER` for an item to present uniquely on the server <!-- I'd like to expand on how to do this-->
* Use different class implementations to separate player-specific code from server-specific code
* Use APIs to remove some items from the player loop <!--I'd like to add some specifics about this as well -->

### Creating a dedicated server

<!--Prerequisites to consider-->

#### From the Unity editor
From the upper menu of the editor, select File→ Build Settings 
Within the pop up window, select `Dedicated server (see pic)` 

Additional settings <!--Do these settings apply to both methods (editor and script?)-->
The additional server settings are found through `Player settings` 

#### Build with a script

To Build from a script use BuildPlayerOptions.subtarget

Advanced functionalities and CLI 
Creating a server from the build command line should be:
-buildTarget Linux64 -standaloneBuildSubtarget Server

Additional information
In case of build for Linux, users can find the toolchain package here.

<!--
Documentation note: Limiting the following content until we determine as a product to provide options outside of a Unity provided option.

### Option B: A Dedicated Gaming Server Provider

### Option C: Custom Dedicated Server

## Netcode and dedicated servers
-->