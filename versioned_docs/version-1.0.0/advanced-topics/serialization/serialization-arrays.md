---
id: arrays
title: Arrays
---

Arrays of [C# primitive types](cprimatives.md), like `int[]`, and [Unity primitive types](unity-primatives.md), such as `Vector3`, are serialized by built-in serialization code. Otherwise, any array of types that are not handled by the built-in serialization code, such as `string[]`, needs to be handled through a container class or structure that implements the  [`INetworkSerializable`](inetworkserializable.md) interface.

### Built-In Primitive Types Example
Using built-in primitive types is fairly straight forward:
```csharp
[ServerRpc]
void HelloServerRpc(int[] scores, Color[] colors) { /* ... */ }
```

### INetworkSerializable Implementation Example
There are many ways to handle sending an array of managed types.
The below example is a simple `string` container class that implements `INetworkSerializable` and can be used as an array of "StringContainers":
```csharp
[ClientRpc]
void SendMessagesClientRpc(StringContainer[] messages) 
{ 
    foreach (var stringContainer in stringContainers)
    {
        Debug.Log($"{stringContainer.SomeText}");
    }
}

public class StringContainer : INetworkSerializable
{
    public string SomeText;
    public void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        if (serializer.IsWriter)
        {
            serializer.GetFastBufferWriter().WriteValueSafe(SomeText);
        }
        else
        {
            serializer.GetFastBufferReader().ReadValueSafe(out SomeText);
        }
    }
}
```

