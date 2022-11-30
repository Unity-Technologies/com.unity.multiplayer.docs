---
id: Unity.Multiplayer.Tools.NetStatsMonitor.RuntimeNetStatsMonitor
title: Unity.Multiplayer.Tools.NetStatsMonitor.RuntimeNetStatsMonitor
---

# Class RuntimeNetStatsMonitor

The Runtime Net Stats Monitor component. Add this component to a game
object in a scene to display network statistics on screen.

##### Inheritance

System.Object

RuntimeNetStatsMonitor

###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public class RuntimeNetStatsMonitor : MonoBehaviour
```

### Properties

#### Configuration

The configuration asset used to configure the information displayed in
this Runtime Net Stats Monitor. The NetStatsMonitorConfiguration can
created from the Create menu, or from C# using
ScriptableObject.CreateInstance.

##### Declaration

``` lang-csharp
public NetStatsMonitorConfiguration Configuration { get; set; }
```

##### Property Value

| Type                         | Description |
|------------------------------|-------------|
| NetStatsMonitorConfiguration |             |

#### CustomStyleSheet

Custom stylesheet to override the default style of the Runtime Net Stats
Monitor.


##### Declaration


``` lang-csharp
public StyleSheet CustomStyleSheet { get; set; }
```

##### Property Value

| Type       | Description |
|------------|-------------|
| StyleSheet |             |

#### MaxRefreshRate

The maximum rate at which the Runtime Net Stats Monitor's on-screen
display is updated (per second). The on-screen display will never be
updated faster than the overall refresh rate. The default refresh rate
is 30fps.

##### Declaration

``` lang-csharp
public double MaxRefreshRate { get; set; }
```

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |

#### PanelSettingsOverride

Optional panel settings that can be used to override the default. These
panel settings can be used to control a number of things, including how
the on-screen display of the Runtime Net Stats Monitor scales on
different devices and displays.

##### Declaration

``` lang-csharp
public PanelSettings PanelSettingsOverride { get; set; }
```

##### Property Value

| Type          | Description |
|---------------|-------------|
| PanelSettings |             |

#### Position

Position configuration that allows custom positioning on screen The
default position is the top left corner of the screen

##### Declaration

``` lang-csharp
public PositionConfiguration Position { get; set; }
```

##### Property Value

| Type                  | Description |
|-----------------------|-------------|
| PositionConfiguration |             |

#### Visible

Visibility toggle to hide or show the on-screen display.

##### Declaration

``` lang-csharp
public bool Visible { get; set; }
```

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### AddCustomValue(MetricId, Single)

Add a custom value for this metricId, which can be displayed in the
RuntimeNetStatsMonitor using a counter or graph configured to display
this metric.

##### Declaration

``` lang-csharp
public void AddCustomValue(MetricId metricId, float value)
```

##### Parameters

| Type          | Name     | Description                                 |
|---------------|----------|---------------------------------------------|
| MetricId      | metricId | The custom MetricId to provide a value for. |
| System.Single | value    | The value of the metric.                    |

#### ApplyConfiguration()

Apply the CustomStyleSheet, Position, and Configuration to the monitor.
This function must be called when these fields have been modified from
C# in order to apply the changes. This function does not need to be
called when these fields are modified in the inspector, as changes made
in the inspector are detected and applied automatically

##### Declaration

``` lang-csharp
public void ApplyConfiguration()
```