---
id: Unity.Networking.Transport.Utilities.SimulatorStageParameterExtensions
title: Unity.Networking.Transport.Utilities.SimulatorStageParameterExtensions
---


# Class SimulatorStageParameterExtensions







##### Inheritance


System.Object




SimulatorStageParameterExtensions






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Networking.Transport.Utilities

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public static class SimulatorStageParameterExtensions
```



### Methods

#### GetSimulatorStageParameters(ref NetworkSettings)


Gets the SimulatorUtility.Parameters






##### Declaration


``` lang-csharp
public static SimulatorUtility.Parameters GetSimulatorStageParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                        | Description                                                            |
|-----------------------------|------------------------------------------------------------------------|
| SimulatorUtility.Parameters | Returns the SimulatorUtility.Parameters values for the NetworkSettings |

#### WithSimulatorStageParameters(ref NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32, UInt32)


Sets the SimulatorUtility.Parameters values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithSimulatorStageParameters(this ref NetworkSettings settings, int maxPacketCount, int maxPacketSize, int packetDelayMs = 0, int packetJitterMs = 0, int packetDropInterval = 0, int packetDropPercentage = 0, int fuzzFactor = 0, int fuzzOffset = 0, uint randomSeed = 0U)
```



##### Parameters

| Type            | Name                 | Description          |
|-----------------|----------------------|----------------------|
| NetworkSettings | settings             |                      |
| System.Int32    | maxPacketCount       | MaxPacketCount       |
| System.Int32    | maxPacketSize        | MaxPacketSize        |
| System.Int32    | packetDelayMs        | PacketDelayMs        |
| System.Int32    | packetJitterMs       | PacketJitterMs       |
| System.Int32    | packetDropInterval   | PacketDropInterval   |
| System.Int32    | packetDropPercentage | PacketDropPercentage |
| System.Int32    | fuzzFactor           | FuzzFactor           |
| System.Int32    | fuzzOffset           | FuzzOffset           |
| System.UInt32   | randomSeed           | RandomSeed           |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



