---  
id: Unity.Netcode.NetworkTimeSystem  
title: Unity.Netcode.NetworkTimeSystem  
---

<div class="markdown level0 summary">

NetworkTimeSystem is a standalone system which can be used to run a
network time simulation. The network time system maintains both a local
and a server time. The local time is based on

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkTimeSystem

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

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NetworkTimeSystem
```

</div>

### Constructors

#### NetworkTimeSystem(Double, Double, Double, Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTimeSystem(double localBufferSec, double serverBufferSec, double hardResetThresholdSec, double adjustmentRatio = 0.01)
```

</div>

##### Parameters

| Type          | Name                  | Description |
|---------------|-----------------------|-------------|
| System.Double | localBufferSec        |             |
| System.Double | serverBufferSec       |             |
| System.Double | hardResetThresholdSec |             |
| System.Double | adjustmentRatio       |             |

### Properties

#### AdjustmentRatio

<div class="markdown level1 summary">

Gets or sets the ratio at which the NetworkTimeSystem speeds up or slows
down time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public double AdjustmentRatio { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### HardResetThresholdSec

<div class="markdown level1 summary">

Gets or sets a threshold in seconds used to force a hard catchup of
network time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public double HardResetThresholdSec { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### LocalBufferSec

<div class="markdown level1 summary">

Gets or sets the amount of time in seconds the server should buffer
incoming client messages. This increases the difference between local
and server time so that messages arrive earlier on the server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public double LocalBufferSec { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### LocalTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public double LocalTime { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### ServerBufferSec

<div class="markdown level1 summary">

Gets or sets the amount of the time in seconds the client should buffer
incoming messages from the server. This increases server time. A higher
value increases latency but makes the game look more smooth in bad
networking conditions. This value must be higher than the tick length
client side.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public double ServerBufferSec { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### ServerTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public double ServerTime { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

### Methods

#### Advance(Double)

<div class="markdown level1 summary">

Advances the time system by a certain amount of time. Should be called
once per frame with Time.deltaTime or similar.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Advance(double deltaTimeSec)
```

</div>

##### Parameters

| Type          | Name         | Description                                                                               |
|---------------|--------------|-------------------------------------------------------------------------------------------|
| System.Double | deltaTimeSec | The amount of time to advance. The delta time which passed since Advance was last called. |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Reset(Double, Double)

<div class="markdown level1 summary">

Resets the time system to a time based on the given network parameters.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Reset(double serverTimeSec, double rttSec)
```

</div>

##### Parameters

| Type          | Name          | Description                                                    |
|---------------|---------------|----------------------------------------------------------------|
| System.Double | serverTimeSec | The most recent server time value received in seconds.         |
| System.Double | rttSec        | The current RTT in seconds. Can be an averaged or a raw value. |

#### ServerTimeSystem()

<div class="markdown level1 summary">

Creates a new instance of the NetworkTimeSystem class for a server
instance. The server will not apply any buffer values which ensures that
local time equals server time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkTimeSystem ServerTimeSystem()
```

</div>

##### Returns

| Type              | Description   |
|-------------------|---------------|
| NetworkTimeSystem | The instance. |

#### Sync(Double, Double)

<div class="markdown level1 summary">

Synchronizes the time system with up-to-date network statistics but does
not change any time values or advance the time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Sync(double serverTimeSec, double rttSec)
```

</div>

##### Parameters

| Type          | Name          | Description                                                    |
|---------------|---------------|----------------------------------------------------------------|
| System.Double | serverTimeSec | The most recent server time value received in seconds.         |
| System.Double | rttSec        | The current RTT in seconds. Can be an averaged or a raw value. |

 
