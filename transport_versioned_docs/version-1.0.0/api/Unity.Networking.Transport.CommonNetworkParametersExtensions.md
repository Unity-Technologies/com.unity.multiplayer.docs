---
id: Unity.Networking.Transport.CommonNetworkParametersExtensions
title: Unity.Networking.Transport.CommonNetworkParametersExtensions
---


# Class CommonNetworkParametersExtensions







##### Inheritance


System.Object




CommonNetworkParametersExtensions






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
public static class CommonNetworkParametersExtensions
```



### Methods

#### GetDataStreamParameters(ref NetworkSettings)


Gets the NetworkDataStreamParameter






##### Declaration


``` lang-csharp
public static NetworkDataStreamParameter GetDataStreamParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                       | Description                                                           |
|----------------------------|-----------------------------------------------------------------------|
| NetworkDataStreamParameter | Returns the NetworkDataStreamParameter values for the NetworkSettings |

#### GetNetworkConfigParameters(ref NetworkSettings)


Gets the NetworkConfigParameter






##### Declaration


``` lang-csharp
public static NetworkConfigParameter GetNetworkConfigParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                   | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| NetworkConfigParameter | Returns the NetworkConfigParameter values for the NetworkSettings |

#### WithDataStreamParameters(ref NetworkSettings, Int32)


Sets the NetworkDataStreamParameter values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithDataStreamParameters(this ref NetworkSettings settings, int size = 0)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |
| System.Int32    | size     | size        |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |

#### WithNetworkConfigParameters(ref NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32)


Sets the NetworkConfigParameter values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithNetworkConfigParameters(this ref NetworkSettings settings, int connectTimeoutMS = 1000, int maxConnectAttempts = 60, int disconnectTimeoutMS = 30000, int heartbeatTimeoutMS = 500, int maxFrameTimeMS = 0, int fixedFrameTimeMS = 0)
```



##### Parameters

| Type            | Name                | Description         |
|-----------------|---------------------|---------------------|
| NetworkSettings | settings            |                     |
| System.Int32    | connectTimeoutMS    | connectTimeoutMS    |
| System.Int32    | maxConnectAttempts  | maxConnectAttempts  |
| System.Int32    | disconnectTimeoutMS | disconnectTimeoutMS |
| System.Int32    | heartbeatTimeoutMS  | heartbeatTimeoutMS  |
| System.Int32    | maxFrameTimeMS      | maxFrameTimeMS      |
| System.Int32    | fixedFrameTimeMS    | fixedFrameTimeMS    |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



