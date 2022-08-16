---
id: Unity.Multiplayer.Tools.NetStatsMonitor.SimpleMovingAverageParams
title: Unity.Multiplayer.Tools.NetStatsMonitor.SimpleMovingAverageParams
---

# Class SimpleMovingAverageParams

Parameters for the simple moving average smoothing method in
CounterConfiguration.

##### Inheritance

System.Object

SimpleMovingAverageParams

##### Inherited Members

System.Object.Equals(System.Object)

System.Object.Equals(System.Object, System.Object)

System.Object.GetHashCode()

System.Object.GetType()

System.Object.MemberwiseClone()

System.Object.ReferenceEquals(System.Object, System.Object)

System.Object.ToString()


###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public sealed class SimpleMovingAverageParams
```

### Properties

#### SampleCount

The number of samples that are maintained for the purpose of smoothing.

##### Declaration

``` lang-csharp
public int SampleCount { get; set; }
```

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

The value is clamped to the range \[8, 4096\].