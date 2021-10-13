---  
id: MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate  
title: MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate  
---

<div class="markdown level0 summary">

Delegate used for incoming unnamed messages

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate void UnnamedMessageDelegate(ulong clientId, Stream stream);

##### Parameters

| Type             | Name       | Description                            |
|------------------|------------|----------------------------------------|
| System.UInt64    | \*clientId | The clientId that sent the message     |
| System.IO.Stream | \*stream   | The stream containing the message data |
