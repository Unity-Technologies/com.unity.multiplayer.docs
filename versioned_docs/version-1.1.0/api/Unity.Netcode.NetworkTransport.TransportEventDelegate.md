---
id: Unity.Netcode.NetwrokTransport.TransportEventDelegate
title: Unity.Netcode.NetworkTransport.TransportEventDelegate
---

# Delegate NetworkTransport.TransportEventDelegate


Delegate for transport network events






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void TransportEventDelegate(NetworkEvent eventType, ulong clientId, ArraySegment<byte> payload, float receiveTime);
```



##### Parameters

| Type                               | Name        | Description |
|------------------------------------|-------------|-------------|
| NetworkEvent                       | eventType   |             |
| System.UInt64                      | clientId    |             |
| System.ArraySegment\<System.Byte\> | payload     |             |
| System.Single                      | receiveTime |             |



