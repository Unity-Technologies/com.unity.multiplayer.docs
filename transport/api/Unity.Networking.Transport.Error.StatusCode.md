---
id: Unity.Networking.Transport.Error.StatusCode
title: Unity.Networking.Transport.Error.StatusCode
---


# Enum StatusCode


Status code returned by many functions in the API.





###### **Namespace**: Unity.Networking.Transport.Error

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public enum StatusCode
```



##### **Remarks**


Any value less than 0 denotes a failure.



### Fields

Name









Description

NetworkArgumentMismatch

NetworkDriverParallelForErr

Tried to process the same connection multiple times in a parallel job.

NetworkHeaderInvalid

A packet's header is invalid.

NetworkIdMismatch

Unknown connection (internal ID doesn't exist).

NetworkPacketOverflow

Packet data is too large to handle.

NetworkSendHandleInvalid

Internal send handle is invalid.

NetworkSendQueueFull

Network send queue is full.

NetworkStateMismatch

Invalid operation given connection's state.

NetworkVersionMismatch

Unknown connection (internal ID in use by newer connection).

Success

Success; no error encountered.



