---

id: MLAPI.LagCompensation.LagCompensationManager

title: MLAPI.LagCompensation.LagCompensationManager

---

Class LagCompensationManager

<div class="markdown level0 summary" markdown="1">

The main class for controlling lag compensation

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_LagCompensation_LagCompensationManager_syntax]

    public static class LagCompensationManager

## Fields

### SimulationObjects [MLAPI_LagCompensation_LagCompensationManager_SimulationObjects]

<div class="markdown level1 summary" markdown="1">

Simulation objects

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static readonly List<TrackedObject> SimulationObjects

#### Field Value [field-value]

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<TrackedObject\> |             |

## Methods 

### Simulate(Single, Action) [MLAPI_LagCompensation_LagCompensationManager_Simulate_System_Single_System_Action_]

<div class="markdown level1 summary" markdown="1">

Turns time back a given amount of seconds, invokes an action and turns
it back

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void Simulate(float secondsAgo, Action action)

#### Parameters [parameters]

| Type          | Name       | Description                                   |
|---------------|------------|-----------------------------------------------|
| System.Single | secondsAgo | The amount of seconds                         |
| System.Action | action     | The action to invoke when time is turned back |

### Simulate(Single, IList\<TrackedObject\>, Action) [MLAPI_LagCompensation_LagCompensationManager_Simulate_System_Single_System_Collections_Generic_IList_MLAPI_LagCompensation_TrackedObject__System_Action_]

<div class="markdown level1 summary" markdown="1">

Turns time back a given amount of second on the given objects, invokes
an action and turns it back

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static void Simulate(float secondsAgo, IList<TrackedObject> simulatedObjects, Action action)

#### Parameters [parameters-1]

| Type                                              | Name             | Description                                   |
|---------------------------------------------------|------------------|-----------------------------------------------|
| System.Single                                     | secondsAgo       | The amount of seconds                         |
| System.Collections.Generic.IList\<TrackedObject\> | simulatedObjects | The object to simulate back in time           |
| System.Action                                     | action           | The action to invoke when time is turned back |

### Simulate(UInt64, Action) [MLAPI_LagCompensation_LagCompensationManager_Simulate_System_UInt64_System_Action_]

<div class="markdown level1 summary" markdown="1">

Turns time back a given amount of seconds, invokes an action and turns
it back. The time is based on the estimated RTT of a clientId

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static void Simulate(ulong clientId, Action action)

#### Parameters [parameters-2]

| Type          | Name     | Description                                   |
|---------------|----------|-----------------------------------------------|
| System.UInt64 | clientId | The clientId's RTT to use                     |
| System.Action | action   | The action to invoke when time is turned back |
