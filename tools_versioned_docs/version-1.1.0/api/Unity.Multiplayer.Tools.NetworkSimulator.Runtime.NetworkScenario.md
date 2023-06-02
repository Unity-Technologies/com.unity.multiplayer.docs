---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenario  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenario  
---

<div class="markdown level0 summary">

Base class to implement network scenarios, used to start, pause, and
resume their behavior at runtime.

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

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

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
public abstract class NetworkScenario
```

##### **Remarks**

<div class="markdown level0 remarks">

This base class should be used for custom scenarios. If an frame update
is desired, NetworkScenarioBehaviour instead. If an asynchronous
task-based implementation is desired, NetworkScenarioTask instead.

</div>

## Properties 

### IsPaused

<div class="markdown level1 summary">

Pause state of the scenario. Returns true when the scenario is paused,
false otherwise. Set to true to pause, set to false when paused to
resume.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsPaused { get; set; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### Dispose()

<div class="markdown level1 summary">

Disposes the scenario.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void Dispose()
```

### OnPause()

<div class="markdown level1 summary">

Implement to define custom behaviour to be called when the scenario is
paused.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected virtual void OnPause()
```

### OnResume()

<div class="markdown level1 summary">

Implement to define custom behaviour to be called when the scenario is
resumed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected virtual void OnResume()
```

### Start(INetworkEventsApi)

<div class="markdown level1 summary">

Starts running the underlying network scenario.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void Start(INetworkEventsApi networkEventsApi)
```

#### Parameters

| Type              | Name             | Description                               |
|-------------------|------------------|-------------------------------------------|
| INetworkEventsApi | networkEventsApi | API to trigger network simulation events. |
