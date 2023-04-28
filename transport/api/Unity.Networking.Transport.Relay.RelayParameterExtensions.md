---  
id: Unity.Networking.Transport.Relay.RelayParameterExtensions  
title: Unity.Networking.Transport.Relay.RelayParameterExtensions  
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
public static class RelayParameterExtensions
```

## 

### GetRelayParameters(ref NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayNetworkParameter GetRelayParameters(this ref NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

#### Returns

| Type                  | Description |
|-----------------------|-------------|
| RelayNetworkParameter |             |

### WithRelayParameters(ref NetworkSettings, ref RelayServerData, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ref NetworkSettings WithRelayParameters(this ref NetworkSettings settings, ref RelayServerData serverData, int relayConnectionTimeMS = 9000)
```

#### Parameters

| Type            | Name                  | Description |
|-----------------|-----------------------|-------------|
| NetworkSettings | settings              |             |
| RelayServerData | serverData            |             |
| System.Int32    | relayConnectionTimeMS |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |
