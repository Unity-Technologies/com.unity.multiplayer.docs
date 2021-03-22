---
id: reliability
title: Reliability
---

RPCs are reliable by default which means they are guaranteed to be executed on the remote side. However, sometimes developers might want to opt-out reliability, which is often the case for non-critical events such as particle effects, sounds effects etc.

Reliability configuration can be specified for both `ServerRpc` and `ClientRpc` methods at compile-time:

```csharp

[ServerRpc]
void MyReliableServerRpc() { /* ... */ }

[ServerRpc(IsReliable = false)]
void MyUnreliableServerRpc() { /* ... */ }

[ClientRpc]
void MyReliableClientRpc() { /* ... */ }

[ClientRpc(IsReliable = false)]
void MyUnreliableClientRpc() { /* ... */ }
```

Reliable RPCs will be received on the remote end in the same order as they are fired but this in-order guarantee only applies to RPCs on the same `NetworkObject`. Different `NetworkObjects` might have reliable RPCs called but executed in different order compared to each other. To put more simply, in-order reliable RPC execution is guaranteed per `NetworkObject` basis only.

An RPC call made without an active connection will be dropped and will not be queued for send automatically. Both reliable and unreliable RPC calls have to be made when there is an active network connection established between a client and the server. Also reliable RPC calls made during connection will be dropped on disconnect as well.