---
id: Unity.Multiplayer.Tools.NetStatsMonitor.PositionConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.PositionConfiguration
---





# Class PositionConfiguration



Configuration for the position of the RuntimeNetStatsMonitor on screen









##### Inheritance



System.Object





PositionConfiguration







##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Multiplayer.Tools.NetStatsMonitor

###### **Assembly**: Tools.dll

##### Syntax



``` lang-csharp
[Serializable]
public class PositionConfiguration
```



### Properties

#### OverridePosition



If enabled, the position here will override the position set by the USS
styling. Disable this options if you would like to use the position from
the USS styling instead.







##### Declaration



``` lang-csharp
public bool OverridePosition { get; set; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### PositionLeftToRight



The position of the Net Stats Monitor from left to right in the range
from 0 to 1. 0 is flush left, 0.5 is centered, and 1 is flush right.







##### Declaration



``` lang-csharp
public float PositionLeftToRight { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### PositionTopToBottom



The position of the Net Stats Monitor from top to bottom in the range
from 0 to 1. 0 is flush to the top, 0.5 is centered, and 1 is flush to
the bottom.







##### Declaration



``` lang-csharp
public float PositionTopToBottom { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |
