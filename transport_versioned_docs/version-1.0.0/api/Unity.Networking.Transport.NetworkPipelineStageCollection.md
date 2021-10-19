---  
id: Unity.Networking.Transport.NetworkPipelineStageCollection  
title: Unity.Networking.Transport.NetworkPipelineStageCollection  
---

<div class="markdown level0 summary">

The network pipeline stage collection class

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class NetworkPipelineStageCollection
```

## 

### GetStageId(Type)

<div class="markdown level1 summary">

Gets the stage id using the specified stage type

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkPipelineStageId GetStageId(Type stageType)
```

#### Parameters

| Type        | Name      | Description    |
|-------------|-----------|----------------|
| System.Type | stageType | The stage type |

#### Returns

| Type                   | Description                   |
|------------------------|-------------------------------|
| NetworkPipelineStageId | The network pipeline stage id |

#### Exceptions

| Type                             | Condition                                    |
|----------------------------------|----------------------------------------------|
| System.InvalidOperationException | Pipeline stage {stageType} is not registered |

### RegisterPipelineStage(INetworkPipelineStage)

<div class="markdown level1 summary">

Registers the pipeline stage using the specified stage

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void RegisterPipelineStage(INetworkPipelineStage stage)
```

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkPipelineStage | stage | The stage   |
