---
id: Unity.Multiplayer.Tools.NetStats.MetricIdTypeLibrary
title: Unity.Multiplayer.Tools.NetStats.MetricIdTypeLibrary
---

<div class="markdown level0 summary">

For internal use. Static class to register MetricId and make them
available to all tools.

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

MetricIdTypeLibrary

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

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
public static class MetricIdTypeLibrary
```

</div>

##### **Remarks**

<div class="markdown level0 remarks">

There is no need to manually call this class for custom type as they are
automatically registered through CodeGen if they are marked with
MetricTypeEnumAttribute.

</div>

### Methods

#### RegisterType\<TEnumType\>()

<div class="markdown level1 summary">

For internal use. Register an enum type to be used as a MetricId.

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void RegisterType<TEnumType>()
```

</div>

##### Type Parameters

| Name      | Description                |
|-----------|----------------------------|
| TEnumType | The enum type to register. |
