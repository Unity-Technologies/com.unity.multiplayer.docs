---  
id: MLAPI  
title: MLAPI  
---

## Namespace MLAPI

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### MLAPI.NetworkBehaviour

<div class="section">

The base class to override to write network code. Inherits MonoBehaviour

</div>

### MLAPI.NetworkManager

<div class="section">

The main component of the library

</div>

### MLAPI.NetworkObject

<div class="section">

A component used to identify that a GameObject in the network

</div>

### MLAPI.NetworkTickSystem

<div class="section">

</div>

### MLAPI.NetworkUpdateLoop

<div class="section">

Represents the network update loop injected into low-level player loop
in Unity.

</div>

### MLAPI.SnapshotSystem

<div class="section">

</div>

## Interfaces

### MLAPI.INetworkUpdateSystem

<div class="section">

Defines the required interface of a network update system being executed
by the network update loop.

</div>

## Enums

### MLAPI.NetworkUpdateStage

<div class="section">

Defines network update stages being executed by the network update loop.

</div>

## Delegates

### MLAPI.NetworkManager.ConnectionApprovedDelegate

<div class="section">

Delegate type called when connection has been approved. This only has to
be set on the server.

</div>

### MLAPI.NetworkObject.SpawnDelegate

<div class="section">

Delegate type for checking spawn options

</div>

### MLAPI.NetworkObject.VisibilityDelegate

<div class="section">

Delegate type for checking visibility

</div>
