---
id: Unity.Netcode.ClientRpcSendParams
title: Unity.Netcode.ClientRpcSendParams
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:22 pm
---

<div class="markdown level0 summary">

Client-Side RPC The send parameters, when sending client RPCs, provides you wil the ability to target specific clients as a managed or unmanaged list: TargetClientIds and TargetClientIdsNativeArray
</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

## Inherited Members

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

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetType()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public struct ClientRpcSendParams
```

## Fields

### TargetClientIds

<div class="markdown level1 summary">

IEnumerable version of target id list - use either this OR TargetClientIdsNativeArray Note: Even if you provide a value type such as NativeArray, enumerating it will cause boxing. If you want to avoid boxing, use TargetClientIdsNativeArray

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
| IReadOnlyList\<System.UInt64\> |             |

### TargetClientIdsNativeArray

<div class="markdown level1 summary">

NativeArray version of target id list - use either this OR TargetClientIds This option avoids any GC allocations but is a bit trickier to use.

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
| System.Nullable\<NativeArray\<System.UInt64\>\> |             |
