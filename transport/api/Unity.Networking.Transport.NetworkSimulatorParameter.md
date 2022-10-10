---  
id: Unity.Networking.Transport.NetworkSimulatorParameter  
title: Unity.Networking.Transport.NetworkSimulatorParameter  
---

<div class="markdown level0 summary">

Parameters for the global network simulator.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkParameter

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkSimulatorParameter : INetworkParameter
```

##### **Remarks**

<div class="markdown level0 remarks">

These parameters are for the global network simulator, which applies to
all traffic going through a NetworkDriver (including control traffic).
For the parameters of SimulatorPipelineStage, refer to
SimulatorUtility.Parameters.

We recommend using SimulatorPipelineStage to simulate network conditions
as it has more features than the global one (which is only intended for
specialized use cases).

</div>

## 

### ReceivePacketLossPercent

<div class="markdown level1 summary">

Percentage of received packets to drop (0-100).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float ReceivePacketLossPercent
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### SendPacketLossPercent

<div class="markdown level1 summary">

Percentage of sent packets to drop (0-100).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float SendPacketLossPercent
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

## 

### Validate()

<div class="markdown level1 summary">

Validate the network simulator parameters.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Validate()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

INetworkParameter

</div>
