---

id: MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate

title: MLAPI.Messaging.CustomMessagingManager.UnnamedMessageDelegate

---

Delegate CustomMessagingManager.UnnamedMessageDelegate

<div class="markdown level0 summary" markdown="1">

Delegate used for incoming unnamed messages

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Messaging_CustomMessagingManager_UnnamedMessageDelegate_syntax]

    public delegate void UnnamedMessageDelegate(ulong clientId, Stream stream);

##### Parameters [parameters]

| Type             | Name       | Description                            |
|------------------|------------|----------------------------------------|
| System.UInt64    | \*clientId | The clientId that sent the message     |
| System.IO.Stream | \*stream   | The stream containing the message data |
