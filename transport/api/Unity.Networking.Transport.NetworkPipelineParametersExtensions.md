---
id: Unity.Networking.Transport.NetworkPipelineParametersExtensions
title: Unity.Networking.Transport.NetworkPipelineParametersExtensions
---


# Class NetworkPipelineParametersExtensions







##### Inheritance


System.Object




NetworkPipelineParametersExtensions






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
public static class NetworkPipelineParametersExtensions
```



### Methods

#### GetPipelineParameters(ref NetworkSettings)


Gets the NetworkPipelineParams






##### Declaration


``` lang-csharp
public static NetworkPipelineParams GetPipelineParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                  | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| NetworkPipelineParams | Returns the NetworkPipelineParams values for the NetworkSettings |

#### WithPipelineParameters(ref NetworkSettings, Int32)


Sets the NetworkPipelineParams values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithPipelineParameters(this ref NetworkSettings settings, int initialCapacity = 0)
```



##### Parameters

| Type            | Name            | Description     |
|-----------------|-----------------|-----------------|
| NetworkSettings | settings        |                 |
| System.Int32    | initialCapacity | initialCapacity |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



