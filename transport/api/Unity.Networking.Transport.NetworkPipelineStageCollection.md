---
id: Unity.Networking.Transport.NetworkPipelineStageCollection
title: Unity.Networking.Transport.NetworkPipelineStageCollection
---


# Class NetworkPipelineStageCollection


The network pipeline stage collection class






##### Inheritance


System.Object




NetworkPipelineStageCollection






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public static class NetworkPipelineStageCollection
```



### Methods

#### GetStageId(Type)


Gets the stage id using the specified stage type






##### Declaration


``` lang-csharp
public static NetworkPipelineStageId GetStageId(Type stageType)
```



##### Parameters

| Type        | Name      | Description    |
|-------------|-----------|----------------|
| System.Type | stageType | The stage type |

##### Returns

| Type                   | Description                   |
|------------------------|-------------------------------|
| NetworkPipelineStageId | The network pipeline stage id |

##### Exceptions

| Type                             | Condition                                    |
|----------------------------------|----------------------------------------------|
| System.InvalidOperationException | Pipeline stage {stageType} is not registered |

#### RegisterPipelineStage(INetworkPipelineStage)


Registers the pipeline stage using the specified stage






##### Declaration


``` lang-csharp
public static void RegisterPipelineStage(INetworkPipelineStage stage)
```



##### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkPipelineStage | stage | The stage   |



