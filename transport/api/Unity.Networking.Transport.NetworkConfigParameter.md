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

# Struct NetworkConfigParameter

<div class="markdown level0 summary">

The NetworkConfigParameter is used to set specific parameters that the
driver uses.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkParameter

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkConfigParameter : INetworkParameter
```

</div>

### Fields

#### connectTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds indicating how long we will wait until we send
a new connection attempt.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int connectTimeoutMS
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### disconnectTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds indicating how long we will wait for a
connection event, before we disconnect it.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int disconnectTimeoutMS
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

The connection needs to receive data from the connected endpoint within
this timeout. Note that with heartbeats enabled (heartbeatTimeoutMS \>
0), simply not sending any data will not be enough to trigger this
timeout (since heartbeats count as connection events).

</div>

#### fixedFrameTimeMS

<div class="markdown level1 summary">

A fixed amount of time to use for an interval between ScheduleUpdate.
This is used instead of a clock.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int fixedFrameTimeMS
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

The main use for this parameter is tests where determinism is more
important than correctness.

</div>

#### heartbeatTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds after which a heartbeat is sent if there is no
activity.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int heartbeatTimeoutMS
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### maxConnectAttempts

<div class="markdown level1 summary">

The maximum amount of connection attempts we will try before
disconnecting.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int maxConnectAttempts
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### maxFrameTimeMS

<div class="markdown level1 summary">

The maximum amount of time a single frame can advance timeout values.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int maxFrameTimeMS
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

The main use for this parameter is to not get disconnects at frame
spikes when both endpoints lives in the same process.

</div>

### Methods

#### Validate()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Validate()
```

</div>

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

INetworkParameter

</div>

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
