---
id: Unity.Netcode.ServerRpcParams
title: Unity.Netcode.ServerRpcParams
---

# Struct ServerRpcParams


Server-Side RPC Can be used with any sever-side remote procedure call
Note: typically this is use primarily for the ServerRpcReceiveParams







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct ServerRpcParams
```



### Fields

#### Receive


The client RPC receive parameters provides you with the sender's
identifier






##### Declaration


``` lang-csharp
public ServerRpcReceiveParams Receive
```



##### Field Value

| Type                   | Description |
|------------------------|-------------|
| ServerRpcReceiveParams |             |

#### Send


The server RPC send parameters (currently a place holder)






##### Declaration


``` lang-csharp
public ServerRpcSendParams Send
```



##### Field Value

| Type                | Description |
|---------------------|-------------|
| ServerRpcSendParams |             |



