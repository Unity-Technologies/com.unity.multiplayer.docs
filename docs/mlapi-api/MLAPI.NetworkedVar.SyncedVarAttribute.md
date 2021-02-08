---  
id: MLAPI.NetworkedVar.SyncedVarAttribute  
title: MLAPI.NetworkedVar.SyncedVarAttribute  
---

<div class="markdown level0 summary" markdown="1">

SyncedVar attribute. Use this to automatically syncronize fields from
the server to clients.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

System.Runtime.InteropServices.\_Attribute

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Attribute.Equals(Object)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(Assembly, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(Assembly, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(MemberInfo, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(MemberInfo, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(Module, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(Module, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(ParameterInfo, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttribute(ParameterInfo, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Assembly)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Assembly, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Assembly, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Assembly, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(MemberInfo)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(MemberInfo, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(MemberInfo, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(MemberInfo, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Module)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Module, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Module, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(Module, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(ParameterInfo)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(ParameterInfo, Boolean)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(ParameterInfo, Type)

</div>

<div markdown="1">

Attribute.GetCustomAttributes(ParameterInfo, Type, Boolean)

</div>

<div markdown="1">

Attribute.GetHashCode()

</div>

<div markdown="1">

Attribute.IsDefaultAttribute()

</div>

<div markdown="1">

Attribute.IsDefined(Assembly, Type)

</div>

<div markdown="1">

Attribute.IsDefined(Assembly, Type, Boolean)

</div>

<div markdown="1">

Attribute.IsDefined(MemberInfo, Type)

</div>

<div markdown="1">

Attribute.IsDefined(MemberInfo, Type, Boolean)

</div>

<div markdown="1">

Attribute.IsDefined(Module, Type)

</div>

<div markdown="1">

Attribute.IsDefined(Module, Type, Boolean)

</div>

<div markdown="1">

Attribute.IsDefined(ParameterInfo, Type)

</div>

<div markdown="1">

Attribute.IsDefined(ParameterInfo, Type, Boolean)

</div>

<div markdown="1">

Attribute.Match(Object)

</div>

<div markdown="1">

Attribute.\_Attribute.GetIDsOfNames(Guid, IntPtr, UInt32, UInt32,
IntPtr)

</div>

<div markdown="1">

Attribute.\_Attribute.GetTypeInfo(UInt32, UInt32, IntPtr)

</div>

<div markdown="1">

Attribute.\_Attribute.GetTypeInfoCount(UInt32)

</div>

<div markdown="1">

Attribute.\_Attribute.Invoke(UInt32, Guid, UInt32, Int16, IntPtr,
IntPtr, IntPtr, IntPtr)

</div>

<div markdown="1">

Attribute.TypeId

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_NetworkedVar_SyncedVarAttribute_syntax]

    [AttributeUsage(AttributeTargets.Field, Inherited = true, AllowMultiple = false)]
    public class SyncedVarAttribute : Attribute, _Attribute

## Fields

### Channel [MLAPI_NetworkedVar_SyncedVarAttribute_Channel]

<div class="markdown level1 summary" markdown="1">

The channel to send changes on.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public string Channel

#### Field Value [field-value]

| Type          | Description |
|---------------|-------------|
| System.String |             |

### SendTickrate [MLAPI_NetworkedVar_SyncedVarAttribute_SendTickrate]

<div class="markdown level1 summary" markdown="1">

The maximum times per second this var will be synced. A value of 0 will
cause the variable to sync as soon as possible after being changed. A
value of less than 0 will cause the variable to sync only at once at
spawn and not update again.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public float SendTickrate

#### Field Value [field-value-1]

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### Implements [implements]

<div markdown="1">

System.Runtime.InteropServices.\_Attribute

</div>
