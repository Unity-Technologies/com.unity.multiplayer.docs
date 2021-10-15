---
id: fastbufferwriter-fastbufferreader
title: FastBufferWriter and FastBufferReader
sidebar_label: FastBufferWriter and FastBufferReader
---
The serialization and deserialization is done via `FastBufferWriter` and `FastBufferReader`. These have methods for serializing individual types and methods for serializing packed numbers, but in particular provide a high-performance method called `WriteValue()/ReadValue()` (for Writers and Readers, respectively) that can extremely quickly write an entire unmanaged struct to a buffer. 

There's a trade-off of CPU usage vs bandwidth in using this: Writing individual fields is slower (especially when it includes operations on unaligned memory), but allows the buffer to be filled more efficiently.

## FastBufferWriter and FastBufferReader

`FastBufferWriter` and `FastBufferReader` are replacements for the old `NetworkWriter` and `NetworkReader`. They have much the same interface, but there are some critical differences:

- `FastBufferWriter` and `FastBufferReader` are **structs**, not **classes**. This means they can be constructed and destructed without allocations if necessary.
- `FastBufferWriter` and `FastBufferReader` both wrap `NativeArray<byte>`, allowing us to take advantage of extremely fast `Allocator.Temp` and `Allocator.TempJob` allocations to create temporary buffers.
- Neither `FastBufferReader` nor `FastBufferWriter` inherits from nor contains a `Stream`. Any code that currently operates on streams will have to be rewritten.
- `FastBufferReader` and `FastBufferWriter` are heavily optimized for speed, using aggressive inlining and unsafe code to achieve the fastest possible buffer storage and retrieval.
- `FastBufferReader` and `FastBufferWriter` use unsafe typecasts and `UnsafeUtility.MemCpy` operations on `byte*` values, achieving native memory copy performance with no need to iterate or do bitwise shifts and masks.
- `FastBufferReader` and `FastBufferWriter` are intended to make data easier to debug - one such thing to support will be a `#define MLAPI_FAST_BUFFER_UNPACK_ALL` that will disable all packing operations to make the buffers for messages that use them easier to read.

A core benefit of `NativeArray<byte>` is that it offers access to the allocation scheme of `Allocator.TempJob`. This uses a special type of allocation that is nearly as fast as stack allocation and involves no GC overhead, while being able to persist for a few frames. In general we will never need them for more than a frame, but this does give us a very efficient option for creating buffers as needed, which avoids the need to use a pool for them. The only downside is that buffers created this way must be manually disposed after use, as they're not garbage collected.

:::note
`FastBufferReader` and `FastBufferWriter` are **fixed size** buffers. They cannot grow.
:::

## Bounds Checking

For performance reasons, `FastBufferReader` and `FastBufferWriter` **do not do bounds checking** on each write. Rather, they require the use of specific bounds checking functions - `VerifyCanRead(int amount)` and `VerifyCanWrite(int amount, bool canGrow = false, Allocator growthAllocator)`, respectively. This improves performance by allowing you to verify the space exists for the data being read or written in blocks, rather than doing that check on every single operation.


:::info
**In editor mode and development builds**, calling these functions records a watermark point, and any attempt to read or write past the watermark point will throw an exception. This ensures these functions are used properly, while avoiding the performance cost of per-operation checking in production builds.
:::

## Bitwise Reading and Writing

Writing values in sizes measured in bits rather than bytes comes with a cost 
- First, it comes with a cost of having to track bitwise lengths and convert them to bytewise lenghts.
- Second, it comes with a cost of having to remember to add padding after your bitwise writes and reads to ensure the next bytewise write or read functions correctly, and to make sure the buffer length includes any trailing bits.

To address that, `FastBufferReader` and `FastBufferWriter` do not, themselves, have bitwise operations. When needed, however, you can create a `BitwiseWriter` or `BitwiseReader` instance, which is an IDisposable to ensure that no unaligned bits are left at the end - from the perspective of `FastBufferReader` and `FastBufferWriter`, only bytes are allowed. `BitwiseWriter` and `BitwiseReader` operate directly on the underlying buffer, so calling non-bitwise operations within a bitwise context is an error (and will raise an exception in non-production builds).

```csharp
FastBufferWriter writer = new FastBufferWriter(256, Allocator.TempJob);
using(var bitWriter = writer.EnterBitwiseContext())
{
	bitWriter.WriteBit(a);
	bitWriter.WriteBits(b, 5);
} // Dispose automatically adds 2 more 0 bits to pad to the next byte.
```

## INetworkSerializable

A new `BufferSerializer` class wrapping `FastBufferReader` and `FastBufferWriter` will replace the existing `NetworkSerializer` to provide the same two-way interface as the existing `NetworkSerializer`, and is rewritten as a **ref struct** so that no allocation overhead is incurred in calling the `INetworkSerializable`'s `Serialize()` method. 

A **ref struct** is chosen instead of a normal struct to avoid the pitfalls associated with having mutable structs and forgetting to pass them with the ref keyword - we can manage this with `FastBufferReader` and `FastBufferWriter` because those are internal and we can rely on our ability to understand the implications of using them as structs, but our end users may be less experienced and may inadvertently pass this forward to calls that do not take the value by ref. 

A `ref struct` is always passed by reference rather than copied, but does have the disadvantage of being limited to the stack frame - so we can't use it for `FastBufferWriter` and `FastBufferReader` because we persist those.

`BufferSerializer` has an additional advantage (or disadvantage, depending on your viewpoint) compared to `FastBufferWriter` and `FastBufferReader`: since it's intended to be used by our end users, it performs bounds checking on every operation and throws exceptions if attempting to read or write out of bounds. 

This, combined with the `IsReader` if-checks, will make `BufferSerializer` slower than `FastBufferReader` and `FastBufferWriter` - but for advanced users, we can expose `FastBufferReader` and `FastBufferWriter` and allow the user to use them directly if they choose (with all appropriate warnings about them delivered).

