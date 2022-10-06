---
id: Unity.Networking.Transport.NetworkPipelineStage
title: Unity.Networking.Transport.NetworkPipelineStage
---


# Struct NetworkPipelineStage


The network pipeline stage






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
public struct NetworkPipelineStage
```



### Constructors

#### NetworkPipelineStage(TransportFunctionPointer\<NetworkPipelineStage.ReceiveDelegate\>, TransportFunctionPointer\<NetworkPipelineStage.SendDelegate\>, TransportFunctionPointer\<NetworkPipelineStage.InitializeConnectionDelegate\>, Int32, Int32, Int32, Int32, Int32)


Initializes a new instance of the NetworkPipelineStage class






##### Declaration


``` lang-csharp
public NetworkPipelineStage(TransportFunctionPointer<NetworkPipelineStage.ReceiveDelegate> Receive, TransportFunctionPointer<NetworkPipelineStage.SendDelegate> Send, TransportFunctionPointer<NetworkPipelineStage.InitializeConnectionDelegate> InitializeConnection, int ReceiveCapacity, int SendCapacity, int HeaderCapacity, int SharedStateCapacity, int PayloadCapacity = 0)
```



##### Parameters

| Type                                                                          | Name                 | Description               |
|-------------------------------------------------------------------------------|----------------------|---------------------------|
| TransportFunctionPointer\<NetworkPipelineStage.ReceiveDelegate\>              | Receive              | The receive               |
| TransportFunctionPointer\<NetworkPipelineStage.SendDelegate\>                 | Send                 | The send                  |
| TransportFunctionPointer\<NetworkPipelineStage.InitializeConnectionDelegate\> | InitializeConnection | The initialize connection |
| System.Int32                                                                  | ReceiveCapacity      | The receive capacity      |
| System.Int32                                                                  | SendCapacity         | The send capacity         |
| System.Int32                                                                  | HeaderCapacity       | The header capacity       |
| System.Int32                                                                  | SharedStateCapacity  | The shared state capacity |
| System.Int32                                                                  | PayloadCapacity      | The payload capacity      |

### Fields

#### HeaderCapacity


The header capacity






##### Declaration


``` lang-csharp
public readonly int HeaderCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitializeConnection


InitializeConnection function pointer






##### Declaration


``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.InitializeConnectionDelegate> InitializeConnection
```



##### Field Value

| Type                                                                          | Description |
|-------------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkPipelineStage.InitializeConnectionDelegate\> |             |

#### PayloadCapacity


The payload capacity






##### Declaration


``` lang-csharp
public readonly int PayloadCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Receive


Receive function pointer






##### Declaration


``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.ReceiveDelegate> Receive
```



##### Field Value

| Type                                                             | Description |
|------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkPipelineStage.ReceiveDelegate\> |             |

#### ReceiveCapacity


The receive capacity






##### Declaration


``` lang-csharp
public readonly int ReceiveCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Send


Send function pointer






##### Declaration


``` lang-csharp
public TransportFunctionPointer<NetworkPipelineStage.SendDelegate> Send
```



##### Field Value

| Type                                                          | Description |
|---------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkPipelineStage.SendDelegate\> |             |

#### SendCapacity


The send capacity






##### Declaration


``` lang-csharp
public readonly int SendCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SharedStateCapacity


The shared state capacity






##### Declaration


``` lang-csharp
public readonly int SharedStateCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



