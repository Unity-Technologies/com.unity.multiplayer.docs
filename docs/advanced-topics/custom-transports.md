---
id: custom-transports
title: Unity and Custom Transports
description: Learn more about Unity Transports for MLAPI, collecting messages from applications and transmitting them across the network. MLAPI supports default and custom transports.
---

MLAPI uses Unity’s [Transport Layer API](/transport/0.8.0/introduction) by default and supports custom Transports. 

A Transport collects messages from the application and transmits them over the network. The Transport layer is also responsible for making sure that all packets arrive and in order if needed. Transports ensure your data's integrity, keeping it from being corrupted when it is sent over the network.

## NetworkTransport

MLAPI has an abstract class [MLAPI.Transports.NetworkTransport](../mlapi-api/MLAPI.Transports.NetworkTransport.md) interface that any networking transport can implement. This class is the skeleton needed by transport library authors to code for and to implement in order to make their transport libraries compatible with what we call MLAPI’s Transport Interface Contract, which is technically an implementation of MLAPI’s NetworkTransport’s interface. Essentially, transport library developers derive a class of the abstract class defined by `MLAPI.Transports.NetworkTransport` and implement it for usage.

## Unity Transport and UTP

The Unity Transport Package `com.unity.transport` is Unity’s next transport-level library that is netcode-agnostic and also known as UTP. It is responsible for abstracting platform-specific network socket libraries so that customized protocols for gaming can be utilized to send and receive network messages across the Wire, including having those messages be encrypted, guaranteed, and/or in-order.

See [About Unity Transport](/transport/0.8.0/introduction) for more information.

## Other Transport implementations

MLAPI has support for other transports’ wrappers of the MLAPI NetworkTransport interface. You can find community contributions of Transport implementations for third-party transport libraries like ENET, litenetlib, Photon-realtime, Ruffles, and SteamP2P in the [MLAPI Community Contributions](https://github.com/Unity-Technologies/mlapi-community-contributions) repository.

To use a Transport, follow the [Community Transport Installation Guide](https://github.com/Unity-Technologies/mlapi-community-contributions/tree/master/Transports).

## Contributing implementations

To get started writing Transport interfaces, the current implementations for UNet Transport Layer API, ENET, and Ruffles are good starting points for learning their flow. If you write a wrapper for a well-known Transport, please open a PR to add it to the [MLAPI Community Contribution repository](https://github.com/Unity-Technologies/mlapi-community-contributions).

## Adding New Content

Check our [contribution guidelines](https://github.com/Unity-Technologies/mlapi-community-contributions/blob/master/CONTRIBUTING.md) for information on how to contribute to the MLAPI Community Contribution repository.
