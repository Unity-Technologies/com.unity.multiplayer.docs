---
id: Unity.Networking.Transport.Utilities.SimulatorUtility
title: Unity.Networking.Transport.Utilities.SimulatorUtility
---


# Struct SimulatorUtility







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport.Utilities

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct SimulatorUtility
```



### Constructors

#### SimulatorUtility(Int32, Int32, Int32, Int32)







##### Declaration


``` lang-csharp
public SimulatorUtility(int packetCount, int maxPacketSize, int packetDelayMs, int packetJitterMs)
```



##### Parameters

| Type         | Name           | Description |
|--------------|----------------|-------------|
| System.Int32 | packetCount    |             |
| System.Int32 | maxPacketSize  |             |
| System.Int32 | packetDelayMs  |             |
| System.Int32 | packetJitterMs |             |

### Methods

#### DelayPacket(ref NetworkPipelineContext, InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)







##### Declaration


``` lang-csharp
public bool DelayPacket(ref NetworkPipelineContext ctx, InboundSendBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, long timestamp)
```



##### Parameters

| Type                          | Name          | Description |
|-------------------------------|---------------|-------------|
| NetworkPipelineContext        | ctx           |             |
| InboundSendBuffer             | inboundBuffer |             |
| NetworkPipelineStage.Requests | requests      |             |
| System.Int64                  | timestamp     |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### FuzzPacket(SimulatorUtility.Context\*, ref InboundSendBuffer)







##### Declaration


``` lang-csharp
public void FuzzPacket(SimulatorUtility.Context*ctx, ref InboundSendBuffer inboundBuffer)
```



##### Parameters

| Type                       | Name          | Description |
|----------------------------|---------------|-------------|
| SimulatorUtility.Context\* | ctx           |             |
| InboundSendBuffer          | inboundBuffer |             |

#### GetDelayedPacket(ref NetworkPipelineContext, ref InboundSendBuffer, ref NetworkPipelineStage.Requests, Int64)







##### Declaration


``` lang-csharp
public bool GetDelayedPacket(ref NetworkPipelineContext ctx, ref InboundSendBuffer delayedPacket, ref NetworkPipelineStage.Requests requests, long currentTimestamp)
```



##### Parameters

| Type                          | Name             | Description |
|-------------------------------|------------------|-------------|
| NetworkPipelineContext        | ctx              |             |
| InboundSendBuffer             | delayedPacket    |             |
| NetworkPipelineStage.Requests | requests         |             |
| System.Int64                  | currentTimestamp |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### GetEmptyDataSlot(Byte\*, ref Int32, ref Int32)







##### Declaration


``` lang-csharp
public bool GetEmptyDataSlot(byte *processBufferPtr, ref int packetPayloadOffset, ref int packetDataOffset)
```



##### Parameters

| Type          | Name                | Description |
|---------------|---------------------|-------------|
| System.Byte\* | processBufferPtr    |             |
| System.Int32  | packetPayloadOffset |             |
| System.Int32  | packetDataOffset    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### InitializeContext(SimulatorUtility.Parameters, Byte\*)







##### Declaration


``` lang-csharp
public static void InitializeContext(SimulatorUtility.Parameters param, byte *sharedProcessBuffer)
```



##### Parameters

| Type                        | Name                | Description |
|-----------------------------|---------------------|-------------|
| SimulatorUtility.Parameters | param               |             |
| System.Byte\*               | sharedProcessBuffer |             |

#### ShouldDropPacket(SimulatorUtility.Context\*, SimulatorUtility.Parameters, Int64)







##### Declaration


``` lang-csharp
public bool ShouldDropPacket(SimulatorUtility.Context*ctx, SimulatorUtility.Parameters param, long timestamp)
```



##### Parameters

| Type                        | Name      | Description |
|-----------------------------|-----------|-------------|
| SimulatorUtility.Context\*  | ctx       |             |
| SimulatorUtility.Parameters | param     |             |
| System.Int64                | timestamp |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |



