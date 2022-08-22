---
id: Unity.Networking.Transport.IPCNetworkInterface
title: Unity.Networking.Transport.IPCNetworkInterface
---


# Struct IPCNetworkInterface


The ipc network interface






##### Implements



INetworkInterface





System.IDisposable






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct IPCNetworkInterface : INetworkInterface, IDisposable
```



### Properties

#### LocalEndPoint


Gets the value of the local end point






##### Declaration


``` lang-csharp
public readonly NetworkInterfaceEndPoint LocalEndPoint { get; }
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
public int Bind(NetworkInterfaceEndPoint endpoint)
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


Creates an interface end point. Only available for loopback addresses.






##### Declaration


``` lang-csharp
public int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```



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


Creates the send interface






##### Declaration


``` lang-csharp
public NetworkSendInterface CreateSendInterface()
```



##### Returns

| Type                 | Description                |
|----------------------|----------------------------|
| NetworkSendInterface | The network send interface |

#### Dispose()


Cleans up both the local end point and the IPCManager instance.






##### Declaration


``` lang-csharp
public void Dispose()
```



#### GetGenericEndPoint(NetworkInterfaceEndPoint)


Retrieves an already created endpoint with port or creates one.






##### Declaration


``` lang-csharp
public NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```



##### Parameters

| Type                     | Name     | Description           |
|--------------------------|----------|-----------------------|
| NetworkInterfaceEndPoint | endpoint | The loopback endpoint |

##### Returns

| Type            | Description     |
|-----------------|-----------------|
| NetworkEndPoint | NetworkEndPoint |

#### Initialize(NetworkSettings)


Initializes the interface passing in optional INetworkParameter






##### Declaration


``` lang-csharp
public int Initialize(NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type         | Description                                       |
|--------------|---------------------------------------------------|
| System.Int32 | The status code of the result, 0 being a success. |

#### Listen()


Start listening for incoming connections. This is normally a no-op for
real UDP sockets.






##### Declaration


``` lang-csharp
public int Listen()
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
public JobHandle ScheduleReceive(NetworkPacketReceiver receiver, JobHandle dep)
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
public JobHandle ScheduleSend(NativeQueue<QueuedSendMessage> sendQueue, JobHandle dep)
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

### Implements



INetworkInterface





System.IDisposable





