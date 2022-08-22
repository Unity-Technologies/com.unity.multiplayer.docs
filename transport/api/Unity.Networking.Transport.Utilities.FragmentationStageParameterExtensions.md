---
id: Unity.Networking.Transport.Utilities.FragmentationStageParameterExtensions
title: Unity.Networking.Transport.Utilities.FragmentationStageParameterExtensions
---


# Class FragmentationStageParameterExtensions







##### Inheritance


System.Object




FragmentationStageParameterExtensions






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
public static class FragmentationStageParameterExtensions
```



### Methods

#### GetFragmentationStageParameters(ref NetworkSettings)


Gets the FragmentationUtility.Parameters






##### Declaration


``` lang-csharp
public static FragmentationUtility.Parameters GetFragmentationStageParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                            | Description                                                                |
|---------------------------------|----------------------------------------------------------------------------|
| FragmentationUtility.Parameters | Returns the FragmentationUtility.Parameters values for the NetworkSettings |

#### WithFragmentationStageParameters(ref NetworkSettings, Int32)


Sets the FragmentationUtility.Parameters values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithFragmentationStageParameters(this ref NetworkSettings settings, int payloadCapacity = 4096)
```



##### Parameters

| Type            | Name            | Description     |
|-----------------|-----------------|-----------------|
| NetworkSettings | settings        |                 |
| System.Int32    | payloadCapacity | PayloadCapacity |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



