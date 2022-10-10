---  
id: Unity.Networking.Transport.NetworkSimulatorParameterExtensions  
title: Unity.Networking.Transport.NetworkSimulatorParameterExtensions  
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
public static class NetworkSimulatorParameterExtensions
```

## 

### ModifyNetworkSimulatorParameters(NetworkDriver, NetworkSimulatorParameter)

<div class="markdown level1 summary">

Modify the parameters of the global network simulator.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ModifyNetworkSimulatorParameters(this NetworkDriver driver, NetworkSimulatorParameter newParams)
```

#### Parameters

| Type                      | Name      | Description                       |
|---------------------------|-----------|-----------------------------------|
| NetworkDriver             | driver    |                                   |
| NetworkSimulatorParameter | newParams | New parameters for the simulator. |

### WithNetworkSimulatorParameters(ref NetworkSettings, Single, Single)

<div class="markdown level1 summary">

Set the global network simulator parameters.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ref NetworkSettings WithNetworkSimulatorParameters(this ref NetworkSettings settings, float receivePacketLossPercent = 0F, float sendPacketLossPercent = 0F)
```

#### Parameters

| Type            | Name                     | Description                             |
|-----------------|--------------------------|-----------------------------------------|
| NetworkSettings | settings                 |                                         |
| System.Single   | receivePacketLossPercent | Percentage of received packets to drop. |
| System.Single   | sendPacketLossPercent    | Percentage of sent packets to drop.     |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |

#### Remarks

<div class="markdown level1 remarks">

This is not the recommended way of configuring simulated network
conditions. See NetworkSimulatorParameter for details.

</div>
