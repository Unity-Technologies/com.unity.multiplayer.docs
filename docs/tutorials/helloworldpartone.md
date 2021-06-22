---
id: helloworldone
title: Your First Networked Game 
description: Tutorial that explains creating a project, installing the MLAPI package, and creating the basic components for your first networked game.
productname: "Hello World"
---

This tutorial walks you through creating a project, installing the MLAPI package, and creating the basic components for your first networked game.



## Requirements

This tutorial requires an MLAPI-supported version of Unity (2019.4+).


## Create a new project in Unity

import CreatePro from '../shared/_create_new_project.md'; 

<CreatePro/>

Test plugin 
{@include: ../shared/_create_new_project.md}

<iframe src="https://www.youtube.com/embed/NsfwlWaZ0ng?playlist=NsfwlWaZ0ng&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Import MLAPI Package via URL

See the [Install MLAPI](../migration/installation.md) guide to install the MLAPI package.

## Create the Basic Components

In this section we will create the basic building blocks of a multiplayer game.

## Creating Network Manager and selecting the Transport

import NetworkMgr from '../shared/_create_networkmanager_and_transport.md';

<NetworkMgr/>

## Creating an object to spawn for each connected player

import Spawn from '../shared/_create_spawn_for_player.md';

<Spawn/>

<iframe src="https://www.youtube.com/embed/B_FWb4J1Pxw?playlist=B_FWb4J1Pxw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing Hello World

Now we will test to see if evereything works as expected.

1. Click **Play**.
1. Click **Start Host** under **NetworkManager**. 

<iframe src="https://www.youtube.com/embed/Ee3t0xNF0n8?playlist=Ee3t0xNF0n8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


:::note Congrats!
Congratulations you have created a networked game. It is not a very flashy game but it is a networked game nonetheless. For the next steps in your journey see [Building on "Hello World"](helloworldparttwo.md)
:::

:::contribution Special Thanks

 This guide would not have been possible without the hard work and support of Fernando Cortez, Unity. 
:::
