---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPresetAsset  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPresetAsset  
---

<div class="markdown level0 summary">

ScriptableObject used to store the parameters to configure and simulate
network conditions.

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

<div classs="implements">

##### Implements

<div>

INetworkSimulatorPreset

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public class NetworkSimulatorPresetAsset : ScriptableObject, INetworkSimulatorPreset
```

## Properties 

### Description

<div class="markdown level1 summary">

Optional description of the configuration.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Description { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Name

<div class="markdown level1 summary">

Network simulation configuration name.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Name { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### PacketDelayMs

<div class="markdown level1 summary">

Value for the delay between packet in milliseconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketDelayMs { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketJitterMs

<div class="markdown level1 summary">

Value for the network jitter (variance) in milliseconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketJitterMs { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketLossInterval

<div class="markdown level1 summary">

Value for at which interval packet are dropped This value is a drop
every X packet, not in time.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketLossInterval { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketLossPercent

<div class="markdown level1 summary">

Value for the average percentage of packet are dropped.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketLossPercent { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### Create(String, String, Int32, Int32, Int32, Int32)

<div class="markdown level1 summary">

Utility function to create a configuration at runtime.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkSimulatorPresetAsset Create(string name, string description = "", int packetDelayMs = 0, int packetJitterMs = 0, int packetLossInterval = 0, int packetLossPercent = 0)
```

#### Parameters

| Type          | Name               | Description                                   |
|---------------|--------------------|-----------------------------------------------|
| System.String | name               | Name of the configuration.                    |
| System.String | description        | Description of the configuration.             |
| System.Int32  | packetDelayMs      | Value for the packet delay in milliseconds.   |
| System.Int32  | packetJitterMs     | Value for the network jitter in milliseconds. |
| System.Int32  | packetLossInterval | Value for the packet loss interval.           |
| System.Int32  | packetLossPercent  | Value for the packet loss percentage.         |

#### Returns

| Type                        | Description                       |
|-----------------------------|-----------------------------------|
| NetworkSimulatorPresetAsset | A valid simulation configuration. |

### Implements

<div>

INetworkSimulatorPreset

</div>
