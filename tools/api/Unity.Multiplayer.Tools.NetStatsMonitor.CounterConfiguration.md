---
id: Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration
---





# Class CounterConfiguration



Counter configuration used by DisplayElementConfiguration. This
configuration contain all information about a counter.









##### Inheritance



System.Object





CounterConfiguration







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
public sealed class CounterConfiguration
```



### Properties

#### AggregationMethod



The desired aggregation method for the stats used in the counter.







##### Declaration



``` lang-csharp
public AggregationMethod AggregationMethod { get; set; }
```



##### Property Value

| Type              | Description |
|-------------------|-------------|
| AggregationMethod |             |

#### ExponentialMovingAverageParams



Parameters used if SmoothingMethod is set to ExponentialMovingAverage.







##### Declaration



``` lang-csharp
public ExponentialMovingAverageParams ExponentialMovingAverageParams { get; set; }
```



##### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| ExponentialMovingAverageParams |             |

#### HighlightLowerBound



Values below this threshold will be highlighted by the default styling,
and can be highlighted by custom styling using the following USS
classes:

-   rnsm-counter-out-of-bounds
-   rnsm-counter-below-threshold







##### Declaration



``` lang-csharp
public float HighlightLowerBound { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### HighlightUpperBound



Values above this threshold will be highlighted by the default styling,
and can be highlighted by custom styling using the following USS
classes:

-   rnsm-counter-out-of-bounds
-   rnsm-counter-above-threshold







##### Declaration



``` lang-csharp
public float HighlightUpperBound { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### SampleCount



The current configured sample count. Note that if the SmoothingMethod is
set to ExponentialMovingAverage, the sample count will be zero.







##### Declaration



``` lang-csharp
public int SampleCount { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SignificantDigits



The number of significant digits to display for this counter.







##### Declaration



``` lang-csharp
public int SignificantDigits { get; set; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SimpleMovingAverageParams



Parameters used if SmoothingMethod is set to SimpleMovingAverage.







##### Declaration



``` lang-csharp
public SimpleMovingAverageParams SimpleMovingAverageParams { get; set; }
```



##### Property Value

| Type                      | Description |
|---------------------------|-------------|
| SimpleMovingAverageParams |             |

#### SmoothingMethod



The desired smoothing method over time for the counter.







##### Declaration



``` lang-csharp
public SmoothingMethod SmoothingMethod { get; set; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| SmoothingMethod |             |
