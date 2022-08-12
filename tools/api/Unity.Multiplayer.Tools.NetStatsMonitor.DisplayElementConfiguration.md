---
id: Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration
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

# Class DisplayElementConfiguration

<div class="markdown level0 summary">

Configuration class used by NetStatsMonitorConfiguration to be displayed
at runtime by RuntimeNetStatsMonitor.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

DisplayElementConfiguration

</div>

</div>

###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
[Serializable]
public sealed class DisplayElementConfiguration : ISerializationCallbackReceiver
```

</div>

### Properties

#### CounterConfiguration

<div class="markdown level1 summary">

Counter configuration if Type is set to Counter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public CounterConfiguration CounterConfiguration { get; set; }
```

</div>

##### Property Value

| Type                 | Description |
|----------------------|-------------|
| CounterConfiguration |             |

#### GraphConfiguration

<div class="markdown level1 summary">

Graph configuration if Type is set to LineGraph or StackedAreaGraph.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public GraphConfiguration GraphConfiguration { get; set; }
```

</div>

##### Property Value

| Type               | Description |
|--------------------|-------------|
| GraphConfiguration |             |

#### Label

<div class="markdown level1 summary">

The label of the display element.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string Label { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Stats

<div class="markdown level1 summary">

The list of stats represented by MetricId to display.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public List<MetricId> Stats { get; set; }
```

</div>

##### Property Value

| Type                                        | Description |
|---------------------------------------------|-------------|
| System.Collections.Generic.List\<MetricId\> |             |

#### Type

<div class="markdown level1 summary">

The DisplayElementType of the display element. The label to display for
this visual element. For graphs this field is optional, as the variables
displayed in the graph are shown in the legend. Consider leaving this
field blank for graphs if you would like to make them more compact.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public DisplayElementType Type { get; set; }
```

</div>

##### Property Value

| Type               | Description |
|--------------------|-------------|
| DisplayElementType |             |

### Methods

#### OnAfterDeserialize()

<div class="markdown level1 summary">

For internal use. Implementation for ISerializationCallbackReceiver.
Called after Unity deserialize the object. This allow to keep the
configuration details when reloading assemblies or making change in the
code.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void OnAfterDeserialize()
```

</div>

#### OnBeforeSerialize()

<div class="markdown level1 summary">

For internal use. Implementation for ISerializationCallbackReceiver.
Called before Unity serialize the object. This allow to keep the
configuration details when reloading assemblies or making change in the
code.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void OnBeforeSerialize()
```

</div>

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
