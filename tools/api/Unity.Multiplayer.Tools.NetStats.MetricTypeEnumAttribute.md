---  
id: Unity.Multiplayer.Tools.NetStats.MetricTypeEnumAttribute  
title: Unity.Multiplayer.Tools.NetStats.MetricTypeEnumAttribute  
---

<div class="markdown level0 summary">

Use this attribute to declare an enum that represents custom metrics for
use with the Multiplayer Tools package. In particular, this attribute
can be used to declare custom metrics that can be displayed in the .

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

<div class="level2">

System.Dynamic.ExpandoObject

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

Attribute.GetCustomAttributes(MemberInfo, Type)

</div>

<div>

Attribute.GetCustomAttributes(MemberInfo, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(MemberInfo)

</div>

<div>

Attribute.GetCustomAttributes(MemberInfo, Boolean)

</div>

<div>

Attribute.IsDefined(MemberInfo, Type)

</div>

<div>

Attribute.IsDefined(MemberInfo, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttribute(MemberInfo, Type)

</div>

<div>

Attribute.GetCustomAttribute(MemberInfo, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(ParameterInfo)

</div>

<div>

Attribute.GetCustomAttributes(ParameterInfo, Type)

</div>

<div>

Attribute.GetCustomAttributes(ParameterInfo, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(ParameterInfo, Boolean)

</div>

<div>

Attribute.IsDefined(ParameterInfo, Type)

</div>

<div>

Attribute.IsDefined(ParameterInfo, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttribute(ParameterInfo, Type)

</div>

<div>

Attribute.GetCustomAttribute(ParameterInfo, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(Module, Type)

</div>

<div>

Attribute.GetCustomAttributes(Module)

</div>

<div>

Attribute.GetCustomAttributes(Module, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(Module, Type, Boolean)

</div>

<div>

Attribute.IsDefined(Module, Type)

</div>

<div>

Attribute.IsDefined(Module, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttribute(Module, Type)

</div>

<div>

Attribute.GetCustomAttribute(Module, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(Assembly, Type)

</div>

<div>

Attribute.GetCustomAttributes(Assembly, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttributes(Assembly)

</div>

<div>

Attribute.GetCustomAttributes(Assembly, Boolean)

</div>

<div>

Attribute.IsDefined(Assembly, Type)

</div>

<div>

Attribute.IsDefined(Assembly, Type, Boolean)

</div>

<div>

Attribute.GetCustomAttribute(Assembly, Type)

</div>

<div>

Attribute.GetCustomAttribute(Assembly, Type, Boolean)

</div>

<div>

Attribute.Equals(Object)

</div>

<div>

Attribute.GetHashCode()

</div>

<div>

Attribute.Match(Object)

</div>

<div>

Attribute.IsDefaultAttribute()

</div>

<div>

Attribute.\_Attribute.GetTypeInfoCount(UInt32)

</div>

<div>

Attribute.\_Attribute.GetTypeInfo(UInt32, UInt32, IntPtr)

</div>

<div>

Attribute.\_Attribute.GetIDsOfNames(Guid, IntPtr, UInt32, UInt32,
IntPtr)

</div>

<div>

Attribute.\_Attribute.Invoke(UInt32, Guid, UInt32, Int16, IntPtr,
IntPtr, IntPtr, IntPtr)

</div>

<div>

Attribute.TypeId

</div>

<div>

Object.ToString()

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

<div>

Object.MemberwiseClone()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[AttributeUsage(AttributeTargets.Enum)]
public class MetricTypeEnumAttribute : Attribute, _Attribute
```

## Properties 

### DisplayName

<div class="markdown level1 summary">

The custom display name to use for the metric enum. This can be set to
something different than the name of the enum to provide a nicer display
name in UIs like the inspector.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string DisplayName { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Implements

<div>

System.Runtime.InteropServices.\_Attribute

</div>
