---  
id: Unity.Netcode.ClientRpcSendParams  
title: Unity.Netcode.ClientRpcSendParams  
---

<div class="markdown level0 summary">

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

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct ClientRpcSendParams
```

</div>

### Fields

#### TargetClientIds

<div class="markdown level1 summary">

IEnumerable version of target id list - use either this OR
TargetClientIdsNativeArray Note: Even if you provide a value type such
as NativeArray, enumerating it will cause boxing. If you want to avoid
boxing, use TargetClientIdsNativeArray

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public IReadOnlyList<ulong> TargetClientIds
```

</div>

##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<System.UInt64\> |             |

#### TargetClientIdsNativeArray

<div class="markdown level1 summary">

NativeArray version of target id list - use either this OR
TargetClientIds This option avoids any GC allocations but is a bit
trickier to use.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NativeArray<ulong>? TargetClientIdsNativeArray
```

</div>

##### Field Value

| Type                                            | Description |
|-------------------------------------------------|-------------|
| System.Nullable\<NativeArray\<System.UInt64\>\> |             |

 
