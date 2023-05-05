---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration  
title: Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration  
---

<div class="markdown level0 summary">

Counter configuration used by DisplayElementConfiguration. This
configuration contain all information about a counter.

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
public sealed class CounterConfiguration
```

## Properties 

### AggregationMethod

<div class="markdown level1 summary">

The desired aggregation method for the stats used in the counter.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public AggregationMethod AggregationMethod { get; set; }
```

#### Property Value

| Type              | Description |
|-------------------|-------------|
| AggregationMethod |             |

### ExponentialMovingAverageParams

<div class="markdown level1 summary">

Parameters used if SmoothingMethod is set to ExponentialMovingAverage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ExponentialMovingAverageParams ExponentialMovingAverageParams { get; set; }
```

#### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| ExponentialMovingAverageParams |             |

### HighlightLowerBound

<div class="markdown level1 summary">

Values below this threshold will be highlighted by the default styling,
and can be highlighted by custom styling using the following USS
classes:

- rnsm-counter-out-of-bounds
- rnsm-counter-below-threshold

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float HighlightLowerBound { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### HighlightUpperBound

<div class="markdown level1 summary">

Values above this threshold will be highlighted by the default styling,
and can be highlighted by custom styling using the following USS
classes:

- rnsm-counter-out-of-bounds
- rnsm-counter-above-threshold

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float HighlightUpperBound { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### SampleCount

<div class="markdown level1 summary">

The current configured sample count. Note that if the SmoothingMethod is
set to ExponentialMovingAverage, the sample count will be zero.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int SampleCount { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### SignificantDigits

<div class="markdown level1 summary">

The number of significant digits to display for this counter.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int SignificantDigits { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### SimpleMovingAverageParams

<div class="markdown level1 summary">

Parameters used if SmoothingMethod is set to SimpleMovingAverage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SimpleMovingAverageParams SimpleMovingAverageParams { get; set; }
```

#### Property Value

| Type                      | Description |
|---------------------------|-------------|
| SimpleMovingAverageParams |             |

### SmoothingMethod

<div class="markdown level1 summary">

The desired smoothing method over time for the counter.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SmoothingMethod SmoothingMethod { get; set; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| SmoothingMethod |             |
