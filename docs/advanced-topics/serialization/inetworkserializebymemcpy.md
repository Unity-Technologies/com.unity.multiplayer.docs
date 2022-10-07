---
id: inetworkserializebymemcpy
title: INetworkSerializeByMemcpy
sidebar_label: INetworkSerializeByMemcpy
---

The `INetworkSerializeByMemcpy` interface is used as a sort of "tag" to mark an unmanaged struct type as being serializable over the network by directly copying the whole struct, byte-for-byte, as it appears in memory, into and out of the buffer. This can offer some benefits for performance compared to serializing one field at a time, especially if the struct has many fields in it.

The interface itself has no methods in it; rather, as mentioned, it's simply a tag for the developer to mark a struct as being compatible with this type of serialization.

```csharp
public struct MyStruct : INetworkSerializeByMemcpy
{
    public int A;
    public int B;
    public float C;
    public bool D;
}
```

If you have a type you wish to serialize that you know is compatible with this method of serialization, but don't have access to modify the struct to add this interface, you can wrap your values in `ForceNetworkSerializeByMemcpy` to enable it to be serialized this way. This works in both `RPC`s and `NetworkVariables`, as well as in other contexts such as `BufferSerializer<>`, `FastBufferReader`, and `FastBufferWriter`.

```csharp
public NetworkVariable<ForceNetworkSerializeByMemcpy<Guid>> GuidVar;
```

:::note
Take care with using `INetworkSerializeByMemcpy`, and especially `ForceNetworkSerializeByMemcpy`, because not all unmanaged structs are actually compatible with this type of serialization. Anything that includes pointer types (including Native Collections like `NativeArray<>`) will not function correctly when serialized this way, and will likely cause memory corruption or crashes on the receiving side.
:::
