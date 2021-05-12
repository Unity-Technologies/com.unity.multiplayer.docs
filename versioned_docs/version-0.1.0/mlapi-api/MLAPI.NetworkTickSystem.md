---  
id: MLAPI.NetworkTickSystem  
title: MLAPI.NetworkTickSystem
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

<div classs="implements">

##### Implements

<div>

INetworkUpdateSystem

</div>

<div>

System.IDisposable

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

    public class NetworkTickSystem : INetworkUpdateSystem, IDisposable

## Constructors 

### NetworkTickSystem(Single)

<div class="markdown level1 summary">

Constructor Defaults to k\_DefaultTickIntervalSec if no tick duration is
specified

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkTickSystem(float tickIntervalSec = 0.05F)

#### Parameters

| Type          | Name            | Description                |
|---------------|-----------------|----------------------------|
| System.Single | tickIntervalSec | Duration of a network tick |

## Fields

### NoTick

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const ushort NoTick = 65535

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### TickPeriod

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const ushort TickPeriod = 65534

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

## Methods 

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### GetNetworkTime()

<div class="markdown level1 summary">

GetNetworkTime Network time is calculated from m\_NetworkTickCount and
m\_TickIntervalSec (tick frequency)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float GetNetworkTime()

#### Returns

| Type          | Description  |
|---------------|--------------|
| System.Single | Network Time |

### GetTick()

<div class="markdown level1 summary">

GetTick Gets the current network tick (non-fractional, wrapping around)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort GetTick()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### NetworkUpdate(NetworkUpdateStage)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void NetworkUpdate(NetworkUpdateStage updateStage)

#### Parameters

| Type               | Name        | Description |
|--------------------|-------------|-------------|
| NetworkUpdateStage | updateStage |             |

### Implements

<div>

INetworkUpdateSystem

</div>

<div>

System.IDisposable

</div>

### Extension Methods

<div>

NetworkUpdateLoop.RegisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.RegisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)

</div>

<div>

NetworkUpdateLoop.UnregisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.UnregisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)

</div>
