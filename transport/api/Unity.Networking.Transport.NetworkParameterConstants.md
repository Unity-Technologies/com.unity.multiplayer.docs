---
id: Unity.Networking.Transport.NetworkParameterConstants
title: Unity.Networking.Transport.NetworkParameterConstants
---


# Struct NetworkParameterConstants


Default NetworkParameter Constants.






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkParameterConstants
```



### Fields

#### ConnectTimeoutMS


The default connection timeout value. This value can be overridden using
the NetworkConfigParameter






##### Declaration


``` lang-csharp
public const int ConnectTimeoutMS = 1000
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### DisconnectTimeoutMS


The default disconnect timeout attempts value. This value can be
overridden using the NetworkConfigParameter






##### Declaration


``` lang-csharp
public const int DisconnectTimeoutMS = 30000
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### DriverDataStreamSize


The default size of the DataStreamWriter. This value can be overridden
using the NetworkConfigParameter.






##### Declaration


``` lang-csharp
public const int DriverDataStreamSize = 65536
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### HeartbeatTimeoutMS


The default inactivity timeout after which a heartbeat is sent. This
This value can be overridden using the NetworkConfigParameter






##### Declaration


``` lang-csharp
public const int HeartbeatTimeoutMS = 500
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InitialEventQueueSize


The default size of the event queue.






##### Declaration


``` lang-csharp
public const int InitialEventQueueSize = 100
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### InvalidConnectionId


The invalid connection id






##### Declaration


``` lang-csharp
public const int InvalidConnectionId = -1
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxConnectAttempts


The default max connection attempts value. This value can be overridden
using the NetworkConfigParameter






##### Declaration


``` lang-csharp
public const int MaxConnectAttempts = 60
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MTU


The max size of any packet that can be sent






##### Declaration


``` lang-csharp
public const int MTU = 1400
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



