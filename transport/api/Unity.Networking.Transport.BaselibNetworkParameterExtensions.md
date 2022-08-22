---
id: Unity.Networking.Transport.BaselibNetworkParameterExtensions
title: Unity.Networking.Transport.BaselibNetworkParameterExtensions
---


# Class BaselibNetworkParameterExtensions







##### Inheritance


System.Object




BaselibNetworkParameterExtensions






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public static class BaselibNetworkParameterExtensions
```



### Methods

#### GetBaselibNetworkInterfaceParameters(ref NetworkSettings)


Gets the BaselibNetworkParameter






##### Declaration


``` lang-csharp
public static BaselibNetworkParameter GetBaselibNetworkInterfaceParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                    | Description                                                        |
|-------------------------|--------------------------------------------------------------------|
| BaselibNetworkParameter | Returns the BaselibNetworkParameter values for the NetworkSettings |

#### WithBaselibNetworkInterfaceParameters(ref NetworkSettings, Int32, Int32, UInt32)


Sets the BaselibNetworkParameter values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithBaselibNetworkInterfaceParameters(this ref NetworkSettings settings, int receiveQueueCapacity = 64, int sendQueueCapacity = 64, uint maximumPayloadSize = 2000U)
```



##### Parameters

| Type            | Name                 | Description          |
|-----------------|----------------------|----------------------|
| NetworkSettings | settings             |                      |
| System.Int32    | receiveQueueCapacity | receiveQueueCapacity |
| System.Int32    | sendQueueCapacity    | sendQueueCapacity    |
| System.UInt32   | maximumPayloadSize   | maximumPayloadSize   |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



