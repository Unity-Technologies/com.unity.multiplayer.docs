---  
id: Unity.Networking.Transport.INetworkPipelineStage  
title: Unity.Networking.Transport.INetworkPipelineStage  
---

<div class="markdown level0 summary">

The network pipeline stage interface

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public interface INetworkPipelineStage
```

## 

### StaticSize

<div class="markdown level1 summary">

Gets the value of the static size

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int StaticSize { get; }
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
NetworkPipelineStage StaticInitialize(byte *staticInstanceBuffer, int staticInstanceBufferLength, INetworkParameter[] param)
```

#### Parameters

| Type                  | Name                       | Description                       |
|-----------------------|----------------------------|-----------------------------------|
| System.Byte\*         | staticInstanceBuffer       | The static instance buffer        |
| System.Int32          | staticInstanceBufferLength | The static instance buffer length |
| INetworkParameter\[\] | param                      | The param                         |

#### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkPipelineStage | The network pipeline stage |
