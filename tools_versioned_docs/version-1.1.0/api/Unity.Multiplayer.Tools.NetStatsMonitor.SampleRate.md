---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.SampleRate  
title: Unity.Multiplayer.Tools.NetStatsMonitor.SampleRate  
---

<div class="markdown level0 summary">

The sample rate of a graph or simple-moving-average counter

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public enum SampleRate
```

##### **Remarks**

<div class="markdown level0 remarks">

In display elements with a PerSecond sample rate, each point or sample
corresponds to data collected over a full second, whereas in display
elements with a PerFrame sample rate, each point or sample corresponds
to data collected in a single frame.

</div>

## Fields

| Name      | Description                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------|
| PerFrame  | Graph points and Simple Moving Average counter samples correspond to data collected within a single frame. |
| PerSecond | Graph points and Simple Moving Average counter samples correspond to data collected over a full second.    |
