---  
id: Unity.Networking.Transport.NetworkConfigParameter  
title: Unity.Networking.Transport.NetworkConfigParameter  
---

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

<div>

IValidatableNetworkParameter

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkConfigParameter : INetworkParameter, IValidatableNetworkParameter
```

## 

### connectTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds indicating how long we will wait until we send
a new connection attempt.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int connectTimeoutMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### disconnectTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds indicating how long we will wait for a
connection event, before we disconnect it.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int disconnectTimeoutMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The connection needs to receive data from the connected endpoint within
this timeout. Note that with heartbeats enabled (heartbeatTimeoutMS \>
0), simply not sending any data will not be enough to trigger this
timeout (since heartbeats count as connection events).

</div>

### fixedFrameTimeMS

<div class="markdown level1 summary">

A fixed amount of time to use for an interval between ScheduleUpdate.
This is used instead of a clock.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int fixedFrameTimeMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The main use for this parameter is tests where determinism is more
important than correctness.

</div>

### heartbeatTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds after which a heartbeat is sent if there is no
activity.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int heartbeatTimeoutMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### maxConnectAttempts

<div class="markdown level1 summary">

The maximum amount of connection attempts we will try before
disconnecting.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int maxConnectAttempts
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### maxFrameTimeMS

<div class="markdown level1 summary">

The maximum amount of time a single frame can advance timeout values.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int maxFrameTimeMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The main use for this parameter is to not get disconnects at frame
spikes when both endpoints lives in the same process.

</div>

### reconnectionTimeoutMS

<div class="markdown level1 summary">

A timeout in milliseconds after which reconnection is attempted if there
is no activity.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int reconnectionTimeoutMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Validate()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Validate()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

INetworkParameter

</div>

<div>

IValidatableNetworkParameter

</div>
