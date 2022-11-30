---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.INetworkSimulatorPreset  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.INetworkSimulatorPreset  
---

<div class="markdown level0 summary">

Aggregates configuration values used as presets for the network
simulator.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public interface INetworkSimulatorPreset
```

## Properties 

### Description

<div class="markdown level1 summary">

A description for the preset, usually explaining the real-world
situation that the preset is attempting to re-create.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
string Description { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Name

<div class="markdown level1 summary">

The name of the preset.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
string Name { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### PacketDelayMs

<div class="markdown level1 summary">

Fixed delay to apply to all packets which pass through.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int PacketDelayMs { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketJitterMs

<div class="markdown level1 summary">

Variable delay to apply to all packets which pass through, adds or
subtracts amount from fixed delay.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int PacketJitterMs { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketLossInterval

<div class="markdown level1 summary">

Fixed interval to drop packets on. This is most suitable for tests where
predictable behaviour is desired, every Xth packet will be dropped. E.g.
If PacketLossInterval is 5 every 5th packet is dropped.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int PacketLossInterval { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketLossPercent

<div class="markdown level1 summary">

0 - 100, denotes the percentage of packets that will be dropped. E.g.
"5" means approximately every 20th packet will be dropped.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int PacketLossPercent { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
