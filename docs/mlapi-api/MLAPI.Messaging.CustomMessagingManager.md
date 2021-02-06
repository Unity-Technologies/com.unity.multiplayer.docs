---

id: MLAPI.Messaging.CustomMessagingManager

title: MLAPI.Messaging.CustomMessagingManager

---

Class CustomMessagingManager

<div class="markdown level0 summary" markdown="1">

The manager class to manage custom messages, note that this is different
from the NetworkingManager custom messages. These are named and are much
easier to use.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Messaging_CustomMessagingManager_syntax]

    public static class CustomMessagingManager

## Methods <span id="MLAPI_Messaging_CustomMessagingManager_RegisterNamedMessageHandler_"></span>

### RegisterNamedMessageHandler(String, CustomMessagingManager.HandleNamedMessageDelegate) [MLAPI_Messaging_CustomMessagingManager_RegisterNamedMessageHandler_System_String_MLAPI_Messaging_CustomMessagingManager_HandleNamedMessageDelegate_]

<div class="markdown level1 summary" markdown="1">

Registers a named message handler delegate.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static void RegisterNamedMessageHandler(string name, CustomMessagingManager.HandleNamedMessageDelegate callback)

#### Parameters [parameters]

| Type                                              | Name                                        | Description                                           |
|---------------------------------------------------|---------------------------------------------|-------------------------------------------------------|
| <span class="xref">System.String</span>           | <span class="parametername">name</span>     | Name of the message.                                  |
| CustomMessagingManager.HandleNamedMessageDelegate | <span class="parametername">callback</span> | The callback to run when a named message is received. |

<span
id="MLAPI_Messaging_CustomMessagingManager_SendNamedMessage_"></span>

### SendNamedMessage(String, List\<UInt64\>, Stream, String, SecuritySendFlags) [MLAPI_Messaging_CustomMessagingManager_SendNamedMessage_System_String_System_Collections_Generic_List_System_UInt64__System_IO_Stream_System_String_MLAPI_Security_SecuritySendFlags_]

<div class="markdown level1 summary" markdown="1">

Sends the named message

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void SendNamedMessage(string name, List<ulong> clientIds, Stream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters [parameters-1]

| Type                                                                                                 | Name                                         | Description                                       |
|------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------|
| <span class="xref">System.String</span>                                                              | <span class="parametername">name</span>      | The message name to send                          |
| <span class="xref">System.Collections.Generic.List</span>\<<span class="xref">System.UInt64</span>\> | <span class="parametername">clientIds</span> | The clients to send to, sends to everyone if null |
| <span class="xref">System.IO.Stream</span>                                                           | <span class="parametername">stream</span>    | The message stream containing the data            |
| <span class="xref">System.String</span>                                                              | <span class="parametername">channel</span>   | The channel to send the data on                   |
| SecuritySendFlags                                                                                    | <span class="parametername">security</span>  | The security settings to apply to the message     |

<span
id="MLAPI_Messaging_CustomMessagingManager_SendNamedMessage_"></span>

### SendNamedMessage(String, UInt64, Stream, String, SecuritySendFlags) [MLAPI_Messaging_CustomMessagingManager_SendNamedMessage_System_String_System_UInt64_System_IO_Stream_System_String_MLAPI_Security_SecuritySendFlags_]

<div class="markdown level1 summary" markdown="1">

Sends a named message

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static void SendNamedMessage(string name, ulong clientId, Stream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters [parameters-2]

| Type                                       | Name                                        | Description                                   |
|--------------------------------------------|---------------------------------------------|-----------------------------------------------|
| <span class="xref">System.String</span>    | <span class="parametername">name</span>     | The message name to send                      |
| <span class="xref">System.UInt64</span>    | <span class="parametername">clientId</span> | The client to send the message to             |
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span>   | The message stream containing the data        |
| <span class="xref">System.String</span>    | <span class="parametername">channel</span>  | The channel to send the data on               |
| SecuritySendFlags                          | <span class="parametername">security</span> | The security settings to apply to the message |

<span
id="MLAPI_Messaging_CustomMessagingManager_SendUnnamedMessage_"></span>

### SendUnnamedMessage(List\<UInt64\>, BitStream, String, SecuritySendFlags) [MLAPI_Messaging_CustomMessagingManager_SendUnnamedMessage_System_Collections_Generic_List_System_UInt64__MLAPI_Serialization_BitStream_System_String_MLAPI_Security_SecuritySendFlags_]

<div class="markdown level1 summary" markdown="1">

Sends unnamed message to a list of clients

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static void SendUnnamedMessage(List<ulong> clientIds, BitStream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters [parameters-3]

| Type                                                                                                 | Name                                         | Description                                       |
|------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------|
| <span class="xref">System.Collections.Generic.List</span>\<<span class="xref">System.UInt64</span>\> | <span class="parametername">clientIds</span> | The clients to send to, sends to everyone if null |
| BitStream                                                                                            | <span class="parametername">stream</span>    | The message stream containing the data            |
| <span class="xref">System.String</span>                                                              | <span class="parametername">channel</span>   | The channel to send the data on                   |
| SecuritySendFlags                                                                                    | <span class="parametername">security</span>  | The security settings to apply to the message     |

<span
id="MLAPI_Messaging_CustomMessagingManager_SendUnnamedMessage_"></span>

### SendUnnamedMessage(UInt64, BitStream, String, SecuritySendFlags) [MLAPI_Messaging_CustomMessagingManager_SendUnnamedMessage_System_UInt64_MLAPI_Serialization_BitStream_System_String_MLAPI_Security_SecuritySendFlags_]

<div class="markdown level1 summary" markdown="1">

Sends a unnamed message to a specific client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public static void SendUnnamedMessage(ulong clientId, BitStream stream, string channel = null, SecuritySendFlags security = SecuritySendFlags.None)

#### Parameters [parameters-4]

| Type                                    | Name                                        | Description                                   |
|-----------------------------------------|---------------------------------------------|-----------------------------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> | The client to send the message to             |
| BitStream                               | <span class="parametername">stream</span>   | The message stream containing the data        |
| <span class="xref">System.String</span> | <span class="parametername">channel</span>  | The channel tos end the data on               |
| SecuritySendFlags                       | <span class="parametername">security</span> | The security settings to apply to the message |

<span
id="MLAPI_Messaging_CustomMessagingManager_UnregisterNamedMessageHandler_"></span>

### UnregisterNamedMessageHandler(String) [MLAPI_Messaging_CustomMessagingManager_UnregisterNamedMessageHandler_System_String_]

<div class="markdown level1 summary" markdown="1">

Unregisters a named message handler.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public static void UnregisterNamedMessageHandler(string name)

#### Parameters [parameters-5]

| Type                                    | Name                                    | Description              |
|-----------------------------------------|-----------------------------------------|--------------------------|
| <span class="xref">System.String</span> | <span class="parametername">name</span> | The name of the message. |

## Events

### OnUnnamedMessage [MLAPI_Messaging_CustomMessagingManager_OnUnnamedMessage]

<div class="markdown level1 summary" markdown="1">

Event invoked when unnamed messages arrive

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public static event CustomMessagingManager.UnnamedMessageDelegate OnUnnamedMessage

#### Event Type [event-type]

| Type                                          | Description |
|-----------------------------------------------|-------------|
| CustomMessagingManager.UnnamedMessageDelegate |             |
