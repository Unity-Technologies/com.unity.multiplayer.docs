---  
id: Unity.Netcode.CustomMessagingManager  
title: Unity.Netcode.CustomMessagingManager  
---

<div class="markdown level0 summary">

The manager class to manage custom messages, note that this is different
from the NetworkManager custom messages. These are named and are much
easier to use.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class CustomMessagingManager
```

## 

### RegisterNamedMessageHandler(String, CustomMessagingManager.HandleNamedMessageDelegate)

<div class="markdown level1 summary">

Registers a named message handler delegate.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RegisterNamedMessageHandler(string name, CustomMessagingManager.HandleNamedMessageDelegate callback)
```

#### Parameters

| Type                                              | Name     | Description                                           |
|---------------------------------------------------|----------|-------------------------------------------------------|
| System.String                                     | name     | Name of the message.                                  |
| CustomMessagingManager.HandleNamedMessageDelegate | callback | The callback to run when a named message is received. |

### SendNamedMessage(String, IReadOnlyList\&lt;UInt64&gt;, FastBufferWriter, NetworkDelivery)

<div class="markdown level1 summary">

Sends the named message

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SendNamedMessage(string messageName, IReadOnlyList<ulong> clientIds, FastBufferWriter messageStream, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```

#### Parameters

| Type                           | Name            | Description                                       |
|--------------------------------|-----------------|---------------------------------------------------|
| System.String                  | messageName     | The message name to send                          |
| IReadOnlyList\&lt;System.UInt64&gt; | clientIds       | The clients to send to, sends to everyone if null |
| FastBufferWriter               | messageStream   | The message stream containing the data            |
| NetworkDelivery                | networkDelivery | The delivery type (QoS) to send data with         |

### SendNamedMessage(String, UInt64, FastBufferWriter, NetworkDelivery)

<div class="markdown level1 summary">

Sends a named message

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SendNamedMessage(string messageName, ulong clientId, FastBufferWriter messageStream, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```

#### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| System.String    | messageName     | The message name to send                  |
| System.UInt64    | clientId        | The client to send the message to         |
| FastBufferWriter | messageStream   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

### SendNamedMessageToAll(String, FastBufferWriter, NetworkDelivery)

<div class="markdown level1 summary">

Sends a named message to all clients

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SendNamedMessageToAll(string messageName, FastBufferWriter messageStream, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```

#### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| System.String    | messageName     |                                           |
| FastBufferWriter | messageStream   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

### SendUnnamedMessage(IReadOnlyList\&lt;UInt64&gt;, FastBufferWriter, NetworkDelivery)

<div class="markdown level1 summary">

Sends unnamed message to a list of clients

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SendUnnamedMessage(IReadOnlyList<ulong> clientIds, FastBufferWriter messageBuffer, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```

#### Parameters

| Type                           | Name            | Description                                       |
|--------------------------------|-----------------|---------------------------------------------------|
| IReadOnlyList\&lt;System.UInt64&gt; | clientIds       | The clients to send to, sends to everyone if null |
| FastBufferWriter               | messageBuffer   | The message stream containing the data            |
| NetworkDelivery                | networkDelivery | The delivery type (QoS) to send data with         |

### SendUnnamedMessage(UInt64, FastBufferWriter, NetworkDelivery)

<div class="markdown level1 summary">

Sends a unnamed message to a specific client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SendUnnamedMessage(ulong clientId, FastBufferWriter messageBuffer, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```

#### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| System.UInt64    | clientId        | The client to send the message to         |
| FastBufferWriter | messageBuffer   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

### SendUnnamedMessageToAll(FastBufferWriter, NetworkDelivery)

<div class="markdown level1 summary">

Sends unnamed message to all clients

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SendUnnamedMessageToAll(FastBufferWriter messageBuffer, NetworkDelivery networkDelivery = NetworkDelivery.ReliableSequenced)
```

#### Parameters

| Type             | Name            | Description                               |
|------------------|-----------------|-------------------------------------------|
| FastBufferWriter | messageBuffer   | The message stream containing the data    |
| NetworkDelivery  | networkDelivery | The delivery type (QoS) to send data with |

### UnregisterNamedMessageHandler(String)

<div class="markdown level1 summary">

Unregisters a named message handler.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void UnregisterNamedMessageHandler(string name)
```

#### Parameters

| Type          | Name | Description              |
|---------------|------|--------------------------|
| System.String | name | The name of the message. |

## 

### OnUnnamedMessage

<div class="markdown level1 summary">

Event invoked when unnamed messages arrive

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event CustomMessagingManager.UnnamedMessageDelegate OnUnnamedMessage
```

#### Event Type

| Type                                          | Description |
|-----------------------------------------------|-------------|
| CustomMessagingManager.UnnamedMessageDelegate |             |
