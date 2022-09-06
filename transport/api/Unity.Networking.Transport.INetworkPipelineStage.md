---
id: Unity.Networking.Transport.INetworkPipelineStage
title: Unity.Networking.Transport.INetworkPipelineStage
---


# Interface INetworkPipelineStage


The network pipeline stage interface





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public interface INetworkPipelineStage
```



### Properties

#### StaticSize


Gets the value of the static size






##### Declaration


``` lang-csharp
int StaticSize { get; }
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
NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, NetworkSettings settings)
```



##### Parameters

| Type            | Name                       | Description                       |
|-----------------|----------------------------|-----------------------------------|
| System.Byte\*   | staticInstanceBuffer       | The static instance buffer        |
| System.Int32    | staticInstanceBufferLength | The static instance buffer length |
| NetworkSettings | settings                   |                                   |

##### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkPipelineStage | The network pipeline stage |



