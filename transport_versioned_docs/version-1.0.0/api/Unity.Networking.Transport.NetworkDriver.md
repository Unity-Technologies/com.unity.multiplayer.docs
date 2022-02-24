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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkDriver : IDisposable
```

## 

### NetworkDriver(INetworkInterface)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkDriver(INetworkInterface netIf)
```

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| INetworkInterface | netIf |             |

### NetworkDriver(INetworkInterface, INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[Obsolete("Use NetworkDriver(INetworkInterface, NetworkSettings) instead", false)]
public NetworkDriver(INetworkInterface netIf, params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkInterface     | netIf |             |
| INetworkParameter\[\] | param |             |

### NetworkDriver(INetworkInterface, NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkDriver(INetworkInterface netIf, NetworkSettings settings)
```

#### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| INetworkInterface | netIf    |             |
| NetworkSettings   | settings |             |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AbortSend(DataStreamWriter writer)
```

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

``` lang-csharp
public NetworkConnection Accept()
```

#### Returns

| Type              | Description                                              |
|-------------------|----------------------------------------------------------|
| NetworkConnection | If accept fails it returnes a default NetworkConnection. |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int BeginSend(NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

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

``` lang-csharp
public int BeginSend(NetworkPipeline pipe, NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

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

### Create()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

### Create(INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[Obsolete("Use Create(NetworkSettings) instead", false)]
public static NetworkDriver Create(params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkParameter\[\] | param |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

### Create(NetworkSettings)

<div class="markdown level1 summary">

Helper function for creating a NetworkDriver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create(NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int EndSend(DataStreamWriter writer)
```

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

``` lang-csharp
public NetworkConnection.State GetConnectionState(NetworkConnection con)
```

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

Returns the size of the EventQueue for a specific connection

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int GetEventQueueSizeForConnection(NetworkConnection connectionId)
```

#### Parameters

| Type              | Name         | Description |
|-------------------|--------------|-------------|
| NetworkConnection | connectionId |             |

#### Returns

| Type         | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| System.Int32 | If the connection is valid it returns the size of the event queue otherwise it returns 0. |

### GetPipelineBuffers(NetworkPipeline, NetworkPipelineStageId, NetworkConnection, out NativeArray&lt;Byte&gt;, out NativeArray&lt;Byte&gt;, out NativeArray&lt;Byte&gt;))

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

| Type                       | Name                  | Description |
|----------------------------|-----------------------|-------------|
| NetworkPipeline            | pipeline              |             |
| NetworkPipelineStageId     | stageId               |             |
| NetworkConnection          | connection            |             |
| NativeArray&lt;System.Byte&gt; | readProcessingBuffer  |             |
| NativeArray&lt;System.Byte&gt;| writeProcessingBuffer |             |
| NativeArray&lt;System.Byte&gt; | sharedBuffer          |             |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint LocalEndPoint()
```

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

``` lang-csharp
public int MaxHeaderSize(NetworkPipeline pipe)
```

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkPipeline | pipe |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEvent(out NetworkConnection con, out DataStreamReader reader, out NetworkPipeline pipeline)
```

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)
```

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleFlushSend(JobHandle dependency)
```

#### Parameters

| Type      | Name       | Description |
|-----------|------------|-------------|
| JobHandle | dependency |             |

#### Returns

| Type      | Description |
|-----------|-------------|
| JobHandle |             |

### ScheduleUpdate(JobHandle)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleUpdate(JobHandle dependency = null)
```

#### Parameters

| Type      | Name       | Description |
|-----------|------------|-------------|
| JobHandle | dependency |             |

#### Returns

| Type      | Description |
|-----------|-------------|
| JobHandle |             |

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
