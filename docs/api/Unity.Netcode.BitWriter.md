---
id: Unity.Netcode.BitWriter
title: Unity.Netcode.BitWriter
---

# Struct BitWriter


Helper class for doing bitwise writes for a FastBufferWriter. Ensures
all bitwise writes end on proper byte alignment so FastBufferWriter
doesn't have to be concerned with misaligned writes.







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public ref struct BitWriter
```



### Properties

#### BitAligned


Whether or not the current BitPosition is evenly divisible by 8. I.e.
whether or not the BitPosition is at a byte boundary.






##### Declaration


``` lang-csharp
public readonly bool BitAligned { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### Dispose()


Pads the written bit count to byte alignment and commits the write back
to the writer






##### Declaration


``` lang-csharp
public void Dispose()
```



#### TryBeginWriteBits(Int32)


Allows faster serialization by batching bounds checking. When you know
you will be writing multiple fields back-to-back and you know the total
size, you can call TryBeginWriteBits() once on the total size, and then
follow it with calls to WriteBit() or WriteBits().

Bitwise write operations will throw OverflowException in editor and
development builds if you go past the point you've marked using
TryBeginWriteBits(). In release builds, OverflowException will not be
thrown for performance reasons, since the point of using TryBeginWrite
is to avoid bounds checking in the following operations in release
builds. Instead, attempting to write past the marked position in release
builds will write to random memory and cause undefined behavior, likely
including instability and crashes.






##### Declaration


``` lang-csharp
public bool TryBeginWriteBits(int bitCount)
```



##### Parameters

| Type         | Name     | Description                                |
|--------------|----------|--------------------------------------------|
| System.Int32 | bitCount | Number of bits you want to write, in total |

##### Returns

| Type           | Description                                                     |
|----------------|-----------------------------------------------------------------|
| System.Boolean | True if you can write, false if that would exceed buffer bounds |

#### WriteBit(Boolean)


Write a single bit to the buffer






##### Declaration


``` lang-csharp
public void WriteBit(bool bit)
```



##### Parameters

| Type           | Name | Description                                             |
|----------------|------|---------------------------------------------------------|
| System.Boolean | bit  | Value of the bit. True represents 1, False represents 0 |

#### WriteBits(Byte, UInt32)


Write bits to stream.






##### Declaration


``` lang-csharp
public void WriteBits(byte value, uint bitCount)
```



##### Parameters

| Type          | Name     | Description              |
|---------------|----------|--------------------------|
| System.Byte   | value    | Value to get bits from.  |
| System.UInt32 | bitCount | Amount of bits to write. |

#### WriteBits(UInt64, UInt32)


Write s certain amount of bits to the stream.






##### Declaration


``` lang-csharp
public void WriteBits(ulong value, uint bitCount)
```



##### Parameters

| Type          | Name     | Description             |
|---------------|----------|-------------------------|
| System.UInt64 | value    | Value to get bits from. |
| System.UInt32 | bitCount | Amount of bits to write |



