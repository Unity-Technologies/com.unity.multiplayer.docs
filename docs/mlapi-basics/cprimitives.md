---
id: cprimitives
title: C# Primitives 
sidebar_label: C# Primitives 
---




`bool`, `char`, `sbyte`, `byte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double`, `string` types will be serialized by built-in serialization code.

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