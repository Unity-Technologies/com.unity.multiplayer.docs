---  
id: Assets.Scripts.Transport.Utilities  
title: Assets.Scripts.Transport.Utilities  
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

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class Utilities

## Methods 

### DeserializeUnmanaged&lt;T&gt;(Byte\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static T DeserializeUnmanaged<T>(byte[] buffer)
        where T : struct

#### Parameters

| Type            | Name   | Description |
|-----------------|--------|-------------|
| System.Byte\[\] | buffer |             |

#### Returns

| Type | Description |
|------|-------------|
| T    |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### DeserializeUnmanaged&lt;T&gt;(ref NativeSlice&lt;Byte&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static T DeserializeUnmanaged<T>(ref NativeSlice<byte> buffer)
        where T : struct

#### Parameters

| Type                                             | Name   | Description |
|--------------------------------------------------|--------|-------------|
| Unity.Collections.NativeSlice&lt;System.Byte&gt; | buffer |             |

#### Returns

| Type | Description |
|------|-------------|
| T    |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### SerializeUnmanaged&lt;T&gt;(ref T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static byte[] SerializeUnmanaged<T>(ref T value)
        where T : struct

#### Parameters

| Type | Name  | Description |
|------|-------|-------------|
| T    | value |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |
