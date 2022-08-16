---
id: Unity.Multiplayer.Tools.NetStatsMonitor
title: Unity.Multiplayer.Tools.NetStatsMonitor
---

### Classes

#### CounterConfiguration

Counter configuration used by DisplayElementConfiguration. This
configuration contain all information about a counter.

#### DisplayElementConfiguration

Configuration class used by NetStatsMonitorConfiguration to be displayed
at runtime by RuntimeNetStatsMonitor.

#### ExponentialMovingAverageParams

Parameters for the exponential moving average smoothing method in
CounterConfiguration.

#### GraphConfiguration

Graph configuration used by DisplayElementConfiguration. This
configuration contain all information about a Graph.

#### LineGraphConfiguration

Configuration for Line Graph specific options.

#### NetStatsMonitorConfiguration

The NetStatsMonitorConfiguration includes all fields required to
configure the contents of the RuntimeNetStatsMonitor

#### PositionConfiguration

Configuration for the position of the RuntimeNetStatsMonitor on screen

#### RuntimeNetStatsMonitor

The Runtime Net Stats Monitor component. Add this component to a game
object in a scene to display network statistics on screen.

#### SimpleMovingAverageParams

Parameters for the simple moving average smoothing method in
CounterConfiguration.

### Enums

#### AggregationMethod

Enum to select the different aggregation method offered by
CounterConfiguration.

#### DisplayElementType

Enum representing the different type of elements the
RuntimeNetStatsMonitor can render.

#### GraphXAxisType

Enum used to select the units used to display the graph x-axis labels.

#### SmoothingMethod

Enum to select the different smoothing method offered by
CounterConfiguration.