---
id: goldenpath_foundation_module
title:  Golden Path Foundation Module
description: Tutorial that explains how to create the foundation for all the future Goldan path modules, the foundation module includes, creating a new project, Installing  Netcode for GameObjects ,  creating and testing the basic networking building blocks, and creating and testing a commandline helper. 
---

In this tutorial we will build on the work we have already done in Hello World and add in a few more features. As there are some minor differences between this tutorial and the Hello World series we will be starting afresh. You do not have to have completed either of the Hello World tutorials to complete this one, however, if you are new to Unity then we recommended that you complete them in order to familiarise yourself with Unity.


## Requirements

This tutorial requires an  Netcode for GameObjects (Netcode)-supported version of Unity (2019.4+).

## Create a new project in Unity

              
import CreatePro from '../../shared/_create_new_project.md';

<CreatePro/>

:::note
Make note of this path. You will need it  later in the [tutorial](#creating-a-command-line-helper), when you are testing building the project from the command line. For this guide we used a Mac and our path was `~/dev/mlapi-golden-path/`. On a Windows machine your path may be slightly different.

You will also need it when you create a clone of the Project for future modules.
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

You should  now save the golden path foundation project as you will be building on it in future modules.

For more information on the relevant concepts introduced here please refer to the following sections of the documentation:

- [Network Manager](../../components/networkmanager.md)
- [Transport](../../advanced-topics/transports.md)
- [Network Object](../../basics/networkobject.md)




:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Matt Walsh, Unity. 
:::
