---
id: goldenpath_foundation_module
title:  Golden Path Foundation Module
description: Tutorial that explains how to create the foundation for all the future Golden path modules, the foundation module includes, creating a new project, Installing  Netcode for GameObjects ,  creating and testing the basic networking building blocks, and creating and testing a commandline helper. 
---

If you have already completed the Hello World guide, these steps may seem familiar. However, there are some minor differences, and this guide is what further Golden Path modules consider the foundation to build on. We recommend starting a new project as your Golden Path instead of using your Hello World project because of these small differences.

## Prerequisites

A Netcode for Gameobjects (Netcode)-supported version of Unity (2019.4+)

## Create a new project in Unity
              
import CreatePro from '../../shared/_create_new_project.md';

<CreatePro/>

:::note
Remember this path. You will need it later in the [tutorial](#creating-a-command-line-helper), when you test building the project from the command line. For the video guide we used a Mac, and our path was `~/dev/mlapi-golden-path/`. On a Windows machine your path may be slightly different.

As one of our writer's stepped through the process in both Mac and Windows, these are her comparative paths:
* Mac: `~ GoldenPath`
* Windows: `C:\Users\sarao\GoldenPath`

You will also need your path when you create a clone of the Project for future modules.
:::

<iframe src="https://www.youtube.com/embed/AOZE-b9Q8R8?playlist=AOZE-b9Q8R8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Import Netcode Package via URL

See the [Install Netcode](../../migration/installation.md) guide to install the Netcode package.

## Creating Network Manager and selecting the Transport

import NetworkMgr from '../../shared/_create_networkmanager_and_transport.md';

<NetworkMgr/>

## Creating an object to spawn for each connected player

import Spawn from '../../shared/_create_spawn_for_player.md';

<Spawn/>

### Testing the basic network building blocks

import SpawnTest from '../../shared/_test_spawn_for_player.md';

<SpawnTest/>

## Creating a command line helper

import CLIhelper from '../../shared/_create_commandline_helper.md';

<CLIhelper/>

### Testing the command line helper

import Testhelper from '../../shared/_testing_commandline_helper.md';

<Testhelper/>

## Next Steps with Goldenpath

You should now save the Golden Path Foundation project to build on it in future modules.

For more information on the relevant concepts introduced here please refer to the following sections of the documentation:

- [Network Manager](../../components/networkmanager.md)
- [Transport](../advanced-topics/../../advanced-topics/custom-transports.md)
- [Network Object](../../basics/networkobject.md)

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Matt Walsh, Unity. 
:::
