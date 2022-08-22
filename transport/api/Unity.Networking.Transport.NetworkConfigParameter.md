---
id: Unity.Networking.Transport.NetworkConfigParameter
title: Unity.Networking.Transport.NetworkConfigParameter
---


# Struct NetworkConfigParameter


The NetworkConfigParameter is used to set specific parameters that the
driver uses.






##### Implements



INetworkParameter






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
public struct NetworkConfigParameter : INetworkParameter
```



### Fields

#### connectTimeoutMS


A timeout in milliseconds indicating how long we will wait until we send
a new connection attempt.






##### Declaration


``` lang-csharp
public int connectTimeoutMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### disconnectTimeoutMS


A timeout in milliseconds indicating how long we will wait for a
connection event, before we disconnect it.






##### Declaration


``` lang-csharp
public int disconnectTimeoutMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


The connection needs to receive data from the connected endpoint within
this timeout. Note that with heartbeats enabled (heartbeatTimeoutMS \>
0), simply not sending any data will not be enough to trigger this
timeout (since heartbeats count as connection events).



#### fixedFrameTimeMS


A fixed amount of time to use for an interval between ScheduleUpdate.
This is used instead of a clock.






##### Declaration


``` lang-csharp
public int fixedFrameTimeMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


The main use for this parameter is tests where determinism is more
important than correctness.



#### heartbeatTimeoutMS


A timeout in milliseconds after which a heartbeat is sent if there is no
activity.






##### Declaration


``` lang-csharp
public int heartbeatTimeoutMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### maxConnectAttempts


The maximum amount of connection attempts we will try before
disconnecting.






##### Declaration


``` lang-csharp
public int maxConnectAttempts
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### maxFrameTimeMS


The maximum amount of time a single frame can advance timeout values.






##### Declaration


``` lang-csharp
public int maxFrameTimeMS
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


The main use for this parameter is to not get disconnects at frame
spikes when both endpoints lives in the same process.



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





