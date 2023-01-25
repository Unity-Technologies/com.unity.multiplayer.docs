---
id: Unity.Netcode.Transports.UTP.INetworkStreamDriverConstructor
title: Unity.Netcode.Transports.UTP.INetworkStreamDriverConstructor
---

# Interface INetworkStreamDriverConstructor


Provides an interface that overrides the ability to create your own
drivers and pipelines






###### **Namespace**: Unity.Netcode.Transports.UTP

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public interface INetworkStreamDriverConstructor
```



### Methods

#### CreateDriver(UnityTransport, out NetworkDriver, out NetworkPipeline, out NetworkPipeline, out NetworkPipeline)


Creates the internal NetworkDriver






##### Declaration


``` lang-csharp
void CreateDriver(UnityTransport transport, out NetworkDriver driver, out NetworkPipeline unreliableFragmentedPipeline, out NetworkPipeline unreliableSequencedFragmentedPipeline, out NetworkPipeline reliableSequencedPipeline)
```



##### Parameters

| Type            | Name                                  | Description                                       |
|-----------------|---------------------------------------|---------------------------------------------------|
| UnityTransport  | transport                             | The owner transport                               |
| NetworkDriver   | driver                                | The driver                                        |
| NetworkPipeline | unreliableFragmentedPipeline          | The UnreliableFragmented NetworkPipeline          |
| NetworkPipeline | unreliableSequencedFragmentedPipeline | The UnreliableSequencedFragmented NetworkPipeline |
| NetworkPipeline | reliableSequencedPipeline             | The ReliableSequenced NetworkPipeline             |



