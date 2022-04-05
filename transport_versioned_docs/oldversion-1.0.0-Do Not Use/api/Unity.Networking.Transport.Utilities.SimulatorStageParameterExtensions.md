---  
id: Unity.Networking.Transport.Utilities.SimulatorStageParameterExtensions  
title: Unity.Networking.Transport.Utilities.SimulatorStageParameterExtensions  
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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class SimulatorStageParameterExtensions
```

## 

### GetSimulatorStageParameters(ref NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static SimulatorUtility.Parameters GetSimulatorStageParameters(this ref NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

#### Returns

| Type                        | Description |
|-----------------------------|-------------|
| SimulatorUtility.Parameters |             |

### WithSimulatorStageParameters(ref NetworkSettings, Int32, Int32, ApplyMode, Int32, Int32, Int32, Int32, Int32, Int32, Int32, UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ref NetworkSettings WithSimulatorStageParameters(this ref NetworkSettings settings, int maxPacketCount, int maxPacketSize, ApplyMode mode, int packetDelayMs = 0, int packetJitterMs = 0, int packetDropInterval = 0, int packetDropPercentage = 0, int packetDuplicationPercentage = 0, int fuzzFactor = 0, int fuzzOffset = 0, uint randomSeed = 0U)
```

#### Parameters

| Type            | Name                        | Description |
|-----------------|-----------------------------|-------------|
| NetworkSettings | settings                    |             |
| System.Int32    | maxPacketCount              |             |
| System.Int32    | maxPacketSize               |             |
| ApplyMode       | mode                        |             |
| System.Int32    | packetDelayMs               |             |
| System.Int32    | packetJitterMs              |             |
| System.Int32    | packetDropInterval          |             |
| System.Int32    | packetDropPercentage        |             |
| System.Int32    | packetDuplicationPercentage |             |
| System.Int32    | fuzzFactor                  |             |
| System.Int32    | fuzzOffset                  |             |
| System.UInt32   | randomSeed                  |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |
