---
id: inetworkserializable
title: INetworkSerializable
sidebar_label: INetworkSerializable
created: 2023-01-24T18:19:59-06:00
updated: 2023-01-24T18:19:59-06:00
---

You can use the `INetworkSerializable` interface to define custom serializable types.

```csharp
struct MyComplexStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    // INetworkSerializable
    public void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        serializer.SerializeValue(ref Position);
        serializer.SerializeValue(ref Rotation);
    }
    // ~INetworkSerializable
}
```

Types implementing `INetworkSerializable` are supported by `NetworkSerializer`, `RPC` s and `NetworkVariable` s.

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

# Nested serial types

Nested serial types will be `null` unless you initialize following one of these methods:

* Manually before calling `SerializeValue` if `serializer.IsReader` (or something like that).

* Initialize in the default constructor.

This is by design. You may see the values as null until initialized. The serializer isn't deserializing them, the `null` value is applied before it can be serialized.

# Conditional Serialization

As you have more control over serialization of a struct, you might implement conditional serialization at runtime.

The following examples explore more advanced use-cases.

## Example: Array

You can use arrays in one of two ways:

1. Via C# arrays
2. Via Native Collections (`NativeArray`)

The critical distinction between the two is that **C# arrays** convert any type that has the arrays to a managed type. This results in garbage collection overhead and makes the arrays somewhat less optimized when you use them with `NetworkVariable`. On the other hand, `NativeArray` requires manual memory management.

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

```csharp
public struct MyCustomNativeStruct : INetworkSerializable, IDisposable
{
    public NativeArray<int> Array;

    public void Dispose()
    {
        Array.Dispose();
    }

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
            if(Array.IsCreated)
            {
                // Make sure the existing array is disposed and not leaked
                Array.Dispose();
            }
            Array = new NativeArray<int>(length, Allocator.Persistent);
        }

        for (int n = 0; n < length; ++n)
        {
            // NataveArray doesn't have a by-ref index operator
            // so we have to read, serialize, write. This works in both
            // reading and writing contexts - in reading, `val` gets overwritten
            // so the current value doesn't matter; in writing, `val` is unchanged,
            // so Array[n] = val is the same as Array[n] = Array[n].
            // NativeList also exists which does have a by-ref `ElementAt()` method.
            var val = Array[n];
            serializer.SerializeValue(ref val);
            Array[n] = val;
        }
    }
}
```

**Reading:**

* (De)serialize `length` back from the stream

* Iterate over `Array` member `n=length` times

* (De)serialize value back into Array[n] element from the stream

**Writing:**

* Serialize `length=Array.Length` into stream

* Iterate over Array member n=length times

* Serialize value from Array[n] element into the stream

The following examples uses the `BufferSerializer<TReaderWriter>.IsReader` flag to decide whether to set `length` value to prepare before writing into the stream—the example then uses it to decide whether to create a new `int[]` instance with `length` size to set `Array` before reading values from the stream. There's also an equivalent but opposite `BufferSerializer<TReaderWriter>.IsWriting`.

## Example: Move

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

* (De)serialize `Position` back from the stream.

* (De)serialize `Rotation` back from the stream.

* (De)serialize `SyncVelocity` back from the stream.

* Check if `SyncVelocity` is set to true, if so:

  * (De)serialize `LinearVelocity` back from the stream.

  * (De)serialize `AngularVelocity` back from the stream.

**Writing:**

* Serialize `Position` into the stream.

* Serialize `Rotation` into the stream.

* Serialize `SyncVelocity` into the stream.

* Check if `SyncVelocity` is set to true, if so:

  * Serialize `LinearVelocity` into the stream.

  * Serialize `AngularVelocity` into the stream.

Unlike the [Array](#example-array) example above, this example doesn't use `BufferSerializer<TReaderWriter>.IsReader` flag to change serialization logic but to change the value of a serialized flag itself.

* If the `SyncVelocity` flag is set to true, serialize both the `LinearVelocity` and `AngularVelocity` into the stream.

* When the `SyncVelocity` flag is set to `false`, leave `LinearVelocity` and `AngularVelocity` with default values.

## Recursive Nested Serialization

It's possible to recursively serialize nested members with `INetworkSerializable` interface down in the hierarchy tree.

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

If you were to serialize `MyStructA` alone, it would serialize `Position` and `Rotation` into the stream using `NetworkSerializer`.

However, if you were to serialize `MyStructB`, it would serialize `SomeNumber` and `SomeText` into the stream, then serialize `StructA` by calling `MyStructA` 's `void NetworkSerialize(NetworkSerializer)` method, which serializes `Position` and `Rotation` into the same stream.

:::note

Technically, there is no hard-limit on the number of `INetworkSerializable` fields you can serialize down the tree hierarchy. In practice, consider memory and bandwidth boundaries for best performance.

:::

:::tip

You can conditionally serialize in recursive nested serialization scenario and make use of both features.

:::

:::caution

While you can have nested `INetworkSerializable` implementations (an `INetworkSerializable` implementation with `INetworkSerializable` implementations as properties) like demonstrated in the example above, you can't have derived children of an `INetworkSerializable` implementation. <br/>
**Unsupported Example**

```csharp
/// This isn't supported.
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
