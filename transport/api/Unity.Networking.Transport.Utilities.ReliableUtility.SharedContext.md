---  
id: Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext  
title: Unity.Networking.Transport.Utilities.ReliableUtility.SharedContext  
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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct SharedContext
```

## 

### errorCode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ReliableUtility.ErrorCodes errorCode
```

#### Field Value

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.ErrorCodes |             |

### MinimumResendTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int MinimumResendTime
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReceivedPackets

<div class="markdown level1 summary">

Context of received packets, last sequence ID received, and ackmask of
received packets. Acked is not used. This is sent back to the remote
peer in the header when sending.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SequenceBufferContext ReceivedPackets
```

#### Field Value

| Type                  | Description |
|-----------------------|-------------|
| SequenceBufferContext |             |

### RemoteTimerDataOffset

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int RemoteTimerDataOffset
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### RemoteTimerDataStride

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int RemoteTimerDataStride
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### RttInfo

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ReliableUtility.RTTInfo RttInfo
```

#### Field Value

| Type                    | Description |
|-------------------------|-------------|
| ReliableUtility.RTTInfo |             |

### SentPackets

<div class="markdown level1 summary">

Context of sent packets, last sequence ID sent (-1), last ID of our sent
packet acknowledged by remote peer, ackmask of acknowledged packets.
This is used when determining if a resend is needed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SequenceBufferContext SentPackets
```

#### Field Value

| Type                  | Description |
|-----------------------|-------------|
| SequenceBufferContext |             |

### stats

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ReliableUtility.Statistics stats
```

#### Field Value

| Type                       | Description |
|----------------------------|-------------|
| ReliableUtility.Statistics |             |

### TimerDataOffset

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int TimerDataOffset
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### TimerDataStride

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int TimerDataStride
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### WindowSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int WindowSize
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
