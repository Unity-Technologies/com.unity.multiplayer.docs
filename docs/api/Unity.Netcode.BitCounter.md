---  
id: Unity.Netcode.BitCounter  
title: Unity.Netcode.BitCounter
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

BitCounter

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public static class BitCounter
```

</div>

### Methods

#### GetUsedBitCount(UInt32)

<div class="markdown level1 summary">

Get the minimum number of bits required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetUsedBitCount(uint value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

##### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The number of bits required |

#### GetUsedBitCount(UInt64)

<div class="markdown level1 summary">

Get the minimum number of bits required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetUsedBitCount(ulong value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value | The value   |

##### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The number of bits required |

#### GetUsedByteCount(UInt32)

<div class="markdown level1 summary">

Get the minimum number of bytes required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetUsedByteCount(uint value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

##### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of bytes required |

#### GetUsedByteCount(UInt64)

<div class="markdown level1 summary">

Get the minimum number of bytes required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int GetUsedByteCount(ulong value)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value | The value   |

##### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of bytes required |

 
