---
id: Unity.Networking.Transport.BaselibNetworkParameter
title: Unity.Networking.Transport.BaselibNetworkParameter
---


# Struct BaselibNetworkParameter


Network Parameters used to set queue and payload sizes for
BaselibNetworkInterface






##### Implements



INetworkParameter






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
public struct BaselibNetworkParameter : INetworkParameter
```



### Fields

#### maximumPayloadSize


The maximum payload size.






##### Declaration


``` lang-csharp
public uint maximumPayloadSize
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### receiveQueueCapacity


The maximum number of receiving packets that the BaselibNetworkInterface
can process in a single update iteration.






##### Declaration


``` lang-csharp
public int receiveQueueCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### sendQueueCapacity


The maximum number of sending packets that the BaselibNetworkInterface
can process in a single update iteration.






##### Declaration


``` lang-csharp
public int sendQueueCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Validate()







##### Declaration


``` lang-csharp
public bool Validate()
```



##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



INetworkParameter





