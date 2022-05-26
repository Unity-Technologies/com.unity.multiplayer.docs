---  
id: Unity.Netcode.Arithmetic
title: Unity.Netcode.Arithmetic
---

<div class="markdown level0 summary">

Arithmetic helper class

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

Arithmetic

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
public static class Arithmetic
```

</div>

### Methods

#### VarIntSize(UInt64)

<div class="markdown level1 summary">

Gets the output size in bytes after VarInting a unsigned integer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int VarIntSize(ulong value)
```

</div>

##### Parameters

| Type          | Name  | Description                              |
|---------------|-------|------------------------------------------|
| System.UInt64 | value | The unsigned integer whose length to get |

##### Returns

| Type         | Description         |
|--------------|---------------------|
| System.Int32 | The amount of bytes |

#### ZigZagDecode(UInt64)

<div class="markdown level1 summary">

Decides a ZigZag encoded integer back to a signed integer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static long ZigZagDecode(ulong value)
```

</div>

##### Parameters

| Type          | Name  | Description          |
|---------------|-------|----------------------|
| System.UInt64 | value | The unsigned integer |

##### Returns

| Type         | Description                       |
|--------------|-----------------------------------|
| System.Int64 | The signed version of the integer |

#### ZigZagEncode(Int64)

<div class="markdown level1 summary">

ZigZag encodes a signed integer and maps it to a unsigned integer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static ulong ZigZagEncode(long value)
```

</div>

##### Parameters

| Type         | Name  | Description                  |
|--------------|-------|------------------------------|
| System.Int64 | value | The signed integer to encode |

##### Returns

| Type          | Description                             |
|---------------|-----------------------------------------|
| System.UInt64 | A ZigZag encoded version of the integer |

 
