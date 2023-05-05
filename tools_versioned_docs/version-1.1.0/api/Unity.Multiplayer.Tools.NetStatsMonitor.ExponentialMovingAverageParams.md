---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.ExponentialMovingAverageParams  
title: Unity.Multiplayer.Tools.NetStatsMonitor.ExponentialMovingAverageParams  
---

<div class="markdown level0 summary">

Parameters for the exponential moving average smoothing method in
CounterConfiguration.

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
public sealed class ExponentialMovingAverageParams
```

## Properties 

### HalfLife

<div class="markdown level1 summary">

The half-life (in seconds) by which samples should decay. By default, This is set to one second.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public double HalfLife { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |
