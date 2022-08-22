---
id: Unity.Netcode.NetworkUpdateLoop
title: Unity.Netcode.NetworkUpdateLoop
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Class NetworkUpdateLoop

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

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

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

| Type                 | Name         | Description                                                                 |
|----------------------|--------------|-----------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to register for all network updates |

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

| Type                 | Name         | Description                                                                         |
|----------------------|--------------|-------------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to register for all network updates         |
| NetworkUpdateStage   | updateStage  | The NetworkUpdateStage being registered for the INetworkUpdateSystem implementation |

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

| Type                 | Name         | Description                                                                    |
|----------------------|--------------|--------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to deregister from all network updates |

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

| Type                 | Name         | Description                                                                            |
|----------------------|--------------|----------------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to deregister from all network updates         |
| NetworkUpdateStage   | updateStage  | The NetworkUpdateStage to be deregistered from the INetworkUpdateSystem implementation |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
