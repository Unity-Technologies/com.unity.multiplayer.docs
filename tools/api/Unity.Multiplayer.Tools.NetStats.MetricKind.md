---
id: Unity.Multiplayer.Tools.NetStats.MetricKind
title: Unity.Multiplayer.Tools.NetStats.MetricKind
---





# Enum MetricKind



Represent the kind a metric can be.







###### **Namespace**: Unity.Multiplayer.Tools.NetStats

###### **Assembly**: Tools.dll

##### Syntax



``` lang-csharp
public enum MetricKind
```



### Fields

Name









Description

Counter

Represent a counter metric. A counter is a cumulative metric whose value
can only be increased or reset to zero. For a metric that could be
decreased, a Gauge should be used.

Gauge

Represent a gauge metric. A gauge is a metric that represents a single
numerical value that can go up or down. For a metric that can only go
up, a Counter should be used.