---
id: about-transport-utp
title: MLAPI Transport Wrapper
description: MLAPI provides a UTP wrapper for Unity Transport. To implement, install the package to access and use the wrapper.
---

The Unity Transport Package `com.unity.transport` is Unity’s next transport-level library that is netcode-agnostic and also known as UTP. It is responsible for abstracting platform-specific network socket libraries so that customized protocols for gaming can be utilized to send and receive network messages across the Wire, including having those messages be encrypted, guaranteed, and/or in-order.

Unity Transport provides a wrapper of the MLAPI `NetworkTransport` interface in the [`com.unity.multiplayer.transport.utp`](../transport-api/introduction.md) package. The wrapper contains a [`NetworkDriver`](/transport/api/Unity.Networking.Transport.NetworkDriver.md) provided `by com.unity.transport`. When using an implementation of the wrapper, you can select between the available protocols: UTP protocol or a Relay protocol.

See the following information:

* [Install the package](install.md)
* [`com.unity.multiplayer.transport.utp`](../transport-api/introduction.md) wrapper API reference
