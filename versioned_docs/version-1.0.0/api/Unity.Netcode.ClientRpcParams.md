---
id: Unity.Netcode.ClientRpcParams
title: Unity.Netcode.ClientRpcParams
---

# Struct ClientRpcParams


Client-Side RPC Can be used with any client-side remote procedure call
Note: Typically this is used primarily for sending to a specific list of
clients as opposed to the default (all). ClientRpcSendParams







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
public struct ClientRpcParams
```



### Fields

#### Receive


The client RPC receive parameters (currently a place holder)






##### Declaration


``` lang-csharp
public ClientRpcReceiveParams Receive
```



##### Field Value

| Type                   | Description |
|------------------------|-------------|
| ClientRpcReceiveParams |             |

#### Send


The client RPC send parameters provides you with the ability to send to
a specific list of clients






##### Declaration


``` lang-csharp
public ClientRpcSendParams Send
```



##### Field Value

| Type                | Description |
|---------------------|-------------|
| ClientRpcSendParams |             |



