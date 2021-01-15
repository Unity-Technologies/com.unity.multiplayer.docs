---
id: distributed-simulation-topologies
title: Distributed Simulation Topologies
sidebar_label: Distributed Simulation Topologies
---


### Dedicated game server (DGS)

A client-server network implementation where the server is hosted on dedicated compute – i.e., separately from the client devices. 

### Listen server

(often referred as client-host or host mode) 
A client-server implementation where the server process runs in conjection with the client on a client device. It’s inexpensive, but not scalable and not secure.

### Deterministic lockstep 

A P2P implementation where only inputs are sent to all other players and synchronized in a “locked step” (i.e., synced for the same simulation tick all at once), and determinism on each client ensures that they all stay at the same state. 


### Deterministic rollback

An enhancement of deterministic lockstep where clients forward-predict inputs while waiting for updates. 
