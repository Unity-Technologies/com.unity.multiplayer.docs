---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.BuiltInScenarios.ConnectionsCycle  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.BuiltInScenarios.ConnectionsCycle  
---

<div class="markdown level0 summary">

NetworkScenario that iterates through the Configurations list by order.

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

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level3">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkScenarioTask.Start(INetworkEventsApi)

</div>

<div>

NetworkScenarioTask.Dispose()

</div>

<div>

NetworkScenario.IsPaused

</div>

<div>

NetworkScenario.OnPause()

</div>

<div>

NetworkScenario.OnResume()

</div>

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public sealed class ConnectionsCycle : NetworkScenarioTask
```

## Properties 

### Configurations

<div class="markdown level1 summary">

The list of configuration used to define ConnectionPreset and the
ChangeIntervalMilliseconds. ConnectionsCycle.Configuration

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ICollection<ConnectionsCycle.Configuration> Configurations { get; }
```

#### Property Value

| Type                                                                     | Description |
|--------------------------------------------------------------------------|-------------|
| System.Collections.Generic.ICollection\<ConnectionsCycle.Configuration\> |             |

## Methods 

### Run(INetworkEventsApi, CancellationToken)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected override async Task Run(INetworkEventsApi networkEventsApi, CancellationToken cancellationToken)
```

#### Parameters

| Type              | Name              | Description |
|-------------------|-------------------|-------------|
| INetworkEventsApi | networkEventsApi  |             |
| CancellationToken | cancellationToken |             |

#### Returns

| Type | Description |
|------|-------------|
| Task |             |

#### Overrides

<div>

NetworkScenarioTask.Run(INetworkEventsApi, CancellationToken)

</div>
