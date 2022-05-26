---  
id: Unity.Netcode.NetworkUpdateLoop  
title: Unity.Netcode.NetworkUpdateLoop  
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

System.Object

</div>

<div class="level1">

NetworkUpdateLoop

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public static class NetworkUpdateLoop
```

</div>

### Fields

#### UpdateStage

<div class="markdown level1 summary">

The current network update stage being executed.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkUpdateStage UpdateStage
```

</div>

##### Field Value

| Type               | Description |
|--------------------|-------------|
| NetworkUpdateStage |             |

### Methods

#### RegisterAllNetworkUpdates(INetworkUpdateSystem)

<div class="markdown level1 summary">

Registers a network update system to be executed in all network update
stages.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void RegisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)
```

</div>

##### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |

#### RegisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)

<div class="markdown level1 summary">

Registers a network update system to be executed in a specific network
update stage.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void RegisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
```

</div>

##### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |
| NetworkUpdateStage   | updateStage  |             |

#### UnregisterAllNetworkUpdates(INetworkUpdateSystem)

<div class="markdown level1 summary">

Unregisters a network update system from all network update stages.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void UnregisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)
```

</div>

##### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |

#### UnregisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)

<div class="markdown level1 summary">

Unregisters a network update system from a specific network update
stage.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void UnregisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
```

</div>

##### Parameters

| Type                 | Name         | Description |
|----------------------|--------------|-------------|
| INetworkUpdateSystem | updateSystem |             |
| NetworkUpdateStage   | updateStage  |             |

 
