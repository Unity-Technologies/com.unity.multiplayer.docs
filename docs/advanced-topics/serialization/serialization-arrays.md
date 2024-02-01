---
id: arrays
title: Arrays and Native Containers
---

Arrays of [C# primitive types](cprimatives.md), like `int[]`, and [Unity primitive types](unity-primatives.md), such as `Vector3`, are serialized by built-in serialization code. Otherwise, any array of types that aren't handled by the built-in serialization code, such as `string[]`, needs to be handled through a container class or structure that implements the  [`INetworkSerializable`](inetworkserializable.md) interface.

## Built-In Primitive Types Example
Using built-in primitive types is fairly straight forward:
```csharp
[Rpc(SendTo.Server)]
void HelloServerRpc(int[] scores, Color[] colors) { /* ... */ }
```

## INetworkSerializable Implementation Example
There are many ways to handle sending an array of managed types.
The below example is a simple `string` container class that implements `INetworkSerializable` and can be used as an array of "StringContainers":
```csharp
[Rpc(SendTo.ClientsAndHost)]
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

## Native Containers

Netcode for GameObjects supports `NativeArray` and `NativeList` native containers with built-in serialization, RPCs, and NetworkVariables. However, you cannot nest either of these containers without causing a crash.

A few examples of nesting that will cause a crash:
* `NativeArray<NativeList<T>>`
* `NativeList<NativeArray<T>>`
* `NativeArray<NativeArray<T>>`
* `NativeList<NativeList<T>>`

### `NativeArray<T>`

To serialize a `NativeArray` container, use `serializer.SerializeValue(ref Array)`.

### `NativeList<T>`

To serialize a `NativeList` container, you must:
1. Ensure your assemblies reference `Collections`.
2. You must add `UNITY_NETCODE_NATIVE_COLLECTION_SUPPORT` to your **Scriptiong Define Symbols** list.
   1. From the Unity Editor top bar menu, go to **Edit** > **Project Settings...** > **Player**.
   2. Select the **Other Settings** dropdown.
   3. Scroll to **Script Compilation** > **Scripting Define Symbols**.
   4. Add `UNITY_NETCODE_NATIVE_COLLECTION_SUPPORT`.
3. Use `serializer.SerializeValue(ref List)` as your serialization syntax. 

:::important
When using `NativeLists` within `INetworkSerializable`, the list `ref` value must be a valid, initialized `NativeList`.

NetworkVariables are similar that the value must be initialized before it can receive updates.
For example,
`public NetworkVariable<NativeList<byte>> ByteListVar = new NetworkVariable<NativeList<byte>>{Value = new NativeList<byte>(Allocator.Persistent)};`

RPCs do this automatically.
:::