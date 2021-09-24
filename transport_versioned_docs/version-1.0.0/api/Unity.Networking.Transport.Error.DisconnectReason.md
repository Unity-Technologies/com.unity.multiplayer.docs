---  
id: Unity.Networking.Transport.Error.DisconnectReason  
title: Unity.Networking.Transport.Error.DisconnectReason  
---

<div class="markdown level0 summary">

DisconnectReason enumerates all disconnect reasons.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public enum DisconnectReason : byte

## Fields

| Name | Description |
| -- | -- |
| ClosedByRemote | Indicates the connection was closed remotely. |
| Count | Used only for count. Keep last and don't assign explicit values |
| Default | Indicates a normal disconnection as a result of calling Disconnect on the connection. |
| MaxConnectionAttempts | Indicates the connection failed to establish a connection after maxConnectAttempts. |
| Timeout | Indicates the connection timed out. |
