---  
id: Unity.Networking.Transport.IPCNetworkInterface  
title: Unity.Networking.Transport.IPCNetworkInterface  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkInterface

</div>

<div>

System.IDisposable

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
public struct IPCNetworkInterface : INetworkInterface, IDisposable
```

## 

### LocalEndPoint

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkInterfaceEndPoint LocalEndPoint { get; }
```

#### Property Value

| Type                     | Description |
|--------------------------|-------------|
| NetworkInterfaceEndPoint |             |

## 

### Bind(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Bind(NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description |
|--------------------------|----------|-------------|
| NetworkInterfaceEndPoint | endpoint |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### CreateInterfaceEndPoint(NetworkEndPoint, out NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CreateInterfaceEndPoint(NetworkEndPoint address, out NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description |
|--------------------------|----------|-------------|
| NetworkEndPoint          | address  |             |
| NetworkInterfaceEndPoint | endpoint |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### CreateSendInterface()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkSendInterface CreateSendInterface()
```

#### Returns

| Type                 | Description |
|----------------------|-------------|
| NetworkSendInterface |             |

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### GetGenericEndPoint(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint GetGenericEndPoint(NetworkInterfaceEndPoint endpoint)
```

#### Parameters

| Type                     | Name     | Description |
|--------------------------|----------|-------------|
| NetworkInterfaceEndPoint | endpoint |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### Initialize(NetworkSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Initialize(NetworkSettings settings)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Listen()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Listen()
```

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ScheduleReceive(NetworkPacketReceiver, JobHandle)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleReceive(NetworkPacketReceiver receiver, JobHandle dep)
```

#### Parameters

| Type                  | Name     | Description |
|-----------------------|----------|-------------|
| NetworkPacketReceiver | receiver |             |
| JobHandle             | dep      |             |

#### Returns

| Type      | Description |
|-----------|-------------|
| JobHandle |             |

### ScheduleSend(NativeQueue\&lt;QueuedSendMessage&gt;, JobHandle)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public JobHandle ScheduleSend(NativeQueue<QueuedSendMessage> sendQueue, JobHandle dep)
```

#### Parameters

| Type                             | Name      | Description |
|----------------------------------|-----------|-------------|
| NativeQueue\&lt;QueuedSendMessage&gt; | sendQueue |             |
| JobHandle                        | dep       |             |

#### Returns

| Type      | Description |
|-----------|-------------|
| JobHandle |             |

### Implements

<div>

INetworkInterface

</div>

<div>

System.IDisposable

</div>
