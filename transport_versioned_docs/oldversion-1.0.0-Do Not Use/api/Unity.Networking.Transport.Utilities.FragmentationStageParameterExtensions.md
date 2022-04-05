---  
id: Unity.Networking.Transport.Utilities.FragmentationStageParameterExtensions  
title: Unity.Networking.Transport.Utilities.FragmentationStageParameterExtensions  
---

<div class="markdown level0 summary">

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

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

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

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class FragmentationStageParameterExtensions
```

## 

### GetFragmentationStageParameters(ref NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static FragmentationUtility.Parameters GetFragmentationStageParameters(this ref NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

#### Returns

| Type                            | Description |
|---------------------------------|-------------|
| FragmentationUtility.Parameters |             |

### WithFragmentationStageParameters(ref NetworkSettings, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ref NetworkSettings WithFragmentationStageParameters(this ref NetworkSettings settings, int payloadCapacity = 4096)
```

#### Parameters

| Type            | Name            | Description |
|-----------------|-----------------|-------------|
| NetworkSettings | settings        |             |
| System.Int32    | payloadCapacity |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |
