---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulator  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulator  
---

<div class="markdown level0 summary">

Add this component to any game object to configure network simulation
parameters.

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

<div classs="implements">

##### Implements

<div>

System.ComponentModel.INotifyPropertyChanged

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public class NetworkSimulator : MonoBehaviour, INotifyPropertyChanged
```

## Fields

### AutoRunScenario

<div class="markdown level1 summary">

Allows to determine if network scenarios should start automatically or
not.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AutoRunScenario
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Properties 

### ConnectionPreset

<div class="markdown level1 summary">

The Connection Preset used to define a set of connection parameters to
simulate the network condition at runtime.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public INetworkSimulatorPreset ConnectionPreset { get; set; }
```

#### Property Value

| Type                    | Description |
|-------------------------|-------------|
| INetworkSimulatorPreset |             |

### IsAvailable

<div class="markdown level1 summary">

Returns whether the underlying network transport is available.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsAvailable { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsConnected

<div class="markdown level1 summary">

Returns whether the underlying network transport is connected.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsConnected { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Scenario

<div class="markdown level1 summary">

The Network Scenario used to modify network connection parameters at
runtime.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkScenario Scenario { get; set; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkScenario |             |

## Explicit Interface Implementations

### INotifyPropertyChanged.PropertyChanged

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
event PropertyChangedEventHandler INotifyPropertyChanged.PropertyChanged
```

#### Returns

| Type                                              | Description |
|---------------------------------------------------|-------------|
| System.ComponentModel.PropertyChangedEventHandler |             |

### Implements

<div>

System.ComponentModel.INotifyPropertyChanged

</div>
