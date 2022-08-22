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

# Struct NetworkParameterConstants

<div class="markdown level0 summary">

Default NetworkParameter Constants.

</div>

<div class="markdown level0 conceptual">

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
public struct NetworkParameterConstants
```

</div>

### Fields

#### ConnectTimeoutMS

<div class="markdown level1 summary">

The default connection timeout value. This value can be overridden using
the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int ConnectTimeoutMS = 1000
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### DisconnectTimeoutMS

<div class="markdown level1 summary">

The default disconnect timeout attempts value. This value can be
overridden using the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int DisconnectTimeoutMS = 30000
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### DriverDataStreamSize

<div class="markdown level1 summary">

The default size of the DataStreamWriter. This value can be overridden
using the NetworkConfigParameter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int DriverDataStreamSize = 65536
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### HeartbeatTimeoutMS

<div class="markdown level1 summary">

The default inactivity timeout after which a heartbeat is sent. This
This value can be overridden using the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int HeartbeatTimeoutMS = 500
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitialEventQueueSize

<div class="markdown level1 summary">

The default size of the event queue.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int InitialEventQueueSize = 100
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InvalidConnectionId

<div class="markdown level1 summary">

The invalid connection id

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int InvalidConnectionId = -1
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxConnectAttempts

<div class="markdown level1 summary">

The default max connection attempts value. This value can be overridden
using the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int MaxConnectAttempts = 60
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MTU

<div class="markdown level1 summary">

The max size of any packet that can be sent

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int MTU = 1400
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

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
