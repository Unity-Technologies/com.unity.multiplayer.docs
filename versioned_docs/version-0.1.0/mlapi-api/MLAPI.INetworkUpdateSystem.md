---  
id: MLAPI.INetworkUpdateSystem  
title: MLAPI.INetworkUpdateSystem
---

<div class="markdown level0 summary">

Defines the required interface of a network update system being executed
by the network update loop.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface INetworkUpdateSystem

## Methods 

### NetworkUpdate(NetworkUpdateStage)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void NetworkUpdate(NetworkUpdateStage updateStage)

#### Parameters

| Type               | Name        | Description |
|--------------------|-------------|-------------|
| NetworkUpdateStage | updateStage |             |

### Extension Methods

<div>

NetworkUpdateLoop.RegisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.RegisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)

</div>

<div>

NetworkUpdateLoop.UnregisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.UnregisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)

</div>
