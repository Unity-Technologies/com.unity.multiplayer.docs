---
id: Unity.Networking.Transport.INetworkInterface
title: Unity.Networking.Transport.INetworkInterface
---


# Interface INetworkInterface


Interface for implementing a low-level networking interface see
BaselibNetworkInterface as an example






##### Inherited Members



System.IDisposable.Dispose()





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public interface INetworkInterface : IDisposable
```



### Properties

#### LocalEndPoint


Gets the value of the local end point






##### Declaration


``` lang-csharp
NetworkInterfaceEndPoint LocalEndPoint { get; }
```



##### Property Value

| Type                     | Description |
|--------------------------|-------------|
| NetworkInterfaceEndPoint |             |

### Methods

#### Bind(NetworkInterfaceEndPoint)


Binds the medium to a specific endpoint.






##### Declaration


``` lang-csharp
int Bind(NetworkInterfaceEndPoint endpoint)
```



##### Parameters

| Type                     | Name     | Description                       |
|--------------------------|----------|-----------------------------------|
| NetworkInterfaceEndPoint | endpoint | A valid NetworkInterfaceEndPoint. |

##### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

#### CreateInterfaceEndPoint(NetworkEndPoint, out NetworkInterfaceEndPoint)


Creates the interface end point using the specified address






##### Declaration


``` lang-csharp
int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```



##### Parameters

| Type                     | Name     | Description  |
|--------------------------|----------|--------------|
| NetworkEndPoint          | address  | The address  |
| NetworkInterfaceEndPoint | endpoint | The endpoint |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 | The int     |

#### CreateSendInterface()


Creates the send interface






##### Declaration


``` lang-csharp
NetworkSendInterface CreateSendInterface()
```



##### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkSendInterface | The network send interface |

#### GetGenericEndPoint(NetworkInterfaceEndPoint)


Gets the generic end point using the specified endpoint






##### Declaration


``` lang-csharp
NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```



##### Parameters

| Type                     | Name     | Description  |
|--------------------------|----------|--------------|
| NetworkInterfaceEndPoint | endpoint | The endpoint |

##### Returns

| Type            | Description           |
|-----------------|-----------------------|
| NetworkEndPoint | The network end point |

#### Initialize(NetworkSettings)


Initializes the interfacing passing in optional INetworkParameter






##### Declaration


``` lang-csharp
int Initialize(NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 | The int     |

#### Listen()


Start listening for incoming connections. This is normally a no-op for
real UDP sockets.






##### Declaration


``` lang-csharp
int Listen()
```



##### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

#### ScheduleReceive(NetworkPacketReceiver, JobHandle)


Schedule a ReceiveJob. This is used to read data from your supported
medium and pass it to the AppendData function supplied by NetworkDriver






##### Declaration


``` lang-csharp
JobHandle ScheduleReceive(NetworkPacketReceiver receiver, JobHandle dep)
```



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


Schedule a SendJob. This is used to flush send queues to your supported
medium






##### Declaration


``` lang-csharp
JobHandle ScheduleSend(NativeQueue<QueuedSendMessage> sendQueue, JobHandle dep)
```



##### Parameters

| Type                             | Name      | Description                                                |
|----------------------------------|-----------|------------------------------------------------------------|
| NativeQueue\<QueuedSendMessage\> | sendQueue | The send queue which can be used to emulate parallel send. |
| JobHandle                        | dep       | A to any dependency we might have.                         |

##### Returns

| Type      | Description                              |
|-----------|------------------------------------------|
| JobHandle | A to our newly created ScheduleSend Job. |





System.IDisposable







