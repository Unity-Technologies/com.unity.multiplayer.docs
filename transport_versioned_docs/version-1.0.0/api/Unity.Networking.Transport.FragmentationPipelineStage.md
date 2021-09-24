---  
id: Unity.Networking.Transport.FragmentationPipelineStage  
title: Unity.Networking.Transport.FragmentationPipelineStage  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkPipelineStage

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct FragmentationPipelineStage : INetworkPipelineStage

## Properties 

### StaticSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int StaticSize { get; }

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

    public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, INetworkParameter[] netParams)

#### Parameters

| Type                  | Name                       | Description |
|-----------------------|----------------------------|-------------|
| System.Byte\*         | staticInstanceBuffer       |             |
| System.Int32          | staticInstanceBufferLength |             |
| INetworkParameter\[\] | netParams                  |             |

#### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkPipelineStage |             |

### Implements

<div>

INetworkPipelineStage

</div>
