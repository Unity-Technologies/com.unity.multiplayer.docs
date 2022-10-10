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
[Obsolete("Use NetworkDriver.Create(INetworkInterface networkInterface) instead", true)]
public NetworkDriver(INetworkInterface netIf)
```

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| INetworkInterface | netIf |             |

### NetworkDriver(INetworkInterface, NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[Obsolete("Use NetworkDriver.Create(INetworkInterface networkInterface, NetworkSettings settings) instead", true)]
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

### CurrentSettings

<div class="markdown level1 summary">

Current settings used by the driver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkSettings CurrentSettings { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |

#### Remarks

<div class="markdown level1 remarks">

Current settings are read-only and can't be modified except through
methods like .

</div>

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
public readonly int ReceiveErrorCode { get; }
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

### Bind(NetworkEndpoint)

<div class="markdown level1 summary">

Bind the driver to a endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Bind(NetworkEndpoint endpoint)
```

#### Parameters

| Type            | Name     | Description              |
|-----------------|----------|--------------------------|
| NetworkEndpoint | endpoint | The endpoint to bind to. |

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

### Connect(NetworkEndpoint)

<div class="markdown level1 summary">

Connects the driver to a endpoint

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkConnection Connect(NetworkEndpoint endpoint)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkEndpoint | endpoint |             |

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

| Type            | Name     | Description                   |
|-----------------|----------|-------------------------------|
| NetworkSettings | settings | Configuration for the driver. |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |

### Create\<N>(N)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create<N>(N networkInterface)
    where N : struct, INetworkInterface
```

#### Parameters

| Type | Name             | Description |
|------|------------------|-------------|
| N    | networkInterface |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| N    |             |

### Create\<N>(N, NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create<N>(N networkInterface, NetworkSettings settings)
    where N : struct, INetworkInterface
```

#### Parameters

| Type            | Name             | Description |
|-----------------|------------------|-------------|
| N               | networkInterface |             |
| NetworkSettings | settings         |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| N    |             |

### Create\<N>(ref N)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create<N>(ref N networkInterface)
    where N : struct, INetworkInterface
```

#### Parameters

| Type | Name             | Description |
|------|------------------|-------------|
| N    | networkInterface |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| N    |             |

### Create\<N>(ref N, NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkDriver Create<N>(ref N networkInterface, NetworkSettings settings)
    where N : struct, INetworkInterface
```

#### Parameters

| Type            | Name             | Description |
|-----------------|------------------|-------------|
| N               | networkInterface |             |
| NetworkSettings | settings         |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkDriver |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| N    |             |

### CreatePipeline(NativeArray\<NetworkPipelineStageId>)

<div class="markdown level1 summary">

Create a new pipeline from stage IDs.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipeline CreatePipeline(NativeArray<NetworkPipelineStageId> stages)
```

#### Parameters

| Type                                  | Name   | Description                                     |
|---------------------------------------|--------|-------------------------------------------------|
| NativeArray\<NetworkPipelineStageId\> | stages | Array of stage IDs the pipeline should contain. |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkPipeline |             |

#### Remarks

<div class="markdown level1 remarks">

The order of the different stages is important, as that is the order in
which the stages will process a packet when sending messages (the
reverse order is used when processing received packets).

Note that this method is Burst-compatible. Note also that no reference
to the native array is kept internally by the driver. It is thus safe to
dispose of it immediately after calling this method (or to use a
temporary allocation for the array).

</div>

#### Exceptions

| Type                             | Condition                                                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.InvalidOperationException | If collections checks are enabled (ENABLE_UNITY_COLLECTIONS_CHECKS is defined), will be thrown if called after the driver has established connections or before it is created. |

### CreatePipeline(Type\[\])

<div class="markdown level1 summary">

Create a new pipeline from stage types.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPipeline CreatePipeline(params Type[] stages)
```

#### Parameters

| Type            | Name   | Description                                  |
|-----------------|--------|----------------------------------------------|
| System.Type\[\] | stages | Array of stages the pipeline should contain. |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkPipeline |             |

#### Remarks

