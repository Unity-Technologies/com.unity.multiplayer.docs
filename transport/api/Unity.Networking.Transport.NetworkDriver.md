---
id: Unity.Networking.Transport.NetworkDriver
title: Unity.Networking.Transport.NetworkDriver
---


# Struct NetworkDriver


The NetworkDriver is an implementation of Virtual Connections over any
transport.

Basic usage:

    var driver = NetworkDriver.Create();






##### Implements



System.IDisposable






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
public struct NetworkDriver : IDisposable
```



### Constructors

#### NetworkDriver(INetworkInterface)







##### Declaration


``` lang-csharp
public NetworkDriver(INetworkInterface netIf)
```



##### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| INetworkInterface | netIf |             |

#### NetworkDriver(INetworkInterface, INetworkParameter\[\])







##### Declaration


``` lang-csharp
[Obsolete("Use NetworkDriver(INetworkInterface, NetworkSettings) instead", false)]
public NetworkDriver(INetworkInterface netIf, params INetworkParameter[] param)
```



##### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkInterface     | netIf |             |
| INetworkParameter\[\] | param |             |

#### NetworkDriver(INetworkInterface, NetworkSettings)







##### Declaration


``` lang-csharp
public NetworkDriver(INetworkInterface netIf, NetworkSettings settings)
```



##### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| INetworkInterface | netIf    |             |
| NetworkSettings   | settings |             |

### Properties

#### Bound







##### Declaration


``` lang-csharp
public readonly bool Bound { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsCreated


Returns if NetworkDriver has been created






##### Declaration


``` lang-csharp
public readonly bool IsCreated { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LastUpdateTime


Gets the value of the last update time






##### Declaration


``` lang-csharp
public readonly long LastUpdateTime { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### Listening


Gets or sets if the driver is Listening






##### Declaration


``` lang-csharp
public bool Listening { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ReceiveErrorCode


Gets or sets Receive Error Code






##### Declaration


``` lang-csharp
public int ReceiveErrorCode { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

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

#### Accept()


Checks to see if there are any new connections to Accept.






##### Declaration


``` lang-csharp
public NetworkConnection Accept()
```



##### Returns

| Type              | Description                                             |
|-------------------|---------------------------------------------------------|
| NetworkConnection | If accept fails it returns a default NetworkConnection. |

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



#### Bind(NetworkEndPoint)


Bind the driver to a endpoint.






##### Declaration


``` lang-csharp
public int Bind(NetworkEndPoint endpoint)
```



##### Parameters

| Type            | Name     | Description              |
|-----------------|----------|--------------------------|
| NetworkEndPoint | endpoint | The endpoint to bind to. |

##### Returns

| Type         | Description                                                    |
|--------------|----------------------------------------------------------------|
| System.Int32 | Returns 0 on success. And a negative value if a error occured. |

##### Exceptions

| Type                             | Condition                                                         |
|----------------------------------|-------------------------------------------------------------------|
| System.InvalidOperationException | If the driver is not created properly                             |
| System.InvalidOperationException | If bind is called more then once on the driver                    |
| System.InvalidOperationException | If bind is called after a connection has already been established |

#### Connect(NetworkEndPoint)


Connects the driver to a endpoint






##### Declaration


``` lang-csharp
public NetworkConnection Connect(NetworkEndPoint endpoint)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkEndPoint | endpoint |             |

##### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| NetworkConnection | If connect fails it returns a default NetworkConnection. |

##### Exceptions

| Type                             | Condition                             |
|----------------------------------|---------------------------------------|
| System.InvalidOperationException | If the driver is not created properly |

#### Create()


Helper function for creating a NetworkDriver.






##### Declaration


``` lang-csharp
public static NetworkDriver Create()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Create(INetworkParameter\[\])







##### Declaration


``` lang-csharp
[Obsolete("Use Create(NetworkSettings) instead", false)]
public static NetworkDriver Create(params INetworkParameter[] param)
```



##### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkParameter\[\] | param |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Create(NetworkSettings)


Helper function for creating a NetworkDriver.






##### Declaration


``` lang-csharp
public static NetworkDriver Create(NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

##### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |

#### Create\<N\>(N)


Helper function for creating a NetworkDriver.






##### Declaration


``` lang-csharp
public static NetworkDriver Create<N>(N networkInterface)
    where N : INetworkInterface
```



##### Parameters

| Type | Name             | Description                  |
|------|------------------|------------------------------|
| N    | networkInterface | The custom interface to use. |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| N    |             |

#### Create\<N\>(N, NetworkSettings)


Helper function for creating a NetworkDriver.






##### Declaration


``` lang-csharp
public static NetworkDriver Create<N>(N networkInterface, NetworkSettings settings)
    where N : INetworkInterface
```



##### Parameters

| Type            | Name             | Description                    |
|-----------------|------------------|--------------------------------|
| N               | networkInterface | The custom interface to use.   |
| NetworkSettings | settings         | The for the new NetworkDriver. |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| N    |             |

#### CreatePipeline(Type\[\])


Create a new pipeline.






##### Declaration


``` lang-csharp
public NetworkPipeline CreatePipeline(params Type[] stages)
```



##### Parameters

| Type            | Name   | Description                                     |
|-----------------|--------|-------------------------------------------------|
| System.Type\[\] | stages | An array of stages the pipeline should contain. |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkPipeline |             |

##### Exceptions

| Type                             | Condition                                 |
|----------------------------------|-------------------------------------------|
| System.InvalidOperationException | If the driver is not created properly     |
| System.InvalidOperationException | A connection has already been established |

#### Disconnect(NetworkConnection)


Disconnects a NetworkConnection






##### Declaration


``` lang-csharp
public int Disconnect(NetworkConnection id)
```



##### Parameters

| Type              | Name | Description                                  |
|-------------------|------|----------------------------------------------|
| NetworkConnection | id   | The NetworkConnection we want to Disconnect. |

##### Returns

| Type         | Description          |
|--------------|----------------------|
| System.Int32 | Return 0 on success. |

#### Dispose()







##### Declaration


``` lang-csharp
public void Dispose()
```



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


Gets the connection state using the specified NetworkConnection






##### Declaration


``` lang-csharp
public NetworkConnection.State GetConnectionState(NetworkConnection con)
```



##### Parameters

| Type              | Name | Description    |
|-------------------|------|----------------|
| NetworkConnection | con  | The connection |

##### Returns

| Type                    | Description                  |
|-------------------------|------------------------------|
| NetworkConnection.State | The network connection state |

#### GetEventQueueSizeForConnection(NetworkConnection)


Returns the size of the EventQueue for a specific connection






##### Declaration


``` lang-csharp
public int GetEventQueueSizeForConnection(NetworkConnection connectionId)
```



##### Parameters

| Type              | Name         | Description                                       |
|-------------------|--------------|---------------------------------------------------|
| NetworkConnection | connectionId | Connection for which to get the event queue size. |

##### Returns

| Type         | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| System.Int32 | If the connection is valid it returns the size of the event queue otherwise it returns 0. |

#### GetPipelineBuffers(NetworkPipeline, NetworkPipelineStageId, NetworkConnection, out NativeArray\<Byte\>, out NativeArray\<Byte\>, out NativeArray\<Byte\>)


Returns the PipelineBuffers for a specific pipeline and stage.






##### Declaration


``` lang-csharp
public void GetPipelineBuffers(NetworkPipeline pipeline, NetworkPipelineStageId stageId, NetworkConnection connection, out NativeArray<byte> readProcessingBuffer, out NativeArray<byte> writeProcessingBuffer, out NativeArray<byte> sharedBuffer)
```



##### Parameters

| Type                       | Name                  | Description                                                     |
|----------------------------|-----------------------|-----------------------------------------------------------------|
| NetworkPipeline            | pipeline              | Pipeline for which to get the buffers.                          |
| NetworkPipelineStageId     | stageId               | Pipeline for which to get the buffers.                          |
| NetworkConnection          | connection            | Connection for which to the buffers.                            |
| NativeArray\<System.Byte\> | readProcessingBuffer  | The buffer used to process read (receive) operations.           |
| NativeArray\<System.Byte\> | writeProcessingBuffer | The buffer used to process write (send) operations.             |
| NativeArray\<System.Byte\> | sharedBuffer          | The buffer containing the internal state of the pipeline stage. |

##### Exceptions

| Type                             | Condition                         |
|----------------------------------|-----------------------------------|
| System.InvalidOperationException | If the the connection is invalid. |

#### Listen()


Set the driver to Listen for incoming connections






##### Declaration


``` lang-csharp
public int Listen()
```



##### Returns

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Returns 0 on success. |

##### Exceptions

| Type                             | Condition                                          |
|----------------------------------|----------------------------------------------------|
| System.InvalidOperationException | If the driver is not created properly              |
| System.InvalidOperationException | If listen is called more then once on the driver   |
| System.InvalidOperationException | If bind has not been called before calling Listen. |

#### LocalEndPoint()


Returns local NetworkEndPoint






##### Declaration


``` lang-csharp
public NetworkEndPoint LocalEndPoint()
```



##### Returns

| Type            | Description           |
|-----------------|-----------------------|
| NetworkEndPoint | The network end point |

#### MaxHeaderSize(NetworkPipeline)


Max headersize including optional NetworkPipeline






##### Declaration


``` lang-csharp
public int MaxHeaderSize(NetworkPipeline pipe)
```



##### Parameters

| Type            | Name | Description                                            |
|-----------------|------|--------------------------------------------------------|
| NetworkPipeline | pipe | The pipeline for which to get the maximum header size. |

##### Returns

| Type         | Description              |
|--------------|--------------------------|
| System.Int32 | The maximum header size. |

#### PopEvent(out NetworkConnection, out DataStreamReader)







##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader)
```



##### Parameters

| Type              | Name   | Description |
|-------------------|--------|-------------|
| NetworkConnection | con    |             |
| DataStreamReader  | reader |             |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

#### PopEvent(out NetworkConnection, out DataStreamReader, out NetworkPipeline)


Pops an event






##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader, out NetworkPipeline pipeline)
```



##### Parameters

| Type              | Name     | Description                               |
|-------------------|----------|-------------------------------------------|
| NetworkConnection | con      | Connection on which the event occured.    |
| DataStreamReader  | reader   | Stream reader for the event's data.       |
| NetworkPipeline   | pipeline | Pipeline on which the event was received. |

##### Returns

| Type              | Description      |
|-------------------|------------------|
| NetworkEvent.Type | The event's type |

#### PopEventForConnection(NetworkConnection, out DataStreamReader)







##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader)
```



##### Parameters

| Type              | Name         | Description |
|-------------------|--------------|-------------|
| NetworkConnection | connectionId |             |
| DataStreamReader  | reader       |             |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

#### PopEventForConnection(NetworkConnection, out DataStreamReader, out NetworkPipeline)


Pops an event for a specific connection






##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)
```



##### Parameters

| Type              | Name         | Description                                 |
|-------------------|--------------|---------------------------------------------|
| NetworkConnection | connectionId | Connection for which to pop the next event. |
| DataStreamReader  | reader       | Stream reader for the event's data.         |
| NetworkPipeline   | pipeline     | Pipeline on which the event was received.   |

##### Returns

| Type              | Description      |
|-------------------|------------------|
| NetworkEvent.Type | The event's type |

#### RemoteEndPoint(NetworkConnection)







##### Declaration


``` lang-csharp
public NetworkEndPoint RemoteEndPoint(NetworkConnection id)
```



##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | id   |             |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### ScheduleFlushSend(JobHandle)


Schedules flushing the sendqueue. Should be called in cases where you
want the driver to send before the next ScheduleUpdate(JobHandle) is
called.






##### Declaration


``` lang-csharp
public JobHandle ScheduleFlushSend(JobHandle dep)
```



##### Parameters

| Type      | Name | Description             |
|-----------|------|-------------------------|
| JobHandle | dep  | Job on which to depend. |

##### Returns

| Type      | Description    |
|-----------|----------------|
| JobHandle | The job handle |

#### ScheduleUpdate(JobHandle)


Schedules update for driver. This should be called once a frame.






##### Declaration


``` lang-csharp
public JobHandle ScheduleUpdate(JobHandle dep = null)
```



##### Parameters

| Type      | Name | Description             |
|-----------|------|-------------------------|
| JobHandle | dep  | Job on which to depend. |

##### Returns

| Type      | Description             |
|-----------|-------------------------|
| JobHandle | The update job's handle |

#### ToConcurrent()


Create a Concurrent Copy of the NetworkDriver.






##### Declaration


``` lang-csharp
public NetworkDriver.Concurrent ToConcurrent()
```



##### Returns

| Type                     | Description |
|--------------------------|-------------|
| NetworkDriver.Concurrent |             |

### Implements



System.IDisposable





