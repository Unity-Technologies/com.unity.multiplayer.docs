---
id: Unity.Networking.Transport.Utilities.ReliableUtility
title: Unity.Networking.Transport.Utilities.ReliableUtility
---


# Struct ReliableUtility







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
public struct ReliableUtility
```



### Fields

#### DefaultMinimumResendTime







##### Declaration


``` lang-csharp
public const int DefaultMinimumResendTime = 64
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaximumResendTime







##### Declaration


``` lang-csharp
public const int MaximumResendTime = 200
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### NullEntry







##### Declaration


``` lang-csharp
public const int NullEntry = -1
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### CalculateProcessingTime(Byte\*, UInt16, Int64)







##### Declaration


``` lang-csharp
public static ushort CalculateProcessingTime(byte *sharedBuffer, ushort sequenceId, long timestamp)
```



##### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |
| System.Int64  | timestamp    |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### GetLocalPacketTimer(Byte\*, UInt16)







##### Declaration


``` lang-csharp
public static ReliableUtility.PacketTimers*GetLocalPacketTimer(byte *sharedBuffer, ushort sequenceId)
```



##### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |

##### Returns

| Type                           | Description |
|--------------------------------|-------------|
| ReliableUtility.PacketTimers\* |             |

#### GetPacket(Byte\*, Int32)







##### Declaration


``` lang-csharp
public static ReliableUtility.Packet*GetPacket(byte *self, int sequence)
```



##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.Byte\* | self     |             |
| System.Int32  | sequence |             |

##### Returns

| Type                     | Description |
|--------------------------|-------------|
| ReliableUtility.Packet\* |             |

#### GetPacketInformation(Byte\*, Int32)







##### Declaration


``` lang-csharp
public static ReliableUtility.PacketInformation*GetPacketInformation(byte *self, int sequence)
```



##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.Byte\* | self     |             |
| System.Int32  | sequence |             |

##### Returns

| Type                                | Description |
|-------------------------------------|-------------|
| ReliableUtility.PacketInformation\* |             |

#### GetRemotePacketTimer(Byte\*, UInt16)







##### Declaration


``` lang-csharp
public static ReliableUtility.PacketTimers*GetRemotePacketTimer(byte *sharedBuffer, ushort sequenceId)
```



##### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |

##### Returns

| Type                           | Description |
|--------------------------------|-------------|
| ReliableUtility.PacketTimers\* |             |

#### InitializeContext(Byte\*, Int32, Byte\*, Int32, Byte\*, Int32, ReliableUtility.Parameters)







##### Declaration


``` lang-csharp
public static ReliableUtility.SharedContext InitializeContext(byte *sharedBuffer, int sharedBufferLength, byte *sendBuffer, int sendBufferLength, byte *recvBuffer, int recvBufferLength, ReliableUtility.Parameters param)
```



##### Parameters

| Type                       | Name               | Description |
|----------------------------|--------------------|-------------|
| System.Byte\*              | sharedBuffer       |             |
| System.Int32               | sharedBufferLength |             |
| System.Byte\*              | sendBuffer         |             |
| System.Int32               | sendBufferLength   |             |
| System.Byte\*              | recvBuffer         |             |
| System.Int32               | recvBufferLength   |             |
| ReliableUtility.Parameters | param              |             |

##### Returns

| Type                          | Description |
|-------------------------------|-------------|
| ReliableUtility.SharedContext |             |

#### InitializeProcessContext(Byte\*, Int32, ReliableUtility.Parameters)







##### Declaration


``` lang-csharp
public static int InitializeProcessContext(byte *buffer, int bufferLength, ReliableUtility.Parameters param)
```



##### Parameters

| Type                       | Name         | Description |
|----------------------------|--------------|-------------|
| System.Byte\*              | buffer       |             |
| System.Int32               | bufferLength |             |
| ReliableUtility.Parameters | param        |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ProcessCapacityNeeded(ReliableUtility.Parameters)







##### Declaration


``` lang-csharp
public static int ProcessCapacityNeeded(ReliableUtility.Parameters param)
```



##### Parameters

| Type                       | Name  | Description |
|----------------------------|-------|-------------|
| ReliableUtility.Parameters | param |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Read(NetworkPipelineContext, ReliableUtility.PacketHeader)


Read header data and update reliability tracking information in the
shared context.

-   If the packets sequence ID is lower than the last received ID+1,
    then it's stale
-   If the packets sequence ID is higher, then we'll process it and
    update tracking info in the shared context






##### Declaration


``` lang-csharp
public static int Read(NetworkPipelineContext context, ReliableUtility.PacketHeader header)
```



##### Parameters

| Type                         | Name    | Description                                                  |
|------------------------------|---------|--------------------------------------------------------------|
| NetworkPipelineContext       | context | Pipeline context, the reliability shared state is used here. |
| ReliableUtility.PacketHeader | header  | Packet header of a new received packet.                      |

##### Returns

