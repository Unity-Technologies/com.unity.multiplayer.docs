---
id: Unity.Netcode.INetworkUpdateSystem
title: Unity.Netcode.INetworkUpdateSystem
---

# Interface INetworkUpdateSystem


Defines the required interface of a network update system being executed
by the NetworkUpdateLoop.






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public interface INetworkUpdateSystem
```



### Methods

#### NetworkUpdate(NetworkUpdateStage)


The update method that is being executed in the context of related
NetworkUpdateStage.






##### Declaration


``` lang-csharp
void NetworkUpdate(NetworkUpdateStage updateStage)
```



##### Parameters

| Type               | Name        | Description                                    |
|--------------------|-------------|------------------------------------------------|
| NetworkUpdateStage | updateStage | The NetworkUpdateStage that is being executed. |

### Extension Methods



NetworkUpdateLoop.RegisterAllNetworkUpdates(INetworkUpdateSystem)





NetworkUpdateLoop.RegisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)





NetworkUpdateLoop.UnregisterAllNetworkUpdates(INetworkUpdateSystem)





NetworkUpdateLoop.UnregisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)





