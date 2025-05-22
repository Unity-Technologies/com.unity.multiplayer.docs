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

[Rpc(SendTo.Server)]
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

* Manually before calling `SerializeValue` if `serializer.IsReader` (or something like that).

* Initialize in the default constructor.

This is by design. You may see the values as null until initialized. The serializer isn't deserializing them, the `null` value is applied before it can be serialized.

## Conditional serialization

As you have more control over serialization of a struct, you might implement conditional serialization at runtime.

The following example explores a more advanced use case.

### Example: move

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

* If the `SyncVelocity` flag is set to true, serialize both the `LinearVelocity` and `AngularVelocity` into the stream.

* When the `SyncVelocity` flag is set to `false`, leave `LinearVelocity` and `AngularVelocity` with default values.

### Recursive nested serialization

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

### Using with NetworkVariable

In order to use an `INetworkSerializable` implementation with `NetworkVariable`, you must also implement the `IEquatable<T>` interface in order to determine whether a value has been updated or not. 

```csharp
public struct NetworkVariableCompatible : INetworkSerializable, IEquatable<NetworkVariableCompatible>
{
    public int Value1;
    public float Value2;
    public long Value3;
    public Vector3 Value4;

    public bool Equals(NetworkVariableCompatible other)
    {
        return other.Value1 == Value1 && other.Value2 == Value2 && other.Value3 == Value3 && other.Value4 == Value4;
    }

    public void NetworkSerialize<TT>(BufferSerializer<TT> serializer) where TT : IReaderWriter
    {
        serializer.SerializeValue(ref Value1);
        serializer.SerializeValue(ref Value2);
        serializer.SerializeValue(ref Value3);
        serializer.SerializeValue(ref Value4);
    }
}
```
The `IEquatable<NetworkVariableCompatible>` implementation checks the other `NetworkVariableCompatible` struct against the local values. However, there are some limitations when it comes to implementing the `IEquatable<T>` interface.

#### IEquatable and generics 
You might think it would be much simpler to have a single class that could handle all of your serialization in order to avoid replicating some of the base script requirements.

This is an example of what will not work:

```csharp
public class MyBaseSerializer<T> : INetworkSerializable, IEquatable<MyBaseSerializer<T>>
{
    public T Value1;
    public bool Equals(MyBaseSerializer<T> other)
    {
        return Value1.Equals(other.Value1);
    }
    public void NetworkSerialize<TT>(BufferSerializer<TT> serializer) where TT : IReaderWriter
    {
        // Will not compile because T can be null
        serializer.SerializeValue(ref Value1);
    }
}

public class MyBehaviour : NetworkBehaviour
{
    // Will cause an ILPP error complaining about MyBaseSerializer<int>
    // not implementating IEquatable<MyBaseSerializer<int>>
    public NetworkVariable<MyBaseSerializer<int>> SomeNetVar = new NetworkVariable<MyBaseSerializer<int>>();
}
```
There are two issues with the above approach:
- The Netcode for GameObjects ILPP script will be looking for the actual `IEquatable<MyBaseSerializer<int>>` and throw an error.
- The generic `T` is nullable and cannot be nullable.

However, there are some things you can do if you would like to use this kind of design pattern. The alternative is to not try and make the base class implement `IEquatable` but to implement it relative to each derived class.

One example of this would be:
```csharp
public class MyBaseClass : INetworkSerializable, IEquatable<MyBaseClass>
{
    public int SomeData1;
    public long SomeData2;
    public Vector3 SomeData3;

    public bool Equals(MyBaseClass other)
    {
        return other.SomeData1 == SomeData1 && other.SomeData2 == SomeData2 && other.SomeData3 == SomeData3;
    }

    protected virtual void OnNetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        serializer.SerializeValue(ref SomeData1);
        serializer.SerializeValue(ref SomeData2);
        serializer.SerializeValue(ref SomeData3);
    }

    /// <summary>
    /// Serialized first always
    /// </summary>
    public void NetworkSerialize<T>(BufferSerializer<T> serializer) where T : IReaderWriter
    {
        OnNetworkSerialize(serializer);
    }
}

public class MyExtendedData : MyBaseClass, IEquatable<MyExtendedData>
{
    public long Data;
    public bool Equals(MyExtendedData other)
    {
        // Compare at the child's level and the base class level
        return Data.Equals(other.Data) && base.Equals(other);
    }

    protected override void OnNetworkSerialize<T>(BufferSerializer<T> serializer)
    {
        // This serializes in an asscending order (child to root parent)
        serializer.SerializeValue(ref Data);
        base.OnNetworkSerialize(serializer);

        // This serializes in a descending order (root parent to last generation child)
        //base.OnNetworkSerialize(serializer);
        //serializer.SerializeValue(ref Data);
    }
}

public class MyBehaviour : NetworkBehaviour
{
    public NetworkVariable<MyExtendedData> SomeNetVar = new NetworkVariable<MyExtendedData>();
}
```

Where `MyExtendedData` implements `IEquatable<MyExtendedData>` and overriding the `OnNetworkSerialize` allows one to stack serialization in an ascending or descending order.

::: caution

While the above example is using a class it is recommended to stick with using `struct` when implementing `INetworkSerializable` due to its lower memory footprint and it helps to avoid other serialization related issues when using a class. 

:::


