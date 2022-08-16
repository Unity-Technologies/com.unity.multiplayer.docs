---
id: Unity.Multiplayer.Tools.NetStatsMonitor.LineGraphConfiguration
title: Unity.Multiplayer.Tools.NetStatsMonitor.LineGraphConfiguration
---





# Class LineGraphConfiguration



Configuration for Line Graph specific options.









##### Inheritance



System.Object





LineGraphConfiguration







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
public sealed class LineGraphConfiguration
```



### Properties

#### LineThickness



The line thickness for a line graph. By default this is set to one.







##### Declaration



``` lang-csharp
public float LineThickness { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

##### Remarks



The accepted range for the line thickness is between 1 and 10. If the
value goes beyond those value, it will be clamped.


