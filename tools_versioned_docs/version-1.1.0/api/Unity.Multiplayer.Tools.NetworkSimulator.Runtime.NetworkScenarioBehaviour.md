---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenarioBehaviour  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenarioBehaviour  
---

<div class="markdown level0 summary">

Base class to use a MonoBehaviour-style frame update loop with network
scenarios.

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

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkScenario.IsPaused

</div>

<div>

NetworkScenario.Start(INetworkEventsApi)

</div>

<div>

NetworkScenario.Dispose()

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
public abstract class NetworkScenarioBehaviour : NetworkScenario
```

## Methods 

### Update(Single)

<div class="markdown level1 summary">

Method called on every frame to determine what the scenario should run
since the last frame. Only called when the scenario is not paused, so
there is no need to manually check it in the implementation.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected abstract void Update(float deltaTime)
```

#### Parameters

| Type          | Name      | Description                        |
|---------------|-----------|------------------------------------|
| System.Single | deltaTime | The time elapsed since last frame. |
