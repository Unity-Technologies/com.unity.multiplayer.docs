---
id: Unity.Networking.Transport.NetworkDriver.Concurrent
title: Unity.Networking.Transport.NetworkDriver.Concurrent
---


# Struct NetworkDriver.Concurrent


The Concurrent struct is used to create an Concurrent instance of the
NetworkDriver.






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
public struct Concurrent
```



### Methods

#### AbortSend(DataStreamWriter)


Aborts a asynchronous send.






##### Declaration


``` lang-csharp
public void AbortSend(DataStreamWriter writer)
```



##### Parameters

| Type             | Name   | Description                                       |
|------------------|--------|---------------------------------------------------|
| DataStreamWriter | writer | If you require the payload to be of certain size. |

##### Exceptions

| Type                             | Condition                                                            |
|----------------------------------|----------------------------------------------------------------------|
| System.InvalidOperationException | If endsend is called with a matching BeginSend call.                 |
| System.InvalidOperationException | If the connection got closed between the call of being and end send. |

#### BeginSend(NetworkConnection, out DataStreamWriter, Int32)


Acquires a DataStreamWriter for starting a asynchronous send.






##### Declaration


``` lang-csharp
public int BeginSend(NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```



##### Parameters

| Type              | Name                | Description                                      |
|-------------------|---------------------|--------------------------------------------------|
| NetworkConnection | id                  | The NetworkConnection id to write through        |
| DataStreamWriter  | writer              | A DataStreamWriter to write to                   |
| System.Int32      | requiredPayloadSize | If you require the payload to be of certain size |

##### Returns

| Type         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| System.Int32 | Returns Success on a successful acquire. Otherwise returns an StatusCode indicating the error. |

##### Remarks


Will throw a System.InvalidOperationException if the connection is in a
Connecting state.



#### BeginSend(NetworkPipeline, NetworkConnection, out DataStreamWriter, Int32)


Acquires a DataStreamWriter for starting a asynchronous send.






##### Declaration


``` lang-csharp
public int BeginSend(NetworkPipeline pipe, NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```



##### Parameters

| Type              | Name                | Description                                      |
|-------------------|---------------------|--------------------------------------------------|
| NetworkPipeline   | pipe                | The NetworkPipeline to write through             |
| NetworkConnection | id                  | The NetworkConnection id to write through        |
| DataStreamWriter  | writer              | A DataStreamWriter to write to                   |
| System.Int32      | requiredPayloadSize | If you require the payload to be of certain size |

##### Returns

| Type         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| System.Int32 | Returns Success on a successful acquire. Otherwise returns an StatusCode indicating the error. |

##### Remarks


Will throw a System.InvalidOperationException if the connection is in a
Connecting state.



#### EndSend(DataStreamWriter)


Ends a asynchronous send.






##### Declaration


``` lang-csharp
public int EndSend(DataStreamWriter writer)
```



##### Parameters

| Type             | Name   | Description                                       |
|------------------|--------|---------------------------------------------------|
| DataStreamWriter | writer | If you require the payload to be of certain size. |

##### Returns

| Type         | Description                                          |
|--------------|------------------------------------------------------|
| System.Int32 | The length of the buffer sent if nothing went wrong. |

##### Exceptions

| Type                             | Condition                                                            |
|----------------------------------|----------------------------------------------------------------------|
| System.InvalidOperationException | If endsend is called with a matching BeginSend call.                 |
| System.InvalidOperationException | If the connection got closed between the call of being and end send. |

#### GetConnectionState(NetworkConnection)


Gets the connection state using the specified id






##### Declaration


``` lang-csharp
public NetworkConnection.State GetConnectionState(NetworkConnection id)
```



##### Parameters

| Type              | Name | Description       |
|-------------------|------|-------------------|
| NetworkConnection | id   | The connection id |

##### Returns

| Type                    | Description                  |
|-------------------------|------------------------------|
| NetworkConnection.State | The network connection state |

#### MaxHeaderSize(NetworkPipeline)


Max headersize including a NetworkPipeline






##### Declaration


``` lang-csharp
public int MaxHeaderSize(NetworkPipeline pipe)
```



##### Parameters

| Type            | Name | Description                                             |
|-----------------|------|---------------------------------------------------------|
| NetworkPipeline | pipe | The pipeline with which to get the maximum header size. |

##### Returns

| Type         | Description     |
|--------------|-----------------|
| System.Int32 | The header size |

#### PopEventForConnection(NetworkConnection, out DataStreamReader)


Pops events for a connection using the specified connection id






##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader)
```



##### Parameters

| Type              | Name         | Description                         |
|-------------------|--------------|-------------------------------------|
| NetworkConnection | connectionId | The connection id                   |
| DataStreamReader  | reader       | Stream reader for the event's data. |

##### Returns

| Type              | Description            |
|-------------------|------------------------|
| NetworkEvent.Type | The network event type |

#### PopEventForConnection(NetworkConnection, out DataStreamReader, out NetworkPipeline)


Pops events for a connection using the specified connection id






##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)
```



##### Parameters

| Type              | Name         | Description                                    |
|-------------------|--------------|------------------------------------------------|
| NetworkConnection | connectionId | The connection id                              |
| DataStreamReader  | reader       | Stream reader for the event's data.            |
| NetworkPipeline   | pipeline     | Pipeline on which the data event was received. |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type | The type    |



