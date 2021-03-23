---
id: static-arrays
title: Static Arrays
---

Static arrays like `int[]` are serialized by built-in serialization code if their underlying type is either one of serialization supported types (such as `Vector3`) or if they implement [`INetworkSerializable`](inetworkserializable.md) interface.

```csharp
[ServerRpc]
void HelloServerRpc(int[] scores, Color[] colors) { /* ... */ }

[ClientRpc]
void WorldClientRpc(MyComplexType[] values) { /* ... */ }
```