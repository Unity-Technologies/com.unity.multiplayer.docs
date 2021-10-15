---
id: about-transport-utp
title: About the Transport UTP Wrapper
description: Unity Transport provides a UTP wrapper for the Netcode for GameObjects NetworkTransport interface.
---

Unity Transport provides a wrapper of the Netcode for GameObjects (Netcode) NetworkTransport interface in the [`com.unity.multiplayer.transport.utp`](../transport-api/introduction.md) package.

The `Unity.Netcode.NetworkTransport` abstract class interface can be implemented by any networking transport. It is the skeleton needed by transport library authors to code for and to implement in order to make their transport libraries compatible with what we’ve called Netcode’s Transport Interface Contract. Technically, this is an implementation of Netcode’s NetworkTransport’s interface. Essentially, transport library developers derive a class of the abstract class defined by `Unity.Netcode.NetworkTransport` and implement it for usage.

Additional information will be provided as we continue development.

See the following information:

* [Install](install.md)
* [API](../transport-api/introduction.md) 
