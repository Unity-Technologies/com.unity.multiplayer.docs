---  
id: Unity.Networking.Transport.SimulatorPipelineStage  
title: Unity.Networking.Transport.SimulatorPipelineStage  
---

<div class="markdown level0 summary">

The SimulatorPipelineStage could be added on either the client or server
to simulate bad network conditions. It's best to add it as the last
stage in the pipeline, then it will either drop the packet or add a
delay right before it would go on the wire.

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
public struct SimulatorPipelineStage : INetworkPipelineStage
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

Statics the initialize using the specified static instance buffer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, INetworkParameter[] netParams)
```

#### Parameters

| Type                  | Name                       | Description                       |
|-----------------------|----------------------------|-----------------------------------|
| System.Byte\*         | staticInstanceBuffer       | The static instance buffer        |
| System.Int32          | staticInstanceBufferLength | The static instance buffer length |
| INetworkParameter\[\] | netParams                  | The net params                    |

#### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkPipelineStage | The network pipeline stage |

### Implements

<div>

INetworkPipelineStage

</div>
