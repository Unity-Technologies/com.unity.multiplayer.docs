---
id: Unity.Networking.Transport.UnreliableSequencePipelineStage
title: Unity.Networking.Transport.UnreliableSequencePipelineStage
---


# Struct UnreliableSequencedPipelineStage


The UnreliableSequencedPipelineStage is used to send unreliable packets
in order.






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
public struct UnreliableSequencedPipelineStage : INetworkPipelineStage
```



### Properties

#### StaticSize


Gets the value of the static size






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


Statics the initialize using the specified static instance buffer






##### Declaration


``` lang-csharp
public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, NetworkSettings settings)
```



##### Parameters

| Type            | Name                       | Description                       |
|-----------------|----------------------------|-----------------------------------|
| System.Byte\*   | staticInstanceBuffer       | The static instance buffer        |
| System.Int32    | staticInstanceBufferLength | The static instance buffer length |
| NetworkSettings | settings                   | The net params                    |

##### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkPipelineStage | The network pipeline stage |

### Implements



INetworkPipelineStage





