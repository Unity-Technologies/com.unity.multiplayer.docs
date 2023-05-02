---
id: Unity.Networking.Transport.FragmentationPipelineStage.FragContext
title: Unity.Networking.Transport.FragmentationPipelineStage.FragContext
---


# Struct FragmentationPipelineStage.FragContext


The fragmentation stage's internal context.






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct FragContext
```



### Fields

#### endIndex


Ending index.






##### Declaration


``` lang-csharp
public int endIndex
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### packetError


Whether there's an error with a packet.






##### Declaration


``` lang-csharp
public bool packetError
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### sequence


Sequence number.






##### Declaration


``` lang-csharp
public int sequence
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### startIndex


Starting index.






##### Declaration


``` lang-csharp
public int startIndex
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



