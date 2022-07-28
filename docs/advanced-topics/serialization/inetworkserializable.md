---
id: inetworkserializable
title: INetworkSerializable
sidebar_label: INetworkSerializable
---

The `INetworkSerializable` interface can be used to define custom serializable types. 

:::caution 
All examples provided will work with RPCs and custom messages but some examples will not work with `NetworkVariable` due to the unmanaged type restriction.<br/>
**NetworkVariable Type Litmus Test for INetworkSerializable Implementations:**
- If the implementation itself can be a null (i.e. a class), then it cannot be used
- If it contains any property that can be null (i.e. arrays), then it cannot be used

The alternative is to create your own `NetworkVariableBase` derived `type` specific class.
:::

```csharp
struct MyComplexStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    // INetworkSerializable
    void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        serializer.SerializeValue(ref Position);
        serializer.SerializeValue(ref Rotation);
    }
    // ~INetworkSerializable
}
```

Types implementing `INetworkSerializable` are supported by `NetworkSerializer`, `RPC`s and `NetworkVariable`s.

```csharp

[ServerRpc]
void MyServerRpc(MyComplexStruct myStruct) { /* ... */ }

void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        MyServerRpc(
            new MyComplexStruct
            {
                Position = transform.position,
                Rotation = transform.rotation
            }); // Client -> Server
    }
}
```

## Nested serial types

Nested serial types will be `null` unless you initialize following one of these methods:

* Manually before calling `SerializeValue` if `serializer.IsReader` (or something like that)
* Initialize in the default constructor

This is by design. You may see the values as null until properly initialized. The serializer is not deserializing them, the `null` value is simply applied before it can be serialized.

## Conditional Serialization

As you have more control over serialization of a struct, you might implement conditional serialization at runtime.

More advanced use-cases are explored in following examples.

### Example: Array
:::caution
The below `INetworkSerializable` implementation example works only with RPCs and/or custom messages.  The below implementation uses an array within an `INetworkSerializable` implementation.  Arrays can be `null` and are not supported by the `NetworkVariable` class. As an alternative, you can write your own `NetworkVariableBase` derived class that does support managed or unmanaged value types.<br/>
[Read More About Custom NetworkVariable Implementations](../basics/networkvariable.md)
:::

```csharp
public struct MyCustomStruct : INetworkSerializable
{
    public int[] Array;

    public void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        // Length
        int length = 0;
        if (!serializer.IsReader)
        {
            length = Array.Length;
        }

        serializer.SerializeValue(ref length);

        // Array
        if (serializer.IsReader)
        {
            Array = new int[length];
        }

        for (int n = 0; n < length; ++n)
        {
            serializer.SerializeValue(ref Array[n]);
        }
    }
}
```

**Reading:**

- (De)serialize `length` back from the stream
- Iterate over `Array` member `n=length` times
- (De)serialize value back into Array[n] element from the stream


**Writing:**

- Serialize length=Array.Length into stream
- Iterate over Array member n=length times
- Serialize value from Array[n] element into the stream


The `BufferSerializer<TReaderWriter>.IsReader` flag is being utilized here to determine whether or not to set `length` value to prepare before writing into the stream —  we then use it to determine whether or not to create a new `int[]` instance with `length` size to set `Array` before reading values from the stream. There's also an equivalent but opposite `BufferSerializer<TReaderWriter>.IsWriting`


### Example: Move

```csharp

public struct MyMoveStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    public bool SyncVelocity;
    public Vector3 LinearVelocity;
    public Vector3 AngularVelocity;

    void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        // Position & Rotation
        serializer.SerializeValue(ref Position);
        serializer.SerializeValue(ref Rotation);
        
        // LinearVelocity & AngularVelocity
        serializer.SerializeValue(ref SyncVelocity);
        if (SyncVelocity)
        {
            serializer.SerializeValue(ref LinearVelocity);
            serializer.SerializeValue(ref AngularVelocity);
        }
    }
}
```

**Reading:**

- (De)serialize `Position` back from the stream
- (De)serialize `Rotation` back from the stream
- (De)serialize `SyncVelocity` back from the stream
- Check if `SyncVelocity` is set to true, if so:
  - (De)serialize `LinearVelocity` back from the stream
  - (De)serialize `AngularVelocity` back from the stream

**Writing:**

- Serialize `Position` into the stream
- Serialize `Rotation` into the stream
- Serialize `SyncVelocity` into the stream
- Check if `SyncVelocity` is set to true, if so:
  -  Serialize `LinearVelocity` into the stream
  -  Serialize `AngularVelocity` into the stream

Unlike the [Array](#example-array) example above, in this example we do not use `BufferSerializer<TReaderWriter>.IsReader` flag to change serialization logic but to change the value of a serialized flag itself.

- If the `SyncVelocity` flag is set to true, both the `LinearVelocity` and `AngularVelocity`  will  be serialized into the stream 
- When the `SyncVelocity` flag is set to `false`, we will leave `LinearVelocity` and `AngularVelocity` with default values.

## Recursive Nested Serialization

It is possible to recursively serialize nested members with `INetworkSerializable` interface down in the hierarchy tree.

Review the following example:

```csharp

public struct MyStructA : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        serializer.SerializeValue(ref Position);
        serializer.SerializeValue(ref Rotation);
    }
}

public struct MyStructB : INetworkSerializable
{
    public int SomeNumber;
    public string SomeText;
    public MyStructA StructA;
    
    void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        serializer.SerializeValue(ref SomeNumber);
        serializer.SerializeValue(ref SomeText);
        StructA.NetworkSerialize(serializer);
    }
}
```
If we were to serialize `MyStructA` alone, it would serialize `Position` and `Rotation` into the stream using `NetworkSerializer`.

However, if we were to serialize `MyStructB`, it would serialize `SomeNumber` and `SomeText` into the stream, then serialize `StructA` by calling `MyStructA`'s `void NetworkSerialize(NetworkSerializer)` method, which serializes `Position` and `Rotation` into the same stream.

:::note
Technically, there is no hard-limit on how many `INetworkSerializable` fields you can serialize down the tree hierarchy. In practice, consider memory and bandwidth boundaries for best performance.
:::

:::tip
You can conditionally serialize in recursive nested serialization scenario and make use of both features.
:::

:::caution
While you can have nested `INetworkSerializable` implementations (i.e. an `INetworkSerializable` implementation with `INetworkSerializable` implementations as properties) like demonstrated in the example above, you cannot have derived children of an `INetworkSerializable` implementation. <br/>
**Unsupported Example**
```csharp
/// This is not supported.
public struct MyStructB : MyStructA
{
    public int SomeNumber;
    public string SomeText;
    
    void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        serializer.SerializeValue(ref SomeNumber);
        serializer.SerializeValue(ref SomeText);
        serializer.SerializeValue(ref Position);
        serializer.SerializeValue(ref Rotation);
    }
}
```
:::