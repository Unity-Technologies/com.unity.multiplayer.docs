---
id: Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.CounterConfiguration
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Class CounterConfiguration

<div class="markdown level0 summary">

Counter configuration used by DisplayElementConfiguration. This
configuration contain all information about a counter.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

CounterConfiguration

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
[Serializable]
public sealed class CounterConfiguration
```

</div>

### Properties

#### AggregationMethod

<div class="markdown level1 summary">

The desired aggregation method for the stats used in the counter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public AggregationMethod AggregationMethod { get; set; }
```

</div>

##### Property Value

| Type              | Description |
|-------------------|-------------|
| AggregationMethod |             |

#### ExponentialMovingAverageParams

<div class="markdown level1 summary">

Parameters used if SmoothingMethod is set to ExponentialMovingAverage.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ExponentialMovingAverageParams ExponentialMovingAverageParams { get; set; }
```

</div>

##### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| ExponentialMovingAverageParams |             |

#### HighlightLowerBound

<div class="markdown level1 summary">

Values below this threshold will be highlighted by the default styling,
and can be highlighted by custom styling using the following USS
classes:

-   rnsm-counter-out-of-bounds
-   rnsm-counter-below-threshold

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public float HighlightLowerBound { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### HighlightUpperBound

<div class="markdown level1 summary">

Values above this threshold will be highlighted by the default styling,
and can be highlighted by custom styling using the following USS
classes:

-   rnsm-counter-out-of-bounds
-   rnsm-counter-above-threshold

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public float HighlightUpperBound { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### SampleCount

<div class="markdown level1 summary">

The current configured sample count. Note that if the SmoothingMethod is
set to ExponentialMovingAverage, the sample count will be zero.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int SampleCount { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SignificantDigits

<div class="markdown level1 summary">

The number of significant digits to display for this counter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int SignificantDigits { get; set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SimpleMovingAverageParams

<div class="markdown level1 summary">

Parameters used if SmoothingMethod is set to SimpleMovingAverage.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public SimpleMovingAverageParams SimpleMovingAverageParams { get; set; }
```

</div>

##### Property Value

| Type                      | Description |
|---------------------------|-------------|
| SimpleMovingAverageParams |             |

#### SmoothingMethod

<div class="markdown level1 summary">

The desired smoothing method over time for the counter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public SmoothingMethod SmoothingMethod { get; set; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| SmoothingMethod |             |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
