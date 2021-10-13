---  
id: Unity.Netcode.INetworkStreamDriverConstructor  
title: Unity.Netcode.INetworkStreamDriverConstructor  
---

<div class="markdown level0 summary">

Provides an interface that overrides the ability to create your own
drivers and pipelines

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public interface INetworkStreamDriverConstructor
```

## 

### CreateDriver(UnityTransport, out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableSequencedPipeline, out NetworkPipeline reliableSequencedPipeline, out NetworkPipeline reliableSequencedFragmentedPipeline)
```

#### Parameters

| Type            | Name                                | Description |
|-----------------|-------------------------------------|-------------|
| UnityTransport  | transport                           |             |
| NetworkDriver   | driver                              |             |
| NetworkPipeline | unreliableSequencedPipeline         |             |
| NetworkPipeline | reliableSequencedPipeline           |             |
| NetworkPipeline | reliableSequencedFragmentedPipeline |             |
