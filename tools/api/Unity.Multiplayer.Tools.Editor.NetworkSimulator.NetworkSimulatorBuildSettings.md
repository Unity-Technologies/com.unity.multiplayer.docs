---
id: Unity.Multiplayer.Tools.Editor.NetworkSimulator.NetworkSimulatorBuildSettings
title: Unity.Multiplayer.Tools.Editor.NetworkSimulator.NetworkSimulatorBuildSettings
---

# Class NetworkSimulatorBuildSettings

Methods to control whether the Network Simulator is included in the
build. When making automated builds of your project, you can use this to
dynamically control whether the simulator is included in release or
development builds.

##### Inheritance

System.Object

NetworkSimulatorBuildSettings

##### Inherited Members

System.Object.Equals(System.Object)

System.Object.Equals(System.Object, System.Object)

System.Object.GetHashCode()

System.Object.GetType()

System.Object.MemberwiseClone()

System.Object.ReferenceEquals(System.Object, System.Object)

System.Object.ToString()

###### **Namespace**: Unity.Multiplayer.Tools.Editor.NetworkSimulator

###### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public static class NetworkSimulatorBuildSettings
```

### Methods

#### DisableInDevelopForAllBuildTargets()

Disables the Network Simulator in development builds for all build
targets

##### Declaration

``` lang-csharp
public static void DisableInDevelopForAllBuildTargets()
```

#### DisableInReleaseForAllBuildTargets()

Disables the Network Simulator in release builds for all build targets

##### Declaration

``` lang-csharp
public static void DisableInReleaseForAllBuildTargets()
```

#### EnableInDevelopForAllBuildTargets()

Enables the Network Simulator in development builds for all build
targets

##### Declaration

``` lang-csharp
public static void EnableInDevelopForAllBuildTargets()
```

#### EnableInReleaseForAllBuildTargets()

Enables the Network Simulator in release builds for all build targets

##### Declaration

``` lang-csharp
public static void EnableInReleaseForAllBuildTargets()
```