<div class="markdown level1 remarks">

The order of the different stages is important, as that is the order in
which the stages will process a packet when sending messages (the
reverse order is used when processing received packets).

</div>

#### Exceptions

| Type                             | Condition                                                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.InvalidOperationException | If collections checks are enabled (ENABLE_UNITY_COLLECTIONS_CHECKS is defined), will be thrown if called after the driver has established connections or before it is created. |

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

### GetLocalEndpoint()

<div class="markdown level1 summary">

Get the local endpoint used by the driver (the endpoint remote peers
will use to reach this driver).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndpoint GetLocalEndpoint()
```

#### Returns

| Type            | Description                       |
|-----------------|-----------------------------------|
| NetworkEndpoint | The local endpoint of the driver. |

### GetPipelineBuffers(NetworkPipeline, NetworkPipelineStageId, NetworkConnection, out NativeArray\<Byte>, out NativeArray\<Byte>, out NativeArray\<Byte>)

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
| NativeArray\<System.Byte\> | readProcessingBuffer  |             |
| NativeArray\<System.Byte\> | writeProcessingBuffer |             |
| NativeArray\<System.Byte\> | sharedBuffer          |             |

#### Exceptions

| Type                             | Condition                         |
|----------------------------------|-----------------------------------|
| System.InvalidOperationException | If the the connection is invalid. |

### GetRemoteEndpoint(NetworkConnection)

<div class="markdown level1 summary">

Get the remote endpoint of a connection (the endpoint used to reach the
remote peer on the connection).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndpoint GetRemoteEndpoint(NetworkConnection id)
```

#### Parameters

| Type              | Name | Description                        |
|-------------------|------|------------------------------------|
| NetworkConnection | id   | Connection to get the endpoint of. |

#### Returns

| Type            | Description                            |
|-----------------|----------------------------------------|
| NetworkEndpoint | The remote endpoint of the connection. |

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
[Obsolete("LocalEndPoint has been renamed to GetLocalEndpoint. (UnityUpgradable) -> GetLocalEndpoint()", false)]
public NetworkEndpoint LocalEndPoint()
```

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

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

### RegisterPipelineStage\<T>(T)

<div class="markdown level1 summary">

Register a custom pipeline stage.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RegisterPipelineStage<T>(T stage)
    where T : struct, INetworkPipelineStage
```

#### Parameters

| Type | Name  | Description                        |
|------|-------|------------------------------------|
| T    | stage | An instance of the pipeline stage. |

#### Type Parameters

| Name | Description                                         |
|------|-----------------------------------------------------|
| T    | The type of the pipeline stage (must be unmanaged). |

#### Remarks

<div class="markdown level1 remarks">

Can only be called before a driver is bound (see Bind(NetworkEndpoint)).

Note that the default pipeline stages (FragmentationPipelineStage,
ReliableSequencedPipelineStage, UnreliableSequencedPipelineStage, and
SimulatorPipelineStage) don't need to be registered. Registering a
pipeline stage is only required for custom ones.

</div>

#### Exceptions

| Type                             | Condition                                                                                                                                                   |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.InvalidOperationException | If collections checks are enabled (ENABLE_UNITY_COLLECTIONS_CHECKS is defined), will be thrown if called after the driver is bound or before it is created. |

### RemoteEndPoint(NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[Obsolete("RemoteEndPoint has been renamed to GetRemoteEndpoint. (UnityUpgradable) -> GetRemoteEndpoint(*)", false)]
public NetworkEndpoint RemoteEndPoint(NetworkConnection id)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | id   |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

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

### Extension Methods

<div>

NetworkSimulatorParameterExtensions.ModifyNetworkSimulatorParameters(NetworkDriver,
NetworkSimulatorParameter)

</div>

<div>

SimulatorStageParameterExtensions.ModifySimulatorStageParameters(NetworkDriver,
SimulatorUtility.Parameters)

</div>

<div>

NetworkDriverRelayExtensions.GetRelayConnectionStatus(NetworkDriver)

</div>

<div>

NetworkDriverRelayExtensions.Connect(NetworkDriver)

</div>
