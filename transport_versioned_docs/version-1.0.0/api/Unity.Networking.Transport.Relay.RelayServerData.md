---
id: Unity.Networking.Transport.Relay.RelayServerData
title: Unity.Networking.Transport.Relay.RelayServerData
---


# Struct RelayServerData


Used by the Relay Protocol to describe how to connect to the Relay
Service.






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport.Relay

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct RelayServerData
```



### Constructors

#### RelayServerData(ref NetworkEndPoint, UInt16, RelayAllocationId, String, String, String, Boolean)


Initializes a new instance of the RelayServerData class






##### Declaration


``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, RelayAllocationId allocationId, string connectionData, string hostConnectionData, string key, bool isSecure)
```



##### Parameters

| Type              | Name               | Description              |
|-------------------|--------------------|--------------------------|
| NetworkEndPoint   | endpoint           | The endpoint             |
| System.UInt16     | nonce              | The nonce                |
| RelayAllocationId | allocationId       | The allocation id        |
| System.String     | connectionData     | The connection data      |
| System.String     | hostConnectionData | The host connection data |
| System.String     | key                | The key                  |
| System.Boolean    | isSecure           | The is secure            |

#### RelayServerData(ref NetworkEndPoint, UInt16, ref RelayAllocationId, ref RelayConnectionData, ref RelayConnectionData, ref RelayHMACKey, Boolean)


Initializes a new instance of the RelayServerData class






##### Declaration


``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, ref RelayAllocationId allocationId, ref RelayConnectionData connectionData, ref RelayConnectionData hostConnectionData, ref RelayHMACKey key, bool isSecure)
```



##### Parameters

| Type                | Name               | Description              |
|---------------------|--------------------|--------------------------|
| NetworkEndPoint     | endpoint           | The endpoint             |
| System.UInt16       | nonce              | The nonce                |
| RelayAllocationId   | allocationId       | The allocation id        |
| RelayConnectionData | connectionData     | The connection data      |
| RelayConnectionData | hostConnectionData | The host connection data |
| RelayHMACKey        | key                | The key                  |
| System.Boolean      | isSecure           | The is secure            |

### Fields

#### AllocationId


The unique identifier of the client on the Relay Server.






##### Declaration


``` lang-csharp
public RelayAllocationId AllocationId
```



##### Field Value

| Type              | Description |
|-------------------|-------------|
| RelayAllocationId |             |

#### ConnectionData


The data that describes the client presence on the Relay Server.






##### Declaration


``` lang-csharp
public RelayConnectionData ConnectionData
```



##### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

#### Endpoint


The endpoint of the Relay Server.






##### Declaration


``` lang-csharp
public NetworkEndPoint Endpoint
```



##### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### HMAC


The computed HMAC.






##### Declaration


``` lang-csharp
public byte *HMAC
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### HMACKey


The HMAC key for the connection.






##### Declaration


``` lang-csharp
public RelayHMACKey HMACKey
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| RelayHMACKey |             |

#### HostConnectionData


The connection data of the host client on the Relay Server.






##### Declaration


``` lang-csharp
public RelayConnectionData HostConnectionData
```



##### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

#### IsSecure


A byte that identifies the connection as secured.






##### Declaration


``` lang-csharp
public readonly byte IsSecure
```



##### Field Value

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

#### Nonce


The Nonce value used to stablish the connection with the Relay Server.






##### Declaration


``` lang-csharp
public ushort Nonce
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Methods

#### ComputeNewNonce()


Computes the new nonce, this must be called one time!






##### Declaration


``` lang-csharp
public void ComputeNewNonce()
```





