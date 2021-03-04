---
id: custom-transports
title: Custom Transports
---

The MLAPI utilises Unity’s [uNET Transport Layer API](https://docs.unity3d.com/Manual/UNetUsingTransport.html) by default and has support for custom Transports. 

A Transport is a library that collects message segments from applications and transmits them into the network. The Transport layer is also responsible for managing error correction, providing quality and reliability to the end-user.

This layer enables the host to send and receive error-corrected data, packets or messages over a network.

## Community Contribution

The MLAPI has support for community contribution Transport implementations which you can use. Click [here](https://github.com/Unity-Technologies/MLAPI.Transports) for the MLAPI Community Contribution repository. 

To use a Transport, download the ZIP file you want from the CI server, export it into your assets folder, and it will show up automatically in the NetworkingManager.

## Writing Your Own

To get started writing Transport interfaces, the current implementations for uNet Transport Layer API, ENET, and Ruffles are good starting points for learning their flow. If you write a wrapper for a well-known Transport, please open a PR to add it to the MLAPI Community Contribution [repository](https://github.com/Unity-Technologies/mlapi-community-contributions).

## Adding New Content

Check our [contribution guidelines](https://github.com/Unity-Technologies/mlapi-community-contributions/blob/master/CONTRIBUTING.md) for information on how to contribute to the MLAPI Community Contribution repository.
