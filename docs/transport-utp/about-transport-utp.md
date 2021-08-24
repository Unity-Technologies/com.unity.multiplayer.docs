---
id: about-transport-utp
title: About the Transport UTP Wrapper
description: Unity Transport provides a UTP wrapper for the MLAPI NetworkTransport interface.
---

Unity Transport provides a wrapper of the MLAPI NetworkTransport interface in the [`com.unity.multiplayer.transport.utp`](../transport-api/introduction.md) package.

The MLAPI.Transports.NetworkTransport abstract class interface can be implemented by any networking transport. It is the skeleton needed by transport library authors to code for and to implement in order to make their transport libraries compatible with what we’ve called MLAPI’s Transport Interface Contract. Technically, this is an implementation of MLAPI’s NetworkTransport’s interface. Essentially, transport library developers derive a class of the abstract class defined by `MLAPI.Transports.NetworkTransport` and implement it for usage.

Additional information will be provided as we continue development.

See the following information:

* [Install](install.md)
* [`com.unity.multiplayer.transport.utp`](../transport-api/introduction.md) API