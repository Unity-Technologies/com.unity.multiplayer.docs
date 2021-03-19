---
id: introduction
title: Introduction
sidebar_label: Introduction
---

The multiplayer framework provides two main network constructs ([`ServerRpc`](message-system/serverrpc.md) and [`ClientRpc`](message-system/clientrpc.md)) to execute logic on either server-side or client-side. This concept is often called Remote Procedure Call (RPC) and has wide adoption across the industry.

:::info
  For more information see the wikipedia  entry on  [Remote Procedure Call's](https://en.wikipedia.org/wiki/Remote_procedure_call). 
:::

## RPC Methods
A typical framework user (Unity developer) can declare multiple RPCs under a `NetworkBehaviour` and inbound/outbound RPC calls will be replicated as a part of its replication in a network frame.

A method turned into an RPC is no longer a regular method, it will have its own implications on direct calls and in the network pipeline (see [Execution Table](message-system/execution-table.md)).