---  
id: Unity.Networking.Transport.INetworkInterface  
title: Unity.Networking.Transport.INetworkInterface  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

IDisposable.Dispose()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface INetworkInterface : IDisposable

## Properties 

### LocalEndPoint

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    NetworkInterfaceEndPoint LocalEndPoint { get; }

#### Property Value

| Type                     | Description |
|--------------------------|-------------|
| NetworkInterfaceEndPoint |             |

## Methods 

### Bind(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Binds the medium to a specific endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    int Bind(NetworkInterfaceEndPoint endpoint)

#### Parameters

| Type                     | Name     | Description                       |
|--------------------------|----------|-----------------------------------|
| NetworkInterfaceEndPoint | endpoint | A valid NetworkInterfaceEndPoint. |

#### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

### CreateInterfaceEndPoint(NetworkEndPoint, out NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)

#### Parameters

| Type                     | Name     | Description |
|--------------------------|----------|-------------|
| NetworkEndPoint          | address  |             |
| NetworkInterfaceEndPoint | endpoint |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### CreateSendInterface()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    NetworkSendInterface CreateSendInterface()

#### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkSendInterface |             |

### GetGenericEndPoint(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)

#### Parameters

| Type                     | Name     | Description |
|--------------------------|----------|-------------|
| NetworkInterfaceEndPoint | endpoint |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### Initialize(INetworkParameter\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    int Initialize(params INetworkParameter[] param)

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkParameter\[\] | param |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ScheduleReceive(NetworkPacketReceiver, JobHandle)

<div class="markdown level1 summary">

Schedule a ReceiveJob. This is used to read data from your supported
medium and pass it to the AppendData function supplied by NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    JobHandle ScheduleReceive(NetworkPacketReceiver receiver, JobHandle dep)

#### Parameters

| Type                  | Name     | Description                                             |
|-----------------------|----------|---------------------------------------------------------|
| NetworkPacketReceiver | receiver | A NetworkDriver used to parse the data received.        |
| Unity.Jobs.JobHandle  | dep      | A Unity.Jobs.JobHandle to any dependency we might have. |

#### Returns

| Type                 | Description                                                      |
|----------------------|------------------------------------------------------------------|
| Unity.Jobs.JobHandle | A Unity.Jobs.JobHandle to our newly created ScheduleReceive Job. |

### ScheduleSend(NativeQueue&lt;QueuedSendMessage&gt;, JobHandle)

<div class="markdown level1 summary">

Schedule a SendJob. This is used to flush send queues to your supported
medium

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    JobHandle ScheduleSend(NativeQueue<QueuedSendMessage> sendQueue, JobHandle dep)

#### Parameters

| Type                                 | Name      | Description                                                |
|--------------------------------------|-----------|------------------------------------------------------------|
| NativeQueue&lt;QueuedSendMessage&gt; | sendQueue | The send queue which can be used to emulate parallel send. |
| Unity.Jobs.JobHandle                 | dep       | A Unity.Jobs.JobHandle to any dependency we might have.    |

#### Returns

| Type                 | Description                                                   |
|----------------------|---------------------------------------------------------------|
| Unity.Jobs.JobHandle | A Unity.Jobs.JobHandle to our newly created ScheduleSend Job. |
