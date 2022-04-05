---  
id: Unity.Networking.Transport.Utilities.SimulatorUtility  
title: Unity.Networking.Transport.Utilities.SimulatorUtility  
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
public static class SimulatorUtility
```

## 

### FuzzPacket(SimulatorUtility.Context\*, ref SimulatorUtility.Parameters, ref InboundSendBuffer)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void FuzzPacket(SimulatorUtility.Context*ctx, ref SimulatorUtility.Parameters param, ref InboundSendBuffer inboundBuffer)
```

#### Parameters

| Type                        | Name          | Description |
|-----------------------------|---------------|-------------|
| SimulatorUtility.Context\*  | ctx           |             |
| SimulatorUtility.Parameters | param         |             |
| InboundSendBuffer           | inboundBuffer |             |

### GetDelayedPacket(ref NetworkPipelineContext, ref InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool GetDelayedPacket(ref NetworkPipelineContext ctx, ref InboundSendBuffer delayedPacket, ref NetworkPipelineStage.Requests requests, long currentTimestamp)
```

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

### GetEmptyDataSlot(NetworkPipelineContext, Byte\*, ref Int32, ref Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool GetEmptyDataSlot(NetworkPipelineContext ctx, byte *processBufferPtr, ref int packetPayloadOffset, ref int packetDataOffset)
```

#### Parameters

| Type                   | Name                | Description |
|------------------------|---------------------|-------------|
| NetworkPipelineContext | ctx                 |             |
| System.Byte\*          | processBufferPtr    |             |
| System.Int32           | packetPayloadOffset |             |
| System.Int32           | packetDataOffset    |             |

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

``` lang-csharp
public static void InitializeContext(SimulatorUtility.Parameters param, byte *sharedProcessBuffer)
```

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

``` lang-csharp
public static bool ShouldDropPacket(SimulatorUtility.Context*ctx, SimulatorUtility.Parameters param, long timestamp)
```

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

### ShouldDuplicatePacket(SimulatorUtility.Context\*, ref SimulatorUtility.Parameters)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool ShouldDuplicatePacket(SimulatorUtility.Context*ctx, ref SimulatorUtility.Parameters param)
```

#### Parameters

| Type                        | Name  | Description |
|-----------------------------|-------|-------------|
| SimulatorUtility.Context\*  | ctx   |             |
| SimulatorUtility.Parameters | param |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### TryDelayPacket(ref NetworkPipelineContext, ref SimulatorUtility.Parameters, ref InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)

<div class="markdown level1 summary">

Storing it twice will trigger a resend.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool TryDelayPacket(ref NetworkPipelineContext ctx, ref SimulatorUtility.Parameters param, ref InboundSendBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, long timestamp)
```

#### Parameters

| Type                          | Name          | Description |
|-------------------------------|---------------|-------------|
| NetworkPipelineContext        | ctx           |             |
| SimulatorUtility.Parameters   | param         |             |
| InboundSendBuffer             | inboundBuffer |             |
| NetworkPipelineStage.Requests | requests      |             |
| System.Int64                  | timestamp     |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### TrySkipDelayingPacket(ref SimulatorUtility.Parameters, ref NetworkPipelineStage.Requests, SimulatorUtility.Context\*)

<div class="markdown level1 summary">

Optimization. We want to skip TryDelayPacket(ref NetworkPipelineContext,
ref SimulatorUtility.Parameters, ref InboundSendBuffer, ref
NetworkPipelineStage.Requests, Int64) in the case where we have no delay
to avoid mem-copies. Also ensures requests are updated if there are
other packets in the store.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool TrySkipDelayingPacket(ref SimulatorUtility.Parameters param, ref NetworkPipelineStage.Requests requests, SimulatorUtility.Context*simCtx)
```

#### Parameters

| Type                          | Name     | Description |
|-------------------------------|----------|-------------|
| SimulatorUtility.Parameters   | param    |             |
| NetworkPipelineStage.Requests | requests |             |
| SimulatorUtility.Context\*    | simCtx   |             |

#### Returns

| Type           | Description                               |
|----------------|-------------------------------------------|
| System.Boolean | True if we can skip delaying this packet. |
