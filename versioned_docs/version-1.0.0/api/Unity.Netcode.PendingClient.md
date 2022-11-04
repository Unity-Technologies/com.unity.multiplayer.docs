---
id: Unity.Netcode.PendingClient
title: Unity.Netcode.PendingClient
---

# Class PendingClient


A class representing a client that is currently in the process of
connecting







##### Inheritance


System.Object




PendingClient






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
public class PendingClient
```



### Properties

#### ClientId


The ClientId of the client






##### Declaration


``` lang-csharp
public ulong ClientId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ConnectionState


The state of the connection process for the client






##### Declaration


``` lang-csharp
public PendingClient.State ConnectionState { get; }
```



##### Property Value

| Type                | Description |
|---------------------|-------------|
| PendingClient.State |             |



