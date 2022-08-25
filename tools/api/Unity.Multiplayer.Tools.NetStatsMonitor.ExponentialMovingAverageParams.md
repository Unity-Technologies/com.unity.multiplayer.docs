---
id: Unity.Multiplayer.Tools.NetStatsMonitor.ExponentialMovingAverageParams
title: Unity.Multiplayer.Tools.NetStatsMonitor.ExponentialMovingAverageParams
---





# Class ExponentialMovingAverageParams



Parameters for the exponential moving average smoothing method in
CounterConfiguration.









##### Inheritance



System.Object





ExponentialMovingAverageParams







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
public sealed class ExponentialMovingAverageParams
```



### Properties

#### HalfLife



The half-life (in seconds) by which samples should decay. By default,
this is set to one second.







##### Declaration



``` lang-csharp
public double HalfLife { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.Double |             |
