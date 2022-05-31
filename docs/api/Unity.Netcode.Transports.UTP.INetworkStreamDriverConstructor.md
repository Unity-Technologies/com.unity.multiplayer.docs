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



##### Syntax

<div class="codewrapper">

``` lang-csharp
public interface INetworkStreamDriverConstructor
```

</div>

### Methods

#### CreateDriver(UnityTransport, out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableFragmentedPipeline, out NetworkPipeline unreliableSequencedFragmentedPipeline, out NetworkPipeline reliableSequencedPipeline)
```

</div>

##### Parameters

| Type            | Name                                  | Description |
|-----------------|---------------------------------------|-------------|
| UnityTransport  | transport                             |             |
| NetworkDriver   | driver                                |             |
| NetworkPipeline | unreliableFragmentedPipeline          |             |
| NetworkPipeline | unreliableSequencedFragmentedPipeline |             |
| NetworkPipeline | reliableSequencedPipeline             |             |

 
