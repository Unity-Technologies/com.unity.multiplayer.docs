---
id: Unity.Multiplayer.Tools.Editor.NetStatsMonitorBuildSettings
title: Unity.Multiplayer.Tools.Editor.NetStatsMonitorBuildSettings
---

# Class NetStatsMonitorBuildSettings



Methods to control whether the Runtime Net Stats Monitor is included in
the build. When making automated builds of your project, you can use
this to dynamically control whether the monitor is included in release
or development builds.









##### Inheritance



System.Object





NetStatsMonitorBuildSettings







##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Multiplayer.Tools.Editor

###### **Assembly**: Tools.dll

##### Syntax



``` lang-csharp
public static class NetStatsMonitorBuildSettings
```



### Methods

#### DisableInDevelopForAllBuildTargets()



Disables the RNSM in development builds for all build targets







##### Declaration



``` lang-csharp
public static void DisableInDevelopForAllBuildTargets()
```



#### DisableInReleaseForAllBuildTargets()



Disables the RNSM in release builds for all build targets







##### Declaration



``` lang-csharp
public static void DisableInReleaseForAllBuildTargets()
```



#### EnableInDevelopForAllBuildTargets()



Enables the RNSM in development builds for all build targets







##### Declaration



``` lang-csharp
public static void EnableInDevelopForAllBuildTargets()
```



#### EnableInReleaseForAllBuildTargets()



Enables the RNSM in release builds for all build targets







##### Declaration



``` lang-csharp
public static void EnableInReleaseForAllBuildTargets()
```


