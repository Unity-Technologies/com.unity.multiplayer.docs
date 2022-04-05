---
id: about-transport-utp
title: Transports
description: A transport collects messages from your application and transmits them safely over the network. It ensures that all packets arrive and in order, if needed.
---

Netcode for GameObjects (Netcode) uses [Unity’s UNet Transport Layer API](https://docs.unity3d.com/Manual/UNetUsingTransport.html) by default and can support the [Unity Transport Package (UTP)](#unity-transport-package-utp) or [custom transports with the UTP wrapper](#the-utp-wrapper-and-custom-transports) as alternatives. UNet is a deprecated solution, so we recommend considering UTP or custom alternatives.

## So what is a transport layer?

The transport layer establishes communication between your application and different hosts in a network.

A transport layer can provide:
* *Connection-oriented communication* to ensure a robust connection before exchanging data with a handshake protocol.
* *Maintain order delivery* for your packets to fix any discrepancies from the network layer in case of packet drops or device interruption.
* *Ensure data integrity* by requesting retransmission of missing or corrupted data through using checksums.
* *Control the data flow* in a network connection to avoid buffer overflow or underflow--causing unnecessary network performance issues.
* *Manage network congestion* by mediating flow rates and node overloads.
* *Adjust data streams* to transmit as byte streams or packets.

## Unity’s UNet Transport Layer API

Although it is deprecated, [UNet](https://docs.unity3d.com/Manual/UNetUsingTransport.html) is the current default transport solution for Netcode. As UTP continues to become more robust, it will be the future default transport solution for Netcode.

## Unity Transport Package (UTP)

The Unity Transport Package (UTP) is an entire transport layer (unlike the UTP wrapper) that you can use to add multiplayer and network features to your project with or without Netcode. See the Transport [documentation](https://docs-multiplayer.unity3d.com/transport/1.0.0/introduction) for more information and how to [install](https://docs-multiplayer.unity3d.com/transport/1.0.0/install).

## The UTP Wrapper and Custom Transports

The UTP wrapper is a transport adapter that enables any networking transport to work with Netcode. It is the skeleton other transport libraries need to become compatible with the Netcode Transport Interface by using the `Unity.Netcode.NetworkTransport` abstract class.

The UTP wrapper has it's own [API reference](https://docs.unity3d.com/Packages/com.unity.netcode.adapter.utp@1.0/api/index.html)<!-- Temporary API ref link--> to incorporate with your transport solution.

To install the UTP wrapper for your transport solution, follow these steps:
1. Open your **Unity Hub** and select the **Project** you are presently working on.
1. From the menu bar, navigate to **Window** > **Package Manager**.
1. Click the plus sign ![Add](/img/add.png) in the **Package Manager** status bar and select **Add pack from git URL..**.
1. Copy and paste the following in the pop-up window:
```
com.unity.netcode.adapter.utp
```
:::info How to Copy
We recommend that you use the **Copy** function in the code block above to copy the URL as other methods may result in errors. Just hover and click.
:::
5. Click **Add**. The package installs as **Unity Transport for Netcode for GameObjects**.

:::warning The UTP wrapper vs UTP in the Package Manager
The UTP wrapper is not the Unity Transport Package (UTP). The UTP wrapper is an adapter and skeleton for your transport method to plug into Netcode.

UTP is a network transport layer that can function without Netcode and a completely separate package listed in the **Package Manager** as **Unity Transport**.
:::

### Community Transports or Writing Your Own

You can use any of the community contributed custom transport implementations or write your own.

The community transports are interchangeable transport layers for Netcode and can be installed with the Unity Package Manager. After installation, the transport package will appear in the **Select Transport** dropdown of the `NetworkManager`. Check out the [Netcode community contributed transports](https://github.com/Unity-Technologies/multiplayer-community-contributions/tree/main/Transports) for more information.

To start writing your own and contributing to the community, check out the [Netcode community contribution repository](https://github.com/Unity-Technologies/multiplayer-community-contributions) for starting points and how to add your content.