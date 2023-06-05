---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.GraphConfiguration  
title: Unity.Multiplayer.Tools.NetStatsMonitor.GraphConfiguration  
---

<div class="markdown level0 summary">

Graph configuration used by DisplayElementConfiguration. This
configuration contain all information about a Graph.

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
public sealed class GraphConfiguration
```

## Properties 

### LineGraphConfiguration

<div class="markdown level1 summary">

Line-graph specific options.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public LineGraphConfiguration LineGraphConfiguration { get; set; }
```

#### Property Value

| Type                   | Description |
|------------------------|-------------|
| LineGraphConfiguration |             |

### SampleCount

<div class="markdown level1 summary">

The number of samples that are maintained for the purpose of graphing.

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

The sample rate of the graph.

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

If the sample rate is PerSecond then each point in the graph corresponds
to data collected over a full second, whereas if the sample rate is
PerFrame then each point in the graph corresponds to data collected
within a single frame.

</div>

### VariableColors

<div class="markdown level1 summary">

List of colors to override the default colors of the graph.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<Color> VariableColors { get; set; }
```

#### Property Value

| Type                                     | Description |
|------------------------------------------|-------------|
| System.Collections.Generic.List\<Color\> |             |

### XAxisType

<div class="markdown level1 summary">

The units used for displaying the bounds of the graph's x-axis. By
default the graph bounds are displayed in units of sample count. If set
to time, the the x-axis graph bounds will display the time over which
these samples were collected.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GraphXAxisType XAxisType { get; set; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| GraphXAxisType |             |
