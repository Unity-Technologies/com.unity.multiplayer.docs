---  
id: Unity.Networking.Transport.BaselibNetworkInterface  
title: Unity.Networking.Transport.BaselibNetworkInterface  
---

<div class="markdown level0 summary">

Default NetworkInterface implementation based on Unity's internal
Baselib UDP sockets this is ensure to work on all platforms except for
Unity's WebGL.

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
public struct BaselibNetworkInterface : INetworkInterface, IDisposable
```

## 

### DefaultParameters

<div class="markdown level1 summary">

Default Parameters for BaselibNetworkInterface

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static BaselibNetworkParameter DefaultParameters
```

#### Field Value

| Type                    | Description |
|-------------------------|-------------|
| BaselibNetworkParameter |             |

## 

### IsCreated

<div class="markdown level1 summary">

Gets if the interface has been created.

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

### LocalEndPoint

<div class="markdown level1 summary">

Returns the local endpoint the BaselibNetworkInterface is bound to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkInterfaceEndPoint LocalEndPoint { get; }
```

#### Property Value

| Type                     | Description              |
|--------------------------|--------------------------|
| NetworkInterfaceEndPoint | NetworkInterfaceEndPoint |

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

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Returns 0 on success. |

### CreateInterfaceEndPoint(NetworkEndPoint, out NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Converts a generic NetworkEndPoint to its NetworkInterfaceEndPoint
version for the BaselibNetworkInterface.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description                              |
|--------------------------|----------|------------------------------------------|
| NetworkEndPoint          | address  | The NetworkEndPoint endpoint to convert. |
| NetworkInterfaceEndPoint | endpoint |                                          |

#### Returns

| Type         | Description                                                |
|--------------|------------------------------------------------------------|
| System.Int32 | returns 0 on success and sets the converted endpoint value |

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

Disposes this instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### GetGenericEndPoint(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Converts a NetworkInterfaceEndPoint to its generic NetworkEndPoint
version.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description                                       |
|--------------------------|----------|---------------------------------------------------|
| NetworkInterfaceEndPoint | endpoint | The NetworkInterfaceEndPoint endpoint to convert. |

#### Returns

| Type            | Description                           |
|-----------------|---------------------------------------|
| NetworkEndPoint | Returns the converted endpoint value. |

### Initialize(INetworkParameter\[\])

<div class="markdown level1 summary">

Initializes a instance of the BaselibNetworkInterface struct.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Initialize(params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description                                                                                                 |
|-----------------------|-------|-------------------------------------------------------------------------------------------------------------|
| INetworkParameter\[\] | param | An array of INetworkParameter. If there is no BaselibNetworkParameter present, the default values are used. |

#### Returns

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Returns 0 on succees. |

### Listen()

<div class="markdown level1 summary">

Listens on the socket, currently this Interface doesn't support
listening as its UDP based.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Listen()
```

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 | Returns 0   |

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
