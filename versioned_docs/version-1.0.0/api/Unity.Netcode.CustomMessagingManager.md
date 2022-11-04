---
id: Unity.Netcode.CustomMessagingManager
title: Unity.Netcode.CustomMessagingManager
---

# Class CustomMessagingManager


The manager class to manage custom messages, note that this is different
from the NetworkManager custom messages. These are named and are much
easier to use.







##### Inheritance


System.Object




CustomMessagingManager






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class CustomMessagingManager
```



### Methods

#### RegisterNamedMessageHandler(String, CustomMessagingManager.HandleNamedMessageDelegate)


Registers a named message handler delegate.






##### Declaration


``` lang-csharp
public void RegisterNamedMessageHandler(string name, CustomMessagingManager.HandleNamedMessageDelegate callback)
```



##### Parameters

| Type                                              | Name     | Description                                           |
|---------------------------------------------------|----------|-------------------------------------------------------|
| System.String                                     | name     | Name of the message.                                  |
| CustomMessagingManager.HandleNamedMessageDelegate | callback | The callback to run when a named message is received. |

#### SendNamedMessage(String, IReadOnlyList\<UInt64\>, FastBufferWriter, NetworkDelivery)


Sends the named message






##### Declaration


``` lang-csharp
public void SendNamedMessage(string messageName, IReadOnlyList<ulong> clientIds, FastBufferWriter messageStream, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```



##### Parameters

| Type                           | Name            | Description                               |
|--------------------------------|-----------------|-------------------------------------------|
| System.String                  | messageName     | The message name to send                  |
| IReadOnlyList\<System.UInt64\> | clientIds       | The clients to send to                    |
| FastBufferWriter               | messageStream   | The message stream containing the data    |
| NetworkDelivery                | networkDelivery | The delivery type (QoS) to send data with |

#### SendNamedMessage(String, UInt64, FastBufferWriter, NetworkDelivery)


Sends a named message






##### Declaration


``` lang-csharp
public void SendNamedMessage(string messageName, ulong clientId, FastBufferWriter messageStream, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```



##### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| System.String    | messageName     | The message name to send                  |
| System.UInt64    | clientId        | The client to send the message to         |
| FastBufferWriter | messageStream   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

#### SendNamedMessageToAll(String, FastBufferWriter, NetworkDelivery)


Sends a named message to all clients






##### Declaration


``` lang-csharp
public void SendNamedMessageToAll(string messageName, FastBufferWriter messageStream, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```



##### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| System.String    | messageName     | The message name to send                  |
| FastBufferWriter | messageStream   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

#### SendUnnamedMessage(IReadOnlyList\<UInt64\>, FastBufferWriter, NetworkDelivery)


Sends unnamed message to a list of clients






##### Declaration


``` lang-csharp
public void SendUnnamedMessage(IReadOnlyList<ulong> clientIds, FastBufferWriter messageBuffer, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```



##### Parameters

| Type                           | Name            | Description                                       |
|--------------------------------|-----------------|---------------------------------------------------|
| IReadOnlyList\<System.UInt64\> | clientIds       | The clients to send to, sends to everyone if null |
| FastBufferWriter               | messageBuffer   | The message stream containing the data            |
| NetworkDelivery                | networkDelivery | The delivery type (QoS) to send data with         |

#### SendUnnamedMessage(UInt64, FastBufferWriter, NetworkDelivery)


Sends a unnamed message to a specific client






##### Declaration


``` lang-csharp
public void SendUnnamedMessage(ulong clientId, FastBufferWriter messageBuffer, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```



##### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| System.UInt64    | clientId        | The client to send the message to         |
| FastBufferWriter | messageBuffer   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

#### SendUnnamedMessageToAll(FastBufferWriter, NetworkDelivery)


Sends unnamed message to all clients






##### Declaration


``` lang-csharp
public void SendUnnamedMessageToAll(FastBufferWriter messageBuffer, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```



##### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| FastBufferWriter | messageBuffer   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

#### UnregisterNamedMessageHandler(String)


Unregisters a named message handler.






##### Declaration


``` lang-csharp
public void UnregisterNamedMessageHandler(string name)
```



##### Parameters

| Type          | Name | Description              |
|---------------|------|--------------------------|
| System.String | name | The name of the message. |

### Events

#### OnUnnamedMessage


Event invoked when unnamed messages arrive






##### Declaration


``` lang-csharp
public event CustomMessagingManager.UnnamedMessageDelegate OnUnnamedMessage
```



##### Event Type

| Type                                          | Description |
|-----------------------------------------------|-------------|
| CustomMessagingManager.UnnamedMessageDelegate |             |



