<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Struct NetworkDriver

<div class="markdown level0 summary">

The NetworkDriver is an implementation of Virtual Connections over any
transport.

Basic usage:

    var driver = NetworkDriver.Create();

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkDriver : IDisposable
```

</div>

### Constructors

#### NetworkDriver(INetworkInterface)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkDriver(INetworkInterface netIf)
```

</div>

##### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| INetworkInterface | netIf |             |

#### NetworkDriver(INetworkInterface, INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
[Obsolete("Use NetworkDriver(INetworkInterface, NetworkSettings) instead", false)]
public NetworkDriver(INetworkInterface netIf, params INetworkParameter[] param)
```

</div>

##### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkInterface     | netIf |             |
| INetworkParameter\[\] | param |             |

#### NetworkDriver(INetworkInterface, NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkDriver(INetworkInterface netIf, NetworkSettings settings)
```

</div>

##### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| INetworkInterface | netIf    |             |
| NetworkSettings   | settings |             |

### Properties

#### Bound

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool Bound { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsCreated

<div class="markdown level1 summary">

Returns if NetworkDriver has been created

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsCreated { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LastUpdateTime

<div class="markdown level1 summary">

Gets the value of the last update time

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly long LastUpdateTime { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### Listening

<div class="markdown level1 summary">

Gets or sets if the driver is Listening

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Listening { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ReceiveErrorCode

<div class="markdown level1 summary">

Gets or sets Receive Error Code

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int ReceiveErrorCode { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### AbortSend(DataStreamWriter)

<div class="markdown level1 summary">

Aborts a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void AbortSend(DataStreamWriter writer)
```

</div>

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

<div class="markdown level1 summary">

Checks to see if there are any new connections to Accept.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkConnection Accept()
```

</div>

##### Returns

| Type              | Description                                             |
|-------------------|---------------------------------------------------------|
| NetworkConnection | If accept fails it returns a default NetworkConnection. |

#### BeginSend(NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

Acquires a DataStreamWriter for starting a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int BeginSend(NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

</div>

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

<div class="markdown level1 remarks">

Will throw a System.InvalidOperationException if the connection is in a
Connecting state.

</div>

#### BeginSend(NetworkPipeline, NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

Acquires a DataStreamWriter for starting a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int BeginSend(NetworkPipeline pipe, NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

</div>

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

<div class="markdown level1 remarks">

Will throw a System.InvalidOperationException if the connection is in a
Connecting state.

</div>

#### Bind(NetworkEndPoint)

<div class="markdown level1 summary">

Bind the driver to a endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Bind(NetworkEndPoint endpoint)
```

</div>

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

<div class="markdown level1 summary">

Connects the driver to a endpoint

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkConnection Connect(NetworkEndPoint endpoint)
```

</div>

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

<div class="markdown level1 summary">

Helper function for creating a NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkDriver Create()
```

</div>

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Create(INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
[Obsolete("Use Create(NetworkSettings) instead", false)]
public static NetworkDriver Create(params INetworkParameter[] param)
```

</div>

##### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkParameter\[\] | param |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Create(NetworkSettings)

<div class="markdown level1 summary">

Helper function for creating a NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkDriver Create(NetworkSettings settings)
```

</div>

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

<div class="markdown level1 summary">

Helper function for creating a NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkDriver Create<N>(N networkInterface)
    where N : INetworkInterface
```

</div>

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

<div class="markdown level1 summary">

Helper function for creating a NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkDriver Create<N>(N networkInterface, NetworkSettings settings)
    where N : INetworkInterface
```

</div>

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

<div class="markdown level1 summary">

Create a new pipeline.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkPipeline CreatePipeline(params Type[] stages)
```

</div>

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

<div class="markdown level1 summary">

Disconnects a NetworkConnection

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Disconnect(NetworkConnection id)
```

</div>

##### Parameters

| Type              | Name | Description                                  |
|-------------------|------|----------------------------------------------|
| NetworkConnection | id   | The NetworkConnection we want to Disconnect. |

##### Returns

| Type         | Description          |
|--------------|----------------------|
| System.Int32 | Return 0 on success. |

#### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Dispose()
```

</div>

#### EndSend(DataStreamWriter)

<div class="markdown level1 summary">

Ends a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int EndSend(DataStreamWriter writer)
```

</div>

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

<div class="markdown level1 summary">

Gets the connection state using the specified NetworkConnection

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkConnection.State GetConnectionState(NetworkConnection con)
```

</div>

##### Parameters

| Type              | Name | Description    |
|-------------------|------|----------------|
| NetworkConnection | con  | The connection |

##### Returns

| Type                    | Description                  |
|-------------------------|------------------------------|
| NetworkConnection.State | The network connection state |

#### GetEventQueueSizeForConnection(NetworkConnection)

<div class="markdown level1 summary">

Returns the size of the EventQueue for a specific connection

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int GetEventQueueSizeForConnection(NetworkConnection connectionId)
```

</div>

##### Parameters

| Type              | Name         | Description                                       |
|-------------------|--------------|---------------------------------------------------|
| NetworkConnection | connectionId | Connection for which to get the event queue size. |

##### Returns

| Type         | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| System.Int32 | If the connection is valid it returns the size of the event queue otherwise it returns 0. |

#### GetPipelineBuffers(NetworkPipeline, NetworkPipelineStageId, NetworkConnection, out NativeArray\<Byte\>, out NativeArray\<Byte\>, out NativeArray\<Byte\>)

<div class="markdown level1 summary">

Returns the PipelineBuffers for a specific pipeline and stage.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void GetPipelineBuffers(NetworkPipeline pipeline, NetworkPipelineStageId stageId, NetworkConnection connection, out NativeArray<byte> readProcessingBuffer, out NativeArray<byte> writeProcessingBuffer, out NativeArray<byte> sharedBuffer)
```

</div>

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

<div class="markdown level1 summary">

Set the driver to Listen for incoming connections

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Listen()
```

</div>

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

<div class="markdown level1 summary">

Returns local NetworkEndPoint

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEndPoint LocalEndPoint()
```

</div>

##### Returns

| Type            | Description           |
|-----------------|-----------------------|
| NetworkEndPoint | The network end point |

#### MaxHeaderSize(NetworkPipeline)

<div class="markdown level1 summary">

Max headersize including optional NetworkPipeline

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MaxHeaderSize(NetworkPipeline pipe)
```

</div>

##### Parameters

| Type            | Name | Description                                            |
|-----------------|------|--------------------------------------------------------|
| NetworkPipeline | pipe | The pipeline for which to get the maximum header size. |

##### Returns

| Type         | Description              |
|--------------|--------------------------|
| System.Int32 | The maximum header size. |

#### PopEvent(out NetworkConnection, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader)
```

</div>

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

<div class="markdown level1 summary">

Pops an event

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader, out NetworkPipeline pipeline)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader)
```

</div>

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

<div class="markdown level1 summary">

Pops an event for a specific connection

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEndPoint RemoteEndPoint(NetworkConnection id)
```

</div>

##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | id   |             |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### ScheduleFlushSend(JobHandle)

<div class="markdown level1 summary">

Schedules flushing the sendqueue. Should be called in cases where you
want the driver to send before the next ScheduleUpdate(JobHandle) is
called.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public JobHandle ScheduleFlushSend(JobHandle dep)
```

</div>

##### Parameters

| Type      | Name | Description             |
|-----------|------|-------------------------|
| JobHandle | dep  | Job on which to depend. |

##### Returns

| Type      | Description    |
|-----------|----------------|
| JobHandle | The job handle |

#### ScheduleUpdate(JobHandle)

<div class="markdown level1 summary">

Schedules update for driver. This should be called once a frame.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public JobHandle ScheduleUpdate(JobHandle dep = null)
```

</div>

##### Parameters

| Type      | Name | Description             |
|-----------|------|-------------------------|
| JobHandle | dep  | Job on which to depend. |

##### Returns

| Type      | Description             |
|-----------|-------------------------|
| JobHandle | The update job's handle |

#### ToConcurrent()

<div class="markdown level1 summary">

Create a Concurrent Copy of the NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkDriver.Concurrent ToConcurrent()
```

</div>

##### Returns

| Type                     | Description |
|--------------------------|-------------|
| NetworkDriver.Concurrent |             |

### Implements

<div>

System.IDisposable

</div>

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
