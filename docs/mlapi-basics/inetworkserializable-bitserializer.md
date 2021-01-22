---
id: inetworkserializable-bitserializer
title: INetworkSerializable & BitSerializer
sidebar_label: INetworkSerializable & BitSerializer
---




Complex user-defined types that implements `INetworkSerializable` interface are serialized by user provided serialization code.

An instance of `BitSerializer` is passed into the `INetworkSerializable::NetworkSerialize(BitSerializer)` method which is used to easily serialize fields by reference.

All types supporting serialization are supported by `BitSerializer` with `BitSerializer::Serialize(ref int value)` variant methods and templated `BitSerializer::Serialize<T>(ref T value) where T : INetSerializable` method.

```csharp

class BitSerializer
{
    bool IsReading { get; }

    void Serialize(ref int value) { /* ... */ }
    void Serialize(ref float value) { /* ... */ }
    // ...
    void Serialize<T>(ref T value) where T : INetSerializable { /* ... */ }
}

interface INetworkSerializable
{
    void NetworkSerialize(BitSerializer serializer);
}

struct MyComplexStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    // INetworkSerializable
    public NetworkSerialize(BitSerializer serializer)
    {
        serializer.Serialize(ref Position);
        serializer.Serialize(ref Rotation);
    }
    // ~INetworkSerializable
}

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

As tyou have more control over serialization of a struct, you might implement conditional serialization at runtime.

More advanced use-cases are explored in the examples below:

### Example: Array

```csharp

public struct MyCustomStruct : INetworkSerializable
{
    public int[] Array;

    public void NetworkSerialize(BitSerializer serializer)
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

- (De)serialize length back from the stream
- Iterate over Array member n=length times
- (De)serialize value back into Array[n] element from the stream


**Writing:**

- Serialize length=Array.Length into stream
- Iterate over Array member n=length times
- Serialize value from Array[n] element into the stream


The `BitSerializer.IsReading` flag is being utilized here to determine whether or not to set `length` value to prepare before writing into the stream —  we then use it to determine whether or not to create a new `int[]` instance with `length` size to set `Array` before reading values from the stream.


### Example: Move

```csharp

public struct MyMoveStruct : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    public bool SyncVelocity;
    public Vector3 LinearVelocity;
    public Vector3 AngularVelocity;

    public void NetworkSerialize(BitSerializer serializer)
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

- (De)serialize Position back from the stream
- (De)serialize Rotation back from the stream
- (De)serialize SyncVelocity back from the stream
- Check if SyncVelocity is set to true, if so:
- (De)serialize LinearVelocity back from the stream
- (De)serialize AngularVelocity back from the stream


**Writing:**

- Serialize Position into the stream
- Serialize Rotation into the stream
- SerializeSyncVelocity into the stream
- Check if SyncVelocity is set to true, if so:
  -  Serialize LinearVelocity into the stream
  -  Serialize AngularVelocity into the stream

Unlike the [Array](#example-array) example above,  in this example we do not use `BitSerializer.IsReading` flag to change serialization logic but to change the value of a serialized flag itself.  So:
- If the `SyncVelocity` flag is set to true, both the `LinearVelocity` and `AngularVelocity`  will  be serialized into the stream 
- When the `SyncVelocity` flag is set to `false`, we will leave `LinearVelocity` and `AngularVelocity` with default values.

## Nested/Recursive Serialization

`BitSerializer` implements `void Serialize<T>(ref T value) where T : INetSerializable` method which allows for recursive nested serialization.

Let's have a look at the example below:

```csharp

public struct MyStructA : INetworkSerializable
{
    public Vector3 Position;
    public Quaternion Rotation;

    public void NetworkSerialize(BitSerializer serializer)
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
    
    public void NetworkSerialize(BitSerializer serializer)
    {
        serializer.Serialize(ref SomeNumber);
        serializer.Serialize(ref SomeText);
        serializer.Serialize(ref StructA);
    }
}

```

If we were to serialize `MyStructA` alone, it would serialize `Position`and `Rotation`into the stream via BitSerializer.

However, if we were to serialize `MyStructB`, it would serialize `SomeNumber` and `SomeText` into the stream, then serialize `StructA `by calling `MyStructA`'s `void NetworkSerialize(BitSerializer)` method which serializes `Position` and `Rotation` into the same stream.

:::note
 Technically, there is no hard-limit on how many `INetworkSerializable` fields you can serialize down the tree hierachy but in practice, there are some memory and bandwidth boundaries to be considered.
:::

:::tip
You can conditionally serialize in recursive nested serialization scenario and make use of both features! 
:::