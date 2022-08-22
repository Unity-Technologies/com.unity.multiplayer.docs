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

# Struct IPCNetworkInterface

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
public struct IPCNetworkInterface : INetworkInterface, IDisposable
```

</div>

### Properties

#### LocalEndPoint

<div class="markdown level1 summary">

Gets the value of the local end point

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly NetworkInterfaceEndPoint LocalEndPoint { get; }
```

</div>

##### Property Value

| Type                     | Description |
|--------------------------|-------------|
| NetworkInterfaceEndPoint |             |

### Methods

#### Bind(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Binds the medium to a specific endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Bind(NetworkInterfaceEndPoint endpoint)
```

</div>

##### Parameters

| Type                     | Name     | Description                       |
|--------------------------|----------|-----------------------------------|
| NetworkInterfaceEndPoint | endpoint | A valid NetworkInterfaceEndPoint. |

##### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

#### CreateInterfaceEndPoint(NetworkEndPoint, out NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Creates an interface end point. Only available for loopback addresses.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```

</div>

##### Parameters

| Type                     | Name     | Description      |
|--------------------------|----------|------------------|
| NetworkEndPoint          | address  | Loopback address |
| NetworkInterfaceEndPoint | endpoint | The endpoint     |

##### Returns

| Type         | Description                                       |
|--------------|---------------------------------------------------|
| System.Int32 | The status code of the result, 0 being a success. |

#### CreateSendInterface()

<div class="markdown level1 summary">

Creates the send interface

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkSendInterface CreateSendInterface()
```

</div>

##### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkSendInterface | The network send interface |

#### Dispose()

<div class="markdown level1 summary">

Cleans up both the local end point and the IPCManager instance.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Dispose()
```

</div>

#### GetGenericEndPoint(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Retrieves an already created endpoint with port or creates one.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```

</div>

##### Parameters

| Type                     | Name     | Description           |
|--------------------------|----------|-----------------------|
| NetworkInterfaceEndPoint | endpoint | The loopback endpoint |

##### Returns

| Type            | Description     |
|-----------------|-----------------|
| NetworkEndPoint | NetworkEndPoint |

#### Initialize(NetworkSettings)

<div class="markdown level1 summary">

Initializes the interface passing in optional INetworkParameter

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Initialize(NetworkSettings settings)
```

</div>

##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type         | Description                                       |
|--------------|---------------------------------------------------|
| System.Int32 | The status code of the result, 0 being a success. |

#### Listen()

<div class="markdown level1 summary">

Start listening for incoming connections. This is normally a no-op for
real UDP sockets.

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

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

#### ScheduleReceive(NetworkPacketReceiver, JobHandle)

<div class="markdown level1 summary">

Schedule a ReceiveJob. This is used to read data from your supported
medium and pass it to the AppendData function supplied by NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public JobHandle ScheduleReceive(NetworkPacketReceiver receiver, JobHandle dep)
```

</div>

##### Parameters

| Type                  | Name     | Description                                      |
|-----------------------|----------|--------------------------------------------------|
| NetworkPacketReceiver | receiver | A NetworkDriver used to parse the data received. |
| JobHandle             | dep      | A to any dependency we might have.               |

##### Returns

| Type      | Description                                 |
|-----------|---------------------------------------------|
| JobHandle | A to our newly created ScheduleReceive Job. |

#### ScheduleSend(NativeQueue\<QueuedSendMessage\>, JobHandle)

<div class="markdown level1 summary">

Schedule a SendJob. This is used to flush send queues to your supported
medium

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public JobHandle ScheduleSend(NativeQueue<QueuedSendMessage> sendQueue, JobHandle dep)
```

</div>

##### Parameters

| Type                             | Name      | Description                                                |
|----------------------------------|-----------|------------------------------------------------------------|
| NativeQueue\<QueuedSendMessage\> | sendQueue | The send queue which can be used to emulate parallel send. |
| JobHandle                        | dep       | A to any dependency we might have.                         |

##### Returns

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