| Type         | Description                         |
|--------------|-------------------------------------|
| System.Int32 | Sequence ID of the received packet. |

#### ReadAckPacket(NetworkPipelineContext, ReliableUtility.PacketHeader)







##### Declaration


``` lang-csharp
public static void ReadAckPacket(NetworkPipelineContext context, ReliableUtility.PacketHeader header)
```



##### Parameters

| Type                         | Name    | Description |
|------------------------------|---------|-------------|
| NetworkPipelineContext       | context |             |
| ReliableUtility.PacketHeader | header  |             |

#### Release(Byte\*, Int32)







##### Declaration


``` lang-csharp
public static void Release(byte *self, int sequence)
```



##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.Byte\* | self     |             |
| System.Int32  | sequence |             |

#### Release(Byte\*, Int32, Int32)







##### Declaration


``` lang-csharp
public static void Release(byte *self, int start_sequence, int count)
```



##### Parameters

| Type          | Name           | Description |
|---------------|----------------|-------------|
| System.Byte\* | self           |             |
| System.Int32  | start_sequence |             |
| System.Int32  | count          |             |

#### ReleaseOrResumePackets(NetworkPipelineContext)


Acknowledge the reception of packets which have been sent. The
reliability shared context/state is updated when packets are received
from the other end of the connection. The other side will update it's
ackmask with which packets have been received (starting from last
received sequence ID) each time it sends a packet back. This checks the
resend timers on each non-acknowledged packet and notifies if it's time
to resend yet.






##### Declaration


``` lang-csharp
public static bool ReleaseOrResumePackets(NetworkPipelineContext context)
```



##### Parameters

| Type                   | Name    | Description                                                                 |
|------------------------|---------|-----------------------------------------------------------------------------|
| NetworkPipelineContext | context | Pipeline context, contains the buffer slices this pipeline connection owns. |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ResumeReceive(NetworkPipelineContext, Int32, ref Boolean)


Resume or play back a packet we had received earlier out of order. When
an out of order packet is received it is stored since we need to first
return the packet with the next sequence ID. When that packet finally
arrives it is returned but a pipeline resume is requested since we
already have the next packet stored and it can be processed immediately
after.






##### Declaration


``` lang-csharp
public static InboundRecvBuffer ResumeReceive(NetworkPipelineContext context, int startSequence, ref bool needsResume)
```



##### Parameters

| Type                   | Name          | Description                                                                          |
|------------------------|---------------|--------------------------------------------------------------------------------------|
| NetworkPipelineContext | context       | Pipeline context, we'll use both the shared reliability context and receive context. |
| System.Int32           | startSequence | The first packet which we need to retrieve now, there could be more after that.      |
| System.Boolean         | needsResume   | Indicates if we need the pipeline to resume again.                                   |

##### Returns

| Type              | Description |
|-------------------|-------------|
| InboundRecvBuffer |             |

#### ResumeSend(NetworkPipelineContext, out ReliableUtility.PacketHeader, ref Boolean)


Resend a packet which we have not received an acknowledgement for in
time. Pipeline resume will be enabled if there are more packets which we
need to resend. The send reliability context will then also be updated
to track the next packet we need to resume.






##### Declaration


``` lang-csharp
public static InboundSendBuffer ResumeSend(NetworkPipelineContext context, out ReliableUtility.PacketHeader header, ref bool needsResume)
```



##### Parameters

| Type                         | Name        | Description                                                                       |
|------------------------------|-------------|-----------------------------------------------------------------------------------|
| NetworkPipelineContext       | context     | Pipeline context, we'll use both the shared reliability context and send context. |
| ReliableUtility.PacketHeader | header      | Packet header for the packet payload we're resending.                             |
| System.Boolean               | needsResume | Indicates if a pipeline resume is needed again.                                   |

##### Returns

| Type              | Description                     |
|-------------------|---------------------------------|
| InboundSendBuffer | Buffer slice to packet payload. |

##### Exceptions

| Type                             | Condition |
|----------------------------------|-----------|
| System.InvalidOperationException |           |

#### SetHeaderAndPacket(Byte\*, Int32, ReliableUtility.PacketHeader, InboundSendBuffer, Int64)


Write packet, packet header and tracking information to the given buffer
space. This buffer should contain the reliability Context at the front,
that contains the capacity of the buffer and pointer offsets needed to
find the slots we can copy the packet to.






##### Declaration


``` lang-csharp
public static void SetHeaderAndPacket(byte *self, int sequence, ReliableUtility.PacketHeader header, InboundSendBuffer data, long timestamp)
```



##### Parameters

| Type                         | Name      | Description                                                                   |
|------------------------------|-----------|-------------------------------------------------------------------------------|
| System.Byte\*                | self      | Buffer space where we can store packets.                                      |
| System.Int32                 | sequence  | The sequence ID of the packet, this is used to find a slot inside the buffer. |
| ReliableUtility.PacketHeader | header    | The packet header which we'll store with the packet payload.                  |
| InboundSendBuffer            | data      | The packet data which we're storing.                                          |
| System.Int64                 | timestamp |                                                                               |

