---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.LineGraphConfiguration  
title: Unity.Multiplayer.Tools.NetStatsMonitor.LineGraphConfiguration  
---

<div class="markdown level0 summary">

Configuration for Line Graph specific options.

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
public sealed class LineGraphConfiguration
```

## Properties 

### LineThickness

<div class="markdown level1 summary">

The line thickness for a line graph. By default this is set to one.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float LineThickness { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### Remarks

<div class="markdown level1 remarks">

The accepted range for the line thickness is between 1 and 10. If the
value goes beyond those value, it will be clamped.

</div>
