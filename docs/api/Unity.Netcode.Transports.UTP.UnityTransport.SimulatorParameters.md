---
id: Unity.Netcode.Transports.UTP.UnityTransport.SimulatorParameters
title: Unity.Netcode.Transports.UTP.UnityTransport.SimulatorParameters
---

# Struct UnityTransport.SimulatorParameters


Parameters for the Network Simulator







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode.Transports.UTP

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
[Serializable]
public struct SimulatorParameters
```



### Fields

#### PacketDelayMS


Delay to add to every send and received packet (in milliseconds). Only
applies in the editor and in development builds. The value is ignored in
production builds.






##### Declaration


``` lang-csharp
public int PacketDelayMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PacketDropRate


Percentage of sent and received packets to drop. Only applies in the
editor and in the editor and in developments builds.






##### Declaration


``` lang-csharp
public int PacketDropRate
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PacketJitterMS


Jitter (random variation) to add/substract to the packet delay (in
milliseconds). Only applies in the editor and in development builds. The
value is ignored in production builds.






##### Declaration


``` lang-csharp
public int PacketJitterMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



