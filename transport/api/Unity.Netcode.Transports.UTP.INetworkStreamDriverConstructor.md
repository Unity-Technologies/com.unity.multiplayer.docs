---  
id: Unity.Netcode.Transports.UTP.INetworkStreamDriverConstructor  
title: Unity.Netcode.Transports.UTP.INetworkStreamDriverConstructor  
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

Creates the internal NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableFragmentedPipeline, out NetworkPipeline unreliableSequencedFragmentedPipeline, out NetworkPipeline reliableSequencedPipeline)
```

#### Parameters

| Type            | Name                                  | Description                                       |
|-----------------|---------------------------------------|---------------------------------------------------|
| UnityTransport  | transport                             | The owner transport                               |
| NetworkDriver   | driver                                | The driver                                        |
| NetworkPipeline | unreliableFragmentedPipeline          | The UnreliableFragmented NetworkPipeline          |
| NetworkPipeline | unreliableSequencedFragmentedPipeline | The UnreliableSequencedFragmented NetworkPipeline |
| NetworkPipeline | reliableSequencedPipeline             | The ReliableSequenced NetworkPipeline             |
