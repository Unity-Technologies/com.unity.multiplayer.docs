---
id: Unity.Networking.Transport.Relay.RelayNetworkParameter
title: Unity.Networking.Transport.Relay.RelayNetworkParameter
---


# Struct RelayNetworkParameter


Relay protocol network parementers used to connect to the Unity Relay
service. This data must be provided to the Create(NetworkSettings)
function in order to be able to use connect to Relay.






##### Implements



INetworkParameter






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
public struct RelayNetworkParameter : INetworkParameter
```



### Fields

#### RelayConnectionTimeMS


The timeout in milliseconds after which a ping message is sent to the
Relay Server to keep the connection alive.






##### Declaration


``` lang-csharp
public int RelayConnectionTimeMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ServerData


The data that is used to describe the connection to the Relay Server.






##### Declaration


``` lang-csharp
public RelayServerData ServerData
```



##### Field Value

| Type            | Description |
|-----------------|-------------|
| RelayServerData |             |

### Methods

#### Validate()







##### Declaration


``` lang-csharp
public bool Validate()
```



##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



INetworkParameter





