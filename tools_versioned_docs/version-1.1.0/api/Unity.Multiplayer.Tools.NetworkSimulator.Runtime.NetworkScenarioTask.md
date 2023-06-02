---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenarioTask  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenarioTask  
---

<div class="markdown level0 summary">

Base class to use network scenarios with asynchronous Tasks.

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

<div class="level3">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

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
public abstract class NetworkScenarioTask : NetworkScenario
```

## Methods 

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Dispose()
```

#### Overrides

<div>

NetworkScenario.Dispose()

</div>

### Run(INetworkEventsApi, CancellationToken)

<div class="markdown level1 summary">

Starts running the underlying network scenario. Make sure to handle when
IsPaused and the cancellation token.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected abstract Task Run(INetworkEventsApi networkEventsApi, CancellationToken cancellationToken)
```

#### Parameters

| Type              | Name              | Description                                                                |
|-------------------|-------------------|----------------------------------------------------------------------------|
| INetworkEventsApi | networkEventsApi  | API to trigger network simulation events.                                  |
| CancellationToken | cancellationToken | Cancellation token to handle cancellation requests to the underlying task. |

#### Returns

| Type | Description                  |
|------|------------------------------|
| Task | Task simulating the scenario |

### Start(INetworkEventsApi)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Start(INetworkEventsApi networkEventsApi)
```

#### Parameters

| Type              | Name             | Description |
|-------------------|------------------|-------------|
| INetworkEventsApi | networkEventsApi |             |

#### Overrides

<div>

NetworkScenario.Start(INetworkEventsApi)

</div>
