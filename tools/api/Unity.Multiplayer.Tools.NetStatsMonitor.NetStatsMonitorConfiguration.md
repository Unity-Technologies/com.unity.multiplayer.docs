---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.NetStatsMonitorConfiguration  
title: Unity.Multiplayer.Tools.NetStatsMonitor.NetStatsMonitorConfiguration  
---

<div class="markdown level0 summary">

The NetStatsMonitorConfiguration includes all fields required to
configure the contents of the RuntimeNetStatsMonitor

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
public class NetStatsMonitorConfiguration : ScriptableObject
```

## Properties 

### DisplayElements

<div class="markdown level1 summary">

List of elements to be rendered by the RuntimeNetStatsMonitor.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<DisplayElementConfiguration> DisplayElements { get; set; }
```

#### Property Value

| Type                                                           | Description |
|----------------------------------------------------------------|-------------|
| System.Collections.Generic.List\<DisplayElementConfiguration\> |             |

## Methods 

### OnConfigurationModified()

<div class="markdown level1 summary">

Force a configuration reload. This needs to be called if the
configuration has been modified at runtime by a script.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void OnConfigurationModified()
```
