---  
id: Unity.Networking.Transport.Utilities.NativeListExt  
title: Unity.Networking.Transport.Utilities.NativeListExt  
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
public static class NativeListExt
```

## 

### ResizeUninitializedTillPowerOf2&lt;T&gt;(NativeList&lt;T&gt;, Int32)

<div class="markdown level1 summary">

This function will make sure that can fit into . If \>= 's Length then
will be ResizeUninitialized to a new length. New Length will be the next
highest power of 2 of

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ResizeUninitializedTillPowerOf2<T>(this NativeList<T> list, int sizeToFit)
    where T : struct
```

#### Parameters

| Type           | Name      | Description                                           |
|----------------|-----------|-------------------------------------------------------|
| NativeList&lt;T&gt; | list      | List that should be resized if sizeToFit \>= its size |
| System.Int32   | sizeToFit | Requested size that should fit into list              |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |
