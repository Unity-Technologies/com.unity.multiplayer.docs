---
id: Unity.Netcode.INetworkUpdateSystem
title: Unity.Netcode.INetworkUpdateSystem
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:02 pm
---

<div class="markdown level0 summary">

Defines the required interface of a network update system being executed by the NetworkUpdateLoop.

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public interface INetworkUpdateSystem
```

## Methods

### NetworkUpdate(NetworkUpdateStage)

<div class="markdown level1 summary">

The update method that is being executed in the context of related NetworkUpdateStage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void NetworkUpdate(NetworkUpdateStage updateStage)
```

#### Parameters

| Type               | Name        | Description                                    |
|--------------------|-------------|------------------------------------------------|
| NetworkUpdateStage | updateStage | The NetworkUpdateStage that is being executed. |

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
