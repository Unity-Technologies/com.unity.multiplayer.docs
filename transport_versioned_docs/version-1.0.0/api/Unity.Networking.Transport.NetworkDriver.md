---  
id: Unity.Networking.Transport.NetworkDriver  
title: Unity.Networking.Transport.NetworkDriver  
---

<div class="markdown level0 summary">

The NetworkDriver is an implementation of Virtual Connections over any
transport.

Basic usage:

    var driver = new NetworkDriver.Create();

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

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct NetworkDriver : IDisposable

## Constructors 

### NetworkDriver(INetworkInterface, INetworkParameter\[\])

<div class="markdown level1 summary">

Constructor for NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDriver(INetworkInterface netIf, params INetworkParameter[] param)

#### Parameters

| Type                  | Name  | Description                                                                                                                                   |
|-----------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| INetworkInterface     | netIf |                                                                                                                                               |
| INetworkParameter\[\] | param | An array of INetworkParameter. There are currently only two INetworkParameter, the NetworkDataStreamParameter and the NetworkConfigParameter. |

#### Exceptions

| Type                     | Condition                                                                     |
|--------------------------|-------------------------------------------------------------------------------|
| System.ArgumentException | Thrown if the value for NetworkDataStreamParameter.size is smaller then zero. |

## Properties 

### IsCreated

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsCreated { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LastUpdateTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public long LastUpdateTime { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

### Listening

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Listening { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ReceiveErrorCode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReceiveErrorCode { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### AbortSend(DataStreamWriter)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void AbortSend(DataStreamWriter writer)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| DataStreamWriter | writer |             |

### Accept()

<div class="markdown level1 summary">

Checks to see if there are any new connections to Accept.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkConnection Accept()

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| NetworkConnection | If accept fails it returnes a default NetworkConnection. |

### BeginSend(NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int BeginSend(NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)

#### Parameters

| Type              | Name                | Description |
|-------------------|---------------------|-------------|
| NetworkConnection | id                  |             |
| DataStreamWriter  | writer              |             |
| System.Int32      | requiredPayloadSize |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### BeginSend(NetworkPipeline, NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int BeginSend(NetworkPipeline pipe, NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)

#### Parameters

| Type              | Name                | Description |
|-------------------|---------------------|-------------|
| NetworkPipeline   | pipe                |             |
| NetworkConnection | id                  |             |
| DataStreamWriter  | writer              |             |
| System.Int32      | requiredPayloadSize |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Bind(NetworkEndPoint)

<div class="markdown level1 summary">

Bind the driver to a endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Bind(NetworkEndPoint endpoint)

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

    public NetworkConnection Connect(NetworkEndPoint endpoint)

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

    public static NetworkDriver Create(params INetworkParameter[] param)

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

    public NetworkPipeline CreatePipeline(params Type[] stages)

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

    public int Disconnect(NetworkConnection id)

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

    public void Dispose()

### EndSend(DataStreamWriter)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int EndSend(DataStreamWriter writer)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| DataStreamWriter | writer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### GetConnectionState(NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkConnection.State GetConnectionState(NetworkConnection con)

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | con  |             |

#### Returns

| Type                    | Description |
|-------------------------|-------------|
| NetworkConnection.State |             |

### GetEventQueueSizeForConnection(NetworkConnection)

<div class="markdown level1 summary">

Returns the size of the eventqueue for a specific connection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int GetEventQueueSizeForConnection(NetworkConnection connectionId)

#### Parameters

| Type              | Name         | Description |
|-------------------|--------------|-------------|
| NetworkConnection | connectionId |             |

#### Returns

| Type         | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| System.Int32 | If the connection is valid it returns the size of the event queue otherwise it returns 0. |

### GetPipelineBuffers(NetworkPipeline, NetworkPipelineStageId, NetworkConnection, out NativeArray&lt;Byte&gt;, out NativeArray&lt;Byte&gt;, out NativeArray&lt;Byte&gt;)

<div class="markdown level1 summary">

Returns the PipelineBuffers for a specific pipeline and stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void GetPipelineBuffers(NetworkPipeline pipeline, NetworkPipelineStageId stageId, NetworkConnection connection, out NativeArray<byte> readProcessingBuffer, out NativeArray<byte> writeProcessingBuffer, out NativeArray<byte> sharedBuffer)

#### Parameters

| Type                                             | Name                  | Description |
|--------------------------------------------------|-----------------------|-------------|
| NetworkPipeline                                  | pipeline              |             |
| NetworkPipelineStageId                           | stageId               |             |
| NetworkConnection                                | connection            |             |
| Unity.Collections.NativeArray&lt;System.Byte&gt; | readProcessingBuffer  |             |
| Unity.Collections.NativeArray&lt;System.Byte&gt; | writeProcessingBuffer |             |
| Unity.Collections.NativeArray&lt;System.Byte&gt; | sharedBuffer          |             |

#### Exceptions

| Type                             | Condition                         |
|----------------------------------|-----------------------------------|
| System.InvalidOperationException | If the the connection is invalid. |

### Listen()

<div class="markdown level1 summary">

Set the driver to Listen for incomming connections

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Listen()

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEndPoint LocalEndPoint()

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### MaxHeaderSize(NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int MaxHeaderSize(NetworkPipeline pipe)

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkPipeline | pipe |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PopEvent(out NetworkConnection, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader)

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader, out NetworkPipeline pipeline)

#### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| NetworkConnection | con      |             |
| DataStreamReader  | reader   |             |
| NetworkPipeline   | pipeline |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEventForConnection(NetworkConnection, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader)

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)

#### Parameters

| Type              | Name         | Description |
|-------------------|--------------|-------------|
| NetworkConnection | connectionId |             |
| DataStreamReader  | reader       |             |
| NetworkPipeline   | pipeline     |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### RemoteEndPoint(NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkEndPoint RemoteEndPoint(NetworkConnection id)

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public JobHandle ScheduleFlushSend(JobHandle dep)

#### Parameters

| Type                 | Name | Description |
|----------------------|------|-------------|
| Unity.Jobs.JobHandle | dep  |             |

#### Returns

| Type                 | Description |
|----------------------|-------------|
| Unity.Jobs.JobHandle |             |

### ScheduleUpdate(JobHandle)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public JobHandle ScheduleUpdate(JobHandle dep = default(JobHandle))

#### Parameters

| Type                 | Name | Description |
|----------------------|------|-------------|
| Unity.Jobs.JobHandle | dep  |             |

#### Returns

| Type                 | Description |
|----------------------|-------------|
| Unity.Jobs.JobHandle |             |

### ToConcurrent()

<div class="markdown level1 summary">

Create a Concurrent Copy of the NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDriver.Concurrent ToConcurrent()

#### Returns

| Type                     | Description |
|--------------------------|-------------|
| NetworkDriver.Concurrent |             |

### Implements

<div>

System.IDisposable

</div>
