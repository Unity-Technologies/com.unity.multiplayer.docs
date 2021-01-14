---
id: network-latency-management
title: Network Latency Management
sidebar_label: Network Latency Management
---

## Server rewind



## Interpolation

Creates new states between two known states.

A ------> B

Works by taking two old but known positions and moving the object between them. 

## Extrapolation


A ---- B -----> 



Works by taking the last known position, rotation and velocity of a game object, and tries to predict where the game object is going to be in the future.

## Action casting

Server driven action, but with client-side “casting” animations and sounds that respond to client inputs. This is to get responsiveness while still keeping the action server driven.

## Client prediction:

- **Deterministic rollback:**
  An enhancement of deterministic lockstep where clients forward-predict inputs while waiting for updates. This setup is more complex but enables a more responsive game than lockstep. It’s relatively inexpensive and secure, but with very complex determinism and simulation.

- **Input prediction:**
(and reconciliation to correct differences between client and server) TODO

- **Ghost prediction**
Client side prediction where input isn’t involved. For example, knowing an AI’s state at frame i, we can predict its state at time i+1 assuming it’s deterministic enough to run the same both client side and server side.
     

## Latency

(https://en.wikipedia.org/wiki/Latency_(engineering)) 
time delay between the cause and the effect of some physical change in the system being observed.
Network time between sending a packet and receiving that packet.

## Lag

Perception felt by an end user that there are delays to their inputs, often caused by network latency. 

## Jitter

Variations in latency

## RTT

Latency A → B + frame calculation time + B → A

Round Trip Time. 

## Ping

A → B + B → A

Round Trip Time without frame calculation. 
