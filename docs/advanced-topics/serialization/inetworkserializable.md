---
id: inetworkserializable
title: INetworkSerializable
sidebar_label: INetworkSerializable
---

The `INetworkSerializable` interface can be used to define custom serializable types.

```csharp
struct MyComplexStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    // INetworkSerializable
    public void NetworkSerialize(NetworkSerializer serializer)
    {
        serializer.Serialize(ref Position);
        serializer.Serialize(ref Rotation);
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

## Conditional Serialization

As you have more control over serialization of a struct, you might implement conditional serialization at runtime.

More advanced use-cases are explored in following examples.

### Example: Array

```csharp

public struct MyCustomStruct : INetworkSerializable
{
    public int[] Array;

    public void NetworkSerialize(NetworkSerializer serializer)
    {
        // Length
        int length = 0;
        if (!serializer.IsReading)
        {
            length = Array.Length;
        }

        serializer.Serialize(ref length);

        // Array
        if (serializer.IsReading)
        {
            Array = new int[length];
        }

        for (int n = 0; n < length; ++n)
        {
            serializer.Serialize(ref Array[n]);
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


The `NetworkSerializer.IsReading` flag is being utilized here to determine whether or not to set `length` value to prepare before writing into the stream —  we then use it to determine whether or not to create a new `int[]` instance with `length` size to set `Array` before reading values from the stream.


### Example: Move

```csharp

public struct MyMoveStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    public bool SyncVelocity;
    public Vector3 LinearVelocity;
    public Vector3 AngularVelocity;

    public void NetworkSerialize(NetworkSerializer serializer)
    {
        // Position & Rotation
        serializer.Serialize(ref Position);
        serializer.Serialize(ref Rotation);
        
        // LinearVelocity & AngularVelocity
        serializer.Serialize(ref SyncVelocity);
        if (SyncVelocity)
        {
            serializer.Serialize(ref LinearVelocity);
            serializer.Serialize(ref AngularVelocity);
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

Unlike the [Array](#example-array) example above, in this example we do not use `NetworkSerializer.IsReading` flag to change serialization logic but to change the value of a serialized flag itself.

- If the `SyncVelocity` flag is set to true, both the `LinearVelocity` and `AngularVelocity`  will  be serialized into the stream 
- When the `SyncVelocity` flag is set to `false`, we will leave `LinearVelocity` and `AngularVelocity` with default values.

## Recursive Nested Serialization

It is possible to recursively serialize nested members with `INetworkSerializable` interface down in the hierachy tree.

Review the following example:

```csharp

public struct MyStructA : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    public void NetworkSerialize(NetworkSerializer serializer)
    {
        serializer.Serialize(ref Position);
        serializer.Serialize(ref Rotation);
    }
}

public struct MyStructB : INetworkSerializable
{
    public int SomeNumber;
    public string SomeText;
    public MyStructA StructA;
    
    public void NetworkSerialize(NetworkSerializer serializer)
    {
        serializer.Serialize(ref SomeNumber);
        serializer.Serialize(ref SomeText);
        StructA.NetworkSerialize(serializer);
    }
}
```

If we were to serialize `MyStructA` alone, it would serialize `Position` and `Rotation` into the stream using `NetworkSerializer`.

However, if we were to serialize `MyStructB`, it would serialize `SomeNumber` and `SomeText` into the stream, then serialize `StructA` by calling `MyStructA`'s `void NetworkSerialize(NetworkSerializer)` method, which serializes `Position` and `Rotation` into the same stream.

:::note
Technically, there is no hard-limit on how many `INetworkSerializable` fields you can serialize down the tree hierachy. In practice, consider memory and bandwidth boundaries for best performance.
:::

:::tip
You can conditionally serialize in recursive nested serialization scenario and make use of both features.
:::
