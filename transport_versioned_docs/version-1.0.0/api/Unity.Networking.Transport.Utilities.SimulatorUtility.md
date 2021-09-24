---  
id: Unity.Networking.Transport.Utilities.SimulatorUtility  
title: Unity.Networking.Transport.Utilities.SimulatorUtility  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

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

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct SimulatorUtility

## Constructors 

### SimulatorUtility(Int32, Int32, Int32, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public SimulatorUtility(int packetCount, int maxPacketSize, int packetDelayMs, int packetJitterMs)

#### Parameters

| Type         | Name           | Description |
|--------------|----------------|-------------|
| System.Int32 | packetCount    |             |
| System.Int32 | maxPacketSize  |             |
| System.Int32 | packetDelayMs  |             |
| System.Int32 | packetJitterMs |             |

## Methods 

### DelayPacket(ref NetworkPipelineContext, InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool DelayPacket(ref NetworkPipelineContext ctx, InboundSendBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, long timestamp)

#### Parameters

| Type                          | Name          | Description |
|-------------------------------|---------------|-------------|
| NetworkPipelineContext        | ctx           |             |
| InboundSendBuffer             | inboundBuffer |             |
| NetworkPipelineStage.Requests | requests      |             |
| System.Int64                  | timestamp     |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### FuzzPacket(SimulatorUtility.Context\*, ref InboundSendBuffer)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void FuzzPacket(SimulatorUtility.Context*ctx, ref InboundSendBuffer inboundBuffer)

#### Parameters

| Type                       | Name          | Description |
|----------------------------|---------------|-------------|
| SimulatorUtility.Context\* | ctx           |             |
| InboundSendBuffer          | inboundBuffer |             |

### GetDelayedPacket(ref NetworkPipelineContext, ref InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool GetDelayedPacket(ref NetworkPipelineContext ctx, ref InboundSendBuffer delayedPacket, ref NetworkPipelineStage.Requests requests, long currentTimestamp)

#### Parameters

| Type                          | Name             | Description |
|-------------------------------|------------------|-------------|
| NetworkPipelineContext        | ctx              |             |
| InboundSendBuffer             | delayedPacket    |             |
| NetworkPipelineStage.Requests | requests         |             |
| System.Int64                  | currentTimestamp |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### GetEmptyDataSlot(Byte\*, ref Int32, ref Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool GetEmptyDataSlot(byte *processBufferPtr, ref int packetPayloadOffset, ref int packetDataOffset)

#### Parameters

| Type          | Name                | Description |
|---------------|---------------------|-------------|
| System.Byte\* | processBufferPtr    |             |
| System.Int32  | packetPayloadOffset |             |
| System.Int32  | packetDataOffset    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### InitializeContext(SimulatorUtility.Parameters, Byte\*)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void InitializeContext(SimulatorUtility.Parameters param, byte *sharedProcessBuffer)

#### Parameters

| Type                        | Name                | Description |
|-----------------------------|---------------------|-------------|
| SimulatorUtility.Parameters | param               |             |
| System.Byte\*               | sharedProcessBuffer |             |

### ShouldDropPacket(SimulatorUtility.Context\*, SimulatorUtility.Parameters, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool ShouldDropPacket(SimulatorUtility.Context*ctx, SimulatorUtility.Parameters param, long timestamp)

#### Parameters

| Type                        | Name      | Description |
|-----------------------------|-----------|-------------|
| SimulatorUtility.Context\*  | ctx       |             |
| SimulatorUtility.Parameters | param     |             |
| System.Int64                | timestamp |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
