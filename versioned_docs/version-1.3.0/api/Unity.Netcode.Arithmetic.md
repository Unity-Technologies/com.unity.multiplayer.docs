---
id: Unity.Netcode.Arithmetic
title: Unity.Netcode.Arithmetic
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:33:44 pm
---

<div class="markdown level0 summary">

Arithmetic helper class

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
public static class Arithmetic
```

## Methods

### VarIntSize(UInt64)

<div class="markdown level1 summary">

Gets the output size in bytes after VarInting a unsigned integer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int VarIntSize(ulong value)
```

#### Parameters

| Type          | Name  | Description                              |
|---------------|-------|------------------------------------------|
| System.UInt64 | value | The unsigned integer whose length to get |

#### Returns

| Type         | Description         |
|--------------|---------------------|
| System.Int32 | The amount of bytes |

### ZigZagDecode(UInt64)

<div class="markdown level1 summary">

Decides a ZigZag encoded integer back to a signed integer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static long ZigZagDecode(ulong value)
```

#### Parameters

| Type          | Name  | Description          |
|---------------|-------|----------------------|
| System.UInt64 | value | The unsigned integer |

#### Returns

| Type         | Description                       |
|--------------|-----------------------------------|
| System.Int64 | The signed version of the integer |

### ZigZagEncode(Int64)

<div class="markdown level1 summary">

ZigZag encodes a signed integer and maps it to a unsigned integer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ulong ZigZagEncode(long value)
```

#### Parameters

| Type         | Name  | Description                  |
|--------------|-------|------------------------------|
| System.Int64 | value | The signed integer to encode |

#### Returns

| Type          | Description                             |
|---------------|-----------------------------------------|
| System.UInt64 | A ZigZag encoded version of the integer |
