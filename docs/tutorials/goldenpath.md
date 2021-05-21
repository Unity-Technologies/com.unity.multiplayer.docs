---
id: goldenpath
title:  Building Golden Path
description: Tutorial that explains adding a command line handler, network variables (client and server-controlled), network transforms for auto-movement, and RPC introduction.
---

In this tutorial we will build on the work we have already done in Hello World and add in a few more features. As there are some minor differences between this tutorial and the Hello World series we will be starting afresh. You do not have to have completed either of the Hello World tutorials to complete this one, however, if you are new to Unity then we recommended that you  complete them in order to familiarise yourself with Unity. 

We will be covering the following:

- Adding a command line handler (to make launching easier)
- Network variables (client and server-controlled) 
- Network transforms
- RPCs

:::funfact
In the context of software or information modelling, a Golden Path (sometimes called happy path) is a default scenario featuring no exceptional or error conditions.
:::

## Requirements

This tutorial requires an MLAPI-supported version of Unity (2019.4+).

## Create a new project in Unity

Now we will create a new project in Unity.

1. Open the Unity Hub.
1. Click **New**. 
1. Select type *3D*.
1. Rename the project **GoldenPath**.
1. Select the location to save the project.

:::note
Make note of this path. You will need it  later in the [tutorial](#creating-a-command-line-helper), when you are testing building the project from the command line. For this guide we used a Mac and our path was `~/dev/mlapi-golden-path/`. On a Windows machine your path may be slightly different.
:::

<iframe src="https://www.youtube.com/embed/AOZE-b9Q8R8?playlist=AOZE-b9Q8R8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Import MLAPI Package via URL

See the [Install MLAPI](../migration/installation.md) guide to install the MLAPI package.

## Creating Network Manager and selecting the Transport

import NetworkMgr from '../shared/_create_networkmanager_and_transport.md';

<NetworkMgr/>

## Creating an object to spawn for each connected player

import Spawn from '../shared/_create_spawn_for_player.md';

<Spawn/>

### Testing the basic network building blocks

import SpawnTest from '../shared/_test_spawn_for_player.md';

<SpawnTest/>

## Creating a command line helper

import CLIhelper from '../shared/_create_commandline_helper.md';

<CLIhelper/>

### Testing the command line helper

import Testhelper from '../shared/_testing_commandline_helper.md';

<Testhelper/>

## Next Steps

For more information on the relevant concepts introduced here please refer to the following sections of the documentation:

- [Network variables (client and server-controlled)](../mlapi-basics/networkvariable.md)
- [Network transforms](../components/networktransform.md)
- [RPCs](../advanced-topics/message-system/about-rpc.md)

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Matt Walsh, Unity. 
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';