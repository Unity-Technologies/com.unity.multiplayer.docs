---
id: Unity.Netcode.NetworkUpdateLoop
title: Unity.Netcode.NetworkUpdateLoop
---

# Class NetworkUpdateLoop


Represents the network update loop injected into low-level player loop
in Unity.







##### Inheritance


System.Object




NetworkUpdateLoop






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public static class NetworkUpdateLoop
```



### Fields

#### UpdateStage


The current network update stage being executed.






##### Declaration


``` lang-csharp
public static NetworkUpdateStage UpdateStage
```



##### Field Value

| Type               | Description |
|--------------------|-------------|
| NetworkUpdateStage |             |

### Methods

#### RegisterAllNetworkUpdates(INetworkUpdateSystem)


Registers a network update system to be executed in all network update
stages.






##### Declaration


``` lang-csharp
public static void RegisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)
```



##### Parameters

| Type                 | Name         | Description                                                                 |
|----------------------|--------------|-----------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to register for all network updates |

#### RegisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)


Registers a network update system to be executed in a specific network
update stage.






##### Declaration


``` lang-csharp
public static void RegisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
```



##### Parameters

| Type                 | Name         | Description                                                                         |
|----------------------|--------------|-------------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to register for all network updates         |
| NetworkUpdateStage   | updateStage  | The NetworkUpdateStage being registered for the INetworkUpdateSystem implementation |

#### UnregisterAllNetworkUpdates(INetworkUpdateSystem)


Unregisters a network update system from all network update stages.






##### Declaration


``` lang-csharp
public static void UnregisterAllNetworkUpdates(this INetworkUpdateSystem updateSystem)
```



##### Parameters

| Type                 | Name         | Description                                                                    |
|----------------------|--------------|--------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to deregister from all network updates |

#### UnregisterNetworkUpdate(INetworkUpdateSystem, NetworkUpdateStage)


Unregisters a network update system from a specific network update
stage.






##### Declaration


``` lang-csharp
public static void UnregisterNetworkUpdate(this INetworkUpdateSystem updateSystem, NetworkUpdateStage updateStage = NetworkUpdateStage.Update)
```



##### Parameters

| Type                 | Name         | Description                                                                            |
|----------------------|--------------|----------------------------------------------------------------------------------------|
| INetworkUpdateSystem | updateSystem | The INetworkUpdateSystem implementation to deregister from all network updates         |
| NetworkUpdateStage   | updateStage  | The NetworkUpdateStage to be deregistered from the INetworkUpdateSystem implementation |



