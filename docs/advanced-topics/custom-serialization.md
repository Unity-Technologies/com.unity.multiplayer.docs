---
id: custom-serialization
title: Custom Serialization
---

When using `RPC`'s, `NetworkVariable`'s or any other Netcode for GameObjects (Netcode) related task that requires serialization. The Netcode uses a default serialization pipeline that looks like this:

``
Custom Types => Built In Types => INetworkSerializable
``

That is, when Netcode first gets hold of a type, it will check for any custom types that the user have registered for serialization, after that it will check if it's a built in type, such as a Vector3, float etc. These are handled by default. If not, it will check if the type inherits `INetworkSerializable`, if it does, it will call it's write methods.

By default, any type that satisfies the `unmanaged` generic constraint can be automatically serialized as RPC parameters. This includes all basic types (bool, byte, int, float, enum, etc) as well as any structs that contains only these basic types.

With this flow, you can override **ALL** serialization for **ALL** types, even built in types, and with the API provided, it can even be done with types that you have not defined yourself, those who are behind a 3rd party wall, such as .NET types.

To register a custom type, or override an already handled type, you need to create extension methods for `FastBufferReader.ReadValueSafe()` and `FastBufferWriter.WriteValueSafe()`:

```csharp
// Tells the Netcode how to serialize and deserialize Url in the future.
// The class name doesn't matter here.
public static class SerializationExtensions
{
    public static void ReadValueSafe(this FastBufferReader reader, out Url value)
    {
        reader.ReadValueSafe(out string val);
        value = new Url(val);
    }

    public static void WriteValueSafe(this FastBufferWriter writer, in Url value)
    {
        writer.WriteValueSafe(instance.Value);
    }
}
```

The code generation for RPCs will automatically pick up and use these functions, and they'll become available via `FastBufferWriter` and `FastBufferReader` directly.

You can also optionally use the same method to add support for `BufferSerializer<TReaderWriter>.SerializeValue()`, if you wish, which will make this type readily available within [`INetworkSerializable`](/advanced-topics/serialization/inetworkserializable.md) types:

```c#
// The class name doesn't matter here.
public static class SerializationExtensions
{  
    public static void SerializeValue<TReaderWriter>(this BufferSerializer<TReaderWriter> serializer, ref Url value) where TReaderWriter: IReaderWriter
    {
        if (serializer.IsReader)
        {
            value = new Url();
        }
        serializer.SerializeValue(ref value.Value);
    }
}
```

Additionally, you can also add extensions for `FastBufferReader.ReadValue()`, `FastBufferWriter.WriteValue()`, and `BufferSerializer<TReaderWriter>.SerializeValuePreChecked()` to provide more optimal implementations for manual serialization using `FastBufferReader.TryBeginRead()`, `FastBufferWriter.TryBeginWrite()`, and `BufferSerializer<TReaderWriter>.PreCheck()`, respectively. However, none of these will be used for serializing RPCs - only `ReadValueSafe` and `WriteValueSafe` are used.