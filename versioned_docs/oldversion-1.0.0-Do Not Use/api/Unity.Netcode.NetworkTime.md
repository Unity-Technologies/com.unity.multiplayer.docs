---  
id: Unity.Netcode.NetworkTime  
title: Unity.Netcode.NetworkTime  
---

<div class="markdown level0 summary">

A struct to represent a point of time in a networked game. Time is
stored as a combination of amount of passed ticks + a duration offset.
This struct is meant to replace the Unity Time API for multiplayer
gameplay.

</div>

<div class="markdown level0 conceptual">

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

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public struct NetworkTime
```

## 

### NetworkTime(UInt32)

<div class="markdown level1 summary">

Creates a new instance of the NetworkTime struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime(uint tickRate)
```

#### Parameters

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt32 | tickRate | The tickrate. |

### NetworkTime(UInt32, Double)

<div class="markdown level1 summary">

Creates a new instance of the NetworkTime struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime(uint tickRate, double timeSec)
```

#### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt32 | tickRate | The tickrate.              |
| System.Double | timeSec  | The time value as a float. |

### NetworkTime(UInt32, Int32, Double)

<div class="markdown level1 summary">

Creates a new instance of the NetworkTime struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime(uint tickRate, int tick, double tickOffset = 0)
```

#### Parameters

| Type          | Name       | Description                                                                                                  |
|---------------|------------|--------------------------------------------------------------------------------------------------------------|
| System.UInt32 | tickRate   | The tickrate.                                                                                                |
| System.Int32  | tick       | The time will be created with a value where this many tick have already passed.                              |
| System.Double | tickOffset | Can be used to create a NetworkTime with a non fixed time value by adding an offset to the given tick value. |

## 

### FixedDeltaTime

<div class="markdown level1 summary">

Gets the fixed delta time. This value is based on the TickRate and stays
constant. Similar to There is no equivalent to

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly float FixedDeltaTime { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### FixedTime

<div class="markdown level1 summary">

Gets he current fixed network time. This is the time value of the last
network tick. Similar to

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly double FixedTime { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

### Tick

<div class="markdown level1 summary">

Gets the amount of network ticks which have passed until reaching the
current time value.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Tick { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### TickOffset

<div class="markdown level1 summary">

Gets the amount of time which has passed since the last network tick.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly double TickOffset { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

### TickRate

<div class="markdown level1 summary">

Gets the tickrate of the system of this NetworkTime. Ticks per second.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly uint TickRate { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### Time

<div class="markdown level1 summary">

Gets the current time. This is a non fixed time value and similar to

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly double Time { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

### TimeAsFloat

<div class="markdown level1 summary">

Gets the current time as a float.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly float TimeAsFloat { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

## 

### TimeTicksAgo(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime TimeTicksAgo(int ticks)
```

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | ticks |             |

#### Returns

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### ToFixedTime()

<div class="markdown level1 summary">

Converts the network time into a fixed time value.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime ToFixedTime()
```

#### Returns

| Type        | Description                                                       |
|-------------|-------------------------------------------------------------------|
| NetworkTime | A NetworkTime where Time is the FixedTime value of this instance. |

## 

### Addition(NetworkTime, Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkTime operator +(NetworkTime a, double b)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| NetworkTime   | a    |             |
| System.Double | b    |             |

#### Returns

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### Addition(NetworkTime, NetworkTime)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkTime operator +(NetworkTime a, NetworkTime b)
```

#### Parameters

| Type        | Name | Description |
|-------------|------|-------------|
| NetworkTime | a    |             |
| NetworkTime | b    |             |

#### Returns

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### Subtraction(NetworkTime, Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkTime operator -(NetworkTime a, double b)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| NetworkTime   | a    |             |
| System.Double | b    |             |

#### Returns

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### Subtraction(NetworkTime, NetworkTime)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkTime operator -(NetworkTime a, NetworkTime b)
```

#### Parameters

| Type        | Name | Description |
|-------------|------|-------------|
| NetworkTime | a    |             |
| NetworkTime | b    |             |

#### Returns

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |
