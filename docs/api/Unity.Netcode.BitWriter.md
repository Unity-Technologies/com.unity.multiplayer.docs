<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Struct BitWriter

<div class="markdown level0 summary">

Helper class for doing bitwise writes for a FastBufferWriter. Ensures
all bitwise writes end on proper byte alignment so FastBufferWriter
doesn't have to be concerned with misaligned writes.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public ref struct BitWriter
```

</div>

### Properties

#### BitAligned

<div class="markdown level1 summary">

Whether or not the current BitPosition is evenly divisible by 8. I.e.
whether or not the BitPosition is at a byte boundary.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool BitAligned { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### Dispose()

<div class="markdown level1 summary">

Pads the written bit count to byte alignment and commits the write back
to the writer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Dispose()
```

</div>

#### TryBeginWriteBits(Int32)

<div class="markdown level1 summary">

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

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryBeginWriteBits(int bitCount)
```

</div>

##### Parameters

| Type         | Name     | Description                                |
|--------------|----------|--------------------------------------------|
| System.Int32 | bitCount | Number of bits you want to write, in total |

##### Returns

| Type           | Description                                                     |
|----------------|-----------------------------------------------------------------|
| System.Boolean | True if you can write, false if that would exceed buffer bounds |

#### WriteBit(Boolean)

<div class="markdown level1 summary">

Write a single bit to the buffer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBit(bool bit)
```

</div>

##### Parameters

| Type           | Name | Description                                             |
|----------------|------|---------------------------------------------------------|
| System.Boolean | bit  | Value of the bit. True represents 1, False represents 0 |

#### WriteBits(Byte, UInt32)

<div class="markdown level1 summary">

Write bits to stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBits(byte value, uint bitCount)
```

</div>

##### Parameters

| Type          | Name     | Description              |
|---------------|----------|--------------------------|
| System.Byte   | value    | Value to get bits from.  |
| System.UInt32 | bitCount | Amount of bits to write. |

#### WriteBits(UInt64, UInt32)

<div class="markdown level1 summary">

Write s certain amount of bits to the stream.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void WriteBits(ulong value, uint bitCount)
```

</div>

##### Parameters

| Type          | Name     | Description             |
|---------------|----------|-------------------------|
| System.UInt64 | value    | Value to get bits from. |
| System.UInt32 | bitCount | Amount of bits to write |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
