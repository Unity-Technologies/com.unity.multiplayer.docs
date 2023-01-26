---
id: Unity.Netcode.NetworkUpdateLoop
title: Unity.Netcode.NetworkUpdateLoop
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:34 pm
---

<div class="markdown level0 summary">

Represents the network update loop injected into low-level player loop in Unity.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public static class NetworkUpdateLoop
```

## Fields

### UpdateStage

<div class="markdown level1 summary">

The current network update stage being executed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkUpdateStage UpdateStage
```

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

``` lang-csharp
public static void RegisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)
```

#### Parameters

| Type                 | Name         | Description                                                                 |
|----------------------|--------------|-----------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to register for all network updates |

### RegisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)

<div class="markdown level1 summary">

Registers a network update system to be executed in a specific network

update stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void RegisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
```

#### Parameters

| Type                 | Name         | Description                                                                         |
|----------------------|--------------|-------------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to register for all network updates         |
| NetworkUpdateStage   | updateStage  | The NetworkUpdateStage being registered for the INetworkUpdateSystem implementation |

### UnregisterAllNetworkUpdates(INetworkUpdateSystem)

<div class="markdown level1 summary">

Unregisters a network update system from all network update stages.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void UnregisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)
```

#### Parameters

| Type                 | Name         | Description                                                                    |
|----------------------|--------------|--------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to deregister from all network updates |

### UnregisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)

<div class="markdown level1 summary">

Unregisters a network update system from a specific network update

stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void UnregisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
```

#### Parameters

| Type                 | Name         | Description                                                                            |
|----------------------|--------------|----------------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to deregister from all network updates         |
| NetworkUpdateStage   | updateStage  | The NetworkUpdateStage to be deregistered from the INetworkUpdateSystem implementation |
