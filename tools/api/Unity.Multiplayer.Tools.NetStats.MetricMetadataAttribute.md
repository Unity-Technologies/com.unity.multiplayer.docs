---
id: Unity.Multiplayer.Tools.NetStats.MetricMetadataAttribute
title: Unity.Multiplayer.Tools.NetStats.MetricMetadataAttribute
---





# Class MetricMetadataAttribute



Attribute to provide more information about a metric, such as a custom
name and units.









##### Inheritance



System.Object





System.Attribute





MetricMetadataAttribute







##### Implements



System.Runtime.InteropServices.\_Attribute







##### Inherited Members



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





###### **Namespace**: Unity.Multiplayer.Tools.NetStats

###### **Assembly**: Tools.dll

##### Syntax



``` lang-csharp
[AttributeUsage(AttributeTargets.Field)]
public class MetricMetadataAttribute : Attribute, _Attribute
```



### Properties

#### DisplayAsPercentage



Toggle for the metric to be shown as a percentage. This should only be
used for unitless metrics.







##### Declaration



``` lang-csharp
public bool DisplayAsPercentage { get; set; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### DisplayName



The custom display name to show for a metric.







##### Declaration



``` lang-csharp
public string DisplayName { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### MetricKind



The kind of metric. By default, the metric is a counter.







##### Declaration



``` lang-csharp
public MetricKind MetricKind { get; set; }
```



##### Property Value

| Type       | Description |
|------------|-------------|
| MetricKind |             |

#### Units



The units for the metric. By default, there are no units.







##### Declaration



``` lang-csharp
public Units Units { get; set; }
```



##### Property Value

| Type  | Description |
|-------|-------------|
| Units |             |

### Implements



System.Runtime.InteropServices.\_Attribute


