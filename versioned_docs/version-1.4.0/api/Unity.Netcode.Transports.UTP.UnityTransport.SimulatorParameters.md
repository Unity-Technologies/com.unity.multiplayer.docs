---
id: Unity.Netcode.Transports.UTP.UnityTransport.SimulatorParameters
title: Unity.Netcode.Transports.UTP.UnityTransport.SimulatorParameters
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:38:50 pm
---

<div class="markdown level0 summary">

Parameters for the Network Simulator

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

## Inherited Members

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

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetType()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
[Serializable]
public struct SimulatorParameters
```

## Fields

### PacketDelayMS

<div class="markdown level1 summary">

Delay to add to every send and received packet (in milliseconds). Only

applies in the editor and in development builds. The value is ignored in

production builds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketDelayMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketDropRate

<div class="markdown level1 summary">

Percentage of sent and received packets to drop. Only applies in the

editor and in the editor and in developments builds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketDropRate
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketJitterMS

<div class="markdown level1 summary">

Jitter (random variation) to add/substract to the packet delay (in

milliseconds). Only applies in the editor and in development builds. The

value is ignored in production builds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketJitterMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
