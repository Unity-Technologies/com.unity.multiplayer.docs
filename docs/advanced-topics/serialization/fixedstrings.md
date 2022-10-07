---
id: fixedstrings
title: Fixed Strings
---

Unity's Fixed String types (`FixedString32`, `FixedString64`, `FixedString128`, `FixedString512`, and `FixedString4096`) are natively supported. The serialization system intelligently understands these fixed string types and will ensure, even for the larger types, that only the amount of the string that's actually in use will be serialized, ensuring no more bandwidth is used than is necessary.

```csharp
[ServerRpc]
void SetPlayerNameServerRpc(FixedString32 playerName) { /* ... */ }

void SetPlayerName(string name)
{
    SetPlayerNameServerRpc(new FixedString32(name));
}
```
