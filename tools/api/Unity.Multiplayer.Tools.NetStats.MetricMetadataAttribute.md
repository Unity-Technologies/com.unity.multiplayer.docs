---
id: Unity.Multiplayer.Tools.NetStats.MetricMetadataAttribute
title: Unity.Multiplayer.Tools.NetStats.MetricMetadataAttribute
---

<div class="markdown level0 summary">

Attribute to provide more information about a metric, such as a custom
name and units.

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

MetricMetadataAttribute

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
[AttributeUsage(AttributeTargets.Field)]
public class MetricMetadataAttribute : Attribute, _Attribute
```

</div>

### Properties

#### DisplayAsPercentage

<div class="markdown level1 summary">

Toggle for the metric to be shown as a percentage. This should only be
used for unitless metrics.

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool DisplayAsPercentage { get; set; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### DisplayName

<div class="markdown level1 summary">

The custom display name to show for a metric.

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string DisplayName { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### MetricKind

<div class="markdown level1 summary">

The kind of metric. By default, the metric is a counter.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public MetricKind MetricKind { get; set; }
```

</div>

##### Property Value

| Type       | Description |
|------------|-------------|
| MetricKind |             |

#### Units

<div class="markdown level1 summary">

The units for the metric. By default, there are no units.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public Units Units { get; set; }
```

</div>

##### Property Value

| Type  | Description |
|-------|-------------|
| Units |             |

### Implements

<div>

System.Runtime.InteropServices.\_Attribute

</div>