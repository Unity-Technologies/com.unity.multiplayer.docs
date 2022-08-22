---
id: Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext
title: Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext
---


# Struct ReliableUtility.SharedContext







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
public struct SharedContext
```



### Fields

#### errorCode







##### Declaration


``` lang-csharp
public ReliableUtility.ErrorCodes errorCode
```



##### Field Value

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.ErrorCodes |             |

#### MinimumResendTime







##### Declaration


``` lang-csharp
public int MinimumResendTime
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### ReceivedPackets


Context of received packets, last sequence ID received, and ackmask of
received packets. Acked is not used. This is sent back to the remote
peer in the header when sending.






##### Declaration


``` lang-csharp
public SequenceBufferContext ReceivedPackets
```



##### Field Value

| Type                  | Description |
|-----------------------|-------------|
| SequenceBufferContext |             |

#### RemoteTimerDataOffset







##### Declaration


``` lang-csharp
public int RemoteTimerDataOffset
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RemoteTimerDataStride







##### Declaration


``` lang-csharp
public int RemoteTimerDataStride
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RttInfo







##### Declaration


``` lang-csharp
public ReliableUtility.RTTInfo RttInfo
```



##### Field Value

| Type                    | Description |
|-------------------------|-------------|
| ReliableUtility.RTTInfo |             |

#### SentPackets


Context of sent packets, last sequence ID sent (-1), last ID of our sent
packet acknowledged by remote peer, ackmask of acknowledged packets.
This is used when determining if a resend is needed.






##### Declaration


``` lang-csharp
public SequenceBufferContext SentPackets
```



##### Field Value

| Type                  | Description |
|-----------------------|-------------|
| SequenceBufferContext |             |

#### stats







##### Declaration


``` lang-csharp
public ReliableUtility.Statistics stats
```



##### Field Value

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.Statistics |             |

#### TimerDataOffset







##### Declaration


``` lang-csharp
public int TimerDataOffset
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### TimerDataStride







##### Declaration


``` lang-csharp
public int TimerDataStride
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### WindowSize







##### Declaration


``` lang-csharp
public int WindowSize
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



