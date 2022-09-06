---
id: Unity.Networking.Transport.NullPipelineStage
title: Unity.Networking.Transport.NullPipelineStage
---


# Struct NullPipelineStage


The NullPipelineStage is the default pipeline stage and used to send
packets unreliably






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
public struct NullPipelineStage : INetworkPipelineStage
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
public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, NetworkSettings netParams)
```



##### Parameters

| Type            | Name                       | Description |
|-----------------|----------------------------|-------------|
| System.Byte\*   | staticInstanceBuffer       |             |
| System.Int32    | staticInstanceBufferLength |             |
| NetworkSettings | netParams                  |             |

##### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkPipelineStage |             |

### Implements



INetworkPipelineStage





