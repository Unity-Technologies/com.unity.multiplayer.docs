---  
id: MLAPI.Messaging.CustomMessagingManager  
title: MLAPI.Messaging.CustomMessagingManager  
---

<div class="markdown level0 summary">

The manager class to manage custom messages, note that this is different
from the NetworkingManager custom messages. These are named and are much
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

    public static class CustomMessagingManager

## Methods 

### RegisterNamedMessageHandler(String, CustomMessagingManager.HandleNamedMessageDelegate)

<div class="markdown level1 summary">

Registers a named message handler delegate.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RegisterNamedMessageHandler(string name, CustomMessagingManager.HandleNamedMessageDelegate callback)

#### Parameters

| Type                                              | Name     | Description                                           |
|---------------------------------------------------|----------|-------------------------------------------------------|
| System.String                                     | name     | Name of the message.                                  |
| CustomMessagingManager.HandleNamedMessageDelegate | callback | The callback to run when a named message is received. |

### SendNamedMessage(String, List&lt;UInt64&gt;, Stream, String, SecuritySendFlags)

<div class="markdown level1 summary">

Sends the named message

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void SendNamedMessage(string name, List<ulong> clientIds, Stream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters

| Type                                                 | Name      | Description                                       |
|------------------------------------------------------|-----------|---------------------------------------------------|
| System.String                                        | name      | The message name to send                          |
| System.Collections.Generic.List&lt;System.UInt64&gt; | clientIds | The clients to send to, sends to everyone if null |
| System.IO.Stream                                     | stream    | The message stream containing the data            |
| System.String                                        | channel   | The channel to send the data on                   |
| SecuritySendFlags                                    | security  | The security settings to apply to the message     |

### SendNamedMessage(String, UInt64, Stream, String, SecuritySendFlags)

<div class="markdown level1 summary">

Sends a named message

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void SendNamedMessage(string name, ulong clientId, Stream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters

| Type              | Name     | Description                                   |
|-------------------|----------|-----------------------------------------------|
| System.String     | name     | The message name to send                      |
| System.UInt64     | clientId | The client to send the message to             |
| System.IO.Stream  | stream   | The message stream containing the data        |
| System.String     | channel  | The channel to send the data on               |
| SecuritySendFlags | security | The security settings to apply to the message |

### SendUnnamedMessage(List&lt;UInt64&gt;, BitStream, String, SecuritySendFlags)

<div class="markdown level1 summary">

Sends unnamed message to a list of clients

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void SendUnnamedMessage(List<ulong> clientIds, BitStream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters

| Type                                                 | Name      | Description                                       |
|------------------------------------------------------|-----------|---------------------------------------------------|
| System.Collections.Generic.List&lt;System.UInt64&gt; | clientIds | The clients to send to, sends to everyone if null |
| BitStream                                            | stream    | The message stream containing the data            |
| System.String                                        | channel   | The channel to send the data on                   |
| SecuritySendFlags                                    | security  | The security settings to apply to the message     |

### SendUnnamedMessage(UInt64, BitStream, String, SecuritySendFlags)

<div class="markdown level1 summary">

Sends a unnamed message to a specific client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void SendUnnamedMessage(ulong clientId, BitStream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters

| Type              | Name     | Description                                   |
|-------------------|----------|-----------------------------------------------|
| System.UInt64     | clientId | The client to send the message to             |
| BitStream         | stream   | The message stream containing the data        |
| System.String     | channel  | The channel tos end the data on               |
| SecuritySendFlags | security | The security settings to apply to the message |

### UnregisterNamedMessageHandler(String)

<div class="markdown level1 summary">

Unregisters a named message handler.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void UnregisterNamedMessageHandler(string name)

#### Parameters

| Type          | Name | Description              |
|---------------|------|--------------------------|
| System.String | name | The name of the message. |

## Events

### OnUnnamedMessage

<div class="markdown level1 summary">

Event invoked when unnamed messages arrive

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static event CustomMessagingManager.UnnamedMessageDelegate OnUnnamedMessage

#### Event Type

| Type                                          | Description |
|-----------------------------------------------|-------------|
| CustomMessagingManager.UnnamedMessageDelegate |             |
