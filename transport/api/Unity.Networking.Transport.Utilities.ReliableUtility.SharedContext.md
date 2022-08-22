---
id: Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext
title: Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext
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

# Struct ReliableUtility.SharedContext

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
public struct SharedContext
```

</div>

### Fields

#### errorCode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ReliableUtility.ErrorCodes errorCode
```

</div>

##### Field Value

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.ErrorCodes |             |

#### MinimumResendTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MinimumResendTime
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReceivedPackets

<div class="markdown level1 summary">

Context of received packets, last sequence ID received, and ackmask of
received packets. Acked is not used. This is sent back to the remote
peer in the header when sending.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public SequenceBufferContext ReceivedPackets
```

</div>

##### Field Value

| Type                  | Description |
|-----------------------|-------------|
| SequenceBufferContext |             |

#### RemoteTimerDataOffset

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int RemoteTimerDataOffset
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RemoteTimerDataStride

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int RemoteTimerDataStride
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RttInfo

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ReliableUtility.RTTInfo RttInfo
```

</div>

##### Field Value

| Type                    | Description |
|-------------------------|-------------|
| ReliableUtility.RTTInfo |             |

#### SentPackets

<div class="markdown level1 summary">

Context of sent packets, last sequence ID sent (-1), last ID of our sent
packet acknowledged by remote peer, ackmask of acknowledged packets.
This is used when determining if a resend is needed.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public SequenceBufferContext SentPackets
```

</div>

##### Field Value

| Type                  | Description |
|-----------------------|-------------|
| SequenceBufferContext |             |

#### stats

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ReliableUtility.Statistics stats
```

</div>

##### Field Value

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.Statistics |             |

#### TimerDataOffset

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int TimerDataOffset
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### TimerDataStride

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int TimerDataStride
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### WindowSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int WindowSize
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
