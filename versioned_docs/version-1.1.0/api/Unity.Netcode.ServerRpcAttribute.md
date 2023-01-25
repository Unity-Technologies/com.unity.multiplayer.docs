---
id: Unity.Netcode.ServerRpcAttribute
title: Unity.Netcode.ServerRpcAttribute
---

# Class ServerRpcAttribute


Marks a method as ServerRpc.

A ServerRpc marked method will be fired by a client but executed on the
server.







##### Inheritance


System.Object




System.Attribute




RpcAttribute




ServerRpcAttribute






##### Implements



System.Runtime.InteropServices.\_Attribute






##### Inherited Members



RpcAttribute.Delivery





System.Attribute.Equals(System.Object)





System.Attribute.GetCustomAttribute(System.Reflection.Assembly,
System.Type)





System.Attribute.GetCustomAttribute(System.Reflection.Assembly,
System.Type, System.Boolean)





System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo,
System.Type)





System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo,
System.Type, System.Boolean)





System.Attribute.GetCustomAttribute(System.Reflection.Module,
System.Type)





System.Attribute.GetCustomAttribute(System.Reflection.Module,
System.Type, System.Boolean)





System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo,
System.Type)





System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo,
System.Type, System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.Assembly)





System.Attribute.GetCustomAttributes(System.Reflection.Assembly,
System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.Assembly,
System.Type)





System.Attribute.GetCustomAttributes(System.Reflection.Assembly,
System.Type, System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo)





System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo,
System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo,
System.Type)





System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo,
System.Type, System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.Module)





System.Attribute.GetCustomAttributes(System.Reflection.Module,
System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.Module,
System.Type)





System.Attribute.GetCustomAttributes(System.Reflection.Module,
System.Type, System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo)





System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo,
System.Boolean)





System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo,
System.Type)





System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo,
System.Type, System.Boolean)





System.Attribute.GetHashCode()





System.Attribute.IsDefaultAttribute()





System.Attribute.IsDefined(System.Reflection.Assembly, System.Type)





System.Attribute.IsDefined(System.Reflection.Assembly, System.Type,
System.Boolean)





System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type)





System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type,
System.Boolean)





System.Attribute.IsDefined(System.Reflection.Module, System.Type)





System.Attribute.IsDefined(System.Reflection.Module, System.Type,
System.Boolean)





System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type)





System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type,
System.Boolean)





System.Attribute.Match(System.Object)





System.Attribute.System.Runtime.InteropServices.\_Attribute.GetIDsOfNames(System.Guid,
System.IntPtr, System.UInt32, System.UInt32, System.IntPtr)





System.Attribute.System.Runtime.InteropServices.\_Attribute.GetTypeInfo(System.UInt32,
System.UInt32, System.IntPtr)





System.Attribute.System.Runtime.InteropServices.\_Attribute.GetTypeInfoCount(System.UInt32)





System.Attribute.System.Runtime.InteropServices.\_Attribute.Invoke(System.UInt32,
System.Guid, System.UInt32, System.Int16, System.IntPtr, System.IntPtr,
System.IntPtr, System.IntPtr)





System.Attribute.TypeId





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
[AttributeUsage(AttributeTargets.Method)]
public class ServerRpcAttribute : RpcAttribute, _Attribute
```



### Fields

#### RequireOwnership


Whether or not the ServerRpc should only be run if executed by the owner
of the object






##### Declaration


``` lang-csharp
public bool RequireOwnership
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



System.Runtime.InteropServices.\_Attribute





