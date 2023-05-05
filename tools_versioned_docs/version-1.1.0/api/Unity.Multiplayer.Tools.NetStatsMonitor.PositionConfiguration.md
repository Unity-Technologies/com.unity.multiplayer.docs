---  
id: Unity.Multiplayer.Tools.NetStatsMonitor.PositionConfiguration  
title: Unity.Multiplayer.Tools.NetStatsMonitor.PositionConfiguration  
---

<div class="markdown level0 summary">

Configuration for the position of the RuntimeNetStatsMonitor on screen

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
public class PositionConfiguration
```

## Properties 

### OverridePosition

<div class="markdown level1 summary">

If enabled, the position here will override the position set by the USS
styling. Disable this options if you would like to use the position from
the USS styling instead.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool OverridePosition { get; set; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### PositionLeftToRight

<div class="markdown level1 summary">

The position of the Net Stats Monitor from left to right in the range
from 0 to 1. 0 is flush left, 0.5 is centered, and 1 is flush right.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float PositionLeftToRight { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### PositionTopToBottom

<div class="markdown level1 summary">

The position of the Net Stats Monitor from top to bottom in the range
from 0 to 1. 0 is flush to the top, 0.5 is centered, and 1 is flush to
the bottom.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float PositionTopToBottom { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |
