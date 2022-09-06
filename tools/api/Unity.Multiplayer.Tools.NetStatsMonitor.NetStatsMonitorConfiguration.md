---
id: Unity.Multiplayer.Tools.NetStatsMonitor.NetStatsMonitorConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.NetStatsMonitorConfiguration
---





# Class NetStatsMonitorConfiguration



The NetStatsMonitorConfiguration includes all fields required to
configure the contents of the RuntimeNetStatsMonitor









##### Inheritance



System.Object





NetStatsMonitorConfiguration





###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax



``` lang-csharp
public class NetStatsMonitorConfiguration : ScriptableObject
```



### Properties

#### DisplayElements



List of elements to be rendered by the RuntimeNetStatsMonitor.







##### Declaration



``` lang-csharp
public List<DisplayElementConfiguration> DisplayElements { get; set; }
```



##### Property Value

| Type                                                           | Description |
|----------------------------------------------------------------|-------------|
| System.Collections.Generic.List\<DisplayElementConfiguration\> |             |

### Methods

#### OnConfigurationModified()



Force a configuration reload. This needs to be called if the
configuration has been modified at runtime by a script.







##### Declaration



``` lang-csharp
public void OnConfigurationModified()
```


