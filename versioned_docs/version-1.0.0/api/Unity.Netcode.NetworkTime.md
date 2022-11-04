---
id: Unity.Netcode.NetworkTime
title: Unity.Netcode.NetworkTime
---

# Struct NetworkTime


A struct to represent a point of time in a networked game. Time is
stored as a combination of amount of passed ticks + a duration offset.
This struct is meant to replace the Unity Time API for multiplayer
gameplay.







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct NetworkTime
```



### Constructors

#### NetworkTime(UInt32)


Creates a new instance of the NetworkTime struct.






##### Declaration


``` lang-csharp
public NetworkTime(uint tickRate)
```



##### Parameters

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt32 | tickRate | The tickrate. |

#### NetworkTime(UInt32, Double)


Creates a new instance of the NetworkTime struct.






##### Declaration


``` lang-csharp
public NetworkTime(uint tickRate, double timeSec)
```



##### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt32 | tickRate | The tickrate.              |
| System.Double | timeSec  | The time value as a float. |

#### NetworkTime(UInt32, Int32, Double)


Creates a new instance of the NetworkTime struct.






##### Declaration


``` lang-csharp
public NetworkTime(uint tickRate, int tick, double tickOffset = 0)
```



##### Parameters

| Type          | Name       | Description                                                                                                  |
|---------------|------------|--------------------------------------------------------------------------------------------------------------|
| System.UInt32 | tickRate   | The tickrate.                                                                                                |
| System.Int32  | tick       | The time will be created with a value where this many tick have already passed.                              |
| System.Double | tickOffset | Can be used to create a NetworkTime with a non fixed time value by adding an offset to the given tick value. |

### Properties

#### FixedDeltaTime


Gets the fixed delta time. This value is based on the TickRate and stays
constant. Similar to There is no equivalent to






##### Declaration


``` lang-csharp
public readonly float FixedDeltaTime { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### FixedTime


Gets he current fixed network time. This is the time value of the last
network tick. Similar to






##### Declaration


``` lang-csharp
public readonly double FixedTime { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### Tick


Gets the amount of network ticks which have passed until reaching the
current time value.






##### Declaration


``` lang-csharp
public readonly int Tick { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### TickOffset


Gets the amount of time which has passed since the last network tick.






##### Declaration


``` lang-csharp
public readonly double TickOffset { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### TickRate


Gets the tickrate of the system of this NetworkTime. Ticks per second.






##### Declaration


``` lang-csharp
public readonly uint TickRate { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### Time


Gets the current time. This is a non fixed time value and similar to






##### Declaration


``` lang-csharp
public readonly double Time { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### TimeAsFloat


Gets the current time as a float.






##### Declaration


``` lang-csharp
public readonly float TimeAsFloat { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### Methods

#### TimeTicksAgo(Int32)


Returns the time a number of ticks in the past.






##### Declaration


``` lang-csharp
public NetworkTime TimeTicksAgo(int ticks)
```



##### Parameters

| Type         | Name  | Description                                     |
|--------------|-------|-------------------------------------------------|
| System.Int32 | ticks | The number of ticks ago we're querying the time |

##### Returns

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

#### ToFixedTime()


Converts the network time into a fixed time value.






##### Declaration


``` lang-csharp
public NetworkTime ToFixedTime()
```



##### Returns

| Type        | Description                                                       |
|-------------|-------------------------------------------------------------------|
| NetworkTime | A NetworkTime where Time is the FixedTime value of this instance. |

### Operators

#### Addition(NetworkTime, Double)


Computes the time a number of seconds later






##### Declaration


``` lang-csharp
public static NetworkTime operator +(NetworkTime a, double b)
```



##### Parameters

| Type          | Name | Description                  |
|---------------|------|------------------------------|
| NetworkTime   | a    | The start time               |
| System.Double | b    | The number of seconds to add |

##### Returns

| Type        | Description        |
|-------------|--------------------|
| NetworkTime | The resulting time |

#### Addition(NetworkTime, NetworkTime)


Computes the sum of two times






##### Declaration


``` lang-csharp
public static NetworkTime operator +(NetworkTime a, NetworkTime b)
```



##### Parameters

| Type        | Name | Description |
|-------------|------|-------------|
| NetworkTime | a    | First time  |
| NetworkTime | b    | Second time |

##### Returns

| Type        | Description                        |
|-------------|------------------------------------|
| NetworkTime | The sum of the two times passed in |

#### Subtraction(NetworkTime, Double)


Computes the time a number of seconds before






##### Declaration


``` lang-csharp
public static NetworkTime operator -(NetworkTime a, double b)
```



##### Parameters

| Type          | Name | Description                     |
|---------------|------|---------------------------------|
| NetworkTime   | a    | The start time                  |
| System.Double | b    | The number of seconds to remove |

##### Returns

| Type        | Description        |
|-------------|--------------------|
| NetworkTime | The resulting time |

#### Subtraction(NetworkTime, NetworkTime)


Computes the time difference between two ticks






##### Declaration


``` lang-csharp
public static NetworkTime operator -(NetworkTime a, NetworkTime b)
```



##### Parameters

| Type        | Name | Description |
|-------------|------|-------------|
| NetworkTime | a    | End time    |
| NetworkTime | b    | Start time  |

##### Returns

| Type        | Description                               |
|-------------|-------------------------------------------|
| NetworkTime | The time difference between start and end |



