---  
id: Unity.Networking.Transport.ProcessPacketCommandType  
title: Unity.Networking.Transport.ProcessPacketCommandType  
---

<div class="markdown level0 summary">

The type of commands that the NetworkDriver can process from a received
packet after it is proccessed by the protocol.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public enum ProcessPacketCommandType : byte
```

## 

| Name                             | Description                                                                |
|----------------------------------|----------------------------------------------------------------------------|
| AddressUpdate                    | Find and update the address for a connection.                              |
| BindAccept                       | Complete the binding proccess.                                             |
| ConnectionAccept                 | The connection has been accepted by the server and can be completed.       |
| ConnectionReject                 | The connection has been rejected by the server.                            |
| ConnectionRequest                | A connection request coming from a client has been received by the server. |
| Data                             | A Data message has been received for a well stablished connection.         |
| DataWithImplicitConnectionAccept | A simultaneous Data + Connection accept command.                           |
| Disconnect                       | The connection is requesting to disconnect.                                |
| Drop                             | Do not perform any extra action.                                           |
