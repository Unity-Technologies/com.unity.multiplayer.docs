---
id: arrays
title: Arrays
---

Arrays like `int[]` cannot be serialized. To serialize a collection you must use either a NativeArray<T> or a type from the Unity Collections Package. The underlying type must be one of the serialization supported types (such as `Vector3`) or implement the [`INetworkSerializable`](inetworkserializable.md) interface.

```csharp
[ServerRpc]
void HelloServerRpc(NativeArray<int> scores, NativeArray<Color> colors) { /* ... */ }

[ClientRpc]
void WorldClientRpc(NativeArray<MyComplexType> values) { /* ... */ }
```
