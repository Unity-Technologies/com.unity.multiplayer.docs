---  
id: Unity.Multiplayer.Tools.NetStats.MetricIdTypeLibrary  
title: Unity.Multiplayer.Tools.NetStats.MetricIdTypeLibrary  
---

<div class="markdown level0 summary">

For internal use. Static class to register MetricId and make them
available to all tools.

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

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetHashCode()

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
public static class MetricIdTypeLibrary
```

##### **Remarks**

<div class="markdown level0 remarks">

There is no need to manually call this class for custom type as they are
automatically registered through CodeGen if they are marked with
MetricTypeEnumAttribute.

</div>

## Methods 

### RegisterType\<TEnumType\>()

<div class="markdown level1 summary">

For internal use. Register an enum type to be used as a MetricId.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void RegisterType<TEnumType>()
```

#### Type Parameters

| Name      | Description                |
|-----------|----------------------------|
| TEnumType | The enum type to register. |
