---
id: networkwriter-networkreader-networkbuffer
title: NetworkWriter, NetworkReader and NetworkBuffer
sidebar_label: NetworkWriter, NetworkReader, & NetworkBuffer
---

Internally, the MLAPI uses Streams for it's data. This gives a ton of flexibility for the end user. If the end user for example doesn't want to use Streams but rather just byte arrays at their own level. They can do so by wrapping their arrays in MemoryStreams which don't create any garbage.

The MLAPI does have its own prefered Stream that is used internally called `NetworkBuffer`.

## NetworkBuffer

The `NetworkBuffer` is a Stream implementation that functions in a similar way as the `MemoryStream`. The main difference is that the `NetworkBuffer`  has methods for operating on the Bit level rather than the Byte level.

### PooledNetworkBuffer

Creating resizable `NetworkBuffer`s allocates a byte array to back it, just like a `MemoryStream`. To not create any allocations, the MLAPI has a built in Pool of `NetworkBuffer`s  which is recommended to be used instead.

```csharp
using (PooledNetworkBuffer stream = PooledNetworkBuffer.Get())
{
    // Do stuff with the Pooled Stream. This stream is reset and ready for use, it will auto resize to fit all your data.
}
```

## Writer and Reader

While the `BinaryWriter` class built into .NET is great for reading and writing binary data, it's not very compact or efficient and doesn't offer a ton of flexibility. The `NetworkWriter` and `NetworkReader` solves this.

The `NetworkWriter` and `NetworkReader` can operate at the bit level when used with a `NetworkBuffer` . It also has many fancy write methods for compacting data.

Some of it's key features include the following.

### Value VarInt

When using the "Packed" versions of a write or read, the output will be VarInted. That is, smaller values will take less space. If you write the value 50 as a ulong in the packed format, it will only take one byte in the output.

### Diff Arrays

When using the "Diff" versions of an array write or read, the output will be the diff between two arrays, allowing for delta encoding.

### Unity Types

The `NetworkWriter` and `NetworkReader` support many data types by default such as Vector3, Vector2, Ray, Quaternion and more.

### BitWise Writing

If you for example have an enum with 5 values. All those values could fit into 3 bits. With the `NetworkWriter`, this can be done like this:

```csharp
writer.WriteBits((byte)MyEnum.MyEnumValue, 3);
MyEnum value = (Myenum)reader.ReadBits(3);
```

### Performance consideration

When the stream is not aligned, (BitAligned == false, this occurs when writing bits that do fill the whole byte, or when writing bools as they are written as bits), performance is decreased for each write and read. This is only a big concern if you are about to write a large amount of data after not being aligned. To solve this, the `NetworkWriter` allows you to "WritePadBits" and the `NetworkReader` then lets you skip those bits with "SkipPadBits" to align the stream to the nearest byte.

```csharp
writer.WriteBool(true); //Now the stream is no longer aligned. Every byte has to be offset by 1 bit.
writer.WritePadBits(); //Writes 7 empty bits to make the stream aligned.
writer.WriteByteArray(myLargeArray, 1024); //Writes 1024 bytes without any bit adjustments


reader.ReadBool();
reader.SkipPadBits();
reader.ReadByteArray(myOutputArray, 1024);
```

## Pooled NetworkReader/NetworkWriter

The writer and reader also has pooled versions to avoid allocating the classes themselves. You might as well use them.

```csharp
using (var reader = PooledNetworkReader.Get(myStreamToReadFrom))
{
    // Read here
}

using (var writer = PooledNetworkWriter.Get(myStreamToWriteTo))
{
    // Write here
}
```
