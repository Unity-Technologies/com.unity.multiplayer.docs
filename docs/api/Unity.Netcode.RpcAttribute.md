---  
id: Unity.Netcode.RpcAttribute  
title: Unity.Netcode.RpcAttribute  
---

<div class="markdown level0 summary">

Represents the common base class for Rpc attributes.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

System.Attribute

</div>

<div class="level2">

RpcAttribute

</div>

<div class="level3">

ClientRpcAttribute

</div>

<div class="level3">

ServerRpcAttribute

</div>

</div>

<div classs="implements">

##### Implements

<div>

System.Runtime.InteropServices.\_Attribute

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Attribute.Equals(System.Object)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.Assembly,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.Assembly,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.Module,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.Module,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Assembly)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Assembly,
System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Assembly,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Assembly,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo,
System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Module)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Module,
System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Module,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.Module,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo,
System.Boolean)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo,
System.Type)

</div>

<div>

System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo,
System.Type, System.Boolean)

</div>

<div>

System.Attribute.GetHashCode()

</div>

<div>

System.Attribute.IsDefaultAttribute()

</div>

<div>

System.Attribute.IsDefined(System.Reflection.Assembly, System.Type)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.Assembly, System.Type,
System.Boolean)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type,
System.Boolean)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.Module, System.Type)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.Module, System.Type,
System.Boolean)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type)

</div>

<div>

System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type,
System.Boolean)

</div>

<div>

System.Attribute.Match(System.Object)

</div>

<div>

System.Attribute.System.Runtime.InteropServices.\_Attribute.GetIDsOfNames(System.Guid,
System.IntPtr, System.UInt32, System.UInt32, System.IntPtr)

</div>

<div>

System.Attribute.System.Runtime.InteropServices.\_Attribute.GetTypeInfo(System.UInt32,
System.UInt32, System.IntPtr)

</div>

<div>

System.Attribute.System.Runtime.InteropServices.\_Attribute.GetTypeInfoCount(System.UInt32)

</div>

<div>

System.Attribute.System.Runtime.InteropServices.\_Attribute.Invoke(System.UInt32,
System.Guid, System.UInt32, System.Int16, System.IntPtr, System.IntPtr,
System.IntPtr, System.IntPtr)

</div>

<div>

System.Attribute.TypeId

</div>

<div>

System.Object.Equals(System.Object, System.Object)

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
public abstract class RpcAttribute : Attribute, _Attribute
```

</div>

### Fields

#### Delivery

<div class="markdown level1 summary">

Type of RPC delivery method

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RpcDelivery Delivery
```

</div>

##### Field Value

| Type        | Description |
|-------------|-------------|
| RpcDelivery |             |

### Implements

<div>

System.Runtime.InteropServices.\_Attribute

</div>

 