##### Exceptions

| Type                     | Condition |
|--------------------------|-----------|
| System.OverflowException |           |

#### SetMinimumResendTime(Int32, NetworkDriver, NetworkPipeline, NetworkConnection)







##### Declaration


``` lang-csharp
public static void SetMinimumResendTime(int value, NetworkDriver driver, NetworkPipeline pipeline, NetworkConnection con)
```



##### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| System.Int32      | value    |             |
| NetworkDriver     | driver   |             |
| NetworkPipeline   | pipeline |             |
| NetworkConnection | con      |             |

#### SetPacket(Byte\*, Int32, Void\*, Int32)







##### Declaration


``` lang-csharp
public static void SetPacket(byte *self, int sequence, void *data, int length)
```



##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.Byte\* | self     |             |
| System.Int32  | sequence |             |
| System.Void\* | data     |             |
| System.Int32  | length   |             |

#### SetPacket(Byte\*, Int32, InboundRecvBuffer)







##### Declaration


``` lang-csharp
public static void SetPacket(byte *self, int sequence, InboundRecvBuffer data)
```



##### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| System.Byte\*     | self     |             |
| System.Int32      | sequence |             |
| InboundRecvBuffer | data     |             |

#### SharedCapacityNeeded(ReliableUtility.Parameters)







##### Declaration


``` lang-csharp
public static int SharedCapacityNeeded(ReliableUtility.Parameters param)
```



##### Parameters

| Type                       | Name  | Description |
|----------------------------|-------|-------------|
| ReliableUtility.Parameters | param |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ShouldSendAck(NetworkPipelineContext)







##### Declaration


``` lang-csharp
public static bool ShouldSendAck(NetworkPipelineContext ctx)
```



##### Parameters

| Type                   | Name | Description |
|------------------------|------|-------------|
| NetworkPipelineContext | ctx  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### StoreReceiveTimestamp(Byte\*, UInt16, Int64, UInt16)







##### Declaration


``` lang-csharp
public static void StoreReceiveTimestamp(byte *sharedBuffer, ushort sequenceId, long timestamp, ushort processingTime)
```



##### Parameters

| Type          | Name           | Description |
|---------------|----------------|-------------|
| System.Byte\* | sharedBuffer   |             |
| System.UInt16 | sequenceId     |             |
| System.Int64  | timestamp      |             |
| System.UInt16 | processingTime |             |

#### StoreRemoteReceiveTimestamp(Byte\*, UInt16, Int64)







##### Declaration


``` lang-csharp
public static void StoreRemoteReceiveTimestamp(byte *sharedBuffer, ushort sequenceId, long timestamp)
```



##### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |
| System.Int64  | timestamp    |             |

#### StoreTimestamp(Byte\*, UInt16, Int64)







##### Declaration


``` lang-csharp
public static void StoreTimestamp(byte *sharedBuffer, ushort sequenceId, long timestamp)
```



##### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |
| System.Int64  | timestamp    |             |

#### TryAquire(Byte\*, Int32)







##### Declaration


``` lang-csharp
public static bool TryAquire(byte *self, int sequence)
```



##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.Byte\* | self     |             |
| System.Int32  | sequence |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Write(NetworkPipelineContext, InboundSendBuffer, ref ReliableUtility.PacketHeader)


Store the packet for possible later resends, and fill in the header
we'll use to send it (populate with sequence ID, last acknowledged ID
from remote with ackmask.






##### Declaration


``` lang-csharp
public static int Write(NetworkPipelineContext context, InboundSendBuffer inboundBuffer, ref ReliableUtility.PacketHeader header)
```



##### Parameters

| Type                         | Name          | Description                                                  |
|------------------------------|---------------|--------------------------------------------------------------|
| NetworkPipelineContext       | context       | Pipeline context, the reliability shared state is used here. |
| InboundSendBuffer            | inboundBuffer | Buffer with packet data.                                     |
| ReliableUtility.PacketHeader | header        | Packet header which will be populated.                       |

##### Returns

| Type         | Description                          |
|--------------|--------------------------------------|
| System.Int32 | Sequence ID assigned to this packet. |

#### WriteAckPacket(NetworkPipelineContext, ref ReliableUtility.PacketHeader)


Write an ack packet, only the packet header is used and this doesn't
advance the sequence ID. The packet is not stored away for resend
routine.






##### Declaration


``` lang-csharp
public static void WriteAckPacket(NetworkPipelineContext context, ref ReliableUtility.PacketHeader header)
```



##### Parameters

| Type                         | Name    | Description                                                  |
|------------------------------|---------|--------------------------------------------------------------|
| NetworkPipelineContext       | context | Pipeline context, the reliability shared state is used here. |
| ReliableUtility.PacketHeader | header  | Packet header which will be populated.                       |



