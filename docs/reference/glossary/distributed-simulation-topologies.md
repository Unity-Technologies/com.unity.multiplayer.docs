---
id: distributed-simulation-topologies
title: Distributed Simulation Topologies
sidebar_label: Distributed Simulation Topologies
---


## Dedicated game server (DGS)

A client-server network implementation where the server is hosted on dedicated compute – i.e., separately from the client devices. This option is expensive, but scalable and secure.

## Listen server

(often referred as client-host or host mode) 
A client-server implementation where the server process runs in conjection with the client on a client device. It’s inexpensive, but not scalable and not secure.

## Deterministic lockstep 

A P2P implementation where only inputs are sent to all other players and synchronized in a “locked step” (i.e., synced for the same simulation tick all at once), and determinism on each client ensures that they all stay at the same state. This system is inexpensive and secure, but with complex determinism. This system is not scalable and all players must always know the entire game state which makes it insecure for some game genres.
