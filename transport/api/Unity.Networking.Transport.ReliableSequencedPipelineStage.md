---
id: Unity.Networking.Transport.ReliableSequencedPipelineStage
title: Unity.Networking.Transport.ReliableSequencedPipelineStage
---


# Struct ReliableSequencedPipelineStage


The ReliableSequencedPipelineStage is used to send packets reliably and
retain the order in which they are sent. This PipelineStage has a
hardcoded WindowSize of 32 inflight packets and will drop packets if its
unable to track them.






##### Implements



INetworkPipelineStage






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
public struct ReliableSequencedPipelineStage : INetworkPipelineStage
```



### Properties

#### StaticSize







##### Declaration


``` lang-csharp
public readonly int StaticSize { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### StaticInitialize(Byte\*, Int32, NetworkSettings)







##### Declaration


``` lang-csharp
public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, NetworkSettings settings)
```



##### Parameters

| Type            | Name                       | Description |
|-----------------|----------------------------|-------------|
| System.Byte\*   | staticInstanceBuffer       |             |
| System.Int32    | staticInstanceBufferLength |             |
| NetworkSettings | settings                   |             |

##### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkPipelineStage |             |

### Implements



INetworkPipelineStage





