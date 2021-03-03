---  
id: MLAPI.LagCompensation.LagCompensationManager  
title: MLAPI.LagCompensation.LagCompensationManager  
---

<div class="markdown level0 summary">

The main class for controlling lag compensation

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

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

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

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class LagCompensationManager

## Fields

### SimulationObjects

<div class="markdown level1 summary">

Simulation objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly List<TrackedObject> SimulationObjects

#### Field Value

| Type                                                 | Description |
|------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;TrackedObject&gt; |             |

## Methods 

### Simulate(Single, Action)

<div class="markdown level1 summary">

Turns time back a given amount of seconds, invokes an action and turns
it back

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Simulate(float secondsAgo, Action action)

#### Parameters

| Type          | Name       | Description                                   |
|---------------|------------|-----------------------------------------------|
| System.Single | secondsAgo | The amount of seconds                         |
| System.Action | action     | The action to invoke when time is turned back |

### Simulate(Single, IList&lt;TrackedObject&gt;, Action)

<div class="markdown level1 summary">

Turns time back a given amount of second on the given objects, invokes
an action and turns it back

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Simulate(float secondsAgo, IList<TrackedObject> simulatedObjects, Action action)

#### Parameters

| Type                                                  | Name             | Description                                   |
|-------------------------------------------------------|------------------|-----------------------------------------------|
| System.Single                                         | secondsAgo       | The amount of seconds                         |
| System.Collections.Generic.IList&lt;TrackedObject&gt; | simulatedObjects | The object to simulate back in time           |
| System.Action                                         | action           | The action to invoke when time is turned back |

### Simulate(UInt64, Action)

<div class="markdown level1 summary">

Turns time back a given amount of seconds, invokes an action and turns
it back. The time is based on the estimated RTT of a clientId

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Simulate(ulong clientId, Action action)

#### Parameters

| Type          | Name     | Description                                   |
|---------------|----------|-----------------------------------------------|
| System.UInt64 | clientId | The clientId's RTT to use                     |
| System.Action | action   | The action to invoke when time is turned back |
