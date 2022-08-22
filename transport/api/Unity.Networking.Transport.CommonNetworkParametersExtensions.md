---
id: Unity.Networking.Transport.CommonNetworkParametersExtensions
title: Unity.Networking.Transport.CommonNetworkParametersExtensions
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

# Class CommonNetworkParametersExtensions

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

CommonNetworkParametersExtensions

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

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public static class CommonNetworkParametersExtensions
```

</div>

### Methods

#### GetDataStreamParameters(ref NetworkSettings)

<div class="markdown level1 summary">

Gets the NetworkDataStreamParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkDataStreamParameter GetDataStreamParameters(this ref NetworkSettings settings)
```

</div>

##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                       | Description                                                           |
|----------------------------|-----------------------------------------------------------------------|
| NetworkDataStreamParameter | Returns the NetworkDataStreamParameter values for the NetworkSettings |

#### GetNetworkConfigParameters(ref NetworkSettings)

<div class="markdown level1 summary">

Gets the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkConfigParameter GetNetworkConfigParameters(this ref NetworkSettings settings)
```

</div>

##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                   | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| NetworkConfigParameter | Returns the NetworkConfigParameter values for the NetworkSettings |

#### WithDataStreamParameters(ref NetworkSettings, Int32)

<div class="markdown level1 summary">

Sets the NetworkDataStreamParameter values for the NetworkSettings

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static ref NetworkSettings WithDataStreamParameters(this ref NetworkSettings settings, int size = 0)
```

</div>

##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |
| System.Int32    | size     | size        |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |

#### WithNetworkConfigParameters(ref NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32)

<div class="markdown level1 summary">

Sets the NetworkConfigParameter values for the NetworkSettings

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static ref NetworkSettings WithNetworkConfigParameters(this ref NetworkSettings settings, int connectTimeoutMS = 1000, int maxConnectAttempts = 60, int disconnectTimeoutMS = 30000, int heartbeatTimeoutMS = 500, int maxFrameTimeMS = 0, int fixedFrameTimeMS = 0)
```

</div>

##### Parameters

| Type            | Name                | Description         |
|-----------------|---------------------|---------------------|
| NetworkSettings | settings            |                     |
| System.Int32    | connectTimeoutMS    | connectTimeoutMS    |
| System.Int32    | maxConnectAttempts  | maxConnectAttempts  |
| System.Int32    | disconnectTimeoutMS | disconnectTimeoutMS |
| System.Int32    | heartbeatTimeoutMS  | heartbeatTimeoutMS  |
| System.Int32    | maxFrameTimeMS      | maxFrameTimeMS      |
| System.Int32    | fixedFrameTimeMS    | fixedFrameTimeMS    |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |

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
