---
id: Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData
title: Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData
---

# Struct UnityTransport.ConnectionAddressData


Structure to store the address to connect to







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode.Transports.UTP

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
[Serializable]
public struct ConnectionAddressData
```



### Fields

#### Address


IP address of the server (address to which clients will connect to).






##### Declaration


``` lang-csharp
public string Address
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Port


UDP port of the server.






##### Declaration


``` lang-csharp
public ushort Port
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### ServerListenAddress


IP address the server will listen on. If not provided, will use
'Address'.






##### Declaration


``` lang-csharp
public string ServerListenAddress
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Properties

#### ListenEndPoint


Endpoint (IP address and port) server will listen/bind on.






##### Declaration


``` lang-csharp
public readonly NetworkEndPoint ListenEndPoint { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### ServerEndPoint


Endpoint (IP address and port) clients will connect to.






##### Declaration


``` lang-csharp
public readonly NetworkEndPoint ServerEndPoint { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |



