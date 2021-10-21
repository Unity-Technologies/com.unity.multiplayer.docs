---  
id: Unity.Networking.Transport.NetworkDriver  
title: Unity.Networking.Transport.NetworkDriver  
---

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

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkDriver : IDisposable
```

## 

### NetworkDriver(INetworkInterface, INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkDriver(INetworkInterface netIf, params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkInterface     | netIf |             |
| INetworkParameter\[\] | param |             |

## 

### Bound

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool Bound { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsCreated

<div class="markdown level1 summary">

Returns if NetworkDriver has been created

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsCreated { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LastUpdateTime

<div class="markdown level1 summary">

Gets the value of the last update time

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly long LastUpdateTime { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

### Listening

<div class="markdown level1 summary">

Gets or sets if the driver is Listening

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Listening { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ReceiveErrorCode

<div class="markdown level1 summary">

Gets or sets Receive Error Code

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ReceiveErrorCode { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### AbortSend(DataStreamWriter)

<div class="markdown level1 summary">

Aborts a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AbortSend(DataStreamWriter writer)
```

#### Parameters

| Type             | Name   | Description                                       |
|------------------|--------|---------------------------------------------------|
| DataStreamWriter | writer | If you require the payload to be of certain size. |

#### Exceptions

| Type                             | Condition                                                            |
|----------------------------------|----------------------------------------------------------------------|
| System.InvalidOperationException | If endsend is called with a matching BeginSend call.                 |
| System.InvalidOperationException | If the connection got closed between the call of being and end send. |

### Accept()

<div class="markdown level1 summary">

Checks to see if there are any new connections to Accept.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkConnection Accept()
```

#### Returns

| Type              | Description                                             |
|-------------------|---------------------------------------------------------|
| NetworkConnection | If accept fails it returns a default NetworkConnection. |

### AllocateMemory(ref Int32)

<div class="markdown level1 summary">

Allocates temporary memory in NetworkDriver's data stream. You don't
need to deallocate it If you need to call this function several times -
use PinMemoryTillUpdate(Int32) to move 'head'

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IntPtr AllocateMemory(ref int dataLen)
```

#### Parameters

| Type         | Name    | Description                                       |
|--------------|---------|---------------------------------------------------|
| System.Int32 | dataLen | Size of memory to allocate in bytes. Must be \> 0 |

#### Returns

| Type          | Description                                                                                                                                                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.IntPtr | Pointer to allocated memory or IntPtr.Zero if there is no space left (this function doesn't set ReceiveErrorCode! caller should decide if this is Out of memory or something else) |

### BeginSend(NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

Acquires a DataStreamWriter for starting a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int BeginSend(NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

#### Parameters

| Type              | Name                | Description                                      |
|-------------------|---------------------|--------------------------------------------------|
| NetworkConnection | id                  | The NetworkConnection id to write through        |
| DataStreamWriter  | writer              | A DataStreamWriter to write to                   |
| System.Int32      | requiredPayloadSize | If you require the payload to be of certain size |

#### Returns

| Type         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| System.Int32 | Returns Success on a successful acquire. Otherwise returns an StatusCode indicating the error. |

#### Remarks

<div class="markdown level1 remarks">

Will throw a System.InvalidOperationException if the connection is in a
Connecting state.

</div>

### BeginSend(NetworkPipeline, NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

Acquires a DataStreamWriter for starting a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int BeginSend(NetworkPipeline pipe, NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

#### Parameters

| Type              | Name                | Description                                      |
|-------------------|---------------------|--------------------------------------------------|
| NetworkPipeline   | pipe                | The NetworkPipeline to write through             |
| NetworkConnection | id                  | The NetworkConnection id to write through        |
| DataStreamWriter  | writer              | A DataStreamWriter to write to                   |
| System.Int32      | requiredPayloadSize | If you require the payload to be of certain size |

#### Returns

| Type         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| System.Int32 | Returns Success on a successful acquire. Otherwise returns an StatusCode indicating the error. |

#### Remarks

<div class="markdown level1 remarks">

Will throw a System.InvalidOperationException if the connection is in a
Connecting state.

</div>

### Bind(NetworkEndPoint)

<div class="markdown level1 summary">

Bind the driver to a endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Bind(NetworkEndPoint endpoint)
```

#### Parameters

| Type            | Name     | Description              |
|-----------------|----------|--------------------------|
| NetworkEndPoint | endpoint | The endpoint to bind to. |

#### Returns

| Type         | Description                                                    |
|--------------|----------------------------------------------------------------|
| System.Int32 | Returns 0 on success. And a negative value if a error occured. |

#### Exceptions

| Type                             | Condition                                                         |
|----------------------------------|-------------------------------------------------------------------|
| System.InvalidOperationException | If the driver is not created properly                             |
| System.InvalidOperationException | If bind is called more then once on the driver                    |
| System.InvalidOperationException | If bind is called after a connection has already been established |

### Connect(NetworkEndPoint)

<div class="markdown level1 summary">

Connects the driver to a endpoint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkConnection Connect(NetworkEndPoint endpoint)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkEndPoint | endpoint |             |

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| NetworkConnection | If connect fails it returns a default NetworkConnection. |

#### Exceptions

| Type                             | Condition                             |
|----------------------------------|---------------------------------------|
| System.InvalidOperationException | If the driver is not created properly |

### Create(INetworkParameter\[\])

<div class="markdown level1 summary">

Helper function for creating a NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create(params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description                                                                                                                                            |
|-----------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| INetworkParameter\[\] | param | An optional array of INetworkParameter. There are currently only two INetworkParameter, the NetworkDataStreamParameter and the NetworkConfigParameter. |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |

### CreatePipeline(Type\[\])

<div class="markdown level1 summary">

Create a new pipeline.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipeline CreatePipeline(params Type[] stages)
```

#### Parameters

| Type            | Name   | Description                                     |
|-----------------|--------|-------------------------------------------------|
| System.Type\[\] | stages | An array of stages the pipeline should contain. |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkPipeline |             |

#### Exceptions

| Type                             | Condition                                 |
|----------------------------------|-------------------------------------------|
| System.InvalidOperationException | If the driver is not created properly     |
| System.InvalidOperationException | A connection has already been established |

### Disconnect(NetworkConnection)

<div class="markdown level1 summary">

Disconnects a NetworkConnection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Disconnect(NetworkConnection id)
```

#### Parameters

| Type              | Name | Description                                  |
|-------------------|------|----------------------------------------------|
| NetworkConnection | id   | The NetworkConnection we want to Disconnect. |

#### Returns

| Type         | Description          |
|--------------|----------------------|
| System.Int32 | Return 0 on success. |

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### EndSend(DataStreamWriter)

<div class="markdown level1 summary">

Ends a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int EndSend(DataStreamWriter writer)
```

#### Parameters

| Type             | Name   | Description                                       |
|------------------|--------|---------------------------------------------------|
| DataStreamWriter | writer | If you require the payload to be of certain size. |

#### Returns

| Type         | Description                                          |
|--------------|------------------------------------------------------|
| System.Int32 | The length of the buffer sent if nothing went wrong. |

#### Exceptions

| Type                             | Condition                                                            |
|----------------------------------|----------------------------------------------------------------------|
| System.InvalidOperationException | If endsend is called with a matching BeginSend call.                 |
| System.InvalidOperationException | If the connection got closed between the call of being and end send. |

### GetConnectionState(NetworkConnection)

<div class="markdown level1 summary">

Gets the connection state using the specified NetworkConnection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkConnection.State GetConnectionState(NetworkConnection con)
```

#### Parameters

| Type              | Name | Description    |
|-------------------|------|----------------|
| NetworkConnection | con  | The connection |

#### Returns

| Type                    | Description                  |
|-------------------------|------------------------------|
| NetworkConnection.State | The network connection state |

### GetEventQueueSizeForConnection(NetworkConnection)

<div class="markdown level1 summary">

Returns the size of the EventQueue for a specific connection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int GetEventQueueSizeForConnection(NetworkConnection connectionId)
```

#### Parameters

| Type              | Name         | Description                                       |
|-------------------|--------------|---------------------------------------------------|
| NetworkConnection | connectionId | Connection for which to get the event queue size. |

#### Returns

| Type         | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| System.Int32 | If the connection is valid it returns the size of the event queue otherwise it returns 0. |

### GetPipelineBuffers(NetworkPipeline, NetworkPipelineStageId, NetworkConnection, out NativeArray\&lt;Byte&gt;, out NativeArray\&lt;Byte&gt;, out NativeArray\&lt;Byte&gt;)

<div class="markdown level1 summary">

Returns the PipelineBuffers for a specific pipeline and stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void GetPipelineBuffers(NetworkPipeline pipeline, NetworkPipelineStageId stageId, NetworkConnection connection, out NativeArray<byte> readProcessingBuffer, out NativeArray<byte> writeProcessingBuffer, out NativeArray<byte> sharedBuffer)
```

#### Parameters

| Type                       | Name                  | Description                                                     |
|----------------------------|-----------------------|-----------------------------------------------------------------|
| NetworkPipeline            | pipeline              | Pipeline for which to get the buffers.                          |
| NetworkPipelineStageId     | stageId               | Pipeline for which to get the buffers.                          |
| NetworkConnection          | connection            | Connection for which to the buffers.                            |
| NativeArray\&lt;System.Byte&gt;  | readProcessingBuffer  | The buffer used to process read (receive) operations.           |
| NativeArray\&lt;System.Byte&gt;  | writeProcessingBuffer | The buffer used to process write (send) operations.             |
| NativeArray\&lt;System.Byte&gt; | sharedBuffer          | The buffer containing the internal state of the pipeline stage. |

#### Exceptions

| Type                             | Condition                         |
|----------------------------------|-----------------------------------|
| System.InvalidOperationException | If the the connection is invalid. |

### Listen()

<div class="markdown level1 summary">

Set the driver to Listen for incoming connections

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Listen()
```

#### Returns

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Returns 0 on success. |

#### Exceptions

| Type                             | Condition                                          |
|----------------------------------|----------------------------------------------------|
| System.InvalidOperationException | If the driver is not created properly              |
| System.InvalidOperationException | If listen is called more then once on the driver   |
| System.InvalidOperationException | If bind has not been called before calling Listen. |

### LocalEndPoint()

<div class="markdown level1 summary">

Returns local NetworkEndPoint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint LocalEndPoint()
```

#### Returns

| Type            | Description           |
|-----------------|-----------------------|
| NetworkEndPoint | The network end point |

### MaxHeaderSize(NetworkPipeline)

<div class="markdown level1 summary">

Max headersize including optional NetworkPipeline

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MaxHeaderSize(NetworkPipeline pipe)
```

#### Parameters

| Type            | Name | Description                                            |
|-----------------|------|--------------------------------------------------------|
| NetworkPipeline | pipe | The pipeline for which to get the maximum header size. |

#### Returns

| Type         | Description              |
|--------------|--------------------------|
| System.Int32 | The maximum header size. |

### PinMemoryTillUpdate(Int32)

<div class="markdown level1 summary">

Moves 'head' of allocator for 'length' bytes. Use this to 'pin' memory
in till the next update. If you don't call it - it is 'pinned' till the
next call to AllocateMemory(ref Int32) Means every time you call
AllocateMemory(ref Int32) without PinMemoryTillUpdate(Int32) memory is
overriden

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PinMemoryTillUpdate(int length)
```

#### Parameters

| Type         | Name   | Description   |
|--------------|--------|---------------|
| System.Int32 | length | Bytes to move |

#### Returns

| Type         | Description                   |
|--------------|-------------------------------|
| System.Int32 | Returns head of pinned memory |

### PopEvent(out NetworkConnection, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader)
```

#### Parameters

| Type              | Name   | Description |
|-------------------|--------|-------------|
| NetworkConnection | con    |             |
| DataStreamReader  | reader |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEvent(out NetworkConnection, out DataStreamReader, out NetworkPipeline)

<div class="markdown level1 summary">

Pops an event

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader, out NetworkPipeline pipeline)
```

#### Parameters

| Type              | Name     | Description                               |
|-------------------|----------|-------------------------------------------|
| NetworkConnection | con      | Connection on which the event occured.    |
| DataStreamReader  | reader   | Stream reader for the event's data.       |
| NetworkPipeline   | pipeline | Pipeline on which the event was received. |

#### Returns

| Type              | Description      |
|-------------------|------------------|
| NetworkEvent.Type | The event's type |

### PopEventForConnection(NetworkConnection, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader)
```

#### Parameters

| Type              | Name         | Description |
|-------------------|--------------|-------------|
| NetworkConnection | connectionId |             |
| DataStreamReader  | reader       |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEventForConnection(NetworkConnection, out DataStreamReader, out NetworkPipeline)

<div class="markdown level1 summary">

Pops an event for a specific connection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)
```

#### Parameters

| Type              | Name         | Description                                 |
|-------------------|--------------|---------------------------------------------|
| NetworkConnection | connectionId | Connection for which to pop the next event. |
| DataStreamReader  | reader       | Stream reader for the event's data.         |
| NetworkPipeline   | pipeline     | Pipeline on which the event was received.   |

#### Returns

| Type              | Description      |
|-------------------|------------------|
| NetworkEvent.Type | The event's type |

### RemoteEndPoint(NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint RemoteEndPoint(NetworkConnection id)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | id   |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### ScheduleFlushSend(JobHandle)

<div class="markdown level1 summary">

Schedules flushing the sendqueue. Should be called in cases where you
want the driver to send before the next ScheduleUpdate(JobHandle) is
called.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleFlushSend(JobHandle dep)
```

#### Parameters

| Type      | Name | Description             |
|-----------|------|-------------------------|
| JobHandle | dep  | Job on which to depend. |

#### Returns

| Type      | Description    |
|-----------|----------------|
| JobHandle | The job handle |

### ScheduleUpdate(JobHandle)

<div class="markdown level1 summary">

Schedules update for driver. This should be called once a frame.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleUpdate(JobHandle dep = null)
```

#### Parameters

| Type      | Name | Description             |
|-----------|------|-------------------------|
| JobHandle | dep  | Job on which to depend. |

#### Returns

| Type      | Description             |
|-----------|-------------------------|
| JobHandle | The update job's handle |

### ToConcurrent()

<div class="markdown level1 summary">

Create a Concurrent Copy of the NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkDriver.Concurrent ToConcurrent()
```

#### Returns

| Type                     | Description |
|--------------------------|-------------|
| NetworkDriver.Concurrent |             |

### Implements

<div>

System.IDisposable

</div>
