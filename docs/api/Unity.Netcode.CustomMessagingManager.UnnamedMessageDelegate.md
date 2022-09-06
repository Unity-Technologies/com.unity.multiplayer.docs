---
id: Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate
title: Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate
---

# Delegate CustomMessagingManager.UnnamedMessageDelegate


Delegate used for incoming unnamed messages






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void UnnamedMessageDelegate(ulong clientId, FastBufferReader reader);
```



##### Parameters

| Type             | Name     | Description                            |
|------------------|----------|----------------------------------------|
| System.UInt64    | clientId | The clientId that sent the message     |
| FastBufferReader | reader   | The stream containing the message data |



