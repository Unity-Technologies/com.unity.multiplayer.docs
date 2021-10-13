---  
id: MLAPI.NetworkUpdateLoop  
title: MLAPI.NetworkUpdateLoop  
---

<div class="markdown level0 summary">

Represents the network update loop injected into low-level player loop
in Unity.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class NetworkUpdateLoop

## Fields

### UpdateStage

<div class="markdown level1 summary">

The current network update stage being executed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static NetworkUpdateStage UpdateStage

#### Field Value

| Type               | Description |
|--------------------|-------------|
| NetworkUpdateStage |             |

## Methods 

### RegisterAllNetworkUpdates(INetworkUpdateSystem)

<div class="markdown level1 summary">

Registers a network update system to be executed in all network update
stages.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RegisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)

#### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |

### RegisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)

<div class="markdown level1 summary">

Registers a network update system to be executed in a specific network
update stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RegisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)

#### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |
| NetworkUpdateStage   | updateStage  |             |

### UnregisterAllNetworkUpdates(INetworkUpdateSystem)

<div class="markdown level1 summary">

Unregisters a network update system from all network update stages.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void UnregisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)

#### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |

### UnregisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)

<div class="markdown level1 summary">

Unregisters a network update system from a specific network update
stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void UnregisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)

#### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |
| NetworkUpdateStage   | updateStage  |             |
