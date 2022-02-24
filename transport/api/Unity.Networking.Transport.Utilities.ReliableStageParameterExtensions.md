---  
id: Unity.Networking.Transport.Utilities.ReliableStageParameterExtensions  
title: Unity.Networking.Transport.Utilities.ReliableStageParameterExtensions  
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
public static class ReliableStageParameterExtensions
```

## 

### GetReliableStageParameters(ref NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ReliableUtility.Parameters GetReliableStageParameters(this ref NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

#### Returns

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.Parameters |             |

### WithReliableStageParameters(ref NetworkSettings, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ref NetworkSettings WithReliableStageParameters(this ref NetworkSettings settings, int windowSize = 32)
```

#### Parameters

| Type            | Name       | Description |
|-----------------|------------|-------------|
| NetworkSettings | settings   |             |
| System.Int32    | windowSize |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |
