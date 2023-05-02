---
id: Unity.Networking.Transport.BaselibNetworkInterface
title: Unity.Networking.Transport.BaselibNetworkInterface
---

# Struct BaselibNetworkInterface


Default NetworkInterface implementation based on Unity's internal
Baselib UDP sockets this is ensure to work on all platforms except for
Unity's WebGL.






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
public struct BaselibNetworkInterface : INetworkInterface, IDisposable
```



### Fields

#### DefaultParameters


Default Parameters for BaselibNetworkInterface






##### Declaration


``` lang-csharp
public static BaselibNetworkParameter DefaultParameters
```



##### Field Value

| Type                    | Description |
|-------------------------|-------------|
| BaselibNetworkParameter |             |

### Properties

#### IsCreated


Gets if the interface has been created.






##### Declaration


``` lang-csharp
public readonly bool IsCreated { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LocalEndPoint


Returns the local endpoint the BaselibNetworkInterface is bound to.






##### Declaration


``` lang-csharp
public readonly NetworkInterfaceEndPoint LocalEndPoint { get; }
```



##### Property Value

| Type                     | Description              |
|--------------------------|--------------------------|
| NetworkInterfaceEndPoint | NetworkInterfaceEndPoint |

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

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Returns 0 on success. |

#### CreateInterfaceEndPoint(NetworkEndPoint, out NetworkInterfaceEndPoint)


Converts a generic NetworkEndPoint to its NetworkInterfaceEndPoint
version for the BaselibNetworkInterface.






##### Declaration


``` lang-csharp
public int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```



##### Parameters

| Type                     | Name     | Description                              |
|--------------------------|----------|------------------------------------------|
| NetworkEndPoint          | address  | The NetworkEndPoint endpoint to convert. |
| NetworkInterfaceEndPoint | endpoint |                                          |

##### Returns

| Type         | Description                                                |
|--------------|------------------------------------------------------------|
| System.Int32 | returns 0 on success and sets the converted endpoint value |

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


Disposes this instance






##### Declaration


``` lang-csharp
public void Dispose()
```



#### GetGenericEndPoint(NetworkInterfaceEndPoint)


Converts a NetworkInterfaceEndPoint to its generic NetworkEndPoint
version.






##### Declaration


``` lang-csharp
public NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```



##### Parameters

| Type                     | Name     | Description                                       |
|--------------------------|----------|---------------------------------------------------|
| NetworkInterfaceEndPoint | endpoint | The NetworkInterfaceEndPoint endpoint to convert. |

##### Returns

| Type            | Description                           |
|-----------------|---------------------------------------|
| NetworkEndPoint | Returns the converted endpoint value. |

#### Initialize(NetworkSettings)


Initializes a instance of the BaselibNetworkInterface struct.






##### Declaration


``` lang-csharp
public int Initialize(NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type         | Description           |
|--------------|-----------------------|
| System.Int32 | Returns 0 on succees. |

#### Listen()


Listens on the socket, currently this Interface doesn't support
listening as its UDP based.






##### Declaration


``` lang-csharp
public int Listen()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 | Returns 0   |

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





