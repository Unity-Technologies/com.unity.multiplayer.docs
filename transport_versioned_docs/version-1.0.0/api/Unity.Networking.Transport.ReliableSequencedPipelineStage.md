---  
id: Unity.Networking.Transport.ReliableSequencedPipelineStage  
title: Unity.Networking.Transport.ReliableSequencedPipelineStage  
---

<div class="markdown level0 summary">

The ReliableSequencedPipelineStage is used to send packets reliably and
retain the order in which they are sent. This PipelineStage has a
hardcoded WindowSize of 32 inflight packets and will drop packets if its
unable to track them.

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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct ReliableSequencedPipelineStage : INetworkPipelineStage
```

## 

### StaticSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int StaticSize { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### StaticInitialize(Byte\*, Int32, INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, INetworkParameter[] netParams)
```

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
