---
id: Unity.Netcode.NetworkTickSystem
title: Unity.Netcode.NetworkTickSystem
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

# Class NetworkTickSystem

<div class="markdown level0 summary">

Provides discretized time. This is useful for games that require ticks
happening at regular interval on the server and clients.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkTickSystem

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
public class NetworkTickSystem
```

</div>

### Constructors

#### NetworkTickSystem(UInt32, Double, Double)

<div class="markdown level1 summary">

Creates a new instance of the NetworkTickSystem class.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTickSystem(uint tickRate, double localTimeSec, double serverTimeSec)
```

</div>

##### Parameters

| Type          | Name          | Description                          |
|---------------|---------------|--------------------------------------|
| System.UInt32 | tickRate      | The tick rate                        |
| System.Double | localTimeSec  | The initial local time to start at.  |
| System.Double | serverTimeSec | The initial server time to start at. |

### Fields

#### NoTick

<div class="markdown level1 summary">

Special value to indicate "No tick information"

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int NoTick = -2147483648
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Properties

#### LocalTime

<div class="markdown level1 summary">

The current local time. This is the time at which predicted or client
authoritative objects move. This value is accurate when called in Update
or during the Tick event but does not work correctly for FixedUpdate.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTime LocalTime { get; }
```

</div>

##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### ServerTime

<div class="markdown level1 summary">

The current server time. This value is mostly used for internal purposes
and to interpolate state received from the server. This value is
accurate when called in Update or during the Tick event but does not
work correctly for FixedUpdate.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTime ServerTime { get; }
```

</div>

##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### TickRate

<div class="markdown level1 summary">

The TickRate of the tick system. This is used to decide how often a
fixed network tick is run.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public uint TickRate { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### Methods

#### Reset(Double, Double)

<div class="markdown level1 summary">

Resets the tick system to the given network time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Reset(double localTimeSec, double serverTimeSec)
```

</div>

##### Parameters

| Type          | Name          | Description                 |
|---------------|---------------|-----------------------------|
| System.Double | localTimeSec  | The local time in seconds.  |
| System.Double | serverTimeSec | The server time in seconds. |

#### UpdateTick(Double, Double)

<div class="markdown level1 summary">

Called after advancing the time system to run ticks based on the
difference in time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void UpdateTick(double localTimeSec, double serverTimeSec)
```

</div>

##### Parameters

| Type          | Name          | Description                |
|---------------|---------------|----------------------------|
| System.Double | localTimeSec  | The local time in seconds  |
| System.Double | serverTimeSec | The server time in seconds |

### Events

#### Tick

<div class="markdown level1 summary">

Gets invoked before every network tick.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public event Action Tick
```

</div>

##### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |

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
