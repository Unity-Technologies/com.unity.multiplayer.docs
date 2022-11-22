---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.SimpleMovingAverageParams  
title: Unity.Multiplayer.Tools.NetStatsMonitor.SimpleMovingAverageParams  
---

<div class="markdown level0 summary">

Parameters for the simple moving average smoothing method in
CounterConfiguration.

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

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public sealed class SimpleMovingAverageParams
```

## Properties 

### SampleCount

<div class="markdown level1 summary">

The number of samples that are maintained for the purpose of smoothing.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int SampleCount { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The value is clamped to the range \[8, 4096\].

</div>

### SampleRate

<div class="markdown level1 summary">

The sample rate of the Simple Moving Average counter.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SampleRate SampleRate { get; set; }
```

#### Property Value

| Type       | Description |
|------------|-------------|
| SampleRate |             |

#### Remarks

<div class="markdown level1 remarks">

If the sample rate is PerSecond then each sample in the counter is
collected over a full second, whereas if the sample rate is PerFrame
then each sample in the counter is collected during a single frame.

</div>
