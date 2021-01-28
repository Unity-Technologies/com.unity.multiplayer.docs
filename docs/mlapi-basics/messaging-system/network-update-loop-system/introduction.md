---
id: introduction
title: Introduction
sidebar_label: Introduction
---

The Network Game Update Loop diagram below shows a comparison of the various update stages between PlayerLoop (full game loop), Network Updates (all network specific updates), and MonoBehavior (updates exposed to MonoBehavior children). The proposed additional network update stages (PreUpdate, FixedUpdate, Update, and PostUpdate) provide this functionality:

- **(Network) PreUpdate:** Things like network tickrate, transport event polling (if supported), and typically anything that requires “beginning of the frame” processing would be invoked at this stage.

- **(Network) FixedUpdate:** Anything that needs to update before any MonoBehaviour.FixedUpdate call is made would occur at this stage (i.e. updating values of rigid bodies could happen here).

- **(Network) Update:** Anything that needs to be updated/processed before any MonoBehavior.Update call is made would occur at this stage (i.e. updating values to systems that might be used prior to any system dependent MonoBehaviour child is updated).

- **(Network) PostUpdate:** Things like sending out queued messages, getting the results of a batched job (i.e. snapshots or the like) would occur here.

![Network Game Update Loop diagram](../../../../static/img/NetworkUpdateLoopStages.png)
