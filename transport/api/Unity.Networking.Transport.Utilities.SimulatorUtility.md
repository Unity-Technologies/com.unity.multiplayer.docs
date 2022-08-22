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

# Struct SimulatorUtility

<div class="markdown level0 summary">

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

###### **Namespace**: Unity.Networking.Transport.Utilities

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct SimulatorUtility
```

</div>

### Constructors

#### SimulatorUtility(Int32, Int32, Int32, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public SimulatorUtility(int packetCount, int maxPacketSize, int packetDelayMs, int packetJitterMs)
```

</div>

##### Parameters

| Type         | Name           | Description |
|--------------|----------------|-------------|
| System.Int32 | packetCount    |             |
| System.Int32 | maxPacketSize  |             |
| System.Int32 | packetDelayMs  |             |
| System.Int32 | packetJitterMs |             |

### Methods

#### DelayPacket(ref NetworkPipelineContext, InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool DelayPacket(ref NetworkPipelineContext ctx, InboundSendBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, long timestamp)
```

</div>

##### Parameters

| Type                          | Name          | Description |
|-------------------------------|---------------|-------------|
| NetworkPipelineContext        | ctx           |             |
| InboundSendBuffer             | inboundBuffer |             |
| NetworkPipelineStage.Requests | requests      |             |
| System.Int64                  | timestamp     |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### FuzzPacket(SimulatorUtility.Context\*, ref InboundSendBuffer)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void FuzzPacket(SimulatorUtility.Context*ctx, ref InboundSendBuffer inboundBuffer)
```

</div>

##### Parameters

| Type                       | Name          | Description |
|----------------------------|---------------|-------------|
| SimulatorUtility.Context\* | ctx           |             |
| InboundSendBuffer          | inboundBuffer |             |

#### GetDelayedPacket(ref NetworkPipelineContext, ref InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool GetDelayedPacket(ref NetworkPipelineContext ctx, ref InboundSendBuffer delayedPacket, ref NetworkPipelineStage.Requests requests, long currentTimestamp)
```

</div>

##### Parameters

| Type                          | Name             | Description |
|-------------------------------|------------------|-------------|
| NetworkPipelineContext        | ctx              |             |
| InboundSendBuffer             | delayedPacket    |             |
| NetworkPipelineStage.Requests | requests         |             |
| System.Int64                  | currentTimestamp |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### GetEmptyDataSlot(Byte\*, ref Int32, ref Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool GetEmptyDataSlot(byte *processBufferPtr, ref int packetPayloadOffset, ref int packetDataOffset)
```

</div>

##### Parameters

| Type          | Name                | Description |
|---------------|---------------------|-------------|
| System.Byte\* | processBufferPtr    |             |
| System.Int32  | packetPayloadOffset |             |
| System.Int32  | packetDataOffset    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### InitializeContext(SimulatorUtility.Parameters, Byte\*)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void InitializeContext(SimulatorUtility.Parameters param, byte *sharedProcessBuffer)
```

</div>

##### Parameters

| Type                        | Name                | Description |
|-----------------------------|---------------------|-------------|
| SimulatorUtility.Parameters | param               |             |
| System.Byte\*               | sharedProcessBuffer |             |

#### ShouldDropPacket(SimulatorUtility.Context\*, SimulatorUtility.Parameters, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool ShouldDropPacket(SimulatorUtility.Context*ctx, SimulatorUtility.Parameters param, long timestamp)
```

</div>

##### Parameters

| Type                        | Name      | Description |
|-----------------------------|-----------|-------------|
| SimulatorUtility.Context\*  | ctx       |             |
| SimulatorUtility.Parameters | param     |             |
| System.Int64                | timestamp |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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
