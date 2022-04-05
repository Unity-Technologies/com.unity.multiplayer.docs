---  
id: Unity.Networking.Transport.BaselibNetworkParameterExtensions  
title: Unity.Networking.Transport.BaselibNetworkParameterExtensions  
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
public static class BaselibNetworkParameterExtensions
```

## 

### GetBaselibNetworkInterfaceParameters(ref NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static BaselibNetworkParameter GetBaselibNetworkInterfaceParameters(this ref NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

#### Returns

| Type                    | Description |
|-------------------------|-------------|
| BaselibNetworkParameter |             |

### WithBaselibNetworkInterfaceParameters(ref NetworkSettings, Int32, Int32, UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ref NetworkSettings WithBaselibNetworkInterfaceParameters(this ref NetworkSettings settings, int receiveQueueCapacity = 64, int sendQueueCapacity = 64, uint maximumPayloadSize = 2000U)
```

#### Parameters

| Type            | Name                 | Description |
|-----------------|----------------------|-------------|
| NetworkSettings | settings             |             |
| System.Int32    | receiveQueueCapacity |             |
| System.Int32    | sendQueueCapacity    |             |
| System.UInt32   | maximumPayloadSize   |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |
