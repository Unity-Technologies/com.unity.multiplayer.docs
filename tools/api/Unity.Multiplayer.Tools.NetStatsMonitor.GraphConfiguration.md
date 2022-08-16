---
id: Unity.Multiplayer.Tools.NetStatsMonitor.GraphConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.GraphConfiguration
---





# Class GraphConfiguration



Graph configuration used by DisplayElementConfiguration. This
configuration contain all information about a Graph.









##### Inheritance



System.Object





GraphConfiguration







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
public sealed class GraphConfiguration
```



### Properties

#### LineGraphConfiguration



Line-graph specific options.







##### Declaration



``` lang-csharp
public LineGraphConfiguration LineGraphConfiguration { get; set; }
```



##### Property Value

| Type                   | Description |
|------------------------|-------------|
| LineGraphConfiguration |             |

#### SampleCount



The number of samples that are maintained for the purpose of graphing.







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



#### VariableColors



List of colors to override the default colors of the graph.







##### Declaration



``` lang-csharp
public List<Color> VariableColors { get; set; }
```



##### Property Value

| Type                                     | Description |
|------------------------------------------|-------------|
| System.Collections.Generic.List\<Color\> |             |

#### XAxisType



The units used for displaying the bounds of the graph's x-axis. By
default the graph bounds are displayed in units of sample count. If set
to time, the the x-axis graph bounds will display the time over which
these samples were collected.







##### Declaration



``` lang-csharp
public GraphXAxisType XAxisType { get; set; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| GraphXAxisType |             |
