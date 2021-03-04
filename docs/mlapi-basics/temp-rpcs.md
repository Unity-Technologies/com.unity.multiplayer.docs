---
id: rpcs
title: RPCs
sidebar_label: RPCs
---

TODO add this to other docs about RPCs

### RPC Flow

This is what happens when you send a RPC:

InvokeRpc:

* Writes NetworkId
* Writes Index of Behaviour
* Writes Hash of the RPC Method Name
* Writes Parameters or Body

Receive:

* Reads NetworkId
* Finds Object With Given NetworkId
* Reads Behaviour Index
* Finds The Behaviour At Index Provided On Object
* Reads RPC Method Name Hash
* Finds The Method With The Hash Provided
* Invokes Its Delegate With Parameters Or Body
