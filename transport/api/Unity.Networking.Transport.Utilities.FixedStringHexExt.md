---  
id: Unity.Networking.Transport.Utilities.FixedStringHexExt  
title: Unity.Networking.Transport.Utilities.FixedStringHexExt  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

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

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class FixedStringHexExt
```

## 

### AppendHex&lt;T&gt;(ref T, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static FormatError AppendHex<T>(this ref T str, ushort val)
    where T : struct, INativeList<byte>, IUTF8Bytes
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| T             | str  |             |
| System.UInt16 | val  |             |

#### Returns

| Type        | Description |
|-------------|-------------|
| FormatError |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |
