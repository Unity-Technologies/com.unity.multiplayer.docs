---
id: Unity.Netcode.NetworkTimeSystem
title: Unity.Netcode.NetworkTimeSystem
---

# Class NetworkTimeSystem


NetworkTimeSystem is a standalone system which can be used to run a
network time simulation. The network time system maintains both a local
and a server time. The local time is based on







##### Inheritance


System.Object




NetworkTimeSystem






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class NetworkTimeSystem
```



### Constructors

#### NetworkTimeSystem(Double, Double, Double, Double)


The constructor class for NetworkTickSystem






##### Declaration


``` lang-csharp
public NetworkTimeSystem(double localBufferSec, double serverBufferSec, double hardResetThresholdSec, double adjustmentRatio = 0.01)
```



##### Parameters

| Type          | Name                  | Description                                                                                   |
|---------------|-----------------------|-----------------------------------------------------------------------------------------------|
| System.Double | localBufferSec        | The amount of time, in seconds, the server should buffer incoming client messages.            |
| System.Double | serverBufferSec       | The amount of the time in seconds the client should buffer incoming messages from the server. |
| System.Double | hardResetThresholdSec | The threshold, in seconds, used to force a hard catchup of network time.                      |
| System.Double | adjustmentRatio       | The ratio at which the NetworkTimeSystem speeds up or slows down time.                        |

### Properties

#### AdjustmentRatio


Gets or sets the ratio at which the NetworkTimeSystem speeds up or slows
down time.






##### Declaration


``` lang-csharp
public double AdjustmentRatio { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### HardResetThresholdSec


Gets or sets a threshold in seconds used to force a hard catchup of
network time.






##### Declaration


``` lang-csharp
public double HardResetThresholdSec { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### LocalBufferSec


Gets or sets the amount of time in seconds the server should buffer
incoming client messages. This increases the difference between local
and server time so that messages arrive earlier on the server.






##### Declaration


``` lang-csharp
public double LocalBufferSec { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### LocalTime


The current local time with the local time offset applied






##### Declaration


``` lang-csharp
public double LocalTime { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### ServerBufferSec


Gets or sets the amount of the time in seconds the client should buffer
incoming messages from the server. This increases server time. A higher
value increases latency but makes the game look more smooth in bad
networking conditions. This value must be higher than the tick length
client side.






##### Declaration


``` lang-csharp
public double ServerBufferSec { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### ServerTime


The current server time with the server time offset applied






##### Declaration


``` lang-csharp
public double ServerTime { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

### Methods

#### Advance(Double)


Advances the time system by a certain amount of time. Should be called
once per frame with Time.deltaTime or similar.






##### Declaration


``` lang-csharp
public bool Advance(double deltaTimeSec)
```



##### Parameters

| Type          | Name         | Description                                                                               |
|---------------|--------------|-------------------------------------------------------------------------------------------|
| System.Double | deltaTimeSec | The amount of time to advance. The delta time which passed since Advance was last called. |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Reset(Double, Double)


Resets the time system to a time based on the given network parameters.






##### Declaration


``` lang-csharp
public void Reset(double serverTimeSec, double rttSec)
```



##### Parameters

| Type          | Name          | Description                                                    |
|---------------|---------------|----------------------------------------------------------------|
| System.Double | serverTimeSec | The most recent server time value received in seconds.         |
| System.Double | rttSec        | The current RTT in seconds. Can be an averaged or a raw value. |

#### ServerTimeSystem()


Creates a new instance of the NetworkTimeSystem class for a server
instance. The server will not apply any buffer values which ensures that
local time equals server time.






##### Declaration


``` lang-csharp
public static NetworkTimeSystem ServerTimeSystem()
```



##### Returns

| Type              | Description   |
|-------------------|---------------|
| NetworkTimeSystem | The instance. |

#### Sync(Double, Double)


Synchronizes the time system with up-to-date network statistics but does
not change any time values or advance the time.






##### Declaration


``` lang-csharp
public void Sync(double serverTimeSec, double rttSec)
```



##### Parameters

| Type          | Name          | Description                                                    |
|---------------|---------------|----------------------------------------------------------------|
| System.Double | serverTimeSec | The most recent server time value received in seconds.         |
| System.Double | rttSec        | The current RTT in seconds. Can be an averaged or a raw value. |



