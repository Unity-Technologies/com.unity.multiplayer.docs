---  
id: Unity.Networking.Transport.ReliableSequencedPipelineStage  
title: Unity.Networking.Transport.ReliableSequencedPipelineStage  
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

### StaticInitialize(Byte\*, Int32, NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, NetworkSettings settings)
```

#### Parameters

| Type            | Name                       | Description |
|-----------------|----------------------------|-------------|
| System.Byte\*   | staticInstanceBuffer       |             |
| System.Int32    | staticInstanceBufferLength |             |
| NetworkSettings | settings                   |             |

#### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkPipelineStage |             |

### Implements

<div>

INetworkPipelineStage

</div>
