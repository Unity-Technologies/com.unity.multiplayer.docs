---
id: Unity.Networking.Transport.Utilities.ReliableStageParameterExtensions
title: Unity.Networking.Transport.Utilities.ReliableStageParameterExtensions
---


# Class ReliableStageParameterExtensions







##### Inheritance


System.Object




ReliableStageParameterExtensions






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
public static class ReliableStageParameterExtensions
```



### Methods

#### GetReliableStageParameters(ref NetworkSettings)


Gets the ReliableUtility.Parameters






##### Declaration


``` lang-csharp
public static ReliableUtility.Parameters GetReliableStageParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                       | Description                                                           |
|----------------------------|-----------------------------------------------------------------------|
| ReliableUtility.Parameters | Returns the ReliableUtility.Parameters values for the NetworkSettings |

#### WithReliableStageParameters(ref NetworkSettings, Int32)


Sets the ReliableUtility.Parameters values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithReliableStageParameters(this ref NetworkSettings settings, int windowSize = 32)
```



##### Parameters

| Type            | Name       | Description |
|-----------------|------------|-------------|
| NetworkSettings | settings   |             |
| System.Int32    | windowSize | WindowSize  |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



