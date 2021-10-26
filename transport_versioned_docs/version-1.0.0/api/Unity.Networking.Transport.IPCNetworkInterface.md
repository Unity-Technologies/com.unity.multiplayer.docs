---  
id: Unity.Networking.Transport.IPCNetworkInterface  
title: Unity.Networking.Transport.IPCNetworkInterface  
---

<div class="markdown level0 summary">

The ipc network interface

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkInterface

</div>

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
public struct IPCNetworkInterface : INetworkInterface, IDisposable
```

## 

### LocalEndPoint

<div class="markdown level1 summary">

Gets the value of the local end point

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkInterfaceEndPoint LocalEndPoint { get; }
```

#### Property Value

| Type                     | Description |
|--------------------------|-------------|
| NetworkInterfaceEndPoint |             |

## 

### Bind(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Binds the medium to a specific endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Bind(NetworkInterfaceEndPoint endpoint)
```

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

Creates an interface end point. Only available for loopback addresses.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description      |
|--------------------------|----------|------------------|
| NetworkEndPoint          | address  | Loopback address |
| NetworkInterfaceEndPoint | endpoint | The endpoint     |

#### Returns

| Type         | Description                                       |
|--------------|---------------------------------------------------|
| System.Int32 | The status code of the result, 0 being a success. |

### CreateSendInterface()

<div class="markdown level1 summary">

Creates the send interface

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkSendInterface CreateSendInterface()
```

#### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkSendInterface | The network send interface |

### Dispose()

<div class="markdown level1 summary">

Cleans up both the local end point and the IPCManager instance.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### GetGenericEndPoint(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Retrieves an already created endpoint with port or creates one.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description           |
|--------------------------|----------|-----------------------|
| NetworkInterfaceEndPoint | endpoint | The loopback endpoint |

#### Returns

| Type            | Description     |
|-----------------|-----------------|
| NetworkEndPoint | NetworkEndPoint |

### Initialize(INetworkParameter\[\])

<div class="markdown level1 summary">

Initializes the interface passing in optional INetworkParameter

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Initialize(params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkParameter\[\] | param | The param   |

#### Returns

| Type         | Description                                       |
|--------------|---------------------------------------------------|
| System.Int32 | The status code of the result, 0 being a success. |

### Listen()

<div class="markdown level1 summary">

Start listening for incoming connections. This is normally a no-op for
real UDP sockets.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Listen()
```

#### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

### ScheduleReceive(NetworkPacketReceiver, JobHandle)

<div class="markdown level1 summary">

Schedule a ReceiveJob. This is used to read data from your supported
medium and pass it to the AppendData function supplied by NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleReceive(NetworkPacketReceiver receiver, JobHandle dep)
```

#### Parameters

| Type                  | Name     | Description                                      |
|-----------------------|----------|--------------------------------------------------|
| NetworkPacketReceiver | receiver | A NetworkDriver used to parse the data received. |
| JobHandle             | dep      | A to any dependency we might have.               |

#### Returns

| Type      | Description                                 |
|-----------|---------------------------------------------|
| JobHandle | A to our newly created ScheduleReceive Job. |

### ScheduleSend(NativeQueue\&lt;QueuedSendMessage&gt;, JobHandle)

<div class="markdown level1 summary">

Schedule a SendJob. This is used to flush send queues to your supported
medium

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleSend(NativeQueue<QueuedSendMessage> sendQueue, JobHandle dep)
```

#### Parameters

| Type                             | Name      | Description                                                |
|----------------------------------|-----------|------------------------------------------------------------|
| NativeQueue\&lt;QueuedSendMessage&gt; | sendQueue | The send queue which can be used to emulate parallel send. |
| JobHandle                        | dep       | A to any dependency we might have.                         |

#### Returns

| Type      | Description                              |
|-----------|------------------------------------------|
| JobHandle | A to our newly created ScheduleSend Job. |

### Implements

<div>

INetworkInterface

</div>

<div>

System.IDisposable

</div>
