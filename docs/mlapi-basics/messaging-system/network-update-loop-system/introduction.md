---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Often there is a need to update netcode systems like RPC queue, transport IO and others outside standard `MonoBehaviour` event cycle.

The Network Update Loop infrastructure  utilizes Unity's low-level Player Loop API allowing for registering `INetworkUpdateSystems` with `NetworkUpdate()` methods to be executed at specific `NetworkUpdateStages` which may be either prior to or after `MonoBehaviour`-driven game logic execution.
