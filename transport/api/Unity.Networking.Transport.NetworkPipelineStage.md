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

# Struct NetworkPipelineStage

<div class="markdown level0 summary">

The network pipeline stage

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
public struct NetworkPipelineStage
```

</div>

### Constructors

#### NetworkPipelineStage(TransportFunctionPointer\<NetworkPipelineStage.ReceiveDelegate\>, TransportFunctionPointer\<NetworkPipelineStage.SendDelegate\>, TransportFunctionPointer\<NetworkPipelineStage.InitializeConnectionDelegate\>, Int32, Int32, Int32, Int32, Int32)

<div class="markdown level1 summary">

Initializes a new instance of the NetworkPipelineStage class

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkPipelineStage(TransportFunctionPointer<NetworkPipelineStage.ReceiveDelegate> Receive, TransportFunctionPointer<NetworkPipelineStage.SendDelegate> Send, TransportFunctionPointer<NetworkPipelineStage.InitializeConnectionDelegate> InitializeConnection, int ReceiveCapacity, int SendCapacity, int HeaderCapacity, int SharedStateCapacity, int PayloadCapacity = 0)
```

</div>

##### Parameters

| Type                                                                          | Name                 | Description               |
|-------------------------------------------------------------------------------|----------------------|---------------------------|
| TransportFunctionPointer\<NetworkPipelineStage.ReceiveDelegate\>              | Receive              | The receive               |
| TransportFunctionPointer\<NetworkPipelineStage.SendDelegate\>                 | Send                 | The send                  |
| TransportFunctionPointer\<NetworkPipelineStage.InitializeConnectionDelegate\> | InitializeConnection | The initialize connection |
| System.Int32                                                                  | ReceiveCapacity      | The receive capacity      |
| System.Int32                                                                  | SendCapacity         | The send capacity         |
| System.Int32                                                                  | HeaderCapacity       | The header capacity       |
| System.Int32                                                                  | SharedStateCapacity  | The shared state capacity |
| System.Int32                                                                  | PayloadCapacity      | The payload capacity      |

### Fields

#### HeaderCapacity

<div class="markdown level1 summary">

The header capacity

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int HeaderCapacity
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitializeConnection

<div class="markdown level1 summary">

InitializeConnection function pointer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.InitializeConnectionDelegate> InitializeConnection
```

</div>

##### Field Value

| Type                                                                          | Description |
|-------------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkPipelineStage.InitializeConnectionDelegate\> |             |

#### PayloadCapacity

<div class="markdown level1 summary">

The payload capacity

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int PayloadCapacity
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Receive

<div class="markdown level1 summary">

Receive function pointer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.ReceiveDelegate> Receive
```

</div>

##### Field Value

| Type                                                             | Description |
|------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkPipelineStage.ReceiveDelegate\> |             |

#### ReceiveCapacity

<div class="markdown level1 summary">

The receive capacity

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int ReceiveCapacity
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Send

<div class="markdown level1 summary">

Send function pointer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.SendDelegate> Send
```

</div>

##### Field Value

| Type                                                          | Description |
|---------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkPipelineStage.SendDelegate\> |             |

#### SendCapacity

<div class="markdown level1 summary">

The send capacity

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int SendCapacity
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SharedStateCapacity

<div class="markdown level1 summary">

The shared state capacity

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int SharedStateCapacity
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
