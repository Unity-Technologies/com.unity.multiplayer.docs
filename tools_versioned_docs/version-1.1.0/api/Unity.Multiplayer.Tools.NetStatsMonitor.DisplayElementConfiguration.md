---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration  
title: Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration  
---

<div class="markdown level0 summary">

Configuration class used by NetStatsMonitorConfiguration to be displayed
at runtime by RuntimeNetStatsMonitor.

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

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public sealed class DisplayElementConfiguration : ISerializationCallbackReceiver
```

## Properties 

### CounterConfiguration

<div class="markdown level1 summary">

Counter configuration if Type is set to Counter.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public CounterConfiguration CounterConfiguration { get; set; }
```

#### Property Value

| Type                 | Description |
|----------------------|-------------|
| CounterConfiguration |             |

### GraphConfiguration

<div class="markdown level1 summary">

Graph configuration if Type is set to LineGraph or StackedAreaGraph.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GraphConfiguration GraphConfiguration { get; set; }
```

#### Property Value

| Type               | Description |
|--------------------|-------------|
| GraphConfiguration |             |

### Label

<div class="markdown level1 summary">

The label of the display element.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Label { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Stats

<div class="markdown level1 summary">

The list of stats represented by MetricId to display.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<MetricId> Stats { get; set; }
```

#### Property Value

| Type                                        | Description |
|---------------------------------------------|-------------|
| System.Collections.Generic.List\<MetricId\> |             |

### Type

<div class="markdown level1 summary">

The DisplayElementType of the display element. The label to display for
this visual element. For graphs this field is optional, as the variables
displayed in the graph are shown in the legend. Consider leaving this
field blank for graphs if you would like to make them more compact.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public DisplayElementType Type { get; set; }
```

#### Property Value

| Type               | Description |
|--------------------|-------------|
| DisplayElementType |             |

## Methods 

### OnAfterDeserialize()

<div class="markdown level1 summary">

For internal use. Implementation for ISerializationCallbackReceiver.
Called after Unity deserialize the object. This allow to keep the
configuration details when reloading assemblies or making change in the
code.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void OnAfterDeserialize()
```

### OnBeforeSerialize()

<div class="markdown level1 summary">

For internal use. Implementation for ISerializationCallbackReceiver.
Called before Unity serialize the object. This allow to keep the
configuration details when reloading assemblies or making change in the
code.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void OnBeforeSerialize()
```
