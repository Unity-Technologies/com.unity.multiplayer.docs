---
id: Unity.Netcode.NetworkClient
title: Unity.Netcode.NetworkClient
---

# Class NetworkClient


A NetworkClient







##### Inheritance


System.Object




NetworkClient






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
public class NetworkClient
```



### Fields

#### ClientId


The ClientId of the NetworkClient






##### Declaration


``` lang-csharp
public ulong ClientId
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### PlayerObject


The PlayerObject of the Client






##### Declaration


``` lang-csharp
public NetworkObject PlayerObject
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

### Properties

#### OwnedObjects


The NetworkObject's owned by this Client






##### Declaration


``` lang-csharp
public List<NetworkObject> OwnedObjects { get; }
```



##### Property Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<NetworkObject\> |             |



