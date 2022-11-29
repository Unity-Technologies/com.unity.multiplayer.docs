---
id: Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.DisplayElementConfiguration
---





# Class DisplayElementConfiguration



Configuration class used by NetStatsMonitorConfiguration to be displayed
at runtime by RuntimeNetStatsMonitor.









##### Inheritance



System.Object





DisplayElementConfiguration





###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax



``` lang-csharp
[Serializable]
public sealed class DisplayElementConfiguration : ISerializationCallbackReceiver
```



### Properties

#### CounterConfiguration



Counter configuration if Type is set to Counter.







##### Declaration



``` lang-csharp
public CounterConfiguration CounterConfiguration { get; set; }
```



##### Property Value

| Type                 | Description |
|----------------------|-------------|
| CounterConfiguration |             |

#### GraphConfiguration



Graph configuration if Type is set to LineGraph or StackedAreaGraph.







##### Declaration



``` lang-csharp
public GraphConfiguration GraphConfiguration { get; set; }
```



##### Property Value

| Type               | Description |
|--------------------|-------------|
| GraphConfiguration |             |

#### Label



The label of the display element.







##### Declaration



``` lang-csharp
public string Label { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Stats



The list of stats represented by MetricId to display.







##### Declaration



``` lang-csharp
public List<MetricId> Stats { get; set; }
```



##### Property Value

| Type                                        | Description |
|---------------------------------------------|-------------|
| System.Collections.Generic.List\<MetricId\> |             |

#### Type



The DisplayElementType of the display element. The label to display for
this visual element. For graphs this field is optional, as the variables
displayed in the graph are shown in the legend. Consider leaving this
field blank for graphs if you would like to make them more compact.







##### Declaration



``` lang-csharp
public DisplayElementType Type { get; set; }
```



##### Property Value

| Type               | Description |
|--------------------|-------------|
| DisplayElementType |             |

### Methods

#### OnAfterDeserialize()



For internal use. Implementation for ISerializationCallbackReceiver.
Called after Unity deserialize the object. This allow to keep the
configuration details when reloading assemblies or making change in the
code.







##### Declaration



``` lang-csharp
public void OnAfterDeserialize()
```



#### OnBeforeSerialize()



For internal use. Implementation for ISerializationCallbackReceiver.
Called before Unity serialize the object. This allow to keep the
configuration details when reloading assemblies or making change in the
code.







##### Declaration



``` lang-csharp
public void OnBeforeSerialize()
```


