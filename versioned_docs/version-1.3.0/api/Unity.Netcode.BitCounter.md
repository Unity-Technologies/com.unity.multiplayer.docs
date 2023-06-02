---
id: Unity.Netcode.BitCounter
title: Unity.Netcode.BitCounter
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:33:51 pm
---

<div class="markdown level0 summary">

Utility class to count the number of bytes or bits needed to serialize a

value.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public static class BitCounter
```

## Methods

### GetUsedBitCount(UInt32)

<div class="markdown level1 summary">

Get the minimum number of bits required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int GetUsedBitCount(uint value)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

#### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The number of bits required |

### GetUsedBitCount(UInt64)

<div class="markdown level1 summary">

Get the minimum number of bits required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int GetUsedBitCount(ulong value)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value | The value   |

#### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The number of bits required |

### GetUsedByteCount(UInt32)

<div class="markdown level1 summary">

Get the minimum number of bytes required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int GetUsedByteCount(uint value)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

#### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of bytes required |

### GetUsedByteCount(UInt64)

<div class="markdown level1 summary">

Get the minimum number of bytes required to represent the given value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int GetUsedByteCount(ulong value)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value | The value   |

#### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of bytes required |
