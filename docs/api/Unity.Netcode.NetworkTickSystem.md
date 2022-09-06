---
id: Unity.Netcode.NetworkTickSystem
title: Unity.Netcode.NetworkTickSystem
---

# Class NetworkTickSystem


Provides discretized time. This is useful for games that require ticks
happening at regular interval on the server and clients.







##### Inheritance


System.Object




NetworkTickSystem






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
public class NetworkTickSystem
```



### Constructors

#### NetworkTickSystem(UInt32, Double, Double)


Creates a new instance of the NetworkTickSystem class.






##### Declaration


``` lang-csharp
public NetworkTickSystem(uint tickRate, double localTimeSec, double serverTimeSec)
```



##### Parameters

| Type          | Name          | Description                          |
|---------------|---------------|--------------------------------------|
| System.UInt32 | tickRate      | The tick rate                        |
| System.Double | localTimeSec  | The initial local time to start at.  |
| System.Double | serverTimeSec | The initial server time to start at. |

### Fields

#### NoTick


Special value to indicate "No tick information"






##### Declaration


``` lang-csharp
public const int NoTick = -2147483648
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Properties

#### LocalTime


The current local time. This is the time at which predicted or client
authoritative objects move. This value is accurate when called in Update
or during the Tick event but does not work correctly for FixedUpdate.






##### Declaration


``` lang-csharp
public NetworkTime LocalTime { get; }
```



##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### ServerTime


The current server time. This value is mostly used for internal purposes
and to interpolate state received from the server. This value is
accurate when called in Update or during the Tick event but does not
work correctly for FixedUpdate.






##### Declaration


``` lang-csharp
public NetworkTime ServerTime { get; }
```



##### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### TickRate


The TickRate of the tick system. This is used to decide how often a
fixed network tick is run.






##### Declaration


``` lang-csharp
public uint TickRate { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### Methods

#### Reset(Double, Double)


Resets the tick system to the given network time.






##### Declaration


``` lang-csharp
public void Reset(double localTimeSec, double serverTimeSec)
```



##### Parameters

| Type          | Name          | Description                 |
|---------------|---------------|-----------------------------|
| System.Double | localTimeSec  | The local time in seconds.  |
| System.Double | serverTimeSec | The server time in seconds. |

#### UpdateTick(Double, Double)


Called after advancing the time system to run ticks based on the
difference in time.






##### Declaration


``` lang-csharp
public void UpdateTick(double localTimeSec, double serverTimeSec)
```



##### Parameters

| Type          | Name          | Description                |
|---------------|---------------|----------------------------|
| System.Double | localTimeSec  | The local time in seconds  |
| System.Double | serverTimeSec | The server time in seconds |

### Events

#### Tick


Gets invoked before every network tick.






##### Declaration


``` lang-csharp
public event Action Tick
```



##### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |



