---
id: Unity.Netcode.ClientRpcSendParams
title: Unity.Netcode.ClientRpcSendParams
---

# Struct ClientRpcSendParams


Client-Side RPC The send parameters, when sending client RPCs, provides
you wil the ability to target specific clients as a managed or unmanaged
list: TargetClientIds and TargetClientIdsNativeArray







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct ClientRpcSendParams
```



### Fields

#### TargetClientIds


IEnumerable version of target id list - use either this OR
TargetClientIdsNativeArray Note: Even if you provide a value type such
as NativeArray, enumerating it will cause boxing. If you want to avoid
boxing, use TargetClientIdsNativeArray






##### Declaration


``` lang-csharp
public IReadOnlyList<ulong> TargetClientIds
```



##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<System.UInt64\> |             |

#### TargetClientIdsNativeArray


NativeArray version of target id list - use either this OR
TargetClientIds This option avoids any GC allocations but is a bit
trickier to use.






##### Declaration


``` lang-csharp
public NativeArray<ulong>? TargetClientIdsNativeArray
```



##### Field Value

| Type                                            | Description |
|-------------------------------------------------|-------------|
| System.Nullable\<NativeArray\<System.UInt64\>\> |             |



