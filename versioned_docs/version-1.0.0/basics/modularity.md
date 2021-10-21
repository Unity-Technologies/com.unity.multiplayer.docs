---
id: modularity
title: Modularity
sidebar_label: Modularity
---

 Netcode for GameObjects (Netcode) has big components that play together. The Spawn and Messaging system. The messaging system is the core component of the whole Netcode. It abstracts message sending in a nice way and acts as a thin layer on top of the socket transport. The second part, the spawning connects to the messaging system. When using spawning, Netcode will handle object spawning for you and it will keep track of spawned objects via the NetworkObject component. This allows for more abstractions to be made, and allows easy sending of messages to specific game objects in a certain context.

This separated system allows you to use Netcode for low-level stuff where you want full control but still want some high level with abstractions. Examples of this are MMOs.

In this scenario, you might want your own spawn system, object tracking etc. But you still want the benefits of the message system, the cryptography, and the compact bit writer.

This modularity allows Netcode to be used for any type of game with any architecture such as real-time or lockstep.
