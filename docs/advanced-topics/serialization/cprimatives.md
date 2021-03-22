---
id: cprimitives
title: C# Primitives
---

C# Primitive types will be serialized by built-in serialization code. These types include `bool`, `char`, `sbyte`, `byte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double`, and `string`.

```csharp
[ServerRpc]
void FooServerRpc(int somenumber, string sometext) { /* ... */ }

void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        FooServerRpc(Time.frameCount, "hello, world"); // Client -> Server
    }
}
```