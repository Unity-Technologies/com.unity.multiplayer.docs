---
id: introduction
title: About Unity Transport
---

The Unity Transport Package is Unity’s next transport-level library. Also known as UTP, this package is netcode-agnostic, meaning it is intended to work with any netcode. 

The Unity Transport Package is responsible for abstracting platform-specific network socket libraries so that customized protocols for gaming can be utilized to send and receive network messages across the Wire, including having those messages be encrypted, guaranteed, and/or in-order.

The Unity Transport package is known as and listed in Unity as `com.unity.transport`.

:::note
This package should not be confused with Unity MLAPI Transport. See [Custom Transports](/docs/advanced-topics/custom-transports) for more information.
:::

:::unity Content Licenses
All Transport code and documentation is covered by Unity Companion License. See [Licenses](/reference/license) for more information.
:::

## Overview

![Transport Overview](/img/transport/layercake.png)

## Installing Transport

See the [installation guide](install.md) to install the `com.unity.transport` package.

## Using Transport

To learn how to use the `com.unity.transport` package in your own project, review the client and server workflows, additional information, and sample code available in this guide.

##  Requirements

This version of `com.unity.transport` is compatible with the following versions of the Unity Editor:

* 2020.1.2 and later
* All platforms supported by Unity are supported by the transport