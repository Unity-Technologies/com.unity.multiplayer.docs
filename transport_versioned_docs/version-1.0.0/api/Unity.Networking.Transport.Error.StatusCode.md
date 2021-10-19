---  
id: Unity.Networking.Transport.Error.StatusCode  
title: Unity.Networking.Transport.Error.StatusCode  
---

<div class="markdown level0 summary">

Status code returned by many functions in the API.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public enum StatusCode
```

##### **Remarks**

<div class="markdown level0 remarks">

Any value less than 0 denotes a failure.

</div>

## 

| Name                        | Description                                                            |
|-----------------------------|------------------------------------------------------------------------|
| NetworkArgumentMismatch     |                                                                        |
| NetworkDriverParallelForErr | Tried to process the same connection multiple times in a parallel job. |
| NetworkHeaderInvalid        | A packet's header is invalid.                                          |
| NetworkIdMismatch           | Unknown connection (internal ID doesn't exist).                        |
| NetworkPacketOverflow       | Packet data is too large to handle.                                    |
| NetworkSendHandleInvalid    | Internal send handle is invalid.                                       |
| NetworkSendQueueFull        | Network send queue is full.                                            |
| NetworkStateMismatch        | Invalid operation given connection's state.                            |
| NetworkVersionMismatch      | Unknown connection (internal ID in use by newer connection).           |
| Success                     | Success; no error encountered.                                         |
