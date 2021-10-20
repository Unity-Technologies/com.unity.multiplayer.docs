---  
id: Unity.Netcode.NetworkTickSystem  
title: Unity.Netcode.NetworkTickSystem  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class NetworkTickSystem
```

## 

### NetworkTickSystem(UInt32, Double, Double)

<div class="markdown level1 summary">

Creates a new instance of the NetworkTickSystem class.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTickSystem(uint tickRate, double localTimeSec, double serverTimeSec)
```

#### Parameters

| Type          | Name          | Description                          |
|---------------|---------------|--------------------------------------|
| System.UInt32 | tickRate      | The tick rate                        |
| System.Double | localTimeSec  | The initial local time to start at.  |
| System.Double | serverTimeSec | The initial server time to start at. |

## 

### NoTick

<div class="markdown level1 summary">

Special value to indicate "No tick information"

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int NoTick = -2147483648
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### LocalTime

<div class="markdown level1 summary">

The current local time. This is the time at which predicted or client
authoritative objects move. This value is accurate when called in Update
or during the Tick event but does not work correctly for FixedUpdate.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime LocalTime { get; }
```

#### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### ServerTime

<div class="markdown level1 summary">

The current server time. This value is mostly used for internal purposes
and to interpolate state received from the server. This value is
accurate when called in Update or during the Tick event but does not
work correctly for FixedUpdate.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTime ServerTime { get; }
```

#### Property Value

| Type        | Description |
|-------------|-------------|
| NetworkTime |             |

### TickRate

<div class="markdown level1 summary">

The TickRate of the tick system. This is used to decide how often a
fixed network tick is run.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint TickRate { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

## 

### Reset(Double, Double)

<div class="markdown level1 summary">

Resets the tick system to the given network time.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Reset(double localTimeSec, double serverTimeSec)
```

#### Parameters

| Type          | Name          | Description                 |
|---------------|---------------|-----------------------------|
| System.Double | localTimeSec  | The local time in seconds.  |
| System.Double | serverTimeSec | The server time in seconds. |

### UpdateTick(Double, Double)

<div class="markdown level1 summary">

Called after advancing the time system to run ticks based on the
difference in time.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void UpdateTick(double localTimeSec, double serverTimeSec)
```

#### Parameters

| Type          | Name          | Description |
|---------------|---------------|-------------|
| System.Double | localTimeSec  |             |
| System.Double | serverTimeSec |             |

## 

### Tick

<div class="markdown level1 summary">

Gets invoked before every network tick.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event Action Tick
```

#### Event Type

| Type          | Description |
|---------------|-------------|
| System.Action |             |
