---  
id: Unity.Networking.Transport.INetworkPipelineStage  
title: Unity.Networking.Transport.INetworkPipelineStage  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface INetworkPipelineStage

## Properties 

### StaticSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    int StaticSize { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### StaticInitialize(Byte\*, Int32, INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, INetworkParameter[] param)

#### Parameters

| Type                  | Name                       | Description |
|-----------------------|----------------------------|-------------|
| System.Byte\*         | staticInstanceBuffer       |             |
| System.Int32          | staticInstanceBufferLength |             |
| INetworkParameter\[\] | param                      |             |

#### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkPipelineStage |             |
