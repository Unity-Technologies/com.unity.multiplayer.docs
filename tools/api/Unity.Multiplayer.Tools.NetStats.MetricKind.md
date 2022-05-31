---
id: Unity.Multiplayer.Tools.NetStats.MetricKind
title: Unity.Multiplayer.Tools.NetStats.MetricKind
---

<div class="markdown level0 summary">

Represent the kind a metric can be.

</div>

##### Syntax

<div class="codewrapper">

``` lang-csharp
public enum MetricKind
```

</div>

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