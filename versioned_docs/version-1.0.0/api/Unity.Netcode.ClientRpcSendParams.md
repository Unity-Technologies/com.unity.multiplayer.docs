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

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public struct ClientRpcSendParams
```

## 

### TargetClientIds

<div class="markdown level1 summary">

IEnumerable version of target id list - use either this OR
TargetClientIdsNativeArray Note: Even if you provide a value type such
as NativeArray, enumerating it will cause boxing. If you want to avoid
boxing, use TargetClientIdsNativeArray

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IReadOnlyList<ulong> TargetClientIds
```

#### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\&lt;System.UInt64&gt;|             |

### TargetClientIdsNativeArray

<div class="markdown level1 summary">

NativeArray version of target id list - use either this OR
TargetClientIds This option avoids any GC allocations but is a bit
trickier to use.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NativeArray<ulong>? TargetClientIdsNativeArray
```

#### Field Value

| Type                                            | Description |
|-------------------------------------------------|-------------|
| System.Nullable\<NativeArray\&lt;System.UInt64&gt;\> |             |
